import { Hero } from "@/components/home/Hero";
import { About } from "@/components/sections/About";
import { VisionMission } from "@/components/sections/VisionMission";
import { Services } from "@/components/sections/Services";
import { Packages } from "@/components/sections/Packages";
import { BookingSection } from "@/components/sections/BookingSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBand } from "@/components/sections/CtaBand";

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
