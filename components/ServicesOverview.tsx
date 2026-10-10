import Link from "next/link";
import Icon, { type IconName } from "./Icon";
import Section from "./Section";
import { services } from "@/lib/services";

export default function ServicesOverview() {
  return (
    <Section tone="muted" id="services">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
          Our services
        </p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-brand-900">
          Cleaning built around the way you actually live and work
        </h2>
        <p className="mt-4 text-lg text-ink-700">
          One team, one standard. Whether it's a last-day move-out clean, a
          full home reset or a regular office visit, we show up, do the work
          properly and stand behind it.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => {
          const href = s.hasPage ? `/${s.slug}` : "/contact";
          return (
            <Link
              key={s.slug}
              href={href}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-surface-200 hover:border-brand-300 hover:shadow-lg transition-all"
            >
              {s.image ? (
                <div className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.image}
                    alt={s.name}
                    loading="lazy"
                    className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 text-brand-700 shadow-sm">
                    <Icon name={s.icon as IconName} size={20} />
                  </span>
                </div>
              ) : null}
              <div className="flex flex-1 flex-col p-6">
              {!s.image && (
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 group-hover:bg-brand-100">
                  <Icon name={s.icon as IconName} size={22} />
                </span>
              )}
              <h3 className={`${s.image ? "" : "mt-5"} text-lg font-semibold text-brand-900`}>
                {s.name}
                {s.featured && (
                  <span className="ml-2 align-middle text-xs font-semibold text-accent-600 bg-accent-500/10 px-2 py-0.5 rounded-full">
                    Most booked
                  </span>
                )}
              </h3>
              <p className="mt-2 text-sm text-ink-700 leading-relaxed">
                {s.blurb}
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 group-hover:text-brand-900">
                {s.hasPage ? "Learn more" : "Enquire"}
                <Icon name="arrow-right" size={14} />
              </span>
              </div>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
