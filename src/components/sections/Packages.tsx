import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BookButton } from "@/components/ui/BookButton";
import { iconFor, packageIcons } from "@/components/ui/icons";
import { packages } from "@/lib/data";
import { packageDetails, packageTestRange } from "@/lib/packages";

const detailLabel = (slug: string) => {
  const detail = packageDetails[slug];
  return detail ? `View ${packageTestRange(detail)} tests` : "View details";
};

// Package cards. With `limit` (home page) it shows the first few and links to the full Packages page.
export function Packages({ limit }: { limit?: number }) {
  const visible = limit ? packages.slice(0, limit) : packages;

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

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map(({ slug, name, description }) => {
            const Icon = iconFor(packageIcons, slug);
            return (
              <li
                key={slug}
                id={slug}
                className="group ring-gradient shadow-soft hover:shadow-premium flex scroll-mt-28 flex-col rounded-3xl border border-white bg-white/90 p-6 backdrop-blur transition duration-300 target:[--ring-o:1] hover:-translate-y-1 hover:[--ring-o:1]"
              >
                <span className="group-hover:bg-cta-gradient grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition duration-300 group-hover:text-white group-hover:ring-transparent">
                  <Icon className="size-6" strokeWidth={1.7} aria-hidden />
                </span>
                <h3 className="font-display mt-5 text-lg leading-snug font-semibold text-ink-900">
                  {/* Out of the tab order: the "View tests" link below goes to the same page. */}
                  <Link href={`/packages/${slug}`} tabIndex={-1} className="transition hover:text-brand-700">
                    {name}
                  </Link>
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{description}</p>
                <Link
                  href={`/packages/${slug}`}
                  className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand-700 transition hover:text-magenta-600"
                >
                  {detailLabel(slug)}
                  <span className="sr-only"> for {name}</span>
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
                <BookButton
                  item={name}
                  className="group-hover:bg-night mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-brand-50 px-4 py-2.5 text-sm font-semibold text-brand-800 transition group-hover:text-white"
                >
                  <Plus className="size-4" aria-hidden /> Book Now
                  <span className="sr-only">: {name}</span>
                </BookButton>
              </li>
            );
          })}
        </ul>

        {limit && packages.length > limit && (
          <div className="mt-10 text-center">
            <Link
              href="/packages"
              className="shadow-soft group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink-800 ring-1 ring-ink-200/70 transition hover:text-brand-700 hover:ring-brand-300"
            >
              View all {packages.length} packages
              <ArrowRight className="size-4 transition group-hover:translate-x-0.5" aria-hidden />
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}
