"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, CircleCheck } from "lucide-react";
import { packages } from "@/lib/data";
import { BOOK_EVENT, type BookingRequest } from "@/lib/booking";
import { sendEnquiry } from "@/lib/enquiry";
import { labWhatsapp, site, whatsappHref } from "@/lib/site";

const OTHERS = "Others";
const packageNames = packages.map((p) => p.name);

const todayISO = () => {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
};

type Errors = Partial<Record<"name" | "phone" | "email" | "location", string>>;

export function BookingForm() {
  const [pkg, setPkg] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  // The message text filled in by the last "Book" click, so the next click can replace it.
  const autoMessage = useRef("");

  useEffect(() => {
    const onBook = (e: Event) => {
      const { item, note } = (e as CustomEvent<BookingRequest>).detail;
      const isPackage = packageNames.includes(item);
      const filled = isPackage ? (note ?? "") : [`Enquiry: ${item}`, note].filter(Boolean).join("\n");
      const previous = autoMessage.current;
      autoMessage.current = filled;

      setPkg(isPackage ? item : OTHERS);
      // Swap out the previous click's text but keep anything the visitor typed themselves.
      setMessage((current) => {
        const own = (current.startsWith(previous) ? current.slice(previous.length) : current).trim();
        return [filled, own].filter(Boolean).join("\n");
      });
      setSent(false);
      nameRef.current?.focus({ preventScroll: true });
    };
    window.addEventListener(BOOK_EVENT, onBook);
    return () => window.removeEventListener(BOOK_EVENT, onBook);
  }, []);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").replace(/\D/g, "").slice(-10);
    const email = String(data.get("email") ?? "").trim();
    const location = String(data.get("location") ?? "");
    const date = String(data.get("date") ?? "");
    const time = String(data.get("time") ?? "");

    const next: Errors = {};
    if (name.length < 2) next.name = "Please enter your name";
    if (!/^[6-9]\d{9}$/.test(phone)) next.phone = "Enter a valid 10-digit mobile number";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address";
    if (!location) next.location = "Choose a location";
    setErrors(next);
    if (Object.keys(next).length) return;

    // Emailed to the lab in the background; WhatsApp still opens straight away (it must, or popup blockers stop it).
    sendEnquiry({ form: "Appointment request", name, phone, email, location, package: pkg, date, time, message }).catch(() => {});

    const text = [
      "Hi Rudraash, I'd like to book an appointment.",
      `Name: ${name}`,
      `Phone: ${phone}`,
      email && `Email: ${email}`,
      `Location: ${location}`,
      pkg && `Package: ${pkg}`,
      date && `Date: ${date}`,
      time && `Time: ${time}`,
      message.trim() && `Message: ${message.trim()}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappHref(text, labWhatsapp(location)), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  const field =
    "mt-1.5 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-[15px] text-ink-900 outline-none transition focus-visible:outline-none placeholder:text-ink-400 focus:border-brand-400 focus:ring-4 focus:ring-brand-100";
  const label = "block text-sm font-medium text-ink-700";
  const error = (key: keyof Errors) =>
    errors[key] && (
      <span id={`err-${key}`} className="mt-1 block text-xs text-magenta-600">
        {errors[key]}
      </span>
    );
  const describe = (key: keyof Errors) => ({
    "aria-invalid": !!errors[key],
    "aria-describedby": errors[key] ? `err-${key}` : undefined,
  });

  return (
    <form onSubmit={onSubmit} noValidate className="shadow-lift rounded-[1.75rem] bg-white p-6 sm:p-8">
      <p className="font-display text-xl font-semibold text-ink-900">Book an Appointment</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className={label}>
          Name
          <input ref={nameRef} name="name" autoComplete="name" placeholder="Your name" className={field} {...describe("name")} />
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
          Choose Location
          <select name="location" defaultValue="" className={`${field} appearance-none`} {...describe("location")}>
            <option value="" disabled>
              Select a lab
            </option>
            {site.locations.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
          {error("location")}
        </label>

        <label className={`${label} sm:col-span-2`}>
          Choose Package
          <select name="package" value={pkg} onChange={(e) => setPkg(e.target.value)} className={`${field} appearance-none`}>
            <option value="">Select a package</option>
            {packageNames.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
            <option value={OTHERS}>{OTHERS}</option>
          </select>
        </label>

        <label className={label}>
          Date
          <input name="date" type="date" onFocus={(e) => (e.currentTarget.min = todayISO())} className={field} />
        </label>

        <label className={label}>
          Time
          <input name="time" type="time" className={field} />
        </label>

        <label className={`${label} sm:col-span-2`}>
          Message
          <textarea
            name="message"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Anything we should know?"
            className={`${field} resize-none`}
          />
        </label>
      </div>

      <button
        type="submit"
        className="bg-cta-gradient shadow-glow mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 font-semibold text-white transition hover:brightness-110"
      >
        Book Appointment <ArrowRight className="size-4" aria-hidden />
      </button>

      <p role="status" className="mt-4 min-h-5 text-center text-sm">
        {sent ? (
          <span className="inline-flex items-center gap-2 font-medium text-brand-700">
            <CircleCheck className="size-4" aria-hidden /> WhatsApp is open. Send the message to confirm your appointment.
          </span>
        ) : (
          <span className="text-ink-400">Your details are sent to our team by email and WhatsApp.</span>
        )}
      </p>
    </form>
  );
}
