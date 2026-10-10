import Link from "next/link";
import { areaPages } from "@/lib/area-pages";
import { label, serif, stoneBg, ink } from "@/components/editorial";

/** Editorial FAQ list for the area pages (structured data is added by the page). */
export function AreaFaq({ heading, items }: { heading: string; items: { question: string; answer: string }[] }) {
  return (
    <section className="mx-auto max-w-4xl px-5 py-16 sm:px-6 md:py-24 lg:px-10">
      <p className={`${label} text-brand-700`}>Questions</p>
      <h2 className={`${serif} ${ink} mt-4 text-[2.1rem] leading-[1.1] md:text-[3rem]`}>{heading}</h2>
      <div className="mt-8 divide-y divide-[#0E1E26]/10 border-y border-[#0E1E26]/10">
        {items.map((f) => (
          <details key={f.question} className="group py-5">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-medium text-[#0E1E26]">
              {f.question}
              <span aria-hidden className="text-2xl leading-none text-brand-700 transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 max-w-3xl leading-relaxed text-ink-700">{f.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

/**
 * "Areas we cover" link grid. Used on the service hub pages and at the foot
 * of each area page (with the current area left out).
 */
export function AreaLinks({
  service,
  current,
  heading = "Areas we cover",
}: {
  service: "office" | "eot";
  current?: string;
  heading?: string;
}) {
  const base = service === "office" ? "/office-cleaning" : "/end-of-tenancy-cleaning";
  const what = service === "office" ? "Office cleaning" : "End of tenancy cleaning";
  return (
    <section className={`${stoneBg} py-16 md:py-24`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <p className={`${label} text-brand-700`}>Where we clean</p>
        <h2 className={`${serif} ${ink} mt-4 text-[2.1rem] leading-[1.1] md:text-[3rem]`}>{heading}</h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {areaPages
            .filter((a) => a.slug !== current)
            .map((a) => (
              <Link key={a.slug} href={`${base}/${a.slug}`} className="group bg-white p-5 ring-1 ring-[#0E1E26]/10 transition hover:bg-[#F4F1EB]">
                <span className={`${label} text-brand-700`}>{what}</span>
                <span className={`${serif} ${ink} mt-2 block text-xl`}>{a.name}</span>
                <span className="mt-1 block text-sm text-ink-700">{a.examples.slice(0, 3).join(", ")}</span>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
