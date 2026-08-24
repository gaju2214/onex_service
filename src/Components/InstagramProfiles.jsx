import { useEffect } from "react"
import { motion } from "framer-motion"
import { loadInstagramEmbedScript } from "../lib/instagramEmbed"

// Real client Instagram handles, same source as ClientLogos.jsx
// (public/clients_logo/clients_details).
const profiles = [
    { name: "Maharaj Wholesale", handle: "maharaj.wholesale_official" },
    { name: "Louis Creation", handle: "louis_creation" },
    { name: "The Kidszone", handle: "thekidszone_jalgaon" },
]

function ProfileCard({ profile, i }) {
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
                data-instgrm-permalink={`https://www.instagram.com/${profile.handle}/`}
                data-instgrm-version="14"
                style={{ minHeight: "400px", background: "transparent" }}
            />
            <div className="mt-3 text-center">
                <div className="text-sm font-semibold">{profile.name}</div>
                <div className="text-xs text-foreground/70">@{profile.handle}</div>
            </div>
        </motion.div>
    )
}

export function InstagramProfiles() {
    useEffect(() => {
        loadInstagramEmbedScript()
        const timeout = setTimeout(() => {
            window.instgrm && window.instgrm.Embeds.process()
        }, 500)
        return () => clearTimeout(timeout)
    }, [])

    return (
        <section id="client-profiles" className="scroll-mt-24 border-t border-border py-16 md:py-24" aria-label="Client Instagram Profiles">
            <div className="mx-auto max-w-6xl px-4">
                <motion.h2
                    className="font-heading text-3xl font-bold md:text-4xl text-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                >
                    Live on <span className="text-[var(--brand-gold)]">Instagram</span>
                </motion.h2>
                <p className="mt-2 text-center text-sm text-muted-foreground">
                    Real client profiles we manage, embedded live from Instagram.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {profiles.map((profile, i) => (
                        <ProfileCard key={profile.handle} profile={profile} i={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}
