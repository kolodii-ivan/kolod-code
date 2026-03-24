import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

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
  },
  twitter: {
    card: "summary_large_image",
    title: "Kolod Code — Web Apps Built with Claude Code",
    description:
      "Portfolio of web applications crafted with Claude Code by Ivan Kolodii.",
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
      </body>
    </html>
  );
}
