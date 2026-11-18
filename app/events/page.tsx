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
      <section aria-labelledby="calendar-subscription" className="container-x pt-8 sm:pt-12">
        <div className="grid gap-6 rounded-xl border border-line border-l-4 border-l-blue bg-paper-2 p-5 sm:p-8 lg:grid-cols-[1fr_minmax(0,26rem)] lg:items-start">
          <div>
            <h2 id="calendar-subscription" className="font-display text-2xl font-bold text-navy sm:text-3xl">Subscribe to IEEE Rwanda events</h2>
            <p className="mt-2 max-w-md text-ink-soft">Get new events and schedule changes in your calendar app.</p>
          </div>
          <div className="grid min-w-0 gap-2">
            <a href={googleCalendarUrl} className="btn btn-primary w-full">Subscribe in Google Calendar</a>
            <details className="group min-w-0 rounded-lg border border-line bg-paper">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-lg px-4 py-3 text-sm font-semibold text-navy hover:text-blue focus-visible:outline-2 focus-visible:outline-blue [&::-webkit-details-marker]:hidden">
                Apple Calendar, Outlook &amp; other apps
                <span aria-hidden="true" className="text-lg leading-none text-blue group-open:rotate-45">+</span>
              </summary>
              <div className="border-t border-line p-4">
                <label htmlFor="event-calendar-feed" className="block text-sm text-ink-soft">Copy this address into your app’s calendar subscription option.</label>
                <input id="event-calendar-feed" type="url" readOnly value={calendarFeedUrl} className="mt-2 w-full select-all rounded border border-line bg-paper-2 px-3 py-2 text-sm text-navy focus-visible:outline-2 focus-visible:outline-blue" />
              </div>
            </details>
          </div>
        </div>
      </section>
      <EventsBlock head={false} />
    </>
  );
}
