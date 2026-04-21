/**
 * Services data. The `slug` of a service that has a dedicated page
 * should match the folder in /app. Services without a dedicated page
 * yet still render in overview grids with an enquiry CTA.
 */

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  /** One-line tagline used on cards. */
  blurb: string;
  /** Longer description for service page intros. */
  description: string;
  /** Does a full page exist at /{slug}? */
  hasPage: boolean;
  /** Lucide-style icon name, if we later plug in an icon set. */
  icon: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "end-of-tenancy-cleaning-london",
    name: "End of Tenancy Cleaning",
    shortName: "End of Tenancy",
    blurb:
      "Deposit-ready moves for tenants, landlords and letting agents across London.",
    description:
      "A thorough top-to-bottom clean designed to meet letting-agent and landlord inventory standards, so you move out with the best chance of your full deposit back.",
    hasPage: true,
    icon: "key",
    featured: true,
  },
  {
    slug: "deep-cleaning",
    name: "Deep Cleaning",
    shortName: "Deep Clean",
    blurb:
      "A full reset for homes that need more than a regular clean — kitchens, bathrooms and every corner.",
    description:
      "Ideal before a new tenant moves in, after a long period without a proper clean, or whenever your home needs a proper reset.",
    hasPage: false,
    icon: "sparkles",
  },
  {
    slug: "after-build-cleaning",
    name: "After Build / Builders Cleaning",
    shortName: "After Build",
    blurb:
      "Dust, debris and residue removal after renovations, refurbs and new builds.",
    description:
      "Post-construction cleaning for homes, flats and small commercial spaces, clearing fine dust from every surface so the space is ready to use.",
    hasPage: false,
    icon: "hard-hat",
  },
  {
    slug: "domestic-cleaning",
    name: "General Domestic Cleaning",
    shortName: "Domestic",
    blurb:
      "One-off or regular home cleaning by a team you can trust in your space.",
    description:
      "Weekly, fortnightly or one-off cleans tailored to the way you live, from single occupants to busy family homes.",
    hasPage: false,
    icon: "home",
  },
  {
    slug: "office-cleaning",
    name: "Office Cleaning",
    shortName: "Office",
    blurb:
      "Dependable commercial cleaning for small offices and workspaces in London.",
    description:
      "Scheduled cleaning that keeps your workspace presentable for staff and clients, with flexible timing around your working hours.",
    hasPage: false,
    icon: "briefcase",
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
