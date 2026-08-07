# Pablo Koll — Portfolio

Personal portfolio site: [pablokoll.com](https://pablokoll.com)

Terminal/CLI-styled portfolio built with Astro + Tailwind CSS v4, Catppuccin theme (Mocha/Latte). Fully static, zero JS by default.

## Stack

- [Astro](https://astro.build) — static site generation
- [Tailwind CSS v4](https://tailwindcss.com)
- [Catppuccin](https://catppuccin.com) color scheme
- Deployed on [Vercel](https://vercel.com)

## Commands

| Command             | Action                                    |
| :------------------- | :----------------------------------------- |
| `npm install`         | Install dependencies                       |
| `npm run dev`         | Start dev server at `localhost:4321`       |
| `npm run build`       | Build production site to `./dist/`         |
| `npm run preview`     | Preview production build locally           |
| `npx astro check`     | Run Astro's type checker                   |

## Content

All content (hero, experience, skills, projects, learning, footer) lives in a single file: `src/data/portfolio.json`. Edit that file to update the site — no code changes needed. Shape is defined in `src/lib/types.ts`.

## Project Structure

```text
src/
├── components/     # Astro components (Hero, ExperienceCard, ProjectCard, ...)
├── config/         # data-source config (local JSON vs Vercel Blob)
├── data/           # portfolio.json — all site content
├── layouts/        # base HTML layout
├── lib/            # types + data fetching
└── styles/         # Catppuccin theme variables
```

See `CLAUDE.md` for full architecture notes.
