import { motion } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"

const testimonials = [
    {
        name: "Ava Martinez",
        role: "CMO, NovaTech",
        quote: "ContentOcean transformed our brand presence and boosted our engagement by 3x within months.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video
    },
    {
        name: "Liam Johnson",
        role: "Founder, UrbanGrain",
        quote: "From strategy to content, their team delivered premium work that truly moved the needle.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video
    },
    {
        name: "Sophia Chen",
        role: "Head of Growth, Alto",
        quote: "Clean execution, bold ideas, and measurable results. Couldn’t ask for more.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video
    },
    {
        name: "Ethan Davis",
        role: "CEO, TechStart",
        quote: "Exceptional service and innovative solutions that exceeded our expectations.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video
    },
    {
        name: "Olivia Wilson",
        role: "Marketing Director, InnovateCorp",
        quote: "Their expertise in digital marketing helped us achieve unprecedented growth.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video
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
                    <Carousel opts={{ align: "start" }}>
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
                                                    <stop offset="0%" stopColor="var(--brand-blue)" />
                                                    <stop offset="50%" stopColor="transparent" />
                                                    <stop offset="100%" stopColor="var(--brand-purple)" />
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
                                                src="/client-portrait.jpg"
                                                alt={`${t.name} portrait`}
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
                                        <motion.div
                                            className="mt-3 flex justify-center"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: i * 0.1 + 0.6 }}
                                        >
                                            <motion.iframe
                                                src={t.videoUrl}
                                                title={`${t.name} testimonial video`}
                                                className="w-full aspect-[9/16] max-h-48 rounded-lg border border-border"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                whileHover={{ scale: 1.02 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </motion.div>
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
