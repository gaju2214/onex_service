import { motion } from "framer-motion"

// Real client dashboard screenshots, converted to WebP.
const screenshots = [
    { src: "/client_dashbord/1.webp", alt: "Client Instagram growth dashboard screenshot 1" },
    { src: "/client_dashbord/2.webp", alt: "Client Instagram growth dashboard screenshot 2" },
    { src: "/client_dashbord/3.webp", alt: "Client Instagram growth dashboard screenshot 3" },
    { src: "/client_dashbord/4.webp", alt: "Client Instagram growth dashboard screenshot 4" },
]

function ScreenshotCard({ screenshot, index }) {
    return (
        <motion.div
            className="overflow-hidden rounded-2xl border border-border bg-foreground/5 backdrop-blur"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <img
                src={screenshot.src}
                alt={screenshot.alt}
                loading="lazy"
                className="h-auto w-full object-cover"
            />
        </motion.div>
    )
}

export function GrowthDashboard() {
    return (
        <section id="growth-dashboard" className="scroll-mt-24 border-t border-border py-16 md:py-24" aria-label="Client Growth Results">
            <div className="mx-auto max-w-6xl px-4">
                <motion.h2
                    className="font-heading text-3xl font-bold md:text-4xl text-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                >
                    Real Results, Real <span className="text-[var(--brand-green)]">Growth</span>
                </motion.h2>
                <p className="mt-2 text-center text-sm text-muted-foreground">
                    Real screenshots from our client growth dashboards.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {screenshots.map((screenshot, i) => (
                        <ScreenshotCard key={screenshot.src} screenshot={screenshot} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}
