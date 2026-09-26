"use client";

import { useRef, useState } from "react";
import { ArrowUpRight, Clock3, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { directionsUrl, labs, mapEmbedUrl, phoneHref, site } from "@/lib/site";

// Lab picker with address, numbers, hours and a map (Contact Us page).
export function LabFinder() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const lab = labs[active];

  const select = (i: number) => {
    const next = (i + labs.length) % labs.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <section id="labs" className="scroll-mt-28 py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Choose Lab Location"
          title={
            <>
              Visit a <span className="text-gradient">Rudraash Lab</span>
            </>
          }
          description="Choose a Rudraash Lab branch to get directions instantly."
        />

        <div role="tablist" aria-label="Lab locations" className="reveal mt-10 flex flex-wrap justify-center gap-2">
          {labs.map((l, i) => {
            const selected = i === active;
            return (
              <button
                key={l.city}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`lab-tab-${i}`}
                aria-selected={selected}
                aria-controls="lab-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowRight") select(i + 1);
                  if (e.key === "ArrowLeft") select(i - 1);
                }}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  selected
                    ? "bg-night text-white shadow-soft"
                    : "bg-white text-ink-600 ring-1 ring-ink-200 hover:text-brand-700 hover:ring-brand-300"
                }`}
              >
                <MapPin className={`size-4 ${selected ? "text-magenta-300" : "text-magenta-600"}`} aria-hidden />
                {l.city}
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id="lab-panel"
          aria-labelledby={`lab-tab-${active}`}
          className="reveal shadow-premium mt-8 grid overflow-hidden rounded-[2rem] bg-white ring-1 ring-ink-200/70 lg:grid-cols-[0.95fr_1.05fr]"
        >
          <div className="flex flex-col p-8 sm:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="font-display text-3xl font-semibold text-ink-900">{lab.city}</h3>
              <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-100">
                {lab.hours}
              </span>
            </div>

            <dl className="mt-8 flex-1 space-y-6">
              <div className="flex gap-4">
                <dt className="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                  <MapPin className="size-5" aria-hidden />
                  <span className="sr-only">Address</span>
                </dt>
                <dd>
                  <p className="text-xs font-semibold tracking-[0.2em] text-ink-400 uppercase">{lab.city} Address</p>
                  <p className="mt-1 leading-relaxed text-ink-700">{lab.address}</p>
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                  <Phone className="size-5" aria-hidden />
                  <span className="sr-only">Phone</span>
                </dt>
                <dd>
                  <p className="text-xs font-semibold tracking-[0.2em] text-ink-400 uppercase">Home collection No.</p>
                  <p className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
                    {lab.phones.map((p) => (
                      <a
                        key={p}
                        href={phoneHref(p)}
                        className="font-display text-lg font-semibold text-ink-900 transition hover:text-magenta-600"
                      >
                        {p}
                      </a>
                    ))}
                  </p>
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                  <Clock3 className="size-5" aria-hidden />
                  <span className="sr-only">Hours</span>
                </dt>
                <dd>
                  <p className="text-xs font-semibold tracking-[0.2em] text-ink-400 uppercase">Time</p>
                  <p className="mt-1 text-ink-700">{lab.hours}</p>
                </dd>
              </div>
            </dl>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={directionsUrl(lab.address)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cta-gradient shadow-glow inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white transition hover:brightness-110"
              >
                Get directions <ArrowUpRight className="size-4" aria-hidden />
              </a>
              <a
                href={phoneHref(lab.phones[0])}
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-ink-800 ring-1 ring-ink-200 transition hover:text-brand-700 hover:ring-brand-300"
              >
                <Phone className="size-4 text-magenta-600" aria-hidden /> Call {lab.city}
              </a>
            </div>
          </div>

          <div className="relative min-h-[20rem] bg-mist sm:min-h-[24rem]">
            <iframe
              key={lab.city}
              src={mapEmbedUrl(lab.address)}
              title={`Map showing ${site.name}, ${lab.city}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 size-full border-0"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
