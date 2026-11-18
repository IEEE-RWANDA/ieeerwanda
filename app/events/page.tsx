import type { Metadata } from "next";
import { PageHero } from "@/app/components/ui";
import { EventsBlock } from "@/app/components/Sections";

export const metadata: Metadata = { title: "Events" };

const googleCalendarUrl = "https://calendar.google.com/calendar/u/0?cid=YzY0MWM5NTdjMzNlYTlhZmY4YmY3NmUyNDZlNmNkNjIyOGE4MzVmMmQwMTVlYzI5ZDdjZjkyZmY1NWViN2Y2MEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t";
const calendarFeedUrl = "https://calendar.google.com/calendar/ical/c641c957c33ea9aff8bf76e246e6cd6228a835f2d015ec29d7cf92ff55eb7f60%40group.calendar.google.com/public/basic.ics";

const calendarOption = "flex h-20 w-24 cursor-pointer flex-col items-center justify-center gap-2 rounded-lg text-xs font-semibold text-navy hover:bg-paper-2 focus-visible:outline-2 focus-visible:outline-blue";

export default function EventsPage() {
  return (
    <>
      <PageHero
        crumb="Events"
        eyebrow="Events & programmes"
        title="Where our community comes together."
        subtitle="Explore upcoming workshops and gatherings, and look back at the moments we have shared. All event times are in Central Africa Time (CAT)."
      />
      <section aria-labelledby="calendar-subscription" className="container-x pt-8 text-center">
        <h2 id="calendar-subscription" className="text-sm font-semibold text-navy">Subscribe to our calendar of events</h2>
        <div className="relative mx-auto mt-2 flex w-fit max-w-full justify-center gap-1 sm:gap-3">
          <a href={googleCalendarUrl} className={calendarOption} aria-label="Subscribe in Google Calendar">
            <svg aria-hidden="true" viewBox="0 0 32 32" className="size-8">
              <path fill="#4285f4" d="M6 2h20a4 4 0 0 1 4 4v4H2V6a4 4 0 0 1 4-4Z" />
              <path fill="#34a853" d="M2 10h5v20H6a4 4 0 0 1-4-4Z" />
              <path fill="#fbbc04" d="M25 10h5v13h-5Z" />
              <path fill="#ea4335" d="M7 25h18v-2h5l-7 7H7Z" />
              <text x="16" y="22" textAnchor="middle" fill="#2468c8" fontSize="13" fontWeight="700">31</text>
            </svg>
            Google Calendar
          </a>
          <a href={calendarFeedUrl.replace("https:", "webcal:")} className={calendarOption} aria-label="Subscribe in Apple Calendar">
            <svg aria-hidden="true" viewBox="0 0 32 32" className="size-8">
              <rect x="2.5" y="2.5" width="27" height="27" rx="6" fill="#fff" stroke="#d4d9df" />
              <path fill="#df343b" d="M8 3h16a5 5 0 0 1 5 5v3H3V8a5 5 0 0 1 5-5Z" />
              <text x="16" y="24" textAnchor="middle" fill="#232932" fontSize="14" fontWeight="700">31</text>
            </svg>
            Apple Calendar
          </a>
          <details>
            <summary className={calendarOption + " list-none [&::-webkit-details-marker]:hidden"}>
              <svg aria-hidden="true" viewBox="0 0 32 32" className="size-8">
                <rect x="9" y="4" width="21" height="24" rx="3" fill="#0879c9" />
                <path d="M12 10h15v13H12Z" fill="#fff" />
                <path d="M12 14h15M17 14v9m5-9v9" stroke="#0879c9" />
                <rect x="2" y="11" width="14" height="15" rx="2" fill="#075491" />
                <circle cx="9" cy="18.5" r="3" fill="none" stroke="#fff" strokeWidth="1.5" />
              </svg>
              Outlook / iCal
            </summary>
            <div className="absolute inset-x-0 top-full z-10 mt-2 rounded-lg border border-line bg-paper p-3 text-left text-sm shadow-lg">
              <label htmlFor="event-calendar-feed" className="block text-ink-soft">In Outlook on the web, choose Add calendar → Subscribe from web and paste this address.</label>
              <input id="event-calendar-feed" type="url" readOnly value={calendarFeedUrl} className="mt-2 w-full select-all rounded border border-line bg-paper-2 px-2 py-1.5" />
            </div>
          </details>
        </div>
      </section>
      <EventsBlock head={false} />
    </>
  );
}
