# Code Conventions

## Routing / files
- Pages Router: routes are files under `src/pages/`.
- Components live in `src/components/`, typically default-exported arrow functions.
- Shared types in `src/types/index.ts`.
- Path alias `@/*` maps to `src/*`.

## Naming
- Components: PascalCase (e.g., `ScrollReveal`, `TechStack`).
- TypeScript interfaces: PascalCase, often plural for collections (`Experiences`, `Project`, `GalleryAsset`).
- JSON data keys: kebab-case (`url-web`, `tech-tools`, `period-start`).

## Styling
- Tailwind v4 utility-first; custom config in `src/styles/globals.css`.
- Dark mode is manual class-based: always provide both `light` and `dark:` variants.
- Custom animation utilities: `animate-blob`, `animate-fade-in-up`, `animate-modalPop`, `animate-fadeIn`.
- Delay utilities: `delay-0`, `delay-150`, `delay-200`, … `delay-1000`.
- Theme palette: slate backgrounds, blue-600 primary, yellow-400 accent.
- Font family applied via `font-poppins`.

## Data patterns
- Static JSON imported directly (e.g., `import projectsData from '@/data/projects.json'`).
- Components sort data client-side by `created_at` or `period-start`.
- Loading / error / empty states are rendered inline in components.

## Reusable primitives
- `ScrollReveal` wraps elements for intersection-observer reveal animations; accepts `className`, `delay`, `threshold`.

## Images / media
- Stored under `public/images/` and referenced with root-relative paths.
- Fallback placeholder URLs used in `onError` handlers.

## Gotchas
- No Prettier config present; rely on ESLint and manual formatting.
- No test runner configured.
- Some components keep local state even though data is static (loading skeletons).
