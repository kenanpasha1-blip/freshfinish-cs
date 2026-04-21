import Button from "./Button";
import Icon from "./Icon";
import { site } from "@/lib/site";

type Props = {
  eyebrow?: string;
  heading: string;
  subheading: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  trustChips?: string[];
};

export default function Hero({
  eyebrow = "London cleaning specialists",
  heading,
  subheading,
  primaryCta = { href: "/contact", label: "Request a Quote" },
  secondaryCta,
  trustChips,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface-0 to-surface-50">
      {/* Soft decorative shapes */}
      <div
        aria-hidden
        className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-accent-300/30 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-brand-300/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="max-w-3xl">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-800 text-xs font-semibold tracking-wide uppercase">
              <Icon name="map-pin" size={14} />
              {eyebrow}
            </div>
          )}
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-brand-900 leading-[1.05]">
            {heading}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-ink-700 leading-relaxed max-w-2xl">
            {subheading}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={primaryCta.href} size="lg">
              {primaryCta.label}
              <Icon name="arrow-right" size={16} />
            </Button>
            {secondaryCta ? (
              <Button href={secondaryCta.href} variant="secondary" size="lg">
                {secondaryCta.label}
              </Button>
            ) : (
              <Button
                href={`tel:${site.contact.phoneE164}`}
                variant="secondary"
                size="lg"
              >
                <Icon name="phone" size={16} />
                Call {site.contact.phoneDisplay}
              </Button>
            )}
          </div>

          {trustChips && trustChips.length > 0 && (
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-700">
              {trustChips.map((chip) => (
                <li key={chip} className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent-500/15 text-accent-600">
                    <Icon name="check" size={12} />
                  </span>
                  {chip}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
