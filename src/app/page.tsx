import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/sections/About";
import { VisionMission } from "@/components/sections/VisionMission";
import { Services } from "@/components/sections/Services";
import { Packages } from "@/components/sections/Packages";
import { BookingSection } from "@/components/sections/BookingSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBand } from "@/components/sections/CtaBand";

// Title, description and link preview come from the layout.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <VisionMission />
      <Services showAllLink />
      <Packages limit={8} />
      <BookingSection />
      <Testimonials />
      <CtaBand />
    </>
  );
}
