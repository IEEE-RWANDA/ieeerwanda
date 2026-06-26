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

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span className={`eyebrow ${light ? "text-sun" : "text-blue-600"}`}>
      <span className="h-px w-7 bg-current" />
      {children}
    </span>
  );
}

/* ---------- Hero ---------- */

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy text-cloud">
      <div className="dot-grid absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute -right-32 -top-24 h-[28rem] w-[28rem] rounded-full bg-blue-600/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-green-500/20 blur-3xl" />

      <div className="container-x relative pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="max-w-3xl animate-fade-up">
          <span className="eyebrow rounded-full border border-white/15 bg-white/5 px-4 py-2 text-blue-300">
            {SECTION.region}
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Harnessing African ingenuity to{" "}
            <span className="text-sun">advance technology</span> for humanity.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-blue-100/85">
            {SECTION.tagline}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={SECTION.joinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-sun px-7 py-3.5 text-base font-semibold text-navy shadow-lift transition hover:brightness-105"
            >
              Become a member
            </a>
            <a
              href="#about"
              className="rounded-full border border-white/20 px-7 py-3.5 text-base font-semibold text-cloud transition hover:bg-white/10"
            >
              Discover IEEE Rwanda
            </a>
          </div>
        </div>
      </div>

      {/* stat strip */}
      <div className="relative border-t border-white/10">
        <dl className="container-x grid grid-cols-2 divide-x divide-white/10 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="px-2 py-7 first:pl-0 sm:px-6">
              <dd className="font-display text-3xl font-bold text-cloud sm:text-4xl">
                {s.value}
              </dd>
              <dt className="mt-1 text-xs font-medium uppercase tracking-wide text-blue-200/80">
                {s.label}
              </dt>
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
    <section id="about" className="scroll-mt-20 bg-cloud py-20 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
        <div>
          <Eyebrow>About the Subsection</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            {ABOUT.heading}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate">
            {ABOUT.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <a
            href="#contact"
            className="link-underline mt-7 inline-block font-semibold text-blue-600"
          >
            Get involved →
          </a>
        </div>

        <div className="relative">
          <div className="rounded-[var(--radius-card)] bg-gradient-to-br from-blue-600 to-blue-700 p-8 text-cloud shadow-lift sm:p-10">
            <p className="font-display text-2xl font-semibold leading-snug">
              &ldquo;Technology for humanity&rdquo; isn&apos;t a slogan — it&apos;s
              how we choose the problems worth solving in Rwanda.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-white/15 pt-7">
              <div>
                <p className="font-display text-3xl font-bold">Pro bono</p>
                <p className="mt-1 text-sm text-blue-100/80">
                  Volunteer-led, mission-driven
                </p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold">Global</p>
                <p className="mt-1 text-sm text-blue-100/80">
                  Backed by IEEE worldwide
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-[var(--radius-card)] bg-green-100" />
        </div>
      </div>
    </section>
  );
}

/* ---------- Focus areas ---------- */

