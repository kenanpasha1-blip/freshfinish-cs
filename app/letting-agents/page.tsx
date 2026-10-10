import type { Metadata } from "next";
import {
  EditorialHero,
  Statement,
  SectorRows,
  StandardsGrid,
  NumbersBand,
  PortalProof,
  ClosingCTA,
  label,
  type Row,
} from "@/components/editorial";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Cleaning for Letting & Managing Agents London",
  description:
    "End of tenancy, void and communal cleaning for London letting agents, managing agents and landlords. Before-and-after photos on every job in your own portal, and anything missed put right within 48 hours.",
  path: "/letting-agents",
});

// Live demo tenant used in cold outreach, so agents can try the portal first.
const DEMO = {
  loginUrl: "https://portal.freshfinish-cs.co.uk/portal/login",
  email: "demo@freshfinish-cs.co.uk",
  password: "FreshDemo2026",
};

const rows: Row[] = [
  {
    n: "01",
    tag: "End of tenancy & voids",
    title: "Check-outs that pass, first time",
    body: "Top-to-bottom end of tenancy and void cleans built around inventory and check-out standards, ovens, limescale, inside every cupboard. We work to your checklist, photograph every room, and get the property ready to re-let.",
    points: ["Work to your inventory checklist", "Before-and-after photos, every room", "Ready to re-let, fast turnaround"],
    href: "/end-of-tenancy-cleaning-london",
    linkLabel: "What an end of tenancy clean includes",
    img: "/images/v2/cleaning.jpg",
    alt: "A floor cleaned to a mirror finish",
  },
  {
    n: "02",
    tag: "Communal & block cleaning",
    title: "Buildings residents are proud to come home to",
    body: "Weekly, fortnightly or monthly cleaning of entrances, stairwells, lifts, bin stores and communal glass. Every visit photographed, so when a leaseholder questions the service charge you have the proof in seconds.",
    points: ["Scheduled communal contracts", "Every visit photographed", "Evidence for leaseholder queries"],
    img: "/images/v2/lobby.jpg",
    alt: "A spotless residential lobby",
  },
];

export default function LettingAgentsPage() {
  return (
    <>
      <EditorialHero
        image="/images/v2/lobby.jpg"
        alt="A warm, spotless residential lobby"
        eyebrow="For letting & managing agents · London"
        title={
          <>
            Check-out ready, photographed,{" "}
            <em className="italic text-accent-300">on record.</em>
          </>
        }
        intro="End of tenancy, void and communal cleaning for London letting agents, managing agents and landlords. Before-and-after photos on every job, in your own portal, and anything missed put right within 48 hours."
        cta={{ href: "/end-of-tenancy-price-calculator#calculator", label: "Get a quote" }}
        credentials={[
          ["Fully insured", "Certificates on request"],
          ["DBS-checked", "Teams for sensitive sites"],
          ["48-hour guarantee", "Put right, with photos"],
          ["Five-star rated", "Real Google reviews"],
        ]}
      />

      <Statement eyebrow="Why agents switch to us">
        Your landlords judge you on the check-out. We make sure the clean never
        lets you down, and give you the photos to{" "}
        <span className="italic text-brand-700">prove it.</span>
      </Statement>

      <SectorRows
        eyebrow="What we do for agents"
        heading="Every tenancy, every block, one standard"
        intro="One cleaner your whole branch can rely on, booked in a couple of taps."
        rows={rows}
      />

      <StandardsGrid
        eyebrow="How it works for agents"
        title="No chasing. No taking our word for it."
        intro="Most cleaners hand you a job and hope you trust it. We give your team the evidence, so you can answer landlords and tenants straight away."
        items={[
          { t: "Book in a couple of taps", b: "Request a clean from your portal and we confirm the same day." },
          { t: "Photos on every job", b: "Before-and-after photos of every room land in your portal when we finish." },
          { t: "Your checklist, followed", b: "Send the inventory or check-out checklist and we clean to it." },
          { t: "Put right within 48 hours", b: "If anything is flagged, we are back within 48 hours. No quibble." },
        ]}
      />

      <NumbersBand
        items={[
          ["48h", "Put-it-right guarantee"],
          ["Same day", "Booking confirmation"],
          ["10+", "Vetted cleaners on the team"],
          ["£1m", "Public liability cover"],
        ]}
      />

      <PortalProof
        title={
          <>
            See it for yourself, in a <em className="italic text-brand-700">live demo.</em>
          </>
        }
        body="Log into a real, working agent account and click around exactly as your team would: completed cleans, before-and-after photos, bookings and invoices, all in one place."
        features={["Before-and-after photos", "Book a clean in two taps", "Every property in one place", "Invoices, paid and outstanding"]}
      >
        <div className="mt-10 max-w-lg border border-[#0E1E26]/15 bg-[#F4F1EB] p-6">
          <p className={`${label} text-brand-700`}>Live demo login</p>
          <p className="mt-3 text-sm text-ink-700">
            Email: <span className="font-semibold text-[#0E1E26]">{DEMO.email}</span>
            <br />
            Password: <span className="font-semibold text-[#0E1E26]">{DEMO.password}</span>
          </p>
          <a
            href={DEMO.loginUrl}
            className="mt-5 inline-block bg-[#0E1E26] px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-brand-700"
          >
            Open the demo portal &rarr;
          </a>
        </div>
      </PortalProof>

      <ClosingCTA
        eyebrow="Put us on your list"
        title="The cleaner your whole branch can rely on."
        body="Tell us about your next check-out or block and we'll have a quote back to you the same day."
        cta={{ href: "/end-of-tenancy-price-calculator#calculator", label: "Get a quote" }}
      />
    </>
  );
}
