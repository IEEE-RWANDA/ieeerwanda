import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SECTION } from "@/lib/content";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
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
      className={`${sans.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cloud text-ink">
        {children}
      </body>
    </html>
  );
}