export function FocusAreas() {
  return (
    <section id="focus" className="scroll-mt-20 bg-mist py-20 sm:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <Eyebrow>What we work on</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            Focus areas pivotal to the SDGs
          </h2>
          <p className="mt-4 text-lg text-slate">
            We concentrate on the sectors where technology can solve real local
            challenges — and where Rwandan talent can lead.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FOCUS_AREAS.map((f) => (
            <article
              key={f.title}
              className="group rounded-[var(--radius-card)] border border-blue-100 bg-cloud p-7 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-card"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-cloud">
                <FocusGlyph name={f.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{f.blurb}</p>
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
    <section id="subunits" className="scroll-mt-20 bg-cloud py-20 sm:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <Eyebrow>Where we&apos;re active</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            University subunits
          </h2>
          <p className="mt-4 text-lg text-slate">
            Student branches and partners driving research, learning, and
            innovation across Rwanda&apos;s leading institutions.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {SUBUNITS.map((u, i) => (
            <article
              key={u.short}
              className="flex flex-col rounded-[var(--radius-card)] border border-blue-100 bg-mist p-7"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-sm font-bold uppercase tracking-wider text-blue-600">
                  {u.short}
                </span>
                <span className="font-display text-2xl font-bold text-blue-100">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-ink">
                {u.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">{u.blurb}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Team ---------- */

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

function MemberCard({ m, accent }: { m: Member; accent: "blue" | "green" }) {
  const ring = accent === "blue" ? "bg-blue-600" : "bg-green-500";
  return (
    <div className="flex items-center gap-4 rounded-[var(--radius-card)] border border-blue-100 bg-cloud p-5">
      <span
        className={`grid h-12 w-12 flex-none place-items-center rounded-full ${ring} font-display text-base font-bold text-cloud`}
      >
        {initials(m.name)}
      </span>
      <div>
        <p className="font-display font-semibold text-ink">{m.name}</p>
        <p className="text-sm text-slate">{m.role}</p>
      </div>
    </div>
  );
}

export function Team() {
  return (
    <section id="team" className="scroll-mt-20 bg-mist py-20 sm:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <Eyebrow>Our team</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            The volunteers leading IEEE Rwanda
          </h2>
          <p className="mt-4 text-lg text-slate">
            Dedicated engineers and technologists harnessing African ingenuity to
            advance technology for humanity.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="eyebrow text-slate">Executive Committee</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {EXECUTIVE.map((m) => (
              <MemberCard key={m.name} m={m} accent="blue" />
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h3 className="eyebrow text-slate">Operations Committee</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {OPERATIONS.map((m) => (
              <MemberCard key={m.name} m={m} accent="green" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Events ---------- */

export function Events() {
  return (
    <section id="events" className="scroll-mt-20 bg-cloud py-20 sm:py-28">
      <div className="container-x">
        <div className="overflow-hidden rounded-[22px] border border-blue-100 bg-navy text-cloud">
          <div className="dot-grid relative grid gap-8 p-8 sm:p-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <Eyebrow light>Events &amp; programmes</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Workshops, hackathons, and technical talks — all year round.
              </h2>
              <p className="mt-4 max-w-xl text-blue-100/85">
                From robotics deep-dives to grid-efficiency research and leadership
                forums, our subunits run a steady calendar of hands-on events.
                Follow us to catch the next one.
              </p>
              <div className="mt-7 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-full bg-sun px-6 py-3 text-sm font-semibold text-navy transition hover:brightness-105"
                >
                  Get event updates
                </a>
                <a
                  href={SECTION.joinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-cloud transition hover:bg-white/10"
                >
                  Join to attend
                </a>
              </div>
            </div>
            <ul className="space-y-3">
              {[
                "Technical workshops & seminars",
                "Student hackathons & tech challenges",
                "Research showcases — incl. UMURIRO grid initiative",
                "Leadership & professional development forums",
              ].map((e) => (
                <li
                  key={e}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-blue-50"
                >
                  <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-green-500" />
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */

export function Testimonials() {
  return (
    <section className="bg-mist py-20 sm:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <Eyebrow>From our members</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            A community that moves you forward
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="rounded-[var(--radius-card)] border border-blue-100 bg-cloud p-8 shadow-card"
            >
              <span className="font-display text-5xl leading-none text-blue-200">&ldquo;</span>
              <blockquote className="mt-2 text-lg leading-relaxed text-ink">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-blue-600 font-display text-sm font-bold text-cloud">
                  {t.name[0]}
                </span>
                <span>
                  <span className="block font-semibold text-ink">{t.name}</span>
                  <span className="block text-sm text-slate">{t.role}</span>
                </span>
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
  return (
    <section id="contact" className="scroll-mt-20 bg-cloud py-20 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <Eyebrow>Get in touch</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            Join the movement
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate">
            Whether you&apos;re a student, professional, or partner organization,
            there&apos;s a place for you at IEEE Rwanda. Tell us how you&apos;d like
            to get involved.
          </p>

          <div className="mt-8 space-y-3">
            <Reason title="Members" text="Access workshops, mentorship, and global IEEE resources." />
            <Reason title="Volunteers" text="Help organize events and lead technical initiatives." />
            <Reason title="Partners" text="Collaborate with universities, industry, and government." />
          </div>
        </div>

        <div className="rounded-[var(--radius-card)] border border-blue-100 bg-mist p-7 shadow-card sm:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function Reason({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-1 grid h-6 w-6 flex-none place-items-center rounded-full bg-green-100 text-green-600">
        <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.3 3.3 6.8-6.8a1 1 0 0 1 1.4 0z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <p className="text-sm text-slate">
        <span className="font-semibold text-ink">{title}.</span> {text}
      </p>
    </div>
  );
}
