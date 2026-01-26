# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website built with Astro and Tailwind CSS v4. Uses Catppuccin color scheme (Mocha dark / Latte light themes). All content is loaded from a single JSON file, enabling quick updates without code changes. The design follows a terminal/CLI aesthetic with snake_case naming, command-style text (`view_projects()`, `$ contact --email`), and monospace typography (JetBrains Mono).

## Commands

```bash
# Development
npm run dev          # Start dev server at localhost:4321
npm run build        # Build for production (outputs to dist/)
npm run preview      # Preview production build locally

# Type checking
npx astro check      # Run Astro's type checker
```

## Architecture

### Data Flow
```
src/data/portfolio.json → getPortfolioData() → Components → Static HTML
```

All portfolio content (hero, experience, skills, projects, learning, footer) is defined in `src/data/portfolio.json`. Components receive typed props and render the data. At build time, Astro generates static HTML with zero JavaScript by default.

### Data Source Configuration
The data source is configured in `src/config/data-source.ts`:
- `'local'` (default): Reads from `src/data/portfolio.json`
- `'blob'`: Fetches from Vercel Blob URL (requires `PORTFOLIO_BLOB_URL` env var)

### Key Files
- `src/data/portfolio.json` - All portfolio content (edit this to update content)
- `src/lib/types.ts` - TypeScript interfaces for portfolio data
- `src/lib/get-portfolio-data.ts` - Data fetching abstraction
- `src/styles/global.css` - Catppuccin theme variables and base styles
- `src/layouts/Layout.astro` - Base HTML layout with meta tags

### Components
All components are in `src/components/` and follow the pattern of receiving typed props from the JSON data:
- `Hero.astro` - Hero section with prompt, headline, subline, CTAs
- `Section.astro` - Reusable section wrapper with title/subtitle
- `ExperienceCard.astro` - Work experience entries
- `SkillCard.astro` - Skill categories with tech items
- `ProjectCard.astro` - Project entries with links
- `LearningCard.astro` - Current learning focus items
- `Footer.astro` - Terminal-style footer with command links
- `ThemeToggle.astro` - Dark/light theme switcher
- `Icon.astro` - SVG icon component with inline icon paths

### Theming
Two Catppuccin themes are available:
- **Mocha** (dark) - Default, matches terminal aesthetic
- **Latte** (light) - Light mode alternative

Theme is stored in `localStorage` and applied via `data-theme` attribute on `<html>`. CSS variables in `src/styles/global.css` adapt based on the active theme.

## JSON Schema

The portfolio data follows this structure (see `src/lib/types.ts` for full types):

```typescript
interface PortfolioData {
  meta: { title, description, ogImage?, url? }
  hero: { prompt, headline, subline, cta: { primary: CTAButton, secondary: CTAButton } }
  experience: { title, subtitle, items: ExperienceItem[] }   // role in snake_case, description as paragraph
  skills: { title, subtitle, items: SkillCategory[] }        // iconColor per card, description as comma list
  projects: { title, subtitle, items: ProjectItem[] }        // name in snake_case, screenshot placeholder
  learning: { title, subtitle, items: LearningItem[] }       // badge, progressPercent, progressComment, iconColor
  footer: { brand: { prompt, name }, tagline, commandLinks: CommandLink[], copyright }
}
```

### Design Conventions (from Pencil mockups)
- **Naming**: All section titles and labels use `snake_case` (e.g., `senior_backend_engineer`, `view_projects()`)
- **Tech tags**: Green text on surface1 background (`text-ctp-green bg-ctp-surface1`)
- **Dates**: Green for current positions, muted for past
- **Icon colors**: Each skill/learning card has its own accent color (`iconColor` field maps to Catppuccin colors)
- **Learning badges**: `IN PROGRESS`, `DAILY`, `COMPLETE`, `EXPLORING` with matching color
- **Progress bars**: Color matches the card's `iconColor`, with comment-style label (`// progress: 65%`)
- **Footer**: Terminal-style brand (`~ backend_dev` with cursor) and command links (`$ github --profile`)

## Adding New Icons

Icons are defined inline in `src/components/Icon.astro`. To add a new icon:
1. Find the SVG path for the icon
2. Add an entry to the `icons` object with the icon name as key and path as value
3. For filled icons (like social icons), add the name to the `isFillIcon` check

## Deployment

Configured for Vercel deployment. The site is fully static (no SSR).

To enable Vercel Blob for content updates without redeploy:
1. Set `DATA_SOURCE = 'blob'` in `src/config/data-source.ts`
2. Upload `portfolio.json` to Vercel Blob
3. Set `PORTFOLIO_BLOB_URL` environment variable in Vercel

## Styling Conventions

- Tailwind utility classes using Catppuccin colors: `bg-ctp-base`, `text-ctp-blue`, etc.
- Semantic variables: `--bg-primary`, `--text-primary`, `--accent-primary`
- Card hover effects: Add `card-hover` class for lift animation
- All colors support both themes via CSS variables
