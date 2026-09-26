import { site } from "@/lib/site";

const icons = {
  facebook: (
    <path d="M14 8.5V6.8c0-.8.2-1.3 1.4-1.3H17V2.3c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.2H8v3.3h2.6V21H14v-9.2h2.6l.4-3.3H14Z" />
  ),
  instagram: (
    <path d="M12 7.3A4.7 4.7 0 1 0 12 16.7 4.7 4.7 0 0 0 12 7.3Zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm6-7.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM21 8c-.1-1.5-.4-2.8-1.5-3.9S17.1 2.7 15.6 2.6c-1.5-.1-5.8-.1-7.3 0C6.8 2.7 5.5 3 4.4 4.1S3 6.5 2.9 8c-.1 1.5-.1 5.8 0 7.3.1 1.5.4 2.8 1.5 3.9s2.4 1.4 3.9 1.5c1.5.1 5.8.1 7.3 0 1.5-.1 2.8-.4 3.9-1.5s1.4-2.4 1.5-3.9c.1-1.5.1-5.8 0-7.3Zm-2 9.1a3 3 0 0 1-1.7 1.7c-1.2.5-4 .4-5.3.4s-4.1.1-5.3-.4A3 3 0 0 1 5 17.1c-.5-1.2-.4-4-.4-5.3s-.1-4.1.4-5.3A3 3 0 0 1 6.7 4.8C7.9 4.3 10.7 4.4 12 4.4s4.1-.1 5.3.4A3 3 0 0 1 19 6.5c.5 1.2.4 4 .4 5.3s.1 4.1-.4 5.3Z" />
  ),
  youtube: (
    <path d="M22 8.2s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.1-.9C16.2 5.1 12 5.1 12 5.1s-4.2 0-7.1.2c-.4.1-1.3.1-2.1.9-.6.6-.8 2-.8 2S1.8 9.8 1.8 11.4v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.3.9 1.6.2 6.9.2 6.9.2s4.2 0 7.1-.2c.4-.1 1.3-.1 2.1-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5c0-1.6-.2-3.2-.2-3.2ZM9.9 14.9V9.3l5.4 2.8-5.4 2.8Z" />
  ),
} as const;

const labels = { facebook: "Facebook", instagram: "Instagram", youtube: "YouTube" } as const;

const sizes = {
  sm: { link: "size-7 bg-white/15 text-white hover:bg-white hover:text-magenta-600", icon: "size-3.5" },
  md: { link: "size-10 bg-white/[0.06] text-white/80 ring-1 ring-white/10 hover:bg-white hover:text-brand-700", icon: "size-[18px]" },
} as const;

export function SocialIcons({ className = "", size = "md" }: { className?: string; size?: keyof typeof sizes }) {
  return (
    <ul className={`flex items-center ${size === "sm" ? "gap-1.5" : "gap-2"} ${className}`}>
      {(Object.keys(site.social) as (keyof typeof site.social)[]).map((key) => (
        <li key={key}>
          <a
            href={site.social[key]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${site.shortName} on ${labels[key]}`}
            className={`grid place-items-center rounded-full transition ${sizes[size].link}`}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className={sizes[size].icon} aria-hidden>
              {icons[key]}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
