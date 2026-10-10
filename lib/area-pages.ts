import { areas, type Area } from "./areas";

/**
 * Local detail for the area landing pages (/office-cleaning/[area] and
 * /end-of-tenancy-cleaning/[area]). Each area gets its own wording, towns and
 * postcode districts so the pages are genuinely local rather than copies.
 * Only general, factual descriptions of each area: no stats, no clients.
 */

export type AreaDetail = Area & {
  /** Postcode districts covered, for the page and the structured data. */
  postcodes: string[];
  /** What office space here tends to look like. */
  officeLocal: string;
  /** What the rental stock here tends to look like. */
  rentalLocal: string;
  /** Short line used in titles and hero copy, e.g. "across North London". */
  across: string;
};

const DETAIL: Record<string, Omit<AreaDetail, keyof Area>> = {
  "north-london": {
    postcodes: ["N1", "N4", "N5", "N6", "N7", "N8", "N10", "N19", "NW1", "NW5"],
    across: "across North London",
    officeLocal:
      "Offices in North London range from converted warehouses and studios around Islington and King's Cross to small professional practices on the high streets of Finchley, Muswell Hill and Crouch End. Many are multi-tenant buildings where the shared entrance, stairs and kitchens matter as much as the office floor.",
    rentalLocal:
      "North London lettings are dominated by Victorian and Edwardian conversions, period terraces and purpose-built flats, from Islington and Camden up to Finchley and Muswell Hill. Older properties mean original features, sash windows and busy kitchens that need care at check-out.",
  },
  "north-west-london": {
    postcodes: ["NW2", "NW3", "NW6", "NW8", "NW10", "HA0", "HA1", "HA9"],
    across: "across North West London",
    officeLocal:
      "North West London offices include serviced and shared workspaces around Wembley and Harrow, professional practices in Hampstead and St John's Wood, and business units along the North Circular. Sites are often a mix of open plan space and smaller private rooms.",
    rentalLocal:
      "Lettings in North West London run from mansion blocks in St John's Wood and Hampstead to family houses in Willesden, Kilburn, Wembley and Harrow. Larger homes and high-spec flats are common, so we confirm bigger properties after a look.",
  },
  "central-london": {
    postcodes: ["W1", "WC1", "WC2", "SW1", "EC1"],
    across: "in Central London",
    officeLocal:
      "Central London offices are often period buildings and serviced suites in Marylebone, Fitzrovia, Soho, Mayfair and Westminster, where cleaning has to happen out of hours and around building management rules, access fobs and shared lifts.",
    rentalLocal:
      "Central London lettings are mostly flats in mansion blocks and modern developments across Marylebone, Fitzrovia, Soho, Westminster and Mayfair. Tenants and agents expect a high finish, and parking and building access need planning ahead.",
  },
  "east-london": {
    postcodes: ["E1", "E2", "E3", "E8", "E9", "E14"],
    across: "across East London",
    officeLocal:
      "East London offices cover creative studios and converted industrial spaces in Shoreditch, Hackney and Bethnal Green through to modern tower floors around Canary Wharf. Hot desking and shared kitchens mean touch points and break areas need daily attention.",
    rentalLocal:
      "East London lettings mix new-build apartments in Canary Wharf and Bow with warehouse conversions and Victorian terraces in Shoreditch, Hackney and Bethnal Green. Fast turnovers between tenancies are common, so timing matters.",
  },
  "north-east-london": {
    postcodes: ["N15", "N16", "N17", "E5", "E10", "E17"],
    across: "across North East London",
    officeLocal:
      "North East London offices are typically small and mid-sized businesses, community buildings and creative workspaces in Stoke Newington, Dalston, Walthamstow, Leyton and Tottenham, often in converted or mixed-use buildings.",
    rentalLocal:
      "North East London has a busy rental market of Victorian terraces, flat conversions and new developments across Stoke Newington, Dalston, Walthamstow, Leyton and Tottenham, with plenty of letting agents turning properties round between tenants.",
  },
  "west-london": {
    postcodes: ["W2", "W4", "W5", "W8", "W11", "W12", "W14"],
    across: "across West London",
    officeLocal:
      "West London offices range from media and creative businesses around Shepherd's Bush and Chiswick to professional practices in Kensington, Notting Hill and Ealing, many in period buildings with listed features to look after.",
    rentalLocal:
      "West London lettings include stucco-fronted flats in Notting Hill and Kensington, mansion blocks, and family houses in Chiswick and Ealing. High-value properties call for careful cleaning and a clear photo record at check-out.",
  },
  hertfordshire: {
    postcodes: ["WD6", "WD17", "AL1", "AL10", "EN6"],
    across: "in selected parts of Hertfordshire",
    officeLocal:
      "In Hertfordshire we clean offices in and around Borehamwood, Watford, St Albans, Potters Bar and Hatfield, from business park units to town centre offices and serviced business centres.",
    rentalLocal:
      "Hertfordshire lettings around Borehamwood, Watford, St Albans, Potters Bar and Hatfield are often family houses and modern flats close to the London commuter lines, with letting agents in every town centre.",
  },
  essex: {
    postcodes: ["IG1", "IG7", "IG10", "RM1", "CM16"],
    across: "in selected parts of Essex",
    officeLocal:
      "In Essex we clean offices in and around Loughton, Chigwell, Romford, Ilford and Epping, including town centre offices, business units and shared workspaces close to the London border.",
    rentalLocal:
      "Essex lettings around Loughton, Chigwell, Romford, Ilford and Epping include family houses, new-build flats and larger detached homes, many let through local agents on the Central line and the A12 corridor.",
  },
};

export const areaPages: AreaDetail[] = areas
  .filter((a) => DETAIL[a.slug])
  .map((a) => ({ ...a, ...DETAIL[a.slug] }));

export function getAreaPage(slug: string): AreaDetail | undefined {
  return areaPages.find((a) => a.slug === slug);
}

/** "Islington, Camden, Highgate and Finchley" */
export function listTowns(towns: string[], max = towns.length): string {
  const t = towns.slice(0, max);
  return t.length <= 1 ? t.join("") : `${t.slice(0, -1).join(", ")} and ${t[t.length - 1]}`;
}

export const OFFICE_AREA_PATH = (slug: string) => `/office-cleaning/${slug}`;
export const EOT_AREA_PATH = (slug: string) => `/end-of-tenancy-cleaning/${slug}`;
