import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { TagList } from "@/components/ui/TagList";
import { SplitIntro } from "@/components/sections/SplitIntro";
import { Packages } from "@/components/sections/Packages";
import { BookingSection } from "@/components/sections/BookingSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { packages, packagesIntro } from "@/lib/data";

export const metadata: Metadata = {
  title: "Health Packages",
  description: `${packages.length} diagnostic packages including diabetes, cardiac, thyroid, vitamin, fertility, PCOS, antenatal and master health check-ups at Rudraash Diagnostics & Labs.`,
  alternates: { canonical: "/packages" },
};

export default function PackagesPage() {
  return (
    <>
      <PageHero
        crumb="Packages"
        title="Rudraash Health"
        highlight="Packages"
        description="Thoughtfully designed diagnostic packages to support preventive healthcare and early disease detection."
      />
      <SplitIntro
        eyebrow="Our Lab Packages"
        title={
          <>
            Quality Care, <span className="text-gradient">Wide Range of Packages.</span>
          </>
        }
        paragraphs={packagesIntro}
        aside={
          <TagList
            label="Packages include"
            items={["Routine Check-ups", "Diabetes", "Thyroid", "Anemia", "Vitamin", "Cardiac", "Fertility", "Antenatal", "Specialty Profiles"]}
          />
        }
      />
      <Packages />
      <BookingSection />
      <CtaBand />
    </>
  );
}
