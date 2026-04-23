import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesOverview from "@/components/ServicesOverview";
import WhyChooseUs from "@/components/WhyChooseUs";
import AreasCovered from "@/components/AreasCovered";
import HowItWorks from "@/components/HowItWorks";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import StructuredData from "@/components/StructuredData";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import { getFAQs } from "@/lib/faqs";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: `${site.name} — Professional Cleaning Across London`,
  description:
    "Professional end of tenancy, deep, after-build, domestic and office cleaning across London. Trained, insured team, per-property pricing and real five-star Google reviews.",
  path: "/",
  suffix: false,
});

export default function HomePage() {
  const homeFaqs = getFAQs("home");

  return (
    <>
      <StructuredData data={faqJsonLd(homeFaqs)} />

      <Hero
        eyebrow="London cleaning specialists"
        heading="Professional cleaning, done properly — first time."
        subheading="End of tenancy, deep, after-build, domestic and office cleaning across London. Trained, insured team, clear per-property pricing, and genuine five-star reviews from real London customers."
        trustChips={[
          "Real five-star Google reviews",
          "Trained, insured team",
          "London-focused coverage",
          "Quotes reviewed before confirmed",
        ]}
      />

      <TrustBar />

      <ServicesOverview />

      <WhyChooseUs />

      <AreasCovered />

      <HowItWorks />

      <Reviews />

      <FAQ
        items={homeFaqs}
        heading="Quick answers before you book"
        intro="A few of the questions we get asked most. If your question isn't here, drop us a message — we'll answer honestly."
        tone="muted"
      />

      <CTASection
        heading="Book a clean you'll actually be happy with"
        body={`Tell us about the property and we'll come back quickly with a fair, per-property quote. Bookings are reviewed and confirmed by our team — you're never auto-charged or locked in without agreement.`}
      />
    </>
  );
}
