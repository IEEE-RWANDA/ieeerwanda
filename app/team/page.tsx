import type { Metadata } from "next";
import { PageHero } from "@/app/components/ui";
import { CtaBand, TeamBlock } from "@/app/components/Sections";

export const metadata: Metadata = { title: "Team" };

export default function TeamPage() {
  return (
    <>
      <PageHero
        crumb="Team"
        eyebrow="Our team"
        title="The volunteers leading IEEE Rwanda"
        subtitle="Dedicated engineers and technologists harnessing African ingenuity to advance technology for humanity."
      />
      <TeamBlock head={false} />
      <CtaBand />
    </>
  );
}
