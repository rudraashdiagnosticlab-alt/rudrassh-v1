import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Dna, Microscope, Phone, TestTubes } from "lucide-react";
import mark from "@/assets/rudraash-mark.webp";
import { Container } from "@/components/ui/Container";
import { site, telHref } from "@/lib/site";

const orbitChip =
  "absolute grid size-14 place-items-center rounded-2xl bg-white/15 text-white shadow-lg shadow-brand-950/30 ring-1 ring-white/30 backdrop-blur-md";

function LabOrbit() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[24rem]" aria-hidden>
      <div className="absolute inset-0 rounded-full border border-white/10" />
      <div className="absolute inset-[9%] animate-[spin_48s_linear_infinite] rounded-full border border-dashed border-white/25" />
      <div className="absolute inset-[22%] rounded-full border border-white/20 bg-white/[0.06] backdrop-blur-sm" />
      <div className="absolute inset-[22%] rounded-full bg-magenta-500/30 blur-2xl" />

      <div className="absolute inset-[33%] grid place-items-center rounded-full bg-white shadow-2xl shadow-brand-950/40 ring-8 ring-white/15">
        <Image src={mark} alt="" sizes="96px" className="h-[58%] w-auto" />
      </div>

      <span className={`${orbitChip} animate-float top-[4%] left-[16%]`}>
        <Microscope className="size-6" strokeWidth={1.7} />
      </span>
      <span className={`${orbitChip} animate-float-delayed top-[40%] -right-1`}>
        <TestTubes className="size-6" strokeWidth={1.7} />
      </span>
      <span className={`${orbitChip} animate-float bottom-[2%] left-[26%]`}>
        <Dna className="size-6" strokeWidth={1.7} />
      </span>

      <span className="absolute top-[18%] right-[14%] size-2.5 rounded-full bg-white shadow-[0_0_12px_4px_rgb(255_255_255/0.45)]" />
      <span className="absolute bottom-[24%] left-[4%] size-2 rounded-full bg-white/80" />
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="py-24 lg:py-28">
      <Container>
        <div className="bg-signature shadow-premium reveal relative isolate overflow-hidden rounded-[2.5rem] px-6 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-14">
          <div className="absolute -right-20 -bottom-40 -z-10 size-[28rem] rounded-full bg-brand-950/50 blur-3xl" aria-hidden />

          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
            <div className="text-center lg:text-left">
              <p className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-white/80 uppercase">
                <span className="h-px w-8 bg-white/50" aria-hidden />
                Get in Touch
              </p>
              <h2 className="font-display mt-5 text-4xl leading-[1.05] font-semibold tracking-[-0.02em] text-balance text-white sm:text-5xl lg:text-[3.5rem]">
                Your Health is Our Priority.
              </h2>
              <p className="font-display mt-5 text-xl leading-snug text-balance text-white/85 sm:text-2xl">
                Reach Out to Us Today for Expert Care.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
                <Link
                  href="/packages"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-brand-800 shadow-lg shadow-brand-950/25 transition hover:bg-brand-50"
                >
                  Explore Packages
                  <ArrowRight className="size-4 transition group-hover:translate-x-0.5" aria-hidden />
                </Link>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white/20"
                >
                  Contact Us
                </Link>
              </div>

              <a
                href={telHref}
                className="group mt-8 inline-flex items-center gap-3 text-sm text-white/80 transition hover:text-white"
              >
                <span className="grid size-9 place-items-center rounded-full bg-white/15 ring-1 ring-white/25 transition group-hover:bg-white group-hover:text-magenta-600">
                  <Phone className="size-4" aria-hidden />
                </span>
                <span>
                  Or call us on <span className="font-semibold text-white">{site.phone}</span>
                </span>
              </a>
            </div>

            <div className="hidden lg:block">
              <LabOrbit />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
