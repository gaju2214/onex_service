import { motion } from "framer-motion"
import { useState } from "react"

const projects = [
    { id: 0, title: "Original Content Creation Campaign", category: "Content Creation" },
    { id: 1, title: "Multi-Platform Marketing Strategy", category: "Marketing" },
    { id: 2, title: "E-commerce Web Application", category: "Web Development" },
    { id: 3, title: "Social Media Engagement Boost", category: "Social Media" },
    { id: 4, title: "Customer Survey Analysis", category: "Research" },
    { id: 5, title: "Digital Transformation Consultancy", category: "Consultancy" },
    { id: 6, title: "Meta Ads Performance Campaign", category: "Advertising" },
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

                {/* Optional filters (static UI) */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {["All", "Branding", "Campaigns", "Websites"].map((f) => (
                        <button
                            key={f}
                            className="rounded-full border border-border bg-foreground/5 px-3 py-1 text-xs text-foreground/80 hover:bg-foreground/10"
                        >
                            {f}
                        </button>
                    ))}
                </div>

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
                                        <stop offset="0%" stopColor="var(--brand-blue)">
                                            <animate attributeName="stop-color" values="var(--brand-blue);var(--brand-purple)" dur="2s" begin="1.5s" />
                                        </stop>
                                        <stop offset="50%" stopColor="transparent" />
                                        <stop offset="100%" stopColor="var(--brand-purple)">
                                            <animate attributeName="stop-color" values="var(--brand-purple);var(--brand-blue)" dur="2s" begin="1.5s" />
                                        </stop>
                                    </linearGradient>
                                </defs>
                            </motion.svg>
                            <img
                                src={`/.jpg?height=600&width=800&query=${encodeURIComponent(
                                    `${p.title} ${p.category}`,
                                )}`}
                                alt={`${p.title} — ${p.category}`}
                                loading="lazy"
                                className="h-56 w-full object-cover"
                            />
                            <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                                <div className="w-full p-4">
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
                            className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-foreground ring-1 ring-primary/20 transition-shadow hover:shadow-[0_0_28px] hover:shadow-primary/40 bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-purple)]"
                        >
                            {showAll ? "View Less" : "View More"}
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}
