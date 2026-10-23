"use server";

import { headers } from "next/headers";
import { site } from "./site";

// Form submissions are emailed through Brevo with the templates in emails/brevo.
// Needs BREVO_API_KEY in the server environment (.env.local when running locally).
const NOTIFICATION_TEMPLATE = 1; // to the lab team, reply-to the visitor
const CONFIRMATION_TEMPLATE = 2; // to the visitor, only when they gave an email

export type Enquiry = {
  form: "Appointment request" | "Training Academy enquiry";
  name: string;
  phone: string;
  email?: string;
  location?: string;
  package?: string;
  date?: string; // yyyy-mm-dd, as the date input gives it
  time?: string; // hh:mm, as the time input gives it
  purpose?: string;
  message?: string;
};

const FORMS: Enquiry["form"][] = ["Appointment request", "Training Academy enquiry"];

// A few sends per visitor is plenty; this stops the action being used to mass-send confirmations.
// Kept in memory, so it resets when the server restarts.
const LIMIT = 5;
const WINDOW_MS = 10 * 60 * 1000;
const recent = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const times = (recent.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  times.push(now);
  recent.set(ip, times);
  return times.length > LIMIT;
}

const clean = (value: unknown, max: number) => (typeof value === "string" ? value.trim().slice(0, max) : "");

// "2026-10-20" → "Tue, 20 Oct 2026"
function formatDate(iso: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return "";
  const d = new Date(`${iso}T00:00:00Z`);
  const weekday = d.toLocaleDateString("en-IN", { weekday: "short", timeZone: "UTC" });
  const date = d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
  return `${weekday}, ${date}`;
}

// "10:30" → "10:30 am"
function formatTime(hhmm: string) {
  if (!/^\d{2}:\d{2}$/.test(hhmm)) return "";
  return new Date(`1970-01-01T${hhmm}:00Z`).toLocaleTimeString("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "UTC",
  });
}

async function sendTemplate(apiKey: string, body: Record<string, unknown>) {
  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: { "api-key": apiKey, "content-type": "application/json", accept: "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Brevo ${res.status}: ${await res.text()}`);
}

export async function sendEnquiry(input: Enquiry): Promise<{ ok: boolean }> {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error("sendEnquiry: BREVO_API_KEY is not set");
    return { ok: false };
  }

  // Same checks as the forms; requests can come from outside them.
  const form = FORMS.find((f) => f === input?.form);
  const name = clean(input?.name, 100);
  const phone = clean(input?.phone, 20).replace(/\D/g, "").slice(-10);
  const email = clean(input?.email, 200);
  if (!form || name.length < 2 || !/^[6-9]\d{9}$/.test(phone)) return { ok: false };
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { ok: false };

  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0].trim() || h.get("x-real-ip") || "unknown";
  if (rateLimited(ip)) return { ok: false };

  const params = Object.fromEntries(
    Object.entries({
      form,
      name,
      phone,
      email,
      location: clean(input.location, 100),
      package: clean(input.package, 200),
      date: formatDate(clean(input.date, 10)),
      time: formatTime(clean(input.time, 5)),
      purpose: clean(input.purpose, 100),
      message: clean(input.message, 2000),
      page: clean(h.get("referer"), 500),
      submitted_at: new Date().toLocaleString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata",
      }),
    }).filter(([, value]) => value), // the templates drop rows for params that are left out
  );

  try {
    await sendTemplate(apiKey, {
      templateId: NOTIFICATION_TEMPLATE,
      to: [{ email: site.email, name: site.shortName }],
      ...(email ? { replyTo: { email, name } } : {}),
      params,
    });
  } catch (err) {
    console.error("sendEnquiry: notification failed", err);
    return { ok: false };
  }

  // The lab already has the enquiry, so a failed confirmation is only logged.
  if (email) {
    try {
      await sendTemplate(apiKey, { templateId: CONFIRMATION_TEMPLATE, to: [{ email, name }], params });
    } catch (err) {
      console.error("sendEnquiry: confirmation failed", err);
    }
  }

  return { ok: true };
}
