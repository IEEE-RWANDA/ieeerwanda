import type { Metadata } from "next";
import { AFFINITY_GROUPS, CHAPTERS, COMMUNITIES } from "@/lib/content";
import { PageHero } from "@/app/components/ui";
import { GroupList, SubunitsList } from "@/app/components/Sections";

export const metadata: Metadata = { title: "Communities" };

export default function StudentBranchesPage() {
  return (
    <>
      <PageHero
        crumb="Communities"
        eyebrow="Where We're Active"
        title="Student Branches, Chapters & Communities"
        subtitle="University student branches, technical society chapters, affinity groups, and student activities across Rwanda."
      />
      <SubunitsList head={false} />
      <GroupList
        id="chapters"
        eyebrow="Technical Communities"
        title="Society Chapters"
        intro="Society chapters where members go deeper into a specific field of technology."
        items={CHAPTERS}
        accent="cyan"
        alt
      />
      <GroupList
        eyebrow="Communities"
        id="affinity-groups"
        title="Affinity Groups"
        intro="Affinity groups that build community and broaden who takes part in engineering."
        items={AFFINITY_GROUPS}
        accent="teal"
      />
      <GroupList
        eyebrow="Communities"
        title="Student Activities"
        intro="Connecting and supporting IEEE student communities across Rwanda."
        items={COMMUNITIES}
        accent="blue"
        alt
      />
    </>
  );
}
