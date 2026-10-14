import type { Metadata } from "next";
import { PageHero } from "@/app/components/ui";
import {
  AboutBlock,
  SubunitsList,
  TestimonialsBlock,
} from "@/app/components/Sections";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="About the Subsection"
        title="About IEEE Rwanda"
        subtitle="A Subsection of the world's largest technical professional organization — connecting Rwanda's engineers to a global community of over 400,000 members."
      />
      <AboutBlock />
      <SubunitsList alt />
      <TestimonialsBlock />
    </>
  );
}
