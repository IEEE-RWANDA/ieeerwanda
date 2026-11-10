import Link from "next/link";

const LEGAL_LINKS = [
  { label: "Sitemap", href: "https://www.ieee.org/sitemap.html" },
  { label: "Accessibility", href: "https://www.ieee.org/accessibility-statement.html" },
  { label: "Nondiscrimination Policy", href: "https://www.ieee.org/about/corporate/governance/p9-26.html" },
  { label: "IEEE Ethics Reporting", href: "https://www.ieee.org/about/ethics/index.html" },
  { label: "IEEE Privacy Policy", href: "https://www.ieee.org/security-privacy.html" },
  { label: "Terms", href: "https://www.ieee.org/about/help/site-terms-conditions.html" },
];

const FOOTER_GROUPS = [
  {
    title: "Explore",
    links: [
      { label: "About IEEE Rwanda", href: "/about" },
      { label: "Events", href: "/events" },
      { label: "Our team", href: "/team" },
      { label: "Contact", href: "/contact" },
      { label: "Brand", href: "/brand" },
      { label: "Gallery", href: "https://www.flickr.com/photos/ieeerwanda/albums/" },
    ],
  },
  {
    title: "Communities",
    links: [
      { label: "Student branches", href: "/student-branches" },
      { label: "Society chapters", href: "/student-branches#chapters" },
      { label: "Affinity groups", href: "/student-branches#affinity-groups" },
      { label: "Student Activities Committee", href: "https://sac.ieeerwanda.org/" },
    ],
  },
];

const footerLink = "text-sm text-cloud/80 underline-offset-4 hover:text-cloud hover:underline";

type IconName = "linkedin" | "twitter" | "facebook" | "youtube" | "instagram" | "tiktok";

const SOCIAL_ICONS: { name: IconName; href: string; label: string }[] = [
  { name: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/ieeerwanda/" },
  { name: "youtube", label: "YouTube", href: "https://www.youtube.com/" },
  { name: "instagram", label: "Instagram", href: "https://www.instagram.com/" },
  { name: "tiktok", label: "TikTok", href: "https://www.tiktok.com/@ieeesacrwanda" },
];

function SocialGlyph({ name }: { name: IconName }) {
  const p = { fill: "currentColor" };
  switch (name) {
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" {...p}>
          <path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z" />
        </svg>
      );
    case "twitter":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" {...p}>
          <path d="M18.9 2H22l-7.5 8.6L23 22h-6.9l-5.4-7-6.2 7H1.4l8-9.2L1 2h7l4.9 6.5L18.9 2Zm-2.4 18h1.9L7.6 4H5.6L16.5 20Z" />
        </svg>
      );
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" {...p}>
          <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.5V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12Z" />
        </svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" {...p}>
          <path d="M23 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.8-1.8C19.3 5 12 5 12 5s-7.3 0-8.8.5A2.5 2.5 0 0 0 1.4 7.3C1 8.8 1 12 1 12s0 3.2.4 4.7a2.5 2.5 0 0 0 1.8 1.8C4.7 19 12 19 12 19s7.3 0 8.8-.5a2.5 2.5 0 0 0 1.8-1.8C23 15.2 23 12 23 12Zm-13 3V9l5 3-5 3Z" />
        </svg>
      );
    case "tiktok":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" {...p}>
          <path d="M16.6 2c.4 2.8 2 4.5 4.4 4.7v3.5a8.2 8.2 0 0 1-4.4-1.4v7a6.2 6.2 0 1 1-6.2-6.2l.8.1v3.6a2.8 2.8 0 1 0 2 2.7V2z" />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
  }
}

export default function Footer() {
  return (
    <footer className="border-t-4 border-cyan bg-navy-2 text-cloud">
      <div className="container-x py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_3fr] lg:gap-12">
          <div>
            <Link href="/" className="inline-block font-display text-3xl font-bold tracking-tight">
              IEEE Rwanda
            </Link>
            <p className="mt-3 max-w-60 text-sm leading-relaxed text-cloud/80">
              Advancing technology. Growing together.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              {SOCIAL_ICONS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-full bg-cloud/15 text-cloud transition hover:bg-cloud hover:text-blue"
                >
                  <SocialGlyph name={s.name} />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer navigation" className="grid gap-8 sm:grid-cols-2">
            {FOOTER_GROUPS.map((group) => (
              <div key={group.title} className="py-2">
                <h2 className="font-display text-base font-bold">{group.title}</h2>
                <ul className="mt-4 space-y-2.5">
                  {group.links.map(({ label, href }) => (
                    <li key={label}>
                      {!href.startsWith("/") ? (
                        <a href={href} className={footerLink}>{label}</a>
                      ) : (
                        <Link href={href} className={footerLink}>{label}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-cloud/15 pt-6">
          <nav aria-label="IEEE policies">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {LEGAL_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-xs font-semibold text-cloud/85 underline-offset-4 hover:underline">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <p className="mt-4 max-w-3xl text-xs leading-relaxed text-cloud/75">
            © Copyright {new Date().getFullYear()}{" "}IEEE – All rights reserved. Use of this website
            signifies your agreement to the IEEE Terms and Conditions. A public charity, IEEE is
            the world&apos;s largest technical professional organization dedicated to advancing
            technology for the benefit of humanity.
          </p>
        </div>
      </div>
    </footer>
  );
}
