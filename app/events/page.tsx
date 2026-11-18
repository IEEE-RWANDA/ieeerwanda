import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/app/components/ui";
import { EventsBlock } from "@/app/components/Sections";

export const metadata: Metadata = { title: "Events" };

const googleCalendarUrl = "https://calendar.google.com/calendar/u/0?cid=YzY0MWM5NTdjMzNlYTlhZmY4YmY3NmUyNDZlNmNkNjIyOGE4MzVmMmQwMTVlYzI5ZDdjZjkyZmY1NWViN2Y2MEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t";
const calendarFeedUrl = "https://calendar.google.com/calendar/ical/c641c957c33ea9aff8bf76e246e6cd6228a835f2d015ec29d7cf92ff55eb7f60%40group.calendar.google.com/public/basic.ics";

const webcalUrl = calendarFeedUrl.replace("https:", "webcal:");
const outlookCalendarUrl = `https://outlook.live.com/calendar/0/addfromweb?${new URLSearchParams({
  name: "IEEE Rwanda Subsection Events",
  url: webcalUrl,
})}`;

const calendarOption = "flex h-28 w-24 cursor-pointer flex-col items-center justify-center gap-2 rounded-lg text-xs font-semibold text-navy hover:bg-paper-2 focus-visible:outline-2 focus-visible:outline-blue";

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
            <Image src="/img/calendar/google-calendar.png" alt="" width={56} height={56} unoptimized />
            Google Calendar
          </a>
          <a href={webcalUrl} className={calendarOption} aria-label="Subscribe in Apple Calendar">
            <Image src="/img/calendar/apple-calendar.png" alt="" width={56} height={56} unoptimized />
            Apple Calendar
          </a>
          <a href={outlookCalendarUrl} className={calendarOption} aria-label="Subscribe in Outlook.com">
            <Image src="/img/calendar/outlook.svg" alt="" width={56} height={56} unoptimized />
            Outlook
          </a>
        </div>
      </section>
      <EventsBlock head={false} />
    </>
  );
}
