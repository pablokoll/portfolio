# Hero Refactor Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refactor the Hero section with a large "Pablo / Koll." headline, updated subline, new CTA buttons with scroll+tooltip behavior, and an availability indicator repositioned above the avatar on desktop / below CTAs on mobile.

**Architecture:** Three files change: `types.ts` gets `availability?: string` on the `Hero` interface; `portfolio.json` gets updated content; `Hero.astro` gets new layout, styles, and script. No new components — the availability indicator lives inline in Hero. Tooltips use CSS `::after` with `data-tooltip` attribute, matching the navbar pattern.

**Tech Stack:** Astro, TypeScript, CSS custom properties (`--pk-*` tokens), vanilla JS for scroll behavior.

---

## File Structure

| File | Change |
|------|--------|
| `src/lib/types.ts` | Add `availability?: string` to `Hero` interface |
| `src/data/portfolio.json` | Update headline, subline, availability, CTA text/href |
| `src/components/Hero.astro` | New layout, styles, script |

---

### Task 1: Update Hero type and data

**Files:**
- Modify: `src/lib/types.ts:20-28`
- Modify: `src/data/portfolio.json` (hero object)

- [ ] **Step 1: Add `availability` to Hero interface**

Open `src/lib/types.ts`. Replace lines 20–28:

```typescript
export interface Hero {
  prompt: string;
  headline: string;
  subline: string;
  availability?: string;
  cta: {
    primary: CTAButton;
    secondary: CTAButton;
  };
}
```

- [ ] **Step 2: Update portfolio.json hero section**

Open `src/data/portfolio.json`. Replace the `"hero"` object (currently lines 8–22) with:

```json
"hero": {
  "prompt": "$ whoami",
  "headline": "Pablo / Koll",
  "subline": "// self-taught. systems thinker. turning complexity into working software.",
  "availability": "available for freelance",
  "cta": {
    "primary": {
      "text": "View my work →",
      "href": "#projects"
    },
    "secondary": {
      "text": "Let's talk",
      "href": "#contact"
    }
  }
},
```

- [ ] **Step 3: Verify type check passes**

```bash
cd /home/pablo/Work/personal/profile/portfolio
npx astro check
```

Expected: no type errors.

---

### Task 2: Rewrite Hero.astro

**Files:**
- Modify: `src/components/Hero.astro` (full rewrite)

This task replaces the entire file. The key changes:
- Headline enlarged to `clamp(64px, 9vw, 100px)`, text is `{data.headline}<span class="hero-dot">.</span>`
- Availability indicator: rendered in **both** columns but toggled via CSS (shown above avatar on desktop, shown below CTAs on mobile)
- CTAs get `data-tooltip` attribute for CSS tooltip
- Script handles `data-scroll-to` for both CTAs (same as current, both CTAs now use `#projects` / `#contact` anchors)

- [ ] **Step 1: Replace Hero.astro with new implementation**

Replace the entire contents of `src/components/Hero.astro` with:

