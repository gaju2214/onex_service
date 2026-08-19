import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export function ServiceCTA() {
    return (
        <section className="border-t border-border py-16 md:py-24" aria-label="Get Started">
            <motion.div
                className="mx-auto max-w-3xl rounded-2xl border border-border bg-foreground/5 p-8 text-center backdrop-blur md:p-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="font-heading text-2xl font-bold md:text-3xl">
                    Ready to see what this could look like for your business?
                </h2>
                <p className="mt-3 text-sm text-foreground/70 md:text-base">
                    Get a free audit and we'll show you exactly where to start.
                </p>
                <Link
                    to="/free-audit"
                    className="mt-6 inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold text-[#1a1a1a] ring-1 ring-primary/20 transition hover:-translate-y-0.5 bg-gradient-to-r from-[#E8C077] to-[var(--brand-gold)]"
                >
                    Get a Free Audit →
                </Link>
            </motion.div>
        </section>
    )
}
