import Icon, { type IconName } from "./Icon";

const items: { icon: IconName; label: string; sub: string }[] = [
  {
    icon: "shield-check",
    label: "Fully insured",
    sub: "Certificates available on request",
  },
  {
    icon: "check",
    label: "DBS-checked staff",
    sub: "For schools and sensitive sites",
  },
  {
    icon: "clock",
    label: "Every visit logged",
    sub: "Checked in and out on site",
  },
  {
    icon: "star",
    label: "Five-star Google reviews",
    sub: "From real London clients",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-white border-y border-surface-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-start gap-3 text-sm"
          >
            <span className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-brand-50 text-brand-700">
              <Icon name={item.icon} size={18} />
            </span>
            <span>
              <span className="block font-semibold text-brand-900">
                {item.label}
              </span>
              <span className="block text-ink-500 text-xs">{item.sub}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
