import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "muted" | "dark" | "accent";
  /** Wrap content in max-width container. Default true. */
  container?: boolean;
  as?: "section" | "div" | "article" | "aside";
};

const tones: Record<NonNullable<Props["tone"]>, string> = {
  default: "bg-surface-0",
  muted: "bg-surface-50",
  dark: "bg-brand-900 text-surface-50",
  accent: "bg-brand-700 text-white",
};

export default function Section({
  children,
  className = "",
  id,
  tone = "default",
  container = true,
  as: As = "section",
}: Props) {
  return (
    <As id={id} className={`${tones[tone]} ${className}`}>
      <div
        className={
          container
            ? "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-24"
            : ""
        }
      >
        {children}
      </div>
    </As>
  );
}

/** Smaller section padding, for dense stacked content like FAQ rows. */
export function SectionTight({
  children,
  className = "",
  id,
  tone = "default",
}: Omit<Props, "as" | "container">) {
  return (
    <section id={id} className={`${tones[tone]} ${className}`}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {children}
      </div>
    </section>
  );
}
