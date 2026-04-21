import Link from "next/link";
import Button from "@/components/Button";
import Icon from "@/components/Icon";

export default function NotFound() {
  return (
    <section className="bg-surface-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
          404
        </p>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold text-brand-900">
          We can't find that page
        </h1>
        <p className="mt-5 text-lg text-ink-700">
          The link may be out of date, or the page may have moved. Head back
          to the homepage or jump straight to what you're looking for.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/" size="lg">
            Back to Home <Icon name="arrow-right" size={16} />
          </Button>
          <Button href="/end-of-tenancy-cleaning-london" variant="secondary" size="lg">
            End of Tenancy Cleaning
          </Button>
          <Button href="/contact" variant="ghost" size="lg">
            Contact
          </Button>
        </div>

        <div className="mt-12 grid gap-3 md:grid-cols-3 text-left">
          <Link href="/end-of-tenancy-cleaning-prices-london" className="rounded-2xl border border-surface-200 p-5 hover:border-brand-300 bg-white">
            <p className="text-xs text-brand-700 font-semibold uppercase tracking-wider">Pricing</p>
            <p className="mt-1 font-semibold text-brand-900">End of tenancy prices London</p>
          </Link>
          <Link href="/what-does-end-of-tenancy-cleaning-include" className="rounded-2xl border border-surface-200 p-5 hover:border-brand-300 bg-white">
            <p className="text-xs text-brand-700 font-semibold uppercase tracking-wider">Scope</p>
            <p className="mt-1 font-semibold text-brand-900">What's included</p>
          </Link>
          <Link href="/end-of-tenancy-cleaning-checklist-uk" className="rounded-2xl border border-surface-200 p-5 hover:border-brand-300 bg-white">
            <p className="text-xs text-brand-700 font-semibold uppercase tracking-wider">Guide</p>
            <p className="mt-1 font-semibold text-brand-900">Full UK checklist</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
