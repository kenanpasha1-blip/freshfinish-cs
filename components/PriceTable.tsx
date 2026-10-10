import { confirmAfterVisit, extras, sizes, whiteGoodsIncludes } from "@/lib/prices";

const serif = "font-display font-light tracking-[-0.015em]";
const label = "text-[11px] font-semibold uppercase tracking-[0.22em]";

function cell(v: number | null | "quote") {
  if (v === null) return <span className="text-sm text-[#0E1E26]/30">n/a</span>;
  if (v === "quote") return <span className={`${serif} italic text-xl text-brand-700`}>Quoted</span>;
  return <span className={`${serif} text-2xl text-[#0E1E26] md:text-[1.7rem]`}>£{v}</span>;
}

/** The end of tenancy price list, rendered from lib/prices so it always matches the calculator. */
export default function PriceTable() {
  const extraRows: [string, string | null, number][] = [
    ["White goods deep clean", whiteGoodsIncludes, extras.whiteGoods],
    ["Carpet deep clean", "Per room", extras.carpetPerRoom],
    ["Extra bathroom", "One is included in every price", extras.extraBathroom],
  ];

  return (
    <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
      <div>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b-2 border-[#0E1E26]">
              <th className={`${label} pb-3 text-left text-brand-700`}>Property size</th>
              <th className={`${label} w-28 pb-3 text-right text-brand-700 md:w-36`}>Flat, from</th>
              <th className={`${label} w-28 pb-3 text-right text-brand-700 md:w-36`}>House, from</th>
            </tr>
          </thead>
          <tbody>
            {sizes.map((s) => (
              <tr key={s.id} className="border-b border-[#0E1E26]/10">
                <td className="py-3.5 text-base text-[#0E1E26]">
                  {s.label}
                  {confirmAfterVisit.has(s.id) && <span className="text-brand-700">*</span>}
                </td>
                <td className="py-3.5 text-right">{cell(s.flat)}</td>
                <td className="py-3.5 text-right">{cell(s.house)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-4 text-sm leading-relaxed text-ink-700">
          All prices are starting prices and include one bathroom. White goods are not included in the standard clean.
          <span className="text-brand-700"> *</span> Large or luxury homes, and any property of 5 bedrooms or more, are confirmed after we see the property.
        </p>
      </div>

      <div>
        <p className={`${label} text-brand-700`}>Optional</p>
        <h3 className={`${serif} mt-2 text-3xl text-[#0E1E26]`}>Extras</h3>
        <ul className="mt-5 divide-y divide-[#0E1E26]/10 border-y border-[#0E1E26]/10">
          {extraRows.map(([name, sub, price]) => (
            <li key={name} className="flex items-start justify-between gap-6 py-4">
              <div>
                <div className="text-base text-[#0E1E26]">{name}</div>
                {sub && <div className="mt-0.5 text-sm text-ink-700">{sub}</div>}
              </div>
              <span className={`${serif} text-2xl text-[#0E1E26]`}>£{price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
