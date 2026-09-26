import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUp, ArrowUpRight, ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import mark from "@/assets/rudraash-mark.webp";
import { Container } from "@/components/ui/Container";
import { SocialIcons } from "@/components/ui/SocialIcons";
import { services } from "@/lib/data";
import { BookLink } from "@/components/ui/BookLink";
import { mailHref, site, telHref } from "@/lib/site";

const company = [
  { label: "About Us", href: "/about-us" },
  { label: "Our Vision & Mission", href: "/about-us#vision" },
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "Training Academy", href: "/training-academy" },
  { label: "Contact Us", href: "/contact-us" },
];

const contacts = [
  { icon: Phone, label: "Call us", value: site.phone, href: telHref },
  { icon: Mail, label: "Email us", value: site.email, href: mailHref },
  { icon: MapPin, label: "Our labs", value: site.locations.join(" · "), href: "/contact-us" },
];

const heading = "text-xs font-semibold tracking-[0.22em] text-magenta-300 uppercase";

export function Footer() {
  return (
    <footer className="bg-night relative isolate overflow-hidden pb-24 text-brand-100/70 sm:pb-0">
      <div
        className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-magenta-500/70 to-transparent"
        aria-hidden
      />
      <div className="absolute -top-48 -left-40 -z-10 size-[32rem] rounded-full bg-magenta-600/20 blur-3xl" aria-hidden />
      <div className="absolute -right-40 bottom-0 -z-10 size-[34rem] rounded-full bg-brand-500/25 blur-3xl" aria-hidden />

      <Container className="pt-16 pb-16 lg:pt-20 lg:pb-20">
        {/* Contact cards */}
        <ul className="grid gap-4 lg:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)_minmax(0,1fr)]">
          {contacts.map(({ icon: Icon, label, value, href }, i) => (
            <li key={label} className={i === contacts.length - 1 ? "lg:col-span-2 xl:col-span-1" : undefined}>
              <Link
                href={href}
                className="group ring-gradient flex h-full items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:border-transparent hover:bg-white/[0.07] hover:[--ring-o:1]"
              >
                <span className="bg-cta-gradient shadow-glow grid size-12 shrink-0 place-items-center rounded-2xl text-white">
                  <Icon className="size-5" aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] font-semibold tracking-[0.2em] text-brand-200/70 uppercase">{label}</span>
                  <span className="font-display mt-1 block truncate text-[15px] font-semibold text-white sm:text-lg">{value}</span>
                </span>
                <ArrowUpRight
                  className="ml-auto hidden size-5 shrink-0 text-white/30 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-magenta-300 sm:block"
                  aria-hidden
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Link columns */}
        <div className="mt-14 grid gap-12 border-t border-white/10 pt-14 md:grid-cols-2 xl:grid-cols-12 xl:gap-10">
          <div className="xl:col-span-4">
            <div className="flex items-center gap-3">
              <Image src={mark} alt="" className="h-12 w-auto" sizes="48px" />
              <div>
                <p className="font-display text-2xl leading-none font-bold tracking-tight text-white">{site.shortName}</p>
                <p className="mt-1 text-[11px] font-medium tracking-[0.18em] text-brand-200 uppercase">
                  Diagnostics &amp; Labs Pvt Ltd
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed">{site.blurb}</p>
            <p className={`${heading} mt-8`}>Follow us on</p>
            <SocialIcons className="mt-4" />
          </div>

          <div className="md:order-last md:col-span-2 xl:order-none xl:col-span-6">
            <p className={heading}>Services</p>
            <ul className="mt-5 grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services#${s.slug}`} className="group inline-flex items-start gap-1.5 transition hover:text-white">
                    <ChevronRight
                      className="mt-[3px] size-3.5 shrink-0 text-brand-200/40 transition group-hover:translate-x-0.5 group-hover:text-magenta-300"
                      aria-hidden
                    />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="xl:col-span-2">
            <p className={heading}>Company</p>
            <ul className="mt-5 space-y-3 text-sm">
              {company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="group inline-flex items-start gap-1.5 transition hover:text-white">
                    <ChevronRight
                      className="mt-[3px] size-3.5 shrink-0 text-brand-200/40 transition group-hover:translate-x-0.5 group-hover:text-magenta-300"
                      aria-hidden
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <BookLink
              className="bg-cta-gradient shadow-glow mt-8 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold whitespace-nowrap text-white transition hover:brightness-110"
            >
              Book a Test <ArrowRight className="size-4" aria-hidden />
            </BookLink>
          </div>
        </div>
      </Container>

      <div className="relative border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-xs sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <a href="#top" className="group inline-flex items-center gap-3 font-medium text-white/80 transition hover:text-white">
            Back to top
            <span className="group-hover:bg-cta-gradient grid size-9 place-items-center rounded-full bg-white/[0.06] ring-1 ring-white/15 transition group-hover:ring-transparent">
              <ArrowUp className="size-4 transition group-hover:-translate-y-0.5" aria-hidden />
            </span>
          </a>
        </Container>
      </div>
    </footer>
  );
}
