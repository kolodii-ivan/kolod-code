import type { MetadataRoute } from "next";

// Rendered once at build time: the site is a static export. Icons come from scripts/brand/render.mjs.
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kolod Code — Web Apps Built with Claude Code",
    short_name: "Kolod Code",
    description:
      "Portfolio of web applications crafted with Claude Code by Ivan Kolodii.",
    start_url: "/",
    display: "standalone",
    background_color: "#1A1A1A",
    theme_color: "#1A1A1A",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/icons/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
