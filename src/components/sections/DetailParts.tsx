import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronRight, MapPin, Phone, UserRound } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BookButton } from "@/components/ui/BookButton";
import { iconFor } from "@/components/ui/icons";
import { site, telHref } from "@/lib/site";

// Shared building blocks for the service and package detail pages.

type NavItem = { slug: string; name: string };

export function HeroChip({ icon, children }: { icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-sm font-medium text-white backdrop-blur">
      {icon && <span className="text-magenta-300">{icon}</span>}
      {children}
    </span>
  );
}

export function HeroActions({ item }: { item: string }) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <BookButton
        item={item}
        className="bg-cta-gradient shadow-glow group inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold text-white transition hover:brightness-110"
      >
        Book an Appointment
        <ArrowRight className="size-4 transition group-hover:translate-x-0.5" aria-hidden />
      </BookButton>
      <a
        href={telHref}
        className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-6 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white/15"
      >
        <Phone className="size-4 text-magenta-300" aria-hidden /> {site.phone}
      </a>
    </div>
  );
}

export function Overview({
  intro,
  head,
}: {
  intro: string[];
  head?: { name: string; role: string; note: string };
}) {
  const [lead, ...rest] = intro;
  return (
    <div>
      <p className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-magenta-600 uppercase">
        <span className="h-px w-8 bg-linear-to-r from-magenta-600 to-brand-600" aria-hidden />
        Overview
      </p>
      <p className="mt-5 text-lg leading-relaxed text-pretty text-ink-700 sm:text-xl">{lead}</p>
      {rest.map((p) => (
        <p key={p.slice(0, 24)} className="mt-5 text-base leading-relaxed text-pretty text-ink-500 sm:text-lg">
          {p}
        </p>
      ))}

      {head && (
        <div className="mt-8 flex items-center gap-4 rounded-3xl bg-mist p-5 ring-1 ring-brand-100 sm:p-6">
          <span className="bg-cta-gradient shadow-glow grid size-14 shrink-0 place-items-center rounded-2xl text-white">
            <UserRound className="size-7" strokeWidth={1.6} aria-hidden />
          </span>
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-magenta-600 uppercase">{head.role}</p>
            <p className="font-display mt-1 text-lg font-semibold text-ink-900">{head.name}</p>
            <p className="text-sm text-ink-500">{head.note}</p>
          </div>
        </div>
      )}
    </div>
  );
}

// Section heading inside a detail page's main column.
export function DetailHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-8">
      <p className="text-xs font-semibold tracking-[0.22em] text-magenta-600 uppercase">{eyebrow}</p>
      <h2 className="font-display mt-2 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">{title}</h2>
    </div>
  );
}

export function PrevNext({ prev, next, basePath, noun }: { prev: NavItem; next: NavItem; basePath: string; noun: string }) {
  const card =
    "group flex h-full flex-col rounded-3xl border border-ink-200/60 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:border-brand-200 sm:p-6";
  return (
    <nav aria-label={`More ${noun}s`} className="mt-16 grid gap-4 border-t border-ink-100 pt-10 sm:grid-cols-2">
      <Link href={`${basePath}/${prev.slug}`} className={card}>
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-ink-400 uppercase">
          <ArrowLeft className="size-3.5 transition group-hover:-translate-x-0.5" aria-hidden /> Previous {noun}
        </span>
        <span className="font-display mt-2 text-lg font-semibold text-ink-900 group-hover:text-brand-800">{prev.name}</span>
      </Link>
      <Link href={`${basePath}/${next.slug}`} className={`${card} sm:items-end sm:text-right`}>
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-ink-400 uppercase">
          Next {noun} <ArrowRight className="size-3.5 transition group-hover:translate-x-0.5" aria-hidden />
        </span>
        <span className="font-display mt-2 text-lg font-semibold text-ink-900 group-hover:text-brand-800">{next.name}</span>
      </Link>
    </nav>
  );
}

// Desktop-only booking card; it sticks while the rest of the sidebar scrolls away.
export function BookCard({ item }: { item: string }) {
  return (
    <div className="bg-night-glow ring-gradient hidden rounded-3xl p-7 text-white [--ring-o:0.6] lg:sticky lg:top-28 lg:block">
      <p className="text-xs font-semibold tracking-[0.22em] text-magenta-300 uppercase">Book a Test</p>
      <p className="font-display mt-3 text-2xl leading-snug font-semibold text-balance">Easy Appointments, Exceptional Care.</p>
      <p className="mt-3 text-sm leading-relaxed text-brand-100/75">
        Choose your lab, date and time. Your request reaches our team on WhatsApp.
      </p>
      <BookButton
        item={item}
        className="bg-cta-gradient shadow-glow mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 font-semibold text-white transition hover:brightness-110"
      >
        Book Appointment <ArrowRight className="size-4" aria-hidden />
      </BookButton>
      <a
        href={telHref}
        className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-5 py-3 font-semibold text-white transition hover:bg-white/15"
      >
        <Phone className="size-4 text-magenta-300" aria-hidden /> {site.phone}
      </a>
      <p className="mt-5 flex items-center justify-center gap-2 text-xs text-brand-100/60">
        <MapPin className="size-3.5" aria-hidden /> {site.locations.join(" · ")}
      </p>
    </div>
  );
}

// Sidebar list of links (all services, all packages, related items).
export function SideList({
  title,
  items,
  basePath,
  icons,
  current,
  tone = "brand",
  compact = false,
}: {
  title: string;
  items: NavItem[];
  basePath: string;
  icons: Record<string, LucideIcon>;
  current?: string;
  tone?: "brand" | "magenta";
  compact?: boolean;
}) {
  if (!items.length) return null;
  const tile =
    tone === "magenta" ? "bg-magenta-50 text-magenta-600 ring-magenta-100" : "bg-brand-50 text-brand-700 ring-brand-100";
  return (
    <nav aria-label={title} className="shadow-soft rounded-3xl border border-ink-200/60 bg-white p-3">
      <p className="px-3 pt-3 pb-3 text-xs font-semibold tracking-[0.22em] text-ink-400 uppercase">{title}</p>
      <ul className="space-y-0.5">
        {items.map((it) => {
          const ItemIcon = iconFor(icons, it.slug);
          const active = it.slug === current;
          return (
            <li key={it.slug}>
              <Link
                href={`${basePath}/${it.slug}`}
                aria-current={active ? "page" : undefined}
                className={`group flex items-center gap-3 rounded-2xl px-3 text-sm font-medium transition ${compact ? "py-2" : "py-2.5"} ${
                  active ? "bg-mist text-brand-800" : "text-ink-600 hover:bg-mist hover:text-brand-800"
                }`}
              >
                <span
                  className={`grid shrink-0 place-items-center rounded-xl ring-1 transition ${compact ? "size-7" : "size-8"} ${
                    active ? "bg-cta-gradient text-white ring-transparent" : tile
                  }`}
                >
                  <ItemIcon className="size-4" strokeWidth={1.8} aria-hidden />
                </span>
                <span className="flex-1 leading-snug">{it.name}</span>
                {active ? (
                  <span className="bg-cta-gradient size-1.5 rounded-full" aria-hidden />
                ) : (
                  <ChevronRight className="size-4 text-ink-300 transition group-hover:translate-x-0.5" aria-hidden />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
