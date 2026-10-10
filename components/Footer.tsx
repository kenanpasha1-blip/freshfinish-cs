import Link from "next/link";
import Icon from "./Icon";
import Logo from "./Logo";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { primaryAreas, widerAreas } from "@/lib/areas";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-900 text-brand-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-14 grid grid-cols-2 gap-x-6 gap-y-10 md:gap-10 lg:grid-cols-4">
        <div className="col-span-2 md:col-span-1">
          <div className="mb-4">
            <Logo height={56} variant="light" />
          </div>
          <p className="text-sm text-brand-200 leading-relaxed">
            Professional end of tenancy, deep, after-build, domestic and
            office cleaning across London. Trained, insured team, per-property
            pricing, and bookings reviewed before they're confirmed.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={site.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 rounded-full bg-brand-800 hover:bg-brand-700"
            >
              <Icon name="instagram" size={18} />
            </a>
            <a
              href={site.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2 rounded-full bg-brand-800 hover:bg-brand-700"
            >
              <Icon name="whatsapp" size={18} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
            Services
          </h3>
          <ul className="space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                {s.hasPage ? (
                  <Link
                    href={`/${s.slug}`}
                    className="text-brand-200 hover:text-white"
                  >
                    {s.name}
                  </Link>
                ) : (
                  <Link
                    href="/contact"
                    className="text-brand-200 hover:text-white"
                  >
                    {s.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
            Areas
          </h3>
          <ul className="space-y-2 text-sm">
            {primaryAreas.map((a) => (
              <li key={a.slug} className="text-brand-200">
                {a.name}
              </li>
            ))}
            {widerAreas.map((a) => (
              <li key={a.slug} className="text-brand-300">
                {a.name} (selected)
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 md:col-span-1">
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
            Contact
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Icon name="phone" size={16} className="mt-0.5 text-accent-400" />
              <a
                href={`tel:${site.contact.phoneE164}`}
                className="text-brand-100 hover:text-white"
              >
                {site.contact.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="mail" size={16} className="mt-0.5 text-accent-400" />
              <a
                href={`mailto:${site.contact.email}`}
                className="text-brand-100 hover:text-white break-all"
              >
                {site.contact.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="whatsapp" size={16} className="mt-0.5 text-accent-400" />
              <a
                href={site.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-100 hover:text-white"
              >
                WhatsApp us
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="clock" size={16} className="mt-0.5 text-accent-400" />
              <span className="text-brand-200">{site.hours.display}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row md:justify-between gap-3 text-xs text-brand-300">
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
