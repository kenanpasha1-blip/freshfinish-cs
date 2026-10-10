import type { Metadata } from "next";
import Link from "next/link";
import {
  EditorialHero,
  Statement,
  SectorRows,
  StandardsGrid,
  NumbersBand,
  StepsBand,
  PortalProof,
  ClosingCTA,
  label,
  type Row,
} from "@/components/editorial";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: `${site.name} | Commercial, Office, School & Property Cleaning London`,
  description:
    "Contract cleaning for London offices, schools, letting agents and managing agents. A named account manager, DBS-checked teams and a photo report after every clean. Book a free site survey.",
  path: "/",
  suffix: false,
});

const rows: Row[] = [
  {
    n: "01",
    tag: "Offices & serviced offices",
    title: "Workplaces that impress, every morning",
    body: "Daily and scheduled contract cleaning for corporate offices, serviced offices and shared workspaces. Cleaned out of hours, reported after every visit, managed by one named account manager.",
    points: ["Daily, out-of-hours contracts", "Serviced offices and member spaces", "Single-site or multi-site"],
    href: "/office-cleaning",
    linkLabel: "Explore office cleaning",
    img: "/images/v2/office.jpg",
    alt: "A contemporary open-plan London office",
  },
  {
    n: "02",
    tag: "Schools & education",
    title: "Clean, safe schools, around the school day",
    body: "Term-time and holiday cleaning for schools and academies. DBS-checked teams, safeguarding built into how we work, and deep cleans scheduled for half-terms and holidays.",
    points: ["DBS-checked teams", "Term-time and holiday cleans", "Already trusted by a local school"],
    href: "/school-cleaning",
    linkLabel: "Explore school cleaning",
    img: "/images/v2/school.jpg",
    alt: "A modern school building",
  },
  {
    n: "03",
    tag: "Letting & managing agents",
    title: "Check-out ready, photographed, on record",
    body: "End of tenancy, void and communal cleaning for letting agents, managing agents and landlords. Before-and-after photos on every job, so every handover is evidenced and every deposit dispute is easier.",
    points: ["End of tenancy and voids", "Communal and block cleaning", "Photo record for every job"],
    href: "/letting-agents",
    linkLabel: "For letting & managing agents",
    img: "/images/v2/lobby.jpg",
    alt: "A warm, spotless residential lobby",
  },
];

export default function HomePage() {
  return (
    <>
      <EditorialHero
        image="/images/v2/hero-city.jpg"
        mobilePosition="72% center"
        alt="The City of London at dusk"
        eyebrow="Commercial cleaning contractor · London"
        title={
          <>
            The standard your building deserves,{" "}
            <em className="italic text-accent-300">proven</em> after every clean.
          </>
        }
        intro="Contract cleaning for London offices, schools, letting agents and managing agents. A named account manager, DBS-checked teams, and a photo report after every single visit."
      />

      <Statement eyebrow="Fresh Finish">
        We clean London&rsquo;s offices, schools and residential buildings to a
        standard you can see, and give the people responsible for them the
        evidence to prove it, <span className="italic text-brand-700">visit by visit.</span>
      </Statement>

      <SectorRows
        eyebrow="Sectors"
        heading={
          <>
            Specialist cleaning for <br className="hidden md:block" />
            the spaces that matter
          </>
        }
        intro="One contractor and one standard across every building you manage."
        rows={rows}
        footer={
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <p className="text-ink-700">
              Also available: domestic, deep and after-build cleaning, to the same
              standard as our commercial work.
            </p>
            <Link href="/contact" className={`${label} text-brand-700`}>
              Ask about domestic &rarr;
            </Link>
          </div>
        }
      />

      <StandardsGrid
        title="You never have to wonder if the cleaning was done."
        intro="Most contractors ask you to take it on trust. We give you the evidence, so you can report on the standard instead of chasing it."
        items={[
          { t: "One named account manager", b: "Your contract is run by one person who knows your site and answers for the standard." },
          { t: "Every visit logged on site", b: "Cleaners check in and out on site, so every visit is time-stamped and located." },
          { t: "A photo report after every clean", b: "Before-and-after photos arrive in your own client portal after each visit." },
          { t: "Anything flagged, fixed next clean", b: "Flag an issue in your portal and it is put right on the very next clean, with photos to prove it." },
        ]}
        image="/images/v2/cleaning.jpg"
        imageAlt="A floor being cleaned to a mirror finish"
      />

      <NumbersBand
        items={[
          ["10+", "Vetted cleaners on the team"],
          ["24/7", "Portal access to every visit"],
          ["1", "Named account manager per contract"],
          ["DBS", "Checked teams for sensitive sites"],
        ]}
      />

      <StepsBand
        eyebrow="Switching to us"
        title="A new contractor, without the disruption."
        steps={[
          { t: "Site survey", b: "We walk the building with you and learn how it is used." },
          { t: "Specification", b: "Every area, task and frequency written down, at a fixed price." },
          { t: "Mobilisation", b: "A vetted, briefed team trained on your site before day one." },
          { t: "First-week review", b: "Your account manager checks the first week in person." },
          { t: "Ongoing reporting", b: "Photo reports every visit and a regular review with you." },
        ]}
      />

      <PortalProof />

      <ClosingCTA
        title="See the difference on your own site."
        body="We'll walk the building with you, write a clear specification and come back with a fixed price."
      />
    </>
  );
}
