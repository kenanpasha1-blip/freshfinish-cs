import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import TrustBar from "@/components/TrustBar";
import Section from "@/components/Section";
import AreasCovered from "@/components/AreasCovered";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import StructuredData from "@/components/StructuredData";
import {
  buildMetadata,
  serviceJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
} from "@/lib/seo";
import { getFAQs } from "@/lib/faqs";
import { site } from "@/lib/site";

const PATH = "/office-cleaning";

export const metadata: Metadata = buildMetadata({
  title: "Office Cleaning London | Contract Office Cleaners",
  description:
    "Reliable office and commercial cleaning across London for managing agents, facilities managers and businesses. Scheduled contracts, photo proof on every visit, trained insured team.",
  path: PATH,
});

const includedAreas: { title: string; items: string[] }[] = [
  {
    title: "Workstations & offices",
    items: [
      "Desks, workstations and surfaces wiped and sanitised",
      "Phones, keyboards and shared touch points",
      "Bins emptied and liners replaced",
      "Floors vacuumed and hard floors mopped",
    ],
  },
  {
    title: "Kitchens & breakout areas",
    items: [
      "Worktops, sinks and taps cleaned and descaled",
      "Fridge, microwave and appliance exteriors",
      "Tables, chairs and shared surfaces sanitised",
      "Bins and recycling emptied and deodorised",
    ],
  },
  {
    title: "Washrooms",
    items: [
      "Toilets, urinals and basins cleaned and disinfected",
      "Mirrors, tiles and fittings polished",
      "Consumables restocked (where supplied)",
      "Floors mopped and sanitised",
    ],
  },
  {
    title: "Reception, meeting rooms & communal",
    items: [
      "Reception and client-facing areas presentation-cleaned",
      "Meeting rooms reset and surfaces wiped",
      "Glass, doors and high-touch points",
      "Lifts, stairwells and communal areas",
    ],
  },
];

