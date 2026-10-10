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

const PATH = "/school-cleaning";

export const metadata: Metadata = buildMetadata({
  title: "School Cleaning London | School Cleaning Contractors",
  description:
    "Contract school cleaning across London and Enfield. Worked around the school day, DBS-checked staff, fully insured, photo proof on every clean. Already trusted by a local school.",
  path: PATH,
});

const includedAreas: { title: string; items: string[] }[] = [
  {
    title: "Classrooms & learning spaces",
    items: [
      "Desks, tables and chairs wiped and sanitised",
      "High-touch points, door handles and light switches",
      "Floors vacuumed and hard floors mopped",
      "Bins emptied and liners replaced",
    ],
  },
  {
    title: "Washrooms & toilets",
    items: [
      "Toilets and basins cleaned and disinfected",
      "Mirrors, tiles and fittings",
      "Consumables restocked (where supplied)",
      "Floors mopped and sanitised",
    ],
  },
  {
    title: "Halls, dining & corridors",
    items: [
      "Dining halls cleaned and reset after service",
      "Corridors, stairwells and communal areas",
      "Glass, doors and entrance areas",
      "Sports and assembly halls",
    ],
  },
  {
    title: "Offices, staff rooms & deep cleans",
    items: [
      "Offices, reception and staff rooms",
      "Kitchen and breakout areas",
      "Holiday and half-term deep cleans",
      "One-off cleans for events and open days",
    ],
  },
];

