import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: `Health Checkup Packages | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "diagnostic lab",
    "blood test",
    "pathology lab",
    "health checkup packages",
    "master health check up",
    "diagnostic lab Dindigul",
    "diagnostic lab Trichy",
    "diagnostic lab Thanjavur",
    "Rudraash",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    images: [{ url: "/rudraash-logo.webp", width: 703, height: 199, alt: site.legalName }],
  },
};

export const viewport: Viewport = {
  themeColor: "#663e98",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: site.legalName,
  description: site.description,
  telephone: site.phone,
  email: site.email,
  foundingDate: String(site.founded),
  areaServed: site.locations,
  medicalSpecialty: "Pathology",
  sameAs: Object.values(site.social),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning: browser extensions (e.g. ColorZilla, Grammarly) add attributes to
    // <html>/<body> before React loads. This only ignores attribute diffs on these two elements.
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${outfit.variable} ${jakarta.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh" suppressHydrationWarning>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
