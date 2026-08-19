import { Camera, Megaphone, Instagram, MessageCircle, Zap, Radio, Code2, LayoutTemplate, Smartphone, Layers } from "lucide-react"

// Content for the four dedicated service pages. Benefit copy for Social
// Media Marketing and Web Development reuses real existing descriptions
// from src/Components/services.jsx and website-development.jsx rather than
// inventing new claims. App Development has no existing content or
// specifics in the business brief, so its copy stays intentionally generic
// until real platform/turnaround details are supplied.

export const socialMediaMarketing = {
    seoTitle: "Social Media Marketing | Onex Service, Jalgaon",
    seoDescription: "Reels, promo shoots, Instagram management, and Meta ads management for businesses in Jalgaon and across India.",
    seoKeywords: "social media marketing Jalgaon, reels production, Instagram management, Meta ads management, promo shoots",
    eyebrow: "Social Media Marketing",
    title: "Content that gets your business noticed",
    description: "Reels, promo shoots, Instagram management, and Meta ads — the attention layer of your growth funnel.",
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
}

export const whatsappBusinessApi = {
    seoTitle: "WhatsApp Business API | OneClickMsg by Onex Service",
    seoDescription: "OneClickMsg is our in-house WhatsApp Business API product for bulk messaging, automation, and broadcast — built and supported by Onex Service.",
    seoKeywords: "WhatsApp Business API Jalgaon, WhatsApp automation, bulk WhatsApp messaging, OneClickMsg, WhatsApp broadcast messaging",
    eyebrow: "WhatsApp Business API",
    title: "OneClickMsg — built in-house by our own team",
    description: "The conversion layer of your growth funnel: automation, broadcast messaging, and business communication on the official Meta Cloud API.",
    externalLink: { label: "Visit OneClickMsg →", href: "https://oneclickmsg.com" },
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
    ],
}

export const webDevelopment = {
    seoTitle: "Web Development | Onex Service, Jalgaon",
    seoDescription: "Dynamic websites, static landing pages, and admin panels — the infrastructure layer of your growth funnel, built by Onex Service.",
    seoKeywords: "web development Jalgaon, website development, dynamic websites, static websites, admin panel development",
    eyebrow: "Web Development",
    title: "A website that runs your business",
    description: "High-performance websites built with React, Next.js, and WordPress — optimized for speed, SEO, and conversions.",
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
    ],
}

export const appDevelopment = {
    seoTitle: "App Development | Onex Service, Jalgaon",
    seoDescription: "Mobile and web app development for businesses in Jalgaon and across India — get in touch to discuss your project.",
    seoKeywords: "app development Jalgaon, mobile app development, business app development",
    eyebrow: "App Development",
    title: "Apps built around how your business runs",
    description: "From customer-facing apps to internal tools, we build software tailored to your business — talk to us about what you need and we'll scope the right platform and approach for your project.",
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
    ],
}
