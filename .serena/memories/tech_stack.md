# Tech Stack

## Runtime / framework
- Next.js 16.1.1 (Pages Router).
- React 19.2.3 + React DOM 19.2.3.
- TypeScript 5.

## Styling
- Tailwind CSS 4.1.18 with `@tailwindcss/postcss` plugin.
- Config in `postcss.config.mjs`.
- Custom theme, variants, and keyframes in `src/styles/globals.css` (`@theme`, `@custom-variant dark`).

## Linting
- ESLint 9 with flat config in `eslint.config.mjs`.
- Extends `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`.

## Package management
- Both `yarn.lock` and `package-lock.json` exist; prefer `npm` unless user says otherwise.

## Installed libraries (verify usage before assuming active)
- `@react-three/fiber` 9.5.0, `@react-three/drei` 10.7.7, `three` 0.182.0 — installed but not visible in current pages/components.
- `react-markdown` 10.1.0, `remark-gfm` 4.0.1 — installed but unused in current source.
- `@supabase/supabase-js` 2.45.4 — installed but client code is commented out.

## Fonts / icons
- **Poppins** loaded via `next/font/google` (`src/lib/fonts.ts`). No external `<link>` font requests in production.
- UI icons from `@phosphor-icons/react`.
- Brand social icons from `simple-icons` where available; LinkedIn remains inline SVG because it is absent from `simple-icons`.
- Skill icons fetched from `https://skillicons.dev/icons?i=<icon>`.

## State / hooks
- Custom hooks in `src/hooks/`: `useTheme` (syncs `localStorage.theme` and `prefers-color-scheme`), `usePrefersReducedMotion` (wraps reduced-motion media query).

## PWA
- `public/manifest.json`, `public/sw.js`.
