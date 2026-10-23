import type { NextConfig } from "next";

// The site is a pure static export: `next build` writes it to ./out, which the
// kolod-code static-assets Worker serves (wrangler.jsonc). There is no server
// runtime, so images are served as-is (no on-demand optimizer).
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
