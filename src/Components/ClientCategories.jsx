import { motion } from "framer-motion"
import { GraduationCap, Stethoscope, Building2, UtensilsCrossed, ShoppingBag, PartyPopper } from "lucide-react"
import { clientCategories } from "../data/homepage"

const iconMap = {
    GraduationCap,
    Stethoscope,
    Building2,
    UtensilsCrossed,
    ShoppingBag,
    PartyPopper,
}

export function ClientCategories() {
    return (
        <section id="client-categories" className="scroll-mt-24 border-t border-border py-16 md:py-24" aria-label="Who We Work With">
            <div className="mx-auto max-w-6xl px-4">
                <motion.h2
                    className="font-heading text-3xl font-bold md:text-4xl text-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                >
                    Who We <span className="text-[var(--brand-gold)]">Work With</span>
                </motion.h2>

                <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                    {clientCategories.map((category, i) => {
                        const Icon = iconMap[category.icon]
                        return (
                            <motion.div
                                key={category.label}
                                className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-foreground/5 p-4 text-center backdrop-blur"
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                            >
                                <Icon className="h-7 w-7 text-[var(--brand-gold)]" aria-hidden="true" />
                                <span className="text-xs font-semibold">{category.label}</span>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
