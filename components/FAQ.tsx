import Icon from "./Icon";
import Section from "./Section";

export type FAQItem = { question: string; answer: string };

type Props = {
  items: FAQItem[];
  heading?: string;
  intro?: string;
  tone?: "default" | "muted";
  /** Container id for anchor linking. */
  id?: string;
};

export default function FAQ({
  items,
  heading = "Frequently asked questions",
  intro,
  tone = "default",
  id = "faq",
}: Props) {
  return (
    <Section tone={tone} id={id}>
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
          FAQs
        </p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-brand-900">
          {heading}
        </h2>
        {intro && <p className="mt-4 text-lg text-ink-700">{intro}</p>}
      </div>

      <div className="mt-10 divide-y divide-surface-200 border-y border-surface-200 bg-white rounded-2xl overflow-hidden">
        {items.map((item, i) => (
          <details
            key={i}
            className="group"
          >
            <summary className="flex items-start justify-between gap-4 p-5 md:p-6 cursor-pointer list-none hover:bg-surface-50">
              <h3 className="text-base md:text-lg font-semibold text-brand-900">
                {item.question}
              </h3>
              <span className="mt-1 text-brand-700 transition-transform group-open:rotate-180">
                <Icon name="chevron-down" size={20} />
              </span>
            </summary>
            <div className="px-5 md:px-6 pb-6 text-ink-700 leading-relaxed max-w-3xl">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </Section>
  );
}
