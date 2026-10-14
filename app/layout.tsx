import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SECTION } from "@/lib/content";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const sans = localFont({
  src: "./fonts/inter.woff2",
  variable: "--font-body-face",
  display: "swap",
});

const display = localFont({
  src: "./fonts/archivo.woff2",
  variable: "--font-heading-face",
  display: "swap",
  weight: "600 800",
});

const mono = localFont({
  src: [{ path: "./fonts/plex-mono-400.woff2", weight: "400" }, { path: "./fonts/plex-mono-500.woff2", weight: "500" }],
  variable: "--font-utility-face",
  display: "swap",
});

const description = `${SECTION.tagline} ${SECTION.org}, part of IEEE Region 8.`;

export const metadata: Metadata = {
  title: {
    default: `${SECTION.org} — Technology for Humanity`,
    template: `%s — ${SECTION.short}`,
  },
  description,
  keywords: [
    "IEEE",
    "IEEE Rwanda",
    "Region 8",
    "engineering Rwanda",
    "technology Rwanda",
    "CMU Africa",
    "University of Rwanda",
    "African Leadership University",
  ],
  openGraph: {
    title: `${SECTION.org} — Technology for Humanity`,
    description,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
