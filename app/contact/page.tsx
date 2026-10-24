import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import QuoteForm from "@/components/QuoteForm";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import StructuredData from "@/components/StructuredData";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import { primaryAreas, widerAreas } from "@/lib/areas";

const PATH = "/contact";

export const metadata: Metadata = buildMetadata({
  title: "Request a Quote / Contact Fresh Finish",
  description:
    "Request a quote or booking enquiry from Fresh Finish Cleaning Solutions. London-focused coverage, selected Hertfordshire and Essex. Bookings reviewed and confirmed before they're final.",
  path: PATH,
});

export default function Page() {
  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd([
          { name: "Home", url: site.url },
          { name: "Contact", url: `${site.url}${PATH}` },
        ])}
      />

      <PageHero
        eyebrow="Get in touch"
        heading="Request a quote or booking enquiry"
        intro="Send a few details about your property. We review every enquiry and confirm the quote and date before anything is booked. No automated bookings, no surprise charges."
        breadcrumbs={[
          { href: "/", label: "Home" },
          { label: "Contact" },
        ]}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-start">
          <div className="rounded-2xl bg-white border border-surface-200 p-6 md:p-8">
            <h2 className="text-xl font-bold text-brand-900">
              Tell us about the property
            </h2>
            <p className="mt-2 text-sm text-ink-500">
              Required fields marked with{" "}
              <span className="text-accent-600">*</span>.
            </p>
            <div className="mt-6">
              <QuoteForm />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl bg-brand-900 text-white p-6">
              <h3 className="text-lg font-semibold">
                Prefer to talk?
              </h3>
              <p className="mt-2 text-brand-100 text-sm leading-relaxed">
                We're happy to chat through your move-out or cleaning job in a
                couple of minutes. Phone, WhatsApp or email, whichever works.
              </p>
              <div className="mt-5 flex flex-col gap-2.5">
                <Button
                  href={`tel:${site.contact.phoneE164}`}
                  className="!bg-white !text-brand-800 hover:!bg-brand-50"
                >
                  <Icon name="phone" size={16} />
                  Call {site.contact.phoneDisplay}
                </Button>
                <Button
                  href={site.contact.whatsappUrl}
                  variant="whatsapp"
                >
                  <Icon name="whatsapp" size={16} />
                  WhatsApp Us
                </Button>
                <Button
                  href={`mailto:${site.contact.email}`}
                  variant="secondary"
                  className="!bg-transparent !text-white !border-brand-400 hover:!bg-brand-800"
                >
                  <Icon name="mail" size={16} />
                  Email
                </Button>
              </div>
              <p className="mt-5 text-xs text-brand-200">
                {site.hours.display}
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-surface-200 p-6">
              <h3 className="font-semibold text-brand-900">Areas we cover</h3>
              <p className="mt-2 text-sm text-ink-500">
                London-focused, with selected Home Counties.
              </p>
              <ul className="mt-4 space-y-1 text-sm text-ink-700">
                {primaryAreas.map((a) => (
                  <li key={a.slug} className="flex items-center gap-2">
                    <span className="text-brand-700">
                      <Icon name="map-pin" size={14} />
                    </span>
                    {a.name}
                  </li>
                ))}
                {widerAreas.map((a) => (
                  <li key={a.slug} className="flex items-center gap-2 text-ink-500">
                    <span className="text-brand-400">
                      <Icon name="map-pin" size={14} />
                    </span>
                    {a.name}
                    <span className="text-xs">(selected)</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-accent-500/10 border border-accent-500/40 p-6">
              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-accent-500 text-white">
                  <Icon name="shield-check" size={18} />
                </span>
                <div>
                  <p className="font-semibold text-brand-900">
                    Bookings are reviewed, not auto-confirmed
                  </p>
                  <p className="mt-1 text-sm text-ink-700 leading-relaxed">
                    Submitting this form is an enquiry. We'll come back to
                    confirm price and availability before anything's locked in.
                    It means the quote you receive is accurate, not a
                    guess.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
