import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export function ServiceHero({ eyebrow, title, description, externalLink }) {
    return (
        <section className="border-b border-border py-16 md:py-24" aria-label={title}>
            <div className="mx-auto max-w-4xl px-4 text-center">
                <motion.div
                    className="text-xs font-semibold uppercase tracking-wide text-[var(--brand-gold)]"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                >
                    {eyebrow}
                </motion.div>
                <motion.h1
                    className="mt-2 font-heading text-3xl font-extrabold leading-tight md:text-5xl"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    {title}
                </motion.h1>
                <motion.p
                    className="mt-4 text-base text-foreground/80 md:text-lg"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {description}
                </motion.p>
                <motion.div
                    className="mt-8 flex flex-wrap items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Link
                        to="/free-audit"
                        className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold text-[#1a1a1a] ring-1 ring-primary/20 transition hover:-translate-y-0.5 bg-gradient-to-r from-[#E8C077] to-[var(--brand-gold)]"
                    >
                        Get a Free Audit →
                    </Link>
                    {externalLink && (
                        <a
                            href={externalLink.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold text-foreground ring-1 ring-border transition hover:-translate-y-0.5 hover:bg-foreground/5"
                        >
                            {externalLink.label}
                        </a>
                    )}
                </motion.div>
            </div>
        </section>
    )
}
