import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import AreasCovered from "@/components/AreasCovered";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import StructuredData from "@/components/StructuredData";
import { AreaLinks } from "@/components/AreaPageParts";
import {
  buildMetadata,
  serviceJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
} from "@/lib/seo";
import { getFAQs } from "@/lib/faqs";
import { site } from "@/lib/site";

const PATH = "/end-of-tenancy-cleaning-london";

export const metadata: Metadata = buildMetadata({
  title:
    "End of Tenancy Cleaning London | Professional Move-Out Cleaners",
  description:
    "Professional end of tenancy cleaning across London. Check-out ready standard, per-property quotes, trained insured team. Trusted by tenants, landlords and letting agents.",
  path: PATH,
});

const includedRooms: {
  title: string;
  items: string[];
}[] = [
  {
    title: "Kitchen",
    items: [
      "Oven deep clean: racks, trays, glass, interior and exterior",
      "Hob, extractor filter and splashback descaled and degreased",
      "Fridge and freezer cleaned inside and out (defrosted where needed)",
      "Microwave, dishwasher, washing machine seals and drawers",
      "Inside and outside of all cupboards and drawers",
      "Worktops, tiles, sink and taps, limescale removed",
      "Bins cleaned and deodorised; skirtings and floors",
    ],
  },
  {
    title: "Bathrooms",
    items: [
      "Limescale removed from taps, showerheads, screens and tiles",
      "Grout scrubbed; silicone sealant cleaned",
      "Toilet cleaned inside, outside, behind and under the seat",
      "Bath, basin and shower tray polished; mirrors streak-free",
      "Cabinets, shelves, extractor and skirtings",
    ],
  },
  {
    title: "Bedrooms & living areas",
    items: [
      "Dusting and wiping of all surfaces, shelves and skirtings",
      "Inside and outside of wardrobes, drawers and storage",
      "Marks removed from walls, doors and door frames (where reasonable)",
      "Light switches, sockets, radiators and vents wiped",
      "Mirrors, glass and picture rails polished",
      "Carpets thoroughly vacuumed; hard floors mopped",
    ],
  },
  {
    title: "Hallways, stairs & general",
    items: [
      "Internal windows, sills and frames cleaned",
      "Stair spindles, banisters and landings dusted",
      "Cobwebs removed; high-level dusting",
      "All bins emptied and deodorised",
      "Final inspection walk-through before we leave",
    ],
  },
];

