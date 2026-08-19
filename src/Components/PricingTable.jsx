import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Check } from "lucide-react"
import { pricingTiers } from "../data/pricing"

export function PricingTable() {
    return (
        <section className="py-16 md:py-24" aria-label="Pricing Tiers">
            <div className="mx-auto max-w-6xl px-4">
                <div className="grid gap-6 lg:grid-cols-3">
                    {pricingTiers.map((tier, i) => (
                        <motion.div
                            key={tier.name}
                            className={[
                                "flex flex-col rounded-2xl border p-6 backdrop-blur md:p-8",
                                tier.featured
                                    ? "border-[var(--brand-gold)] bg-foreground/5 ring-2 ring-[var(--brand-gold)]"
                                    : "border-border bg-foreground/5",
                            ].join(" ")}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            {tier.featured && (
                                <div className="mb-3 inline-block w-fit rounded-full bg-[var(--brand-gold)] px-3 py-1 text-xs font-semibold text-[#1a1a1a]">
                                    Most Popular
                                </div>
                            )}
                            <div className="text-lg font-bold font-heading">{tier.name}</div>
                            <p className="mt-1 text-sm text-foreground/70">{tier.tagline}</p>
                            <div className="mt-4 flex items-baseline gap-1">
                                <span className="text-sm text-foreground/70">Starting from</span>
                            </div>
                            <div className="flex items-baseline gap-1">
                                <span className="text-3xl font-extrabold font-heading">₹{tier.price}</span>
                                <span className="text-sm text-foreground/70">{tier.period}</span>
                            </div>

                            <ul className="mt-6 flex-1 space-y-3">
                                {tier.features.map((feature) => (
                                    <li key={feature.label} className="flex items-start gap-2 text-sm">
                                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--brand-gold)]" aria-hidden="true" />
                                        <span>
                                            <span className="font-semibold">{feature.label}:</span>{" "}
                                            <span className="text-foreground/80">{feature.value}</span>
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                to="/free-audit"
                                className={[
                                    "mt-6 inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5",
                                    tier.featured
                                        ? "text-[#1a1a1a] bg-gradient-to-r from-[#E8C077] to-[var(--brand-gold)]"
                                        : "text-foreground ring-1 ring-border hover:bg-foreground/5",
                                ].join(" ")}
                            >
                                Get Started →
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
