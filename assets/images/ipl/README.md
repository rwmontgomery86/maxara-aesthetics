# IPL Photofacial — Image Assets

Imagery referenced by `ipl.html`. The hero and "What is IPL" sections now use real
photography. The Before & After section is currently commented out in `ipl.html`
and is awaiting additional photography — the planned filenames are listed below
so they can drop in cleanly when the section is restored.

## Active images (in use)

| Filename | Aspect | Use |
|---|---|---|
| `ipl-hero-main.jpg` | portrait | Hero main image — large left-side block in two-image grid |
| `ipl-hero-accent.jpg` | portrait | Hero accent image — smaller, overlaps bottom-right of main with charcoal shadow offset |
| `optilight-device.jpg` | 4:5 portrait | "What is IPL" editorial split section — Lumenis OptiLight device shot |

The Open Graph / Twitter Card thumbnail reuses `ipl-hero-main.jpg` (referenced as an
absolute URL via `og:image` / `twitter:image` meta tags in `ipl.html`).

## Pending images (awaiting client supply)

These slots are currently commented out in `ipl.html` inside the `BEFORE & AFTER`
section. When photography is available, drop the files here and uncomment that
section. While doing so, also revert the `.ipl-care` (oyster) and `.faq`
(oyster-dark) background overrides — they were swapped to avoid two adjacent beige
sections while B&A is hidden.

| Filename | Aspect | Use |
|---|---|---|
| `ipl-ba-01-before.jpg` | 3:4 portrait | Before/After pair 1 — Sun Damage, face |
| `ipl-ba-01-after.jpg`  | 3:4 portrait | Before/After pair 1 — Sun Damage, face |
| `ipl-ba-02-before.jpg` | 3:4 portrait | Before/After pair 2 — Redness, cheeks |
| `ipl-ba-02-after.jpg`  | 3:4 portrait | Before/After pair 2 — Redness, cheeks |
| `ipl-ba-03-before.jpg` | 3:4 portrait | Before/After pair 3 — Chest pigmentation |
| `ipl-ba-03-after.jpg`  | 3:4 portrait | Before/After pair 3 — Chest pigmentation |
