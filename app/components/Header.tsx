"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SECTION } from "@/lib/content";
import { LogoBadge } from "./ui";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-blue">
        {/* desktop: logo left, centered links */}
        <div className="container-x hidden items-center justify-between lg:flex">
          <Link href="/" aria-label="IEEE Rwanda home" className="py-1.5">
            <LogoBadge size="h-10" />
          </Link>
          <ul className="flex items-center">
            {NAV_LINKS.map((l) => {
              const active = isActive(l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`block px-5 py-4 text-[0.82rem] font-semibold uppercase tracking-wide text-cloud transition-colors ${
                      active ? "bg-blue-ink" : "hover:bg-blue-ink/60"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <span aria-hidden className="w-12" />
        </div>

        {/* mobile: logo + hamburger */}
        <div className="container-x flex items-center justify-between py-2 lg:hidden">
          <Link href="/" aria-label="IEEE Rwanda home">
            <LogoBadge size="h-9" />
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center text-cloud"
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-6 bg-current transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      <div
        className={`overflow-hidden bg-blue-ink transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="container-x flex flex-col py-1">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block border-b border-cloud/15 py-3 text-sm font-semibold uppercase tracking-wide text-cloud ${
                  isActive(l.href) ? "text-gold" : ""
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="py-3">
            <a
              href={SECTION.joinUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn btn-light w-full"
            >
              Join IEEE
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
