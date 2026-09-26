"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { nav, site, telHref } from "@/lib/site";
import { BOOK_SECTION_ID } from "@/lib/booking";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled || open
          ? "border-b border-ink-200/70 bg-white/85 shadow-soft backdrop-blur-xl"
          : "border-b border-transparent bg-white/0"
      }`}
    >
      <Container className="flex h-18 items-center justify-between gap-6 sm:h-20">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-4 py-2 text-[15px] font-medium text-ink-600 transition hover:bg-brand-50 hover:text-brand-700"
                >
                  {item.label}
                </a>
              </li>
            ))}
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
          <a
            href={`#${BOOK_SECTION_ID}`}
            className="bg-cta-gradient shadow-glow hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110 sm:inline-flex"
          >
            Book a Test
            <ArrowRight className="size-4" aria-hidden />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center rounded-full border border-ink-200 bg-white text-ink-800 transition hover:border-brand-300 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      <div
        id="mobile-nav"
        className={`grid transition-[grid-template-rows] duration-300 lg:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden" inert={!open}>
          <Container className="pb-6">
            <ul className="grid gap-1 border-t border-ink-100 pt-4">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-ink-700 hover:bg-brand-50"
                  >
                    {item.label}
                    <ArrowRight className="size-4 text-ink-400" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={`#${BOOK_SECTION_ID}`}
              onClick={() => setOpen(false)}
              className="bg-cta-gradient mt-4 flex items-center justify-center gap-2 rounded-full px-5 py-3.5 font-semibold text-white"
            >
              Book a Test <ArrowRight className="size-4" aria-hidden />
            </a>
          </Container>
        </div>
      </div>
    </header>
  );
}
