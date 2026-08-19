import { motion } from "framer-motion"
import { SEO } from "./SEO"
import { ServiceHero } from "./ServiceHero"
import { ServiceCTA } from "./ServiceCTA"

// Shared template for all "/for-<category>" landing pages — one component,
// content driven entirely by the data object passed in from
// src/data/categories.js. Adding a new category later means adding a data
// entry and one route, not a new page file.
export function CategoryPage({ data }) {
    return (
        <>
            <SEO title={data.seoTitle} description={data.seoDescription} keywords={data.seoKeywords} />
            <div className="pt-24 sm:pt-28 md:pt-36">
                <ServiceHero eyebrow={data.eyebrow} title={data.title} description={data.description} />

                <section className="py-16 md:py-24" aria-label="How We Help">
                    <div className="mx-auto max-w-6xl px-4">
                        <div className="grid gap-4 md:grid-cols-3">
                            {data.painPoints.map((point, i) => (
                                <motion.div
                                    key={point.title}
                                    className="rounded-2xl border border-border bg-foreground/5 p-6 backdrop-blur"
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.45, delay: i * 0.05 }}
                                >
                                    <point.icon className="h-7 w-7 text-[var(--brand-gold)]" aria-hidden="true" />
                                    <div className="mt-3 text-base font-semibold">{point.title}</div>
                                    <p className="mt-2 text-sm text-foreground/70">{point.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <ServiceCTA />
            </div>
        </>
    )
}
