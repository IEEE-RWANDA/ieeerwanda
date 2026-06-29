"use client";

import { useRef, useState } from "react";

// Background YouTube video with a user-toggleable mute control.
// Autoplay requires muted start; the button uses the YouTube IFrame API
// (postMessage) to unmute after a user gesture.
export default function HeroVideo({ id }: { id: string }) {
  const ref = useRef<HTMLIFrameElement>(null);
  const [muted, setMuted] = useState(true);

  const command = (func: string) =>
    ref.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func, args: [] }),
      "*"
    );

  const toggle = () => {
    if (muted) {
      command("unMute");
      command("playVideo");
    } else {
      command("mute");
    }
    setMuted((m) => !m);
  };

  const src =
    `https://www.youtube.com/embed/${id}` +
    `?autoplay=1&mute=1&controls=0&loop=1&playlist=${id}` +
    `&playsinline=1&modestbranding=1&rel=0&disablekb=1&showinfo=0&enablejsapi=1` +
    `&cc_load_policy=0&cc_lang_pref=none&iv_load_policy=3`;

  return (
    <>
      <div className="absolute inset-0 overflow-hidden bg-navy">
        <iframe
          ref={ref}
          title="IEEE Rwanda"
          src={src}
          allow="autoplay; encrypted-media"
          className="pointer-events-none absolute inset-0 h-full w-full"
        />
      </div>

      <button
        type="button"
        onClick={toggle}
        aria-label={muted ? "Unmute video" : "Mute video"}
        className="absolute bottom-5 right-5 z-20 inline-flex items-center gap-2 rounded-full border border-cloud/30 bg-navy/50 px-4 py-2 text-xs font-semibold text-cloud backdrop-blur-sm transition hover:bg-navy/70"
      >
        {muted ? (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 5 6 9H2v6h4l5 4V5Z" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 5 6 9H2v6h4l5 4V5Z" />
            <path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a9 9 0 0 1 0 14" />
          </svg>
        )}
        {muted ? "Unmute" : "Mute"}
      </button>
    </>
  );
}
