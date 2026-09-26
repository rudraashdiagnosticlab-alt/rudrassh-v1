import { MapPin, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-mist relative isolate overflow-hidden py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Hear From Our <span className="text-gradient">Happy Patients</span>
            </>
          }
          description="Hear from our patients and partners who trust our diagnostics for accurate and reliable results."
        />

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <li
              key={t.name}
              className="reveal group ring-gradient shadow-soft hover:shadow-premium relative flex flex-col rounded-3xl border border-white bg-white p-8 transition duration-300 hover:-translate-y-1 hover:[--ring-o:1]"
            >
              <Quote className="size-10 fill-magenta-100 text-magenta-200" strokeWidth={1.2} aria-hidden />
              <blockquote className="mt-5 flex-1 text-[15px] leading-[1.75] text-ink-600">&ldquo;{t.quote}&rdquo;</blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-ink-100 pt-5">
                <span
                  className="bg-cta-gradient grid size-11 place-items-center rounded-full text-sm font-bold text-white ring-4 ring-magenta-50"
                  aria-hidden
                >
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="font-semibold text-ink-900">{t.name}</p>
                  <p className="inline-flex items-center gap-1 text-xs text-ink-500">
                    <MapPin className="size-3" aria-hidden /> {t.city}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
