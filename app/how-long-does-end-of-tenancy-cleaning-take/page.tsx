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

const PATH = "/how-long-does-end-of-tenancy-cleaning-take";

export const metadata: Metadata = buildMetadata({
  title: "How Long Does End of Tenancy Cleaning Take?",
  description:
    "How long a professional end of tenancy clean actually takes, by property size, condition and add-ons. Realistic timing so you can plan move-out day properly.",
  path: PATH,
});

const sizes = [
  {
    size: "Studio",
    typical: "3 to 5 hours",
    team: "1 to 2 cleaners",
    notes:
      "One multi-purpose room plus a bathroom and kitchenette. The bathroom and oven usually set the pace.",
  },
  {
    size: "1-bedroom flat",
    typical: "4 to 6 hours",
    team: "2 cleaners",
    notes:
      "Most common London end of tenancy size. Kitchen and bathroom do the bulk of the work.",
  },
  {
    size: "2-bedroom flat or small house",
    typical: "5 to 7 hours",
    team: "2 cleaners",
    notes:
      "A second bathroom or a cluttered lived-in kitchen is what pushes these longer.",
  },
  {
    size: "3-bedroom property",
    typical: "6 to 8+ hours",
    team: "2 to 3 cleaners",
    notes:
      "More bedrooms, more wardrobes, often a second bathroom. Expect a full working day.",
  },
  {
    size: "4+ bedroom property",
    typical: "8+ hours, sometimes split across teams",
    team: "3 cleaners",
    notes:
      "Large homes and HMOs are scoped per property. We send the right size team to get it done in a single day where possible.",
  },
];

export default function Page() {
  const durationFaqs = getFAQs("duration");
  return (
    <>
      <StructuredData
        data={[
          faqJsonLd(durationFaqs),
          breadcrumbJsonLd([
            { name: "Home", url: site.url },
            {
              name: "How Long Does End of Tenancy Cleaning Take?",
              url: `${site.url}${PATH}`,
            },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Guide · Timing"
        heading="How long does end of tenancy cleaning take?"
        intro="A straightforward answer, with real numbers. Here's how long a proper end of tenancy clean actually takes in London, and the factors that push it longer."
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/end-of-tenancy-cleaning-london", label: "End of Tenancy" },
          { label: "How long it takes" },
        ]}
      />

      <Section>
        <div className="text-ink-700 text-lg leading-relaxed max-w-3xl space-y-5">
          <p>
            Short answer: most end of tenancy cleans take between four and
            eight hours, depending on the size of the property and its
            condition. A studio can be done in half a day; a well-lived-in
            three-bed can take a full day with two cleaners.
          </p>
          <p>
            Long answer: the clock isn't the point. What matters is whether
            the property is check-out ready, and that depends less on time
            and more on scope, condition and team size. Here's how to plan.
          </p>
        </div>
      </Section>

      <Section tone="muted" id="by-size">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
            Rough timing by property size
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-brand-900">
            Typical durations in London
          </h2>
          <p className="mt-4 text-lg text-ink-700">
            Based on homes in reasonable condition. Heavy build-up, extras
            like carpet shampooing, or very restricted access will add time.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-surface-200 bg-white">
          <table className="w-full text-sm">
            <thead className="bg-surface-50 text-brand-900">
              <tr>
                <th className="text-left font-semibold p-4">Property</th>
                <th className="text-left font-semibold p-4">Typical time</th>
                <th className="text-left font-semibold p-4">Team</th>
                <th className="text-left font-semibold p-4 hidden md:table-cell">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody>
              {sizes.map((s) => (
                <tr key={s.size} className="border-t border-surface-100">
                  <td className="p-4 font-semibold text-brand-900">{s.size}</td>
                  <td className="p-4 text-ink-700">{s.typical}</td>
                  <td className="p-4 text-ink-700">{s.team}</td>
                  <td className="p-4 text-ink-500 hidden md:table-cell">
                    {s.notes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="factors">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
            What moves the clock
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-brand-900">
            Factors that make a clean take longer
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {[
            {
              t: "Kitchen condition",
              b: "A greasy extractor, heavy oven use or limescale-covered taps can add an hour or more on their own. Kitchens are almost always the longest room in the property.",
            },
            {
              t: "Bathroom limescale",
              b: "Hard-water London postcodes mean serious limescale. Doing it properly needs dwell time with the right product, not just speed.",
            },
            {
              t: "Inside-cupboard detail",
              b: "Wardrobes, kitchen cupboards and drawers all need to be emptied and cleaned inside and out. That takes real time, especially in larger homes.",
            },
            {
              t: "Carpets and add-ons",
              b: "Standard vacuuming is included. Full carpet shampooing, curtain cleaning or exterior windows are add-ons that run in parallel but still add hours to the job.",
            },
            {
              t: "Access and parking",
              b: "Top-floor flats without lifts, and restricted parking zones, both slow down kit in and out.",
            },
            {
              t: "How recently it's been cleaned",
              b: "A home cleaned weekly is faster to bring up to end-of-tenancy standard than one that's been living hard for a year.",
            },
          ].map((f) => (
            <div
              key={f.t}
              className="rounded-2xl bg-white border border-surface-200 p-6"
            >
              <h3 className="font-semibold text-brand-900 flex items-center gap-2">
                <span className="text-accent-600">
                  <Icon name="clock" size={18} />
                </span>
                {f.t}
              </h3>
              <p className="mt-2 text-sm text-ink-700 leading-relaxed">{f.b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center rounded-2xl bg-white border border-surface-200 p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
              Planning move-out day
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-brand-900">
              Book the clean on the day you hand back the keys
            </h2>
            <p className="mt-4 text-ink-700 leading-relaxed">
              The cleanest hand-over is: tenant moves out in the morning,
              cleaners arrive mid-morning, check-out inspection in the
              afternoon or next day. If your tenancy allows, that sequence
              avoids a freshly-cleaned home being used again before the
              inspection.
            </p>
          </div>
          <ul className="space-y-3 text-sm text-ink-700">
            <li className="flex gap-2"><Icon name="check" size={16} className="text-accent-600 mt-0.5" /> Give the team unrestricted access</li>
            <li className="flex gap-2"><Icon name="check" size={16} className="text-accent-600 mt-0.5" /> Remove personal items and rubbish first</li>
            <li className="flex gap-2"><Icon name="check" size={16} className="text-accent-600 mt-0.5" /> Confirm parking and keys in advance</li>
            <li className="flex gap-2"><Icon name="check" size={16} className="text-accent-600 mt-0.5" /> Share your agent's check-out list if you have one</li>
          </ul>
        </div>
      </Section>

      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          <Link
            href="/end-of-tenancy-cleaning-london"
            className="group rounded-2xl border border-surface-200 p-6 hover:border-brand-300 hover:shadow-md transition-all bg-white"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
              The service
            </p>
            <h3 className="mt-2 text-lg font-semibold text-brand-900">
              End of tenancy cleaning London
            </h3>
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
          </Link>
          <Link
            href="/end-of-tenancy-cleaning-checklist-uk"
            className="group rounded-2xl border border-surface-200 p-6 hover:border-brand-300 hover:shadow-md transition-all bg-white"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
              Reference
            </p>
            <h3 className="mt-2 text-lg font-semibold text-brand-900">
              Full UK checklist
            </h3>
          </Link>
        </div>
      </Section>

      <FAQ items={durationFaqs} heading="Timing questions" tone="muted" />

      <CTASection
        heading="Know exactly when it'll be done"
        body="Share a few details about the property and we'll come back with an estimated window and a per-property price, so you can plan move-out day properly."
      />
    </>
  );
}
