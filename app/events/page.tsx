import type { Metadata } from "next";
import { PageHero } from "@/app/components/ui";
import { EventsBlock } from "@/app/components/Sections";

export const metadata: Metadata = { title: "Events" };

export default function EventsPage() {
  return (
    <>
      <PageHero
        crumb="Events"
        eyebrow="Events & programmes"
        title="Where our community comes together."
        subtitle="Explore upcoming workshops and gatherings, and look back at the moments we have shared. All event times are in Central Africa Time (CAT)."
      />
      <EventsBlock head={false} />
    </>
  );
}
