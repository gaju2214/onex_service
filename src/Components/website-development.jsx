import { motion } from "framer-motion"

const cards = [
    {
        title: "Dynamic Websites",
        desc: "Build interactive and engaging websites using modern frameworks like React and Next.js. These sites feature dynamic content, user authentication, real-time updates, and seamless integrations with APIs and databases. Ideal for e-commerce, blogs, or complex web applications that require high interactivity and scalability.",
    },
    {
        title: "Static Websites",
        desc: "Create fast-loading, SEO-optimized landing pages and informational sites using static site generators. These websites are perfect for businesses looking to establish an online presence quickly, with benefits like improved performance, lower hosting costs, and easy maintenance. Includes features like contact forms, image galleries, and responsive design.",
    },
    {
        title: "Admin Panels",
        desc: "Develop custom admin dashboards and control panels for managing your website or application. These panels include user management, data visualization with charts and graphs, analytics tracking, and secure access controls. Built with intuitive interfaces to streamline operations and provide real-time insights into your business metrics.",
    },
]

export function WebsiteDevelopment() {
    return (
        <section
            id="webdev"
            className="scroll-mt-24 border-t border-border py-16 md:py-24"
            aria-label="Website Development"
        >
            <div className="mx-auto max-w-6xl px-4">
                <motion.h2
                    className="font-heading text-3xl font-bold md:text-4xl text-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                >
                    Website Development
                </motion.h2>
                <p className="mt-2 max-w-2xl text-foreground/80 text-center mx-auto">
                    We specialize in creating high-performance websites tailored to your business needs. From interactive e-commerce platforms to simple informational sites, our team uses cutting-edge technologies like React, Next.js, and WordPress to deliver scalable solutions that drive engagement and conversions. Each project is optimized for speed, SEO, and user experience to ensure your online presence stands out.
                </p>

                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center items-center">
                    {cards.map((c, i) => (
                        <motion.div
                            key={c.title}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.45, delay: i * 0.05 }}
                            className="rounded-2xl border border-border bg-foreground/5 p-5 shadow-inner backdrop-blur ring-1 ring-inset ring-primary/10 flex-1 max-w-lg relative"
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
                            <div className="text-base font-semibold">{c.title}</div>
                            <p className="mt-2 text-sm text-foreground/70">{c.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <a
                        href="#portfolio"
                        className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-foreground ring-1 ring-primary/20 transition-shadow hover:shadow-[0_0_28px] hover:shadow-primary/40 bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-purple)]"
                    >
                        View Our Work
                    </a>
                </div>
            </div>
        </section>
    )
}
