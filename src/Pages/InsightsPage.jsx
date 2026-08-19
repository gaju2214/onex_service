import { motion } from "framer-motion"
import { SEO } from "../Components/SEO"
import { InsightCard } from "../Components/InsightCard"
import { insights } from "../data/insights"

export function InsightsPage() {
    return (
        <>
            <SEO
                title="Insights | Onex Service, Jalgaon"
                description="Articles and podcast episodes on social media marketing, WhatsApp automation, and business growth in Jalgaon and Maharashtra, from Onex Service."
                keywords="digital marketing blog Jalgaon, social media marketing tips Maharashtra, WhatsApp automation blog, Onex Service podcast"
            />
            <section className="pt-24 pb-8 sm:pt-28 md:pt-36" aria-label="Insights">
                <div className="mx-auto max-w-3xl px-4 text-center">
                    <motion.h1
                        className="font-heading text-3xl font-bold md:text-4xl"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5 }}
                    >
                        Onex <span className="text-[var(--brand-gold)]">Insights</span>
                    </motion.h1>
                    <motion.p
                        className="mx-auto mt-4 max-w-2xl text-sm text-foreground/80 md:text-base"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Articles and podcast episodes on social media marketing, WhatsApp automation, and
                        growing your business in Jalgaon and Maharashtra.
                    </motion.p>
                </div>
            </section>

            <section className="py-16 md:py-24" aria-label="All Insights">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {insights.map((post, i) => (
                            <InsightCard key={post.slug} post={post} index={i} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
