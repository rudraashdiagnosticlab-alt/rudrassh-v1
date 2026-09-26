import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BookButton } from "@/components/ui/BookButton";
import { iconFor, serviceIcons } from "@/components/ui/icons";
import { moreServices, services } from "@/lib/data";

// Service cards. On the home page `showAllLink` adds a link to the full Services page.
export function Services({ showAllLink = false, tinted = false }: { showAllLink?: boolean; tinted?: boolean }) {
  return (
    <section id="services" className={`py-24 lg:py-32 ${tinted ? "bg-mist" : ""}`}>
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
          {services.map(({ slug, name, description }, i) => {
            const Icon = iconFor(serviceIcons, slug);
            return (
              <li
                key={slug}
                id={slug}
                className="reveal group ring-gradient shadow-soft hover:shadow-premium flex scroll-mt-28 flex-col rounded-3xl border border-ink-200/60 bg-white p-7 transition duration-300 target:[--ring-o:1] hover:-translate-y-1 hover:border-transparent hover:[--ring-o:1]"
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

        {showAllLink && (
          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="shadow-soft group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink-800 ring-1 ring-ink-200/70 transition hover:text-brand-700 hover:ring-brand-300"
            >
              Explore all services
              <ArrowRight className="size-4 transition group-hover:translate-x-0.5" aria-hidden />
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}
