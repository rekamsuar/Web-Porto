# Agent Notes

## Project shape

- Next.js 16 portfolio site using the **Pages Router**. Entrypoints are in `src/pages/`, not `app/`.
- Path alias `@/*` maps to `src/*`.
- Tailwind CSS v4 via `@tailwindcss/postcss` (`postcss.config.mjs`).
- `@supabase/supabase-js` is installed but the client is currently disabled; data is read from `src/data/*.json`.
- `_app.tsx` registers a service worker at `/sw.js`; keep `public/sw.js` present if you change PWA behavior.

## Commands

```bash
# dev server
npm run dev

# build (production)
npm run build

# lint only
npm run lint
```

- No `test` or `typecheck` scripts are configured. TypeScript is checked implicitly by `next build` and the Next.js TypeScript plugin.
- Both `package-lock.json` and `yarn.lock` exist. Prefer **npm** unless you have a reason to switch; if you modify dependencies, commit the matching lockfile changes.

## Common gotchas

- `next.config.ts` is empty/minimal. Add image domains, rewrites, or output settings there.
- The README is the generic `create-next-app` template and mentions `app/page.tsx` — that file does not exist; use `src/pages/index.tsx` as the homepage.
- `Album` is imported in `src/pages/index.tsx` but commented out.
- `public/sw.js` is expected at runtime because `_app.tsx` registers it.
