# Maxará Aesthetics — Spa Website

Luxury medical aesthetics website for Maxará Aesthetics in Griffin, GA.

## Tech Stack

Pure static site — **no framework, no build tools, no package manager**.
- HTML5, embedded CSS3, embedded vanilla JavaScript
- Google Fonts (Cormorant Garamond, Josefin Sans, Lato)
- No external CSS/JS files — all styles and scripts live inside each HTML file

## Pages (7 files)

| File | Purpose |
|------|---------|
| `index.html` | Homepage — hero, services grid, testimonials, team, gallery |
| `hydrafacial.html` | HydraFacial service page |
| `chemical-peels.html` | Chemical Peels service page |
| `laser-hair-removal.html` | Laser Hair Removal service page |
| `microneedling.html` | Microneedling service page |
| `waxing.html` | Waxing service page |
| `advanced-skincare.html` | Advanced Skincare treatments hub |

## Shared Components (duplicated across all pages)

These are copy-pasted into every HTML file. **When editing any of these, update all 7 files:**
- **Nav** — fixed bar with frosted glass, smart-hide on scroll, mobile hamburger menu
- **Footer** — 3-column layout with contact, navigation, social links
- **Page loader** — full-screen overlay with pulsing logo
- **Scroll progress bar** — terracotta bar at top of viewport

## Design System

### Colors (CSS custom properties on `:root`)
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
`logos/`, `home-page/`, `hydrafacial/`, `chemical-peels/`, `laser-hair-removal/`, `microneedling/`, `waxing/`, `advanced-skincare/`, `jet-plasma/`, `generic/`, `miscelaneous/`

Icons are inline SVGs — no icon library.

## External Integrations

- **Booking:** GlossGenius — all "Book Now" buttons link to `https://maxaraaesthetics.glossgenius.com/`
- **Social:** Instagram and Facebook (`@maxaraaesthetics`)
- **Contact:** 504 S 8th St, Griffin, GA 30224 | (770) 796-7418 | info@maxaraaesthetics.com

## Key Conventions

- Keep CSS and JS embedded in each HTML file (no external stylesheets)
- Follow the existing color/typography variables — never hardcode hex values
- Use the established animation classes (`reveal-up`, etc.) for new sections
- Service pages follow a consistent layout: hero → intro → features → pricing → FAQ → CTA → footer
- All images use descriptive alt text
