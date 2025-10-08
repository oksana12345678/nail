# Copilot Instructions for AI Coding Agents

## Project Overview

- This is a multilingual Next.js app (bootstrapped with `create-next-app`) using
  the `/src/app` directory for routing and page components.
- Internationalization (i18n) is handled via `/src/i18n/` with locale JSON files
  for `en`, `pl`, and `ua`. Language switching logic is in
  `/src/i18n/utils/LanguageChanger.ts`.
- UI is built with React components, Tailwind CSS (see `tailwind.config.ts`),
  and custom modules in `/src/modules/`.
- Static assets (images, icons) are in `/public/` and subfolders.

## Key Patterns & Structure

- **Pages & Routing:**
  - All routes are under `/src/app/[locale]/`, supporting per-locale layouts and
    pages (e.g., `layout.tsx`, `page.tsx`).
  - Gallery and other subpages are nested under their locale folder.
- **Modules:**
  - Feature modules (e.g., `AboutUs`, `Header`, `Hero`, `Trends`) are in
    `/src/modules/`, each with its own components and data files.
  - Shared UI primitives are in `/src/shared/components/` (e.g., `Button`,
    `Container`, `Section`).
- **i18n:**
  - Locale files are in `/src/i18n/locales/{lang}/`. Use the `useTranslation`
    hook or utilities from `/src/i18n/utils/` for translations.
- **Data:**
  - Static data for modules is stored in colocated `data.json` files (e.g.,
    `/src/modules/Hero/data.json`).

## Developer Workflows

- **Start Dev Server:** `npm run dev` (or `yarn dev`, `pnpm dev`, `bun dev`)
- **Edit UI:** Change files in `/src/app/`, `/src/modules/`, or
  `/src/shared/components/`.
- **Add Translations:** Update the relevant JSON in `/src/i18n/locales/{lang}/`.
- **Styling:** Use Tailwind CSS utility classes. Update `tailwind.config.ts` for
  customizations.
- **Deploy:** Use Vercel (see README for details).

## Conventions & Tips

- Prefer colocating data and components within feature folders.
- Use the `Container` and `Section` shared components for layout consistency.
- When adding new pages, follow the `[locale]/page.tsx` pattern for i18n
  support.
- For new modules, mirror the structure of existing ones (e.g., `AboutUs`).
- Keep translation keys consistent across all locale files.

## References

- See `README.md` for basic setup and deployment.
- Example: To add a new product, update
  `/src/modules/OurProducts/components/ListCards.tsx` and the relevant
  data/translation files.

---

If you are unsure about a pattern, check similar modules or shared components
for examples. When in doubt, prefer explicit, colocated, and modular code.
