/**
 * FAQ content. Each FAQ belongs to one or more "collections".
 * The homepage pulls `home`, the money page pulls `eot`, etc.
 */

export type FAQ = {
  question: string;
  answer: string;
  collections: FAQCollection[];
};

export type FAQCollection =
  | "home"
  | "eot"
  | "prices"
  | "includes"
  | "checklist"
  | "duration"
  | "office"
  | "school";

export const faqs: FAQ[] = [
  {
    question: "Are bookings confirmed immediately when I enquire?",
    answer:
      "No. Every enquiry is reviewed before a booking is confirmed. We'll get back to you quickly to discuss the property, agree a price and lock in the date. This keeps your quote accurate and avoids double-booked slots.",
    collections: ["home", "eot"],
  },
  {
    question: "What if I'm not happy with the clean?",
    answer:
      "If something's been missed or isn't up to standard, tell us within 48 hours of the clean and we'll return to put it right. We want you, your landlord or your letting agent fully satisfied. That's the entire point of the policy.",
    collections: ["home", "eot"],
  },
  {
    question: "Which areas of London do you cover?",
    answer:
      "We cover North, North West, Central, East, North East and West London as our primary service areas. We also take bookings in selected parts of Hertfordshire and Essex, so get in touch with your postcode and we'll confirm.",
    collections: ["home", "eot"],
  },
  {
    question: "Do you bring your own cleaning products and equipment?",
    answer:
      "Yes. Our team brings professional-grade products and equipment as standard. If you'd prefer we use specific products you already have at the property, let us know in advance.",
    collections: ["home", "eot", "includes"],
  },
  {
    question: "How far in advance should I book?",
    answer:
      "The earlier the better, particularly for end of tenancy cleans at month-end when agents and tenants are moving in large numbers. We'll always try to accommodate short-notice bookings where we can.",
    collections: ["home", "eot"],
  },
  {
    question: "Is end of tenancy cleaning the same as a deep clean?",
    answer:
      "They overlap, but they're not identical. An end of tenancy clean is designed specifically around inventory and check-out standards: appliances inside and out, limescale, skirtings, inside cupboards, marks on walls. A deep clean is broader and often used by people who are staying in the property.",
    collections: ["eot", "includes"],
  },
  {
    question: "Will the cleaners move furniture?",
    answer:
      "We clean around and where reasonable underneath furniture. We don't move heavy items such as wardrobes, sofas or beds (for safety and to avoid damage) but we'll always clean accessible surfaces thoroughly.",
    collections: ["eot", "includes"],
  },
  {
    question: "Do you clean carpets and upholstery?",
    answer:
      "A standard end of tenancy clean includes vacuuming of carpets. Carpet shampooing or steam cleaning is a specialist add-on. If your tenancy agreement requires professionally cleaned carpets, mention it when you enquire and we'll quote accordingly.",
    collections: ["eot", "includes", "checklist"],
  },
  {
    question: "Do you clean the oven?",
    answer:
      "Yes, a proper oven clean is a standard part of our end of tenancy service. Racks, trays, door glass, interior and exterior are all cleaned thoroughly, because the oven is one of the most common check-out failure points.",
    collections: ["eot", "includes", "checklist"],
  },
  {
    question: "Can you work to the letting agent's inventory checklist?",
    answer:
      "Yes. If your agent has sent a check-out or inventory checklist, forward it when you enquire and we'll work to it so you have the best chance of your full deposit back.",
    collections: ["eot", "includes", "checklist"],
  },
  {
    question: "How much does end of tenancy cleaning cost in London?",
    answer:
      "Price depends on property size, how lived-in it is, and any extras such as carpet cleaning or interior windows. We quote per property rather than per hour so you know the total up front. Share a few details through our enquiry form for an accurate price.",
    collections: ["prices"],
  },
  {
    question: "Why do end of tenancy quotes vary so much?",
    answer:
      "Size is the biggest factor, but condition matters almost as much. A well-kept studio is much quicker than a lived-in three-bed. Honest quoting protects everyone: a rock-bottom headline price can mean a rushed clean and a failed check-out.",
    collections: ["prices"],
  },
  {
    question: "Do you price by the hour or by the property?",
    answer:
      "End of tenancy cleaning is priced per property so the outcome (a check-out-ready clean) is what you're paying for, not the clock. For regular domestic or office cleaning we can quote hourly or per visit depending on what you prefer.",
    collections: ["prices"],
  },
  {
    question: "How long does an end of tenancy clean take?",
    answer:
      "Rough guide: a studio or one-bed typically takes 3 to 5 hours, a two-bed 4 to 6 hours, and a three-bed 6 to 8+ hours. Heavier jobs, extras such as carpet shampooing, and limescale-heavy bathrooms can push that longer.",
    collections: ["eot", "duration"],
  },
  {
    question: "Can you do same-day end of tenancy cleans?",
    answer:
      "Sometimes, depending on availability and how busy the day is. Weekends and end-of-month are usually our busiest periods, so book ahead where you can. Contact us with your postcode and preferred date and we'll confirm quickly.",
    collections: ["duration", "eot"],
  },
  {
    question: "Do you clean offices outside working hours?",
    answer:
      "Yes. Most office and commercial cleaning is done early mornings, evenings or over the weekend so your team walks into a clean workspace without disruption. We agree the schedule around your hours.",
    collections: ["office", "home"],
  },
  {
    question: "Can we see that each office clean has actually been done?",
    answer:
      "Yes. Every visit is photographed and logged in your own portal, so managing agents and facilities managers can see the standard on every visit without chasing. Anything you flag is put right on the very next clean.",
    collections: ["office"],
  },
  {
    question: "Do you take on regular office cleaning contracts?",
    answer:
      "Yes: daily, several times a week, weekly or fortnightly. We work with managing agents, facilities managers and businesses across London on ongoing contracts, and we're happy to cover single-site or multi-site.",
    collections: ["office"],
  },
  {
    question: "Do you already clean schools?",
    answer:
      "Yes. We hold an ongoing school cleaning contract, so we understand how education sites need to be cleaned, and how to work safely and discreetly around pupils and staff.",
    collections: ["school", "home"],
  },
  {
    question: "Are your staff suitable to work on school sites?",
    answer:
      "We are fully insured and our staff on school sites are DBS-checked, and we work to the safeguarding expectations schools have for any contractor on site. We can share our insurance and vetting details on request.",
    collections: ["school"],
  },
  {
    question: "Can you clean around the school day and during holidays?",
    answer:
      "Yes. We schedule daily cleaning around the school day and can carry out larger deep cleans during half-terms and holidays. We build the schedule around your timetable and site access.",
    collections: ["school"],
  },
];

export const getFAQs = (collection: FAQCollection) =>
  faqs.filter((f) => f.collections.includes(collection));
