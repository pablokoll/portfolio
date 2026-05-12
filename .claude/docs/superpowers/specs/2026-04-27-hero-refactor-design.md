# Hero Refactor — Design Spec (Etapa 2)

## Goal

Redesign the Hero section with a large bold headline ("Pablo / Koll."), updated copy, new CTAs with tooltips, and repositioned availability indicator.

## Layout

Split left/right, max-width 1120px, centered — same structure as current. No full-viewport change.

- **Left**: prompt, headline, subline, CTAs, availability (mobile only)
- **Right**: availability indicator (desktop) + avatar

Mobile (≤720px): single column, avatar hidden, availability moves below CTAs.

## Typography

| Element   | Value |
|-----------|-------|
| Prompt    | `$ whoami` — 14px mono, `--fg-muted` |
| Headline  | `Pablo / Koll.` — `clamp(64px, 9vw, 100px)`, weight 700, letter-spacing -0.02em. The trailing `.` uses `--pk-steel`. |
| Subline   | `// self-taught. systems thinker. turning complexity into working software.` — 15px, italic, `--fg-muted` |

## CTAs

| Button | Text | href | Tooltip |
|--------|------|------|---------|
| Primary | `View my work →` | `#projects` | `scroll_to_projects()` |
| Secondary | `Let's talk` | `#contact` | `scroll_to_contact()` |

Both use `data-scroll-to` + `data-tooltip` attributes. Scroll behavior handled in `<script>` (same pattern as current).

Tooltips rendered via CSS `::after` on the button, same style as navbar tooltips.

## Availability Indicator

- Text: `available for freelance` (no `//` prefix)
- Green pulsing dot (`--pk-green`) + text, 13px mono italic
- **Desktop**: positioned above the avatar block (right column), centered horizontally within that column
- **Mobile**: rendered below the CTAs in the left column flow (hidden in right column)

The pulsing dot uses a CSS `@keyframes` animation (scale + opacity).

## Avatar

No changes:
- 220×220px, border-radius 16px, border `1px solid --border`
- Loads `/avatar.png`, falls back to "PK" initials if missing

## Data Changes (`portfolio.json`)

```json
"hero": {
  "prompt": "$ whoami",
  "headline": "Pablo / Koll",
  "subline": "// self-taught. systems thinker. turning complexity into working software.",
  "availability": "available for freelance",
  "cta": {
    "primary":   { "text": "View my work →", "href": "#projects" },
    "secondary": { "text": "Let's talk",     "href": "#contact"  }
  }
}
```

## Type Changes (`src/lib/types.ts`)

Add `availability?: string` to the `Hero` interface.

## Files Touched

| File | Change |
|------|--------|
| `src/components/Hero.astro` | Layout, styles, script |
| `src/data/portfolio.json` | Content updates |
| `src/lib/types.ts` | Add `availability?: string` to Hero type |
