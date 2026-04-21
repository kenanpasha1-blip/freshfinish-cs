# /public assets

Drop real brand assets into this folder. Referenced paths assume these filenames:

- `logo.svg` — primary site logo (used in `<Header/>`, `<Footer/>`, and JSON-LD). SVG preferred; PNG acceptable at 2x (min 400px wide).
- `logo-mark.svg` — optional icon-only mark (square), used for favicons and app icons.
- `og-default.jpg` — 1200x630 Open Graph image. Put a branded image here so social shares look right.
- `favicon.ico` — 32x32 or multi-size ICO.
- `apple-touch-icon.png` — 180x180 PNG.

## Images folder suggestion

For future before/after and gallery work:

```
public/
├─ images/
│  ├─ before-after/
│  │  ├─ kitchen-01-before.jpg
│  │  └─ kitchen-01-after.jpg
│  └─ hero/
│     └─ hero-living-room.jpg
```

Reference them in components with `<Image src="/images/…" />`.
