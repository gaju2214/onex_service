import { motion } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"

// Real client names/logos, sourced from public/clients_logo/clients_details.
// Quote text is still placeholder pending real written reviews from these
// clients — swap `quote` per entry once that's supplied.
const testimonials = [
    {
        name: "Maharaj Wholesale",
        role: "Owner, Maharaj Wholesale",
        logo: "/clients_logo/Maharaj Wholesale.png",
        quote: "Our Instagram went from a few hundred to thousands of followers. Enquiries have doubled since we started working with them.",
    },
    {
        name: "Peehus Rasoi",
        role: "Owner, Peehus Rasoi",
        logo: "/clients_logo/Peehus Rasoi.png",
        quote: "They understood our local audience and made reels that actually felt like us, not a generic agency template.",
    },
    {
        name: "The Kidszone",
        role: "Director, The Kidszone, Jalgaon",
        logo: "/clients_logo/The Kidszone.jpeg",
        quote: "We used to rely only on word of mouth. Now our enquiries come from Instagram every single day.",
    },
    {
        name: "The Baithak Bar & Restro",
        role: "Owner, The Baithak Bar & Restro, Jalgaon",
        logo: "/clients_logo/The Baithak Bar & Restro.png",
        quote: "Professional, honest, and they explain everything in simple terms. No confusing jargon, just results.",
    },
    {
        name: "Hotel Shree Gajanan",
        role: "Proprietor, Hotel Shree Gajanan",
        logo: "/clients_logo/Hotel Shree Gajanan.jpeg",
        quote: "Best decision for our hotel's social media. Clear reporting every month and steady growth.",
    },
    {
        name: "Navid Sofa",
        role: "Owner, Navid Sofa",
        logo: "/clients_logo/Navid Sofa.png",
        quote: "Our showroom gets steady enquiries from Instagram now, something that never happened before.",
    },
    {
        name: "Aanand Saw Mill",
        role: "Owner, Aanand Saw Mill",
        logo: "/clients_logo/Aanand Saw Mill.jpeg",
        quote: "They made our woodwork business look premium online. Great content, great communication.",
    },
    {
        name: "ShopGrow",
        role: "Founder, ShopGrow",
        logo: "/clients_logo/ShopGrow.jpeg",
        quote: "Consistent posting and clear monthly updates. Exactly what we needed to grow online.",
    },
    {
        name: "Kaviesh Creations",
        role: "Owner, Kaviesh Creations, Pune",
        logo: "/clients_logo/Kaviesh Creations, Pune.png",
        quote: "Our page finally looks and feels professional. Enquiries have picked up noticeably.",
    },
    {
        name: "Rita Bhalla Kitchen",
        role: "Owner, Rita Bhalla Kitchen",
        logo: "/clients_logo/Rita Bhalla Kitchen .WEBP",
        quote: "They understand food content — our reels actually get watched and shared now.",
    },
    {
        name: "Louis Creation",
        role: "Owner, Louis Creation",
        logo: "/clients_logo/Louis Creation.JPEG",
        quote: "Reliable team, good creative ideas, and they actually explain the results to us.",
    },
]

export function Testimonials() {
    return (
        <section
            id="testimonials"
            className="scroll-mt-24 bg-[rgba(255,255,255,0.02)] py-16 md:py-24 relative overflow-hidden"
            aria-label="Testimonials"
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-20 w-24 h-24 bg-accent/10 rounded-full blur-xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.4, 0.2, 0.4],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                />
            </div>

            <div className="mx-auto max-w-6xl px-4 relative z-10">
                <motion.h2
                    className="font-heading text-3xl font-bold md:text-4xl text-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                >
                    What Clients Say
                </motion.h2>

                <div className="mt-8">
                    <Carousel opts={{ align: "start", autoPlay: true }}>
                        <CarouselContent>
                            {testimonials.map((t, i) => (
                                <CarouselItem key={i} className="basis-full sm:basis-1/2 lg:basis-[calc(33.333%-1rem)]">
                                    <motion.article
                                        className="h-full relative rounded-2xl bg-foreground/5 p-4 backdrop-blur"
                                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{
                                            duration: 0.6,
                                            delay: i * 0.1,
                                            ease: "easeOut"
                                        }}
                                        whileHover={{
                                            scale: 1.05,
                                            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                                            transition: { duration: 0.3 }
                                        }}
                                    >
                                        <motion.svg
                                            className="absolute inset-0 w-full h-full"
                                            viewBox="0 0 100 100"
                                            preserveAspectRatio="none"
                                            initial={{ pathLength: 0 }}
                                            whileInView={{ pathLength: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
                                        >
                                            <motion.path
                                                d="M 0 16 Q 0 0 16 0 L 84 0 Q 100 0 100 16 L 100 84 Q 100 100 84 100 L 16 100 Q 0 100 0 84 Z"
                                                fill="none"
                                                stroke="url(#gradient)"
                                                strokeWidth="0.5"
                                                pathLength={1}
                                            />
                                            <defs>
                                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                    <stop offset="0%" stopColor="var(--brand-gold)" />
                                                    <stop offset="50%" stopColor="transparent" />
                                                    <stop offset="100%" stopColor="var(--brand-graphite)" />
                                                </linearGradient>
                                            </defs>
                                        </motion.svg>
                                        <motion.div
                                            className="flex items-center gap-3"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
                                        >
                                            <motion.img
                                                src={t.logo}
                                                alt={`${t.name} logo`}
                                                className="h-8 w-8 rounded-full border border-border object-cover"
                                                loading="lazy"
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                transition={{ duration: 0.2 }}
                                            />
                                            <div>
                                                <motion.div
                                                    className="text-sm font-semibold"
                                                    initial={{ opacity: 0 }}
                                                    whileInView={{ opacity: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                                                >
                                                    {t.name}
                                                </motion.div>
                                                <motion.div
                                                    className="text-xs text-foreground/70"
                                                    initial={{ opacity: 0 }}
                                                    whileInView={{ opacity: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.5, delay: i * 0.1 + 0.4 }}
                                                >
                                                    {t.role}
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                        <motion.p
                                            className="mt-2 text-sm text-foreground/80"
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: i * 0.1 + 0.5 }}
                                        >
                                            "{t.quote}"
                                        </motion.p>
                                    </motion.article>
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
