import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import AreasCovered from "@/components/AreasCovered";
import Satisfaction from "@/components/Satisfaction";
import Icon from "@/components/Icon";
import StructuredData from "@/components/StructuredData";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

const PATH = "/about";

export const metadata: Metadata = buildMetadata({
  title: "About Fresh Finish Cleaning Solutions",
  description:
    "Fresh Finish Cleaning Solutions is a professional, London-focused cleaning company — known for reliability, transparent pricing and our 48-hour satisfaction return policy.",
  path: PATH,
});

export default function Page() {
  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd([
          { name: "Home", url: site.url },
          { name: "About", url: `${site.url}${PATH}` },
        ])}
      />

      <PageHero
        eyebrow="About us"
        heading="A London cleaning company built on doing the work properly"
        intro="We're Fresh Finish Cleaning Solutions — a professional cleaning team serving London, with selected coverage in Hertfordshire and Essex. Reputation-first, with real reviews and real before-and-afters to back it up."
        breadcrumbs={[
          { href: "/", label: "Home" },
          { label: "About" },
        ]}
      />

      <Section>
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-start">
          <div className="text-ink-700 text-lg leading-relaxed space-y-5">
            <p>
              Fresh Finish was started to do one thing well: cleaning that
              actually holds up. In a city full of cheap headline quotes
              and one-star Gumtree operators, we wanted a cleaning company
              London could rely on — for move-outs, for deep cleans, for
              the jobs that need to be right the first time.
            </p>
            <p>
              That shows up in small ways. We answer the phone. We turn up
              on time. We quote per property so there's no meter running.
              And if anything's missed, we come back within 48 hours and
              put it right — no fuss.
            </p>
            <p>
              Our focus is end of tenancy and deep cleaning, but we also
              take on after-build, domestic and office work. Most of what
              we do is in London — that's where we know the stock, we know
              the letting agents, and we know what different property types
              need to pass a check-out. We also cover selected parts of
              Hertfordshire and Essex for existing clients and when
              postcodes line up.
            </p>
            <p>
              We're proud of our reviews — you can find us on Google and
              Instagram — and we'd rather earn a new one than chase
              aggressive growth. Every clean is a chance to do the job
              properly and keep the reputation clean.
            </p>
          </div>

          <aside className="rounded-2xl bg-surface-50 border border-surface-200 p-6">
            <h2 className="text-lg font-semibold text-brand-900">
              What we stand for
            </h2>
            <ul className="mt-4 space-y-4 text-sm text-ink-700">
              {[
                {
                  t: "Reputation over volume",
                  b: "We'd rather do fewer cleans brilliantly than chase every enquiry.",
                },
                {
                  t: "Honest quoting",
                  b: "Per-property pricing, no hourly surprises, no pressure selling.",
                },
                {
                  t: "Right-first-time standard",
                  b: `Backed by a ${site.trust.returnWindowHours}-hour return policy if anything's missed.`,
                },
                {
                  t: "Easy to work with",
                  b: "Phone, email, WhatsApp — whichever's easiest for you.",
                },
              ].map((v) => (
                <li key={v.t}>
                  <p className="font-semibold text-brand-900">{v.t}</p>
                  <p className="mt-1">{v.b}</p>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-700 text-white text-sm font-semibold hover:bg-brand-800"
              >
                Get in touch
                <Icon name="arrow-right" size={14} />
              </Link>
              <a
                href={site.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-brand-800 border border-brand-200 text-sm font-semibold hover:border-brand-400"
              >
                <Icon name="instagram" size={14} />
                See real work
              </a>
            </div>
          </aside>
        </div>
      </Section>

      <Satisfaction />
      <AreasCovered />

      <CTASection
        heading="Thinking about your next clean?"
        body="Share a few details about the property and we'll come back with a fair, per-property quote. Bookings are reviewed and confirmed before they're final."
      />
    </>
  );
}
