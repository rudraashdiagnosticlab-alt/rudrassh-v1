import {
  ArrowRight,
  Activity,
  Bug,
  Dna,
  Droplets,
  FlaskConical,
  Flower2,
  Microscope,
  ShieldPlus,
  TestTubes,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BookButton } from "@/components/ui/BookButton";
import { moreServices, services } from "@/lib/data";

const icons: Record<string, LucideIcon> = {
  Allergy: Flower2,
  Hematology: Droplets,
  Biochemistry: FlaskConical,
  "Clinical Pathology": TestTubes,
  "Hormones / Endocrinology": Activity,
  "Serology / Infectious Diseases": ShieldPlus,
  "Histopathology / Oncopathology": Microscope,
  "Microbiology & Molecular Biology": Bug,
  "Genetic Studies": Dna,
};

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Us"
          title={
            <>
              Experience the <span className="text-gradient">Rudraash Lab Services</span>
            </>
          }
        />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ name, description }, i) => {
            const Icon = icons[name] ?? FlaskConical;
            return (
              <li
                key={name}
                className="reveal group ring-gradient shadow-soft hover:shadow-premium flex flex-col rounded-3xl border border-ink-200/60 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-transparent hover:[--ring-o:1]"
              >
                <div className="flex items-start justify-between">
                  <span className="group-hover:bg-cta-gradient grid size-14 place-items-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition duration-300 group-hover:text-white group-hover:ring-transparent">
                    <Icon className="size-7" strokeWidth={1.6} aria-hidden />
                  </span>
                  <span className="font-display text-sm font-semibold text-ink-300 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display mt-6 text-lg font-semibold text-ink-900">{name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{description}</p>
                <div className="mt-6 border-t border-ink-100 pt-5">
                  <BookButton
                    item={name}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition hover:text-magenta-600"
                  >
                    Enquire now <ArrowRight className="size-4 transition group-hover:translate-x-0.5" aria-hidden />
                  </BookButton>
                </div>
              </li>
            );
          })}
        </ul>

        <p className="reveal mt-10 text-center text-sm text-ink-500">
          Also available:{" "}
          {moreServices.map((s, i) => (
            <span key={s}>
              <span className="font-semibold text-ink-700">{s}</span>
              {i < moreServices.length - 1 && <span className="mx-2 text-ink-300">·</span>}
            </span>
          ))}
        </p>
      </Container>
    </section>
  );
}
