import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { About } from "@/components/sections/About";
import { VisionMission } from "@/components/sections/VisionMission";
import { LabCards } from "@/components/sections/LabCards";
import { CtaBand } from "@/components/sections/CtaBand";
import { academy } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Rudraash Diagnostics & Labs is a state-of-the-art medical diagnostics facility started in 2021 at Dindigul and expanded to Trichy and Thanjavur, offering pathology, microbiology, molecular biology and genetic studies.",
  alternates: { canonical: "/about-us" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About Us"
        title="Dedicated to Excellence in"
        highlight="Lab Services."
        description="A state-of-the-art medical diagnostics facility, started in Dindigul in 2021 and further expanded to Trichy and Thanjavur."
      />
      <About full />
      <VisionMission />
      <LabCards />
      <AcademyTeaser />
      <CtaBand />
    </>
  );
}

function AcademyTeaser() {
  return (
    <section className="pt-24 lg:pt-32">
      <Container>
        <div className="reveal ring-gradient shadow-soft grid items-center gap-8 rounded-[2rem] border border-ink-200/60 bg-white p-8 [--ring-o:0.5] sm:p-10 lg:grid-cols-[auto_1fr_auto] lg:gap-10">
          <span className="bg-cta-gradient shadow-glow grid size-16 place-items-center rounded-2xl text-white">
            <GraduationCap className="size-8" strokeWidth={1.6} aria-hidden />
          </span>
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-magenta-600 uppercase">Rudraash Training Academy</p>
            <p className="font-display mt-3 text-2xl leading-snug font-semibold text-balance text-ink-900">
              {academy.approval}
            </p>
            <p className="mt-2 text-ink-500">
              {academy.programs.map((p) => `${p.count} ${p.label.toLowerCase()}`).join(" · ")}, plus research, publication
              and dissertation guidance.
            </p>
          </div>
          <Link
            href="/training-academy"
            className="group inline-flex w-fit items-center gap-2 rounded-full bg-night px-6 py-3.5 font-semibold text-white transition hover:bg-brand-900"
          >
            Explore the academy
            <ArrowRight className="size-4 transition group-hover:translate-x-0.5" aria-hidden />
          </Link>
        </div>
      </Container>
    </section>
  );
}
