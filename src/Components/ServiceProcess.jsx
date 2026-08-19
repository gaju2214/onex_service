import { motion } from "framer-motion"

export function ServiceProcess({ process }) {
    return (
        <section className="border-t border-border py-16 md:py-24" aria-label="Our Process">
            <div className="mx-auto max-w-6xl px-4">
                <motion.h2
                    className="font-heading text-2xl font-bold text-center md:text-3xl"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                >
                    How It <span className="text-[var(--brand-gold)]">Works</span>
                </motion.h2>

                <div className="mt-10 grid gap-4 md:grid-cols-3">
                    {process.map((item, i) => (
                        <motion.div
                            key={item.step}
                            className="rounded-2xl border border-border bg-foreground/5 p-6 backdrop-blur"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <div className="text-xs font-semibold text-[var(--brand-gold)]">{item.step}</div>
                            <div className="mt-2 text-lg font-bold font-heading">{item.title}</div>
                            <p className="mt-2 text-sm text-foreground/70">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
