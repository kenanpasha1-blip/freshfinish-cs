import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import StructuredData from "@/components/StructuredData";
import {
  buildMetadata,
  faqJsonLd,
  breadcrumbJsonLd,
} from "@/lib/seo";
import { getFAQs } from "@/lib/faqs";
import { site } from "@/lib/site";

const PATH = "/end-of-tenancy-cleaning-prices-london";

export const metadata: Metadata = buildMetadata({
  title: "End of Tenancy Cleaning Prices London | Fixed Prices",
  description:
    "How end of tenancy cleaning prices work in London — what drives the cost, what's included, and why honest quotes vary. Request a per-property quote from Fresh Finish.",
  path: PATH,
});

export default function Page() {
  const priceFaqs = getFAQs("prices");

  return (
    <>
      <StructuredData
        data={[
          faqJsonLd(priceFaqs),
          breadcrumbJsonLd([
            { name: "Home", url: site.url },
            {
              name: "End of Tenancy Cleaning Prices London",
              url: `${site.url}${PATH}`,
            },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Pricing · End of tenancy · London"
        heading="How end of tenancy cleaning prices work in London"
        intro="Honest pricing — no misleading headline rates. Here's exactly what drives the cost of an end of tenancy clean, and how we quote so you know the total before we start."
        breadcrumbs={[
          { href: "/", label: "Home" },
          {
            href: "/end-of-tenancy-cleaning-london",
            label: "End of Tenancy",
          },
          { label: "Prices" },
        ]}
      />

      <Section>
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-start">
          <div className="text-ink-700 text-lg leading-relaxed space-y-5">
            <p>
              End of tenancy cleaning in London doesn't have a single fixed
              price — and anyone who quotes you one without seeing the property
              is either lucky, generous or planning to up-sell you on the day.
              What we can tell you honestly is what drives the cost.
            </p>
            <p>
              We quote per property rather than per hour. That means you pay
              for the outcome — a clean that's ready to hand back to your
              agent or landlord — not for how long it takes our team. There's
              no running clock, and no &ldquo;we're out of time, can you add
              another hour?&rdquo; conversation at the door.
            </p>
            <p>
              Our positioning isn't the cheapest in London. We're priced where
              professional, reliable, insured local cleaning should be priced.
              The trade-off: a clean that actually holds up to a check-out
              inspection, carried out by a trained team using professional-grade
              products.
            </p>
          </div>

          <aside className="rounded-2xl border border-surface-200 bg-surface-50 p-6">
            <h2 className="text-lg font-semibold text-brand-900">
              How we quote
            </h2>
            <ol className="mt-4 space-y-3 text-sm text-ink-700 list-decimal list-inside">
              <li>You share property size, postcode and any extras.</li>
              <li>We assess condition from your description or a couple of photos.</li>
              <li>We send a per-property price — no hourly surprises.</li>
              <li>You approve, we confirm the slot, and we show up on the day.</li>
            </ol>
          </aside>
        </div>
      </Section>

      <Section tone="muted">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
            What drives the price
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-brand-900">
            Five factors that change the quote
          </h2>
          <p className="mt-4 text-lg text-ink-700">
            Knowing these up front helps you get an accurate quote on the
            first go — and spot any cleaner trying to under-quote to win the
            job.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {[
            {
              t: "1. Property size",
              b: "Studio, one-bed, two-bed, three-bed, or larger. Rough time needed scales with size, which is the biggest single factor.",
            },
            {
              t: "2. Condition on the day",
              b: "A well-kept flat is much faster than one that's been lived in heavily. Heavy limescale, grease build-up, mould or dirty ovens all take real time to do properly.",
            },
            {
              t: "3. Extras beyond standard",
              b: "Carpet shampooing, curtain cleaning, full interior-window cleaning including the outside of sash windows, and upholstery are quoted as add-ons.",
            },
            {
              t: "4. Access and timing",
              b: "Top-floor walk-ups, restricted parking, or very short-notice weekend slots during month-end can nudge the price.",
            },
            {
              t: "5. Agent or inventory requirements",
              b: "If your letting agent has a specific check-out list, we'll work to it precisely. Sometimes that adds scope, sometimes it doesn't — either way, the quote reflects it.",
            },
            {
              t: "Bonus: do you need carpet cleaning?",
              b: "Some tenancy agreements require professionally cleaned carpets. That's a specialist add-on we'll price separately and you'll get a receipt for your agent.",
            },
          ].map((item) => (
            <div
              key={item.t}
              className="rounded-2xl bg-white border border-surface-200 p-6"
            >
              <h3 className="font-semibold text-brand-900">{item.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">
                {item.b}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-2xl bg-brand-900 text-white p-8 md:p-10">
          <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent-400">
                Straight talk
              </p>
              <h2 className="mt-2 text-2xl md:text-3xl font-bold">
                Be careful of rock-bottom quotes
              </h2>
              <p className="mt-4 text-brand-100 leading-relaxed">
                If a quote looks dramatically cheaper than everyone else,
                something's usually being cut — either the time spent, the
                products used, or the coverage of the job. In end of
                tenancy, a corner-cut clean can cost you more in lost deposit
                than you saved. We'd rather be honest about the price than
                under-quote to get the booking.
              </p>
            </div>
            <div className="rounded-xl bg-brand-800/60 border border-brand-700 p-5 text-sm text-brand-100 space-y-2.5">
              <p className="flex gap-2"><Icon name="check" size={16} className="text-accent-400 mt-0.5" /> Per-property pricing</p>
              <p className="flex gap-2"><Icon name="check" size={16} className="text-accent-400 mt-0.5" /> Agent-checklist-friendly</p>
              <p className="flex gap-2"><Icon name="check" size={16} className="text-accent-400 mt-0.5" /> Insured, professional team</p>
              <p className="flex gap-2"><Icon name="check" size={16} className="text-accent-400 mt-0.5" /> Real five-star Google reviews</p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-5 md:grid-cols-3">
          <Link
            href="/end-of-tenancy-cleaning-london"
            className="group rounded-2xl border border-surface-200 p-6 hover:border-brand-300 hover:shadow-md transition-all bg-white"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
              Service page
            </p>
            <h3 className="mt-2 text-lg font-semibold text-brand-900">
              End of tenancy cleaning London
            </h3>
            <p className="mt-2 text-sm text-ink-700">
              The full service, areas covered, and what to expect.
            </p>
          </Link>
          <Link
            href="/what-does-end-of-tenancy-cleaning-include"
            className="group rounded-2xl border border-surface-200 p-6 hover:border-brand-300 hover:shadow-md transition-all bg-white"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
              What's covered
            </p>
            <h3 className="mt-2 text-lg font-semibold text-brand-900">
              What does end of tenancy cleaning include?
            </h3>
            <p className="mt-2 text-sm text-ink-700">
              A room-by-room breakdown of what proper cleans cover.
            </p>
          </Link>
          <Link
            href="/how-long-does-end-of-tenancy-cleaning-take"
            className="group rounded-2xl border border-surface-200 p-6 hover:border-brand-300 hover:shadow-md transition-all bg-white"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
              Timing
            </p>
            <h3 className="mt-2 text-lg font-semibold text-brand-900">
              How long does an end of tenancy clean take?
            </h3>
            <p className="mt-2 text-sm text-ink-700">
              Realistic timeframes by property size.
            </p>
          </Link>
        </div>
      </Section>

      <FAQ items={priceFaqs} heading="Pricing questions" />

      <CTASection
        heading="Want a real quote for your property?"
        body="Share a few details — size, postcode, condition — and we'll come back quickly with an honest per-property price. No obligation, and nothing's booked until we both agree."
      />
    </>
  );
}
