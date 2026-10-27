import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Share image: public/og/home.png, rendered by scripts/brand/render.mjs (re-run it after changing the copy).
const shareImage = {
  url: "/og/home.png",
  width: 1200,
  height: 630,
  alt: "Kolod Code — web applications crafted with Claude Code",
};

export const viewport: Viewport = {
  themeColor: "#1A1A1A",
};

export const metadata: Metadata = {
  title: "Kolod Code — Web Apps Built with Claude Code",
  description:
    "Portfolio of web applications crafted with Claude Code by Ivan Kolodii. Explore projects built using AI-assisted development.",
  metadataBase: new URL("https://code.ikolodiy.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Kolod Code — Web Apps Built with Claude Code",
    description:
      "Portfolio of web applications crafted with Claude Code by Ivan Kolodii.",
    url: "https://code.ikolodiy.com",
    siteName: "Kolod Code",
    type: "website",
    locale: "en_US",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kolod Code — Web Apps Built with Claude Code",
    description:
      "Portfolio of web applications crafted with Claude Code by Ivan Kolodii.",
    images: [shareImage],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
