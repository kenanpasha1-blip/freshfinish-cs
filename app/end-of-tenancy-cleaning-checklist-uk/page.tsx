import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import StructuredData from "@/components/StructuredData";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

const PATH = "/end-of-tenancy-cleaning-checklist-uk";

export const metadata: Metadata = buildMetadata({
  title: "End of Tenancy Cleaning Checklist UK | Printable Guide",
  description:
    "A complete UK end of tenancy cleaning checklist for tenants, landlords and letting agents. Organised room by room so nothing gets missed at check-out.",
  path: PATH,
});

const checklist: { room: string; items: string[] }[] = [
  {
    room: "Kitchen",
    items: [
      "Oven interior (top, base, sides, back)",
      "Oven door glass — inside layer where accessible",
      "Oven racks and trays",
      "Oven seals and external housing",
      "Hob — all burners, knobs, surround",
      "Extractor hood — exterior and filter",
      "Splashback and wall tiles",
      "Grout cleaned",
      "Fridge emptied, defrosted (if needed) and cleaned",
      "Freezer emptied, defrosted and cleaned",
      "Fridge/freezer seals and drawers",
      "Microwave — inside, outside, turntable",
      "Dishwasher — filter, spray arms, drawer",
      "Washing machine — detergent drawer, rubber seal, glass door",
      "Worktops wiped and polished",
      "Sink descaled and polished",
      "Taps and spout descaled",
      "Cupboards — inside",
      "Cupboards — outside, tops, handles",
      "Drawers — inside and outside",
      "Kick-boards at base of units",
      "Bin cleaned and deodorised",
      "Skirtings and radiators",
      "Light switches, sockets, door handles",
      "Floor: vacuum then mop, corners included",
    ],
  },
  {
    room: "Bathrooms / WC",
    items: [
      "Shower screen — both sides, descaled",
      "Shower tray / enclosure floor",
      "Showerhead and hose — descaled",
      "Wall tiles scrubbed",
      "Grout attended to",
      "Silicone sealant cleaned (not replaced)",
      "Bath scrubbed, rinsed, polished",
      "Basin, taps and overflow",
      "Mirror and any glass",
      "Toilet — bowl, rim, seat (both sides), exterior",
      "Toilet — behind, underneath and base",
      "Cabinets — inside and out",
      "Extractor fan cover dusted",
      "Light fittings wiped",
      "Skirtings and radiators",
      "Floor: sweep and mop into corners",
    ],
  },
  {
    room: "Bedrooms",
    items: [
      "Wardrobe — inside (shelves, rails, floor)",
      "Wardrobe — outside, top and handles",
      "Chest of drawers — inside and out",
      "Bedside tables — inside and out",
      "Mirrors polished",
      "Windows (interior), sills and frames",
      "Radiators, skirtings, door frames",
      "Light switches and sockets",
      "Picture rails and high-level dust",
      "Wall marks addressed where reasonable",
      "Carpet vacuumed thoroughly (or floor mopped)",
    ],
  },
  {
    room: "Living and dining",
    items: [
      "All shelves, mantle, media units",
      "Inside and around stored/empty furniture",
      "Windows (interior), sills and frames",
      "Radiators, skirtings, door frames, architraves",
      "Switches, sockets, door handles",
      "High-level dust and cobwebs",
      "Carpet vacuumed or floor mopped",
    ],
  },
  {
    room: "Hallways, stairs and entrance",
    items: [
      "Entrance door — interior, frame and letterbox",
      "Stair spindles and handrail",
      "Landing and banister tops",
      "Cobwebs and high-level dust",
      "Radiators, skirtings, switches, sockets",
      "Any cupboards under stairs — emptied and wiped",
      "Floor: vacuum and/or mop",
    ],
  },
  {
    room: "Utility and storage",
    items: [
      "Boiler cupboard exterior wiped",
      "Shelving emptied and cleaned",
      "Storage cupboards — inside and out",
      "Floor vacuumed and mopped",
    ],
  },
  {
    room: "Final checks before handover",
    items: [
      "All bins emptied and bagged for disposal",
      "Windows checked for streaks in daylight",
      "All light bulbs working (replacements usually tenant's responsibility)",
      "Smoke and CO alarms left in place",
      "Keys and meters noted if requested by agent/landlord",
      "Walk-through with tenant/landlord before leaving",
    ],
  },
];

export default function Page() {
  return (
    <>
      <StructuredData
        data={[
          breadcrumbJsonLd([
            { name: "Home", url: site.url },
            {
              name: "End of Tenancy Cleaning Checklist UK",
              url: `${site.url}${PATH}`,
            },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Checklist · UK"
        heading="The full end of tenancy cleaning checklist (UK)"
        intro="A genuinely useful checklist for tenants, landlords and letting agents — organised room by room so nothing's missed at check-out. Save it, print it, or send it to your cleaner."
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/end-of-tenancy-cleaning-london", label: "End of Tenancy" },
          { label: "Checklist UK" },
        ]}
      />

      <Section>
        <div className="text-ink-700 text-lg leading-relaxed max-w-3xl space-y-5">
          <p>
            Use this checklist as your reference before, during and after
            move-out day. It's the same scope our team works to on a full
            end of tenancy clean in London — including the detail that
            tends to cost tenants their deposit when it's overlooked.
          </p>
          <p>
            Tip: if you're doing some of it yourself, start with the oven
            and bathrooms. They take the longest, they fail check-outs most
            often, and they genuinely need the right products (not just
            elbow grease).
          </p>
        </div>
        <div className="mt-6 rounded-xl bg-surface-50 border border-surface-200 p-4 text-sm text-ink-500">
          This checklist is a guide — your specific tenancy may have
          additional requirements. Always check the inventory and any
          agent-specific check-out list before starting.
        </div>
      </Section>

      {checklist.map((room, i) => (
        <Section
          key={room.room}
          tone={i % 2 === 0 ? "muted" : "default"}
          id={room.room.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
        >
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
                Room {i + 1}
              </p>
              <h2 className="mt-2 text-2xl md:text-3xl font-bold text-brand-900">
                {room.room}
              </h2>
            </div>
            <div className="text-xs text-ink-500 bg-white border border-surface-200 rounded-full px-3 py-1">
              {room.items.length} items
            </div>
          </div>

          <ul className="mt-6 grid gap-2 md:grid-cols-2 text-sm text-ink-700">
            {room.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl bg-white border border-surface-200 p-3.5"
              >
                <span
                  aria-hidden
                  className="mt-0.5 h-4 w-4 flex-none rounded border border-surface-200 bg-surface-50"
                />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </Section>
      ))}

      <Section tone="muted">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
            Why this works
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold text-brand-900">
            Every item on this list is something someone's lost a deposit over
          </h2>
          <p className="mt-4 text-lg text-ink-700">
            Check-out reports are remarkably consistent. The same rooms, the
            same items, the same overlooked details. Work through this list
            properly — or hire someone who does — and you'll sidestep the
            most common deposit deductions in the UK.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-brand-700 text-white font-semibold hover:bg-brand-800"
          >
            Hire professionals instead
            <Icon name="arrow-right" size={16} />
          </Link>
          <Link
            href="/what-does-end-of-tenancy-cleaning-include"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-brand-800 border border-brand-200 font-semibold hover:border-brand-400"
          >
            See full service scope
          </Link>
        </div>
      </Section>

      <CTASection
        heading="Rather not scrub the oven yourself?"
        body="We do this every day, in London, to agent-pass standard — trained cleaners, professional-grade kit, real five-star Google reviews. Send us a few details and we'll come back with a quote."
      />
    </>
  );
}
