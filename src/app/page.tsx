import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { VisionMission } from "@/components/home/VisionMission";
import { Services } from "@/components/home/Services";
import { Packages } from "@/components/home/Packages";
import { BookingSection } from "@/components/home/BookingSection";
import { Testimonials } from "@/components/home/Testimonials";
import { CtaBand } from "@/components/home/CtaBand";

export default function Home() {
  return (
    <>
      <div id="top" aria-hidden />
      <a
        href="#main"
        className="sr-only z-[60] rounded-lg bg-white px-4 py-2 font-semibold text-brand-800 focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <TopBar />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <VisionMission />
        <Services />
        <Packages />
        <BookingSection />
        <Testimonials />
        <CtaBand />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}
