import type { Metadata } from "next";
import { PageHero } from "@/app/components/ui";
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
      <div className="container-x flex justify-center pt-8">
        <details className="group min-w-0 max-w-full text-center">
          <summary className="btn btn-primary cursor-pointer list-none gap-3 [&::-webkit-details-marker]:hidden">
            Subscribe to our calendar of events
            <span aria-hidden="true" className="group-open:rotate-45">+</span>
          </summary>
          <div className="mt-2 grid gap-1 rounded-lg border border-line bg-paper p-2 text-left text-sm">
            <a href={googleCalendarUrl} className="rounded px-3 py-2 font-semibold text-blue hover:bg-paper-2">Google Calendar</a>
            <a href={calendarFeedUrl.replace("https:", "webcal:")} className="rounded px-3 py-2 font-semibold text-blue hover:bg-paper-2">Apple Calendar or default calendar app</a>
            <details className="rounded px-3 py-2">
              <summary className="cursor-pointer font-semibold text-blue">Outlook on the web and other apps</summary>
              <label htmlFor="event-calendar-feed" className="mt-2 block text-ink-soft">Use this address with your app’s “Subscribe from web” option.</label>
              <input id="event-calendar-feed" type="url" readOnly value={calendarFeedUrl} className="mt-2 w-full select-all rounded border border-line bg-paper-2 px-2 py-1.5" />
            </details>
          </div>
        </details>
      </div>
      <EventsBlock head={false} />
    </>
  );
}
