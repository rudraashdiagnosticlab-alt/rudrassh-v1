export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  const center = align === "center";
  const line = `h-px w-8 ${dark ? "bg-linear-to-r from-magenta-300 to-brand-300" : "bg-linear-to-r from-magenta-600 to-brand-600"}`;
  return (
    <div className={`reveal max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <p
        className={`inline-flex items-center gap-3 text-xs font-semibold tracking-[0.22em] uppercase ${
          dark ? "text-magenta-300" : "text-magenta-600"
        }`}
      >
        <span className={line} aria-hidden />
        {eyebrow}
        {center && <span className={`${line} rotate-180`} aria-hidden />}
      </p>
      <h2
        className={`font-display mt-5 text-[2rem] leading-[1.1] font-semibold tracking-[-0.02em] text-balance sm:text-4xl lg:text-[2.75rem] ${
          dark ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base leading-relaxed text-pretty sm:text-lg ${dark ? "text-brand-100/75" : "text-ink-500"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
