# Maxará Aesthetics — Agent Handoff & Project Context

## Project Overview
A luxury spa website mockup for **Maxará Aesthetics**. Design inspiration is https://www.itstheperfectsecret.com/ — quiet luxury aesthetic, scroll-triggered animations, editorial typography. Built as a single standalone HTML file.

**Primary file:** `index.html`
**Asset folder:** `assets/images/`

---

## Color Palette (CSS Custom Properties in `:root`)
| Variable | Hex | Usage |
|---|---|---|
| `--color-oyster` | `#F5F0E8` | Primary background |
| `--color-oyster-dark` | `#EDE6D6` | Alternating section backgrounds |
| `--color-charcoal` | `#2C2C2C` | Primary text |
| `--color-walnut` | `#5C3D2E` | Dark accent — feature panel, footer, marquee |
| `--color-terracotta` | `#C4673A` | Accent — eyebrows, hover fills, card borders |
| `--color-gold` | `#B89A5A` | Decorative — rules, nav border, logo lines |
| `--color-cream-pure` | `#FAF7F2` | Cards, text on dark backgrounds |

## Typography
| Role | Font | Weights |
|---|---|---|
| Display / Headings | Cormorant Garamond | 300, 400, 600 + italic |
| Labels / Eyebrows | Josefin Sans | 100, 300 (uppercase, wide tracking) |
| Body copy | Lato | 300, 400 |

---

## Image Assets

### Folder Structure
```
assets/images/
├── logos/
│   └── Logo.png                   ← Nav, loader, footer
├── home page/
│   ├── Hero.png                   ← Hero background (parallax)
│   ├── interior-1.png             ← About section + CTA background
│   ├── interior-2.png             ← Signature Treatment feature
│   ├── interior-3.png             ← Gallery slot 1
│   └── esthetician-amanda.jpg     ← Meet Amanda portrait
└── hydrafacial/                   ← Empty — reserved for Hydrafacial service page
```

### Path Reference (as used in index.html)
| File | Path in Code | Used In |
|---|---|---|
| `Logo.png` | `assets/images/logos/Logo.png` | Nav, loader, footer |
| `Hero.png` | `assets/images/home page/Hero.png` | Hero CSS background |
| `interior-1.png` | `assets/images/home page/interior-1.png` | About image + CTA CSS background |
| `interior-2.png` | `assets/images/home page/interior-2.png` | Signature Treatment feature |
| `interior-3.png` | `assets/images/home page/interior-3.png` | Gallery slot 1 |
| `esthetician-amanda.jpg` | `assets/images/home page/esthetician-amanda.jpg` | Meet Amanda portrait |

---

## Sections — Status & Details

### 1. Page Loader ✅ COMPLETE
- Full-viewport oyster overlay with centered, pulsing `Logo.png`
- Fades out 600ms after `window.load`
- **HTML:** `.loader` div at top of `<body>`
- **JS Block 1**

### 2. Navigation ✅ COMPLETE
- Fixed; transparent over hero → frosted glass (`backdrop-filter: blur(14px)`) after 80px scroll
- Smart-hide: hides on scroll-down past 400px, reappears on scroll-up
- Logo shrinks from 52px → 40px when scrolled
- Links have terracotta underline slide-in on hover
- "Book Now" CTA button with terracotta fill on hover
- Hamburger icon visible on mobile (no dropdown yet — **FUTURE WORK**)
- **HTML:** `<nav id="nav">` — logo, `nav__links` ul, `nav__cta`, `nav__hamburger`
- **JS Block 3**

### 3. Hero ✅ COMPLETE
- 100vh, `Hero.png` as background with parallax (`translateY(scrollY * 0.4px)`)
- Gradient overlay (dark at bottom)
- Headline: word-by-word staggered slide-up reveal on load
- Eyebrow, subline, CTA button fade up on load (staggered delays)
- Hero content fades out + floats up as user scrolls away
- Animated scroll hint (line + "Scroll" label) at bottom center
- **HTML:** `<section class="hero" id="hero">`
- **JS Blocks 4 + 5**

