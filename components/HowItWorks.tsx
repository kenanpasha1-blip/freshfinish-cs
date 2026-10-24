import Section from "./Section";

const steps = [
  {
    n: "01",
    title: "Tell us about the property",
    body: "Send a few details: size, postcode, preferred date, any extras. Takes about a minute through our form, or tell us over the phone or WhatsApp.",
  },
  {
    n: "02",
    title: "We review and confirm",
    body: "We look over your enquiry, check availability for your date and come back with a per-property quote. Nothing is booked until we both agree.",
  },
  {
    n: "03",
    title: "Our team arrives on the day",
    body: "We turn up on time with professional products and equipment, and work through the property to a proper cleaning standard, start to finish.",
  },
  {
    n: "04",
    title: "Final walk-through before we leave",
    body: "We walk the property with you, your landlord or your agent to make sure everything's been done properly before we call the job finished.",
  },
];

export default function HowItWorks() {
  return (
    <Section id="how-it-works">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
          How it works
        </p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-brand-900">
          From enquiry to spotless, in four simple steps
        </h2>
        <p className="mt-4 text-lg text-ink-700">
          Booking shouldn't feel complicated. Here's exactly what happens after
          you reach out.
        </p>
      </div>

      <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <li
            key={s.n}
            className="relative rounded-2xl bg-white border border-surface-200 p-6"
          >
            <span className="text-5xl font-bold text-brand-100 leading-none">
              {s.n}
            </span>
            <h3 className="mt-3 text-lg font-semibold text-brand-900">
              {s.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-700">
              {s.body}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
