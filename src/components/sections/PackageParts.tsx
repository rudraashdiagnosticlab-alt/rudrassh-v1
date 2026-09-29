import { ArrowRight, Check, ClipboardList, Clock3, House, Sparkles, TestTubes } from "lucide-react";
import { BookButton } from "@/components/ui/BookButton";
import type { PackageDetail } from "@/lib/packages";

function Tick({ unique }: { unique: boolean }) {
  return (
    <span
      className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full ${
        unique ? "bg-cta-gradient text-white" : "bg-brand-50 text-brand-700 ring-1 ring-brand-100"
      }`}
      aria-hidden
    >
      <Check className="size-3" strokeWidth={3} />
    </span>
  );
}

// One card per profile option; tests that only some options include are highlighted.
export function PackageVariants({ packageName, detail }: { packageName: string; detail: PackageDetail }) {
  const { variants } = detail;
  const multi = variants.length > 1;
  const inAll = (test: string) => variants.every((v) => v.tests.includes(test));

  return (
    <div>
      <div className={`grid gap-5 ${multi ? "xl:grid-cols-2" : ""}`}>
        {variants.map((v, i) => (
          <div
            key={v.name}
            className="ring-gradient shadow-soft flex flex-col overflow-hidden rounded-3xl border border-ink-200/60 bg-white [--ring-o:0] hover:[--ring-o:1]"
          >
            <div className="flex items-start justify-between gap-4 border-b border-ink-100 bg-mist/60 px-6 py-5">
              <div>
                {multi && (
                  <p className="text-[11px] font-semibold tracking-[0.2em] text-magenta-600 uppercase">Option {i + 1}</p>
                )}
                <h3 className="font-display mt-0.5 text-lg leading-snug font-semibold text-ink-900 sm:text-xl">{v.name}</h3>
              </div>
              <span className="mt-0.5 shrink-0 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-100">
                {v.tests.length} {v.tests.length === 1 ? "test" : "tests"}
              </span>
            </div>
            <ul className={`grid flex-1 content-start gap-x-6 p-3 sm:p-4 ${multi ? "" : "sm:grid-cols-2"}`}>
              {v.tests.map((t) => {
                const unique = multi && !inAll(t);
                return (
                  <li
                    key={t}
                    className={`flex items-start gap-3 rounded-2xl px-3 py-2.5 text-[15px] leading-snug transition-colors hover:bg-mist ${
                      unique ? "font-medium text-ink-900" : "text-ink-700"
                    }`}
                  >
                    <Tick unique={unique} />
                    {t}
                  </li>
                );
              })}
            </ul>
            <div className="border-t border-ink-100 p-4">
              <BookButton
                item={packageName}
                note={multi ? `Profile: ${v.name}` : undefined}
                className="group bg-night inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-900"
              >
                {multi ? "Book this option" : "Book this package"}
                <span className="sr-only">: {v.name}</span>
                <ArrowRight className="size-4 transition group-hover:translate-x-0.5" aria-hidden />
              </BookButton>
            </div>
          </div>
        ))}
      </div>
      {multi && (
        <p className="mt-4 flex items-center gap-2 text-sm text-ink-500">
          <Tick unique /> Only included in that option
        </p>
      )}
    </div>
  );
}

export function PackageOffer({ packageName, offer }: { packageName: string; offer: NonNullable<PackageDetail["offer"]> }) {
  return (
    <div className="bg-signature shadow-premium relative isolate overflow-hidden rounded-3xl p-7 text-white sm:p-9">
      <div className="absolute -right-16 -bottom-24 -z-10 size-72 rounded-full bg-brand-950/40 blur-3xl" aria-hidden />
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-md">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-white/80 uppercase">
            <Sparkles className="size-4" aria-hidden /> Special package
          </p>
          <h3 className="font-display mt-3 text-2xl font-semibold sm:text-3xl">{offer.title}</h3>
          <p className="mt-2 text-white/85">{offer.text}</p>
        </div>
        <div className="text-left sm:text-right">
          <p className="text-xs font-semibold tracking-[0.2em] text-white/70 uppercase">Package price</p>
          <p className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">{offer.price}</p>
        </div>
      </div>
      <BookButton
        item={packageName}
        note={`${offer.title} (${offer.price})`}
        className="group mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-brand-800 shadow-lg shadow-brand-950/25 transition hover:bg-brand-50"
      >
        Book the {offer.title}
        <ArrowRight className="size-4 transition group-hover:translate-x-0.5" aria-hidden />
      </BookButton>
    </div>
  );
}

export function PackageFacts({ detail }: { detail: PackageDetail }) {
  const facts = [
    detail.sample && { icon: TestTubes, label: "Sample", value: detail.sample },
    detail.fasting && { icon: Clock3, label: "Fasting", value: detail.fasting },
    detail.homeCollection && { icon: House, label: "Home collection", value: detail.homeCollection },
    ...(detail.instructions ?? []).map((i) => ({ icon: ClipboardList, label: i.label, value: i.value })),
  ].filter((f) => !!f);
  if (!facts.length) return null;

  return (
    <div>
      <h3 className="font-display text-xl font-semibold text-ink-900 sm:text-2xl">Sample &amp; preparation</h3>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {facts.map(({ icon: Icon, label, value }) => (
          <li
            key={label}
            className={`shadow-soft flex gap-4 rounded-3xl border border-ink-200/60 bg-white p-5 ${
              label === "Sample" && facts.length % 2 === 1 ? "sm:col-span-2" : ""
            }`}
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
              <Icon className="size-5" strokeWidth={1.8} aria-hidden />
            </span>
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-ink-400 uppercase">{label}</p>
              <p className="font-display mt-1 leading-snug font-semibold text-ink-900">{value}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
