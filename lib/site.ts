/**
 * Central site configuration. Edit here and every page picks it up.
 */

export const site = {
  name: "Fresh Finish Cleaning Solutions",
  shortName: "Fresh Finish",
  legalName: "Fresh Finish Cleaning Solutions",
  tagline: "Professional cleaning across London and the Home Counties",
  description:
    "Fresh Finish Cleaning Solutions delivers professional commercial cleaning across London, office and school contract cleaning, communal and end of tenancy cleaning, with selected coverage in Hertfordshire and Essex. Trained, insured team, photo proof on every visit and real five-star Google reviews.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.freshfinish-cs.co.uk",
  locale: "en_GB",

  contact: {
    phone: "02039274499",
    phoneDisplay: "020 3927 4499",
    phoneE164: "+442039274499",
    email: "info@freshfinish-cs.co.uk",
    // Username is reserved but WhatsApp hasn't activated it yet ("coming soon").
    // Once it's live, switch whatsappUrl to https://wa.me/freshfinishcleaningsolutions
    whatsappUsername: "freshfinishcleaningsolutions",
    whatsappUrl: "https://wa.me/447961860128",
    instagramHandle: "freshfinishcleaningsolutions",
    instagramUrl: "https://www.instagram.com/freshfinishcleaningsolutions/",
  },

  /** Primary SEO focus areas, highest priority first. */
  primaryAreas: [
    "North London",
    "North West London",
    "Central London",
    "East London",
    "North East London",
    "West London",
  ],

  /** Broader coverage — mentioned but not the primary SEO target. */
  wider: ["Selected parts of Hertfordshire", "Selected parts of Essex"],

  hours: {
    display: "Monday to Sunday, 8am – 7pm",
    days: "Mo-Su",
    opens: "08:00",
    closes: "19:00",
  },

  /** Public-facing trust claims — keep truthful. */
  trust: {
    returnWindowHours: 48,
    googleReviewCount: 5, // real count at time of build
  },
} as const;

export type Site = typeof site;
