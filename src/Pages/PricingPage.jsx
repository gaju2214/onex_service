import { motion } from "framer-motion"
import { SEO } from "../Components/SEO"
import { PricingTable } from "../Components/PricingTable"
import { ServiceCTA } from "../Components/ServiceCTA"

export function PricingPage() {
    return (
        <>
            <SEO
                title="Pricing & Growth Bundle Packages | Onex Service, Jalgaon"
                description="Growth Bundle pricing for Jalgaon and Maharashtra businesses — social media marketing, WhatsApp Business API automation, and web/app development packages from Onex Service."
                keywords="social media marketing pricing Jalgaon, digital marketing packages Maharashtra, WhatsApp Business API pricing Jalgaon, growth bundle Jalgaon, marketing agency pricing Maharashtra"
            />
            <section className="pt-24 pb-8 sm:pt-28 md:pt-36" aria-label="Pricing">
                <div className="mx-auto max-w-3xl px-4 text-center">
                    <motion.h1
                        className="font-heading text-3xl font-bold md:text-4xl"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5 }}
                    >
                        Growth Bundle <span className="text-[var(--brand-gold)]">Pricing</span>
                    </motion.h1>
                    <motion.p
                        className="mx-auto mt-4 max-w-2xl text-sm text-foreground/80 md:text-base"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Simple, transparent packages for Jalgaon and Maharashtra businesses that want social
                        media marketing, WhatsApp Business API automation, and web or app development
                        working together as one growth system — not three separate vendors and invoices.
                    </motion.p>
                    <motion.p
                        className="mx-auto mt-3 max-w-2xl text-xs text-foreground/60"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Prices shown are starting estimates. Get a free audit and we'll confirm exact
                        pricing for your business.
                    </motion.p>
                </div>
            </section>

            <PricingTable />

            <section className="border-t border-border py-16 md:py-24" aria-label="Why These Packages">
                <div className="mx-auto max-w-3xl px-4 text-center">
                    <motion.h2
                        className="font-heading text-2xl font-bold md:text-3xl"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5 }}
                    >
                        Built for how Jalgaon businesses actually grow
                    </motion.h2>
                    <motion.p
                        className="mt-4 text-sm text-foreground/80 md:text-base"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Coaching institutes, clinics, restaurants, real estate developers, and retail brands
                        across Jalgaon and Maharashtra don't need another agency that only posts on
                        Instagram. Every Growth Bundle package combines content and ads with WhatsApp
                        automation and, at the higher tiers, a website or app — so leads generated in
                        Jalgaon actually convert instead of getting lost between three different tools.
                    </motion.p>
                </div>
            </section>

            <ServiceCTA />
        </>
    )
}
