import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FlaskConical, UserRound } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { packageIcons, serviceIcons, SlugIcon } from "@/components/ui/icons";
import { ContentBlock } from "@/components/sections/ContentBlocks";
import { BookingSection } from "@/components/sections/BookingSection";
import { BookCard, HeroActions, HeroChip, Overview, PrevNext, SideList } from "@/components/sections/DetailParts";
import { packages, services } from "@/lib/data";
import { countTests, serviceDetails } from "@/lib/services";
import { pageMetadata } from "@/lib/metadata";

// Only the services listed in lib/data.ts exist; any other slug is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return pageMetadata({ title: `${service.name} Tests`, description: service.description, path: `/services/${slug}` });
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const index = services.findIndex((s) => s.slug === slug);
  const service = services[index];
  const detail = serviceDetails[slug];
  if (!service || !detail) notFound();

  const tests = countTests(detail);
  const prev = services[(index - 1 + services.length) % services.length];
  const next = services[(index + 1) % services.length];
  const anchored = detail.sections.filter((s) => s.id && s.title);
  const related = packages.filter((p) => detail.related.includes(p.slug));

  return (
    <>
      <PageHero
        crumb={service.name}
        parents={[{ label: "Services", href: "/services" }]}
        icon={<SlugIcon map={serviceIcons} slug={slug} className="size-8" strokeWidth={1.6} aria-hidden />}
        title={service.name}
        description={service.description}
      >
        <div className="mt-8 flex flex-wrap items-center gap-2">
          {tests > 0 && <HeroChip icon={<FlaskConical className="size-3.5" aria-hidden />}>{tests} tests listed</HeroChip>}
          {detail.head && <HeroChip icon={<UserRound className="size-3.5" aria-hidden />}>Headed by {detail.head.name}</HeroChip>}
          {anchored.length > 0 && <HeroChip>{anchored.length} specialised areas</HeroChip>}
        </div>
        <HeroActions item={service.name} />
      </PageHero>

      <section className="py-20 lg:py-24">
        <Container className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_20rem] xl:grid-cols-[minmax(0,1fr)_22rem] xl:gap-16">
          <article className="min-w-0">
            <Overview intro={detail.intro} head={detail.head} />

            {anchored.length > 0 && (
              <nav aria-label="On this page" className="mt-10 rounded-3xl bg-mist p-5 ring-1 ring-brand-100 sm:p-6">
                <p className="text-xs font-semibold tracking-[0.22em] text-ink-400 uppercase">On this page</p>
                <ol className="mt-4 flex flex-wrap gap-2">
                  {anchored.map((s, i) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="inline-flex items-center gap-2 rounded-full bg-white py-2 pr-4 pl-2 text-sm font-semibold text-ink-700 ring-1 ring-ink-200 transition hover:text-brand-800 hover:ring-brand-300"
                      >
                        <span className="bg-cta-gradient grid size-6 place-items-center rounded-full text-[11px] text-white">
                          {i + 1}
                        </span>
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            {detail.sections.map((section, i) => (
              <section
                key={section.id ?? i}
                id={section.id}
                className={`scroll-mt-28 ${section.title ? "mt-16 border-t border-ink-100 pt-14" : "mt-12"}`}
              >
                {section.title && (
                  <div className="mb-8 flex items-center gap-5">
                    <span
                      className="font-display text-outline text-5xl leading-none font-semibold tabular-nums [--outline-color:var(--color-magenta-500)]"
                      aria-hidden
                    >
                      {String(anchored.indexOf(section) + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-xs font-semibold tracking-[0.22em] text-magenta-600 uppercase">{service.name}</p>
                      <h2 className="font-display mt-1 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
                        {section.title}
                      </h2>
                    </div>
                  </div>
                )}
                <div className="space-y-10">
                  {section.blocks.map((block, j) => (
                    <ContentBlock key={j} block={block} />
                  ))}
                </div>
              </section>
            ))}

            <PrevNext prev={prev} next={next} basePath="/services" noun="service" />
          </article>

          <aside className="space-y-5">
            <SideList title="Lab Services" items={services} basePath="/services" icons={serviceIcons} current={slug} />
            <SideList title="Related Packages" items={related} basePath="/packages" icons={packageIcons} tone="magenta" />
            <BookCard item={service.name} />
          </aside>
        </Container>
      </section>

      <BookingSection />
    </>
  );
}
