import { useEffect } from "react"
import { motion } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"

// Real reel links, sourced from public/reel.txt. Per-reel client/result
// mapping wasn't supplied, so captions stay generic until that's available.
const reels = [
    { permalink: "https://www.instagram.com/reel/DbD3m5QI8-U/", clientName: "Client Campaign Reel", resultCaption: "Real client content" },
    { permalink: "https://www.instagram.com/reel/DaSwzylt-Uy/", clientName: "Client Campaign Reel", resultCaption: "Real client content" },
    { permalink: "https://www.instagram.com/reel/DbRwwC4obuS/", clientName: "Client Campaign Reel", resultCaption: "Real client content" },
    { permalink: "https://www.instagram.com/reel/DZ42gSeML2P/", clientName: "Client Campaign Reel", resultCaption: "Real client content" },
    { permalink: "https://www.instagram.com/reel/DaNrhQkIWDi/", clientName: "Client Campaign Reel", resultCaption: "Real client content" },
    { permalink: "https://www.instagram.com/reel/DbHaGSOSCfP/", clientName: "Client Campaign Reel", resultCaption: "Real client content" },
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
