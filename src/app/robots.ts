import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/metadata";

// /robots.txt: allow everything and point crawlers to the sitemap.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("/sitemap.xml", siteUrl).href,
  };
}
