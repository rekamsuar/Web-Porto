# Project Overview

Personal portfolio PWA for Sutrisno, built with Next.js 16 Pages Router + TypeScript React.

## Entry points
- `src/pages/_app.tsx` — root app wrapper; registers service worker at `/sw.js`.
- `src/pages/_document.tsx` — PWA meta tags, manifest link, Google Fonts, icons.
- `src/pages/index.tsx` — landing page composing all sections.
- `src/pages/albums.tsx` — standalone gallery page.

## Architecture
- Pages Router: every file under `src/pages` is a route.
- `src/layouts/layout.tsx` exists but is boilerplate and currently unused; prefer direct layout in each page.
- Component-driven sections in `src/components/*`.
- Static JSON data sources in `src/data/`; no backend/database active. `src/service/apiClient.ts` is commented out (Supabase disabled).
- PWA support via `public/manifest.json` and `public/sw.js` (cache-first strategy).

## Domain model
- `Project` / `Experiences` / `GalleryAsset` types defined in `src/types/index.ts`.
- JSON keys use kebab-case: `url-web`, `url-github`, `tech-tools`, `period-start`, `period-end`.

## Visual system
- Dark mode toggled manually via `document.documentElement.classList` + `localStorage.theme`.
- Brand colors: slate neutrals, blue-600 primary, yellow-400 accent.
- Font: Poppins loaded from Google Fonts.
- Animations/reveal handled by reusable `ScrollReveal` component.

## Assets
- Images under `public/images/` (project, experience, albums, profile).
- Icons under `public/icons/` for PWA.

## Gotchas
- `Album` component is imported on home but commented out in `index.tsx`; gallery lives mainly at `/albums`.
- Some installed deps (`three`, `@react-three/*`, `react-markdown`, `remark-gfm`, `@supabase/supabase-js`) are present but not currently used in the visible source. Verify before relying on them.
