import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PenTool, Globe, Code, Share2, ClipboardList, Users, Megaphone, MessageCircle, X } from "lucide-react"
import { InstagramLogo, FacebookLogo, YoutubeLogo, GoogleLogo } from "./PlatformLogos"

const items = [
    {
        title: "Original Content Creation",
        icon: PenTool,
        description: "Craft compelling blogs, videos, infographics, and visual content that resonates with your audience and drives engagement across all digital platforms."
    },
    {
        title: "WhatsApp Business API",
        icon: MessageCircle,
        description: "OneClickMsg, our in-house WhatsApp Business API product — bulk messaging, automation, and broadcast on the official Meta Cloud API, turning attention into conversations."
    },
    {
        title: "Multiple Marketing Platforms",
        icon: Globe,
        description: "Strategic multi-channel presence across search engines, social media, email, and paid advertising to maximize your brand's reach and visibility."
    },
    { 
        title: "Web Application Development", 
        icon: Code,
        description: "Full-stack development with React, Node.js, and modern frameworks delivering scalable, secure, and high-performance web applications tailored to your business."
    },
    { 
        title: "Social Media Marketing", 
        icon: Share2,
        description: "Build brand awareness, foster community engagement, and convert followers into customers through data-driven social media strategies and campaigns."
    },
    { 
        title: "Digital Consultancy", 
        icon: Users,
        description: "Expert guidance on digital strategy, technology selection, and business transformation to help you achieve your goals with measurable ROI."
    },
    { 
        title: "Meta Ads and Campaign", 
        icon: Megaphone,
        description: "Targeted Facebook and Instagram advertising campaigns with precise audience targeting, optimized budgets, and conversion-focused creative execution."
    },
]

const platforms = [
    {
        name: "Instagram",
        Logo: InstagramLogo,
        description: "Visual storytelling and engagement",
        details: [
            "Reels, posts, and stories built for how people actually scroll",
            "Consistent posting and community engagement",
            "Meta ads management for reach and conversions",
        ],
    },
    {
        name: "YouTube",
        Logo: YoutubeLogo,
        description: "Video marketing and channel growth",
        details: [
            "Long-form and Shorts content strategy",
            "Channel setup, branding, and optimization",
            "Video editing built for retention and watch time",
        ],
    },
    {
        name: "Facebook",
        Logo: FacebookLogo,
        description: "Community building and advertising",
        details: [
            "Page management and community engagement",
            "Targeted Facebook ad campaigns",
            "Cross-posting with your Instagram content",
        ],
    },
    {
        name: "Google",
        Logo: GoogleLogo,
        description: "Search, Maps, Google Ads, and web design",
        details: [
            "Google Business Profile setup and optimization",
            "Local SEO so you show up in Maps and search",
            "Google Ads campaign management",
            "Web design built to rank and convert search traffic",
        ],
    },
]

// Shared spring used for the icon-to-popup morph, so the card and its
// logo animate in lockstep instead of the default (slightly floatier)
// layout transition.
const morphTransition = { type: "spring", stiffness: 380, damping: 32, mass: 0.6 }

const contentContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } },
}

const contentItem = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
}

