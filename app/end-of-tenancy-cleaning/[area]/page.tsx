import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import StructuredData from "@/components/StructuredData";
import PriceTable from "@/components/PriceTable";
import { EditorialHero, StandardsGrid, ClosingCTA, label, serif, ink, stoneBg } from "@/components/editorial";
import { AreaFaq, AreaLinks } from "@/components/AreaPageParts";
import { areaPages, getAreaPage, listTowns, EOT_AREA_PATH } from "@/lib/area-pages";
import { sizes, extras } from "@/lib/prices";
import { buildMetadata, breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return areaPages.map((a) => ({ area: a.slug }));
}

const studio = sizes.find((s) => s.id === "studio")?.flat;

export async function generateMetadata({ params }: { params: Promise<{ area: string }> }): Promise<Metadata> {
  const { area: slug } = await params;
  const area = getAreaPage(slug);
  if (!area) return {};
  return buildMetadata({
    title: `End of Tenancy Cleaning ${area.name} | Fixed Prices`,
    description: `End of tenancy cleaning ${area.across}, including ${listTowns(area.examples, 4)}. Fixed prices${typeof studio === "number" ? ` from £${studio}` : ""}, before and after photos of every room, and anything flagged at checkout put right within 48 hours.`,
    path: EOT_AREA_PATH(area.slug),
  });
}

const eotCredentials: [string, string][] = [
  ["Fully insured", "Certificates on request"],
  ["48-hour guarantee", "Put right, with photos"],
  ["Every room photographed", "Saved in your portal"],
  ["Five-star rated", "Real Google reviews"],
];

export default async function EotAreaPage({ params }: { params: Promise<{ area: string }> }) {
  const { area: slug } = await params;
  const area = getAreaPage(slug);
  if (!area) notFound();

  const path = EOT_AREA_PATH(area.slug);
  const url = `${site.url}${path}`;
  const towns = listTowns(area.examples);
  const where = area.across.replace(/^(across|in) /, "in ");

  const faqs = [
    {
      question: `Do you do end of tenancy cleaning in ${area.examples[0]} and ${area.examples[1]}?`,
      answer: `Yes. We clean properties ${area.across}, including ${towns}, and the surrounding ${area.postcodes.join(", ")} postcode areas, for tenants, landlords and letting agents.`,
    },
    {
      question: `How much is an end of tenancy clean in ${area.name}?`,
      answer: `Our prices start from £${studio ?? ""} for a studio flat and go up by property size, with one bathroom included. White goods (oven, fridge freezer, washing machine and tumble dryer) are £${extras.whiteGoods}, carpets £${extras.carpetPerRoom} per room and extra bathrooms £${extras.extraBathroom}. Larger or luxury homes are confirmed after we see them. You can price your property in seconds with our online calculator.`,
    },
    {
      question: "What if the agent or landlord is not happy at checkout?",
      answer:
        "Tell us within 48 hours and we come back and put it right, with photos to prove it. Every room is photographed before and after, so there is a clear record if anything is disputed.",
    },
    {
      question: "Does the property need to be empty?",
      answer:
        "Yes. The property should be clear of all personal items before our team arrives, so we can clean it properly and on time.",
    },
  ];

  return (
    <>
      <StructuredData
        data={[
          serviceJsonLd({
            name: `End of tenancy cleaning in ${area.name}`,
            description: `End of tenancy cleaning ${area.across}, including ${towns}.`,
            url,
            serviceType: "End of tenancy cleaning",
            areaServed: [
              { "@type": "Place", name: area.name },
              ...area.examples.map((name) => ({ "@type": "Place", name })),
            ],
          }),
          breadcrumbJsonLd([
            { name: "Home", url: site.url },
            { name: "End of tenancy cleaning", url: `${site.url}/end-of-tenancy-cleaning-london` },
            { name: area.name, url },
          ]),
          faqJsonLd(faqs),
        ]}
      />

      <EditorialHero
        image="/images/v2/lobby.jpg"
        alt={`A property ${where}, cleaned and ready for checkout`}
        eyebrow={`End of tenancy cleaning · ${area.name}`}
        title={
          <>
            End of tenancy cleaning {where}, <em className="italic text-accent-300">photographed</em>.
          </>
        }
        intro={`Move out cleans for tenants, landlords and letting agents in ${towns}. Fixed prices, before and after photos of every room, and anything flagged at checkout put right within 48 hours.`}
        cta={{ href: "/end-of-tenancy-price-calculator#calculator", label: "Get a price" }}
        credentials={eotCredentials}
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-24 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <p className={`${label} text-brand-700`}>Lettings in {area.name}</p>
            <h2 className={`${serif} ${ink} mt-4 text-[2.1rem] leading-[1.1] md:text-[3rem]`}>
              Ready for checkout, and on record.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-ink-700 md:text-lg">
            <p>{area.rentalLocal}</p>
            <p>
              Every clean follows the inventory and checkout standard: kitchen and appliances, bathrooms and limescale, inside
              cupboards and wardrobes, skirting boards, doors and switches, windows and sills, and floors throughout. Every room
              is photographed before and after, and agents can see each job in their own portal.
            </p>
            <p className="text-sm text-ink-500">
              Postcodes we cover in {area.name} include {area.postcodes.join(", ")}.
            </p>
          </div>
        </div>
      </section>

      <section className={`${stoneBg} py-16 md:py-24`}>
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-10">
          <p className={`${label} text-brand-700`}>Prices</p>
          <h2 className={`${serif} ${ink} mt-4 mb-10 text-[2.1rem] leading-[1.1] md:text-[3rem]`}>
            End of tenancy <em className="italic text-brand-700">price list.</em>
          </h2>
          <PriceTable />
          <Link href="/end-of-tenancy-price-calculator#calculator" className={`${label} mt-8 inline-flex items-center gap-3 ${ink} hover:text-brand-700`}>
            Work out your exact price <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </section>

      <StandardsGrid
        eyebrow="Why agents and landlords use us"
        title={
          <>
            No chasing. No taking <em className="italic text-accent-300">our word for it.</em>
          </>
        }
        intro="Most cleaners hand you a job and hope you trust it. We give you the evidence."
        items={[
          { t: "Photos of every room", b: "Before and after photos of each room, saved in your own portal." },
          { t: "Put right within 48 hours", b: "If anything is flagged at checkout, we go back and fix it." },
          { t: "Proof on request", b: "We can send the tenant or landlord a link to every before and after photo." },
          { t: "Fully insured", b: "A trained, insured team that turns up when we say." },
        ]}
      />

      <AreaFaq heading={`End of tenancy cleaning in ${area.name}, answered`} items={faqs} />

      <section className="mx-auto max-w-7xl px-5 pb-4 sm:px-6 lg:px-10">
        <Link href="/end-of-tenancy-cleaning-london" className={`${label} inline-flex items-center gap-3 ${ink} hover:text-brand-700`}>
          More about our end of tenancy cleaning <span aria-hidden>&rarr;</span>
        </Link>
      </section>

      <AreaLinks service="eot" current={area.slug} heading="End of tenancy cleaning in other areas" />

      <ClosingCTA
        image="/images/v2/building.jpg"
        eyebrow="Get a price"
        title={<>Book your end of tenancy clean {where}.</>}
        body="Price your property online in seconds, or call us and we will quote the same day."
        cta={{ href: "/end-of-tenancy-price-calculator#calculator", label: "Get a price" }}
      />
    </>
  );
}
