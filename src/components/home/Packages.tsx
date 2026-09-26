"use client";

import { useState } from "react";
import {
  Activity,
  Baby,
  Bone,
  ChevronDown,
  Droplet,
  Droplets,
  Flower2,
  Gauge,
  Hand,
  HeartPulse,
  Pill,
  Plus,
  Salad,
  ShieldPlus,
  Stethoscope,
  Syringe,
  Venus,
  VenusAndMars,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { packages } from "@/lib/data";
import { requestBooking } from "@/lib/booking";

const icons: Record<string, LucideIcon> = {
  "Diabetes Package": Droplet,
  "Cardiac Package": HeartPulse,
  "Hypertension Profile": Gauge,
  "Bone Health Profile": Bone,
  "Gut Health Package": Salad,
  "Rheumatoid Arthritis Profile": Hand,
  "APLA Profile": Syringe,
  "Fertility Profile – Men & Women": VenusAndMars,
  "PCOS Profile": Venus,
  "Anemia Profile": Droplets,
  "Antenatal Profile": Baby,
  "Hepatitis Screening Test": ShieldPlus,
  "Vitamin Profile": Pill,
  "Master Health Check Up": Stethoscope,
  "Thyroid Profile": Activity,
  "Allergy Profile": Flower2,
};

const INITIAL = 8;

export function Packages() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? packages : packages.slice(0, INITIAL);

  return (
    <section id="packages" className="bg-mist relative isolate overflow-hidden py-24 lg:py-32">
      <Container className="relative">
        <SectionHeading
          eyebrow="Discover the Rudraash Lab Advantage"
          title={
            <>
              Our <span className="text-gradient">Packages</span>
            </>
          }
        />

        <ul id="packages-list" className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map(({ name, description }) => {
            const Icon = icons[name] ?? Stethoscope;
            return (
              <li
                key={name}
                className="group ring-gradient shadow-soft hover:shadow-premium flex flex-col rounded-3xl border border-white bg-white/90 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:[--ring-o:1]"
              >
                <span className="group-hover:bg-cta-gradient grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition duration-300 group-hover:text-white group-hover:ring-transparent">
                  <Icon className="size-6" strokeWidth={1.7} aria-hidden />
                </span>
                <h3 className="font-display mt-5 text-lg leading-snug font-semibold text-ink-900">{name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{description}</p>
                <button
                  type="button"
                  onClick={() => requestBooking(name)}
                  aria-label={`Book ${name}`}
                  className="mt-6 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-brand-50 px-4 py-2.5 text-sm font-semibold text-brand-800 transition group-hover:bg-night group-hover:text-white"
                >
                  <Plus className="size-4" aria-hidden /> Book Now
                </button>
              </li>
            );
          })}
        </ul>

        {packages.length > INITIAL && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              aria-expanded={showAll}
              aria-controls="packages-list"
              className="shadow-soft inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink-800 ring-1 ring-ink-200/70 transition hover:text-brand-700 hover:ring-brand-300"
            >
              {showAll ? "Show fewer packages" : `View all ${packages.length} packages`}
              <ChevronDown className={`size-4 transition ${showAll ? "rotate-180" : ""}`} aria-hidden />
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}
