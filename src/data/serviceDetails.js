import { Camera, Megaphone, Instagram, MessageCircle, Zap, Radio, Code2, LayoutTemplate, Smartphone, Layers, Rocket, Send } from "lucide-react"

// Content for the four dedicated service pages. Benefit copy for Social
// Media Marketing and Web Development reuses real existing descriptions
// from src/Components/services.jsx and website-development.jsx rather than
// inventing new claims. App Development has no existing content or
// specifics in the business brief, so its copy stays intentionally generic
// until real platform/turnaround details are supplied.

export const socialMediaMarketing = {
    seoTitle: "Social Media Marketing | Onex Service, Jalgaon",
    seoDescription: "Reels, promo shoots, Instagram management, and Meta ads management for businesses in Jalgaon, Maharashtra and across India.",
    seoKeywords: "social media marketing Jalgaon, social media marketing agency Maharashtra, reels production Jalgaon, Instagram management Jalgaon, Meta ads management Maharashtra, promo shoots Jalgaon",
    eyebrow: "Social Media Marketing",
    title: "Content that gets your business noticed",
    description: "Reels, promo shoots, Instagram management, and Meta ads — the attention layer of your growth funnel.",
    extended: "Attention is the first step in the funnel — if people don't notice your business, nothing after that matters. We plan, shoot, edit, and post content built for how people actually scroll on Instagram and Facebook, then back it with targeted Meta ads so the right people see it. Everything we make here is designed to feed directly into the next step of the funnel: turning that attention into WhatsApp conversations.",
    benefits: [
        {
            icon: Camera,
            title: "Reels & Promo Shoots",
            description: "Professional video content and promo shoots that resonate with your audience and drive engagement across all digital platforms.",
        },
        {
            icon: Instagram,
            title: "Instagram Management",
            description: "Build brand awareness, foster community engagement, and convert followers into customers through consistent, data-driven social media strategies.",
        },
        {
            icon: Megaphone,
            title: "Meta Ads Management",
            description: "Targeted Facebook and Instagram advertising campaigns with precise audience targeting, optimized budgets, and conversion-focused creative execution.",
        },
    ],
    process: [
        { step: "01", title: "Discover", description: "We learn your brand, audience, and what's already working before we shoot or post anything." },
        { step: "02", title: "Create", description: "Reels, promo shoots, and ad creative planned around your business — not generic templates." },
        { step: "03", title: "Launch & Optimize", description: "We post, run ads, and adjust based on real performance, not guesswork." },
    ],
}

export const whatsappBusinessApi = {
    seoTitle: "WhatsApp Business API | OneClickMsg by Onex Service",
    seoDescription: "OneClickMsg is our in-house WhatsApp Business API product for bulk messaging, automation, and broadcast — built and supported by Onex Service.",
    seoKeywords: "WhatsApp Business API Jalgaon, WhatsApp Business API Maharashtra, WhatsApp automation Jalgaon, bulk WhatsApp messaging, OneClickMsg, WhatsApp broadcast messaging Maharashtra",
    eyebrow: "WhatsApp Business API",
    title: "OneClickMsg — built in-house by our own team",
    description: "The conversion layer of your growth funnel: automation, broadcast messaging, and business communication on the official Meta Cloud API.",
    extended: "Reels and ads get people to notice you — WhatsApp is where they actually become customers. OneClickMsg is our own product, built and maintained by our own team, not a reseller license for someone else's software. That means when you have a question or need a custom workflow, you're talking to the people who built it. Visit msg.oneclickmsg.com to see it in action or start a free trial.",
    externalLink: { label: "Visit msg.oneclickmsg.com →", href: "https://msg.oneclickmsg.com" },
    benefits: [
        {
            icon: Radio,
            title: "Bulk & Broadcast Messaging",
            description: "Reach your customers at scale with bulk messaging and broadcast campaigns on WhatsApp.",
        },
        {
            icon: Zap,
            title: "Automation & Auto-Replies",
            description: "Automate responses and workflows so leads get answered instantly, any time of day.",
        },
        {
            icon: MessageCircle,
            title: "Official Meta Cloud API",
            description: "Built on WhatsApp's official Meta Cloud API — no unofficial workarounds or account-ban risk.",
        },
        {
            icon: Layers,
            title: "Built & Supported In-House",
            description: "We built OneClickMsg ourselves, so you get direct support from the team that built it — not a reseller.",
        },
        {
            icon: Send,
            title: "Bulk Message to Enquiries",
            description: "Send a bulk WhatsApp message to your entire enquiry list at once — updates, offers, and follow-ups delivered instantly, instead of messaging leads one by one.",
        },
    ],
    process: [
        { step: "01", title: "Setup & Verification", description: "We set up your WhatsApp Business account and Meta Cloud API access, fully verified." },
        { step: "02", title: "Configure", description: "Automation, auto-replies, and broadcast templates configured around how your business actually communicates." },
        { step: "03", title: "Launch & Scale", description: "Start messaging customers, then scale up broadcast and automation as your list grows." },
    ],
}

