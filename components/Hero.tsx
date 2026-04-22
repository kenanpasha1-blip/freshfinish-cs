import Image from "next/image";
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
  /** Hero image (defaults to the homepage image). */
  image?: { src: string; alt: string };
};

export default function Hero({
  eyebrow = "London cleaning specialists",
  heading,
  subheading,
  primaryCta = { href: "/contact", label: "Request a Quote" },
  secondaryCta,
  trustChips,
  image = {
    src: "/images/hero/hero-pro-cleaner.jpg",
    alt: "A professional Fresh Finish cleaner in uniform wiping a wooden table with a microfiber cloth",
  },
}: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface-0 to-surface-50">
      {/* Soft brand-coloured decorative shapes */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-accent-200/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-14 pb-16 md:pt-20 md:pb-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 items-center">
          <div>
            {eyebrow && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold tracking-wide uppercase">
                <Icon name="map-pin" size={14} />
                {eyebrow}
              </div>
            )}
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-brand-900 leading-[1.05]">
              {heading}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-ink-700 leading-relaxed max-w-xl">
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

          {/* Hero image card */}
          <div className="relative">
            <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-brand-900/20 ring-1 ring-brand-900/5">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
              {/* Subtle brand-coloured overlay to tie image into palette */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-tr from-brand-900/10 via-transparent to-accent-500/10"
              />
            </div>

            {/* Floating satisfaction badge */}
            <div className="absolute -bottom-5 left-4 right-4 sm:left-auto sm:-bottom-6 sm:-left-6 sm:right-auto sm:max-w-xs bg-white rounded-2xl shadow-lg shadow-brand-900/10 border border-surface-100 p-4 flex items-start gap-3">
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-accent-500/10 text-accent-600">
                <Icon name="shield-check" size={22} />
              </span>
              <div>
                <p className="text-sm font-semibold text-brand-900">
                  48-hour return policy
                </p>
                <p className="text-xs text-ink-500 mt-0.5 leading-relaxed">
                  If anything's missed, we come back and put it right.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
