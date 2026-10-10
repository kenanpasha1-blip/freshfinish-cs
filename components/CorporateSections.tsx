import Button from "./Button";
import Icon from "./Icon";
import Section from "./Section";

/**
 * Sections aimed at facilities managers and procurement buyers: how the
 * standard is kept, how switching supplier works, and who does the work.
 * Every claim here reflects how Fresh Finish actually operates. Keep it true.
 */

const standards = [
  {
    t: "A named account manager",
    b: "Your contract is run by one person who knows your site, picks up the phone and answers for the standard.",
  },
  {
    t: "Every visit logged on site",
    b: "Cleaners check in and out on site, so every visit is time-stamped and located. No guessing whether anyone turned up.",
  },
  {
    t: "Photo report after every clean",
    b: "Before-and-after photos land in your own client portal after each visit, ready to share with your team or clients.",
  },
  {
    t: "Issues fixed within 48 hours",
    b: "If anything falls short, tell us and we are back within 48 hours to put it right, with photos to prove it.",
  },
];

export function StandardsSection() {
  return (
    <Section tone="dark" id="standards">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-300">
            How we keep standards
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">
            You never have to wonder if the cleaning was done
          </h2>
          <p className="mt-4 text-lg text-white/75 leading-relaxed">
            Most contractors ask you to take it on trust. We give facilities
            managers the evidence, visit by visit, so you can report on it
            instead of chasing it.
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/office/office-cleaning.jpg"
            alt="A cleaner sanitising an office desk"
            loading="lazy"
            className="mt-8 w-full rounded-2xl object-cover aspect-[16/10] ring-1 ring-white/10"
          />
        </div>
        <ol className="space-y-4">
          {standards.map((s, i) => (
            <li
              key={s.t}
              className="flex gap-5 rounded-2xl bg-white/[0.06] p-6 ring-1 ring-white/10"
            >
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-accent-500 text-sm font-bold text-brand-900">
                {i + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white">{s.t}</h3>
                <p className="mt-1 text-sm leading-relaxed text-white/75">{s.b}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

const steps = [
  {
    t: "Free site survey",
    b: "We visit, walk the site with you and understand how it is used.",
  },
  {
    t: "Written specification",
    b: "Every area, task and frequency written down, with a clear fixed price.",
  },
  {
    t: "Team vetted and briefed",
    b: "A consistent, DBS-checked team trained on your site before day one.",
  },
  {
    t: "First-week checks",
    b: "Your account manager checks the first week personally and fixes anything fast.",
  },
  {
    t: "Ongoing reporting",
    b: "Photo reports every visit and a regular review of the standard with you.",
  },
];

export function SwitchingSection() {
  return (
    <Section tone="muted" id="switching">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
          Switching to us
        </p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-brand-900">
          Changing cleaning contractor, without the disruption
        </h2>
        <p className="mt-4 text-lg text-ink-700">
          A clear, managed handover so your building never notices the change,
          only the difference.
        </p>
      </div>

      <ol className="mt-12 grid gap-5 md:grid-cols-5">
        {steps.map((s, i) => (
          <li key={s.t} className="relative rounded-2xl bg-white p-6 ring-1 ring-surface-200">
            <span className="text-4xl font-bold text-brand-100">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-base font-semibold text-brand-900">{s.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-700">{s.b}</p>
          </li>
        ))}
      </ol>

      <div className="mt-10">
        <Button href="/contact" size="lg">
          Book a free site survey <Icon name="arrow-right" size={16} />
        </Button>
      </div>
    </Section>
  );
}

const people = [
  { k: "10+", v: "Vetted cleaners on the team" },
  { k: "DBS", v: "Checked teams for schools and sensitive sites" },
  { k: "48h", v: "Put-it-right guarantee on every clean" },
  { k: "1", v: "Named account manager for every contract" },
];

export function PeopleBand() {
  return (
    <section className="border-y border-surface-200 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        {people.map((p) => (
          <div key={p.v}>
            <div className="text-4xl font-bold tracking-tight text-brand-900">{p.k}</div>
            <div className="mt-1 text-sm text-ink-500">{p.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
