import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Share2, MessageCircle, Code2, Smartphone } from "lucide-react"
import { SEO } from "../Components/SEO"
import { ProcessFlow } from "../Components/ProcessFlow"
import { ClientCategories } from "../Components/ClientCategories"
import { ServiceCTA } from "../Components/ServiceCTA"

const serviceLinks = [
    {
        to: "/social-media-marketing",
        icon: Share2,
        title: "Social Media Marketing",
        description: "Reels, promo shoots, Instagram management, and Meta ads — the attention layer.",
    },
    {
        to: "/whatsapp-business-api",
        icon: MessageCircle,
        title: "WhatsApp Business API",
        description: "OneClickMsg, our in-house product for automation and broadcast messaging — the conversion layer.",
    },
    {
        to: "/web-development",
        icon: Code2,
        title: "Web Development",
        description: "Dynamic websites, static landing pages, and admin panels — the infrastructure layer.",
    },
    {
        to: "/app-development",
        icon: Smartphone,
        title: "App Development",
        description: "Mobile and web apps built around how your business runs.",
    },
]

export function ServicesPage() {
    return (
        <>
            <SEO
                title="Our Services | Onex Service, Jalgaon"
                description="Social media marketing, WhatsApp automation, and web/app development — the full growth funnel for businesses in Jalgaon and across India."
                keywords="social media marketing services Jalgaon, WhatsApp business API, web development Jalgaon, app development, digital marketing services"
            />
            <section className="pt-24 sm:pt-28 md:pt-36 pb-16 md:pb-24" aria-label="Our Services">
                <div className="mx-auto max-w-6xl px-4">
                    <motion.h1
                        className="font-heading text-3xl font-bold text-center md:text-4xl"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5 }}
                    >
                        The Full <span className="text-[var(--brand-gold)]">Funnel</span>
                    </motion.h1>
                    <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-muted-foreground">
                        Attention, conversion, and infrastructure — all under one roof.
                    </p>
                    <motion.p
                        className="mx-auto mt-4 max-w-2xl text-center text-sm text-foreground/80 md:text-base"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Most agencies do one piece of this — content, or ads, or a website — and leave you to
                        stitch the rest together yourself. We built our services to work as one connected
                        system: content and ads bring people in, WhatsApp automation turns them into
                        conversations and bookings, and your website or app gives your business the
                        infrastructure to run it all. Pick a service below to see exactly what's included.
                    </motion.p>

                    <div className="mt-10 grid gap-4 sm:grid-cols-2">
                        {serviceLinks.map((service, i) => (
                            <motion.div
                                key={service.to}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.45, delay: i * 0.05 }}
                            >
                                <Link
                                    to={service.to}
                                    className="group flex h-full flex-col rounded-2xl border border-border bg-foreground/5 p-6 backdrop-blur transition-transform hover:-translate-y-1"
                                >
                                    <service.icon className="h-8 w-8 text-[var(--brand-gold)]" aria-hidden="true" />
                                    <div className="mt-3 text-lg font-semibold">{service.title}</div>
                                    <p className="mt-2 flex-1 text-sm text-foreground/70">{service.description}</p>
                                    <div className="mt-4 text-sm font-semibold text-[var(--brand-gold)] group-hover:underline">
                                        Learn more →
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <ProcessFlow />
            <ClientCategories />
            <ServiceCTA />
        </>
    )
}
