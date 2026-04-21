import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import StructuredData from "@/components/StructuredData";
import { buildMetadata, faqJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { getFAQs } from "@/lib/faqs";
import { site } from "@/lib/site";

const PATH = "/what-does-end-of-tenancy-cleaning-include";

export const metadata: Metadata = buildMetadata({
  title: "What Does End of Tenancy Cleaning Include?",
  description:
    "A proper room-by-room breakdown of what end of tenancy cleaning actually includes — for tenants, landlords and letting agents. Written to help you plan a check-out-ready clean.",
  path: PATH,
});

const sections: { title: string; intro: string; items: string[] }[] = [
  {
    title: "Kitchen",
    intro:
      "The kitchen is where most deposit deductions happen. Done properly, it takes more time than any other room.",
    items: [
      "Oven fully cleaned: interior, door glass (inside layer where accessible), racks, trays, seals and external housing",
      "Hob and extractor hood: grease, limescale and burn marks removed; extractor filter soaked and cleaned",
      "Splashbacks and tiles degreased; grout attended to",
      "Fridge and freezer: emptied, defrosted where needed, cleaned inside and out including seals and drawers",
      "Microwave cleaned inside and out; dishwasher filters and drawer",
      "Washing machine: drawer, rubber seal and door glass cleaned; visible mould/limescale treated",
      "Worktops, sink, taps, drainer: limescale and water marks removed",
      "Inside and outside of all cupboards and drawers — top, sides, fronts and handles",
      "Bins cleaned and deodorised; skirtings, radiators and floor finished",
    ],
  },
  {
    title: "Bathrooms and toilets",
    intro:
      "Limescale is the main villain here. We treat it properly with the right products — not disguised with shine spray.",
    items: [
      "Shower screen, tiles, grout and silicone: limescale, soap scum and mould treated",
      "Taps, showerheads and handles descaled and polished",
      "Bath, basin and shower tray scrubbed and polished",
      "Toilet cleaned inside, outside, behind, under the rim and under the seat",
      "Mirrors and glass polished streak-free",
      "Cabinets inside and out; shelves and any fittings",
      "Extractor fan vent dusted; light fittings wiped",
      "Tiled or vinyl floors mopped into corners",
    ],
  },
  {
    title: "Bedrooms",
    intro:
      "Cleaning that passes inventory isn't just surface-level. Inside wardrobes and under beds matter.",
    items: [
      "Wardrobes, drawers, bedside tables: inside, outside, tops and handles",
      "Skirtings, radiators, door frames, picture rails dusted and wiped",
      "Light switches and sockets wiped; cobwebs removed",
      "Marks on walls and doors addressed where reasonable",
      "Mirrors polished; internal windows and sills cleaned",
      "Carpets thoroughly vacuumed (shampooing is an optional add-on)",
      "Hard floors swept and mopped into corners and edges",
    ],
  },
  {
    title: "Living and dining areas",
    intro:
      "Usually quicker than kitchens and bathrooms, but the detail still matters for check-out.",
    items: [
      "All surfaces, shelves and units — top, front and insides where empty",
      "Electronics and fittings carefully dusted",
      "Skirtings, radiators, doors, frames, sockets and switches",
      "Windows (interior), sills and frames cleaned",
      "Mirrors and glass polished",
      "Carpets vacuumed; hard floors mopped",
    ],
  },
  {
    title: "Hallways, stairs and entrance",
    intro:
      "First thing agents see on a check-out walk-through, last thing tenants think about.",
    items: [
      "Entrance door, frame and any letterbox cleaned",
      "Stair spindles, handrails and landings",
      "Cobwebs removed; high-level dusting of light fittings",
      "Switches, sockets and radiators",
      "Floors vacuumed and/or mopped thoroughly",
    ],
  },
  {
    title: "General / final checks",
    intro: "The finishing pass — the difference between 'done' and 'done properly'.",
    items: [
      "All bins emptied and bagged",
      "Internal glazing streak-checked in daylight",
      "Light bulbs checked for function (replacements by you, unless agreed)",
      "Final walk-through so you see the finished state before we leave",
    ],
  },
];

const notIncluded = [
  "Professional carpet shampooing or steam cleaning (optional paid add-on, with receipt)",
  "External windows above ground floor (needs specialist reach-and-wash equipment)",
  "Balcony, patio or garden deep cleaning",
  "Moving heavy furniture (wardrobes, sofas, beds) — for safety and to avoid damage",
  "Painting over wall marks or filling holes — that's a decorator's job, not cleaning",
  "Specialist mould remediation, pest control, or anything that legally needs a licensed trade",
];

export default function Page() {
  const includesFaqs = getFAQs("includes");

  return (
    <>
      <StructuredData
        data={[
          faqJsonLd(includesFaqs),
          breadcrumbJsonLd([
            { name: "Home", url: site.url },
            {
              name: "What Does End of Tenancy Cleaning Include?",
              url: `${site.url}${PATH}`,
            },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Guide · End of tenancy"
        heading="What does end of tenancy cleaning include?"
        intro="A proper end of tenancy clean is more than a tidy-up — it's the clean your landlord or letting agent actually checks against. Here's exactly what's covered in a professional job, room by room."
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/end-of-tenancy-cleaning-london", label: "End of Tenancy" },
          { label: "What's Included" },
        ]}
      />

      <Section>
        <div className="text-ink-700 text-lg leading-relaxed max-w-3xl space-y-5">
          <p>
            End of tenancy cleaning is designed around one outcome: the
            property passes a check-out inspection. That means it has to
            match (or beat) the condition recorded in your inventory at
            check-in.
          </p>
          <p>
            This page breaks down the full scope of a professional end of
            tenancy clean — the baseline any reputable cleaner should cover,
            and a few things that sit outside it. Use it to pressure-test
            quotes, write a move-out plan, or just to know what you're
            paying for.
          </p>
        </div>
      </Section>

      {sections.map((sec, i) => (
        <Section
          key={sec.title}
          tone={i % 2 === 0 ? "muted" : "default"}
          id={sec.title.toLowerCase().replace(/[^a-z]+/g, "-")}
        >
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
              Room {i + 1}
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-brand-900">
              {sec.title}
            </h2>
            <p className="mt-3 text-lg text-ink-700">{sec.intro}</p>
          </div>

          <ul className="mt-8 grid gap-3 md:grid-cols-2 text-sm text-ink-700">
            {sec.items.map((item) => (
              <li
                key={item}
                className="flex gap-3 items-start rounded-xl bg-white border border-surface-200 p-4"
              >
                <span className="mt-0.5 text-accent-600">
                  <Icon name="check" size={16} />
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </Section>
      ))}

      <Section>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
            Worth knowing
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold text-brand-900">
            What's not usually included
          </h2>
          <p className="mt-3 text-lg text-ink-700">
            Transparency matters. These are the areas most commonly confused
            or up-sold — we'll always tell you up front what's inside and
            outside scope.
          </p>
        </div>

        <ul className="mt-8 grid gap-3 md:grid-cols-2 text-sm text-ink-700">
          {notIncluded.map((item) => (
            <li
              key={item}
              className="rounded-xl bg-surface-50 border border-surface-200 p-4 leading-relaxed"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8 rounded-2xl bg-brand-50 border border-brand-200 p-6 text-sm text-ink-700">
          Need an add-on covered? Tell us when you enquire and we'll
          either quote it or point you to the right specialist if it's not
          what we do.
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-5 md:grid-cols-3">
          <Link
            href="/end-of-tenancy-cleaning-london"
            className="group rounded-2xl border border-surface-200 p-6 hover:border-brand-300 hover:shadow-md transition-all bg-white"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
              Book the service
            </p>
            <h3 className="mt-2 text-lg font-semibold text-brand-900">
              End of tenancy cleaning London
            </h3>
            <p className="mt-2 text-sm text-ink-700">Overview and CTAs to quote.</p>
          </Link>
          <Link
            href="/end-of-tenancy-cleaning-checklist-uk"
            className="group rounded-2xl border border-surface-200 p-6 hover:border-brand-300 hover:shadow-md transition-all bg-white"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
              Reference
            </p>
            <h3 className="mt-2 text-lg font-semibold text-brand-900">
              End of tenancy cleaning checklist UK
            </h3>
            <p className="mt-2 text-sm text-ink-700">Save-worthy checklist for tenants & landlords.</p>
          </Link>
          <Link
            href="/end-of-tenancy-cleaning-prices-london"
            className="group rounded-2xl border border-surface-200 p-6 hover:border-brand-300 hover:shadow-md transition-all bg-white"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
              Pricing
            </p>
            <h3 className="mt-2 text-lg font-semibold text-brand-900">
              Prices in London
            </h3>
            <p className="mt-2 text-sm text-ink-700">What drives the quote.</p>
          </Link>
        </div>
      </Section>

      <FAQ items={includesFaqs} heading="Common scope questions" />

      <CTASection
        heading="Want this done properly, by a team you can trust?"
        body="Tell us about the property. We'll confirm what's in scope, what's extra, and the total per-property quote before anything's booked."
      />
    </>
  );
}
