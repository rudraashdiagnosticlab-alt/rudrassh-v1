import { Check, Eye, HandCoins, HeartHandshake, Quote, Target } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { mission, vision } from "@/lib/data";
import { site } from "@/lib/site";

const missionIcons = [Target, HandCoins, HeartHandshake];
const visionHighlight = "a trusted leader in diagnostics";

// The two halves of the vision statement, broken out word for word.
const visionPoints = [
  { label: "What we deliver", items: ["Accurate", "Reliable", "Accessible"] },
  { label: "How we get there", items: ["Innovation", "Advanced Technology", "Patient-Focused Care"] },
];

function VisionStatement() {
  const [before, after] = vision.split(visionHighlight);
  if (after === undefined) return <>{vision}</>;
  return (
    <>
      {before}
      <span className="text-gradient-light">{visionHighlight}</span>
      {after}
    </>
  );
}

export function VisionMission() {
  return (
    <section id="vision" className="bg-night-glow relative isolate overflow-hidden py-24 lg:py-36">
      <div
        className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-magenta-500/60 to-transparent"
        aria-hidden
      />

      <Container>
        <SectionHeading
          tone="dark"
          eyebrow="Our Vision & Mission"
          title={
            <>
              Accuracy. Care.{" "}
              <span className="text-gradient-light">Trust.</span>
            </>
          }
        />

        {/* Vision: statement on the left, what it stands for on the right */}
        <figure className="reveal ring-gradient relative mt-16 overflow-hidden rounded-[2rem] bg-white/[0.05] backdrop-blur [--ring-o:0.7] lg:mt-20">
          <div className="absolute -top-32 -left-24 -z-10 size-96 rounded-full bg-magenta-600/25 blur-3xl" aria-hidden />

          <div className="grid lg:grid-cols-[1.45fr_1fr]">
            <div className="relative p-8 sm:p-12">
              <Quote
                className="absolute top-8 right-8 size-16 text-white/[0.06] sm:top-10 sm:right-10 sm:size-20"
                strokeWidth={1}
                aria-hidden
              />
              <figcaption className="flex items-center gap-3">
                <span className="bg-cta-gradient shadow-glow grid size-11 place-items-center rounded-2xl text-white">
                  <Eye className="size-5" aria-hidden />
                </span>
                <span className="text-xs font-semibold tracking-[0.22em] text-magenta-300 uppercase">Our Vision</span>
              </figcaption>

              <blockquote className="font-display mt-8 text-2xl leading-[1.35] font-medium tracking-[-0.01em] text-pretty text-white/90 sm:text-[1.75rem] lg:text-3xl">
                &ldquo;<VisionStatement />&rdquo;
              </blockquote>

              <p className="mt-8 flex items-center gap-3 text-sm text-brand-200/70">
                <span className="h-px w-8 bg-white/25" aria-hidden />
                {site.name}
              </p>
            </div>

            <div className="border-t border-white/10 p-8 sm:p-12 lg:border-t-0 lg:border-l">
              <div className="flex h-full flex-col justify-center gap-10">
                {visionPoints.map(({ label, items }) => (
                  <div key={label}>
                    <p className="text-xs font-semibold tracking-[0.22em] text-brand-200/70 uppercase">{label}</p>
                    <ul className="mt-4 space-y-3">
                      {items.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[15px] font-medium text-white">
                          <span className="grid size-6 shrink-0 place-items-center rounded-full bg-magenta-500/20 text-magenta-300 ring-1 ring-magenta-300/30">
                            <Check className="size-3.5" strokeWidth={2.5} aria-hidden />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </figure>

        {/* Mission: three pillars in one glass panel */}
        <div className="mt-16 lg:mt-20">
          <p className="flex items-center justify-center gap-4 text-xs font-semibold tracking-[0.22em] text-brand-200/80 uppercase">
            <span className="h-px w-12 bg-linear-to-r from-transparent to-white/30" aria-hidden />
            Our Mission
            <span className="h-px w-12 bg-linear-to-l from-transparent to-white/30" aria-hidden />
          </p>

          <ol className="reveal ring-gradient mt-8 grid overflow-hidden rounded-[2rem] bg-white/[0.035] backdrop-blur [--ring-o:0.45] lg:grid-cols-3">
            {mission.map(({ title, text }, i) => {
              const Icon = missionIcons[i];
              return (
                <li
                  key={title}
                  className="group relative p-8 transition duration-300 hover:bg-white/[0.04] hover:[--outline-color:var(--color-magenta-300)] sm:p-10 [&:not(:first-child)]:border-t [&:not(:first-child)]:border-white/10 lg:[&:not(:first-child)]:border-t-0 lg:[&:not(:first-child)]:border-l"
                >
                  <span
                    className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-linear-to-r from-magenta-400 to-brand-400 transition-transform duration-500 group-hover:scale-x-100"
                    aria-hidden
                  />
                  <div className="flex items-start justify-between gap-4">
                    <span className="group-hover:bg-cta-gradient grid size-12 place-items-center rounded-2xl bg-white/[0.06] text-magenta-300 ring-1 ring-white/10 transition duration-300 group-hover:text-white group-hover:ring-transparent">
                      <Icon className="size-6" strokeWidth={1.7} aria-hidden />
                    </span>
                    <span className="font-display text-outline text-6xl leading-none font-semibold tabular-nums" aria-hidden>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display mt-10 text-xl leading-snug font-semibold text-balance text-white lg:min-h-[3.5rem]">{title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-brand-100/70">{text}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
