import type { ReactNode } from "react";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";

type Props = {
  eyebrow?: string;
  heading: string;
  intro?: string;
  breadcrumbs: Crumb[];
  children?: ReactNode;
};

/** Lighter hero for inner pages — smaller than the homepage hero. */
export default function PageHero({
  eyebrow,
  heading,
  intro,
  breadcrumbs,
  children,
}: Props) {
  return (
    <section className="bg-gradient-to-b from-brand-50 to-surface-0 border-b border-surface-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-8 pb-14 md:pt-12 md:pb-20">
        <Breadcrumbs items={breadcrumbs} />
        <div className="mt-6 max-w-3xl">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-900 leading-[1.1]">
            {heading}
          </h1>
          {intro && (
            <p className="mt-5 text-lg text-ink-700 leading-relaxed max-w-2xl">
              {intro}
            </p>
          )}
          {children && <div className="mt-6">{children}</div>}
        </div>
      </div>
    </section>
  );
}
