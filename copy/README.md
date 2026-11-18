# Editing landing-page text in Figma and merging it back

Figma file: https://www.figma.com/design/WnMbr8W6w4AMJj42RojsxZ  (page "Landing page": Desktop 1440 + Mobile 390)

Every text layer is named after its place on the page (`hero.title`, `pricing.proPrice`, `faq.3.a` ...).
1. Edit text in Figma (desktop and/or mobile frame). Keep the layer names.
2. Ask Claude to "sync Figma text to the website". It exports the text layers, and runs:
   `node scripts/apply-copy.mjs edited.json --dry`  then without `--dry`.
   Only keys that differ from `copy/figma-snapshot.json` are changed, in `components/landing/*.tsx`.
3. Review the diff, push to `main` -> Vercel redeploys deutli.com.

Notes
- `--all` replaces every occurrence of the old text, including inside other strings (e.g. "Start free" in the pricing title).
- Not synced (edit in code): the hero dashboard mockup, `hero.note`, footer column titles, logo, prices that depend on the PKR/EUR + monthly/yearly toggle (only the PKR yearly values are shown in Figma), the reviews section (hidden until real reviews exist).
- Layout/spacing/colour changes in Figma are not merged automatically; only text is.
