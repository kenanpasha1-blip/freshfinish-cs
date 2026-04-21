# Fresh Finish Cleaning Solutions — Website

Production website for Fresh Finish Cleaning Solutions. Built as an SEO and
lead-generation system, not a brochure site.

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Deployed to Vercel.

---

## Quick start

```bash
npm install
cp .env.example .env.local   # fill in values
npm run dev                  # http://localhost:3000
npm run build && npm start   # production build
```

## File structure

```
freshfinish-cs/
├─ app/
│  ├─ layout.tsx                                   # Root layout, site-wide metadata, JSON-LD
│  ├─ page.tsx                                     # Homepage
│  ├─ globals.css                                  # Tailwind v4 + brand tokens
│  ├─ sitemap.ts                                   # Auto-generated /sitemap.xml
│  ├─ robots.ts                                    # Auto-generated /robots.txt
│  ├─ not-found.tsx                                # Custom 404
│  ├─ about/page.tsx
│  ├─ contact/page.tsx
│  ├─ end-of-tenancy-cleaning-london/page.tsx           # Money page
│  ├─ end-of-tenancy-cleaning-prices-london/page.tsx    # Price intent
│  ├─ what-does-end-of-tenancy-cleaning-include/page.tsx# Scope / informational
│  ├─ end-of-tenancy-cleaning-checklist-uk/page.tsx     # Long-form helpful page
│  ├─ how-long-does-end-of-tenancy-cleaning-take/page.tsx# Timing / informational
│  └─ api/quote/route.ts                           # Form handler (wire up email below)
├─ components/
│  ├─ Header.tsx           # Sticky nav + mobile menu
│  ├─ Footer.tsx
│  ├─ Logo.tsx             # Inline-SVG wordmark (replace with real logo)
│  ├─ Hero.tsx             # Homepage hero
│  ├─ PageHero.tsx         # Inner-page hero with breadcrumbs
│  ├─ TrustBar.tsx
│  ├─ ServicesOverview.tsx
│  ├─ WhyChooseUs.tsx
│  ├─ Satisfaction.tsx     # 48-hour return policy block
│  ├─ AreasCovered.tsx     # Reusable areas section
│  ├─ HowItWorks.tsx
│  ├─ Reviews.tsx          # Ready for real reviews
│  ├─ FAQ.tsx              # Reusable FAQ (accordion)
│  ├─ CTASection.tsx       # Reusable bottom CTA
│  ├─ QuoteForm.tsx        # Client-side form, posts to /api/quote
│  ├─ Breadcrumbs.tsx
│  ├─ Section.tsx          # Reusable section shell
│  ├─ Button.tsx
│  ├─ Icon.tsx             # Tiny inline-SVG icon set
│  └─ StructuredData.tsx   # JSON-LD helper
├─ lib/
│  ├─ site.ts       # Single source of truth for contact info, hours, claims
│  ├─ services.ts   # Services (slugs match folder names when there's a page)
│  ├─ areas.ts      # Primary + wider service areas
│  ├─ faqs.ts       # Shared FAQs with per-page collections
│  └─ seo.ts        # Metadata + JSON-LD builders
└─ public/
   └─ README.md     # Where to drop logo.svg, og-default.jpg, etc.
```

## How the SEO architecture works

**Every page:**
- Uses `buildMetadata()` from `lib/seo.ts` for title/description/canonical/OG/Twitter.
- Gets a `<StructuredData />` block with relevant JSON-LD (LocalBusiness site-wide, Service/FAQ/Breadcrumb per page).
- Renders semantic HTML with a single `<h1>`, hierarchical `<h2>`/`<h3>`, and crawlable internal links.
- Is reachable from the homepage + footer, and cross-linked within the end-of-tenancy cluster.

**Site-wide structured data** (in `app/layout.tsx`):
- `LocalBusiness + CleaningService` with name, URL, phone, area served, hours, sameAs.

**Per-page structured data:**
- Money page: `Service`, `FAQPage`, `BreadcrumbList`.
- Supporting pages: `FAQPage` (where relevant) + `BreadcrumbList`.

**Internal linking strategy** (the "topic cluster"):

```
Homepage ──▶ End of Tenancy Cleaning London (pillar)
                        │
                        ├──▶ Prices London
                        ├──▶ What's Included
                        ├──▶ Checklist UK
                        └──▶ How Long Does It Take
All supporting pages link back to the pillar and to each other.
```

