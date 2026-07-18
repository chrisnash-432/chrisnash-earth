# chrisnash.earth

Personal site of Chris Nash: restoration leader, agroecologist, regenerative-development
practitioner (Cape Town, South Africa). Home of the fortnightly newsletter
**Inner & Outer Landscapes**.

Built with [Astro](https://astro.build), deployed to GitHub Pages, designed to be
written by the same Markdown workflow as the knowledge base that feeds it.

## How content works

- Letters live in `src/content/letters/*.md` (frontmatter: title, number, date, summary,
  optional recommendation). Publishing a letter = adding a file. `draft: true` hides it.
- Now-page entries live in `src/content/now/*.md`.
- Site-wide settings (email, newsletter wiring, role line) live in `src/config.ts`.
- Design tokens live in `src/styles/global.css`; the rationale in `DESIGN-BRIEF.md`.

## Deploy

Every push to `main` builds and deploys via GitHub Actions. The OG share image is
generated in CI (`scripts/og.py`) so the repo stays text-only.

## Local dev

```
npm install
npm run dev
```

`node shots.mjs` captures full-page review screenshots into `shots/` (requires a
Playwright-compatible Chromium).

## Operating rules

Voice: positive, story-led, poetic but accessible; no em dashes; no corporate jargon.
Scale metrics are attributed to the programmes Chris helps run with Greenpop and
partners. About-page prose stays in Chris's own written voice. Field photography only,
never stock, never AI-generated nature imagery.
