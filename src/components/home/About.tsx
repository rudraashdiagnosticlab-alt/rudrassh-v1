import { ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { about, packages, services, specialities } from "@/lib/data";
import { site, telHref } from "@/lib/site";
import { BOOK_SECTION_ID } from "@/lib/booking";

const figures = [
  { value: String(packages.length), label: "Health Packages" },
  { value: String(services.length), label: "Specialised Services" },
];

function HighlightPanel() {
  return (
    <aside className="reveal bg-night-glow ring-gradient flex h-full flex-col justify-between gap-10 rounded-[2rem] p-8 text-white [--ring-o:0.6] sm:p-10">
      <div>
        <p className="text-xs font-semibold tracking-[0.22em] text-magenta-300 uppercase">Since {site.founded}</p>
        <p className="font-display text-gradient-light mt-4 text-7xl leading-none font-semibold tracking-tight">5+</p>
        <p className="mt-2 text-brand-100/80">Years of Experience</p>
      </div>

      <ol className="space-y-5 border-l border-white/15 pl-6">
        {site.locations.map((l, i) => (
          <li key={l} className="relative">
            <span
              className={`absolute top-1 -left-[29.5px] size-3 rounded-full ring-4 ring-night ${
                i === 0 ? "bg-cta-gradient" : "bg-white/30"
              }`}
              aria-hidden
            />
            <p className="font-display text-lg leading-none font-semibold">{l}</p>
            <p className="mt-1.5 text-sm text-brand-100/65">{i === 0 ? `Founded in ${site.founded}` : "Expanded"}</p>
          </li>
        ))}
      </ol>

      <dl className="grid grid-cols-2 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/[0.04]">
        {figures.map((f) => (
          <div key={f.label} className="flex flex-col-reverse justify-end p-5">
            <dt className="mt-1 text-sm text-brand-100/70">{f.label}</dt>
            <dd className="font-display text-3xl font-semibold">{f.value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}

export function About() {
  const [lead, ...rest] = about;
  return (
    <section id="about" className="pt-20 pb-24 lg:pt-28 lg:pb-32">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7 lg:py-4">
          <SectionHeading
            align="left"
            eyebrow="Who We Are"
            title={
              <>
                Innovative Health Care, <span className="text-gradient">Personalized for You</span>
              </>
            }
          />

          <div className="reveal">
            <p className="mt-6 text-lg leading-relaxed text-pretty text-ink-700 sm:text-xl">{lead}</p>
            {rest.map((p) => (
              <p key={p.slice(0, 24)} className="mt-5 text-base leading-relaxed text-pretty text-ink-500 sm:text-lg">
                {p}
              </p>
            ))}

            <p className="mt-8 text-xs font-semibold tracking-[0.22em] text-ink-400 uppercase">Specialised in</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {specialities.map((s) => (
                <li
                  key={s}
                  className="bg-mist rounded-full px-3.5 py-1.5 text-sm font-medium text-brand-800 ring-1 ring-brand-100"
                >
                  {s}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-ink-100 pt-8">
              <a
                href={`#${BOOK_SECTION_ID}`}
                className="bg-cta-gradient shadow-glow group inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold text-white transition hover:brightness-110"
              >
                Book Appointment
                <ArrowRight className="size-4 transition group-hover:translate-x-0.5" aria-hidden />
              </a>
              <a
                href={telHref}
                className="group inline-flex items-center gap-3 text-sm text-ink-500 transition hover:text-brand-800"
              >
                <span className="group-hover:bg-cta-gradient grid size-10 place-items-center rounded-full bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition group-hover:text-white group-hover:ring-transparent">
                  <Phone className="size-4" aria-hidden />
                </span>
                <span>
                  Or call <span className="font-semibold text-ink-900">{site.phone}</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="lg:order-first lg:col-span-5">
          <HighlightPanel />
        </div>
      </Container>
    </section>
  );
}
