import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SocialIcons } from "@/components/ui/SocialIcons";
import { mailHref, site, telHref } from "@/lib/site";

const chip = "grid size-6 place-items-center rounded-full bg-white/15";

export function TopBar() {
  return (
    <div className="relative bg-[linear-gradient(90deg,var(--color-brand-900)_0%,var(--color-brand-700)_45%,var(--color-magenta-600)_100%)] text-white">
      <div
        className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/25 to-transparent"
        aria-hidden
      />

      {/* Phones: locations and a tap-to-call number */}
      <Container className="flex h-9 items-center justify-between gap-3 text-xs md:hidden">
        <span className="inline-flex min-w-0 items-center gap-1.5 text-white/85">
          <MapPin className="size-3.5 shrink-0 text-white/80" aria-hidden />
          <span className="truncate">{site.locations.join(" · ")}</span>
        </span>
        <a href={telHref} className="inline-flex shrink-0 items-center gap-1.5 font-semibold">
          <Phone className="size-3.5" aria-hidden />
          {site.phone}
        </a>
      </Container>

      {/* Tablet and desktop */}
      <Container className="hidden h-11 items-center justify-between gap-6 text-[13px] md:flex">
        <div className="flex items-center gap-5">
          <a href={telHref} className="inline-flex items-center gap-2 font-medium transition hover:text-white/80">
            <span className={chip}>
              <Phone className="size-3" aria-hidden />
            </span>
            {site.phone}
          </a>
          <span className="h-4 w-px bg-white/20" aria-hidden />
          <a href={mailHref} className="inline-flex items-center gap-2 font-medium transition hover:text-white/80">
            <span className={chip}>
              <Mail className="size-3" aria-hidden />
            </span>
            {site.email}
          </a>
        </div>

        <div className="flex items-center gap-5">
          <p className="hidden items-center gap-2 text-white/85 lg:inline-flex">
            <MapPin className="size-3.5 text-white/80" aria-hidden />
            <span>
              Our labs: <span className="font-medium text-white">{site.locations.join(" · ")}</span>
            </span>
          </p>
          <span className="hidden h-4 w-px bg-white/20 lg:block" aria-hidden />
          <SocialIcons size="sm" />
        </div>
      </Container>
    </div>
  );
}
