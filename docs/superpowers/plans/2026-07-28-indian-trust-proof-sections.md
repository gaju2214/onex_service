# Indian Trust & Proof Sections Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add five trust-building additions to the marketing site for Indian tier-3 business clients: a client logo wall, an embedded Instagram reels showcase, a client growth-metrics dashboard, revamped reviews (video + text), and Indian visual identity accents (saffron/green + WhatsApp CTA).

**Architecture:** Four new presentational React components (`ClientLogos`, `ReelsShowcase`, `GrowthDashboard`, `WhatsAppButton`) plus edits to `testimonials.jsx` and `global.css`, wired into `App.jsx` in a fixed section order. All content is hardcoded placeholder data arrays at the top of each file, matching the existing pattern in `services.jsx`/`testimonials.jsx` — the user swaps in real data later by editing those arrays.

**Tech Stack:** React 19, Vite, Tailwind CSS 4, framer-motion (existing dependency), recharts (new dependency), Instagram oEmbed script (external, loaded at runtime).

## Global Constraints

- No test framework exists in this project (`src/test` is empty, no runner in `package.json`). Verification is manual: `npm run dev`, visually check in browser, and `npm run build` must succeed.
- Follow existing component conventions: named export function components, `motion.*` for scroll-in animations (`initial`/`whileInView`/`viewport={{ once: true }}`), Tailwind utility classes matching current style (`rounded-2xl`, `border-border`, `bg-foreground/5`, `backdrop-blur`, `font-heading` for section titles).
- All new sections use hardcoded placeholder arrays at the top of the file, clearly commented as placeholder data to be replaced with real assets.
- New CSS variables go in both `:root` and `.dark` blocks of `src/Styles/global.css`.
- `App.jsx` is the actual composition root (not `Layout.jsx`, which is unused dead code — do not modify `Layout.jsx`).
- Section order in `App.jsx` after this plan: `Navbar, Hero, ClientLogos, About, Services, ReelsShowcase, GrowthDashboard, Testimonials, WebsiteDevelopment, Contact, Footer`, with `WhatsAppButton` rendered as a fixed-position sibling alongside `FloatingStickers`.

---

### Task 1: Indian visual identity CSS variables + WhatsApp floating button

**Files:**
- Modify: `src/Styles/global.css:6-54` (`:root` block), `src/Styles/global.css:56-94` (`.dark` block)
- Create: `src/Components/WhatsAppButton.jsx`
- Modify: `src/App.jsx`

**Interfaces:**
- Produces: CSS vars `--brand-saffron` (`#FF9933`) and `--brand-green` (`#138808`), usable via `var(--brand-saffron)` / `var(--brand-green)` or Tailwind arbitrary values `text-[var(--brand-saffron)]` in later tasks (Reels/Dashboard headings use these as accent color).
- Produces: `WhatsAppButton` component (default export not needed — named export `export function WhatsAppButton()`), no props, renders a fixed-position circular link button.

- [ ] **Step 1: Add saffron/green CSS variables**

In `src/Styles/global.css`, inside the `:root` block, right after line 40 (`--brand-purple: #8b5cf6;`), add:

```css
  --brand-saffron: #FF9933;
  --brand-green: #138808;
```

