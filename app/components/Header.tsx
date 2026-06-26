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
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-blue-100 bg-cloud/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        <a href="#top" aria-label="IEEE Rwanda home">
          <Wordmark className={scrolled ? "text-ink" : "text-ink"} />
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="link-underline text-sm font-medium text-slate hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={SECTION.joinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-cloud shadow-card transition hover:bg-blue-700 sm:inline-block"
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
        className={`overflow-hidden border-t border-blue-100 bg-cloud transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-96" : "max-h-0 border-t-transparent"
        }`}
      >
        <ul className="container-x flex flex-col py-3">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-blue-50 py-3 text-base font-medium text-ink"
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
              className="block rounded-full bg-blue-600 px-5 py-3 text-center text-base font-semibold text-cloud"
            >
              Join IEEE
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
