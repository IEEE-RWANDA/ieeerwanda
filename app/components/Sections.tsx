import {
  ABOUT,
  EXECUTIVE,
  FOCUS_AREAS,
  OPERATIONS,
  SECTION,
  STATS,
  SUBUNITS,
  TESTIMONIALS,
  type Member,
} from "@/lib/content";
import { FocusGlyph } from "./Icons";
import ContactForm from "./ContactForm";

/* ---------- shared ---------- */

function Marker({
  index,
  label,
  light = false,
}: {
  index: string;
  label: string;
  light?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-4 border-t pt-4 ${
        light ? "border-paper/25" : "border-line"
      }`}
    >
      <span className={`label ${light ? "text-sun" : "text-blue"}`}>{index}</span>
      <span className={`label ${light ? "text-paper/70" : "text-ink-soft"}`}>
        {label}
      </span>
    </div>
  );
}

/* ---------- Hero ---------- */

export function Hero() {
  return (
    <section id="top" className="pt-[60px]">
      {/* masthead */}
      <div className="border-b border-line">
        <div className="container-x flex flex-wrap items-center justify-between gap-y-1 py-3">
          <span className="label text-ink-soft">IEEE Region 8 · Africa</span>
          <span className="label text-ink-soft">Rwanda Subsection</span>
          <span className="label text-blue">Technology for Humanity</span>
        </div>
      </div>

      <div className="container-x pt-14 pb-16 sm:pt-20 sm:pb-20">
        <div className="animate-fade-up">
          <h1 className="max-w-[18ch] font-display font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-ink text-[clamp(2.4rem,7vw,5.5rem)]">
            Harnessing <span className="mark">African ingenuity</span> to advance
            technology for humanity.
          </h1>

          <div className="mt-10 grid gap-8 border-t border-line pt-8 md:grid-cols-[1.6fr_1fr]">
            <p className="max-w-xl text-lg leading-relaxed text-ink-soft">
              {SECTION.tagline}
            </p>
            <div className="flex flex-col items-start gap-4 md:items-end">
              <a
                href={SECTION.joinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-ink px-7 py-3.5 text-base font-semibold text-paper transition hover:bg-blue"
              >
                Become a member
              </a>
              <a href="#about" className="link-underline text-base font-semibold text-ink">
                Discover IEEE Rwanda →
              </a>
            </div>
          </div>
        </div>

        {/* stat ledger */}
        <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden border border-line bg-line lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-paper px-5 py-7">
              <dd className="font-display text-4xl font-extrabold leading-none text-ink sm:text-5xl">
                {s.value}
              </dd>
              <dt className="label mt-3 text-ink-soft">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ---------- About ---------- */

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-line bg-paper-2 py-20 sm:py-28">
      <div className="container-x">
        <Marker index="01" label="About the Subsection" />
        <div className="mt-10 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <h2 className="max-w-[14ch] font-display text-3xl font-bold uppercase leading-[1.02] tracking-tight text-ink sm:text-[2.6rem]">
              {ABOUT.heading}
            </h2>
            <div className="mt-7 space-y-4 text-base leading-relaxed text-ink-soft">
              {ABOUT.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <a href="#contact" className="link-underline mt-7 inline-block font-semibold text-blue">
              Get involved →
            </a>
          </div>

          <div className="self-start bg-blue p-8 text-paper sm:p-10">
            <p className="font-display text-2xl font-semibold leading-snug">
              &ldquo;Technology for humanity&rdquo; isn&apos;t a slogan — it&apos;s
              how we choose the problems worth solving in Rwanda.
            </p>
            <dl className="mt-9 grid grid-cols-2 gap-6 border-t border-paper/20 pt-7">
              <div>
                <dt className="label text-paper/70">Model</dt>
                <dd className="mt-1 font-display text-2xl font-bold">Volunteer-led</dd>
              </div>
              <div>
                <dt className="label text-paper/70">Network</dt>
                <dd className="mt-1 font-display text-2xl font-bold">Global IEEE</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Focus areas ---------- */

export function FocusAreas() {
  return (
    <section id="focus" className="scroll-mt-20 border-t border-line py-20 sm:py-28">
      <div className="container-x">
        <Marker index="02" label="What we work on" />
        <h2 className="mt-10 max-w-[16ch] font-display text-3xl font-bold uppercase leading-[1.02] tracking-tight text-ink sm:text-[2.6rem]">
          Six focus areas pivotal to the SDGs
        </h2>
        <p className="mt-4 max-w-xl text-lg text-ink-soft">
          We concentrate on the sectors where technology can solve real local
          challenges — and where Rwandan talent can lead.
        </p>

        <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {FOCUS_AREAS.map((f, i) => (
            <article key={f.title} className="bg-paper p-7 transition-colors hover:bg-paper-2">
              <div className="flex items-center justify-between text-ink">
                <FocusGlyph name={f.icon} className="h-7 w-7 text-blue" />
                <span className="font-display text-2xl font-bold text-line">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-ink">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.blurb}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Subunits ---------- */

export function Subunits() {
  return (
    <section id="subunits" className="scroll-mt-20 border-t border-line bg-paper-2 py-20 sm:py-28">
      <div className="container-x">
        <Marker index="03" label="Where we're active" />
        <h2 className="mt-10 max-w-[16ch] font-display text-3xl font-bold uppercase leading-[1.02] tracking-tight text-ink sm:text-[2.6rem]">
          University subunits
        </h2>
        <p className="mt-4 max-w-xl text-lg text-ink-soft">
          Student branches and partners driving research, learning, and innovation
          across Rwanda&apos;s leading institutions.
        </p>

        <div className="mt-12 border-t border-line">
          {SUBUNITS.map((u) => (
            <article
              key={u.short}
              className="grid grid-cols-1 items-baseline gap-x-8 gap-y-2 border-b border-line py-7 sm:grid-cols-[7rem_1fr_1.2fr]"
            >
              <span className="label text-blue">{u.short}</span>
              <h3 className="font-display text-2xl font-bold leading-tight text-ink">
                {u.name}
              </h3>
              <p className="text-sm leading-relaxed text-ink-soft sm:pt-1">{u.blurb}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Team ---------- */

function MemberRow({ m, index }: { m: Member; index: number }) {
  return (
    <div className="flex items-baseline gap-5 border-b border-line py-5">
      <span className="label w-7 flex-none text-ink-soft">
        {String(index).padStart(2, "0")}
      </span>
      <div className="flex flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <span className="font-display text-xl font-bold text-ink sm:text-2xl">
          {m.name}
        </span>
        <span className="label text-blue">{m.role}</span>
      </div>
    </div>
  );
}

export function Team() {
  return (
    <section id="team" className="scroll-mt-20 border-t border-line py-20 sm:py-28">
      <div className="container-x">
        <Marker index="04" label="Our team" />
        <h2 className="mt-10 max-w-[18ch] font-display text-3xl font-bold uppercase leading-[1.02] tracking-tight text-ink sm:text-[2.6rem]">
          The volunteers leading IEEE Rwanda
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">
          Dedicated engineers and technologists harnessing African ingenuity to
          advance technology for humanity.
        </p>

        <div className="mt-12 grid gap-x-16 gap-y-10 lg:grid-cols-2">
          <div>
            <h3 className="label text-ink-soft">Executive Committee</h3>
            <div className="mt-3 border-t border-line">
              {EXECUTIVE.map((m, i) => (
                <MemberRow key={m.name} m={m} index={i + 1} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="label text-ink-soft">Operations Committee</h3>
            <div className="mt-3 border-t border-line">
              {OPERATIONS.map((m, i) => (
                <MemberRow key={m.name} m={m} index={i + 1} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Events ---------- */

export function Events() {
  const items = [
    "Technical workshops & seminars",
    "Student hackathons & tech challenges",
    "Research showcases — incl. UMURIRO grid initiative",
    "Leadership & professional development forums",
  ];
  return (
    <section id="events" className="scroll-mt-20 bg-ink py-20 text-paper sm:py-28">
      <div className="container-x">
        <Marker index="05" label="Events & programmes" light />
        <div className="mt-10 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <h2 className="max-w-[16ch] font-display text-3xl font-bold uppercase leading-[1.02] tracking-tight sm:text-[2.6rem]">
              Workshops, hackathons, and technical talks — all year round.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-paper/75">
              From robotics deep-dives to grid-efficiency research and leadership
              forums, our subunits run a steady calendar of hands-on events. Follow
              us to catch the next one.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
              <a
                href="#contact"
                className="bg-sun px-6 py-3 text-sm font-semibold text-ink transition hover:brightness-105"
              >
                Get event updates
              </a>
              <a
                href={SECTION.joinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline px-1 py-3 text-sm font-semibold text-paper"
              >
                Join to attend →
              </a>
            </div>
          </div>

          <ul className="self-start border-t border-paper/20">
            {items.map((e) => (
              <li
                key={e}
                className="flex items-baseline gap-4 border-b border-paper/20 py-4 text-paper/90"
              >
                <span className="text-sun">→</span>
                {e}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */

export function Testimonials() {
  return (
    <section className="border-t border-line bg-paper-2 py-20 sm:py-28">
      <div className="container-x">
        <Marker index="06" label="From our members" />
        <div className="mt-12 grid gap-x-16 gap-y-12 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name}>
              <blockquote className="font-display text-2xl font-semibold leading-snug text-ink sm:text-[1.7rem]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-baseline gap-3 border-t border-line pt-4">
                <span className="font-display font-bold text-ink">{t.name}</span>
                <span className="label text-ink-soft">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */

export function Contact() {
  const reasons = [
    { t: "Members", d: "Access workshops, mentorship, and global IEEE resources." },
    { t: "Volunteers", d: "Help organize events and lead technical initiatives." },
    { t: "Partners", d: "Collaborate with universities, industry, and government." },
  ];
  return (
    <section id="contact" className="scroll-mt-20 border-t border-line py-20 sm:py-28">
      <div className="container-x">
        <Marker index="07" label="Get involved" />
        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <h2 className="max-w-[12ch] font-display text-3xl font-bold uppercase leading-[1.02] tracking-tight text-ink sm:text-[2.6rem]">
              Join the movement
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
              Whether you&apos;re a student, professional, or partner organization,
              there&apos;s a place for you at IEEE Rwanda.
            </p>
            <dl className="mt-9 border-t border-line">
              {reasons.map((r, i) => (
                <div key={r.t} className="flex items-baseline gap-5 border-b border-line py-4">
                  <span className="label w-7 flex-none text-blue">0{i + 1}</span>
                  <dt className="font-display text-lg font-bold text-ink">{r.t}</dt>
                  <dd className="flex-1 text-sm text-ink-soft">{r.d}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="border border-line bg-paper-2 p-7 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
