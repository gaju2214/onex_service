import { motion } from "framer-motion"
import { Check } from "lucide-react"

const features = [
    "Bulk & broadcast messaging",
    "Bulk message to enquiries",
    "Automation & auto-replies",
    "Official Meta Cloud API",
    "Business communication tools",
]

export function BuiltInHouse() {
    return (
        <section id="built-in-house" className="scroll-mt-24 border-t border-border py-16 md:py-24" aria-label="Built In-House">
            <div className="mx-auto max-w-6xl px-4">
                <motion.div
                    className="rounded-2xl border border-border bg-foreground/5 p-6 backdrop-blur md:p-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
                        <div className="max-w-xl">
                            <div className="text-xs font-semibold uppercase tracking-wide text-[var(--brand-gold)]">
                                Built In-House
                            </div>
                            <h2 className="mt-2 font-heading text-2xl font-bold md:text-3xl">
                                We don't resell tools. We build our own.
                            </h2>
                            <p className="mt-3 text-sm text-foreground/80 md:text-base">
                                OneClickMsg is our own WhatsApp Business API product for automation,
                                broadcast messaging, and business communication — proof we're a real
                                technical team, not just a content shop.
                            </p>
                            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                                {features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                                        <Check className="h-4 w-4 flex-shrink-0 text-[var(--brand-gold)]" aria-hidden="true" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <a
                            href="https://msg.oneclickmsg.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex flex-shrink-0 items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold text-[#1a1a1a] ring-1 ring-primary/20 transition hover:-translate-y-0.5 bg-gradient-to-r from-[#E8C077] to-[var(--brand-gold)]"
                        >
                            Visit msg.oneclickmsg.com →
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