export default function Page() {
  const eotFaqs = getFAQs("eot");

  return (
    <>
      <StructuredData
        data={[
          serviceJsonLd({
            name: "End of Tenancy Cleaning London",
            description:
              "Professional end of tenancy cleaning in London. Inventory-standard clean by a trained, insured team.",
            url: `${site.url}${PATH}`,
            serviceType: "End of Tenancy Cleaning",
          }),
          faqJsonLd(eotFaqs),
          breadcrumbJsonLd([
            { name: "Home", url: site.url },
            { name: "End of Tenancy Cleaning London", url: `${site.url}${PATH}` },
          ]),
        ]}
      />

      <PageHero
        eyebrow="End of tenancy cleaning · London"
        heading="Professional end of tenancy cleaning in London"
        intro="Move-out cleaning built around letting-agent and landlord standards, so you, your tenant or your client can close out the tenancy with confidence. Per-property pricing, a trained insured team, and real five-star reviews from London customers."
        breadcrumbs={[
          { href: "/", label: "Home" },
          { label: "End of Tenancy Cleaning London" },
        ]}
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/contact" size="lg">
            Request a Quote <Icon name="arrow-right" size={16} />
          </Button>
          <Button
            href={`tel:${site.contact.phoneE164}`}
            variant="secondary"
            size="lg"
          >
            <Icon name="phone" size={16} /> Call {site.contact.phoneDisplay}
          </Button>
        </div>
      </PageHero>

      {/* Opening narrative */}
      <Section>
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-start">
          <div className="prose-content space-y-5 text-ink-700 text-lg leading-relaxed">
            <p>
              End of tenancy cleaning in London is rarely about a home that's
              dirty. It's about a home that has to pass a check-out inspection.
              Letting agents look at the oven. They look at the limescale on the
              shower screen. They look behind the fridge and inside the kitchen
              drawers. Miss any of that and a chunk of the deposit goes with it.
            </p>
            <p>
              We've built our end of tenancy service specifically around the
              things that cost tenants their deposits and cost landlords
              re-letting time. Every clean is carried out by a team trained on
              the inventory points that matter, using professional-grade
              products and equipment. If something's missed, we come back
              within 48 hours and put it right.
            </p>
            <p>
              We cover{" "}
              {site.primaryAreas.slice(0, -1).join(", ")} and{" "}
              {site.primaryAreas.at(-1)}, plus selected parts of Hertfordshire
              and Essex. Whether you're a tenant on move-out day, a landlord
              preparing for a new let, or a letting agent coordinating a
              handover, we'll get the property to the standard it needs to be
              at.
            </p>
          </div>

          <aside className="rounded-2xl border border-surface-200 bg-surface-50 p-6">
            <h2 className="text-lg font-semibold text-brand-900">
              At a glance
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-ink-700">
              {[
                "Full check-out-ready clean",
                "Per-property pricing, no hourly surprises",
                "Trained, professional team",
                "Work to agent/inventory checklists on request",
                "Bookings reviewed and confirmed before final",
              ].map((i) => (
                <li key={i} className="flex gap-2 items-start">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent-500/15 text-accent-600">
                    <Icon name="check" size={12} />
                  </span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button href="/contact" size="md">
                Get a Quote
              </Button>
              <Button
                href={site.contact.whatsappUrl}
                variant="whatsapp"
                size="md"
              >
                <Icon name="whatsapp" size={14} /> WhatsApp
              </Button>
            </div>
          </aside>
        </div>
      </Section>

      {/* What's included */}
      <Section tone="muted" id="included">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
            What's included
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-brand-900">
            A full, room-by-room end of tenancy clean
          </h2>
          <p className="mt-4 text-lg text-ink-700">
            Every property is different, but this is the baseline every job is
            built on. Specific inventory requests can be layered on top.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {includedRooms.map((room) => (
            <div
              key={room.title}
              className="rounded-2xl bg-white border border-surface-200 p-6"
            >
              <h3 className="text-lg font-semibold text-brand-900">
                {room.title}
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-ink-700">
                {room.items.map((i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <span className="mt-0.5 text-accent-600">
                      <Icon name="check" size={14} />
                    </span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-brand-50 border border-brand-200 p-6 text-sm text-ink-700 flex flex-col md:flex-row md:items-center gap-4 md:justify-between">
          <p className="max-w-2xl">
            Need carpet shampooing, interior window polishing or wall-mark
            touch-ups beyond normal cleaning? We'll quote those as add-ons so
            you only pay for what you actually need.
          </p>
          <Button href="/contact" variant="secondary" size="md">
            Ask for add-ons
          </Button>
        </div>

        <p className="mt-8 text-sm text-ink-500">
          See the full{" "}
          <Link
            href="/what-does-end-of-tenancy-cleaning-include"
            className="text-brand-700 font-semibold underline"
          >
            end of tenancy cleaning breakdown
          </Link>{" "}
          or download-friendly{" "}
          <Link
            href="/end-of-tenancy-cleaning-checklist-uk"
            className="text-brand-700 font-semibold underline"
          >
            end of tenancy cleaning checklist
          </Link>
          .
        </p>
      </Section>

      {/* Who it's for */}
      <Section id="who-for">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
            Who we clean for
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-brand-900">
            Built for the three people who need this to go right
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "For tenants",
              body: "You want your deposit back. We clean to the standard that gets it back, and if your agent genuinely flags something we've missed, we'll come back and put it right. No stress on move-out day.",
            },
            {
              title: "For landlords",
              body: "Your property needs to show well so it rents quickly. A genuine professional clean between tenancies protects the condition of the property and shortens your void period.",
            },
            {
              title: "For letting agents",
              body: "Coordinate move-outs with a cleaner who actually picks up the phone, turns up on time and cleans to your checklist. Repeat-bookable, no drama.",
            },
          ].map((g) => (
            <div
              key={g.title}
              className="rounded-2xl bg-white border border-surface-200 p-6"
            >
              <h3 className="text-lg font-semibold text-brand-900">
                {g.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">
                {g.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why book us */}
      <Section tone="muted">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
              Why Fresh Finish
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-brand-900">
              Cleaning that holds up to inspection
            </h2>
            <p className="mt-4 text-lg text-ink-700">
              End of tenancy is the one type of clean where the outcome is
              checked by you, your agent or your landlord. Here's why people
              choose us to do it in London.
            </p>
          </div>
          <ul className="space-y-4 text-sm">
            {[
              {
                t: "We price per property, not per hour",
                b: "You know the total before we start. No meter running, no surprise extras at the door.",
              },
              {
                t: "We turn up on time",
                b: "Cleaning companies that run late cost tenants deposits. We don't play with your time.",
              },
              {
                t: "We stand behind the work",
                b: "Every job finishes with a final walk-through. If something's genuinely been missed, we'll come back and put it right.",
              },
              {
                t: "Real reviews, real before-and-afters",
                b: "Five-star Google reviews from real London customers, and visible proof on our Instagram.",
              },
            ].map((p) => (
              <li
                key={p.t}
                className="rounded-xl bg-white border border-surface-200 p-5"
              >
                <p className="font-semibold text-brand-900">{p.t}</p>
                <p className="mt-1 text-ink-700">{p.b}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <AreasCovered
        heading="End of tenancy cleaning across London"
        intro="We service every major part of London for end of tenancy cleans, with same-week availability most weeks. Selected parts of Hertfordshire and Essex are covered too."
      />

      {/* Internal links cluster */}
      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          <Link
            href="/end-of-tenancy-cleaning-prices-london"
            className="group rounded-2xl border border-surface-200 p-6 hover:border-brand-300 hover:shadow-md transition-all bg-white"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
              Pricing
            </p>
            <h3 className="mt-2 text-lg font-semibold text-brand-900 group-hover:text-brand-700">
              End of tenancy cleaning prices London
            </h3>
            <p className="mt-2 text-sm text-ink-700">
              How pricing actually works, and why honest quotes vary.
            </p>
          </Link>
          <Link
            href="/what-does-end-of-tenancy-cleaning-include"
            className="group rounded-2xl border border-surface-200 p-6 hover:border-brand-300 hover:shadow-md transition-all bg-white"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
              What's covered
            </p>
            <h3 className="mt-2 text-lg font-semibold text-brand-900 group-hover:text-brand-700">
              What does end of tenancy cleaning include?
            </h3>
            <p className="mt-2 text-sm text-ink-700">
              The full detail of what a proper clean covers, room by room.
            </p>
          </Link>
          <Link
            href="/how-long-does-end-of-tenancy-cleaning-take"
            className="group rounded-2xl border border-surface-200 p-6 hover:border-brand-300 hover:shadow-md transition-all bg-white"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
              Timing
            </p>
            <h3 className="mt-2 text-lg font-semibold text-brand-900 group-hover:text-brand-700">
              How long does end of tenancy cleaning take?
            </h3>
            <p className="mt-2 text-sm text-ink-700">
              Realistic timing by property size and condition.
            </p>
          </Link>
        </div>
      </Section>

      <AreaLinks service="eot" heading="End of tenancy cleaning in your area" />

      <FAQ
        items={eotFaqs}
        tone="muted"
        heading="End of tenancy cleaning questions, answered"
      />

      <CTASection
        heading="Get a clear end of tenancy quote, fast"
        body="Send a few details and we'll come back with a per-property quote. Every booking is reviewed and confirmed before it's final. No automated bookings, no surprises."
      />
    </>
  );
}