**Sitemap & robots:** generated automatically from `app/sitemap.ts` and `app/robots.ts`. After deploy, submit `https://<your-domain>/sitemap.xml` to Google Search Console.

## Adding new pages later

### New service page (e.g. Deep Cleaning London)

1. In `lib/services.ts`, set `hasPage: true` on the service and make sure the slug is URL-friendly (e.g. `"deep-cleaning-london"`).
2. Create `app/deep-cleaning-london/page.tsx` — copy the structure of `app/end-of-tenancy-cleaning-london/page.tsx` and adapt the copy.
3. Add the route to `app/sitemap.ts`.
4. Add an FAQ collection in `lib/faqs.ts` if you want unique FAQs for that page.

### New area page (e.g. End of Tenancy Cleaning Hackney)

Create a folder + `page.tsx` at `app/areas/hackney-end-of-tenancy/page.tsx` (or similar URL). Use `PageHero`, `Section`, `AreasCovered`, `FAQ`, `CTASection` to stay consistent. Wire it into `app/sitemap.ts`.

For large volume area pages, consider a dynamic route `app/areas/[slug]/page.tsx` with a data file driving each slug — you'll get 30 pages from one template.

## What to edit first to personalise

1. **`lib/site.ts`** — confirm URL, phone/email/WhatsApp, hours. Changes propagate everywhere.
2. **`lib/services.ts`** — adjust copy on service cards if your positioning evolves.
3. **`lib/areas.ts`** — if you want different area coverage or borough-level pages.
4. **`lib/faqs.ts`** — add any FAQs your customers actually ask. More specific = more trust + more long-tail SEO.
5. **`components/Reviews.tsx`** — once you have written review quotes, paste them into the `reviews` array.
6. **`components/Logo.tsx`** — replace the inline-SVG wordmark with your real logo (see `/public/README.md`).
7. **Colour palette** — `app/globals.css` top block (`@theme`). Swap `--color-brand-*` and `--color-accent-*` hex values to match your logo.

## Where to place real assets

All real brand/image assets go in `/public`. See `public/README.md` for exact filenames referenced by the code:

- `logo.svg` — referenced by `<Image>` if you re-enable it inside `components/Logo.tsx`.
- `og-default.jpg` — 1200×630 social share card.
- `favicon.ico`, `apple-touch-icon.png`
- `images/before-after/*.jpg` — for when you build the gallery section.

## Connecting the form handler

The `/api/quote` route currently **validates input and logs to stdout**. To deliver real emails:

1. Pick a provider. Resend is simplest for UK setups:

   ```bash
   npm install resend
   ```

2. Add to `.env.local`:

   ```
   RESEND_API_KEY=re_xxx
   QUOTE_FORM_TO_EMAIL=info@freshfinish-cs.co.uk
   ```

3. Edit `app/api/quote/route.ts` — the inline comment in that file shows the exact code to drop in.

4. On Vercel, add the same env vars in Project Settings → Environment Variables.

Alternatives: SendGrid, Postmark, AWS SES, or a Zapier/Make webhook if you prefer no-code.

## Deployment (Vercel)

```bash
# 1. Push to GitHub:
git init
git add .
git commit -m "Initial build"
gh repo create freshfinish-cs --public --source=. --push
# Or create the repo in GitHub UI and:
#   git remote add origin git@github.com:<you>/freshfinish-cs.git
#   git branch -M main && git push -u origin main

# 2. Connect on https://vercel.com/new → import the repo.
# 3. Add env vars (NEXT_PUBLIC_SITE_URL, QUOTE_FORM_TO_EMAIL, etc).
# 4. Assign your domain (freshfinish-cs.co.uk) in Vercel → Domains.
# 5. In 123-reg, update DNS to point to Vercel nameservers or add the
#    A/CNAME records Vercel gives you.
```

## Accessibility and performance notes

- Semantic HTML throughout: `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- All interactive elements have visible focus states.
- Images will use Next's `<Image>` when you drop real photos into `/public/images`.
- No client JS except where needed (Header mobile menu, QuoteForm). The pages themselves are server-rendered for fast TTFB.

## License

Proprietary — © Fresh Finish Cleaning Solutions.
