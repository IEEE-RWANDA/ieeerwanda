import type { Metadata } from "next";
import { AFFINITY_GROUPS, CHAPTERS } from "@/lib/content";
import { PageHero } from "@/app/components/ui";
import { CtaBand, GroupList, SubunitsList } from "@/app/components/Sections";

export const metadata: Metadata = { title: "Communities" };

export default function StudentBranchesPage() {
  return (
    <>
      <PageHero
        crumb="Communities"
        eyebrow="Where We're Active"
        title="Student Branches, Chapters & Affinity Groups"
        subtitle="University student branches, technical society chapters, and affinity groups across Rwanda's leading institutions."
      />
      <SubunitsList head={false} />
      <GroupList
        eyebrow="Technical Communities"
        title="Society Chapters"
        intro="Society chapters where members go deeper into a specific field of technology."
        items={CHAPTERS}
        accent="cyan"
        alt
      />
      <GroupList
        eyebrow="Communities"
        title="Affinity Groups"
        intro="Affinity groups that build community and broaden who takes part in engineering."
        items={AFFINITY_GROUPS}
        accent="teal"
      />
      <CtaBand />
    </>
  );
}
