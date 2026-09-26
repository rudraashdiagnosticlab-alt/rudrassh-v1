import Image from "next/image";
import { ArrowRight, Award, CalendarCheck, CircleCheck, ClipboardList, MapPin, Microscope, Phone } from "lucide-react";
// Placeholder photo: CDC on Unsplash (Unsplash License).
// Replace with a photo of the Rudraash lab when available.
import heroPhoto from "@/assets/hero-lab-test.jpg";
import { Container } from "@/components/ui/Container";
import { HeroSearch } from "@/components/home/HeroSearch";
import { packages } from "@/lib/data";
import { site, telHref } from "@/lib/site";
import { BOOK_SECTION_ID } from "@/lib/booking";

const trustPoints = ["5+ Years of Experience", "Advanced Technology", "Patient-Centric Care"];

export function Hero() {
  return (
    <section className="relative">
      <div className="bg-night relative isolate overflow-hidden">
        <div className="absolute top-1/4 -left-48 -z-10 size-[34rem] rounded-full bg-magenta-600/30 blur-3xl" aria-hidden />
        <div className="absolute -top-24 left-1/4 -z-10 size-[26rem] rounded-full bg-brand-500/20 blur-3xl" aria-hidden />

        {/* Photo: top strip on mobile, right half on desktop, blended into the dark panel */}
        <div className="relative h-[22rem] mask-b-from-45% sm:h-[26rem] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-1/2 lg:mask-l-from-75% lg:mask-b-from-65%">
          <Image
            src={heroPhoto}
            alt="Lab technician pipetting blood samples into test tubes"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            placeholder="blur"
            loading="eager"
            fetchPriority="high"
            className="object-cover object-[center_8%] lg:object-[center_4%]"
          />
          <div className="absolute inset-0 bg-brand-800/15 mix-blend-multiply" aria-hidden />
        </div>

        <Container className="relative -mt-16 pb-24 sm:-mt-24 sm:pb-28 lg:mt-0 lg:pt-24 lg:pb-32">
          <div className="max-w-xl lg:max-w-[36rem] xl:max-w-[38rem]">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 py-1 pr-3 pl-1 text-xs font-semibold text-white backdrop-blur sm:text-sm">
              <span className="bg-cta-gradient inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] sm:text-xs">
                <MapPin className="size-3" aria-hidden /> Labs in
              </span>
              {site.locations.join(" · ")}
            </p>

            <h1 className="font-display mt-6 text-[2.6rem] leading-[1.05] font-semibold tracking-tight text-white sm:text-6xl lg:text-[3.5rem] xl:text-6xl">
              The Diagnostic Care You Deserve,
              <span className="text-gradient-light block">From Experts You Trust</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-white/80">
              {site.description}
            </p>

            <HeroSearch tone="dark" />

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-white/85">
              {trustPoints.map((t) => (
                <li key={t} className="inline-flex items-center gap-2">
                  <CircleCheck className="size-4.5 text-magenta-300" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Glass highlight card over the photo */}
          <div className="animate-float absolute right-8 bottom-32 hidden w-72 rounded-2xl border border-white/20 bg-white/10 p-2 text-white shadow-2xl backdrop-blur-xl xl:block">
            <div className="flex items-center gap-3 rounded-xl p-3">
              <span className="grid size-10 place-items-center rounded-xl bg-white/15">
                <Award className="size-5 text-magenta-300" aria-hidden />
              </span>
              <span>
                <span className="block text-xs text-white/70">Since {site.founded}</span>
                <span className="font-display block text-base font-semibold">5+ Years of Experience</span>
              </span>
            </div>
            <div className="mx-3 border-t border-white/15" />
            <div className="flex items-center gap-3 rounded-xl p-3">
              <span className="grid size-10 place-items-center rounded-xl bg-white/15">
                <MapPin className="size-5 text-magenta-300" aria-hidden />
              </span>
              <span>
                <span className="block text-xs text-white/70">{site.locations.join(" · ")}</span>
                <span className="font-display block text-base font-semibold">{site.locations.length} Lab Locations</span>
              </span>
            </div>
          </div>
        </Container>
      </div>

      <QuickActions />
    </section>
  );
}

const actions = [
  {
    title: "Book a Test",
    text: "Choose your location and package",
    href: `#${BOOK_SECTION_ID}`,
    icon: CalendarCheck,
  },
  {
    title: "Our Packages",
    text: `${packages.length} health checkup packages`,
    href: "#packages",
    icon: ClipboardList,
  },
  {
    title: "Our Services",
    text: "Hematology, biochemistry, genetics & more",
    href: "#services",
    icon: Microscope,
  },
  {
    title: "Call Us",
    text: site.phone,
    href: telHref,
    icon: Phone,
  },
];

function QuickActions() {
  return (
    <Container className="relative z-10 -mt-14 sm:-mt-16">
      <ul className="shadow-premium grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-ink-200 ring-1 ring-ink-200 xl:grid-cols-4">
        {actions.map(({ icon: Icon, ...a }) => (
          <li key={a.title} className="bg-white">
            <a
              href={a.href}
              className="group flex h-full flex-col gap-4 p-5 transition-colors duration-300 hover:bg-mist sm:flex-row sm:items-center sm:p-6"
            >
              <span className="group-hover:bg-cta-gradient grid size-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition duration-300 group-hover:text-white group-hover:ring-transparent">
                <Icon className="size-6" strokeWidth={1.7} aria-hidden />
              </span>
              <span className="min-w-0 flex-1">
                <span className="font-display block text-base font-semibold text-ink-900">{a.title}</span>
                <span className="mt-1 block text-[13px] leading-snug text-ink-500 sm:text-sm">{a.text}</span>
              </span>
              <ArrowRight
                className="hidden size-4 shrink-0 text-ink-300 transition group-hover:translate-x-0.5 group-hover:text-magenta-600 sm:block"
                aria-hidden
              />
            </a>
          </li>
        ))}
      </ul>
    </Container>
  );
}
