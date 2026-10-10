import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import StructuredData from "@/components/StructuredData";
import { EditorialHero, StandardsGrid, StepsBand, ClosingCTA, label, serif, ink } from "@/components/editorial";
import { AreaFaq, AreaLinks } from "@/components/AreaPageParts";
import { areaPages, getAreaPage, listTowns, OFFICE_AREA_PATH } from "@/lib/area-pages";
import { buildMetadata, breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return areaPages.map((a) => ({ area: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ area: string }> }): Promise<Metadata> {
  const { area: slug } = await params;
  const area = getAreaPage(slug);
  if (!area) return {};
  return buildMetadata({
    title: `Office Cleaning ${area.name} | Contract Office Cleaners`,
    description: `Contract office cleaning ${area.across}, including ${listTowns(area.examples, 4)}. Out of hours cleaning, one named account manager, every visit logged and photographed. Free site survey and fixed price.`,
    path: OFFICE_AREA_PATH(area.slug),
  });
}

export default async function OfficeAreaPage({ params }: { params: Promise<{ area: string }> }) {
  const { area: slug } = await params;
  const area = getAreaPage(slug);
  if (!area) notFound();

  const path = OFFICE_AREA_PATH(area.slug);
  const url = `${site.url}${path}`;
  const towns = listTowns(area.examples);

  const faqs = [
    {
      question: `Do you clean offices in ${area.examples[0]} and ${area.examples[1]}?`,
      answer: `Yes. We clean offices ${area.across}, including ${towns}, and the surrounding ${area.postcodes.join(", ")} postcode areas. If your office is nearby and not listed, call ${site.contact.phoneDisplay} and we will tell you straight away.`,
    },
    {
      question: `How much does office cleaning cost in ${area.name}?`,
      answer:
        "Every office is different, so we price after a free site survey. We walk the building with you, agree what is cleaned and how often, and send a fixed price. There are no hourly surprises.",
    },
    {
      question: "Can you clean outside our working hours?",
      answer:
        "Yes. Most of our office cleaning happens early in the morning or in the evening, so your team arrives to a clean office and the working day is never disrupted.",
    },
    {
      question: "How do we know the cleaning has been done?",
      answer:
        "Our cleaners check in and out on site and every visit is photographed. You can see each clean, with photos and invoices, in your own client portal at any time.",
    },
    {
      question: "Can we keep our current cleaners if we switch to you?",
      answer:
        "Often, yes. When a cleaning contract changes company, the cleaners on site normally move across with it, so you keep the people you know and get our reporting and a named account manager on top.",
    },
  ];

  return (
    <>
      <StructuredData
        data={[
          serviceJsonLd({
            name: `Office cleaning in ${area.name}`,
            description: `Contract office cleaning ${area.across}, including ${towns}.`,
            url,
            serviceType: "Office cleaning",
            areaServed: [
              { "@type": "Place", name: area.name },
              ...area.examples.map((name) => ({ "@type": "Place", name })),
            ],
          }),
          breadcrumbJsonLd([
            { name: "Home", url: site.url },
            { name: "Office cleaning", url: `${site.url}/office-cleaning` },
            { name: area.name, url },
          ]),
          faqJsonLd(faqs),
        ]}
      />

      <EditorialHero
        image="/images/v2/office.jpg"
        alt={`An office in ${area.name}, cleaned and ready for the working day`}
        eyebrow={`Office cleaning · ${area.name}`}
        title={
          <>
            Office cleaning {area.across.replace(/^(across|in) /, "in ")}, <em className="italic text-accent-300">on record</em>.
          </>
        }
        intro={`Contract office cleaning for businesses, managing agents and serviced offices in ${towns}. One named account manager, every visit logged and photographed, and a fixed price after a free site survey.`}
        mobilePosition="70% center"
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-24 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <p className={`${label} text-brand-700`}>Offices in {area.name}</p>
            <h2 className={`${serif} ${ink} mt-4 text-[2.1rem] leading-[1.1] md:text-[3rem]`}>
              Cleaning that fits how your building works.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-ink-700 md:text-lg">
            <p>{area.officeLocal}</p>
            <p>
              We agree a written specification with you covering every area and how often it is cleaned: desks and touch points,
              kitchens and tea points, washrooms, meeting rooms, floors and bins. Then the same trained team turns up on the same
              schedule, and you can see every visit in your portal.
            </p>
            <p className="text-sm text-ink-500">
              Postcodes we cover in {area.name} include {area.postcodes.join(", ")}.
            </p>
          </div>
        </div>
      </section>

      <StandardsGrid
        title={
          <>
            You never have to wonder if the cleaning <em className="italic text-accent-300">was done.</em>
          </>
        }
        intro="Most contractors ask you to take it on trust. We give you the evidence."
        items={[
          { t: "One named account manager", b: "Your contract is run by one person who knows your building and picks up the phone." },
          { t: "Every visit logged", b: "Cleaners check in and out on site, so every visit is time-stamped." },
          { t: "A photo report after every clean", b: "Before and after photos arrive in your own client portal, alongside every invoice." },
          { t: "DBS-checked and fully insured", b: "Trained teams, cleaning out of hours so your working day is never disrupted." },
        ]}
      />

      <StepsBand
        eyebrow="Getting started"
        title="A fixed price after a free site survey."
        steps={[
          { t: "Site survey", b: "We walk the building with you and learn how it is used." },
          { t: "Specification", b: "Every area, task and frequency written down, at a fixed price." },
          { t: "Mobilisation", b: "A vetted, briefed team trained on your site before day one." },
          { t: "Ongoing reporting", b: "Photo reports every visit and a regular review with you." },
        ]}
      />

      <AreaFaq heading={`Office cleaning in ${area.name}, answered`} items={faqs} />

      <section className="mx-auto max-w-7xl px-5 pb-4 sm:px-6 lg:px-10">
        <Link href="/office-cleaning" className={`${label} inline-flex items-center gap-3 ${ink} hover:text-brand-700`}>
          More about our office cleaning <span aria-hidden>&rarr;</span>
        </Link>
      </section>

      <AreaLinks service="office" current={area.slug} heading="Office cleaning in other areas" />

      <ClosingCTA
        title={<>See the difference in your own office.</>}
        body={`Tell us about your office ${area.across.replace(/^(across|in) /, "in ")} and we will arrange a free site survey and a fixed price.`}
      />
    </>
  );
}
