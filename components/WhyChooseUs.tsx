import Icon, { type IconName } from "./Icon";
import Section from "./Section";

const points: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "shield-check",
    title: "48-hour return policy",
    body: "If anything's been missed or isn't up to standard, tell us within 48 hours of the clean and we'll come back and put it right — no arguing, no back-and-forth.",
  },
  {
    icon: "star",
    title: "Real customer feedback",
    body: "We've earned genuine five-star reviews on Google from real customers in London. Reputation is built one clean at a time, and we protect it carefully.",
  },
  {
    icon: "check",
    title: "Priced per property, not per hour",
    body: "For end of tenancy cleans, you pay for the outcome — a check-out-ready property — not the clock. No meters running, no surprise extras at the end.",
  },
  {
    icon: "map-pin",
    title: "London specialists",
    body: "We focus on London first. That means we know the stock — ex-council flats, period conversions, new-builds — and we know what different letting agents look for.",
  },
  {
    icon: "clock",
    title: "Reliable, on time",
    body: "When we say we'll be there at 9am, we're there at 9am. Cleaning companies that turn up late cost tenants deposits — we treat your time like it matters, because it does.",
  },
  {
    icon: "phone",
    title: "Easy to reach, quick to reply",
    body: "Phone, email or WhatsApp — whichever's easiest. We aim to come back with a quote quickly so you can plan move-out day with confidence.",
  },
];

export default function WhyChooseUs() {
  return (
    <Section id="why-us">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
          Why Fresh Finish
        </p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-brand-900">
          A professional standard, backed by a real return policy
        </h2>
        <p className="mt-4 text-lg text-ink-700">
          You shouldn't have to trust a stranger with your home and hope for
          the best. Here's why people in London book us, and why letting agents
          recommend us.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {points.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl bg-white border border-surface-200 p-6"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10 text-accent-600">
              <Icon name={p.icon} size={20} />
            </span>
            <h3 className="mt-4 text-lg font-semibold text-brand-900">
              {p.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-700">
              {p.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
