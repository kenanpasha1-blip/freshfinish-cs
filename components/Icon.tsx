/**
 * Tiny inline-SVG icon set. Keeps the site free of an icon-library dependency
 * and stays lean for performance. Add icons here as needed.
 */

type Props = {
  name: IconName;
  className?: string;
  size?: number;
  "aria-hidden"?: boolean;
};

export type IconName =
  | "key"
  | "sparkles"
  | "hard-hat"
  | "home"
  | "briefcase"
  | "shield-check"
  | "clock"
  | "map-pin"
  | "phone"
  | "mail"
  | "whatsapp"
  | "instagram"
  | "check"
  | "chevron-down"
  | "star"
  | "arrow-right";

export default function Icon({ name, className = "", size = 20, ...rest }: Props) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": rest["aria-hidden"] ?? true,
  };

  switch (name) {
    case "key":
      return (
        <svg {...common}>
          <circle cx="7.5" cy="15.5" r="3.5" />
          <path d="M10 13l10-10" />
          <path d="M15 8l3 3" />
        </svg>
      );
    case "sparkles":
      return (
        <svg {...common}>
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
          <path d="M6 6l2 2M16 16l2 2M18 6l-2 2M8 16l-2 2" />
        </svg>
      );
    case "hard-hat":
      return (
        <svg {...common}>
          <path d="M4 17h16v2H4z" />
          <path d="M6 17a6 6 0 0112 0" />
          <path d="M10 7h4v4h-4z" />
        </svg>
      );
    case "home":
      return (
        <svg {...common}>
          <path d="M3 11l9-8 9 8" />
          <path d="M5 10v10h14V10" />
        </svg>
      );
    case "briefcase":
      return (
        <svg {...common}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2" />
        </svg>
      );
    case "shield-check":
      return (
        <svg {...common}>
          <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "map-pin":
      return (
        <svg {...common}>
          <path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...common}>
          <path d="M20 12a8 8 0 11-15-4l-1 5 5-1a8 8 0 0011 0z" />
          <path d="M9 10c0 3 2 5 5 5l1-2-2-1-1 1a3 3 0 01-1-1l1-1-1-2-2 1z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <path d="M5 12l4 4L19 6" />
        </svg>
      );
    case "chevron-down":
      return (
        <svg {...common}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      );
    case "star":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M12 2l3 6.5 7 1-5 5 1.2 7L12 18l-6.2 3.5L7 14.5l-5-5 7-1z" />
        </svg>
      );
    case "arrow-right":
      return (
        <svg {...common}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      );
    default:
      return null;
  }
}
