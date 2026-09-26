import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

// Dark banner at the top of every inner page.
export function PageHero({
  crumb,
  title,
  highlight,
  description,
  children,
}: {
  crumb: string;
  title: string;
  highlight?: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-night-glow relative isolate overflow-hidden">
      <div
        className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-magenta-500/50 to-transparent"
        aria-hidden
      />
      <svg
        viewBox="0 0 600 600"
        className="pointer-events-none absolute top-1/2 -right-40 -z-10 w-[40rem] -translate-y-1/2 opacity-80 sm:-right-24 lg:right-0"
        aria-hidden
      >
        {[120, 180, 240, 300].map((r) => (
          <circle key={r} cx="300" cy="300" r={r - 2} fill="none" stroke="white" strokeOpacity="0.07" />
        ))}
        <circle cx="300" cy="300" r="90" fill="rgb(206 21 139 / 0.18)" />
      </svg>
      <div className="absolute top-1/2 right-[8%] -z-10 size-80 -translate-y-1/2 rounded-full bg-magenta-600/25 blur-3xl" aria-hidden />

      <Container className="relative py-16 sm:py-20 lg:py-24">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-brand-100/65">
            <li>
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
            </li>
            <li aria-hidden>
              <ChevronRight className="size-3.5" />
            </li>
            <li aria-current="page" className="font-medium text-magenta-300">
              {crumb}
            </li>
          </ol>
        </nav>

        <h1 className="font-display mt-6 max-w-3xl text-4xl leading-[1.08] font-semibold tracking-[-0.02em] text-balance text-white sm:text-5xl lg:text-[3.5rem]">
          {title}
          {highlight && (
            <>
              {" "}
              <span className="text-gradient-light">{highlight}</span>
            </>
          )}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-brand-100/80">{description}</p>
        )}
        {children}
      </Container>
    </section>
  );
}