export default function Page() {
  const officeFaqs = getFAQs("office");

  return (
    <>
      <StructuredData
        data={[
          serviceJsonLd({
            name: "Office & Commercial Cleaning London",
            description:
              "Contract office and commercial cleaning in London for managing agents, facilities managers and businesses. Photo proof on every visit by a trained, insured team.",
            url: `${site.url}${PATH}`,
            serviceType: "Office & Commercial Cleaning",
          }),
          faqJsonLd(officeFaqs),
          breadcrumbJsonLd([
            { name: "Home", url: site.url },
            { name: "Office & Commercial Cleaning", url: `${site.url}${PATH}` },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Office & commercial cleaning · London"
        heading="Office cleaning in London you can actually rely on"
        intro="Scheduled office and commercial cleaning for managing agents, facilities managers and businesses across London. Every visit is photographed in your own portal, so the standard is never in question, and anything you flag is put right on the very next clean."
        image={{
          src: "/images/office/office-interior.jpg",
          alt: "A bright, clean modern office in London",
        }}
        breadcrumbs={[
          { href: "/", label: "Home" },
          { label: "Office & Commercial Cleaning" },
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

      <TrustBar />

      {/* Opening narrative */}
      <Section>
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-start">
          <div className="prose-content space-y-5 text-ink-700 text-lg leading-relaxed">
            <p>
              The problem with most office cleaning is not the cleaning, it is
              the not knowing. A cleaner is meant to come in, and you are left
              hoping they turned up and did it properly, until someone complains
              that the bins are full or the washrooms were skipped.
            </p>
            <p>
              Fresh Finish works differently. Every visit is photographed and
              logged in your own portal, so managing agents and facilities
              managers can see exactly what was done, on every visit, without
              chasing. Most cleaning companies cannot show you that.
            </p>
            <p>
              We cover {site.primaryAreas.slice(0, -1).join(", ")} and{" "}
              {site.primaryAreas.at(-1)}, plus selected parts of Hertfordshire
              and Essex. Daily, several times a week, weekly or fortnightly, on
              a schedule built around your hours, single-site or multi-site.
            </p>
          </div>

          <aside className="rounded-2xl border border-surface-200 bg-surface-50 p-6">
            <h2 className="text-lg font-semibold text-brand-900">At a glance</h2>
            <ul className="mt-4 space-y-3 text-sm text-ink-700">
              {[
                "Scheduled contract cleaning, not one-offs",
                "Before-and-after photos on every visit",
                "Cleaned around your working hours",
                "Fully insured, trained team",
                "Anything flagged, fixed next clean",
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
            What we cover
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-brand-900">
            A clean office, every area, every visit
          </h2>
          <p className="mt-4 text-lg text-ink-700">
            Every contract is built around your site, but this is the baseline
            an office clean is built on. We tailor the specification to what
            your space and your people actually need.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {includedAreas.map((area) => (
            <div
              key={area.title}
              className="rounded-2xl bg-white border border-surface-200 p-6"
            >
              <h3 className="text-lg font-semibold text-brand-900">
                {area.title}
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-ink-700">
                {area.items.map((i) => (
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
      </Section>

      {/* Photo-proof image band */}
      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/office/office-cleaning.jpg"
            alt="A cleaner sanitising an office desk"
            loading="lazy"
            className="w-full rounded-2xl object-cover shadow-lg ring-1 ring-surface-200 aspect-[3/2]"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
              You can see it was done
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-brand-900">
              Photo proof of every single visit
            </h2>
            <p className="mt-4 text-lg text-ink-700 leading-relaxed">
              Most cleaning companies ask you to take it on trust. We photograph
              every visit, before and after, and log it in your own portal, so
              you and your clients can see the standard without chasing or turning
              up to check. It is the difference between hoping it was cleaned and
              knowing it was.
            </p>
            <div className="mt-6">
              <Button href="/contact" size="md">
                Get a Quote <Icon name="arrow-right" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Who it's for */}
      <Section id="who-for">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
            Who we clean for
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-brand-900">
            Built for the people responsible for the building
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "For managing agents",
              body: "Photo proof of every visit, one portal for every site, and a cleaner who turns up and picks up the phone. Easy to report on to leaseholders and clients, easy to keep.",
            },
            {
              title: "For facilities managers",
              body: "A dependable schedule you do not have to police, covering offices, washrooms and communal areas, with the evidence on file when someone questions the standard.",
            },
            {
              title: "For businesses & office managers",
              body: "Your team walks into a clean, presentable workspace. Cleaned around your hours, priced clearly per visit, no meter running and no surprises.",
            },
          ].map((g) => (
            <div
              key={g.title}
              className="rounded-2xl bg-white border border-surface-200 p-6"
            >
              <h3 className="text-lg font-semibold text-brand-900">{g.title}</h3>
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
              Commercial cleaning you can see, not just hope for
            </h2>
            <p className="mt-4 text-lg text-ink-700">
              The difference with a recurring contract is trust over time. Here
              is why managing agents and facilities managers across London keep
              us on.
            </p>
          </div>
          <ul className="space-y-4 text-sm">
            {[
              {
                t: "Photo proof on every visit",
                b: "Before-and-after photos logged in your own portal, so you can see the standard without setting foot on site.",
              },
              {
                t: "We turn up, on schedule",
                b: "A reliable rota you do not have to chase. The whole point of a contract is that it just happens.",
              },
              {
                t: "Anything flagged, fixed next clean",
                b: "Flag an issue in your portal and it is put right on the very next clean, with photos to prove it.",
              },
              {
                t: "Fully insured and trained",
                b: "Public liability and employers liability cover, and a team trained to a consistent commercial standard.",
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
        heading="Office cleaning across London"
        intro="We take on office and commercial cleaning contracts across every major part of London, single-site or multi-site, with selected coverage in Hertfordshire and Essex."
      />

      {/* Cross-link */}
      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          <Link
            href="/school-cleaning"
            className="group rounded-2xl border border-surface-200 p-6 hover:border-brand-300 hover:shadow-md transition-all bg-white"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
              Also for
            </p>
            <h3 className="mt-2 text-lg font-semibold text-brand-900 group-hover:text-brand-700">
              School & education cleaning
            </h3>
            <p className="mt-2 text-sm text-ink-700">
              Term-time and holiday cleaning for schools, worked around the
              school day.
            </p>
          </Link>
          <Link
            href="/end-of-tenancy-cleaning-london"
            className="group rounded-2xl border border-surface-200 p-6 hover:border-brand-300 hover:shadow-md transition-all bg-white"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
              Also for
            </p>
            <h3 className="mt-2 text-lg font-semibold text-brand-900 group-hover:text-brand-700">
              End of tenancy cleaning
            </h3>
            <p className="mt-2 text-sm text-ink-700">
              Move-out cleans built around letting-agent and landlord standards.
            </p>
          </Link>
        </div>
      </Section>

      <FAQ
        items={officeFaqs}
        tone="muted"
        heading="Office cleaning questions, answered"
      />

      <CTASection
        heading="Get an office cleaning quote, fast"
        body="Tell us about your site and your hours and we'll come back with a clear per-visit quote. Every contract is agreed with you first — no automated bookings, no surprises."
      />
    </>
  );
}
