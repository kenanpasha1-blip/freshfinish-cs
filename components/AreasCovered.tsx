import Icon from "./Icon";
import Section from "./Section";
import { primaryAreas, widerAreas } from "@/lib/areas";

type Props = {
  /** Override the heading, e.g. for the money page. */
  heading?: string;
  /** Override the intro paragraph. */
  intro?: string;
};

export default function AreasCovered({ heading, intro }: Props) {
  return (
    <Section tone="muted" id="areas">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
          Where we clean
        </p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-brand-900">
          {heading || "London-focused coverage, with selected Home Counties"}
        </h2>
        <p className="mt-4 text-lg text-ink-700">
          {intro ||
            "London is our primary service area. We cover every major part of the capital, and we also take bookings in selected parts of Hertfordshire and Essex."}
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {primaryAreas.map((a) => (
          <div
            key={a.slug}
            className="rounded-2xl bg-white border border-surface-200 p-6"
          >
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                <Icon name="map-pin" size={18} />
              </span>
              <h3 className="font-semibold text-brand-900">{a.name}</h3>
            </div>
            <p className="mt-4 text-sm text-ink-700 leading-relaxed">
              {a.examples.slice(0, 4).join(", ")} and surrounding areas.
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl bg-brand-50 border border-brand-200 p-6">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg bg-white text-brand-700">
            <Icon name="map-pin" size={18} />
          </span>
          <div>
            <h3 className="font-semibold text-brand-900">
              Also covering selected parts of Hertfordshire and Essex
            </h3>
            <p className="mt-2 text-sm text-ink-700 leading-relaxed">
              {widerAreas
                .flatMap((a) => a.examples.slice(0, 3))
                .join(", ")}{" "}
              and more. Send us your postcode and we'll confirm we cover it.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
