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
    <footer className="bg-navy text-blue-100">
      <div className="container-x grid gap-10 py-16 md:grid-cols-[1.6fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-blue-600 font-display text-[10px] font-bold text-cloud">
              IEEE
            </span>
            <span className="font-display text-lg font-bold text-cloud">
              Rwanda Subsection
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-blue-200/75">
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
                className="rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-medium text-blue-100 transition hover:border-white/40 hover:text-cloud"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <nav>
          <h3 className="eyebrow text-sun">Explore</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-blue-100/85 hover:text-cloud">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav>
          <h3 className="eyebrow text-sun">IEEE network</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {IEEE_LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-100/85 hover:text-cloud"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-start justify-between gap-2 py-6 text-xs text-blue-200/70 sm:flex-row sm:items-center">
          <p>© {SECTION.org}. All rights reserved.</p>
          <p>
            <a href={`mailto:${SECTION.contactEmail}`} className="hover:text-cloud">
              {SECTION.contactEmail}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
