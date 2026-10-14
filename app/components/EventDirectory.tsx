"use client";

import { Fragment, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { EVENTS } from "@/lib/content";
import { eventStatus, kigaliDate, formatEventDate } from "@/lib/events";

function subscribe(listener: () => void) {
  const timer = setInterval(listener, 60_000);
  return () => clearInterval(timer);
}
const filters = ["All events", "Upcoming", "Past events"] as const;

export default function EventDirectory({ compact = false, initialToday }: { compact?: boolean; initialToday: string }) {
  const today = useSyncExternalStore(subscribe, kigaliDate, () => initialToday);
  const [filter, setFilter] = useState<(typeof filters)[number]>("All events");
  const sorted = [...EVENTS].sort((a, b) => {
    const aPast = today && (a.endDate ?? a.date) < today;
    const bPast = today && (b.endDate ?? b.date) < today;
    if (aPast !== bPast) return aPast ? 1 : -1;
    return aPast ? b.date.localeCompare(a.date) : a.date.localeCompare(b.date);
  });
  const visible = sorted.filter(e => filter === "All events" || (filter === "Past events" ? eventStatus(e, today) === "Past event" : eventStatus(e, today) !== "Past event"));
  const upcoming = sorted.filter(e => eventStatus(e, today) !== "Past event");
  const past = sorted.filter(e => eventStatus(e, today) === "Past event");
  const items = compact ? [...upcoming.slice(0, 3), ...past.slice(0, 3)] : visible;
  return (
    <div>
      {!compact && <div className="event-filters" aria-label="Filter events">{filters.map(f => <button key={f} type="button" aria-pressed={filter === f} onClick={() => setFilter(f)}>{f}</button>)}</div>}
      <div className={`event-list${compact ? " event-list-compact" : ""}`}>
        {items.map(e => {
          const status = eventStatus(e, today);
          const date = new Date(`${e.date}T12:00:00+02:00`);
          const hasPhoto = status === "Past event" && e.image;
          return <Fragment key={e.title}>
            {compact && (e === upcoming[0] || e === past[0]) && <h3 className="event-group-heading">{status === "Past event" ? "Recent events" : "Coming up"}</h3>}
            <article className={`event-row${hasPhoto ? " event-row-with-photo event-card" : ""}`}>
            {hasPhoto ? <figure className="event-highlight">
              <a className="event-photo" href={e.galleryUrl ?? e.imageSource} target="_blank" rel="noopener noreferrer" aria-label={`Browse photos: ${e.title}`}><Image src={e.image!} alt={e.imageAlt ?? e.title} fill sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw" /></a>
              <figcaption><a href={e.imageSource} target="_blank" rel="noopener noreferrer">{e.imageCaption ?? "IEEE Rwanda / Flickr"} ↗</a></figcaption>
            </figure> : <div className="event-calendar" aria-hidden="true"><span>{date.toLocaleDateString("en-GB", {month:"short", timeZone:"Africa/Kigali"})}</span><strong>{e.date.slice(8)}</strong><span>{e.date.slice(0,4)}</span></div>}
            <div className="event-detail"><div className="flex flex-wrap items-center gap-3"><span className="label text-blue">{e.kind}</span><span className={`event-status ${status === "Past event" ? "past" : ""}`}>{status}</span></div><h3>{e.title}</h3><p className="event-meta"><time dateTime={e.date}>{formatEventDate(e.date, e.endDate)}</time>{e.time && ` · ${e.time} CAT`}<br />{e.location}</p><p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">{e.blurb}</p>{e.note && <p className="mt-3 text-sm font-medium text-blue">{e.note}</p>}</div>
            <div className="event-actions">{status === "Past event" && e.galleryUrl && <a className="btn btn-primary" href={e.galleryUrl} target="_blank" rel="noopener noreferrer">{e.galleryLabel ?? "View event photos"} ↗<span className="sr-only">: {e.title}</span></a>}{today && status !== "Past event" && e.registrationUrl && <a className="btn btn-primary" href={e.registrationUrl} target="_blank" rel="noopener noreferrer">Event details ↗</a>}<a href={e.url} target="_blank" rel="noopener noreferrer" className="link-underline text-sm font-semibold text-blue">View announcement ↗<span className="sr-only">: {e.title}</span></a></div>
          </article></Fragment>;
        })}
      </div>
      {items.length === 0 && <p className="py-10 text-ink-soft">No events in this category yet. Follow IEEE Rwanda on LinkedIn for new announcements.</p>}
    </div>
  );
}
