import type { MetadataRoute } from "next";
import { packages, services } from "@/lib/data";
import { siteUrl } from "@/lib/metadata";
import { nav } from "@/lib/site";

// /sitemap.xml: every page, so search engines pick up the service and package pages.
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    ...nav.map((item) => item.href),
    ...services.map((s) => `/services/${s.slug}`),
    ...packages.map((p) => `/packages/${p.slug}`),
  ];
  return paths.map((path) => ({ url: new URL(path, siteUrl).href }));
}
