# Task Completion Checklist

Before considering a coding task done, run:

1. `npm run lint` — ensure no ESLint errors.
2. `npm run build` — confirm TypeScript compiles and Next.js builds successfully.

## Notes
- No test runner is configured; verification is lint + build only.
- No Prettier config; formatting relies on manual consistency and ESLint rules.
- For content-only changes (JSON/text), a successful build is sufficient.
