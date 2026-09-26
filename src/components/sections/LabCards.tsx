import Link from "next/link";
import { ArrowUpRight, Clock3, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { directionsUrl, labs, phoneHref } from "@/lib/site";

// The three branches, as cards (About Us page).
export function LabCards() {
  return (
    <section id="labs" className="bg-mist py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Our Labs"
          title={
            <>
              Three labs, <span className="text-gradient">one standard of care</span>
            </>
          }
          description="Started in Dindigul in 2021 and further expanded to Trichy and Thanjavur."
        />

        <ul className="mt-14 grid gap-5 lg:grid-cols-3">
          {labs.map((lab, i) => (
            <li
              key={lab.city}
              className="reveal group ring-gradient shadow-soft hover:shadow-premium flex flex-col rounded-3xl border border-white bg-white p-7 transition duration-300 hover:-translate-y-1 hover:[--ring-o:1]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-display text-sm font-semibold text-ink-300 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display mt-1 text-2xl font-semibold text-ink-900">{lab.city}</h3>
                </div>
                <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-100">
                  {lab.note ?? lab.hours}
                </span>
              </div>

              <ul className="mt-6 flex-1 space-y-4 text-sm text-ink-600">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-magenta-600" aria-hidden />
                  <span className="leading-relaxed">{lab.address}</span>
                </li>
                <li className="flex gap-3">
                  <Clock3 className="mt-0.5 size-4 shrink-0 text-magenta-600" aria-hidden />
                  <span>{lab.hours}</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-magenta-600" aria-hidden />
                  <span>
                    Home collection:{" "}
                    {lab.phones.map((p, j) => (
                      <span key={p}>
                        <a href={phoneHref(p)} className="font-semibold text-ink-900 transition hover:text-magenta-600">
                          {p}
                        </a>
                        {j < lab.phones.length - 1 && " / "}
                      </span>
                    ))}
                  </span>
                </li>
              </ul>

              <div className="mt-6 flex items-center justify-between gap-3 border-t border-ink-100 pt-5 text-sm font-semibold">
                <a
                  href={directionsUrl(lab.address)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-brand-700 transition hover:text-magenta-600"
                >
                  Get directions <ArrowUpRight className="size-4" aria-hidden />
                </a>
                <Link href="/contact-us" className="text-ink-500 transition hover:text-brand-700">
                  Contact
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
