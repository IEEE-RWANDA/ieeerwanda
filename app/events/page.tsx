import type { Metadata } from "next";
import { PageHero, Section } from "@/app/components/ui";
import { EventsBlock } from "@/app/components/Sections";

export const metadata: Metadata = { title: "Events" };

const googleCalendarUrl = "https://calendar.google.com/calendar/u/0?cid=YzY0MWM5NTdjMzNlYTlhZmY4YmY3NmUyNDZlNmNkNjIyOGE4MzVmMmQwMTVlYzI5ZDdjZjkyZmY1NWViN2Y2MEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t";
const calendarFeedUrl = "https://calendar.google.com/calendar/ical/c641c957c33ea9aff8bf76e246e6cd6228a835f2d015ec29d7cf92ff55eb7f60%40group.calendar.google.com/public/basic.ics";

export default function EventsPage() {
  return (
    <>
      <PageHero
        crumb="Events"
        eyebrow="Events & programmes"
        title="Where our community comes together."
        subtitle="Explore upcoming workshops and gatherings, and look back at the moments we have shared. All event times are in Central Africa Time (CAT)."
      />
      <Section>
        <h2 className="font-display text-2xl font-bold text-navy">Subscribe to IEEE Rwanda events</h2>
        <p className="mt-2 text-ink-soft">Get new events and schedule changes in your calendar app.</p>
        <a href={googleCalendarUrl} className="btn btn-primary mt-5">Subscribe in Google Calendar</a>
        <details className="mt-4 max-w-xl">
          <summary className="cursor-pointer font-semibold text-blue">Subscribe in Apple Calendar, Outlook, or another app</summary>
          <label htmlFor="event-calendar-feed" className="mt-3 block text-sm text-ink-soft">
            Copy this address and use your app’s calendar subscription option.
          </label>
          <input id="event-calendar-feed" type="url" readOnly value={calendarFeedUrl} className="mt-2 w-full rounded border px-3 py-2 text-sm" />
        </details>
      </Section>
      <EventsBlock head={false} />
    </>
  );
}
