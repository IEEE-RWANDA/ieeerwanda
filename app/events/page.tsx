import type { Metadata } from "next";
import { PageHero } from "@/app/components/ui";
import { CtaBand, EventsBlock } from "@/app/components/Sections";

export const metadata: Metadata = { title: "Events" };

export default function EventsPage() {
  return (
    <>
      <PageHero
        crumb="Events"
        eyebrow="Events & programmes"
        title="Workshops, hackathons, and technical talks"
        subtitle="Our subunits run a steady, year-round calendar of hands-on events — from robotics deep-dives to grid-efficiency research and leadership forums."
      />
      <EventsBlock head={false} />
      <CtaBand />
    </>
  );
}
