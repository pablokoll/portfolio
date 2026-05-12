# Navbar — Design Spec
**Date:** 2026-04-27
**Project:** pablokoll.com portfolio
**Status:** Approved

---

## Overview

Fixed top navigation bar with three zones: brand left, nav links center, action icons right. Transparent over the hero, becomes frosted/solid with border on scroll. Mobile collapses to hamburger → fullscreen slide-in from right.

---

## Implementation Approach

**Option A (selected):** Single `Navbar.astro` component with inline `<script>`. No external dependencies. Consistent with all other components in the project.

---

## Layout & Structure

### Desktop (≥ 768px)

```
[ PK. ]     [ About · Projects · Experience · Contact ]     [ ? · 📄 · ☕ ]
  left                    center                               right (icons)
```

- Height: `56px`
- Inner max-width: `1120px` (matches hero/sections)
- Padding horizontal: `64px`
- `position: fixed`, `top: 0`, `left: 0`, `right: 0`, `z-index: 50`

### Mobile (< 768px)

- Height: `52px`
- Padding horizontal: `24px`
- Left: `PK.` brand
- Right: hamburger icon (≡ → ✕ when open)
- Nav links hidden — shown in fullscreen overlay
- Help/keyboard icon NOT shown in mobile overlay

---

## Brand — `BrandLogo.astro`

Extracted as a standalone component for reuse in Navbar and Footer.

```astro
<!-- BrandLogo.astro -->
<!-- Props: href (default "#hero"), tooltip (default "scroll_to_hero()") -->
```

- Font: `var(--font-mono)`, `16px`, `font-weight: 700`
- Color: `var(--fg)`, dot `.` in `var(--pk-steel)`
- Hover tooltip: configurable via prop (default `scroll_to_hero()`)
- `href` prop allows linking to `#hero` (navbar) or `/` (footer)

---

## Nav Links (center)

| Label | Target | Tooltip |
|-------|--------|---------|
| About | `#hero` (temp — will move to `#about` when section exists) | `scroll_to_about()` |
| Projects | `#projects` | `scroll_to_projects()` |
| Experience | `#experience` | `scroll_to_experience()` |
| Contact | `#contact` (section not yet built — placeholder) | `scroll_to_contact()` |

- Font: `var(--font-mono)`, `13px`, `font-weight: 500`
- Default color: `var(--fg-secondary)`
- Hover color: `var(--fg)`
- Active color: `var(--fg)` + subtle underline/dot in `var(--pk-steel)`
- Transition: `120ms`

### Hover Tooltips

CSS-only via `::after` pseudo-element:
- `content: attr(data-tooltip)`
- Font: `font-mono`, `11px`
- Background: `var(--bg-surface)`, border: `1px solid var(--border)`
- Appears below the link
- Fade-in: `120ms ease`
- Each link has `data-tooltip="scroll_to_x()"` attribute

---

## Action Icons (right)

Three icon buttons using existing `Icon.astro` pattern (SVG inline):

| Icon | Description | Tooltip | Action |
|------|-------------|---------|--------|
| `?` or keyboard SVG | Help | `show_help_popup()` | Opens existing `KeyboardNav` modal |
| Document/resume SVG | Download CV | `download_cv()` | Downloads `/Pablo Koll CV.pdf` |
| ☕ empty (latte) / ☕ full (mocha) | Theme toggle | `toggle_theme()` | Toggles between latte/mocha, updates `localStorage` |

- Size: `32px × 32px` hit area, `18px` icon
- Color: `var(--fg-secondary)` default, `var(--fg)` on hover
- Border: `1px solid var(--border)`, `border-radius: 8px`
- Background: transparent → `var(--bg-surface)` on hover
- Transition: `120ms`

### Icon sources (SVG inline in `Icon.astro`)

- Help: keyboard outline SVG
- Resume: document with lines SVG
- Theme: coffee cup — empty outline (latte/light), filled (mocha/dark)

> Icons are intentionally swappable — update the SVG path in `Icon.astro` without touching `Navbar.astro`.

---

## Scroll Behavior

### Transparent state (default, top of page)

- Background: `transparent`
- Border-bottom: `none`
- Box-shadow: `none`

### Scrolled state (scroll > 20px)

- Background: `rgba(var(--bg-rgb), 0.85)` + `backdrop-filter: blur(12px)`
- Border-bottom: `1px solid var(--border)`
- Transition: `240ms var(--ease)`

> **Note:** Requires `--bg-rgb` CSS variable (RGB values of `--bg`) for alpha-compatible `rgba()`. Add to both `:root` and `html[data-theme="mocha"]` in `global.css`.

---

## Scroll-Spy

- Uses `IntersectionObserver` on sections: `#hero`, `#experience`, `#projects`, `#contact`
- Threshold: `0.4` (section active when 40% visible)
- "About" nav link maps to `#hero` initially
- Active link gets `data-active="true"` attribute → CSS applies active styles
- When `#about` section is created in a future stage, only the `data-scroll-to` attribute needs updating — no logic change

---

## Mobile Overlay

- Triggered by hamburger button (right side of mobile navbar)
- Fullscreen panel slides in from the right
- Animation: `transform: translateX(100%)` → `translateX(0)`, `300ms ease`
- Background: `var(--bg)` (solid, no blur)
- Contains: About · Projects · Experience · Contact links (stacked vertically, large)
- Contains: Resume icon + Theme icon (help/keyboard icon excluded)
- Close: ✕ button top-right OR clicking a nav link
- Body scroll locked while open (`overflow: hidden` on `<body>`)

---

## Files Changed / Created

| File | Action |
|------|--------|
| `src/components/Navbar.astro` | **Create** — new navbar component |
| `src/components/BrandLogo.astro` | **Create** — reusable `PK.` brand mark, used in Navbar (and future Footer) |
| `src/components/ThemeToggle.astro` | **Remove** — functionality absorbed into Navbar |
| `src/components/Icon.astro` | **Update** — add keyboard, resume, coffee icons |
| `src/pages/index.astro` | **Update** — replace `<ThemeToggle />` with `<Navbar />`, add `padding-top` to main |
| `src/layouts/Layout.astro` | No change needed |
| `src/styles/global.css` | **Update** — add `--bg-rgb` variable for both themes |

---

## Out of Scope

- No `#about` section (placeholder for future stage)
- No `#contact` section (placeholder for future stage)
- No route-based navigation (single page)
- No animated logo or wordmark transitions
