import { motion } from "framer-motion"

const headingText = "Accelerate Growth with Advanced Digital Marketing! Solutions";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export function Hero() {
    return (
        <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden" aria-label="Hero">
            {/* Animated background elements */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                {/* Animated gradient background */}
                <motion.div
                    className="absolute inset-0"
                    animate={{
                        background: [
                            "radial-gradient(60% 50% at 50% 10%, rgba(139,92,246,0.15), transparent), radial-gradient(40% 40% at 80% 20%, rgba(0,122,255,0.12), transparent)",
                            "radial-gradient(60% 50% at 30% 20%, rgba(139,92,246,0.2), transparent), radial-gradient(40% 40% at 70% 30%, rgba(0,122,255,0.18), transparent)",
                            "radial-gradient(60% 50% at 50% 10%, rgba(139,92,246,0.15), transparent), radial-gradient(40% 40% at 80% 20%, rgba(0,122,255,0.12), transparent)",
                        ],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                {/* Floating particles */}
                <motion.div
                    className="absolute top-20 left-20 w-3 h-3 bg-primary/50 rounded-full blur-sm"
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.5, 1, 0.5],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute top-40 right-32 w-2 h-2 bg-accent/60 rounded-full blur-sm"
                    animate={{
                        y: [0, -25, 0],
                        opacity: [0.6, 1, 0.6],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                />
                <motion.div
                    className="absolute bottom-32 left-1/3 w-2.5 h-2.5 bg-purple-400/40 rounded-full blur-sm"
                    animate={{
                        y: [0, -35, 0],
                        opacity: [0.4, 0.8, 0.4],
                        scale: [1, 1.4, 1],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                />
                <motion.div
                    className="absolute top-1/2 right-20 w-1.5 h-1.5 bg-blue-400/30 rounded-full blur-sm"
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 0.7, 0.3],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5,
                    }}
                />
            </div>
            <div className="mx-auto max-w-6xl px-4 pt-24">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="max-w-3xl lg:max-w-2xl"
                    >
                        <motion.h1
                            className="font-heading text-pretty text-4xl font-extrabold leading-tight md:text-6xl"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {headingText.split(' ').map((word, index) => (
                                <motion.span key={index} variants={childVariants} className="inline-block mr-2">
                                    {word}
                                </motion.span>
                            ))}
                        </motion.h1>
                        <motion.p
                            className="mt-4 max-w-2xl text-balance text-base leading-relaxed text-foreground/80 md:text-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            We help businesses thrive with tailored marketing strategies, expert SEO, and high-converting campaigns for sustainable success.
                        </motion.p>
                        <motion.div
                            className="mt-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <a
                                href="#services"
                                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold text-foreground shadow-[0_0_0_0_rgba(0,0,0,0)] ring-1 ring-primary/30 transition-all hover:-translate-y-0.5 hover:shadow-[0_0_32px] hover:shadow-primary/40 bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-purple)]"
                            >
                                Explore Our Services →
                            </a>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="flex-shrink-0"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <img
                            src="/creative-team-collaboration.jpg"
                            alt="Creative team collaboration"
                            className="w-full max-w-md lg:max-w-lg h-auto rounded-2xl shadow-2xl"
                        />
                    </motion.div>
                </div>

                {/* Floating subtle lines to hint futurism, not decorative blobs */}
                <div aria-hidden="true" className="pointer-events-none">
                    <motion.div
                        className="absolute -right-24 top-32 h-48 w-48 rotate-12 rounded-xl border border-primary/20"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 0.5, y: 0 }}
                        transition={{ duration: 1.2 }}
                    />
                    <motion.div
                        className="absolute -left-16 bottom-24 h-64 w-64 -rotate-12 rounded-2xl border border-accent/20"
                        initial={{ opacity: 0, y: -24 }}
                        animate={{ opacity: 0.4, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                    />
                </div>
            </div>
        </section>
    )
}
