"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { BookLink } from "@/components/ui/BookLink";
import { iconFor, packageIcons, serviceIcons } from "@/components/ui/icons";
import { moreServices, packages, services } from "@/lib/data";
import { nav, site, telHref, type NavItem } from "@/lib/site";

type MenuKey = NonNullable<NavItem["menu"]>;

type MenuDef = {
  eyebrow: string;
  title: string;
  text: string;
  href: string;
  cta: string;
  note?: string;
  items: { label: string; href: string; slug: string }[];
};

const menus: Record<MenuKey, MenuDef> = {
  services: {
    eyebrow: "Our Lab Solutions",
    title: "Quality Care, Wide Range of Services.",
    text: "Accurate and reliable medical testing across our centers in Trichy, Dindigul and Thanjavur.",
    href: "/services",
    cta: "View all services",
    note: `Also available: ${moreServices.join(" · ")}`,
    items: services.map((s) => ({ label: s.name, href: `/services#${s.slug}`, slug: s.slug })),
  },
  packages: {
    eyebrow: "Our Lab Packages",
    title: "Rudraash Health Packages",
    text: "Thoughtfully designed diagnostic packages to support preventive healthcare and early disease detection.",
    href: "/packages",
    cta: `View all ${packages.length} packages`,
    items: packages.map((p) => ({ label: p.name, href: `/packages#${p.slug}`, slug: p.slug })),
  },
};

const iconMaps: Record<MenuKey, typeof serviceIcons> = { services: serviceIcons, packages: packageIcons };

