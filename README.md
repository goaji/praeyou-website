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

- `src/app` — routes (App Router), including `leistungen` (services), `praxis`, `uber` (about), `impressum`, and `datenschutz`
- `src/components` — shared UI components (Header, Footer, Hero, Button, forms, etc.)

## Scripts

```bash
npm run dev      # start the development server
npm run build    # build for production
npm run start    # run the production build
npm run lint     # lint the project
```

## Notes

This project pins a Next.js version whose APIs and conventions may differ from what's documented publicly. Before making changes, check `node_modules/next/dist/docs/` for the version-specific guide, per `AGENTS.md`.
