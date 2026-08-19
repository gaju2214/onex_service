import { motion } from "framer-motion"

export function ServiceIntro({ text }) {
    return (
        <section className="border-b border-border py-12 md:py-16" aria-label="Overview">
            <motion.p
                className="mx-auto max-w-3xl px-4 text-center text-sm text-foreground/80 md:text-base"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5 }}
            >
                {text}
            </motion.p>
        </section>
    )
}
