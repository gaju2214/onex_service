import { motion } from "framer-motion"

export function ServiceBenefits({ benefits }) {
    return (
        <section className="py-16 md:py-24" aria-label="Key Benefits">
            <div className="mx-auto max-w-6xl px-4">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {benefits.map((benefit, i) => (
                        <motion.div
                            key={benefit.title}
                            className="rounded-2xl border border-border bg-foreground/5 p-6 backdrop-blur"
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.45, delay: i * 0.05 }}
                        >
                            {benefit.icon && (
                                <benefit.icon className="h-7 w-7 text-[var(--brand-gold)]" aria-hidden="true" />
                            )}
                            <div className="mt-3 text-base font-semibold">{benefit.title}</div>
                            <p className="mt-2 text-sm text-foreground/70">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
