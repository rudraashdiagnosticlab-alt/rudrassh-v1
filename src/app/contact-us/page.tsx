import type { Metadata } from "next";
import { Mail, Phone, Share2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SocialIcons } from "@/components/ui/SocialIcons";
import { LabFinder } from "@/components/sections/LabFinder";
import { BookingSection } from "@/components/sections/BookingSection";
import { mailHref, site, telHref } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Addresses, home collection numbers and hours for Rudraash Diagnostics & Labs in Trichy, Dindigul and Thanjavur, plus online appointment booking.",
  path: "/contact-us",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact Us"
        title="Your Health, Our Mission."
        highlight="Get in Touch Today."
        description="Visit any of our three labs, call for home sample collection, or book an appointment online."
      />

      <Container className="relative z-10 -mt-10 sm:-mt-12">
        <ul className="shadow-premium grid gap-px overflow-hidden rounded-3xl bg-ink-200 ring-1 ring-ink-200 md:grid-cols-3">
          <li className="bg-white">
            <a href={telHref} className="group flex h-full items-center gap-4 p-6 transition-colors hover:bg-mist">
              <IconTile>
                <Phone className="size-5" aria-hidden />
              </IconTile>
              <span>
                <span className="block text-xs font-semibold tracking-[0.2em] text-ink-400 uppercase">Call us</span>
                <span className="font-display mt-1 block text-lg font-semibold text-ink-900">{site.phone}</span>
              </span>
            </a>
          </li>
          <li className="bg-white">
            <a href={mailHref} className="group flex h-full min-w-0 items-center gap-4 p-6 transition-colors hover:bg-mist">
              <IconTile>
                <Mail className="size-5" aria-hidden />
              </IconTile>
              <span className="min-w-0">
                <span className="block text-xs font-semibold tracking-[0.2em] text-ink-400 uppercase">Email us</span>
                <span className="font-display mt-1 block truncate text-base font-semibold text-ink-900 sm:text-lg">{site.email}</span>
              </span>
            </a>
          </li>
          <li className="bg-white">
            <div className="flex h-full items-center gap-4 p-6">
              <IconTile>
                <Share2 className="size-5" aria-hidden />
              </IconTile>
              <span>
                <span className="block text-xs font-semibold tracking-[0.2em] text-ink-400 uppercase">Follow us</span>
                <SocialIcons size="light" className="mt-2" />
              </span>
            </div>
          </li>
        </ul>
      </Container>

      <LabFinder />
      <BookingSection />
    </>
  );
}

function IconTile({ children }: { children: React.ReactNode }) {
  return (
    <span className="group-hover:bg-cta-gradient grid size-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition duration-300 group-hover:text-white group-hover:ring-transparent">
      {children}
    </span>
  );
}
