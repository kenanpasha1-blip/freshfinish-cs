import Link from "next/link";
import Icon from "./Icon";
import Section from "./Section";

const sectors = [
  {
    href: "/office-cleaning",
    eyebrow: "Offices & serviced offices",
    title: "Office cleaning",
    body: "Daily and scheduled contract cleaning for offices, serviced offices and workspaces, with a photo report after every visit.",
    image: "/images/office/office-interior.jpg",
    alt: "A spotless modern London office",
  },
  {
    href: "/school-cleaning",
    eyebrow: "Schools & education",
    title: "School cleaning",
    body: "Term-time and holiday cleaning for schools and academies, worked around the school day by DBS-checked teams.",
    image: "/images/school/classroom.jpg",
    alt: "A clean, bright classroom",
  },
  {
    href: "/end-of-tenancy-cleaning-london",
    eyebrow: "Property & lettings",
    title: "End of tenancy cleaning",
    body: "Check-out ready cleans for letting agents, landlords and property managers, with before-and-after photos on every job.",
    image: "/images/hero/hero-pro-cleaner.jpg",
    alt: "A Fresh Finish cleaner at work",
  },
];

export default function SectorGrid() {
  return (
    <Section id="sectors">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
          Who we clean for
        </p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-brand-900">
          Specialist cleaning for the spaces that matter
        </h2>
        <p className="mt-4 text-lg text-ink-700">
          One contractor, one standard, across every site you manage.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {sectors.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="group relative flex min-h-[26rem] flex-col justify-end overflow-hidden rounded-3xl shadow-lg ring-1 ring-brand-900/5"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={s.image}
              alt={s.alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-brand-900/95 via-brand-900/55 to-brand-900/5"
            />
            <div className="relative p-7 text-white">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent-300">
                {s.eyebrow}
              </p>
              <h3 className="mt-2 text-2xl font-bold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/85">{s.body}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white group-hover:gap-2.5 transition-all">
                Explore <Icon name="arrow-right" size={14} />
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Domestic and specialist, lower priority */}
      <div className="mt-6 flex flex-col gap-4 rounded-3xl border border-surface-200 bg-surface-50 p-7 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-4">
          <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-white text-brand-700 ring-1 ring-surface-200">
            <Icon name="home" size={22} />
          </span>
          <div>
            <h3 className="text-lg font-semibold text-brand-900">
              Domestic, deep and after-build cleaning
            </h3>
            <p className="mt-1 text-sm text-ink-700">
              Regular home cleaning, one-off deep cleans and post-renovation
              cleans, to the same standard as our commercial work.
            </p>
          </div>
        </div>
        <Link
          href="/contact"
          className="inline-flex flex-none items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-900"
        >
          Ask about domestic <Icon name="arrow-right" size={14} />
        </Link>
      </div>
    </Section>
  );
}
