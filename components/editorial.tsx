import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/lib/site";

/**
 * Editorial design system: Fraunces display headlines, small-caps labels,
 * square buttons, full-bleed photography, warm stone and deep ink sections.
 * Shared by the homepage and the sector landing pages so they always match.
 */

export const serif = "font-display font-light tracking-[-0.015em]";
export const label = "text-[11px] font-semibold uppercase tracking-[0.22em]";
export const stoneBg = "bg-[#F4F1EB]";
export const ink = "text-[#0E1E26]";

const btnLight =
  "inline-block bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#0E1E26] transition hover:bg-accent-300";

export function PrimaryButton({ href, children, dark = false }: { href: string; children: ReactNode; dark?: boolean }) {
  return (
    <Link
      href={href}
      className={
        dark
          ? "inline-block bg-[#0E1E26] px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-brand-700"
          : btnLight
      }
    >
      {children}
    </Link>
  );
}

export type Credential = [string, string];

export const defaultCredentials: Credential[] = [
  ["Fully insured", "Certificates on request"],
  ["DBS-checked", "Teams for sensitive sites"],
  ["Every visit logged", "Checked in and out on site"],
  ["Five-star rated", "Real Google reviews"],
];

export function EditorialHero({
  image,
  alt,
  eyebrow,
  title,
  intro,
  cta = { href: "/contact", label: "Book a site survey" },
  credentials = defaultCredentials,
  mobilePosition = "center",
}: {
  image: string;
  alt: string;
  eyebrow: string;
  title: ReactNode;
  intro: string;
  cta?: { href: string; label: string };
  credentials?: Credential[];
  /** Phone-only crop of the hero photo; desktop is unaffected. */
  mobilePosition?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[#061a24] md:min-h-[72vh]">
      {/* Phones: photo fills the top and fades into solid ink where the text sits. */}
      <div className="absolute inset-x-0 -top-[18svh] h-[80svh] md:hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={alt} className="h-full w-full object-cover" style={{ objectPosition: mobilePosition }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061a24] from-10% via-[#061a24]/75 via-45% to-[#061a24]/0 to-80%" />
      </div>

      {/* Tablet and desktop: full-bleed photo behind the text. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt="" aria-hidden className="absolute inset-0 -z-10 hidden h-full w-full object-cover md:block" />
      <div className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-[#061a24]/95 via-[#061a24]/72 to-[#061a24]/20 md:block" />
      <div className="absolute inset-0 -z-10 hidden bg-gradient-to-t from-[#061a24]/80 via-transparent to-transparent md:block" />

      <div className="mx-auto flex max-w-7xl flex-col justify-between relative px-5 pb-10 pt-[15svh] sm:px-6 md:min-h-[72vh] md:pt-16 lg:px-10 lg:pt-20">
        <div className="max-w-3xl">
          <p className={`${label} flex items-center gap-4 text-white/70`}>
            <span className="h-px w-10 bg-accent-300" />
            {eyebrow}
          </p>
          <h1 className={`${serif} mt-6 text-[2.35rem] leading-[1.08] text-white sm:mt-8 sm:text-6xl sm:leading-[1.06] lg:text-[4.6rem]`}>
            {title}
          </h1>
          <p className="mt-8 hidden max-w-xl text-lg leading-relaxed text-white/75 md:block">{intro}</p>
          <div className="mt-7 flex flex-wrap items-center gap-6 md:mt-10">
            <PrimaryButton href={cta.href}>{cta.label}</PrimaryButton>
            <a href={`tel:${site.contact.phoneE164}`} className="group text-sm font-semibold uppercase tracking-[0.14em] text-white">
              Call {site.contact.phoneDisplay}
              <span className="mt-1 block h-px w-full origin-left scale-x-50 bg-white/60 transition group-hover:scale-x-100" />
            </a>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-5 border-t border-white/15 pt-6 sm:mt-16 sm:gap-6 sm:pt-8 md:grid-cols-4">
          {credentials.map(([k, v]) => (
            <div key={k}>
              <div className={`${label} text-white`}>{k}</div>
              <div className="mt-1 text-xs text-white/55 sm:mt-1.5 sm:text-sm">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Statement({ eyebrow, children }: { eyebrow: string; children: ReactNode }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-28 lg:px-10 lg:py-36">
      <div className="grid gap-5 md:gap-10 lg:grid-cols-[1fr_2.2fr]">
        <p className={`${label} text-brand-700`}>{eyebrow}</p>
        <p className={`${serif} ${ink} text-[1.65rem] leading-[1.3] md:text-[2.7rem] md:leading-[1.22]`}>{children}</p>
      </div>
    </section>
  );
}

export type Row = {
  n: string;
  tag: string;
  title: string;
  body: string;
  points: string[];
  href?: string;
  linkLabel?: string;
  img: string;
  alt: string;
};

export function SectorRows({
  eyebrow,
  heading,
  intro,
  rows,
  footer,
}: {
  eyebrow: string;
  heading: ReactNode;
  intro?: string;
  rows: Row[];
  footer?: ReactNode;
}) {
  return (
    <section className={`${stoneBg} py-16 md:py-28 lg:py-36`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className={`${label} text-brand-700`}>{eyebrow}</p>
            <h2 className={`${serif} ${ink} mt-4 text-[2.1rem] leading-[1.1] md:text-[3.4rem] md:leading-[1.08]`}>{heading}</h2>
          </div>
          {intro && <p className="max-w-sm text-ink-700">{intro}</p>}
        </div>

        <div className="mt-12 space-y-16 md:mt-20 md:space-y-24 lg:space-y-32">
          {rows.map((s, i) => (
            <article key={s.n} className="grid items-center gap-7 md:gap-10 lg:grid-cols-2 lg:gap-20">
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.img} alt={s.alt} loading="lazy" className="aspect-[4/3] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]" />
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="flex items-baseline gap-5">
                  <span className={`${serif} text-5xl text-brand-700/30 md:text-6xl`}>{s.n}</span>
                  <span className={`${label} text-brand-700`}>{s.tag}</span>
                </div>
                <h3 className={`${serif} ${ink} mt-4 text-[1.75rem] leading-[1.15] md:mt-6 md:text-[2.6rem] md:leading-[1.12]`}>{s.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-ink-700 md:mt-6 md:text-lg">{s.body}</p>
                <ul className="mt-6 md:mt-8 divide-y divide-[#0E1E26]/10 border-y border-[#0E1E26]/10">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center justify-between gap-4 py-3 text-sm md:py-3.5">
                      <span>{p}</span>
                      <span className="text-brand-700">&#10003;</span>
                    </li>
                  ))}
                </ul>
                {s.href && (
                  <Link href={s.href} className={`${label} mt-8 inline-flex items-center gap-3 ${ink} hover:text-brand-700`}>
                    {s.linkLabel ?? "Find out more"} <span aria-hidden>&rarr;</span>
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>

        {footer && <div className="mt-14 md:mt-24 border-t border-[#0E1E26]/15 pt-8">{footer}</div>}
      </div>
    </section>
  );
}

export function StandardsGrid({
  eyebrow = "How we keep standards",
  title,
  intro,
  items,
  image,
  imageAlt,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro: string;
  items: { t: string; b: string }[];
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="bg-[#061a24] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-28 lg:px-10 lg:py-36">
        <div className="grid gap-6 md:gap-12 lg:grid-cols-2 lg:items-end">
          <div>
            <p className={`${label} text-accent-300`}>{eyebrow}</p>
            <h2 className={`${serif} mt-4 text-[2.1rem] leading-[1.1] md:text-[3.4rem] md:leading-[1.08]`}>{title}</h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-white/65 md:text-lg lg:justify-self-end">{intro}</p>
        </div>
        <div className="mt-10 grid gap-px bg-white/10 md:mt-20 md:grid-cols-2 lg:grid-cols-4">
          {items.map((s, i) => (
            <div key={s.t} className="grid grid-cols-[3rem_1fr] gap-x-3 bg-[#061a24] py-6 md:block md:p-8 md:pt-10">
              <span className={`${serif} text-3xl text-accent-300 md:text-5xl`}>0{i + 1}</span>
              <div>
              <h3 className="text-base font-medium md:mt-8 md:text-lg">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60 md:mt-3">{s.b}</p>
              </div>
            </div>
          ))}
        </div>
        {image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt={imageAlt ?? ""} loading="lazy" className="mt-20 hidden aspect-[21/9] w-full object-cover opacity-90 md:block" />
        )}
      </div>
    </section>
  );
}

export function NumbersBand({ items }: { items: [string, string][] }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:py-24 lg:px-10">
      <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:gap-10 md:grid-cols-4">
        {items.map(([k, v]) => (
          <div key={v} className="border-t border-[#0E1E26]/15 pt-4 md:pt-6">
            <div className={`${serif} ${ink} text-5xl leading-none md:text-7xl`}>{k}</div>
            <div className="mt-3 text-sm text-ink-700 md:mt-4">{v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function StepsBand({ eyebrow, title, steps }: { eyebrow: string; title: ReactNode; steps: { t: string; b: string }[] }) {
  return (
    <section className={`${stoneBg} py-16 md:py-28 lg:py-36`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <p className={`${label} text-brand-700`}>{eyebrow}</p>
        <h2 className={`${serif} ${ink} mt-4 max-w-3xl text-[2.1rem] leading-[1.1] md:text-[3.4rem] md:leading-[1.08]`}>{title}</h2>
        <ol className={`mt-10 grid gap-0 md:mt-20 md:gap-6 ${steps.length === 5 ? "md:grid-cols-5" : "md:grid-cols-4"}`}>
          {steps.map((s, i) => (
            <li key={s.t} className="grid grid-cols-[4.5rem_1fr] gap-x-3 border-t border-brand-700/40 py-5 md:block md:border-t-2 md:border-brand-700 md:py-0 md:pt-6">
              <span className={`${label} pt-1.5 text-brand-700 md:pt-0`}>Step {i + 1}</span>
              <div>
              <h3 className={`${serif} ${ink} text-xl md:mt-3 md:text-2xl`}>{s.t}</h3>
              <p className="mt-1.5 md:mt-3 text-sm leading-relaxed text-ink-700">{s.b}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function PortalProof({
  title = (
    <>
      Every clean, photographed and <em className="italic text-brand-700">on record.</em>
    </>
  ),
  body = "Log in any time to see completed cleans, before-and-after photos, upcoming visits and invoices, for every site you manage. When a client, a governor or an auditor asks how the building is looked after, you have the answer in seconds.",
  features = ["Before-and-after photos", "Visit history per site", "Book extra cleans", "Invoices in one place"],
  children,
}: {
  title?: ReactNode;
  body?: string;
  features?: string[];
  children?: ReactNode;
}) {
  return (
    <section className="overflow-hidden bg-white py-16 md:py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 md:gap-16 lg:grid-cols-2 lg:px-10">
        <div>
          <p className={`${label} text-brand-700`}>Your client portal</p>
          <h2 className={`${serif} ${ink} mt-4 text-[2.1rem] leading-[1.1] md:text-[3.4rem] md:leading-[1.08]`}>{title}</h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-700 md:mt-8 md:text-lg">{body}</p>
          <ul className="mt-8 grid max-w-lg grid-cols-2 gap-x-5 gap-y-4 text-sm md:mt-10 md:gap-x-8">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3 border-b border-[#0E1E26]/10 pb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                {f}
              </li>
            ))}
          </ul>
          {children}
        </div>
        <div className="relative flex justify-center">
          <div aria-hidden className="absolute inset-x-10 top-1/2 h-3/4 -translate-y-1/2 rounded-full bg-accent-200/40 blur-3xl" />
          <div className="relative w-[15rem] rounded-[2.4rem] sm:rounded-[2.8rem] bg-[#0E1E26] p-3 shadow-2xl shadow-[#061a24]/40 sm:w-[20rem]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/v2/portal.png" alt="The Fresh Finish client portal showing completed cleans with photos" loading="lazy" className="w-full rounded-[1.9rem] sm:rounded-[2.2rem]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function ClosingCTA({
  image = "/images/v2/building.jpg",
  eyebrow = "Book a site survey",
  title,
  body,
  cta = { href: "/contact", label: "Book a site survey" },
}: {
  image?: string;
  eyebrow?: string;
  title: ReactNode;
  body: string;
  cta?: { href: string; label: string };
}) {
  return (
    <section className="relative isolate overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt="" loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-[#061a24]/80" />
      <div className="mx-auto max-w-7xl px-5 py-20 text-center sm:px-6 md:py-32 lg:px-10 lg:py-44">
        <p className={`${label} text-accent-300`}>{eyebrow}</p>
        <h2 className={`${serif} mx-auto mt-5 max-w-4xl text-[2.1rem] leading-[1.1] text-white md:mt-6 md:text-6xl md:leading-[1.08]`}>{title}</h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-white/70 md:mt-8 md:text-lg">{body}</p>
        <div className="mt-9 md:mt-12 flex flex-wrap items-center justify-center gap-6">
          <PrimaryButton href={cta.href}>{cta.label}</PrimaryButton>
          <a href={`tel:${site.contact.phoneE164}`} className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
            Or call {site.contact.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
