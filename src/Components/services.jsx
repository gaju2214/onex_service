import { motion } from "framer-motion"
import { PenTool, Globe, Code, Share2, ClipboardList, Users, Megaphone, Instagram, Youtube, Facebook } from "lucide-react"

const items = [
    { title: "Original Content Creation", icon: PenTool },
    { title: "Multiple Marketing Platforms", icon: Globe },
    { title: "Web Application Development", icon: Code },
    { title: "Social Media Marketing", icon: Share2 },
    { title: "Digital Consultancy", icon: Users },
    { title: "Meta Ads and Campaign", icon: Megaphone },
]

const platforms = [
    { name: "Instagram", icon: Instagram, color: "#bc1888" },
    { name: "YouTube", icon: Youtube, color: "#FF0000" },
    { name: "Facebook", icon: Facebook, color: "#1877F2" },
]

export function Services() {
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
                            <div className="flex items-center justify-between">
                                <div className="text-base font-semibold">{item.title}</div>
                                <item.icon className="h-8 w-8 text-[var(--brand-blue)] transition-colors group-hover:text-[var(--brand-purple)]" />
                            </div>
                            <p className="mt-2 text-sm text-foreground/70">
                                End-to-end support from strategy to production with premium, measurable outcomes.
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

                <div className="mt-6 flex justify-center gap-6">
                    {platforms.map((platform, i) => (
                        <motion.div
                            key={platform.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.45, delay: i * 0.1 }}
                            className="group relative flex flex-col items-center rounded-2xl border border-border bg-foreground/5 p-4 shadow-inner backdrop-blur transition-transform hover:-translate-y-1"
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
                                        <stop offset="0%" stopColor="var(--brand-blue)" />
                                        <stop offset="50%" stopColor="transparent" />
                                        <stop offset="100%" stopColor="var(--brand-purple)" />
                                    </linearGradient>
                                </defs>
                            </motion.svg>
                            <platform.icon className="h-12 w-12" style={platform.gradient ? { background: platform.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' } : { color: platform.color }} />
                            <span className="mt-2 text-sm font-semibold">{platform.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
