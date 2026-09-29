import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { TagList } from "@/components/ui/TagList";
import { SplitIntro } from "@/components/sections/SplitIntro";
import { Services } from "@/components/sections/Services";
import { BookingSection } from "@/components/sections/BookingSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { servicesIntro } from "@/lib/data";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "Hematology, biochemistry, clinical pathology, hormones, serology, histopathology, microbiology, molecular biology and genetic studies at Rudraash labs in Trichy, Dindigul and Thanjavur.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        title="Quality Care, Wide Range of"
        highlight="Services."
        description="Accurate and reliable medical testing across our centers in Trichy, Dindigul and Thanjavur."
      />
      <SplitIntro
        eyebrow="Our Lab Solutions"
        title={
          <>
            Dedicated to Excellence in <span className="text-gradient">Lab Services.</span>
          </>
        }
        paragraphs={servicesIntro}
        aside={
          <div className="space-y-6">
            <TagList label="Including" items={["Pathology", "Hematology", "Biochemistry", "Preventive Health Check-ups"]} />
            <TagList label="Our centers" items={site.locations} />
          </div>
        }
      />
      <Services tinted />
      <BookingSection />
      <CtaBand />
    </>
  );
}
