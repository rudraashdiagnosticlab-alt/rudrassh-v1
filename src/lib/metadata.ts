import type { Metadata } from "next";
import { site } from "./site";

// Set NEXT_PUBLIC_SITE_URL in production; canonical URLs, link previews and the sitemap are built from it.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

// Link-preview (Open Graph) fields shared by every page.
export const sharedOpenGraph = {
  type: "website",
  siteName: site.name,
  images: [{ url: "/rudraash-logo.webp", width: 703, height: 199, alt: site.legalName }],
} satisfies Metadata["openGraph"];

// Metadata for an inner page. A page that sets `openGraph` replaces the layout's one as a whole, so the
// shared fields are repeated here; without this, a shared link shows the home page title and description.
export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { ...sharedOpenGraph, title: `${title} | ${site.name}`, description, url: path },
  };
}
