"use client";

import { useState } from "react";
import { SECTION } from "@/lib/content";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const first = String(data.get("first") || "");
    const last = String(data.get("last") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(`Website enquiry from ${first} ${last}`.trim());
    const body = encodeURIComponent(`${message}\n\n— ${first} ${last}\n${email}`);
    window.location.href = `mailto:${SECTION.contactEmail}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const field =
    "w-full rounded-xl border border-blue-100 bg-cloud px-4 py-3 text-sm text-ink outline-none transition placeholder:text-slate/60 focus:border-blue-500 focus:ring-4 focus:ring-blue-100";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="first" required placeholder="First name" className={field} />
        <input name="last" placeholder="Last name" className={field} />
      </div>
      <input
        name="email"
        type="email"
        required
        placeholder="Email address"
        className={field}
      />
      <textarea
        name="message"
        required
        rows={4}
        maxLength={600}
        placeholder="How would you like to get involved?"
        className={`${field} resize-none`}
      />
      <button
        type="submit"
        className="w-full rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-cloud transition hover:bg-blue-700"
      >
        Send message
      </button>
      {sent && (
        <p className="text-center text-sm text-green-600">
          Opening your email app — thanks for reaching out!
        </p>
      )}
      <p className="text-center text-xs text-slate">
        Prefer email? Write to{" "}
        <a href={`mailto:${SECTION.contactEmail}`} className="font-semibold text-blue-600">
          {SECTION.contactEmail}
        </a>
      </p>
    </form>
  );
}
