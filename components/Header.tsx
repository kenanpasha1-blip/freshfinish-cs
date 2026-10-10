"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "./Button";
import Icon from "./Icon";
import Logo from "./Logo";
import { site } from "@/lib/site";

const nav = [
  { href: "/office-cleaning", label: "Offices" },
  { href: "/school-cleaning", label: "Schools" },
  { href: "/letting-agents", label: "Letting Agents" },
  { href: "/end-of-tenancy-price-calculator", label: "Prices" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-surface-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
        <Logo height={80} priority />

        <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium tracking-wide text-ink-700">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-brand-800 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button
            href={`tel:${site.contact.phoneE164}`}
            variant="ghost"
            size="md"
          >
            <Icon name="phone" size={16} />
            {site.contact.phoneDisplay}
          </Button>
          <Link
            href="/contact"
            className="bg-[#0E1E26] px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-brand-700"
          >
            Book a site survey
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 text-ink-700"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-surface-200 bg-white">
          <div className="px-4 sm:px-6 py-4 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-base text-ink-700 hover:text-brand-800 border-b border-surface-100 last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4">
              <Button href={`tel:${site.contact.phoneE164}`} variant="secondary">
                <Icon name="phone" size={16} /> Call {site.contact.phoneDisplay}
              </Button>
              <Link href="/contact" className="bg-[#0E1E26] px-6 py-3.5 text-center text-xs font-semibold uppercase tracking-[0.14em] text-white">Book a site survey</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
