import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, Section } from "@/app/components/ui";

export const metadata: Metadata = { title: "Brand" };

const logos = [
  { label: "Transparent PNG", src: "/img/logo.png", file: "ieee-rwanda-transparent.png", width: 311, height: 161, background: "bg-paper-2" },
  { label: "Navy background PNG", src: "/img/brand/ieee-rwanda-navy.png", file: "ieee-rwanda-navy.png", width: 387, height: 237, background: "bg-navy" },
  { label: "Traced vector SVG", src: "/img/brand/ieee-rwanda-vector.svg", file: "ieee-rwanda-vector.svg", width: 311, height: 161, background: "bg-paper-2" },
];

const resources = [
  { label: "IEEE Brand Experience", href: "https://brand-experience.ieee.org/" },
  { label: "IEEE master brand and logos", href: "https://brand-experience.ieee.org/guidelines/master-brand-and-logos/" },
  { label: "Society logos and guidelines", href: "https://brand-experience.ieee.org/guidelines/sub-brand-resources/ieee-societies/" },
  { label: "Student branch branding", href: "https://brand-experience.ieee.org/guidelines/sub-brand-resources/students/" },
  { label: "IEEE templates", href: "https://brand-experience.ieee.org/templates/" },
];

export default function BrandPage() {
  return (
    <>
      <PageHero
        crumb="Brand"
        eyebrow="Logos & guidelines"
        title="IEEE Rwanda Brand"
        subtitle="Download the Rwanda Subsection logo and find official IEEE resources for society chapters and student branches."
      />
      <Section>
        <h2 className="font-display text-2xl font-bold text-navy">Rwanda Subsection logo</h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {logos.map(({ label, src, file, width, height, background }) => (
            <article key={file} className="rounded-xl border border-line p-5">
              <div className={`flex aspect-video items-center justify-center rounded-lg p-5 ${background}`}>
                <Image src={src} alt={`IEEE Rwanda Subsection logo, ${label}`} width={width} height={height} className="h-auto w-48" />
              </div>
              <h3 className="my-4 font-display text-lg font-bold text-navy">{label}</h3>
              <a href={src} download={file} className="btn btn-primary">Download {label}</a>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <div className="rounded-xl border border-line p-6 sm:p-8">
            <h2 className="font-display text-2xl font-bold text-navy">Official IEEE resources</h2>
            <ul className="mt-4 divide-y divide-line">
              {resources.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="block py-3 font-semibold text-blue hover:underline">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
