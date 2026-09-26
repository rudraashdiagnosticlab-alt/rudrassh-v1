import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BookingForm } from "@/components/home/BookingForm";
import { BOOK_SECTION_ID } from "@/lib/booking";
import { mailHref, site, telHref } from "@/lib/site";

export function BookingSection() {
  return (
    <section id={BOOK_SECTION_ID} className="py-24 lg:py-32">
      <Container>
        <div className="bg-night-glow ring-gradient relative isolate overflow-hidden rounded-[2.5rem] px-6 py-12 [--ring-o:0.6] sm:px-10 sm:py-16 lg:px-16">
          <div className="absolute -top-32 -left-32 -z-10 size-[26rem] rounded-full bg-magenta-600/30 blur-3xl" aria-hidden />
          <div className="absolute top-1/3 -right-40 -z-10 size-[28rem] rounded-full bg-brand-500/30 blur-3xl" aria-hidden />

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-white">
              <p className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-magenta-300 uppercase">
                <span className="h-px w-8 bg-linear-to-r from-magenta-300 to-brand-300" aria-hidden />
                Comprehensive Care Coordination
              </p>
              <h2 className="font-display mt-5 text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl">
                Easy Appointments, Exceptional Care.
              </h2>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-brand-100/80">
                Seamless coordination of tests, reports, and expert support for a smooth healthcare experience.
              </p>

              <p className="mt-10 text-xs font-semibold tracking-[0.22em] text-brand-200/70 uppercase">Our labs</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {site.locations.map((l) => (
                  <li
                    key={l}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 font-medium backdrop-blur"
                  >
                    <MapPin className="size-4 text-magenta-300" aria-hidden />
                    {l}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={telHref}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3.5 font-semibold text-brand-800 transition hover:bg-brand-50"
                >
                  <Phone className="size-4" aria-hidden /> {site.phone}
                </a>
                <a
                  href={mailHref}
                  className="inline-flex min-w-0 items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-5 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white/15"
                >
                  <Mail className="size-4 shrink-0" aria-hidden /> <span className="truncate">{site.email}</span>
                </a>
              </div>
            </div>

            <BookingForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
