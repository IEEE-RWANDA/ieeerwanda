import type { Metadata } from "next";
import { PageHero } from "@/app/components/ui";
import { ContactBlock } from "@/app/components/Sections";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Get involved"
        title="Join the movement"
        subtitle="Whether you're a student, professional, or partner organization, there's a place for you at IEEE Rwanda."
      />
      <ContactBlock head={false} />
    </>
  );
}
