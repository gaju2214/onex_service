import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Mic, FileText } from "lucide-react"

export function InsightCard({ post, index = 0 }) {
    const Icon = post.type === "podcast" ? Mic : FileText

    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
        >
            <Link
                to={`/insights/${post.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-foreground/5 p-6 backdrop-blur transition-transform hover:-translate-y-1"
            >
                <Icon className="h-7 w-7 text-[var(--brand-gold)]" aria-hidden="true" />
                <div className="mt-3 text-xs font-semibold uppercase tracking-wide text-foreground/60">
                    {post.publishedDate}
                </div>
                <div className="mt-1 text-lg font-semibold">{post.title}</div>
                <p className="mt-2 flex-1 text-sm text-foreground/70">{post.excerpt}</p>
                <div className="mt-4 text-sm font-semibold text-[var(--brand-gold)] group-hover:underline">
                    Read more →
                </div>
            </Link>
        </motion.div>
    )
}
