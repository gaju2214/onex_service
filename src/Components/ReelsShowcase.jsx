import { useEffect } from "react"
import { motion } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"

// Placeholder data — replace permalink/clientName/resultCaption with real
// Instagram reel URLs and results once supplied.
const reels = [
    {
        permalink: "https://www.instagram.com/reel/CxampleReel1/",
        clientName: "Maharaj Wholesale",
        resultCaption: "300K views, 40K new followers in 1 week",
    },
    {
        permalink: "https://www.instagram.com/reel/CxampleReel2/",
        clientName: "Peehus Rasoi",
        resultCaption: "180K views during festival campaign",
    },
    {
        permalink: "https://www.instagram.com/reel/CxampleReel3/",
        clientName: "The Kidszone",
        resultCaption: "2,500 new enquiries in one month",
    },
]

function loadInstagramEmbedScript() {
    if (window.instgrm) {
        window.instgrm.Embeds.process()
        return
    }
    const existing = document.getElementById("instagram-embed-script")
    if (existing) return

    const script = document.createElement("script")
    script.id = "instagram-embed-script"
    script.src = "https://www.instagram.com/embed.js"
    script.async = true
    script.onload = () => window.instgrm && window.instgrm.Embeds.process()
    document.body.appendChild(script)
}

export function ReelsShowcase() {
    useEffect(() => {
        loadInstagramEmbedScript()
    }, [])

    return (
        <section id="reels" className="scroll-mt-24 border-t border-border py-16 md:py-24" aria-label="Viral Reels">
            <div className="mx-auto max-w-6xl px-4">
                <motion.h2
                    className="font-heading text-3xl font-bold md:text-4xl text-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                >
                    Reels That Went <span className="text-[var(--brand-green)]">Viral</span>
                </motion.h2>

                <div className="mt-8">
                    <Carousel opts={{ align: "start" }}>
                        <CarouselContent>
                            {reels.map((reel, i) => (
                                <CarouselItem key={reel.permalink} className="basis-full sm:basis-1/2 lg:basis-1/3">
                                    <motion.div
                                        className="rounded-2xl border border-border bg-foreground/5 p-4 backdrop-blur"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                    >
                                        <blockquote
                                            className="instagram-media"
                                            data-instgrm-permalink={reel.permalink}
                                            data-instgrm-version="14"
                                            style={{ minHeight: "400px", background: "transparent" }}
                                        />
                                        <div className="mt-3 text-center">
                                            <div className="text-sm font-semibold">{reel.clientName}</div>
                                            <div className="text-xs text-foreground/70">{reel.resultCaption}</div>
                                        </div>
                                    </motion.div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-2" />
                        <CarouselNext className="right-2" />
                    </Carousel>
                </div>
            </div>
        </section>
    )
}
