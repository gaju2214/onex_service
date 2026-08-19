import { motion } from "framer-motion"
import { SEO } from "../Components/SEO"
import { CaseStudyCard } from "../Components/CaseStudyCard"
import { ServiceCTA } from "../Components/ServiceCTA"
import { caseStudies, caseStudiesNote } from "../data/caseStudies"

export function CaseStudiesPage() {
    return (
        <>
            <SEO
                title="Case Studies | Onex Service, Jalgaon"
                description="See how Onex Service's full-funnel approach — content, WhatsApp automation, and web development — helps businesses in Jalgaon and Maharashtra grow."
                keywords="marketing case studies Jalgaon, digital marketing results Maharashtra, WhatsApp automation case study, social media marketing case study Jalgaon"
            />
            <section className="pt-24 pb-8 sm:pt-28 md:pt-36" aria-label="Case Studies">
                <div className="mx-auto max-w-3xl px-4 text-center">
                    <motion.h1
                        className="font-heading text-3xl font-bold md:text-4xl"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5 }}
                    >
                        Case <span className="text-[var(--brand-gold)]">Studies</span>
                    </motion.h1>
                    <motion.p
                        className="mx-auto mt-4 max-w-2xl text-sm text-foreground/80 md:text-base"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        How the full funnel — content and ads, WhatsApp automation, and web development —
                        works together for businesses across Jalgaon and Maharashtra.
                    </motion.p>
                    <motion.p
                        className="mx-auto mt-4 max-w-2xl rounded-2xl border border-border bg-foreground/5 p-3 text-xs text-foreground/60 backdrop-blur"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {caseStudiesNote}
                    </motion.p>
                </div>
            </section>

            <section className="py-16 md:py-24" aria-label="All Case Studies">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                        {caseStudies.map((study, i) => (
                            <CaseStudyCard key={study.slug} study={study} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            <ServiceCTA />
        </>
    )
}