export const webDevelopment = {
    seoTitle: "Web Development | Onex Service, Jalgaon",
    seoDescription: "Dynamic websites, static landing pages, and admin panels — the infrastructure layer of your growth funnel, built by Onex Service in Jalgaon, Maharashtra.",
    seoKeywords: "web development Jalgaon, website development company Maharashtra, dynamic websites Jalgaon, static websites, admin panel development Jalgaon",
    eyebrow: "Web Development",
    title: "A website that runs your business",
    description: "High-performance websites built with React, Next.js, and WordPress — optimized for speed, SEO, and conversions.",
    extended: "A website is the infrastructure layer of your funnel — the place that actually runs bookings, orders, and enquiries once content and WhatsApp have done their job. We build with modern frameworks so your site is fast, ranks well on search, and can grow with your business instead of needing a rebuild every couple of years.",
    benefits: [
        {
            icon: Code2,
            title: "Dynamic Websites",
            description: "Interactive, engaging websites using modern frameworks like React and Next.js — dynamic content, user authentication, real-time updates, and API/database integrations. Ideal for e-commerce or complex web applications.",
        },
        {
            icon: LayoutTemplate,
            title: "Static Websites",
            description: "Fast-loading, SEO-optimized landing pages and informational sites — improved performance, lower hosting costs, and easy maintenance, with contact forms and responsive design.",
        },
        {
            icon: Layers,
            title: "Admin Panels",
            description: "Custom admin dashboards and control panels — user management, data visualization, analytics tracking, and secure access controls, built for real-time business insights.",
        },
        {
            icon: Rocket,
            title: "Product-Ready Web Applications",
            description: "Full web applications built to launch as a real product — not a prototype — with the structure and polish to take real users from day one.",
        },
    ],
    process: [
        { step: "01", title: "Discovery & Planning", description: "We map out what your website actually needs to do for your business before writing a line of code." },
        { step: "02", title: "Design & Development", description: "Built with modern frameworks, matched to your brand, and tested across devices." },
        { step: "03", title: "Launch & Support", description: "We launch, monitor performance, and stay on for updates and support after go-live." },
    ],
}

export const appDevelopment = {
    seoTitle: "App Development | Onex Service, Jalgaon",
    seoDescription: "Mobile and web app development for businesses in Jalgaon, Maharashtra and across India — get in touch to discuss your project.",
    seoKeywords: "app development Jalgaon, app development company Maharashtra, mobile app development Jalgaon, business app development",
    eyebrow: "App Development",
    title: "Apps built around how your business runs",
    description: "From customer-facing apps to internal tools, we build software tailored to your business — talk to us about what you need and we'll scope the right platform and approach for your project.",
    extended: "Not every business needs an app on day one — but when you do, it should be built by people who already understand your brand, your customers, and how your website and marketing already work. We scope the right platform for your actual use case instead of pushing a default stack, so the app you get is the one your business needs.",
    benefits: [
        {
            icon: Smartphone,
            title: "Built Around Your Business",
            description: "We start with how your business actually operates, then build the app to fit — not a one-size-fits-all template.",
        },
        {
            icon: Code2,
            title: "Same Team as Your Website",
            description: "Your app and website come from the same development team, so they work together instead of as disconnected systems.",
        },
        {
            icon: Layers,
            title: "Part of the Full Funnel",
            description: "Your app connects with the content, ads, and WhatsApp automation we already run for you, instead of sitting apart from your marketing.",
        },
        {
            icon: Rocket,
            title: "Product-Ready Dynamic Apps",
            description: "Full dynamic apps built to launch as a real product — not a prototype — with the structure and polish to take real users from day one.",
        },
    ],
    process: [
        { step: "01", title: "Discovery & Scoping", description: "We figure out what the app actually needs to do, and the right platform to build it on." },
        { step: "02", title: "Design & Build", description: "Built and tested around your real use case, not a generic template." },
        { step: "03", title: "Launch & Support", description: "We launch, then stay on for updates, fixes, and support after go-live." },
    ],
}
