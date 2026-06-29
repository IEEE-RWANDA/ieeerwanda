import type { Metadata } from "next";
import { Inter, Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SECTION } from "@/lib/content";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const display = Archivo({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
