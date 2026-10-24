import Icon from "./Icon";
import Section from "./Section";
import Button from "./Button";
import { site } from "@/lib/site";

/**
 * Reviews / reputation section. Built to accept real reviews later.
 *
 * HOW TO ADD REAL REVIEWS:
 * 1. Add a new `Review` entry to the `reviews` array below with the real text.
 * 2. Or wire this component to a data source (Google Places API, a CMS, etc.)
 *    and replace the array.
 *
 * Until you add them, this section shows a truthful placeholder (genuine
 * reputation on Google and Instagram) without fabricating any review text.
 */

type Review = {
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
  source?: string;
};

// Leave this empty until real review text is copied in.
const reviews: Review[] = [];

export default function Reviews() {
  return (
    <Section id="reviews" tone="muted">
      <div className="grid gap-10 md:grid-cols-[1fr_1.3fr] md:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
            Reputation
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-brand-900">
            Trusted by real customers across London
          </h2>
          <p className="mt-4 text-lg text-ink-700 leading-relaxed">
            We've earned genuine five-star reviews on Google from real
            customers, and you can see actual before-and-afters from recent
            jobs on our Instagram. Reputation isn't something we claim. It's
            something you can verify.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              href={site.contact.instagramUrl}
              variant="secondary"
            >
              <Icon name="instagram" size={16} />
              See before &amp; afters
            </Button>
            <Button href="/contact">
              Request a Quote
              <Icon name="arrow-right" size={16} />
            </Button>
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm text-ink-700">
            <span className="flex items-center gap-0.5 text-accent-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="star" size={16} />
              ))}
            </span>
            <span>
              {site.trust.googleReviewCount} five-star Google reviews and
              counting.
            </span>
          </div>
        </div>

        <div className="rounded-2xl bg-white border border-surface-200 p-6 md:p-8">
          {reviews.length === 0 ? (
            <div className="text-sm text-ink-500 leading-relaxed">
              <p className="font-semibold text-brand-900 mb-2">
                Review quotes coming soon.
              </p>
              <p>
                Rather than put words in customers' mouths, we'd rather show
                you the real thing: search &ldquo;{site.name}&rdquo; on Google, or
                visit our Instagram to see recent jobs and real feedback.
              </p>
            </div>
          ) : (
            <ul className="space-y-6">
              {reviews.map((r, i) => (
                <li
                  key={i}
                  className="border-b last:border-0 border-surface-100 pb-6 last:pb-0"
                >
                  <div className="flex items-center gap-0.5 text-accent-500 mb-2">
                    {Array.from({ length: r.rating }).map((_, n) => (
                      <Icon key={n} name="star" size={14} />
                    ))}
                  </div>
                  <blockquote className="text-ink-900 leading-relaxed">
                    &ldquo;{r.quote}&rdquo;
                  </blockquote>
                  <p className="mt-2 text-sm text-ink-500">
                    {r.author}
                    {r.source && <> · {r.source}</>}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Section>
  );
}
