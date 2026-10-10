"use client";

import { useEffect, useState } from "react";
import PriceCalculator from "./PriceCalculator";

const serif = "font-display font-light tracking-[-0.015em]";
const label = "text-[11px] font-semibold uppercase tracking-[0.22em]";

/**
 * Price calculator tucked behind an expandable box. Links that promise an
 * exact price (cold emails, the PDF, "Get a quote") land on #calculator, which
 * opens it straight away.
 */
export default function CalculatorBox() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const check = () => {
      if (window.location.hash === "#calculator") {
        setOpen(true);
        document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    check();
    window.addEventListener("hashchange", check);
    return () => window.removeEventListener("hashchange", check);
  }, []);

  return (
    <div id="calculator" className="scroll-mt-28 border border-[#0E1E26]/15 bg-white">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 p-6 text-left transition hover:bg-[#0E1E26]/[0.02] md:p-8"
      >
        <div>
          <p className={`${label} text-brand-700`}>Price calculator</p>
          <p className={`${serif} mt-2 text-2xl text-[#0E1E26] md:text-3xl`}>
            Work out your exact price, <em className="italic text-brand-700">and send it to us.</em>
          </p>
        </div>
        <span
          aria-hidden
          className={`flex h-12 w-12 shrink-0 items-center justify-center border border-[#0E1E26] text-2xl text-[#0E1E26] transition ${open ? "rotate-45 bg-[#0E1E26] text-white" : ""}`}
        >
          +
        </span>
      </button>
      {open && (
        <div className="border-t border-[#0E1E26]/10 p-5 sm:p-6 md:p-8">
          <PriceCalculator />
        </div>
      )}
    </div>
  );
}
