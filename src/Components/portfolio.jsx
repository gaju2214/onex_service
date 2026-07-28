import { motion } from "framer-motion"
import { useState } from "react"
import { ReelsGrid } from "./ReelsShowcase"

const projects = [
    { id: 0, title: "Original Content Creation Campaign", category: "Content Creation", image: "/portfolio/content-creation.jpg" },
    { id: 1, title: "Multi-Platform Marketing Strategy", category: "Marketing", image: "/portfolio/marketing-strategy.jpg" },
    { id: 2, title: "E-commerce Web Application", category: "Web Development", image: "/portfolio/ecommerce.jpg" },
    { id: 3, title: "Social Media Engagement Boost", category: "Social Media", image: "/portfolio/social-media.jpg" },
    { id: 4, title: "Customer Survey Analysis", category: "Research", image: "/portfolio/research.jpg" },
    { id: 5, title: "Digital Transformation Consultancy", category: "Consultancy", image: "/portfolio/consultancy.jpg" },
    { id: 6, title: "Meta Ads Performance Campaign", category: "Advertising", image: "/portfolio/advertising.jpg" },
]

// Real websites built by the team.
const websites = [
    { name: "Electrosoft System", url: "https://electrosoftsystem.in/" },
    { name: "Get Your Project Done", url: "https://www.getyourprojectdone.in/" },
    { name: "Get Your Project Done — IoT", url: "https://iot.getyourprojectdone.in/" },
    { name: "Ecruxbot", url: "https://ecruxbot.in/" },
]

export function Portfolio() {
    const [showAll, setShowAll] = useState(false)

    const displayedProjects = showAll ? projects : projects.slice(0, 3)

    return (
        <section id="portfolio" className="scroll-mt-24 border-t border-border py-16 md:py-24" aria-label="Portfolio">
            <div className="mx-auto max-w-6xl px-4">
                <motion.h2
                    className="font-heading text-3xl font-bold md:text-4xl text-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                >
                    Our Works & Edits
                </motion.h2>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {displayedProjects.map((p, i) => (
                        <motion.article
                            key={p.id}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.45, delay: i * 0.05 }}
                            className="group relative overflow-hidden rounded-2xl border border-border"
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
                            <img
                                src={p.image}
                                alt={`${p.title} — ${p.category}`}
                                loading="lazy"
                                className="h-48 w-full object-cover sm:h-56"
                            />
                            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4">
                                <div>
                                    <div className="text-sm font-semibold">{p.title}</div>
                                    <div className="text-xs text-foreground/80">{p.category}</div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {projects.length > 3 && (
                    <div className="mt-8 text-center">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-[#1a1a1a] ring-1 ring-primary/20 transition-shadow hover:shadow-[0_0_28px] hover:shadow-primary/40 bg-gradient-to-r from-[#E8C077] to-[var(--brand-gold)]"
                        >
                            {showAll ? "View Less" : "View More"}
                        </button>
                    </div>
                )}

                <motion.h3
                    className="mt-16 font-heading text-2xl font-bold text-center md:text-3xl"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                >
                    Reels That Went <span className="text-[var(--brand-gold)]">Viral</span>
                </motion.h3>

                <div className="mt-8">
                    <ReelsGrid />
                </div>

                <motion.h3
                    className="mt-16 font-heading text-2xl font-bold text-center md:text-3xl"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                >
                    Websites We've <span className="text-[var(--brand-gold)]">Built</span>
                </motion.h3>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {websites.map((site, i) => (
                        <motion.a
                            key={site.url}
                            href={site.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col justify-between rounded-2xl border border-border bg-foreground/5 p-5 backdrop-blur transition-transform hover:-translate-y-1"
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.45, delay: i * 0.05 }}
                        >
                            <div>
                                <div className="text-base font-semibold">{site.name}</div>
                                <div className="mt-1 text-xs text-foreground/60">{site.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}</div>
                            </div>
                            <div className="mt-4 text-sm font-semibold text-[var(--brand-gold)] group-hover:underline">
                                Visit Website →
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    )
}
