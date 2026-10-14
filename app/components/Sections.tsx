import Link from "next/link";
import Image from "next/image";
import {
  EXECUTIVE,
  FOCUS_AREAS,
  OPERATIONS,
  SECTION,
  SUBUNITS,
  TESTIMONIALS,
  type Group,
  type Member,
} from "@/lib/content";
import { FocusGlyph } from "./Icons";
import ContactForm from "./ContactForm";
import EventDirectory from "./EventDirectory";
import { kigaliDate } from "@/lib/events";
import { Section, SectionHead } from "./ui";

/* ---------- Home hero (dark, network background) ---------- */

export function HomeHero() {
  return (
    <section className="home-hero">
      <div className="container-x hero-layout">
        <div className="hero-copy animate-fade-up">
          <p className="label text-blue">IEEE Rwanda · Technology for humanity</p>
          <h1>Great ideas.<br />Real connections.<br /><span>Rwandan impact.</span></h1>
          <p className="hero-intro">A home for the people building what comes next. Connect with engineers, researchers, and students advancing technology across Rwanda.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={SECTION.joinUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Join our community <span aria-hidden>↗</span></a>
            <Link href="/events" className="btn btn-outline">Explore events <span aria-hidden>→</span></Link>
          </div>
          <div className="hero-footnote"><span className="h-2 w-2 rounded-full bg-teal" /> Rooted in Rwanda. Connected to the world.</div>
        </div>
        <figure className="hero-photo">
          <Image src="/img/community.jpg" alt="Members connecting at an IEEE Rwanda community gathering" fill preload sizes="(max-width: 900px) 100vw, 50vw" className="object-cover" />
          <figcaption><span className="label">Our community</span><p>People make progress possible.</p><Link href="/student-branches">Find your community <span aria-hidden>↗</span></Link></figcaption>
        </figure>
      </div>
      <div className="community-strip container-x"><span className="label">Find your people</span><Link href="/student-branches">Student branches ↗</Link><Link href="/student-branches#chapters">Technical societies ↗</Link><Link href="/student-branches#affinity-groups">Affinity groups ↗</Link><a href="https://sac.ieeerwanda.org/" target="_blank" rel="noopener noreferrer">Student activities ↗</a></div>
    </section>
  );
}

export function AboutBlock() {
  return (
    <Section>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <div><p className="label text-blue">A local community. A global network.</p><h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl">Engineering starts with people.</h2></div>
        <div><p className="text-lg leading-relaxed text-ink-soft">IEEE Rwanda Subsection brings students, researchers, and professionals together to learn, share ideas, and put technology to work. From a first campus workshop to a global research collaboration, there is a place for you here.</p><Link href="/about" className="link-underline mt-6 inline-flex font-semibold text-blue">Get to know IEEE Rwanda →</Link></div>
      </div>
    </Section>
  );
}

/* ---------- Focus areas (solid colour cards) ---------- */

export function FocusGrid() {
  return (
    <Section>
      <SectionHead
        center
        eyebrow="Key Focus Areas"
        title="Ideas with a purpose."
        intro="Explore the fields where our members connect technical knowledge with local challenges."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FOCUS_AREAS.map((f) => (
          <article
            key={f.title}
            style={{ borderTopColor: f.color }}
            className="rounded-xl border border-line border-t-4 bg-paper p-8 text-navy transition-transform duration-200 hover:-translate-y-1"
          >
            <FocusGlyph name={f.icon} className="h-9 w-9" />
            <h3 className="mt-5 font-display text-xl font-bold">{f.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{f.blurb}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Subunits ---------- */

export function SubunitsList({
  alt = false,
  head = true,
}: {
  alt?: boolean;
  head?: boolean;
}) {
  return (
    <Section alt={alt}>
      {head && (
        <SectionHead
          center
          eyebrow="Where We're Active"
          title="Student Branches"
          intro="University student branches driving research, learning, and innovation across Rwanda's leading institutions."
        />
      )}
      <div className={`${head ? "mt-12" : ""} grid gap-5 md:grid-cols-3`}>
        {SUBUNITS.map((u) => (
          <article
            key={u.short}
            className="flex flex-col rounded-lg border border-line border-t-4 border-t-blue bg-paper p-7 shadow-sm"
          >
            <span className="label text-blue">{u.short}</span>
            <h3 className="mt-3 font-display text-xl font-bold leading-tight text-navy">
              {u.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{u.blurb}</p>
            {u.url && (
              <a
                href={u.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline mt-auto inline-flex items-center gap-1 self-start pt-5 text-sm font-semibold text-blue"
              >
                Visit website
                <span aria-hidden>→</span>
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Chapters / affinity groups (generic, reusable) ---------- */

const ACCENT: Record<string, string> = {
  blue: "border-t-blue",
  cyan: "border-t-cyan",
  teal: "border-t-teal",
};

export function GroupList({
  eyebrow,
  title,
  intro,
  items,
  id,
  accent = "blue",
  alt = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  items: Group[];
  id?: string;
  accent?: "blue" | "cyan" | "teal";
  alt?: boolean;
}) {
  return (
    <Section alt={alt} id={id}>
      <SectionHead center eyebrow={eyebrow} title={title} intro={intro} />
      {items.length > 0 ? (
        <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
          {items.map((c) => (
            <article
              key={c.name}
              className={`flex flex-col rounded-lg border border-line border-t-4 ${ACCENT[accent]} bg-paper p-7 shadow-sm`}
            >
              <h3 className="font-display text-lg font-bold leading-tight text-navy">
                {c.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{c.blurb}</p>
              {c.url && (
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline mt-auto inline-flex items-center gap-1 self-start pt-5 text-sm font-semibold text-blue"
                >
                  Visit website
                  <span aria-hidden>→</span>
                </a>
              )}
            </article>
          ))}
        </div>
      ) : (
        <p className="mx-auto mt-8 max-w-md text-center text-ink-soft">
          Forming soon — interested in starting one?{" "}
          <Link href="/contact" className="font-semibold text-blue">
            Get in touch
          </Link>
          .
        </p>
      )}
    </Section>
  );
}

/* ---------- Team ---------- */

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function MemberCard({ m }: { m: Member }) {
  return (
    <article className="flex flex-col items-center rounded-lg border border-line bg-paper p-6 text-center shadow-sm">
      {m.photo ? (
        <div className="relative h-24 w-24 overflow-hidden rounded-full ring-2 ring-blue/15">
          <Image
            src={m.photo}
            alt={m.name}
            fill
            sizes="96px"
            className="object-cover"
          />
        </div>
      ) : (
        <div className="grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-blue to-blue-ink font-display text-xl font-bold text-cloud">
          {initials(m.name)}
        </div>
      )}
      <h4 className="mt-4 font-display text-lg font-bold text-navy">{m.name}</h4>
      <span className="label mt-1 text-blue">{m.role}</span>
    </article>
  );
}

function MemberGroup({ title, members }: { title: string; members: Member[] }) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="h-px flex-1 bg-line" />
        <h3 className="label text-ink-soft">{title}</h3>
        <span className="h-px flex-1 bg-line" />
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {members.map((m) => (
          <MemberCard key={m.name} m={m} />
        ))}
      </div>
    </div>
  );
}

export function TeamBlock({
  alt = false,
  head = true,
}: {
  alt?: boolean;
  head?: boolean;
}) {
  return (
    <Section alt={alt}>
      {head && (
        <SectionHead
          center
          eyebrow="Our Team"
          title="The Volunteers Leading IEEE Rwanda"
          intro="Dedicated engineers and technologists harnessing African ingenuity to advance technology for humanity."
        />
      )}
      <div className={`${head ? "mt-12" : ""} space-y-12`}>
        <MemberGroup title="Executive Committee" members={EXECUTIVE} />
        <MemberGroup title="Operations Committee" members={OPERATIONS} />
      </div>
    </Section>
  );
}

/* ---------- Events ---------- */

export function EventsBlock({ alt = false, head = true }: { alt?: boolean; head?: boolean }) {
  return (
    <Section alt={alt}>
      {head && <div className="mb-10 flex flex-wrap items-end justify-between gap-6"><SectionHead eyebrow="Events & programmes" title="Meet. Learn. Build." intro="The conversations, workshops, and shared experiences moving our community forward." /><Link href="/events" className="link-underline font-semibold text-blue">All events →</Link></div>}
      {!head && <h2 className="sr-only">Event calendar</h2>}
      <EventDirectory compact={head} initialToday={kigaliDate()} />
    </Section>
  );
}

/* ---------- Testimonials + Get in Touch ---------- */

export function TestimonialsBlock({ alt = false }: { alt?: boolean }) {
  return (
    <Section alt={alt}>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* community photo with overlapping Get in Touch card */}
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/img/landing/ieee-rwanda-flickr-hero.jpg"
              alt="IEEE Rwanda volunteers working together at the subsection launch"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <Link
            href="/contact"
            className="absolute -bottom-6 right-6 left-6 rounded-lg bg-paper p-6 shadow-xl transition hover:shadow-2xl sm:left-auto sm:w-64"
          >
            <span className="font-display text-2xl font-bold text-navy">
              Get in <span className="text-blue">Touch</span>
            </span>
            <span className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-blue">
              Reach the team →
            </span>
          </Link>
        </div>

        {/* quotes */}
        <div className="grid gap-8 pt-6 sm:grid-cols-2 lg:pt-0">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="text-center sm:text-left">
              <span className="font-display text-5xl leading-none text-line">
                &rdquo;
              </span>
              <blockquote className="mt-1 text-sm leading-relaxed text-ink-soft">
                {t.quote}
              </blockquote>
              <figcaption className="mt-4">
                <span className="block font-display font-bold text-navy">
                  {t.name}
                </span>
                <span className="text-xs text-ink-soft">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- Contact ---------- */

export function ContactBlock({
  alt = false,
  head = true,
}: {
  alt?: boolean;
  head?: boolean;
}) {
  const reasons = [
    { t: "Members", d: "Access workshops, mentorship, and global IEEE resources." },
    { t: "Volunteers", d: "Help organize events and lead technical initiatives." },
    { t: "Partners", d: "Collaborate with universities, industry, and government." },
  ];
  return (
    <Section alt={alt}>
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          {head ? (
            <SectionHead
              eyebrow="Get Involved"
              title="Join the Movement"
              intro="Whether you're a student, professional, or partner organization, there's a place for you at IEEE Rwanda."
            />
          ) : (
            <h2 className="font-display text-2xl font-bold text-navy">
              Ways to get involved
            </h2>
          )}
          <dl className="mt-9 border-t border-line">
            {reasons.map((r, i) => (
              <div
                key={r.t}
                className="flex items-baseline gap-5 border-b border-line py-4"
              >
                <span className="label w-7 flex-none text-blue">0{i + 1}</span>
                <dt className="font-display text-lg font-bold text-navy">{r.t}</dt>
                <dd className="flex-1 text-sm text-ink-soft">{r.d}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rounded-lg border border-line border-t-4 border-t-blue bg-paper p-7 shadow-sm sm:p-8">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
