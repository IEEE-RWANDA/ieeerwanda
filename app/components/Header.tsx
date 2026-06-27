"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS, SECTION } from "@/lib/content";
import Wordmark from "./Wordmark";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
        scrolled ? "border-line bg-paper/95 backdrop-blur" : "border-transparent"
      }`}
    >
      <nav className="container-x flex h-[60px] items-center justify-between">
        <a href="#top" aria-label="IEEE Rwanda home" className="text-ink">
          <Wordmark />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="label text-ink-soft transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href={SECTION.joinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition hover:bg-blue sm:inline-block"
          >
            Join IEEE
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center text-ink lg:hidden"
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-6 bg-current transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden border-t border-line bg-paper transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-96" : "max-h-0 border-t-transparent"
        }`}
      >
        <ul className="container-x flex flex-col py-2">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-line-soft py-3 text-base font-medium text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href={SECTION.joinUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block bg-ink px-5 py-3 text-center text-base font-semibold text-paper"
            >
              Join IEEE
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
