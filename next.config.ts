import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  // Old rudraash.com URLs that have no page of their own.
  async redirects() {
    return [
      { source: "/book-a-test", destination: "/contact-us#book", permanent: true },
      // On the old site this service URL already forwarded to the package.
      { source: "/services/allergy-profile", destination: "/packages/allergy-profile", permanent: true },
      // These were empty sub-pages; their content lives in sections of the Genetic Studies page.
      { source: "/services/genetic-studies/gestational-marker-studies", destination: "/services/genetic-studies#gsm", permanent: true },
      { source: "/services/genetic-studies/karyotyping", destination: "/services/genetic-studies#karyotyping", permanent: true },
      { source: "/services/genetic-studies/sequencing-services", destination: "/services/genetic-studies#sequencing", permanent: true },
      // The old WordPress URL for this package had a "-2" suffix.
      { source: "/packages/fertility-profile-men-women-2", destination: "/packages/fertility-profile-men-women", permanent: true },
    ];
  },
};

export default nextConfig;
