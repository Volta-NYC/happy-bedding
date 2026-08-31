# Happy Bedding (행복한 이불집)

Official website for Happy Bedding, a Korean bedding importer and specialty shop at 150-29 Northern Blvd, Flushing, NY 11354. Built on the Volta base template.

---

## 🚀 Overview

Happy Bedding imports eco-modal, allergy-care, four-season, and hotel-grade bedding directly from Korean factories every season, along with a rotating selection of Korean lifestyle goods (hats, bags, aprons, umbrellas, cushions). The shop has served Flushing for nine years, with regulars driving in from New Jersey, Long Island, and Manhattan.

This site is bilingual. It defaults to English with a toggle (far right of the navbar) that switches all copy to Korean, matching the language of the shop's original site and customer base. The language preference persists per visitor via `localStorage`.

**Source material:** the site's content was researched from the shop's existing (Korean-language) site at `happybedding.mightysites.com`. That site's only real photography (a shop-interior shot of shelved bedding) sits behind hotlink protection that this build environment's network policy could not bypass, so imagery on this site uses an original abstracted "folded, shelved bedding" motif (`FoldStack`, see `src/lib/components/fold-stack.tsx`) instead of a fabricated stock photo. If real photography or a logo file becomes available, swap it in; the component is used consistently enough across the site that replacing it with real photography in the same slots would be a contained change.

---

## 🛠 Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Self-hosted variable fonts via Fontsource (Fraunces for display, Inter for body, Noto Sans KR for Korean copy) — no runtime calls to Google Fonts
- Hosted on Vercel

---

## 📂 Project Structure

- `src/app` → routes: `/` (home), `/about`, `/collections`, `/visit`, plus shared `layout.tsx` and `globals.css`
- `src/lib/components` → shared UI: `navbar`, `footer`, `button`, `layout-primitives` (Section/Container/Eyebrow), `reveal` (scroll-reveal), `fold-stack` (signature visual motif), `language-toggle`
- `src/lib/i18n` → `language-context.tsx` (EN/KO provider) and `dictionaries/*.ts` (all bilingual copy, one file per page plus `shared.ts` for nav/footer)
- `src/lib/content/business.ts` → single source of truth for address, phone, map/review links, and nav routes
- `public`, `src/app/icon.png`, `src/app/apple-icon.png` → favicon and app icons (generated from the site's fold-stack mark)

---

## 🧑‍💻 Development

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build and lint:

```bash
npm run build
npm run lint
```

---

## ✏️ Customization Checklist

- [x] Replace Business Name in navbar + footer
- [x] Update metadata in `src/app/layout.tsx` and per-route `page.tsx` files
- [x] Replace homepage content (`src/app/page.tsx`, `src/app/home-view.tsx`)
- [x] Add About, Collections, and Visit pages (`src/app/about`, `src/app/collections`, `src/app/visit`)
- [x] Replace favicon + assets in `src/app/icon.png`, `src/app/apple-icon.png`
- [x] Update SEO metadata (title/description per route, Open Graph basics)
- [x] Update Volta credit link text / URL in the footer (kept as required: "Made by Novus" → https://novusnyc.org)
- [x] Add EN/KO language toggle (`src/lib/i18n`)
