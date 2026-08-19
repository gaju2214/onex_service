import { motion } from "framer-motion"
import { useParams, Link, Navigate } from "react-router-dom"
import { SEO } from "../Components/SEO"
import { ServiceCTA } from "../Components/ServiceCTA"
import { caseStudies, caseStudiesNote } from "../data/caseStudies"

export function CaseStudyDetailPage() {
    const { slug } = useParams()
    const study = caseStudies.find((s) => s.slug === slug)

    if (!study) {
        return <Navigate to="/case-studies" replace />
    }

    return (
        <>
            <SEO title={study.seoTitle} description={study.seoDescription} />
            <section className="pt-24 pb-8 sm:pt-28 md:pt-36" aria-label={study.headline}>
                <div className="mx-auto max-w-3xl px-4 text-center">
                    <Link
                        to={study.categoryLink}
                        className="text-xs font-semibold uppercase tracking-wide text-[var(--brand-gold)] hover:underline"
                    >
                        {study.category}
                    </Link>
                    <motion.h1
                        className="mt-2 font-heading text-3xl font-bold md:text-4xl"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5 }}
                    >
                        {study.headline}
                    </motion.h1>
                    <p className="mt-2 text-sm text-foreground/70">{study.clientType}</p>
                </div>
            </section>

            <section className="py-16 md:py-24" aria-label="Case Study Details">
                <div className="mx-auto max-w-3xl px-4 space-y-8">
                    <motion.div
                        className="rounded-2xl border border-border bg-foreground/5 p-6 backdrop-blur"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.45 }}
                    >
                        <h2 className="font-heading text-lg font-bold">The Problem</h2>
                        <p className="mt-2 text-sm text-foreground/80">{study.problem}</p>
                    </motion.div>

                    <motion.div
                        className="rounded-2xl border border-border bg-foreground/5 p-6 backdrop-blur"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.45, delay: 0.05 }}
                    >
                        <h2 className="font-heading text-lg font-bold">What We Did</h2>
                        <ul className="mt-2 space-y-2">
                            {study.whatWeDid.map((item) => (
                                <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--brand-gold)]" aria-hidden="true" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        className="rounded-2xl border border-[var(--brand-gold)] bg-foreground/5 p-6 backdrop-blur"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.45, delay: 0.1 }}
                    >
                        <h2 className="font-heading text-lg font-bold">The Result</h2>
                        <p className="mt-2 text-sm text-foreground/80">{study.result}</p>
                    </motion.div>

                    <p className="text-center text-xs text-foreground/60">{caseStudiesNote}</p>
                </div>
            </section>

            <ServiceCTA />
        </>
    )
}
