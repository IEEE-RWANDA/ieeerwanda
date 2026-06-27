import { NAV_LINKS, SECTION, SOCIALS } from "@/lib/content";

const IEEE_LINKS = [
  { label: "IEEE.org", href: "https://www.ieee.org/" },
  { label: "IEEE Xplore", href: "https://ieeexplore.ieee.org/" },
  { label: "IEEE Standards", href: "https://standards.ieee.org/" },
  { label: "IEEE Spectrum", href: "https://spectrum.ieee.org/" },
  { label: "IEEE Region 8", href: "https://r8.ieee.org/" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.7fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center bg-blue font-mono text-[9px] font-medium text-cloud">
              IEEE
            </span>
            <span className="font-display text-lg font-bold text-ink">
              Rwanda Subsection
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-soft">
            {SECTION.heroLine} Part of IEEE Region 8 — connecting Rwanda&apos;s
            engineers and technologists to a global professional community.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="label border border-line px-3 py-1.5 text-ink-soft transition hover:border-ink hover:text-ink"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <nav>
          <h3 className="label text-blue">Explore</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-ink-soft hover:text-ink">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav>
          <h3 className="label text-blue">IEEE network</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {IEEE_LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-soft hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-col items-start justify-between gap-2 py-6 sm:flex-row sm:items-center">
          <p className="label text-ink-soft">© {SECTION.org}</p>
          <a href={`mailto:${SECTION.contactEmail}`} className="label text-ink-soft hover:text-ink">
            {SECTION.contactEmail}
          </a>
        </div>
      </div>
    </footer>
  );
}
