import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  /** Old massage URLs, so shared links and search results keep working. */
  async redirects() {
    return [
      { source: "/leistungen/praerelax", destination: "/leistungen/praeyou", permanent: true },
      { source: "/leistungen/praebalance", destination: "/leistungen", permanent: true },
      { source: "/leistungen/praeglow", destination: "/leistungen", permanent: true },
    ];
  },
};

export default nextConfig;
