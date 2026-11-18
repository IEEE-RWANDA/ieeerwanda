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
      <section aria-label="Subscribe to our calendar of events" className="container-x pt-8">
        <div className="mx-auto grid max-w-lg items-start gap-2 sm:grid-cols-2">
          <a href={googleCalendarUrl} className="btn btn-primary min-h-12 text-center">Subscribe in Google Calendar</a>
          <details className="group min-w-0">
            <summary className="btn btn-outline min-h-12 w-full cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              Other calendars
              <span aria-hidden="true" className="group-open:rotate-45">+</span>
            </summary>
            <div className="mt-2 grid gap-3 rounded-lg border border-line bg-paper p-3 text-sm">
              <a href={calendarFeedUrl.replace("https:", "webcal:")} className="link-underline font-semibold text-blue">Open in Apple Calendar or default calendar app</a>
              <label htmlFor="event-calendar-feed" className="mt-2 block text-ink-soft">Use this address with your app’s “Subscribe from web” option.</label>
              <input id="event-calendar-feed" type="url" readOnly value={calendarFeedUrl} className="w-full select-all rounded border border-line bg-paper-2 px-2 py-1.5" />
            </div>
          </details>
        </div>
      </section>
      <EventsBlock head={false} />
    </>
  );
}
