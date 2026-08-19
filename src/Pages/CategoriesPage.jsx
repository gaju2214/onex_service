import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { GraduationCap, Stethoscope, Building2, UtensilsCrossed, ShoppingBag, PartyPopper } from "lucide-react"
import { SEO } from "../Components/SEO"
import { ServiceCTA } from "../Components/ServiceCTA"
import { clientCategories } from "../data/homepage"
import { categories } from "../data/categories"

const iconMap = {
    GraduationCap,
    Stethoscope,
    Building2,
    UtensilsCrossed,
    ShoppingBag,
    PartyPopper,
}

// Match each homepage category entry to its full category data (by route)
// so this index page can show real descriptions, not just icons/labels.
const categoryBySlug = Object.fromEntries(
    Object.values(categories).map((c) => [`/${c.slug}`, c])
)

const weddingEventsBlurb = "Coming soon — content, WhatsApp automation, and web presence for wedding and event vendors across Jalgaon and Maharashtra."

export function CategoriesPage() {
    return (
        <>
            <SEO
                title="Business Categories We Serve | Onex Service, Jalgaon"
                description="Coaching institutes, clinics, real estate, restaurants, retail & D2C, and wedding/event vendors — see how Onex Service helps your specific business grow in Jalgaon and Maharashtra."
                keywords="business categories Jalgaon, industries we serve Maharashtra, digital marketing for coaching institutes, digital marketing for clinics, digital marketing for restaurants"
            />
            <section className="pt-24 pb-8 sm:pt-28 md:pt-36" aria-label="Business Categories">
                <div className="mx-auto max-w-3xl px-4 text-center">
                    <motion.h1
                        className="font-heading text-3xl font-bold md:text-4xl"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5 }}
                    >
                        Business <span className="text-[var(--brand-gold)]">Categories</span> We Serve
                    </motion.h1>
                    <motion.p
                        className="mx-auto mt-4 max-w-2xl text-sm text-foreground/80 md:text-base"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Every business is different, and generic marketing advice doesn't work the same way
                        for a coaching institute as it does for a restaurant. Pick your category below to see
                        exactly how we help businesses like yours grow in Jalgaon and Maharashtra.
                    </motion.p>
                </div>
            </section>

            <section className="py-16 md:py-24" aria-label="Categories">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {clientCategories.map((category, i) => {
                            const Icon = iconMap[category.icon]
                            const fullCategory = category.to ? categoryBySlug[category.to] : null
                            const blurb = fullCategory ? fullCategory.description : weddingEventsBlurb
                            const cardClasses = "flex h-full flex-col rounded-2xl border border-border bg-foreground/5 p-6 backdrop-blur"

                            const content = (
                                <>
                                    <Icon className="h-8 w-8 text-[var(--brand-gold)]" aria-hidden="true" />
                                    <div className="mt-3 text-lg font-semibold">{category.label}</div>
                                    <p className="mt-2 flex-1 text-sm text-foreground/70">{blurb}</p>
                                    {category.to ? (
                                        <div className="mt-4 text-sm font-semibold text-[var(--brand-gold)] group-hover:underline">
                                            Learn more →
                                        </div>
                                    ) : (
                                        <div className="mt-4 text-sm font-semibold text-foreground/50">
                                            Coming soon
                                        </div>
                                    )}
                                </>
                            )

                            return (
                                <motion.div
                                    key={category.label}
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.45, delay: i * 0.05 }}
                                >
                                    {category.to ? (
                                        <Link to={category.to} className={`${cardClasses} group transition-transform hover:-translate-y-1`}>
                                            {content}
                                        </Link>
                                    ) : (
                                        <div className={cardClasses}>{content}</div>
                                    )}
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <ServiceCTA />
        </>
    )
}
