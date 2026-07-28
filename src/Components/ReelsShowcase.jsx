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

const REELS_PER_SLIDE = 3

function chunk(items, size) {
    const groups = []
    for (let i = 0; i < items.length; i += size) {
        groups.push(items.slice(i, i + size))
    }
    return groups
}

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

function ReelCard({ reel, i }) {
    return (
        <motion.div
            className="mx-auto flex w-full max-w-[380px] flex-col items-center rounded-2xl border border-border bg-foreground/5 p-4 backdrop-blur"
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
    )
}

export function ReelsShowcase() {
    useEffect(() => {
        loadInstagramEmbedScript()
        // Instagram's script can run before the carousel finishes laying
        // out; re-process shortly after mount so embeds pick up the
        // correct container width instead of a stale/overlapping layout.
        const timeout = setTimeout(() => {
            window.instgrm && window.instgrm.Embeds.process()
        }, 500)
        return () => clearTimeout(timeout)
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
                    <Carousel opts={{ align: "start", autoPlay: false }}>
                        <CarouselContent>
                            {chunk(reels, REELS_PER_SLIDE).map((group, groupIndex) => (
                                <CarouselItem key={group[0].permalink} className="basis-full">
                                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                        {group.map((reel, i) => (
                                            <ReelCard key={reel.permalink} reel={reel} i={groupIndex * REELS_PER_SLIDE + i} />
                                        ))}
                                    </div>
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
