import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  // Old rudraash.com URLs that have no page of their own yet.
  async redirects() {
    return [
      { source: "/book-a-test", destination: "/contact-us#book", permanent: true },
      // Temporary until service and package detail pages exist: send old links to the matching card.
      { source: "/services/:slug", destination: "/services#:slug", permanent: false },
      { source: "/packages/:slug", destination: "/packages#:slug", permanent: false },
    ];
  },
};

export default nextConfig;
