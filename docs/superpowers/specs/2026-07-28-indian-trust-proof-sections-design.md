# Indian Trust & Proof Sections — Design Spec

Date: 2026-07-28

## Goal

Make the site resonate with Indian tier-3 business owners (local shops, traders,
coaching classes, small manufacturers) and prove the team's social media
marketing results with concrete, visible evidence rather than generic
corporate testimonials.

## Background

Current site (`onex_service`) is a React 19 + Vite + Tailwind 4 marketing
site with a blue/purple "premium tech" look. It has `services.jsx`,
`testimonials.jsx` (video testimonials with stock names like "Ava Martinez"),
`portfolio.jsx`, but no client logo wall, no embedded social proof (reels),
and no growth/results visualization. The audience being targeted is
Indian tier-3 businesses, who respond better to: WhatsApp contact, ₹ pricing,
local/regional case studies, and visible proof (real client names, real
results, real content) over abstract claims.

## Scope

This spec covers five additions/changes:

1. Indian visual identity accents (colors, WhatsApp CTA)
2. Client Logo Wall (new component)
3. Viral Reels Showcase (new component, embeds real Instagram reels)
4. Client Growth Dashboard (new component, charts via `recharts`)
5. Client Reviews (extend existing `testimonials.jsx` with text + video mix, real Indian clients)

Out of scope: full rebrand/color overhaul, bilingual (Hindi) UI, pricing page,
portfolio redesign, backend/CMS for managing this content (all content is
hardcoded arrays in components, consistent with current codebase patterns).

## 1. Indian Visual Identity

- Add two new CSS variables to `src/Styles/global.css` `:root` and `.dark`:
  `--brand-saffron: #FF9933`, `--brand-green: #138808`.
- These are used selectively as accent highlights (e.g. a border/underline
  on the new sections' headings, or the WhatsApp CTA button color) — not a
  full repaint of the existing blue/purple system.
- Add a floating WhatsApp CTA: a fixed-position circular button
  (bottom-right, all pages) linking to `https://wa.me/<number>` (placeholder
  number, user fills in real one), rendered from `Layout.jsx` so it's
  present site-wide. Uses `lucide-react`'s existing icon set (no new icon
  dependency needed — check for a WhatsApp-shaped icon or use an inline SVG).
- Any new pricing copy introduced in these sections uses ₹.

## 2. Client Logo Wall

New file: `src/Components/ClientLogos.jsx`

- Horizontal auto-scrolling marquee of client logos + names, built with
  `framer-motion` (already a dependency), looping infinitely via a
  translateX animation on a duplicated list (standard marquee technique —
  render the logo list twice back-to-back and animate the whole row).
- Data shape: `const clients = [{ name: string, logo: string (path under
  /public), city?: string }]`. User will supply real logo image files to
  drop into `public/clients/`.
- Placed in `App.jsx` directly after `Hero`, before `Services`.
- Styling consistent with existing card patterns (`rounded-2xl`,
  `border-border`, `bg-foreground/5`).

## 3. Viral Reels Showcase

New file: `src/Components/ReelsShowcase.jsx`

- Section titled something like "Reels That Went Viral" with a grid/carousel
  (reusing existing `src/Components/ui/carousel.jsx`) of embedded Instagram
  reels.
- Each reel embedded via Instagram's official embed method: an
  `<blockquote class="instagram-media" data-instgrm-permalink="...">` per
  reel, plus Instagram's `embed.js` script (`https://www.instagram.com/embed.js`)
  loaded once and re-processed (`window.instgrm.Embeds.process()`) on mount
  via a `useEffect`, since this is a React SPA and the script only auto-runs
  on full page load.
- Data shape: `const reels = [{ permalink: string, clientName: string,
  resultCaption: string }]`. User supplies 3-6 real reel URLs + captions
  (e.g. "300K views, 40K new followers in 1 week").
- Placed in `App.jsx` after `Services`, before the results/testimonials
  section.
- Loading state: show a simple skeleton/placeholder card until
  `instgrm.Embeds.process()` renders the iframe (Instagram embeds can take
  a moment to load).

## 4. Client Growth Dashboard

New file: `src/Components/GrowthDashboard.jsx`
New dependency: `recharts` (added to `package.json`)

- Section titled "Real Results, Real Growth" with a grid of per-client
  cards, each containing a small line or bar chart (recharts
  `ResponsiveContainer` + `LineChart`/`BarChart`) plotting followers or
  engagement over time.
- Data shape: `const results = [{ clientName: string, metricLabel: string
  (e.g. "Followers"), dataPoints: [{ label: string (e.g. month), value:
  number }] }]`. User supplies real numbers per client.
- Chart colors pull from existing CSS vars (`--brand-blue`, `--brand-purple`,
  or the new saffron/green accents) via inline style props, since recharts
  needs literal color values rather than Tailwind classes.
- Placed in `App.jsx` after `ReelsShowcase`, before `Testimonials`.

## 5. Client Reviews (extend `testimonials.jsx`)

- Keep the existing video-testimonial card layout/animation as-is.
- Add a second card variant for text-only reviews (no video iframe) using
  the same visual treatment (animated border, avatar, name/role) minus the
  video embed — for clients who gave a written review but no video.
- Replace the current placeholder data (`Ava Martinez`, `NovaTech`, etc.)
  with real Indian client names/roles/quotes supplied by the user. Mixed
  array: some entries have `videoUrl`, some don't; the component branches
  on presence of `videoUrl` to pick card variant.

## Data the user still needs to supply

- WhatsApp business number
- Client logo image files + names (+ optional city) for the Logo Wall
- 3-6 Instagram reel permalinks + client name + result caption
- Per-client growth numbers (at least a few data points) for the dashboard
- Real client names/roles/quotes (+ optional video URLs) for Reviews

Until supplied, each component ships with clearly-marked placeholder data
so the sections are visually complete and easy to swap in real content.

## Testing

No test framework is currently configured in this project (`src/test` is
empty, no test runner in `package.json`). Verification will be manual:
run `npm run dev`, visually check each new section renders, animates, and
is responsive at mobile/tablet/desktop widths, and confirm `npm run build`
succeeds with the new `recharts` dependency.
