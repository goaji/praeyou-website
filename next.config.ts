import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  /** Build plain HTML/CSS/JS files into `out/`, served by Hostinger without a Node.js server. */
  output: "export",
  /** `/uber` becomes `out/uber/index.html`, which Apache serves without extra rewrite rules. */
  trailingSlash: true,
  /** Image resizing needs a server; images are served as they are in `public/`. */
  images: { unoptimized: true },
};

export default nextConfig;