```astro
---
import type { Hero as HeroType } from '../lib/types';

interface Props {
  data: HeroType;
}

const { data } = Astro.props;
const avatarPath = '/avatar.png';
---

<section id="hero" class="hero-section">
  <div class="hero-inner">
    <!-- Left: text content -->
    <div class="hero-content">
      <p class="hero-prompt">{data.prompt}</p>

      <h1 class="hero-headline">
        {data.headline}<span class="hero-dot">.</span>
      </h1>

      <p class="hero-subline">{data.subline}</p>

      <div class="hero-ctas">
        <button
          type="button"
          class="btn-primary"
          data-scroll-to={data.cta.primary.href.replace('#', '')}
          data-tooltip={data.cta.primary.href.startsWith('#') ? data.cta.primary.href.replace('#', '') + '_scroll()' : undefined}
        >
          {data.cta.primary.text}
        </button>
        <button
          type="button"
          class="btn-secondary"
          data-scroll-to={data.cta.secondary.href.replace('#', '')}
          data-tooltip={data.cta.secondary.href.startsWith('#') ? data.cta.secondary.href.replace('#', '') + '_scroll()' : undefined}
        >
          {data.cta.secondary.text}
        </button>
      </div>

      <!-- Availability — mobile only (below CTAs) -->
      {data.availability && (
        <div class="hero-availability hero-availability--mobile">
          <span class="availability-dot"></span>
          <span>{data.availability}</span>
        </div>
      )}
    </div>

    <!-- Right: availability (desktop) + avatar -->
    <div class="hero-right">
      {data.availability && (
        <div class="hero-availability hero-availability--desktop">
          <span class="availability-dot"></span>
          <span>{data.availability}</span>
        </div>
      )}

      <div class="hero-avatar-wrap">
        <div class="hero-avatar">
          <img
            src={avatarPath}
            alt="Pablo Koll"
            class="hero-avatar-img"
            id="hero-avatar-img"
            onerror="this.style.display='none'; document.getElementById('hero-avatar-fallback').style.display='flex';"
          />
          <div class="hero-avatar-fallback" id="hero-avatar-fallback" style="display:none">
            <span class="hero-avatar-initials">PK</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  /* ── Section shell ───────────────────────────────────── */
  .hero-section {
    padding: 96px 64px 120px;
  }

  .hero-inner {
    max-width: 1120px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 48px;
    align-items: center;
  }

  .hero-content {
    min-width: 0;
  }

  /* ── Typography ──────────────────────────────────────── */
  .hero-prompt {
    font-family: var(--font-mono);
    font-size: 14px;
    color: var(--fg-muted);
    margin: 0 0 16px;
  }

  .hero-headline {
    font-family: var(--font-mono);
    font-size: clamp(64px, 9vw, 100px);
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.0;
    color: var(--fg);
    margin: 0;
  }

  .hero-dot {
    color: var(--pk-steel);
  }

  .hero-subline {
    margin: 20px 0 0;
    font-size: 15px;
    color: var(--fg-muted);
    font-style: italic;
    line-height: 1.6;
    max-width: 520px;
  }

  /* ── CTAs ────────────────────────────────────────────── */
  .hero-ctas {
    margin-top: 32px;
    display: flex;
    gap: 12px;
    align-items: center;
    flex-wrap: wrap;
  }

  .btn-primary,
  .btn-secondary {
    font-family: var(--font-mono);
    font-size: 14px;
    font-weight: 500;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    position: relative;
    transition: background var(--duration-2) var(--ease),
                color var(--duration-2) var(--ease);
  }

  .btn-primary {
    border: 1px solid transparent;
    background: var(--pk-steel);
    color: #fff;
  }
  .btn-primary:hover { background: var(--pk-steel-hover); }

  .btn-secondary {
    border: 1px solid var(--border);
    background: transparent;
    color: var(--fg);
  }
  .btn-secondary:hover { background: var(--bg-surface); }

  /* Tooltips on CTAs */
  .btn-primary::after,
  .btn-secondary::after {
    content: attr(data-tooltip);
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    font-family: var(--font-mono);
    font-size: 11px;
    white-space: nowrap;
    padding: 4px 8px;
    background: var(--bg-surface);
    border: 1px solid var(--border);
    border-radius: 4px;
    color: var(--fg-secondary);
    opacity: 0;
    pointer-events: none;
    transition: opacity 120ms ease;
    z-index: 10;
  }
  .btn-primary:hover::after,
  .btn-secondary:hover::after {
    opacity: 1;
  }

  /* ── Availability ────────────────────────────────────── */
  .hero-availability {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: var(--font-mono);
    font-size: 13px;
    color: var(--fg-muted);
    font-style: italic;
  }

  .availability-dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 99px;
    background: var(--pk-green);
    flex-shrink: 0;
    animation: pulse-dot 2s ease-in-out infinite;
  }

  @keyframes pulse-dot {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%       { opacity: 0.5; transform: scale(0.75); }
  }

  /* desktop: shown in right column above avatar; hidden in left column */
  .hero-availability--mobile  { display: none; }
  .hero-availability--desktop { display: flex; margin-bottom: 16px; justify-content: center; }

  /* ── Right column ────────────────────────────────────── */
  .hero-right {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
  }

  /* ── Avatar ──────────────────────────────────────────── */
  .hero-avatar-wrap {
    flex-shrink: 0;
  }

  .hero-avatar {
    width: 220px;
    height: 220px;
    border-radius: 16px;
    border: 1px solid var(--border);
    background: var(--bg-surface);
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    position: relative;
  }

  .hero-avatar-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
  }

  .hero-avatar-fallback {
    position: absolute;
    inset: 0;
    align-items: center;
    justify-content: center;
  }

  .hero-avatar-initials {
    font-family: var(--font-mono);
    font-size: 32px;
    font-weight: 700;
    color: var(--fg-muted);
    letter-spacing: -0.02em;
  }

  /* ── Mobile ──────────────────────────────────────────── */
  @media (max-width: 720px) {
    .hero-section {
      padding: 72px 24px 48px;
    }

    .hero-inner {
      grid-template-columns: 1fr;
    }

    .hero-right {
      display: none;
    }

    /* show availability below CTAs in left column */
    .hero-availability--mobile {
      display: flex;
      margin-top: 28px;
    }
  }
</style>

<script>
  document.querySelectorAll<HTMLButtonElement>('[data-scroll-to]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.scrollTo!);
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
</script>
```

- [ ] **Step 2: Start dev server and verify visually**

```bash
npm run dev
```

Open `http://localhost:4321` and check:
- Headline "Pablo / Koll." renders large (~100px desktop, scales down on small viewports)
- `.` is blue/steel color
- Subline italic muted text below
- "View my work →" primary button, "Let's talk" secondary button
- Hovering each button shows tooltip (`projects_scroll()` / `contact_scroll()`)
- Clicking each button smooth-scrolls to the correct section
- Green pulsing dot + "available for freelance" appears **above the avatar** on desktop
- On mobile (≤720px): right column hidden, availability appears **below the CTAs**

- [ ] **Step 3: Verify type check**

```bash
npx astro check
```

Expected: no errors.

---

### Task 3: Final check and commit

**Files:** all modified files

- [ ] **Step 1: Check git diff looks clean**

```bash
git diff --stat
```

Expected: 3 files changed — `src/lib/types.ts`, `src/data/portfolio.json`, `src/components/Hero.astro` + `.claude/docs/superpowers/specs/2026-04-27-hero-refactor-design.md`

- [ ] **Step 2: Commit everything**

```bash
git add src/lib/types.ts src/data/portfolio.json src/components/Hero.astro .claude/docs/superpowers/specs/2026-04-27-hero-refactor-design.md
git commit -m "feat: hero refactor with large headline, updated copy and CTAs"
```
