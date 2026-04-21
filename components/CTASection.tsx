import Button from "./Button";
import Icon from "./Icon";
import { site } from "@/lib/site";

type Props = {
  heading?: string;
  body?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
};

export default function CTASection({
  heading = "Ready for a fresh finish?",
  body = "Tell us about the property and we'll come back with a quote quickly. All bookings are reviewed and confirmed before they're final — no automatic charges, no surprises.",
  primary = { href: "/contact", label: "Request a Quote" },
  secondary,
}: Props) {
  return (
    <section className="bg-gradient-to-br from-brand-700 to-brand-900 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold max-w-2xl mx-auto leading-tight">
          {heading}
        </h2>
        <p className="mt-5 text-brand-100 text-lg max-w-2xl mx-auto leading-relaxed">
          {body}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href={primary.href} size="lg" className="!bg-white !text-brand-800 hover:!bg-brand-50">
            {primary.label}
            <Icon name="arrow-right" size={16} />
          </Button>
          {secondary ? (
            <Button
              href={secondary.href}
              variant="secondary"
              size="lg"
              className="!bg-transparent !text-white !border-brand-400 hover:!bg-brand-800"
            >
              {secondary.label}
            </Button>
          ) : (
            <>
              <Button
                href={`tel:${site.contact.phoneE164}`}
                variant="secondary"
                size="lg"
                className="!bg-transparent !text-white !border-brand-400 hover:!bg-brand-800"
              >
                <Icon name="phone" size={16} />
                Call {site.contact.phoneDisplay}
              </Button>
              <Button
                href={`https://wa.me/${site.contact.whatsappE164}`}
                variant="whatsapp"
                size="lg"
              >
                <Icon name="whatsapp" size={16} />
                WhatsApp Us
              </Button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