function MegaPanel({ id, menuKey, onNavigate }: { id: string; menuKey: MenuKey; onNavigate: () => void }) {
  const m = menus[menuKey];
  return (
    <div id={id} className="animate-menu-in absolute inset-x-0 top-full hidden pt-3 lg:block">
      <Container>
        <div className="shadow-premium grid overflow-hidden rounded-3xl bg-white ring-1 ring-ink-200/70 lg:grid-cols-[17rem_1fr] xl:grid-cols-[19rem_1fr]">
          <div className="bg-night-glow flex flex-col p-8 text-white">
            <p className="text-xs font-semibold tracking-[0.22em] text-magenta-300 uppercase">{m.eyebrow}</p>
            <p className="font-display mt-4 text-2xl leading-snug font-semibold text-balance">{m.title}</p>
            <p className="mt-3 text-sm leading-relaxed text-brand-100/75">{m.text}</p>
            <Link
              href={m.href}
              onClick={onNavigate}
              className="group mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-800 transition hover:bg-brand-50"
            >
              {m.cta}
              <ArrowRight className="size-4 transition group-hover:translate-x-0.5" aria-hidden />
            </Link>
          </div>

          <div className="p-4 xl:p-5">
            <ul className="grid grid-cols-2 gap-1 xl:grid-cols-3">
              {m.items.map((item) => {
                const Icon = iconFor(iconMaps[menuKey], item.slug);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onNavigate}
                      className="group flex items-center gap-3 rounded-2xl p-3 text-sm font-medium text-ink-700 transition hover:bg-mist hover:text-brand-800"
                    >
                      <span className="group-hover:bg-cta-gradient grid size-9 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition group-hover:text-white group-hover:ring-transparent">
                        <Icon className="size-4.5" strokeWidth={1.8} aria-hidden />
                      </span>
                      <span className="leading-snug">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            {m.note && <p className="mt-3 border-t border-ink-100 px-3 pt-4 pb-1 text-xs text-ink-500">{m.note}</p>}
          </div>
        </div>
      </Container>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  // Menus remember the page they were opened on, so they close by themselves after navigation.
  const [menuState, setMenuState] = useState<{ key: MenuKey; path: string } | null>(null);
  const [mobilePath, setMobilePath] = useState<string | null>(null);
  const menu = menuState?.path === pathname ? menuState.key : null;
  const mobileOpen = mobilePath === pathname;

  const openMenu = (key: MenuKey | null) => setMenuState(key ? { key, path: pathname } : null);
  const closeAll = () => {
    setMenuState(null);
    setMobilePath(null);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menu && !mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setMenuState(null);
      setMobilePath(null);
    };
    const onPointer = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setMenuState(null);
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [menu, mobileOpen]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`));

  return (
    <header
      ref={headerRef}
      onMouseLeave={() => openMenu(null)}
      className={`sticky top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled || mobileOpen || menu
          ? "border-b border-ink-200/70 bg-white/90 shadow-soft backdrop-blur-xl"
          : "border-b border-transparent bg-white"
      }`}
    >
      <Container className="flex h-18 items-center justify-between gap-6 sm:h-20">
        <Logo />

        <nav aria-label="Primary" className="hidden h-full lg:block">
          <ul className="flex h-full items-center gap-0.5 xl:gap-1">
            {nav.map((item) => {
              const active = isActive(item.href);
              const text = `text-[15px] font-medium transition ${active ? "text-brand-800" : "text-ink-600 hover:text-brand-700"}`;

              if (!item.menu) {
                return (
                  <li key={item.href} className="relative flex h-full items-center" onMouseEnter={() => openMenu(null)}>
                    <Link
                      href={item.href}
                      onClick={closeAll}
                      aria-current={active ? "page" : undefined}
                      className={`${text} rounded-full px-3.5 py-2 xl:px-4`}
                    >
                      {item.label}
                    </Link>
                    {active && <ActiveBar />}
                  </li>
                );
              }

              const key = item.menu;
              const open = menu === key;
              const panelId = `menu-${key}`;
              return (
                <li key={item.href} className="flex h-full items-center" onMouseEnter={() => openMenu(key)}>
                  <div className={`relative flex h-full items-center`}>
                    <div className={`flex items-center rounded-full transition ${open ? "bg-brand-50" : ""}`}>
                      <Link
                        href={item.href}
                        onClick={closeAll}
                        aria-current={active ? "page" : undefined}
                        className={`${text} py-2 pr-0.5 pl-3.5 xl:pl-4`}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => openMenu(open ? null : key)}
                        aria-expanded={open}
                        aria-controls={panelId}
                        aria-label={`${item.label} menu`}
                        className="mr-1 grid size-7 place-items-center rounded-full text-ink-400 transition hover:text-brand-700"
                      >
                        <ChevronDown className={`size-4 transition ${open ? "rotate-180 text-brand-700" : ""}`} aria-hidden />
                      </button>
                    </div>
                    {active && <ActiveBar />}
                  </div>
                  {open && <MegaPanel id={panelId} menuKey={key} onNavigate={closeAll} />}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={telHref}
            className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-ink-800 transition hover:text-brand-700 xl:inline-flex"
          >
            <span className="grid size-8 place-items-center rounded-full bg-magenta-50 text-magenta-600">
              <Phone className="size-4" aria-hidden />
            </span>
            {site.phone}
          </a>
          <BookLink
            onClick={closeAll}
            className="bg-cta-gradient shadow-glow hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold whitespace-nowrap text-white transition hover:brightness-110 sm:inline-flex"
          >
            Book a Test
            <ArrowRight className="size-4" aria-hidden />
          </BookLink>
          <button
            type="button"
            onClick={() => setMobilePath(mobileOpen ? null : pathname)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center rounded-full border border-ink-200 bg-white text-ink-800 transition hover:border-brand-300 lg:hidden"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      <MobileNav open={mobileOpen} isActive={isActive} onNavigate={closeAll} />
    </header>
  );
}

// Gradient underline marking the current page, sitting on the header's bottom edge.
function ActiveBar() {
  return <span className="bg-cta-gradient absolute inset-x-3.5 bottom-0 h-0.5 rounded-full xl:inset-x-4" aria-hidden />;
}

function MobileNav({
  open,
  isActive,
  onNavigate,
}: {
  open: boolean;
  isActive: (href: string) => boolean;
  onNavigate: () => void;
}) {
  const row = (active: boolean) =>
    `flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition ${
      active ? "bg-brand-50 text-brand-800" : "text-ink-700 hover:bg-brand-50"
    }`;
  const links: NavItem[] = [{ label: "Home", href: "/" }, ...nav];

  return (
    <div
      id="mobile-nav"
      className={`grid transition-[grid-template-rows] duration-300 lg:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
    >
      <div className="overflow-hidden" inert={!open}>
        <Container className="max-h-[calc(100dvh-7rem)] overflow-y-auto pb-6">
          <ul className="grid gap-1 border-t border-ink-100 pt-4">
            {links.map((item) =>
              item.menu ? (
                <li key={item.href}>
                  <details className="group">
                    <summary className={`${row(isActive(item.href))} cursor-pointer`}>
                      {item.label}
                      <ChevronDown className="size-4 text-ink-400 transition group-open:rotate-180" aria-hidden />
                    </summary>
                    <ul className="mt-1 mb-2 ml-4 grid gap-0.5 border-l border-ink-100 pl-3">
                      {menus[item.menu].items.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            onClick={onNavigate}
                            className="block rounded-lg px-3 py-2 text-[15px] text-ink-600 transition hover:bg-mist hover:text-brand-800"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link
                          href={item.href}
                          onClick={onNavigate}
                          className="inline-flex items-center gap-1.5 px-3 py-2 text-[15px] font-semibold text-magenta-600"
                        >
                          {menus[item.menu].cta} <ArrowRight className="size-4" aria-hidden />
                        </Link>
                      </li>
                    </ul>
                  </details>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={row(isActive(item.href))}
                  >
                    {item.label}
                    <ArrowRight className="size-4 text-ink-400" aria-hidden />
                  </Link>
                </li>
              ),
            )}
          </ul>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            <BookLink
              onClick={onNavigate}
              className="bg-cta-gradient flex items-center justify-center gap-2 rounded-full px-5 py-3.5 font-semibold text-white"
            >
              Book a Test <ArrowRight className="size-4" aria-hidden />
            </BookLink>
            <a
              href={telHref}
              className="flex items-center justify-center gap-2 rounded-full border border-ink-200 px-5 py-3.5 font-semibold text-ink-800"
            >
              <Phone className="size-4 text-magenta-600" aria-hidden /> {site.phone}
            </a>
          </div>
        </Container>
      </div>
    </div>
  );
}
