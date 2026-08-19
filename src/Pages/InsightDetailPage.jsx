import { motion } from "framer-motion"
import { useParams, Navigate } from "react-router-dom"
import { SEO } from "../Components/SEO"
import { ServiceCTA } from "../Components/ServiceCTA"
import { insights } from "../data/insights"

export function InsightDetailPage() {
    const { slug } = useParams()
    const post = insights.find((p) => p.slug === slug)

    if (!post) {
        return <Navigate to="/insights" replace />
    }

    return (
        <>
            <SEO title={post.seoTitle} description={post.seoDescription} />
            <section className="pt-24 pb-8 sm:pt-28 md:pt-36" aria-label={post.title}>
                <div className="mx-auto max-w-3xl px-4 text-center">
                    <div className="text-xs font-semibold uppercase tracking-wide text-foreground/60">
                        {post.publishedDate}
                    </div>
                    <motion.h1
                        className="mt-2 font-heading text-3xl font-bold md:text-4xl"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5 }}
                    >
                        {post.title}
                    </motion.h1>
                </div>
            </section>

            <section className="py-16 md:py-24" aria-label="Post Content">
                <div className="mx-auto max-w-3xl px-4">
                    {post.podcastEmbedUrl && (
                        <div className="mb-8 overflow-hidden rounded-2xl border border-border">
                            <iframe
                                src={post.podcastEmbedUrl}
                                title={`${post.title} — podcast episode`}
                                className="h-40 w-full"
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                            />
                        </div>
                    )}

                    <div className="space-y-4">
                        {post.content.map((paragraph, i) => (
                            <motion.p
                                key={i}
                                className="text-sm text-foreground/80 md:text-base"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                            >
                                {paragraph}
                            </motion.p>
                        ))}
                    </div>
                </div>
            </section>

            <ServiceCTA />
        </>
    )
}