Inside the `.dark` block, right after line 76 (`--accent: #8b5cf6;`), add the same two lines (values stay identical in dark mode — they're accent colors, not surface colors):

```css
  --brand-saffron: #FF9933;
  --brand-green: #138808;
```

- [ ] **Step 2: Create the WhatsApp floating button component**

Create `src/Components/WhatsAppButton.jsx`:

```jsx
import { motion } from "framer-motion"

// Placeholder number — replace with real business WhatsApp number (country code, no +/spaces).
const WHATSAPP_NUMBER = "911234567890"
const WHATSAPP_MESSAGE = "Hi! I'm interested in your social media marketing services."

export function WhatsAppButton() {
    const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg"
            style={{ backgroundColor: "#25D366" }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <svg
                viewBox="0 0 24 24"
                className="h-7 w-7 fill-white"
                aria-hidden="true"
            >
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.29-1.39a9.9 9.9 0 0 0 4.7 1.2h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.84 14.11c-.25.7-1.45 1.34-2 1.43-.51.08-1.15.11-1.86-.12-.43-.14-.98-.32-1.69-.63-2.97-1.28-4.91-4.27-5.06-4.47-.15-.2-1.21-1.61-1.21-3.07 0-1.46.77-2.18 1.04-2.48.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.19.01.44-.07.68.52.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.36 1.45.3.15.47.12.65-.07.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.27.1 1.75.82 2.05.97.3.15.5.22.57.35.07.13.07.72-.18 1.42Z" />
            </svg>
        </motion.a>
    )
}
```

- [ ] **Step 3: Wire the button into App.jsx**

In `src/App.jsx`, add the import next to the other component imports:

```jsx
import { WhatsAppButton } from "./Components/WhatsAppButton"
```

Add `<WhatsAppButton />` as a sibling right after `<FloatingStickers />`:

```jsx
    <ThemeProvider>
      <FloatingStickers />
      <WhatsAppButton />
      <div className="flex min-h-screen flex-col">
```

- [ ] **Step 4: Manually verify**

Run: `npm run dev`

Expected: Dev server starts without errors. Open the site in a browser — a green circular WhatsApp icon button appears fixed in the bottom-right corner on every scroll position, animates in after ~1s, and clicking it opens `https://wa.me/911234567890?text=...` in a new tab.

- [ ] **Step 5: Commit**

```bash
git add src/Styles/global.css src/Components/WhatsAppButton.jsx src/App.jsx
git commit -m "feat: add Indian accent colors and WhatsApp floating CTA"
```

---

### Task 2: Client Logo Wall

**Files:**
- Create: `src/Components/ClientLogos.jsx`
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: none (self-contained placeholder data).
- Produces: `export function ClientLogos()`, a section with `id="client-logos"`, no props. Uses real client logo files already present at `public/clients_logo/` (see `public/clients_logo/clients_details` for the source list of names and Instagram handles).

- [ ] **Step 1: Create the component with placeholder data and a duplicated-list marquee**

Create `src/Components/ClientLogos.jsx`:

```jsx
import { motion } from "framer-motion"

// Placeholder data — replace with real client names, cities, and logo file
// paths under /public/clients/ once assets are supplied.
// Real client data, sourced from public/clients_logo/clients_details.
// Logo files live under /public/clients_logo/ and are served at /clients_logo/<filename>.
const clients = [
    { name: "Maharaj Wholesale", instagram: "@maharaj.wholesale_official", logo: "/clients_logo/Maharaj Wholesale.png" },
    { name: "Peehus Rasoi", instagram: "@peehus.rasoi_333", logo: "/clients_logo/Peehus Rasoi.png" },
    { name: "The Kidszone", instagram: "@thekidszone_jalgaon", logo: "/clients_logo/The Kidszone.jpeg" },
    { name: "The Baithak Bar & Restro", instagram: "@thebaithak.jalgaon", logo: "/clients_logo/The Baithak Bar & Restro.png" },
    { name: "Hotel Shree Gajanan", instagram: "@hotel.shreegajanan", logo: "/clients_logo/Hotel Shree Gajanan.jpeg" },
    { name: "Navid Sofa", instagram: "@navidsofa", logo: "/clients_logo/Navid Sofa.png" },
    { name: "Aanand Saw Mill", instagram: "@asmwoodwork", logo: "/clients_logo/Aanand Saw Mill.jpeg" },
    { name: "ShopGrow", instagram: "@shopgrow.in", logo: "/clients_logo/ShopGrow.jpeg" },
    { name: "Kaviesh Creations, Pune", instagram: "@kaviesh_creations", logo: "/clients_logo/Kaviesh Creations, Pune.png" },
    { name: "Rita Bhalla Kitchen", instagram: "@ritabhalla.kitchen", logo: "/clients_logo/Rita Bhalla Kitchen .WEBP" },
    { name: "Louis Creation", instagram: "@louis_creation", logo: "/clients_logo/Louis Creation.JPEG" },
]

function LogoCard({ client }) {
    return (
        <div className="mx-4 flex h-24 w-44 flex-shrink-0 flex-col items-center justify-center gap-1 rounded-2xl border border-border bg-foreground/5 px-4 backdrop-blur">
            <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="h-12 w-12 rounded-full border border-border object-cover"
                loading="lazy"
                onError={(e) => {
                    e.currentTarget.style.display = "none"
                }}
            />
            <span className="text-center text-xs font-semibold leading-tight">{client.name}</span>
            <span className="text-xs text-foreground/60">{client.instagram}</span>
        </div>
    )
}

export function ClientLogos() {
    const track = [...clients, ...clients]

    return (
        <section
            id="client-logos"
            className="scroll-mt-24 overflow-hidden border-t border-border py-12"
            aria-label="Our Clients"
        >
            <motion.h2
                className="font-heading text-2xl font-bold md:text-3xl text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5 }}
            >
                Trusted by <span className="text-[var(--brand-saffron)]">Businesses</span> Across India
            </motion.h2>

            <div className="relative mt-8 w-full">
                <motion.div
                    className="flex w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                >
                    {track.map((client, i) => (
                        <LogoCard key={`${client.name}-${i}`} client={client} />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
```

- [ ] **Step 2: Wire into App.jsx**

In `src/App.jsx`, add the import:

```jsx
import { ClientLogos } from "./Components/ClientLogos"
```

Place `<ClientLogos />` right after `<Hero />`:

```jsx
        <Hero />
        <ClientLogos />
        <About />
```

- [ ] **Step 3: Manually verify**

Run: `npm run dev`

Expected: Section appears after Hero with a heading and a continuously scrolling row of 11 real client logo cards (Maharaj Wholesale, Peehus Rasoi, The Kidszone, etc.), each showing the actual logo image, client name, and Instagram handle. No console errors.

- [ ] **Step 4: Commit**

```bash
git add src/Components/ClientLogos.jsx src/App.jsx
git commit -m "feat: add scrolling client logo wall"
```

---

### Task 3: Viral Reels Showcase

**Files:**
- Create: `src/Components/ReelsShowcase.jsx`
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: `Carousel`, `CarouselContent`, `CarouselItem`, `CarouselNext`, `CarouselPrevious` from `./ui/carousel` (existing, signatures unchanged: `Carousel` takes `{ children, opts }`, `CarouselItem` takes `{ children, className }`).
- Produces: `export function ReelsShowcase()`, section `id="reels"`.

- [ ] **Step 1: Create the component with Instagram embed loading logic**

Create `src/Components/ReelsShowcase.jsx`:

```jsx
import { useEffect } from "react"
import { motion } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"

// Placeholder data — replace permalink/clientName/resultCaption with real
// Instagram reel URLs and results once supplied.
const reels = [
    {
        permalink: "https://www.instagram.com/reel/CxampleReel1/",
        clientName: "Shree Textiles",
        resultCaption: "300K views, 40K new followers in 1 week",
    },
    {
        permalink: "https://www.instagram.com/reel/CxampleReel2/",
        clientName: "Annapurna Sweets",
        resultCaption: "180K views during Diwali campaign",
    },
    {
        permalink: "https://www.instagram.com/reel/CxampleReel3/",
        clientName: "Sunrise Coaching Classes",
        resultCaption: "2,500 new enquiries in one month",
    },
]

function loadInstagramEmbedScript() {
    if (window.instgrm) {
        window.instgrm.Embeds.process()
        return
    }
    const existing = document.getElementById("instagram-embed-script")
    if (existing) return

    const script = document.createElement("script")
    script.id = "instagram-embed-script"
    script.src = "https://www.instagram.com/embed.js"
    script.async = true
    script.onload = () => window.instgrm && window.instgrm.Embeds.process()
    document.body.appendChild(script)
}

export function ReelsShowcase() {
    useEffect(() => {
        loadInstagramEmbedScript()
    }, [])

    return (
        <section id="reels" className="scroll-mt-24 border-t border-border py-16 md:py-24" aria-label="Viral Reels">
            <div className="mx-auto max-w-6xl px-4">
                <motion.h2
                    className="font-heading text-3xl font-bold md:text-4xl text-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                >
                    Reels That Went <span className="text-[var(--brand-green)]">Viral</span>
                </motion.h2>

                <div className="mt-8">
                    <Carousel opts={{ align: "start" }}>
                        <CarouselContent>
                            {reels.map((reel, i) => (
                                <CarouselItem key={reel.permalink} className="basis-full sm:basis-1/2 lg:basis-1/3">
                                    <motion.div
                                        className="rounded-2xl border border-border bg-foreground/5 p-4 backdrop-blur"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                    >
                                        <blockquote
                                            className="instagram-media"
                                            data-instgrm-permalink={reel.permalink}
                                            data-instgrm-version="14"
                                            style={{ minHeight: "400px", background: "transparent" }}
                                        />
                                        <div className="mt-3 text-center">
                                            <div className="text-sm font-semibold">{reel.clientName}</div>
                                            <div className="text-xs text-foreground/70">{reel.resultCaption}</div>
                                        </div>
                                    </motion.div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-2" />
                        <CarouselNext className="right-2" />
                    </Carousel>
                </div>
            </div>
        </section>
    )
}
```

- [ ] **Step 2: Wire into App.jsx**

In `src/App.jsx`, add the import:

```jsx
import { ReelsShowcase } from "./Components/ReelsShowcase"
```

Place it after `<Services />`:

```jsx
        <Services />
        <ReelsShowcase />
```

- [ ] **Step 3: Manually verify**

Run: `npm run dev`

Expected: Section renders with heading, carousel controls, and three cards. Since the placeholder permalinks (`CxampleReel1` etc.) are not real Instagram posts, Instagram's embed script will fail to render an iframe for them (this is expected with placeholder data) — confirm instead that: no React errors in console, the `<script src="https://www.instagram.com/embed.js">` tag is added to `document.body` exactly once, and the blockquote/caption/client-name markup is present in the DOM for each card.

- [ ] **Step 4: Commit**

```bash
git add src/Components/ReelsShowcase.jsx src/App.jsx
git commit -m "feat: add Instagram reels showcase section"
```

---

### Task 4: Client Growth Dashboard

**Files:**
- Modify: `package.json` (add `recharts` dependency)
- Create: `src/Components/GrowthDashboard.jsx`
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: `recharts` exports `ResponsiveContainer`, `LineChart`, `Line`, `XAxis`, `YAxis`, `Tooltip`.
- Produces: `export function GrowthDashboard()`, section `id="growth-dashboard"`.

- [ ] **Step 1: Install recharts**

Run: `npm install recharts`

Expected: `package.json` `dependencies` now includes `"recharts": "^<version>"`, `node_modules/recharts` exists, no install errors.

- [ ] **Step 2: Create the component**

Create `src/Components/GrowthDashboard.jsx`:

```jsx
import { motion } from "framer-motion"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts"

// Placeholder data — replace dataPoints with real monthly metrics per
// client once supplied.
const results = [
    {
        clientName: "Shree Textiles",
        metricLabel: "Followers",
        dataPoints: [
            { label: "Jan", value: 500 },
            { label: "Feb", value: 1800 },
            { label: "Mar", value: 4200 },
            { label: "Apr", value: 9000 },
            { label: "May", value: 12500 },
        ],
    },
    {
        clientName: "Annapurna Sweets",
        metricLabel: "Engagement Rate (%)",
        dataPoints: [
            { label: "Jan", value: 1.2 },
            { label: "Feb", value: 2.1 },
            { label: "Mar", value: 3.4 },
            { label: "Apr", value: 5.0 },
            { label: "May", value: 6.8 },
        ],
    },
    {
        clientName: "Sunrise Coaching Classes",
        metricLabel: "Monthly Enquiries",
        dataPoints: [
            { label: "Jan", value: 30 },
            { label: "Feb", value: 120 },
            { label: "Mar", value: 400 },
            { label: "Apr", value: 900 },
            { label: "May", value: 1600 },
        ],
    },
]

function GrowthCard({ result, index }) {
    return (
        <motion.div
            className="rounded-2xl border border-border bg-foreground/5 p-5 backdrop-blur"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="text-base font-semibold">{result.clientName}</div>
            <div className="text-xs text-foreground/70">{result.metricLabel}</div>
            <div className="mt-4 h-40 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={result.dataPoints}>
                        <XAxis dataKey="label" stroke="var(--muted-foreground)" fontSize={12} />
                        <YAxis stroke="var(--muted-foreground)" fontSize={12} />
                        <Tooltip
                            contentStyle={{ backgroundColor: "var(--card)", border: "1px solid var(--border)", borderRadius: "0.5rem" }}
                        />
                        <Line type="monotone" dataKey="value" stroke="var(--brand-saffron)" strokeWidth={2} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    )
}

export function GrowthDashboard() {
    return (
        <section id="growth-dashboard" className="scroll-mt-24 border-t border-border py-16 md:py-24" aria-label="Client Growth Results">
            <div className="mx-auto max-w-6xl px-4">
                <motion.h2
                    className="font-heading text-3xl font-bold md:text-4xl text-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                >
                    Real Results, Real <span className="text-[var(--brand-green)]">Growth</span>
                </motion.h2>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {results.map((result, i) => (
                        <GrowthCard key={result.clientName} result={result} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}
```

- [ ] **Step 3: Wire into App.jsx**

In `src/App.jsx`, add the import:

```jsx
import { GrowthDashboard } from "./Components/GrowthDashboard"
```

Place it after `<ReelsShowcase />`:

```jsx
        <ReelsShowcase />
        <GrowthDashboard />
```

- [ ] **Step 4: Manually verify**

Run: `npm run dev`

Expected: Section renders three cards, each with a smooth line chart showing an upward trend, axis labels, and a tooltip on hover showing the value at each point. No console errors.

- [ ] **Step 5: Commit**

```bash
git add package.json package-lock.json src/Components/GrowthDashboard.jsx src/App.jsx
git commit -m "feat: add client growth dashboard with recharts"
```

---

### Task 5: Revamp Client Reviews (video + text mix) and re-enable in App.jsx

**Files:**
- Modify: `src/Components/testimonials.jsx` (full data array replacement, add text-only card variant)
- Modify: `src/App.jsx` (uncomment `<Testimonials />`)

**Interfaces:**
- Consumes: none new.
- Produces: `Testimonials` component unchanged export signature (`export function Testimonials()`), but the internal `testimonials` data items now optionally omit `videoUrl`; card rendering branches on `t.videoUrl` presence.

- [ ] **Step 1: Replace placeholder data with real-style Indian client reviews and add optional videoUrl handling**

In `src/Components/testimonials.jsx`, replace lines 4-35 (the `testimonials` array) with:

```jsx
// Placeholder data — replace with real Indian client names, roles, quotes,
// and (optionally) real video URLs once supplied. Entries without a
// videoUrl render as text-only review cards.
const testimonials = [
    {
        name: "Rakesh Patel",
        role: "Owner, Shree Textiles, Surat",
        quote: "Our Instagram went from 500 to 12,000 followers in 4 months. Enquiries doubled during wedding season.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video
    },
    {
        name: "Meena Sharma",
        role: "Founder, Annapurna Sweets, Indore",
        quote: "They understood our local audience and made reels that actually felt like us, not a generic agency template.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video
    },
    {
        name: "Vikram Joshi",
        role: "Director, Sunrise Coaching Classes, Nashik",
        quote: "We used to rely only on word of mouth. Now our admission enquiries come from Instagram every single day.",
    },
    {
        name: "Priya Desai",
        role: "Owner, Laxmi Jewellers, Jaipur",
        quote: "Professional, honest, and they explain everything in simple terms. No confusing jargon, just results.",
    },
    {
        name: "Suresh Nair",
        role: "Proprietor, Ganesh Motors, Nagpur",
        quote: "Best decision for our showroom's social media. Clear reporting every month and steady growth.",
    },
]
```

Then, inside the `CarouselItem` map (around the current lines 129-190), wrap the video block so it only renders when `t.videoUrl` exists. Find this block:

```jsx
                                        <motion.div
                                            className="mt-3 flex justify-center"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: i * 0.1 + 0.6 }}
                                        >
                                            <motion.iframe
                                                src={t.videoUrl}
                                                title={`${t.name} testimonial video`}
                                                className="w-full aspect-[9/16] max-h-48 rounded-lg border border-border"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                whileHover={{ scale: 1.02 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </motion.div>
```

Replace it with:

```jsx
                                        {t.videoUrl && (
                                            <motion.div
                                                className="mt-3 flex justify-center"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: i * 0.1 + 0.6 }}
                                            >
                                                <motion.iframe
                                                    src={t.videoUrl}
                                                    title={`${t.name} testimonial video`}
                                                    className="w-full aspect-[9/16] max-h-48 rounded-lg border border-border"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                    whileHover={{ scale: 1.02 }}
                                                    transition={{ duration: 0.3 }}
                                                />
                                            </motion.div>
                                        )}
```

- [ ] **Step 2: Re-enable Testimonials in App.jsx**

In `src/App.jsx`, change:

```jsx
        {/* <Testimonials /> */}
```

to:

```jsx
        <Testimonials />
```

and move it to sit after `<GrowthDashboard />` per the section order in Global Constraints:

```jsx
        <GrowthDashboard />
        <Testimonials />
        <WebsiteDevelopment />
```

- [ ] **Step 3: Manually verify**

Run: `npm run dev`

Expected: Testimonials carousel renders 5 cards — 2 with an embedded video iframe, 3 as text-only cards (no iframe, no broken layout gap). All names/roles/quotes reflect Indian tier-3 business context. No console errors.

- [ ] **Step 4: Commit**

```bash
git add src/Components/testimonials.jsx src/App.jsx
git commit -m "feat: revamp testimonials with Indian clients and text/video mix"
```

---

### Task 6: Final full-site verification

**Files:** none (verification only)

- [ ] **Step 1: Run production build**

Run: `npm run build`

Expected: Build completes successfully with no errors, output written to `dist/`.

- [ ] **Step 2: Run lint**

Run: `npm run lint`

Expected: No new lint errors introduced by the new/modified files (pre-existing warnings elsewhere in the repo are out of scope).

- [ ] **Step 3: Manual full-page walkthrough**

Run: `npm run dev`, open the site, and scroll through the full page top to bottom.

Expected section order confirmed visually: Navbar, Hero, Client Logos (scrolling), About, Services, Reels Showcase, Growth Dashboard, Testimonials, Website Development, Contact, Footer, with the WhatsApp button fixed bottom-right throughout. Resize the browser to mobile width (~375px) and tablet width (~768px) and confirm no horizontal overflow or broken layout in any of the four new sections.

- [ ] **Step 4: Commit (if any fixes were needed during verification)**

```bash
git add -A
git commit -m "fix: address issues found in full-site verification"
```

(Skip this commit if no fixes were needed.)
