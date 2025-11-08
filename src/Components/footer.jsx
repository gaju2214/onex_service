import { motion } from "framer-motion"

export function Footer() {
    return (
        <footer className="border-t border-border bg-background/60 backdrop-blur relative overflow-hidden" aria-label="Footer">
            {/* Animated background gradient */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"
                    animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{
                        backgroundSize: "200% 200%",
                    }}
                />
            </div>

            <div className="mx-auto max-w-6xl px-4 lg:px-0 py-10 relative z-10 text-center md:text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:mx-8">
                    {/* Logo and Social Media */}
                    <motion.div
                        className="flex flex-col gap-4 items-center md:items-start lg:items-center lg:text-center"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-2">
                            <motion.div
                                className="h-6 w-6 rounded-md bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-purple)]"
                                aria-hidden="true"
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                            />
                            <motion.span
                                className="font-heading text-sm font-extrabold"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                ONEX SERVICE
                            </motion.span>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <h3 className="font-heading text-lg font-bold mb-4">Follow Us on Social Media</h3>
                            <div className="flex gap-4">
                                {[
                                    {
                                        href: "https://www.facebook.com/share/17NqG8ib2y/",
                                        label: "Facebook",
                                        d: "M14 9h3V6a3 3 0 0 1 3-3h3v4h-3a1 1 0 0 0-1 1v1h4v4h-4v10h-4V13h-3V9h3Z",
                                    },
                                    {
                                        href: "https://www.instagram.com/onex.service?igsh=MTNmaGF5aHhjM21iaw==",
                                        label: "Instagram",
                                        d: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 0h10M17 7h.01M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z",
                                    },
                                    {
                                        href: "https://www.linkedin.com/in/jayesh-gajanan-dhamale-991264327?trk=contact-info",
                                        label: "LinkedIn",
                                        d: "M4 9h4v12H4zM6 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6 4h4v2a4 4 0 0 1 4-2c3 0 4 2 4 5v7h-4v-6c0-2-1-3-3-3s-3 1-3 3v6h-4V9Z",
                                    },
                                    {
                                        href: "https://x.com",
                                        label: "X",
                                        d: "M4 4h4l5 7 5-7h4l-7 10 7 10h-4l-5-7-5 7H4l7-10L4 4Z",
                                    },
                                ].map((s, index) => (
                                    <motion.a
                                        key={s.label}
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={s.label}
                                        className="rounded-md p-2 text-foreground/80 transition hover:bg-foreground/10 hover:text-foreground"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        whileHover={{
                                            scale: 1.2,
                                            rotate: 5,
                                            backgroundColor: "rgba(0,122,255,0.1)"
                                        }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            className="h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={1.5}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            aria-hidden="true"
                                        >
                                            <path d={s.d} />
                                        </svg>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        className="lg:text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="font-heading text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {[
                                { href: "#home", label: "Home" },
                                { href: "#about", label: "About" },
                                { href: "#services", label: "Services" },
                                { href: "#portfolio", label: "Projects" },
                                { href: "#contact", label: "Contact" },
                            ].map((link, index) => (
                                <li key={link.label}>
                                    <motion.a
                                        href={link.href}
                                        className="text-sm text-foreground/80 hover:text-blue-600 transition-colors"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.05 }}
                                    >
                                        {link.label}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div
                        className="lg:text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h3 className="font-heading text-lg font-bold mb-4">Services</h3>
                        <ul className="space-y-2">
                            {[
                                "Original Content Creation",
                                "Multiple Marketing Platforms",
                                "Digital Consultancy and Mentorship",
                                "Survey & Research",
                                "Web & App Development", 
                                "Social Media Marketing",
                            ].map((service, index) => (
                                <li key={typeof service === 'string' ? service : service.name} className="space-y-1">
                                    <motion.a
                                        href="#services"
                                        className="text-sm text-foreground/80 hover:text-blue-600 transition-colors"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.05 }}
                                    >
                                        {typeof service === 'string' ? service : service.name}
                                    </motion.a>
                                    {typeof service === 'object' && (
                                        <motion.p
                                            className="text-xs text-foreground/60"
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: index * 0.05 + 0.1 }}
                                        >
                                            {service.description}
                                        </motion.p>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Call to Action */}
                <motion.div
                    className="mt-8 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h4 className="font-heading text-xl font-bold mb-2">Need a digital boost?</h4>
                    <p className="text-sm text-foreground/80">
                        Let’s discuss how we can transform your brand with AI-powered marketing and digital innovation!
                    </p>
                </motion.div>

                <motion.div
                    className="mx-auto mt-8 h-px max-w-6xl bg-gradient-to-r from-[var(--brand-blue)] via-transparent to-[var(--brand-purple)]"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                />

                <motion.p
                    className="mt-6 text-center text-xs text-foreground/60"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    © 2025 Onex Services. All rights reserved.
                </motion.p>
            </div>
        </footer>
    )
}
