import { Check, Quote } from "lucide-react";
import type { Block } from "@/lib/content";

const blockTitle = "font-display text-xl font-semibold text-ink-900 sm:text-2xl";

function CheckDot({ tone = "light" }: { tone?: "light" | "brand" }) {
  return (
    <span
      className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full ${
        tone === "brand" ? "bg-cta-gradient text-white" : "bg-brand-50 text-brand-700 ring-1 ring-brand-100"
      }`}
      aria-hidden
    >
      <Check className="size-3" strokeWidth={3} />
    </span>
  );
}

// Renders one content block of a service or package page (see lib/content.ts).
export function ContentBlock({ block }: { block: Block }) {
  switch (block.type) {
    case "text":
      return (
        <div>
          {block.title && <h3 className={blockTitle}>{block.title}</h3>}
          {block.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="mt-3 text-base leading-relaxed text-pretty text-ink-500 sm:text-[17px]">
              {p}
            </p>
          ))}
        </div>
      );

    case "tests":
      return (
        <div className="shadow-soft overflow-hidden rounded-3xl border border-ink-200/60 bg-white">
          <div className="flex items-center justify-between gap-4 border-b border-ink-100 bg-mist/60 px-6 py-5 sm:px-8">
            <h3 className="font-display text-lg font-semibold text-ink-900 sm:text-xl">{block.title}</h3>
            <span className="shrink-0 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-100">
              {block.tests.length} {block.tests.length === 1 ? "test" : "tests"}
            </span>
          </div>
          <ul className="grid gap-x-6 p-3 sm:grid-cols-2 sm:p-4">
            {block.tests.map((t) => (
              <li
                key={t}
                className="flex items-start gap-3 rounded-2xl px-3 py-2.5 text-[15px] leading-snug text-ink-700 transition-colors hover:bg-mist"
              >
                <CheckDot />
                {t}
              </li>
            ))}
          </ul>
          {block.note && <p className="border-t border-ink-100 px-6 py-4 text-sm text-ink-500 sm:px-8">{block.note}</p>}
        </div>
      );

    case "topics": {
      const long = block.items.every((i) => (i.text?.length ?? 0) > 240);
      return (
        <div>
          {block.title && <h3 className={`${blockTitle} mb-6`}>{block.title}</h3>}
          <ol className={`grid gap-4 ${long ? "" : "sm:grid-cols-2 sm:[&>li:last-child:nth-child(odd)]:col-span-2"}`}>
            {block.items.map((item, i) => (
              <li
                key={item.title}
                className="group ring-gradient shadow-soft hover:shadow-premium relative rounded-3xl border border-ink-200/60 bg-white p-6 transition duration-300 hover:border-transparent hover:[--ring-o:1] sm:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <h4 className="font-display text-lg leading-snug font-semibold text-ink-900">{item.title}</h4>
                  {block.numbered && (
                    <span
                      className="font-display text-outline -mt-1 text-4xl leading-none font-semibold tabular-nums [--outline-color:var(--color-brand-200)] group-hover:[--outline-color:var(--color-magenta-500)]"
                      aria-hidden
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  )}
                </div>
                {item.text && <p className="mt-3 text-[15px] leading-relaxed text-pretty text-ink-500">{item.text}</p>}
              </li>
            ))}
          </ol>
        </div>
      );
    }

    case "facts":
      return (
        <div>
          <h3 className={blockTitle}>{block.title}</h3>
          <dl className="shadow-soft mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-ink-200 ring-1 ring-ink-200 lg:grid-cols-4">
            {block.items.map((f) => (
              <div key={f.label} className="flex flex-col-reverse justify-end bg-white p-5">
                <dd className="font-display mt-1.5 text-base leading-snug font-semibold text-ink-900">{f.value}</dd>
                <dt className="text-xs font-semibold tracking-[0.18em] text-ink-400 uppercase">{f.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      );

    case "checklist":
      return (
        <div className="rounded-3xl bg-mist p-6 ring-1 ring-brand-100 sm:p-8">
          <h3 className="font-display text-lg font-semibold text-ink-900 sm:text-xl">{block.title}</h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {block.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[15px] font-medium text-ink-800">
                <CheckDot tone="brand" />
                {item}
              </li>
            ))}
          </ul>
          {block.text && <p className="mt-6 border-t border-brand-100 pt-5 leading-relaxed text-ink-500">{block.text}</p>}
        </div>
      );

    case "quote":
      return (
        <figure className="bg-night-glow ring-gradient relative overflow-hidden rounded-3xl p-8 [--ring-o:0.6] sm:p-10">
          <Quote className="absolute top-6 right-6 size-14 text-white/[0.07]" strokeWidth={1} aria-hidden />
          <blockquote className="font-display relative text-xl leading-snug font-medium text-pretty text-white sm:text-2xl">
            {block.text}
          </blockquote>
        </figure>
      );
  }
}
