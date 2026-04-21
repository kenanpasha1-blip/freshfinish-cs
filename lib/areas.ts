/**
 * Service areas. Flagged into "primary" (main SEO targets) and "wider"
 * (mentioned for coverage messaging but not the current SEO focus).
 *
 * Add borough-level entries here later when building /areas/... pages.
 */

export type Area = {
  slug: string;
  name: string;
  tier: "primary" | "wider";
  /** Example postcodes or boroughs we cover within this area. */
  examples: string[];
};

export const areas: Area[] = [
  {
    slug: "north-london",
    name: "North London",
    tier: "primary",
    examples: [
      "Islington",
      "Camden",
      "Highgate",
      "Finchley",
      "Muswell Hill",
      "Crouch End",
    ],
  },
  {
    slug: "north-west-london",
    name: "North West London",
    tier: "primary",
    examples: [
      "Hampstead",
      "St John's Wood",
      "Kilburn",
      "Willesden",
      "Wembley",
      "Harrow",
    ],
  },
  {
    slug: "central-london",
    name: "Central London",
    tier: "primary",
    examples: ["Marylebone", "Fitzrovia", "Soho", "Westminster", "Mayfair"],
  },
  {
    slug: "east-london",
    name: "East London",
    tier: "primary",
    examples: ["Shoreditch", "Hackney", "Bethnal Green", "Bow", "Canary Wharf"],
  },
  {
    slug: "north-east-london",
    name: "North East London",
    tier: "primary",
    examples: [
      "Stoke Newington",
      "Dalston",
      "Walthamstow",
      "Leyton",
      "Tottenham",
    ],
  },
  {
    slug: "west-london",
    name: "West London",
    tier: "primary",
    examples: [
      "Notting Hill",
      "Kensington",
      "Chiswick",
      "Ealing",
      "Shepherd's Bush",
    ],
  },
  {
    slug: "hertfordshire",
    name: "Hertfordshire",
    tier: "wider",
    examples: [
      "Borehamwood",
      "Watford",
      "St Albans",
      "Potters Bar",
      "Hatfield",
    ],
  },
  {
    slug: "essex",
    name: "Essex",
    tier: "wider",
    examples: ["Loughton", "Chigwell", "Romford", "Ilford", "Epping"],
  },
];

export const primaryAreas = areas.filter((a) => a.tier === "primary");
export const widerAreas = areas.filter((a) => a.tier === "wider");
