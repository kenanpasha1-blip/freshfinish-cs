import type { Metadata } from "next";
import { site } from "./site";

type BuildMetaArgs = {
  title: string;
  description: string;
  path: string; // starting with "/"
  /** If true, append "| Fresh Finish Cleaning Solutions". Set false for the homepage. */
  suffix?: boolean;
  image?: string;
};

/** Build consistent Next.js Metadata for a page. */
export function buildMetadata({
  title,
  description,
  path,
  suffix = true,
  image = "/og-default.jpg",
}: BuildMetaArgs): Metadata {
  const fullTitle = suffix ? `${title} | ${site.name}` : title;
  const url = `${site.url}${path}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: site.locale,
      url,
      siteName: site.name,
      title: fullTitle,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
  };
}

/** LocalBusiness / CleaningService JSON-LD. Renders via <StructuredData/>. */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "CleaningService"],
    "@id": `${site.url}/#business`,
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.contact.phoneE164,
    email: site.contact.email,
    image: `${site.url}/og-default.jpg`,
    logo: `${site.url}/logo.svg`,
    priceRange: "££",
    areaServed: [
      ...site.primaryAreas.map((name) => ({ "@type": "City", name })),
      {
        "@type": "AdministrativeArea",
        name: "Hertfordshire (selected areas)",
      },
      { "@type": "AdministrativeArea", name: "Essex (selected areas)" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      addressCountry: "GB",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: site.hours.opens,
        closes: site.hours.closes,
      },
    ],
    sameAs: [site.contact.instagramUrl],
  };
}

export function serviceJsonLd(args: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: args.name,
    description: args.description,
    url: args.url,
    serviceType: args.serviceType || "Cleaning service",
    provider: {
      "@type": "LocalBusiness",
      "@id": `${site.url}/#business`,
      name: site.name,
      url: site.url,
      telephone: site.contact.phoneE164,
    },
    areaServed: site.primaryAreas.map((name) => ({ "@type": "City", name })),
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.question,
      acceptedAnswer: { "@type": "Answer", text: i.answer },
    })),
  };
}

export function breadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
