"use client";

import { useMemo, useState, type FormEvent } from "react";
import { confirmAfterVisit, extras, sizes, whiteGoodsIncludes, type PropertyType } from "@/lib/prices";
import { site } from "@/lib/site";

const serif = "font-display font-light tracking-[-0.015em]";
const label = "text-[11px] font-semibold uppercase tracking-[0.22em]";
// 16px text on every input stops iOS Safari zooming in on focus.
const field =
  "w-full border border-[#0E1E26]/20 bg-white px-4 py-3 text-base text-[#0E1E26] focus:border-brand-700 focus:outline-none";

function gbp(n: number) {
  return `£${n.toLocaleString("en-GB")}`;
}

function Stepper({ value, onChange, max }: { value: number; onChange: (n: number) => void; max: number }) {
  return (
    <div className="inline-flex items-center border border-[#0E1E26]/20 bg-white">
      <button type="button" aria-label="Fewer" onClick={() => onChange(Math.max(0, value - 1))} className="h-11 w-11 text-lg text-[#0E1E26] disabled:opacity-30" disabled={value === 0}>
        &minus;
      </button>
      <span className="w-8 text-center text-base font-semibold tabular-nums">{value}</span>
      <button type="button" aria-label="More" onClick={() => onChange(Math.min(max, value + 1))} className="h-11 w-11 text-lg text-[#0E1E26] disabled:opacity-30" disabled={value === max}>
        +
      </button>
    </div>
  );
}