### 4. Marquee Strip ✅ COMPLETE
- Walnut background, CSS infinite scroll left
- Services listed: Signature Facials · Chemical Peels · Dermaplaning · Lash Lifts · Brow Design · Body Treatments · Advanced Skincare · Waxing
- Gold text, terracotta dot separators
- Pauses on hover
- **HTML:** `.marquee-strip`

### 5. About / Philosophy ✅ COMPLETE
- Two-column grid: text left, image right
- **Text:** Headline splits into 3 lines that each reveal from below via `.reveal-line` on scroll (Intersection Observer)
- Two body paragraphs + signature line fade up with stagger
- **Image:** `interior-1.png` slides in from right; gold offset frame border expands on entry
- Walnut "500+ Clients Transformed" stat tag overlapping image bottom-right corner
- **HTML:** `<section class="about" id="about">`
- **JS Block 6** (IntersectionObserver)

### 6. Services Grid ✅ COMPLETE
- 3×2 grid of cards on oyster-dark background
- Cards stagger-enter from below (7ms delay per card)
- **Hover:** Terracotta fill sweeps up from bottom (scaleY 0→1 on `::before` pseudo)
- All text transitions to cream on hover; arrow icon slides right
- Cards:
  - 01 **HydraFacials** — links to `#` (future standalone page)
  - 02 **Chemical Peels** — links to `#` (future standalone page)
  - 03 **Laser Hair Removal** — links to `#` (future standalone page)
  - 04 **Microneedling** — links to `#` (future standalone page)
  - 05 **Waxing** — links to `#` (future standalone page)
  - 06 **Advanced Skincare** — links to `advanced-skincare.html` (standalone page, includes Ultherapy, waxing details, and other treatments; **not yet built**)
- **HTML:** `<section class="services" id="services">`
- **JS Block 6**

### 7. Signature Treatment Feature ✅ COMPLETE
- Split-screen: `interior-2.png` on left (Ken Burns scale 1.08→1 settle on enter), dark walnut content panel on right
- Content panel slides in from right on scroll
- "The Maxará Ritual Facial" copy
- 3 bullet points stagger in from left with terracotta dash prefix
- "Book This Treatment" light button
- **HTML:** `<section class="feature" id="feature">`
- **JS Block 6**

### 8. Meet Amanda ✅ COMPLETE
- Two-column: portrait left, bio right
- **Name:** Amanda Cortes
- **Portrait:** `esthetician-amanda.jpg` with `clip-path: inset(0 100% 0 0)` → `inset(0 0% 0 0)` curtain-reveal animation (1.5s)
- Bio fades + rises with 0.3s delay
- Credentials shown as terracotta tags with gold dot prefix: Licensed Esthetician · Laser Certification · HydraFacial Specialist
- **HTML:** `<section class="meet" id="meet">`
- **JS Block 6**

### 9. Stats Strip ✅ COMPLETE
- Charcoal background, 4-column grid
- Stats: 500+ Clients · 3 Years · 12 Treatments · 98% Satisfaction
- Each number counts up from 0 via `requestAnimationFrame` with easeOut cubic when entering viewport
- Items stagger in from below
- **HTML:** `<div class="stats">`
- **JS Block 7**

### 10. Gallery / Results ✅ COMPLETE
- 3-column asymmetric CSS grid (items 1 + 4 span 2 rows)
- Mix of real images (interior-1, interior-3) and 6 styled placeholder divs with image icon + label
- Placeholder labels: Studio · Dermaplaning · Chemical Peel · Signature Facial · (unlabeled) · Lash Lift
- Items stagger in with scale(0.97)→1 + translateY
- Hover: image zooms to scale(1.06)
- "Before / After Image" text in placeholder divs — ready to swap with real photos
- **HTML:** `<section class="gallery" id="gallery">`
- **JS Block 6**

