// Small pill tags (used beside inner-page introductions).
export function TagList({ label, items }: { label: string; items: readonly string[] }) {
  return (
    <div>
      <p className="text-xs font-semibold tracking-[0.22em] text-ink-400 uppercase">{label}</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {items.map((t) => (
          <li key={t} className="bg-mist rounded-full px-3.5 py-1.5 text-sm font-medium text-brand-800 ring-1 ring-brand-100">
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}
