# Maxará Aesthetics — Spa Website

Luxury medical aesthetics website for Maxará Aesthetics in Griffin, GA.

## Tech Stack

Pure static site — **no framework, no build tools, no package manager**.
- HTML5, CSS3, vanilla JavaScript
- Google Fonts (Cormorant Garamond, Josefin Sans, Lato)
- Shared stylesheet `styles.css` (1075 lines) — base reset, variables, nav, footer, loader, scroll bar, shared component styles
- Page-specific styles and scripts are embedded in each HTML file via `<style>` and `<script>` tags

## Pages (13 files)

### Service Pages
| File | Purpose |
|------|---------|
| `index.html` | Homepage — hero, services grid, testimonials, team, gallery |
| `hydrafacial.html` | HydraFacial service page |
| `chemical-peels.html` | Chemical Peels service page |
| `laser-hair-removal.html` | Laser Hair Removal service page |
| `microneedling.html` | Microneedling service page |
| `waxing.html` | Waxing service page |
| `advanced-skincare.html` | Advanced Skincare treatments hub |

### Supporting Pages
| File | Purpose |
|------|---------|
| `our-team.html` | Team bios — Amanda Cortes, Courtney Nelson, Dr. Lori Martin |
| `gift-cards.html` | Gift card purchasing info |
| `payment-plans.html` | Cherry financing / payment plan info |
| `privacy-policy.html` | Privacy policy (legal) |
| `refund-policy.html` | Refund policy (legal) |
| `terms-and-conditions.html` | Terms and conditions (legal) |

## Shared Components

### External shared stylesheet (`styles.css`)
Contains CSS custom properties, reset, base typography, and styles for components shared across all pages:
- **Nav** — fixed bar with frosted glass, smart-hide on scroll, mobile hamburger menu
- **Footer** — 3-column layout with contact, navigation, social links
- **Page loader** — full-screen overlay with pulsing logo
- **Scroll progress bar** — terracotta bar at top of viewport
- **Buttons, reveal animations, eyebrow labels**

### Duplicated HTML
The nav, footer, loader, and scroll bar HTML markup is copy-pasted into every HTML file. **When editing any of these, update all 13 files.**

## Design System

### Colors (CSS custom properties on `:root` in `styles.css`)
```
--color-oyster:      #F5F0E8   (primary background)
--color-oyster-dark: #EDE6D6   (alternating section bg)
--color-charcoal:    #2C2C2C   (primary text)
--color-walnut:      #5C3D2E   (dark accent, footer bg)
--color-terracotta:  #C4673A   (accents, hovers, CTAs)
--color-gold:        #B89A5A   (decorative borders, stars)
--color-cream-pure:  #FAF7F2   (light text on dark bg)
--color-mist:        rgba(245, 240, 232, 0.92)  (nav blur bg)
```

### Typography
- **Headings:** Cormorant Garamond (300/400/600)
- **Labels/eyebrows:** Josefin Sans (100/300/400), uppercase, letter-spacing 0.15em
- **Body:** Lato (300/400)

### Responsive Breakpoints
- 1100px — tablet
- 768px — mobile (hamburger nav activates)
- 480px — small mobile

## Animation Patterns

All scroll animations use `IntersectionObserver` with 12% threshold:
- `.reveal-up` / `.reveal-left` / `.reveal-right` — fade + translate, triggered by adding `.in-view`
- `.eyebrow` — uppercase label with gold underline that scales in
- `.btn` — horizontal fill sweep on hover (terracotta)
- Parallax hero background via `requestAnimationFrame`
- Staggered card entrances via `transitionDelay`

## Assets

Images in `assets/images/` organized by page:
`logos/`, `home-page/`, `hydrafacial/`, `chemical-peels/`, `laser-hair-removal/`, `microneedling/`, `waxing/`, `advanced-skincare/`, `jet-plasma/`, `generic/`, `miscelaneous/`, `our-team/`, `gift-cards/`

Icons are inline SVGs — no icon library.

## External Integrations

- **Booking:** GlossGenius — all "Book Now" buttons link to `https://maxaraaesthetics.glossgenius.com/`
- **Financing:** Cherry — payment plan applications
- **Social:** Instagram and Facebook (`@maxaraaesthetics`)
- **Contact:** 504 S 8th St, Griffin, GA 30224 | (770) 796-7418 | info@maxaraaesthetics.com

## Key Conventions

- Shared styles go in `styles.css`; page-specific styles stay embedded in the HTML file
- Follow the existing color/typography variables — never hardcode hex values
- Use the established animation classes (`reveal-up`, etc.) for new sections
- Service pages follow a consistent layout: hero → intro → features → pricing → FAQ → CTA → footer
- All images use descriptive alt text
- When editing nav, footer, loader, or scroll bar markup — update all 13 HTML files

## Workflow

New pages and features are developed in **git worktrees** under `.claude/worktrees/<name>` on a feature branch (typically `claude/<name>`). The parent repo at `/Users/rwmontgomery/Desktop/New Website2` always has `main` checked out.

When working in a worktree, after completing a visual change to any HTML file, proactively offer to open the modified file in the browser for testing using `open <worktree-path>/<file>`. The user cannot browse to worktree files from the parent repo path, so always use the full worktree path.

When the user approves finished work and says **"ship it"** (or `/ship`), the flow is:

1. Commit any pending changes on the feature branch with a descriptive message and the standard `Co-Authored-By` trailer. Stage specific files — never `git add -A`.
2. Verify the branch is a fast-forward of `origin/main`. If `git log HEAD..origin/main` is non-empty, the branch has diverged — stop and rebase first (`git rebase origin/main`), never force-push.
3. `git push -u origin <branch>` — push the feature branch to GitHub.
4. `git push origin <branch>:main` — fast-forward `origin/main` to the branch tip via refspec push. GitHub will reject this if it's not a fast-forward, which is the desired safety net. **Never** add `--force` or `--force-with-lease`.
5. `git -C <parent-repo> fetch origin && git -C <parent-repo> merge --ff-only origin/main` — update local `main` in the parent repo. (Refspec fetch into `main` doesn't work because `main` is checked out; the merge in the parent's working tree does.)
6. Offer to remove the worktree (`ExitWorktree` with `action: "remove"`) and optionally delete the remote feature branch (`git push origin --delete <branch>`). Both require explicit user approval.

The `/ship` skill at `~/.claude/skills/ship/SKILL.md` automates this exact flow. Prefer it over running the steps manually.

**Hard rules:** never force-push, never amend a pushed commit, never bypass hooks (`--no-verify`), never blanket-allow `git push`. Linear history only — no merge commits on `main`.
