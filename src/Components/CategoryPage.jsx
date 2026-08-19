import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { SEO } from "./SEO"
import { ServiceHero } from "./ServiceHero"
import { ServiceIntro } from "./ServiceIntro"
import { ServiceCTA } from "./ServiceCTA"
import { socialMediaMarketing, whatsappBusinessApi, webDevelopment, appDevelopment } from "../data/serviceDetails"

const servicePaths = {
    socialMediaMarketing: { path: "/social-media-marketing", title: socialMediaMarketing.eyebrow, icon: socialMediaMarketing.benefits[0].icon },
    whatsappBusinessApi: { path: "/whatsapp-business-api", title: whatsappBusinessApi.eyebrow, icon: whatsappBusinessApi.benefits[0].icon },
    webDevelopment: { path: "/web-development", title: webDevelopment.eyebrow, icon: webDevelopment.benefits[0].icon },
    appDevelopment: { path: "/app-development", title: appDevelopment.eyebrow, icon: appDevelopment.benefits[0].icon },
}

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

                {data.growth && <ServiceIntro text={data.growth} />}

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

                {data.relevantServices && (
                    <section className="border-t border-border py-16 md:py-24" aria-label="Recommended Services">
                        <div className="mx-auto max-w-6xl px-4">
                            <motion.h2
                                className="font-heading text-2xl font-bold text-center md:text-3xl"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.5 }}
                            >
                                Services We'd <span className="text-[var(--brand-gold)]">Recommend</span>
                            </motion.h2>

                            <div className="mt-8 grid gap-4 md:grid-cols-3">
                                {data.relevantServices.map((service, i) => {
                                    const meta = servicePaths[service.key]
                                    if (!meta) return null
                                    return (
                                        <motion.div
                                            key={service.key}
                                            initial={{ opacity: 0, y: 12 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, amount: 0.3 }}
                                            transition={{ duration: 0.45, delay: i * 0.05 }}
                                        >
                                            <Link
                                                to={meta.path}
                                                className="group flex h-full flex-col rounded-2xl border border-border bg-foreground/5 p-6 backdrop-blur transition-transform hover:-translate-y-1"
                                            >
                                                <meta.icon className="h-7 w-7 text-[var(--brand-gold)]" aria-hidden="true" />
                                                <div className="mt-3 text-base font-semibold">{meta.title}</div>
                                                <p className="mt-2 flex-1 text-sm text-foreground/70">{service.note}</p>
                                                <div className="mt-4 text-sm font-semibold text-[var(--brand-gold)] group-hover:underline">
                                                    Learn more →
                                                </div>
                                            </Link>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </div>
                    </section>
                )}

                <ServiceCTA />
            </div>
        </>
    )
}
