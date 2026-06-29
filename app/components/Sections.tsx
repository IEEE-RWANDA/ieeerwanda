import Link from "next/link";
import Image from "next/image";
import {
  EXECUTIVE,
  EVENTS,
  FOCUS_AREAS,
  HERO_VIDEO_ID,
  OPERATIONS,
  SECTION,
  SUBUNITS,
  TESTIMONIALS,
  type Group,
  type Member,
} from "@/lib/content";
import { FocusGlyph } from "./Icons";
import ContactForm from "./ContactForm";
import LaunchVideo from "./LaunchVideo";
import { LogoBadge, Section, SectionHead } from "./ui";

/* ---------- Home hero (dark, network background) ---------- */

export function HomeHero() {
  return (
    <section className="relative isolate flex min-h-[560px] items-center overflow-hidden bg-navy text-cloud">
      <Image
        src="/img/hero-net.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/92 via-navy/72 to-navy/40" />

      <div className="container-x relative z-10 py-16">
        <LogoBadge size="h-20" />
        <p className="mt-7 font-display text-sm italic text-gold">
          Welcome to IEEE Rwanda Subsection
        </p>
        <h1 className="mt-4 max-w-[18ch] font-display text-3xl font-extrabold uppercase leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl">
          Harnessing <span className="text-[#3aa6e0]">African Ingenuity</span> to
          Advance <span className="text-[#3aa6e0]">Technology</span> for Humanity.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-cloud/80">
          {SECTION.tagline}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <a
            href={SECTION.joinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Become a member
          </a>
          {HERO_VIDEO_ID && <LaunchVideo id={HERO_VIDEO_ID} />}
        </div>
      </div>
    </section>
  );
}

/* ---------- About (blue gradient card with photo) ---------- */

export function AboutBlock() {
  return (
    <Section alt>
      <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-blue to-blue-ink text-cloud">
        <div className="grid items-center gap-8 p-8 sm:p-10 lg:grid-cols-2 lg:gap-12 lg:p-12">
          <div>
            <p className="text-base leading-relaxed text-cloud/90">
              IEEE Rwanda is a local chapter of the Institute of Electrical and
              Electronics Engineers. We serve Rwanda&apos;s engineering and
              technology community by providing a platform for professional
              development, technical excellence, and innovation.
            </p>
            <span className="mt-7 block h-px w-12 bg-cloud/40" />
            <h2 className="mt-6 font-display text-2xl font-bold sm:text-3xl">
              Driving Rwanda&apos;s Tech Transformation
            </h2>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/img/about.jpg"
              alt="Engineer installing solar panels"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
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
        title="Pioneering Progress"
        intro="We concentrate on sectors pivotal to the Sustainable Development Goals, leveraging technology to solve local challenges."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FOCUS_AREAS.map((f) => (
          <article
            key={f.title}
            style={{ backgroundColor: f.color }}
            className="rounded-lg p-7 text-cloud transition-transform duration-200 hover:-translate-y-1"
          >
            <FocusGlyph name={f.icon} className="h-9 w-9" />
            <h3 className="mt-5 font-display text-xl font-bold">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-cloud/90">{f.blurb}</p>
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
  accent = "blue",
  alt = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  items: Group[];
  accent?: "blue" | "cyan" | "teal";
  alt?: boolean;
}) {
  return (
    <Section alt={alt}>
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

export function EventsBlock({
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
          eyebrow="Events & Programmes"
          title="Workshops, Hackathons & Technical Talks"
          intro="Our subunits run a steady, year-round calendar of hands-on events — from robotics deep-dives to grid-efficiency research and leadership forums."
        />
      )}
      <div className={`${head ? "mt-12" : ""} grid gap-5 sm:grid-cols-2`}>
        {EVENTS.map((e) => (
          <article
            key={e.title}
            className="rounded-lg border border-line bg-paper p-7 shadow-sm"
          >
            <span className="label rounded-full bg-blue-pale px-3 py-1 text-blue">
              {e.kind}
            </span>
            <h3 className="mt-4 font-display text-lg font-bold leading-snug text-navy">
              {e.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{e.blurb}</p>
          </article>
        ))}
      </div>
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
              src="/img/community.jpg"
              alt="IEEE Rwanda members at a community event"
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

/* ---------- CTA band ---------- */

export function CtaBand() {
  return (
    <section className="bg-blue text-cloud">
      <div className="container-x flex flex-col items-start justify-between gap-6 py-12 sm:flex-row sm:items-center">
        <div>
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Ready to build the future with us?
          </h2>
          <p className="mt-2 max-w-xl text-cloud/80">
            Become part of a global network of over 400,000 engineers and
            technologists.
          </p>
        </div>
        <a
          href={SECTION.joinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-light flex-none"
        >
          Become a member
        </a>
      </div>
    </section>
  );
}
