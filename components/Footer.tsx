import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
import { site } from "@/lib/site";
import { services } from "@/lib/services";

/**
 * Footer as full-width bands rather than columns, so every edge lines up:
 * logo + quote actions, one row of services, one line of areas, one contact
 * row, then the legal line. No opening hours here on purpose: cleans often
 * happen outside them and the line put people off asking.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  const dot = (
    <span aria-hidden="true" className="text-brand-600 select-none">
      ·
    </span>
  );
  return (
    <footer className="bg-brand-900 text-brand-100">
      {/* Band 1: logo and the two actions */}
      <div className="bg-brand-700">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-5">
          {/* The wide wordmark crop, not the stacked logo: at this size the
              stacked version reads tiny next to the buttons. */}
          <Link href="/" aria-label="Fresh Finish home">
            <Image
              src="/logo-wordmark-white.png"
              alt="Fresh Finish Cleaning Solutions"
              width={170}
              height={31}
              className="h-auto w-[150px] sm:w-[170px]"
            />
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="rounded-[10px] bg-accent-500 px-6 py-3 text-[15px] font-bold text-brand-900 hover:bg-accent-400"
            >
              Get a free quote
            </Link>
            <a
              href={`tel:${site.contact.phoneE164}`}
              className="flex items-center gap-2 rounded-[10px] border border-brand-400 px-5 py-3 text-[15px] font-bold text-white hover:border-brand-300"
            >
              <Icon name="phone" size={16} className="text-accent-400" />
              {site.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Band 2: services, one centred row */}
      <nav
        aria-label="Services"
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-8 flex flex-wrap items-center justify-center gap-x-3.5 gap-y-2 text-[15px] font-semibold"
      >
        {services.map((s, i) => (
          <span key={s.slug} className="flex items-center gap-3.5">
            {i > 0 ? dot : null}
            <Link
              href={s.hasPage ? `/${s.slug}` : "/contact"}
              className="text-brand-100 hover:text-white"
            >
              {s.shortName}
            </Link>
          </span>
        ))}
      </nav>

      {/* Band 3: areas, one centred line */}
      <p className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-4 text-center text-[13.5px] text-brand-300">
        North, North West, Central, East, North East and West London, plus
        selected jobs in Hertfordshire and Essex
      </p>

      {/* Band 4: contact, one centred row */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-6 pb-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[14.5px]">
        <a
          href={`tel:${site.contact.phoneE164}`}
          className="flex items-center gap-2 text-brand-100 hover:text-white"
        >
          <Icon name="phone" size={16} className="text-accent-400" />
          {site.contact.phoneDisplay}
        </a>
        <a
          href={site.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-brand-100 hover:text-white"
        >
          <Icon name="whatsapp" size={16} className="text-[#25d366]" />
          WhatsApp us
        </a>
        <a
          href={`mailto:${site.contact.email}`}
          className="flex items-center gap-2 text-brand-100 hover:text-white break-all"
        >
          <Icon name="mail" size={16} className="text-accent-400" />
          {site.contact.email}
        </a>
        <a
          href={site.contact.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="flex items-center text-brand-100 hover:text-white"
        >
          <Icon name="instagram" size={18} />
        </a>
      </div>

      {/* Band 5: legal */}
      <div className="border-t border-brand-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row md:justify-between gap-2 text-xs text-brand-300">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p>
            Bookings and quotes are reviewed and confirmed before they're final.
          </p>
        </div>
      </div>
    </footer>
  );
}
