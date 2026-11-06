# Praeyou Website

The marketing website for Praeyou, built with Next.js, React, and Tailwind CSS.

## Tech Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- [React](https://react.dev) 19
- [Tailwind CSS](https://tailwindcss.com) 4
- [Framer Motion](https://motion.dev) for animation
- TypeScript
- ESLint

## Getting Started

Install dependencies, then run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app` — routes (App Router):
  - home (hero + contact section)
  - `leistungen` — services overview, plus one generated page per massage (`leistungen/[slug]`)
  - `uber` — about the owner
  - `vor-der-behandlung` — information to read before a treatment
  - `praxis` — the studio (placeholder for now)
  - `impressum`, `datenschutz` — legal pages
- `src/components` — shared UI components (Header, Footer, Hero, Button, TextPage, PageTitle, Prose, …)
- `src/lib` — single sources of truth: routes, contact details, brand name, breakpoints, layout spacing

## Scripts

```bash
npm run dev      # start the development server
npm run build    # build the static site into out/
npm run lint     # lint the project
```

## Deployment

The site is a static export (`output: "export"` in `next.config.ts`): `npm run build` writes plain HTML/CSS/JS into `out/`, with no Node.js server needed.

On every push to `main`, the GitHub Action in `.github/workflows/build.yml` lints and builds the site and commits the contents of `out/` to the `deploy` branch. Hostinger's Git deployment pulls the `deploy` branch into `public_html`. Never edit the `deploy` branch by hand.

## Notes

This project pins a Next.js version whose APIs and conventions may differ from what's documented publicly. Before making changes, check `node_modules/next/dist/docs/` for the version-specific guide, per `AGENTS.md`.
