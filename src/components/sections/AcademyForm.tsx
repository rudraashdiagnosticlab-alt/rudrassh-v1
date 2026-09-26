"use client";

import { useState } from "react";
import { ArrowRight, CircleCheck } from "lucide-react";
import { academy } from "@/lib/data";
import { whatsappHref } from "@/lib/site";

type Errors = Partial<Record<"name" | "phone" | "email" | "purpose", string>>;

// Training Academy enquiry form. Like the booking form, it hands the details to WhatsApp.
export function AcademyForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").replace(/\D/g, "").slice(-10);
    const email = String(data.get("email") ?? "").trim();
    const purpose = String(data.get("purpose") ?? "");
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (name.length < 2) next.name = "Please enter your name";
    if (!/^[6-9]\d{9}$/.test(phone)) next.phone = "Enter a valid 10-digit mobile number";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address";
    if (!purpose) next.purpose = "Choose a purpose";
    setErrors(next);
    if (Object.keys(next).length) return;

    const text = [
      "Hi Rudraash Training Academy, I'd like to enquire.",
      `Name: ${name}`,
      `Phone: ${phone}`,
      email && `Email: ${email}`,
      `Purpose: ${purpose}`,
      message && `Message: ${message}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappHref(text), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  const field =
    "mt-1.5 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-[15px] text-ink-900 outline-none transition focus-visible:outline-none placeholder:text-ink-400 focus:border-brand-400 focus:ring-4 focus:ring-brand-100";
  const label = "block text-sm font-medium text-ink-700";
  const error = (key: keyof Errors) =>
    errors[key] && (
      <span id={`academy-err-${key}`} className="mt-1 block text-xs text-magenta-600">
        {errors[key]}
      </span>
    );
  const describe = (key: keyof Errors) => ({
    "aria-invalid": !!errors[key],
    "aria-describedby": errors[key] ? `academy-err-${key}` : undefined,
  });

  return (
    <form onSubmit={onSubmit} noValidate className="shadow-lift rounded-[1.75rem] bg-white p-6 sm:p-8">
      <p className="font-display text-xl font-semibold text-ink-900">Enquire &amp; Enrol</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className={label}>
          Name
          <input name="name" autoComplete="name" placeholder="Your name" className={field} {...describe("name")} />
          {error("name")}
        </label>

        <label className={label}>
          Phone
          <div className="relative">
            <span className="pointer-events-none absolute top-1/2 left-4 mt-[3px] -translate-y-1/2 text-[15px] text-ink-400">
              +91
            </span>
            <input
              name="phone"
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              maxLength={14}
              placeholder="Mobile number"
              className={`${field} pl-12`}
              {...describe("phone")}
            />
          </div>
          {error("phone")}
        </label>

        <label className={label}>
          Email <span className="font-normal text-ink-400">(optional)</span>
          <input name="email" type="email" autoComplete="email" placeholder="you@example.com" className={field} {...describe("email")} />
          {error("email")}
        </label>

        <label className={label}>
          Choose Purpose
          <select name="purpose" defaultValue="" className={`${field} appearance-none`} {...describe("purpose")}>
            <option value="" disabled>
              Select a purpose
            </option>
            {academy.purposes.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
          {error("purpose")}
        </label>

        <label className={`${label} sm:col-span-2`}>
          Message
          <textarea
            name="message"
            rows={4}
            placeholder="Your course, college and year of study, or anything else we should know"
            className={`${field} resize-none`}
          />
        </label>
      </div>

      <button
        type="submit"
        className="bg-cta-gradient shadow-glow mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 font-semibold text-white transition hover:brightness-110"
      >
        Send Message <ArrowRight className="size-4" aria-hidden />
      </button>

      <p role="status" className="mt-4 min-h-5 text-center text-sm">
        {sent ? (
          <span className="inline-flex items-center gap-2 font-medium text-brand-700">
            <CircleCheck className="size-4" aria-hidden /> WhatsApp is open. Send the message and we&apos;ll get back to you.
          </span>
        ) : (
          <span className="text-ink-400">Your details are sent to our team on WhatsApp.</span>
        )}
      </p>
    </form>
  );
}
