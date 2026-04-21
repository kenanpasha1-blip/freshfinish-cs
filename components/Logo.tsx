import Link from "next/link";
import { site } from "@/lib/site";

type Props = {
  className?: string;
  width?: number;
  asStatic?: boolean;
  variant?: "default" | "light";
};

/**
 * Renders a clean wordmark for Fresh Finish Cleaning Solutions.
 *
 * When the real logo asset arrives, replace the inner markup with
 * `<Image src="/logo.svg" ... />`. The /public/README.md has full instructions.
 * Keeping this as inline SVG/text for now so the site works with zero assets.
 */
export default function Logo({
  className = "",
  width = 170,
  asStatic = false,
  variant = "default",
}: Props) {
  const height = Math.round((width * 44) / 170);
  const dark = variant === "light";

  const mark = (
    <svg
      width={width}
      height={height}
      viewBox="0 0 170 44"
      role="img"
      aria-label={`${site.name} logo`}
      className={className}
    >
      {/* Mark */}
      <g>
        <circle cx="20" cy="22" r="16" fill={dark ? "#6ec8a7" : "#204f56"} />
        <path
          d="M13 22c2-4 5-6 8-6s5 2 6 5c-4 0-7 1-9 3-2 2-3 4-5 2z"
          fill="#ffffff"
        />
        <path
          d="M23 17c2 1 3 3 3 5"
          stroke={dark ? "#143840" : "#6ec8a7"}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </g>
      {/* Wordmark */}
      <text
        x="44"
        y="22"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="15"
        fontWeight="700"
        fill={dark ? "#ffffff" : "#143840"}
        letterSpacing="-0.2"
      >
        Fresh Finish
      </text>
      <text
        x="44"
        y="36"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="9"
        fontWeight="500"
        fill={dark ? "#b3d6d9" : "#357f88"}
        letterSpacing="1.4"
      >
        CLEANING SOLUTIONS
      </text>
    </svg>
  );

  if (asStatic) return mark;
  return (
    <Link href="/" aria-label={`${site.name} — home`} className="inline-flex items-center">
      {mark}
    </Link>
  );
}
