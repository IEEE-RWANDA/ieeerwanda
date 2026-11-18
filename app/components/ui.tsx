import Link from "next/link";
import Image from "next/image";

/* ---------- Section logo ---------- */
// Full-color logo sits flush (no backdrop). It reads on the dark navy UI;
// keep navy behind it wherever it appears.

export function LogoBadge({ size = "h-16" }: { size?: string }) {
  return (
    <Image
      src="/img/logo.png"
      alt="IEEE Rwanda Subsection"
      width={311}
      height={161}
      preload
      className={`${size} w-auto`}
    />
  );
}

/* ---------- Page hero (inner-page banner — IEEE blue band) ---------- */

export function PageHero({
  eyebrow,
  title,
  subtitle,
  crumb,
  compact = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  crumb: string;
  compact?: boolean;
}) {
  return (
    <section className="page-hero bg-navy text-cloud">
      <div className={`container-x ${compact ? "py-7 sm:py-9" : "py-14 sm:py-20"}`}>
        <nav aria-label="Breadcrumb" className="label flex items-center gap-2 text-cloud/70">
          <Link href="/" className="hover:text-cloud">
            Home
          </Link>
          <span>/</span>
          <span className="text-gold">{crumb}</span>
        </nav>

        <p className={`label text-cloud/80 ${compact ? "mt-4" : "mt-6"}`}>{eyebrow}</p>
        <h1 className={`font-display font-bold leading-[1.05] tracking-tight ${compact ? "mt-2 text-3xl sm:text-4xl" : "mt-3 max-w-[24ch] text-4xl sm:text-6xl"}`}>
          {title}
        </h1>
        {subtitle && (
          <p className={`max-w-2xl leading-relaxed text-cloud/85 ${compact ? "mt-3 text-base" : "mt-5 text-lg"}`}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

/* ---------- Section wrapper ---------- */

export function Section({
  children,
  alt = false,
  className = "",
  id,
}: {
  children: React.ReactNode;
  alt?: boolean;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 ${alt ? "bg-paper-2" : "bg-paper"} ${className}`}
    >
      <div className="container-x">{children}</div>
    </section>
  );
}

/* ---------- Section heading ---------- */

export function SectionHead({
  eyebrow,
  title,
  intro,
  center = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`label flex items-center gap-3 text-blue ${center ? "justify-center" : ""}`}>
        {!center && <span className="h-px w-8 bg-blue" />}
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-navy sm:text-[2.4rem]">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">{intro}</p>
      )}
    </div>
  );
}

/* ---------- Arrow link ---------- */

export function ArrowLink({
  href,
  children,
  external = false,
  light = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  light?: boolean;
}) {
  const cls = `link-underline inline-flex items-center text-sm font-semibold ${
    light ? "text-cloud" : "text-blue"
  }`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/* ---------- Stat ledger ---------- */

export function StatGrid({
  stats,
  onDark = false,
}: {
  stats: { value: string; label: string }[];
  onDark?: boolean;
}) {
  return (
    <dl
      className={`grid grid-cols-2 gap-px overflow-hidden rounded-[3px] lg:grid-cols-4 ${
        onDark ? "bg-cloud/15" : "bg-line"
      }`}
    >
      {stats.map((s) => (
        <div
          key={s.label}
          className={`px-5 py-7 ${onDark ? "bg-navy" : "bg-paper"}`}
        >
          <dd
            className={`font-display text-4xl font-extrabold leading-none sm:text-5xl ${
              onDark ? "text-cloud" : "text-blue"
            }`}
          >
            {s.value}
          </dd>
          <dt
            className={`label mt-3 ${onDark ? "text-cloud/65" : "text-ink-soft"}`}
          >
            {s.label}
          </dt>
        </div>
      ))}
    </dl>
  );
}
