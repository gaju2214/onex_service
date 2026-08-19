import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { CaseStudyCard } from "./CaseStudyCard"
import { caseStudies } from "../data/caseStudies"

const featured = caseStudies.slice(0, 2)

export function FeaturedCaseStudies() {
    return (
        <section id="case-studies" className="scroll-mt-24 border-t border-border py-16 md:py-24" aria-label="Featured Case Studies">
            <div className="mx-auto max-w-6xl px-4">
                <motion.h2
                    className="font-heading text-3xl font-bold md:text-4xl text-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                >
                    How the <span className="text-[var(--brand-gold)]">Funnel</span> Works
                </motion.h2>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {featured.map((study, i) => (
                        <CaseStudyCard key={study.slug} study={study} index={i} />
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <Link
                        to="/case-studies"
                        className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-foreground ring-1 ring-border transition hover:bg-foreground/5"
                    >
                        View All Case Studies →
                    </Link>
                </div>
            </div>
        </section>
    )
}
