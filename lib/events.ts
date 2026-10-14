import type { EventItem } from "./content";

export function kigaliDate(now = new Date()): string {
  const parts = new Intl.DateTimeFormat("en-CA", { timeZone: "Africa/Kigali", year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(now);
  const part = (type: string) => parts.find(p => p.type === type)!.value;
  return `${part("year")}-${part("month")}-${part("day")}`;
}

export function eventStatus(event: Pick<EventItem, "date" | "endDate">, today: string) {
  if (!today) return "Scheduled";
  if ((event.endDate ?? event.date) < today) return "Past event";
  if (event.date <= today) return "Today / ongoing";
  return "Upcoming";
}

export function formatEventDate(date: string, endDate?: string) {
  const format = (value: string) => new Date(`${value}T12:00:00+02:00`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "Africa/Kigali" });
  return endDate && date !== endDate ? `${format(date)} – ${format(endDate)}` : format(date);
}
