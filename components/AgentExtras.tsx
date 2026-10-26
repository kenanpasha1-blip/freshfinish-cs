"use client";

import { usePathname } from "next/navigation";
import Section from "./Section";
import { agentPage } from "@/lib/seo-agent-content";

/**
 * Extra sections and questions the SEO agent has added to this page. Rendered
 * from the layout so every page picks them up; it still renders on the server,
 * so Google reads it like the rest of the page.
 */
export default function AgentExtras() {
  const page = agentPage(usePathname() || "/");
  const sections = page?.sections ?? [];
  const faqs = page?.faqs ?? [];
  if (!sections.length && !faqs.length) return null;
  return (
    <Section>
      <div className="max-w-3xl space-y-10">
        {sections.map((s) => (
          <div key={s.heading}>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-900">{s.heading}</h2>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-ink-700">
              {s.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        ))}
        {faqs.length ? (
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-900">More questions</h2>
            <dl className="mt-4 space-y-5">
              {faqs.map((f) => (
                <div key={f.question}>
                  <dt className="font-semibold text-brand-900">{f.question}</dt>
                  <dd className="mt-1 text-ink-700 leading-relaxed">{f.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        ) : null}
      </div>
    </Section>
  );
}