### 11. Testimonials ✅ COMPLETE
- Horizontal drag-to-scroll card row (with momentum)
- Touch-swipe support included
- 4 cards, each with 5 gold stars, italic quote (Cormorant Garamond), terracotta top border
- Cards stagger in from right (12ms delay each) via IntersectionObserver
- Clients: M. Laurent · C. Voss · R. Almeida · N. Blackwood
- **HTML:** `<section class="testimonials" id="testimonials">`
- **JS Block 8**

### 12. CTA / Booking ✅ COMPLETE
- Full-bleed `interior-1.png`, blurred (3px) + darkened as background
- CTA background has parallax (`getBoundingClientRect` based)
- Dark overlay scrim
- Centered content: headline + subline + "Book Your Consultation" button
- Content fades + rises on scroll entry
- **HTML:** `<section class="cta-section" id="booking">`
- **JS Block 5** (parallax)

### 13. Footer ✅ COMPLETE
- Charcoal background
- 3-column top: logo+tagline+social links · navigation links · contact info (address, hours, email)
- Logo rendered white via `filter: brightness(0) invert(1)`
- Gold rule divider between top and bottom
- Bottom bar: copyright left, Privacy Policy + Terms right
- **HTML:** `<footer class="footer">`

---

## Global Systems (Shared Across Sections)

### Scroll Progress Bar
- 2px terracotta line fixed at very top of viewport
- `scaleX` scales from 0→1 as user scrolls full page
- **HTML:** `<div class="scroll-progress" id="scrollProgress">`
- **JS Block 4**

### Eyebrow Treatment
- `.eyebrow` class — terracotta uppercase label with gold rule that extends to 40px on `.in-view`
- Used before every section headline

### Button System
- `.btn` with `::before` fill sweep (scaleX 0→1 left-to-right)
- Variants: `.btn--dark`, `.btn--light`, `.btn--terracotta`

### Intersection Observer
- Single shared observer in JS Block 6
- Adds `.in-view` class, then unobserves (one-shot animations)
- Threshold: 12% visible, rootMargin: `-40px` from bottom

---

## Known Gaps / Future Work

| Item | Priority | Notes |
|---|---|---|
| Mobile hamburger menu dropdown | Medium | Hamburger icon exists in HTML/CSS but has no open/close JS logic or mobile nav panel |
| Real before/after images | High | 4 placeholder divs in gallery ready to swap — just replace `<div class="gallery__placeholder">` with `<img>` |
| Booking form / external link | High | CTA "Book Your Consultation" button links to `#` — needs real booking URL or embedded form |
| Social links | Medium | Instagram, TikTok, Pinterest in footer link to `#` |
| Contact details | Medium | Address, hours, email are placeholder text |
| Service detail pages | Low | Each service card "Learn More" links to `#` |
| SEO meta tags | Low | No OG tags, no description meta tag yet |
| Favicon | Low | No favicon set |
| Form / contact section | Low | No contact form — only CTA button |
| Cursor follower effect | Low | Planned but not built — custom cursor that expands on hover over cards |

---

## File Structure
```
New Website2/
├── index.html               ← Single-file site (HTML + CSS + JS all inline)
├── AGENT_HANDOFF.md         ← This file
└── assets/
    └── images/
        ├── logos/
        │   └── Logo.png
        ├── home page/
        │   ├── Hero.png
        │   ├── interior-1.png
        │   ├── interior-2.png
        │   ├── interior-3.png
        │   └── esthetician-amanda.jpg
        └── hydrafacial/     ← Empty — reserved for upcoming Hydrafacial service page
```

---

## How to Continue Work

1. **Always read `index.html` first** before making any changes — all CSS and JS are embedded in that single file.
2. CSS is in `<style>` in `<head>`. Sections are clearly labeled with comments like `/* HERO SECTION */`.
3. JS is in a single `<script>` at the bottom of `<body>`. Each block is numbered and labeled.
4. To add a new section: insert the HTML between existing sections, add corresponding CSS before the `RESPONSIVE` block, and add any JS logic as a new numbered block in the script.
5. Responsive breakpoints are at the bottom of the CSS: 1100px (tablet), 768px (mobile), 480px (small mobile).
