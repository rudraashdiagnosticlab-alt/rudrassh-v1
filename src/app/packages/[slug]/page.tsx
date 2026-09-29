import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Clock3, FlaskConical, House, Layers } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { packageIcons, serviceIcons, SlugIcon } from "@/components/ui/icons";
import { ContentBlock } from "@/components/sections/ContentBlocks";
import { BookingSection } from "@/components/sections/BookingSection";
import { BookCard, DetailHeading, HeroActions, HeroChip, Overview, PrevNext, SideList } from "@/components/sections/DetailParts";
import { PackageFacts, PackageOffer, PackageVariants } from "@/components/sections/PackageParts";
import { packages, services } from "@/lib/data";
import { packageDetails, packageTestRange } from "@/lib/packages";
import { pageMetadata } from "@/lib/metadata";

// Only the packages listed in lib/data.ts exist; any other slug is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/packages/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const pkg = packages.find((p) => p.slug === slug);
  if (!pkg) return {};
  return pageMetadata({ title: pkg.name, description: pkg.description, path: `/packages/${slug}` });
}

export default async function PackagePage({ params }: PageProps<"/packages/[slug]">) {
  const { slug } = await params;
  const index = packages.findIndex((p) => p.slug === slug);
  const pkg = packages[index];
  const detail = packageDetails[slug];
  if (!pkg || !detail) notFound();

  const prev = packages[(index - 1 + packages.length) % packages.length];
  const next = packages[(index + 1) % packages.length];
  const multi = detail.variants.length > 1;
  const related = services.filter((s) => detail.related.includes(s.slug));

  return (
    <>
      <PageHero
        crumb={pkg.name}
        parents={[{ label: "Packages", href: "/packages" }]}
        icon={<SlugIcon map={packageIcons} slug={slug} className="size-8" strokeWidth={1.6} aria-hidden />}
        title={pkg.name}
        description={pkg.description}
      >
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <HeroChip icon={<FlaskConical className="size-3.5" aria-hidden />}>{packageTestRange(detail)} tests</HeroChip>
          {multi && (
            <HeroChip icon={<Layers className="size-3.5" aria-hidden />}>{detail.variants.length} options</HeroChip>
          )}
          {detail.fasting === "Required" && (
            <HeroChip icon={<Clock3 className="size-3.5" aria-hidden />}>Fasting required</HeroChip>
          )}
          {detail.homeCollection === "Available" && (
            <HeroChip icon={<House className="size-3.5" aria-hidden />}>Home collection available</HeroChip>
          )}
        </div>
        <HeroActions item={pkg.name} />
      </PageHero>

      <section className="py-20 lg:py-24">
        <Container className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_20rem] xl:grid-cols-[minmax(0,1fr)_22rem] xl:gap-16">
          <article className="min-w-0">
            <Overview intro={detail.intro} />

            {detail.blocks && (
              <div className="mt-12 space-y-10">
                {detail.blocks.map((block, i) => (
                  <ContentBlock key={i} block={block} />
                ))}
              </div>
            )}

            <section className="mt-16 border-t border-ink-100 pt-14">
              <DetailHeading eyebrow="What's included" title={multi ? "Choose your profile" : "Tests included"} />
              <PackageVariants packageName={pkg.name} detail={detail} />
              {detail.offer && (
                <div className="mt-8">
                  <PackageOffer packageName={pkg.name} offer={detail.offer} />
                </div>
              )}
              <div className="mt-12">
                <PackageFacts detail={detail} />
              </div>
            </section>

            {detail.recommended.length > 0 && (
              <section className="mt-16 border-t border-ink-100 pt-14">
                <DetailHeading eyebrow="Recommended for" title="Who should take this package?" />
                <ContentBlock block={{ type: "topics", title: "", numbered: true, items: detail.recommended }} />
              </section>
            )}

            {detail.closing && (
              <div className="mt-10">
                <ContentBlock block={{ type: "quote", text: detail.closing }} />
              </div>
            )}

            <PrevNext prev={prev} next={next} basePath="/packages" noun="package" />
          </article>

          <aside className="space-y-5">
            <SideList title="Health Packages" items={packages} basePath="/packages" icons={packageIcons} current={slug} compact />
            <SideList title="Related Services" items={related} basePath="/services" icons={serviceIcons} />
            <BookCard item={pkg.name} />
          </aside>
        </Container>
      </section>

      <BookingSection />
    </>
  );
}
