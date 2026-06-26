import type { FocusIcon } from "@/lib/content";

const common = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function FocusGlyph({ name, className = "" }: { name: FocusIcon; className?: string }) {
  const props = { viewBox: "0 0 24 24", className, ...common };
  switch (name) {
    case "ai":
      return (
        <svg {...props}>
          <rect x="7" y="7" width="10" height="10" rx="2" />
          <path d="M10 4v3M14 4v3M10 17v3M14 17v3M4 10h3M4 14h3M17 10h3M17 14h3" />
          <circle cx="12" cy="12" r="1.6" />
        </svg>
      );
    case "energy":
      return (
        <svg {...props}>
          <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
        </svg>
      );
    case "agri":
      return (
        <svg {...props}>
          <path d="M12 21V9" />
          <path d="M12 9c0-3 2-5 6-5 0 3-2 5-6 5z" />
          <path d="M12 13c0-2.5-2-4.5-6-4.5 0 2.5 2 4.5 6 4.5z" />
        </svg>
      );
    case "digital":
      return (
        <svg {...props}>
          <rect x="3" y="4" width="18" height="13" rx="2" />
          <path d="M8 21h8M12 17v4" />
          <path d="M8 11l2 2 4-4" />
        </svg>
      );
    case "health":
      return (
        <svg {...props}>
          <path d="M3 12h4l2 5 4-10 2 5h6" />
        </svg>
      );
    case "education":
      return (
        <svg {...props}>
          <path d="M12 4 2 9l10 5 10-5-10-5z" />
          <path d="M6 11v5c0 1 3 2.5 6 2.5s6-1.5 6-2.5v-5" />
        </svg>
      );
  }
}
