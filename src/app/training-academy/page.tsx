import type { Metadata } from "next";
import { Award, BookOpenCheck, Building2, ClipboardCheck, GraduationCap, UserPlus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TagList } from "@/components/ui/TagList";
import { SplitIntro } from "@/components/sections/SplitIntro";
import { AcademyForm } from "@/components/sections/AcademyForm";
import { academy } from "@/lib/data";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Training Academy",
  description:
    "Rudraash Training Academy, approved by Bharathidasan University – IECD, offers short-term courses, certificate and diploma programs, internships, research collaboration and dissertation guidance.",
  path: "/training-academy",
});

const stepIcons = [UserPlus, ClipboardCheck, Award];

export default function TrainingAcademyPage() {
  return (
    <>
      <PageHero
        crumb="Training Academy"
        title="Dedicated to Excellence in"
        highlight="Health Care."
        description="Equipping students with advanced technological skills to enhance their employability."
      >
        <p className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] py-2 pr-5 pl-2 text-sm font-medium text-white backdrop-blur">
          <span className="bg-cta-gradient grid size-8 place-items-center rounded-full">
            <GraduationCap className="size-4" aria-hidden />
          </span>
          {academy.approval}
        </p>
      </PageHero>

      <SplitIntro
        eyebrow="Rudraash Training Academy"
        title={
          <>
            Advanced skills, <span className="text-gradient">better employability</span>
          </>
        }
        paragraphs={[
          academy.intro,
          "The academy offers a structured training program comprising two short-term courses, two certificate programs, and one diploma program. Apart from skill training, collaborative research projects, publications and thesis dissertation guidance are also provided to the students.",
        ]}
        aside={<TagList label="Also offered" items={academy.support} />}
      >
        <dl className="reveal shadow-soft mt-14 grid gap-px overflow-hidden rounded-3xl bg-ink-200 ring-1 ring-ink-200 sm:grid-cols-3 lg:mt-20">
          {academy.programs.map((p) => (
            <div key={p.label} className="flex flex-col-reverse justify-end bg-white p-6 sm:p-8">
              <dt className="mt-2 text-sm font-medium text-ink-500">{p.label}</dt>
              <dd className="font-display text-gradient text-5xl font-semibold tracking-tight">{p.count}</dd>
            </div>
          ))}
        </dl>
      </SplitIntro>

      <section className="bg-mist py-24 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title={
              <>
                From enrolment to <span className="text-gradient">certification</span>
              </>
            }
            description="Students are enrolled under Bharathidasan University, ensuring quality education aligned with industry standards."
          />
          <ol className="reveal ring-gradient shadow-soft mt-14 grid overflow-hidden rounded-[2rem] bg-white [--ring-o:0.4] lg:grid-cols-3">
            {academy.steps.map(({ title, text }, i) => {
              const Icon = stepIcons[i];
              return (
                <li
                  key={title}
                  className="group relative p-8 sm:p-10 [&:not(:first-child)]:border-t [&:not(:first-child)]:border-ink-100 lg:[&:not(:first-child)]:border-t-0 lg:[&:not(:first-child)]:border-l"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="group-hover:bg-cta-gradient grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition duration-300 group-hover:text-white group-hover:ring-transparent">
                      <Icon className="size-6" strokeWidth={1.7} aria-hidden />
                    </span>
                    <span
                      className="font-display text-outline text-6xl leading-none font-semibold tabular-nums [--outline-color:var(--color-brand-200)] group-hover:[--outline-color:var(--color-magenta-500)]"
                      aria-hidden
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display mt-10 text-xl font-semibold text-ink-900">{title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-500">{text}</p>
                </li>
              );
            })}
          </ol>
        </Container>
      </section>

      <section className="py-24 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="Collaborations"
            title={
              <>
                Partnered with <span className="text-gradient">leading institutions</span>
              </>
            }
            description={academy.collaborations}
          />
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {academy.partners.map((p) => (
              <li
                key={p.name}
                className="reveal group ring-gradient shadow-soft hover:shadow-premium flex flex-col items-center rounded-3xl border border-ink-200/60 bg-white p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-transparent hover:[--ring-o:1]"
              >
                <span className="group-hover:bg-cta-gradient grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition duration-300 group-hover:text-white group-hover:ring-transparent">
                  <Building2 className="size-6" strokeWidth={1.7} aria-hidden />
                </span>
                <p className="font-display mt-5 font-semibold text-ink-900">{p.name}</p>
                <p className="mt-1 text-sm text-ink-500">{p.city}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="enrol" className="scroll-mt-28 pb-24 lg:pb-32">
        <Container>
          <div className="bg-night-glow ring-gradient relative isolate overflow-hidden rounded-[2.5rem] px-6 py-12 [--ring-o:0.6] sm:px-10 sm:py-16 lg:px-16">
            <div className="absolute -top-32 -left-32 -z-10 size-[26rem] rounded-full bg-magenta-600/30 blur-3xl" aria-hidden />
            <div className="absolute top-1/3 -right-40 -z-10 size-[28rem] rounded-full bg-brand-500/30 blur-3xl" aria-hidden />

            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="text-white">
                <p className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-magenta-300 uppercase">
                  <span className="h-px w-8 bg-linear-to-r from-magenta-300 to-brand-300" aria-hidden />
                  Enrol Today
                </p>
                <h2 className="font-display mt-5 text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl">
                  Start your journey toward professional growth.
                </h2>
                <p className="mt-5 max-w-lg text-lg leading-relaxed text-brand-100/80">
                  Fill out the form today to enroll and start your journey toward professional growth and opportunity.
                </p>

                <p className="mt-10 text-xs font-semibold tracking-[0.22em] text-brand-200/70 uppercase">We can help with</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {academy.purposes.map((p) => (
                    <li
                      key={p}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm font-medium backdrop-blur"
                    >
                      <BookOpenCheck className="size-4 text-magenta-300" aria-hidden />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <AcademyForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
