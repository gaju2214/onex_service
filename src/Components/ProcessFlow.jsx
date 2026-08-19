import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { processSteps } from "../data/homepage"

export function ProcessFlow() {
    return (
        <section id="process" className="scroll-mt-24 border-t border-border py-16 md:py-24" aria-label="Our Process">
            <div className="mx-auto max-w-6xl px-4">
                <motion.h2
                    className="font-heading text-3xl font-bold md:text-4xl text-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                >
                    The Full <span className="text-[var(--brand-gold)]">Funnel</span>
                </motion.h2>
                <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-muted-foreground">
                    One connected system — not three separate vendors.
                </p>

                <div className="mt-10 flex flex-col items-stretch gap-4 md:flex-row md:items-center">
                    {processSteps.map((item, i) => (
                        <div key={item.step} className="flex flex-1 items-center gap-4">
                            <motion.div
                                className="flex-1 rounded-2xl border border-border bg-foreground/5 p-6 backdrop-blur"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                            >
                                <div className="text-xs font-semibold text-[var(--brand-gold)]">{item.step}</div>
                                <div className="mt-2 text-lg font-bold font-heading">{item.title}</div>
                                <p className="mt-2 text-sm text-foreground/70">{item.description}</p>
                            </motion.div>
                            {i < processSteps.length - 1 && (
                                <ArrowRight
                                    className="hidden h-6 w-6 flex-shrink-0 text-[var(--brand-gold)] md:block"
                                    aria-hidden="true"
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
