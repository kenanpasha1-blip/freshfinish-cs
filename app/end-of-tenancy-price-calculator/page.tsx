import type { Metadata } from "next";
import Link from "next/link";
import PriceTable from "@/components/PriceTable";
import CalculatorBox from "@/components/CalculatorBox";
import { label, serif, stoneBg, ink } from "@/components/editorial";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Cleaning Prices London | End of Tenancy Price Calculator",
  description:
    "Work out the price of an end of tenancy clean in seconds, or download the price list. Offices, schools and commercial sites are priced after a free site survey.",
  path: "/end-of-tenancy-price-calculator",
});

const PRICE_LIST_PDF = "/fresh-finish-end-of-tenancy-price-list.pdf";

const contractSectors = [
  {
    tag: "Offices & workplaces",
    title: "Daily and scheduled office cleaning",
    body: "Out of hours contract cleaning for offices, serviced offices and shared workspaces, managed by one named account manager.",
    href: "/office-cleaning",
  },
  {
    tag: "Schools & education",
    title: "Term time and holiday cleaning",
    body: "DBS-checked teams for schools and academies, with deep cleans scheduled for half terms and holidays.",
    href: "/school-cleaning",
  },
  {
    tag: "Communal & commercial",
    title: "Blocks, communal areas and other sites",
    body: "Scheduled cleaning of entrances, stairwells, lifts and shared spaces, with every visit photographed.",
    href: "/contact",
  },
];

export default function PriceCalculatorPage() {
  return (
    <>
      <section className={`${stoneBg} py-12 md:py-20 lg:py-24`}>
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-10">
          <p className={`${label} flex items-center gap-4 text-brand-700`}>
            <span className="h-px w-10 bg-brand-700" />
            End of tenancy cleaning
          </p>
          <h1 className={`${serif} ${ink} mt-5 text-[2.3rem] leading-[1.08] md:text-6xl`}>
            End of tenancy <em className="italic text-brand-700">price list.</em>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-700 md:text-lg">
            Clear prices per property. Every clean is photographed room by room and saved in your own portal, and anything flagged at checkout is put right within 48 hours.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3">
            <a href={PRICE_LIST_PDF} target="_blank" rel="noopener" className={`${label} inline-flex items-center gap-3 ${ink} hover:text-brand-700`}>
              Download the price list (PDF) <span aria-hidden>&darr;</span>
            </a>
            <a href="#calculator" className={`${label} inline-flex items-center gap-3 ${ink} hover:text-brand-700`}>
              Work out your exact price <span aria-hidden>&rarr;</span>
            </a>
            <a href="#contract-cleaning" className={`${label} inline-flex items-center gap-3 text-brand-700 hover:text-[#0E1E26]`}>
              Offices or schools? <span aria-hidden>&rarr;</span>
            </a>
          </div>
          <div className="mt-10 md:mt-14">
            <PriceTable />
          </div>
          <div className="mt-12 md:mt-16">
            <CalculatorBox />
          </div>
        </div>
      </section>

      <section id="contract-cleaning" className="scroll-mt-28 bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-12">
            <div>
              <p className={`${label} text-brand-700`}>Offices, schools &amp; commercial sites</p>
              <h2 className={`${serif} ${ink} mt-4 text-[2.1rem] leading-[1.1] md:text-[3.2rem] md:leading-[1.08]`}>
                Priced after a <em className="italic text-brand-700">free site survey.</em>
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-ink-700 md:text-lg lg:justify-self-end">
              Every building is different, so we come and see yours first. We walk the site with you, write a clear specification of every area and frequency, and send you a fixed price.
            </p>
          </div>

          <div className="mt-10 grid gap-px bg-[#0E1E26]/10 md:mt-14 md:grid-cols-3">
            {contractSectors.map((s) => (
              <Link key={s.tag} href={s.href} className="group bg-white p-6 transition hover:bg-[#F4F1EB] md:p-8">
                <p className={`${label} text-brand-700`}>{s.tag}</p>
                <h3 className={`${serif} ${ink} mt-4 text-2xl leading-snug`}>{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">{s.body}</p>
                <span className={`${label} mt-6 inline-flex items-center gap-3 ${ink} group-hover:text-brand-700`}>
                  Find out more <span aria-hidden>&rarr;</span>
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 md:mt-14">
            <Link href="/contact" className="inline-block bg-[#0E1E26] px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-brand-700">
              Book a site survey
            </Link>
            <a href={`tel:${site.contact.phoneE164}`} className="text-sm font-semibold uppercase tracking-[0.14em] text-[#0E1E26]">
              Or call {site.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