export default function Page() {
  const schoolFaqs = getFAQs("school");

  return (
    <>
      <StructuredData
        data={[
          serviceJsonLd({
            name: "School & Education Cleaning London",
            description:
              "Contract cleaning for schools and education settings across London and Enfield. DBS-checked staff, fully insured, photo proof on every clean.",
            url: `${site.url}${PATH}`,
            serviceType: "School & Education Cleaning",
          }),
          faqJsonLd(schoolFaqs),
          breadcrumbJsonLd([
            { name: "Home", url: site.url },
            { name: "School & Education Cleaning", url: `${site.url}${PATH}` },
          ]),
        ]}
      />

      <PageHero
        eyebrow="School & education cleaning · London"
        heading="School cleaning across London, built around the school day"
        intro="Dependable term-time and holiday cleaning for schools, academies and education settings. We already hold a school cleaning contract, so we understand how to clean an education site properly, safely and around your timetable, with photo proof of every clean."
        image={{
          src: "/images/school/classroom.jpg",
          alt: "A clean, tidy classroom ready for the school day",
        }}
        breadcrumbs={[
          { href: "/", label: "Home" },
          { label: "School & Education Cleaning" },
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
              A school cleaning contract is not just about a clean building, it
              is about trust. The people on site are around pupils and staff,
              the standard has to be right every single day, and as a business
              manager or bursar you need to know it is being done without having
              to stand over it.
            </p>
            <p>
              We already clean a school, so this is work we
              do and understand. Our staff on school sites are DBS-checked, we
              are fully insured, and every clean is photographed and logged in
              your own portal, so you have the standard on record without
              chasing. Anything you flag is put right on the very next clean.
            </p>
            <p>
              We cover {site.primaryAreas.slice(0, -1).join(", ")} and{" "}
              {site.primaryAreas.at(-1)}, including Enfield and the surrounding
              boroughs. Daily cleaning around the school day, plus larger deep
              cleans during half-terms and holidays.
            </p>
          </div>

          <aside className="rounded-2xl border border-surface-200 bg-surface-50 p-6">
            <h2 className="text-lg font-semibold text-brand-900">At a glance</h2>
            <ul className="mt-4 space-y-3 text-sm text-ink-700">
              {[
                "Already trusted by a local school",
                "DBS-checked staff on school sites",
                "Fully insured, trained team",
                "Cleaned around the school day",
                "Photo proof of every clean",
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
            Every area of the school, to a consistent standard
          </h2>
          <p className="mt-4 text-lg text-ink-700">
            Every site is different, but this is the baseline a school clean is
            built on. We agree the full specification and schedule with you.
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

      {/* Trust image band */}
      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="md:order-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/school/school-cleaning.jpg"
              alt="Professional cleaning being carried out"
              loading="lazy"
              className="w-full rounded-2xl object-cover shadow-lg ring-1 ring-surface-200 aspect-[3/2]"
            />
          </div>
          <div className="md:order-1">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
              Safe hands on site
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-brand-900">
              A cleaner your school can trust
            </h2>
            <p className="mt-4 text-lg text-ink-700 leading-relaxed">
              We already clean a school, so we know what an
              education site expects from a contractor. Staff on school sites are
              DBS-checked, we are fully insured, and every clean is photographed
              in your own portal, so the standard is on record and easy to account
              for to governors and auditors.
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
            Who we work with
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-brand-900">
            The people who run the site
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Business managers & bursars",
              body: "A cleaning contract you can rely on and account for, with photo proof on file, clear pricing, and insurance and vetting details ready when governors or auditors ask.",
            },
            {
              title: "Academies & trusts",
              body: "A consistent standard you can roll across sites, with one point of contact and the evidence on record for every clean, every day.",
            },
            {
              title: "Site & premises managers",
              body: "A team that works around your timetable and access, keeps out of the way of pupils and staff, and turns up when it says it will.",
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
              A school cleaner you can trust on site
            </h2>
            <p className="mt-4 text-lg text-ink-700">
              Schools do not need the cheapest cleaner, they need the one they
              never have to worry about. Here is why we are that one.
            </p>
          </div>
          <ul className="space-y-4 text-sm">
            {[
              {
                t: "We already clean a school",
                b: "An ongoing school cleaning contract, so this is proven work, not a first attempt.",
              },
              {
                t: "DBS-checked, fully insured",
                b: "Staff on school sites are DBS-checked and we carry full insurance. Details shared on request.",
              },
              {
                t: "Photo proof of every clean",
                b: "Before-and-after photos in your own portal, so the standard is on record and easy to account for.",
              },
              {
                t: "Built around your timetable",
                b: "Daily cleaning around the school day, deep cleans in the holidays, and a team that turns up on schedule.",
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
        heading="School cleaning across London and Enfield"
        intro="We take on school and education cleaning contracts across London, including Enfield and the surrounding boroughs, with selected coverage in Hertfordshire and Essex."
      />

      {/* Cross-link */}
      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          <Link
            href="/office-cleaning"
            className="group rounded-2xl border border-surface-200 p-6 hover:border-brand-300 hover:shadow-md transition-all bg-white"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
              Also for
            </p>
            <h3 className="mt-2 text-lg font-semibold text-brand-900 group-hover:text-brand-700">
              Office & commercial cleaning
            </h3>
            <p className="mt-2 text-sm text-ink-700">
              Scheduled cleaning for offices and workspaces, with photo proof on
              every visit.
            </p>
          </Link>
          <Link
            href="/contact"
            className="group rounded-2xl border border-surface-200 p-6 hover:border-brand-300 hover:shadow-md transition-all bg-white"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
              Get started
            </p>
            <h3 className="mt-2 text-lg font-semibold text-brand-900 group-hover:text-brand-700">
              Ask for a school cleaning quote
            </h3>
            <p className="mt-2 text-sm text-ink-700">
              Tell us about your site and timetable and we'll come back quickly.
            </p>
          </Link>
        </div>
      </Section>

      <FAQ
        items={schoolFaqs}
        tone="muted"
        heading="School cleaning questions, answered"
      />

      <CTASection
        heading="Get a school cleaning quote"
        body="Tell us about your school, your timetable and the areas you need covered, and we'll come back with a clear proposal. Insurance and vetting details shared on request."
      />
    </>
  );
}
