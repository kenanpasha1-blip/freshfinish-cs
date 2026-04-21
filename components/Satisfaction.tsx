import Button from "./Button";
import Icon from "./Icon";
import { site } from "@/lib/site";

export default function Satisfaction() {
  return (
    <section className="bg-brand-900 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 grid gap-10 md:grid-cols-[1.2fr_1fr] items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-400">
            Our satisfaction promise
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
            If it's not right, we come back within {site.trust.returnWindowHours} hours.
          </h2>
          <p className="mt-5 text-brand-100 text-lg leading-relaxed">
            We take pride in every clean, but we're realistic — very
            occasionally something gets missed. If you, your landlord or your
            letting agent spots anything that isn't up to standard, let us
            know within {site.trust.returnWindowHours} hours of the clean and
            we'll return to put it right. No quibbling, no added charges.
          </p>
          <p className="mt-4 text-brand-200 text-sm">
            We put this in writing so tenants, landlords and agents all know
            where they stand — and so you can trust the final result.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/contact" size="lg">
              Request a Quote
              <Icon name="arrow-right" size={16} />
            </Button>
            <Button
              href={`tel:${site.contact.phoneE164}`}
              variant="secondary"
              size="lg"
              className="!bg-transparent !text-white !border-brand-400 hover:!bg-brand-800"
            >
              <Icon name="phone" size={16} />
              Call {site.contact.phoneDisplay}
            </Button>
          </div>
        </div>

        <div className="rounded-2xl bg-brand-800/60 border border-brand-700 p-6">
          <ul className="space-y-4 text-sm">
            {[
              "Clear, per-property quotes — no hourly surprises",
              "Every booking reviewed before it's confirmed",
              `${site.trust.returnWindowHours}-hour return if anything's missed`,
              "Real before-and-afters on Instagram",
              "Transparent communication by phone, email or WhatsApp",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-accent-500/20 text-accent-400">
                  <Icon name="check" size={14} />
                </span>
                <span className="text-brand-100">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