export default function PriceCalculator() {
  const [type, setType] = useState<PropertyType>("flat");
  const [sizeId, setSizeId] = useState("2-bed");
  const [extraBaths, setExtraBaths] = useState(0);
  const [whiteGoods, setWhiteGoods] = useState(false);
  const [carpetRooms, setCarpetRooms] = useState(0);
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const available = sizes.filter((s) => s[type] !== null);
  const size = available.find((s) => s.id === sizeId) ?? available[0];
  const base = size[type];
  const needsQuote = base === "quote";

  const lines = useMemo(() => {
    if (typeof base !== "number") return [];
    const l: [string, number][] = [[`${size.label} ${type}, one bathroom`, base]];
    if (extraBaths) l.push([`${extraBaths} extra bathroom${extraBaths > 1 ? "s" : ""}`, extraBaths * extras.extraBathroom]);
    if (whiteGoods) l.push(["White goods deep clean", extras.whiteGoods]);
    if (carpetRooms) l.push([`Carpet deep clean, ${carpetRooms} room${carpetRooms > 1 ? "s" : ""}`, carpetRooms * extras.carpetPerRoom]);
    return l;
  }, [base, size.label, type, extraBaths, whiteGoods, carpetRooms]);
  const total = lines.reduce((sum, [, v]) => sum + v, 0);

  function switchType(t: PropertyType) {
    setType(t);
    if (sizes.find((s) => s.id === sizeId)?.[t] === null) {
      setSizeId(sizes.find((s) => s[t] !== null)!.id);
    }
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const fd = new FormData(e.currentTarget);
    const summary = needsQuote
      ? `${size.label} ${type}: to be quoted after a visit.`
      : lines.map(([k, v]) => `${k}: ${gbp(v)}`).join("\n") + `\nEstimated total: from ${gbp(total)}`;
    const payload = {
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      location: fd.get("location"),
      preferred_date: fd.get("preferred_date"),
      company: fd.get("company"),
      service: "end-of-tenancy-cleaning-london",
      property: `${size.label} ${type}`,
      message: `PRICE CALCULATOR\n${summary}\n\nNotes: ${String(fd.get("message") || "").trim() || "(none)"}`,
    };
    try {
      const res = await fetch("/api/quote", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (!res.ok) throw new Error();
      setState("sent");
    } catch {
      setState("error");
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-12">
      {/* Choices */}
      <div className="space-y-8">
        <div>
          <p className={`${label} text-brand-700`}>1. Property type</p>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {(["flat", "house"] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => switchType(t)}
                className={`border px-4 py-4 text-base font-medium capitalize transition ${type === t ? "border-[#0E1E26] bg-[#0E1E26] text-white" : "border-[#0E1E26]/20 bg-white text-[#0E1E26] hover:border-[#0E1E26]/50"}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className={`${label} text-brand-700`}>2. Size</p>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {available.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setSizeId(s.id)}
                className={`border px-3 py-3.5 text-sm font-medium transition ${size.id === s.id ? "border-[#0E1E26] bg-[#0E1E26] text-white" : "border-[#0E1E26]/20 bg-white text-[#0E1E26] hover:border-[#0E1E26]/50"}`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <div className={needsQuote ? "pointer-events-none opacity-40" : ""}>
          <p className={`${label} text-brand-700`}>3. Extras</p>
          <div className="mt-3 divide-y divide-[#0E1E26]/10 border-y border-[#0E1E26]/10">
            <div className="flex items-center justify-between gap-4 py-4">
              <div>
                <div className="font-medium">Extra bathrooms</div>
                <div className="text-sm text-ink-700">One is included. {gbp(extras.extraBathroom)} each</div>
              </div>
              <Stepper value={extraBaths} onChange={setExtraBaths} max={5} />
            </div>
            <label className="flex cursor-pointer items-center justify-between gap-4 py-4">
              <div>
                <div className="font-medium">White goods deep clean</div>
                <div className="text-sm text-ink-700">{whiteGoodsIncludes}. {gbp(extras.whiteGoods)}</div>
              </div>
              <input type="checkbox" checked={whiteGoods} onChange={(e) => setWhiteGoods(e.target.checked)} className="h-6 w-6 shrink-0 accent-[#0E1E26]" />
            </label>
            <div className="flex items-center justify-between gap-4 py-4">
              <div>
                <div className="font-medium">Carpet deep clean</div>
                <div className="text-sm text-ink-700">{gbp(extras.carpetPerRoom)} per room</div>
              </div>
              <Stepper value={carpetRooms} onChange={setCarpetRooms} max={8} />
            </div>
          </div>
          <p className="mt-3 text-sm text-ink-700">White goods are not included in the standard clean.</p>
        </div>
      </div>

      {/* Estimate + send */}
      <div className="lg:sticky lg:top-32 lg:self-start">
        <div className="bg-[#061a24] p-6 text-white sm:p-8">
          <p className={`${label} text-accent-300`}>Your estimate</p>
          {needsQuote ? (
            <>
              <div className={`${serif} mt-3 text-4xl`}>Quoted after a visit</div>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Every large home is different, so we price 6 bedrooms and above once we have seen the property. Send your details and we will arrange it.
              </p>
            </>
          ) : (
            <>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-sm text-white/60">from</span>
                <span className={`${serif} text-6xl leading-none`}>{gbp(total)}</span>
              </div>
              <ul className="mt-6 space-y-2 border-t border-white/15 pt-4 text-sm">
                {lines.map(([k, v]) => (
                  <li key={k} className="flex justify-between gap-4 text-white/75">
                    <span>{k}</span>
                    <span className="tabular-nums text-white">{gbp(v)}</span>
                  </li>
                ))}
              </ul>
              {confirmAfterVisit.has(size.id) && (
                <p className="mt-4 bg-white/10 p-3 text-sm leading-relaxed text-white/85">
                  Large or luxury homes vary a lot, so we confirm the price for 5 bedrooms once we have seen the property.
                </p>
              )}
              <p className="mt-4 text-xs leading-relaxed text-white/50">
                A starting price for a property in normal condition. We confirm the final price before we start, so there are no surprises on the invoice.
              </p>
            </>
          )}
        </div>

        <div className="border border-t-0 border-[#0E1E26]/15 bg-white p-6 sm:p-8">
          {state === "sent" ? (
            <div>
              <p className={`${serif} text-2xl text-[#0E1E26]`}>Thank you, we have your details.</p>
              <p className="mt-2 text-sm text-ink-700">We will confirm the price and a date the same day. Need it sooner? Call {site.contact.phoneDisplay}.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-3">
              <p className="font-medium text-[#0E1E26]">Send me this quote</p>
              <input name="name" required placeholder="Your name" autoComplete="name" className={field} />
              <input name="email" type="email" required placeholder="Email" autoComplete="email" className={field} />
              <input name="phone" type="tel" required placeholder="Phone" autoComplete="tel" className={field} />
              <input name="location" required placeholder="Property postcode" className={field} />
              <input name="preferred_date" type="date" aria-label="Preferred date" className={field} />
              <textarea name="message" rows={2} placeholder="Anything we should know? (optional)" className={field} />
              <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
              <button type="submit" disabled={state === "sending"} className="mt-1 bg-[#0E1E26] px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-brand-700 disabled:opacity-60">
                {state === "sending" ? "Sending..." : "Send my quote request"}
              </button>
              {state === "error" && (
                <p className="text-sm text-red-700">Something went wrong. Please call {site.contact.phoneDisplay} or email {site.contact.email}.</p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
