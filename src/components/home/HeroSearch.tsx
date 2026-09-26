"use client";

import { useId, useRef, useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { packages, services } from "@/lib/data";
import { requestBooking } from "@/lib/booking";

const quickPicks = ["Master Health", "Diabetes", "Thyroid", "Vitamin", "PCOS"];
const catalogue = [
  ...packages.map((p) => ({ ...p, kind: "Package" })),
  ...services.map((s) => ({ ...s, kind: "Service" })),
];

export function HeroSearch({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const listId = useId();
  const inputRef = useRef<HTMLInputElement>(null);

  const q = query.trim().toLowerCase();
  const results = q
    ? catalogue
        .filter((t) => t.name.toLowerCase().includes(q) || t.description.toLowerCase().includes(q))
        .sort((a, b) => Number(b.name.toLowerCase().includes(q)) - Number(a.name.toLowerCase().includes(q)))
        .slice(0, 5)
    : [];
  const open = q.length > 0;

  const choose = (name: string) => {
    setQuery("");
    requestBooking(name);
  };

  return (
    <div className="relative mt-8 max-w-xl">
      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          if (results[active]) choose(results[active].name);
          else if (q) choose(query.trim());
        }}
        className="shadow-lift flex items-center gap-2 rounded-full border border-ink-200/80 bg-white p-1.5 pl-5 transition focus-within:border-brand-300 focus-within:ring-4 focus-within:ring-brand-100"
      >
        <Search className="size-5 shrink-0 text-ink-400" aria-hidden />
        <label htmlFor={`${listId}-input`} className="sr-only">
          Search health packages and services
        </label>
        <input
          ref={inputRef}
          id={`${listId}-input`}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActive(0);
          }}
          onKeyDown={(e) => {
            if (!results.length) return;
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setActive((i) => (i + 1) % results.length);
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              setActive((i) => (i - 1 + results.length) % results.length);
            } else if (e.key === "Escape") {
              setQuery("");
            }
          }}
          placeholder="Search packages, e.g. Thyroid, Diabetes"
          autoComplete="off"
          role="combobox"
          aria-expanded={open}
          aria-controls={listId}
          aria-activedescendant={results[active] ? `${listId}-${active}` : undefined}
          className="min-w-0 flex-1 bg-transparent py-2.5 text-[15px] text-ink-900 outline-none placeholder:text-ink-400 focus-visible:outline-none"
        />
        <button
          type="submit"
          className="bg-cta-gradient inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-white transition hover:brightness-110 sm:px-5"
        >
          <span className="hidden sm:inline">Search</span>
          <ArrowRight className="size-4 sm:hidden" aria-hidden />
          <span className="sr-only sm:hidden">Search</span>
        </button>
      </form>

      {open && (
        <ul
          id={listId}
          role="listbox"
          className="shadow-lift absolute inset-x-0 top-full z-20 mt-2 overflow-hidden rounded-2xl border border-ink-200/80 bg-white p-2"
        >
          {results.length === 0 ? (
            <li className="px-3 py-3 text-sm text-ink-500">
              We couldn&apos;t find that one. Press Enter and we&apos;ll help you book &ldquo;{query.trim()}&rdquo; anyway.
            </li>
          ) : (
            results.map((t, i) => (
              <li
                key={t.name}
                id={`${listId}-${i}`}
                role="option"
                aria-selected={i === active}
                onMouseEnter={() => setActive(i)}
                onMouseDown={(e) => {
                  e.preventDefault();
                  choose(t.name);
                }}
                className={`flex cursor-pointer items-start justify-between gap-3 rounded-xl px-3 py-2.5 ${
                  i === active ? "bg-brand-50" : ""
                }`}
              >
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-ink-900">{t.name}</span>
                  <span className="line-clamp-1 block text-xs text-ink-500">{t.description}</span>
                </span>
                <span className="shrink-0 rounded-full bg-brand-50 px-2 py-0.5 text-[11px] font-semibold text-brand-700">
                  {t.kind}
                </span>
              </li>
            ))
          )}
        </ul>
      )}

      <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
        <span className={dark ? "text-white/70" : "text-ink-500"}>Popular:</span>
        {quickPicks.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => {
              setQuery(p);
              inputRef.current?.focus();
              setActive(0);
            }}
            className={`rounded-full border px-3 py-1 font-medium transition ${
              dark
                ? "border-white/20 bg-white/10 text-white backdrop-blur hover:border-white/40 hover:bg-white/20"
                : "border-ink-200 bg-white/70 text-ink-600 hover:border-brand-300 hover:text-brand-700"
            }`}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
}
