import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Heading on the left, lead paragraph and body text on the right (inner-page introductions).
export function SplitIntro({
  eyebrow,
  title,
  paragraphs,
  aside,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  paragraphs: string[];
  aside?: React.ReactNode;
  children?: React.ReactNode;
}) {
  const [lead, ...rest] = paragraphs;
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading align="left" eyebrow={eyebrow} title={title} />
            {aside && <div className="reveal mt-8">{aside}</div>}
          </div>
          <div className="reveal lg:col-span-7 lg:pt-9">
            <p className="text-lg leading-relaxed text-pretty text-ink-700 sm:text-xl">{lead}</p>
            {rest.map((p) => (
              <p key={p.slice(0, 24)} className="mt-5 text-base leading-relaxed text-pretty text-ink-500 sm:text-lg">
                {p}
              </p>
            ))}
          </div>
        </div>
        {children}
      </Container>
    </section>
  );
}