export function Services() {
    const [activePlatform, setActivePlatform] = useState(null)

    useEffect(() => {
        document.body.style.overflow = activePlatform ? "hidden" : ""
        return () => {
            document.body.style.overflow = ""
        }
    }, [activePlatform])

    useEffect(() => {
        if (!activePlatform) return
        const onKeyDown = (e) => {
            if (e.key === "Escape") setActivePlatform(null)
        }
        window.addEventListener("keydown", onKeyDown)
        return () => window.removeEventListener("keydown", onKeyDown)
    }, [activePlatform])

    return (
        <section id="services" className="scroll-mt-24 border-t border-border py-16 md:py-24" aria-label="Our Services">
            <div className="mx-auto max-w-6xl px-4">
                <motion.h2
                    className="font-heading text-3xl font-bold md:text-4xl text-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                >
                    Our Services
                </motion.h2>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.45, delay: i * 0.05 }}
                            className="group relative rounded-2xl border border-border bg-foreground/5 p-5 shadow-inner backdrop-blur transition-transform hover:-translate-y-1"
                        >
                            <motion.svg
                                className="absolute inset-0 w-full h-full"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
                            >
                                <motion.path
                                    d="M 0 16 Q 0 0 16 0 L 84 0 Q 100 0 100 16 L 100 84 Q 100 100 84 100 L 16 100 Q 0 100 0 84 Z"
                                    fill="none"
                                    stroke="url(#gradient)"
                                    strokeWidth="0.5"
                                    pathLength={1}
                                />
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="var(--brand-gold)">
                                            <animate attributeName="stop-color" values="var(--brand-gold);var(--brand-graphite)" dur="2s" begin="1.5s" />
                                        </stop>
                                        <stop offset="50%" stopColor="transparent" />
                                        <stop offset="100%" stopColor="var(--brand-graphite)">
                                            <animate attributeName="stop-color" values="var(--brand-graphite);var(--brand-gold)" dur="2s" begin="1.5s" />
                                        </stop>
                                    </linearGradient>
                                </defs>
                            </motion.svg>
                            <div className="flex items-center justify-between">
                                <div className="text-base font-semibold">{item.title}</div>
                                <item.icon className="h-8 w-8 text-[var(--brand-gold)] transition-colors group-hover:text-[var(--brand-graphite)]" />
                            </div>
                            <p className="mt-2 text-sm text-foreground/70">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.h3
                    className="font-heading text-2xl font-bold mt-12 text-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                >
                    Platform Services
                </motion.h3>

                <div className="mt-6 flex flex-wrap justify-center gap-4 sm:gap-6">
                    {platforms.map((platform, i) => (
                        <motion.button
                            key={platform.name}
                            type="button"
                            layoutId={`platform-card-${platform.name}`}
                            onClick={() => setActivePlatform(platform)}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ opacity: { duration: 0.45, delay: i * 0.1 }, scale: { duration: 0.45, delay: i * 0.1 }, layout: morphTransition }}
                            whileHover={{ y: -4 }}
                            whileTap={{ scale: 0.96 }}
                            className="group relative flex cursor-pointer flex-col items-center rounded-2xl border border-border bg-foreground/5 p-4 shadow-inner backdrop-blur transition-transform"
                        >
                            <motion.svg
                                className="absolute inset-0 w-full h-full"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
                            >
                                <motion.path
                                    d="M 0 16 Q 0 0 16 0 L 84 0 Q 100 0 100 16 L 100 84 Q 100 100 84 100 L 16 100 Q 0 100 0 84 Z"
                                    fill="none"
                                    stroke="url(#gradient)"
                                    strokeWidth="0.5"
                                    pathLength={1}
                                />
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="var(--brand-gold)" />
                                        <stop offset="50%" stopColor="transparent" />
                                        <stop offset="100%" stopColor="var(--brand-graphite)" />
                                    </linearGradient>
                                </defs>
                            </motion.svg>
                            <motion.div layoutId={`platform-logo-${platform.name}`} transition={morphTransition}>
                                <platform.Logo className="h-12 w-12" />
                            </motion.div>
                            <span className="mt-2 text-sm font-semibold">{platform.name}</span>
                        </motion.button>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {activePlatform && (
                    <motion.div
                        className="fixed inset-0 z-[60] flex items-end justify-center bg-black/60 p-4 backdrop-blur-sm sm:items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setActivePlatform(null)}
                    >
                        <motion.div
                            layoutId={`platform-card-${activePlatform.name}`}
                            transition={morphTransition}
                            className="relative w-full max-w-md rounded-2xl border border-border bg-background p-6 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                type="button"
                                onClick={() => setActivePlatform(null)}
                                aria-label="Close"
                                className="absolute right-4 top-4 rounded-lg p-1 text-foreground/60 transition hover:bg-foreground/10 hover:text-foreground"
                            >
                                <X className="h-5 w-5" />
                            </button>

                            <motion.div layoutId={`platform-logo-${activePlatform.name}`} transition={morphTransition}>
                                <activePlatform.Logo className="h-14 w-14" />
                            </motion.div>

                            <motion.div
                                variants={contentContainer}
                                initial="hidden"
                                animate="visible"
                            >
                                <motion.h3 variants={contentItem} className="mt-3 font-heading text-xl font-bold">
                                    {activePlatform.name}
                                </motion.h3>
                                <motion.p variants={contentItem} className="mt-1 text-sm text-foreground/70">
                                    {activePlatform.description}
                                </motion.p>

                                <ul className="mt-4 space-y-2">
                                    {activePlatform.details.map((detail) => (
                                        <motion.li
                                            key={detail}
                                            variants={contentItem}
                                            className="flex items-start gap-2 text-sm text-foreground/80"
                                        >
                                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--brand-gold)]" aria-hidden="true" />
                                            {detail}
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
