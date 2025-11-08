import { motion } from "framer-motion"

export function About() {
    return (
        <section id="about" className="scroll-mt-24 border-t border-border py-16 md:py-24" aria-label="About ContentOcean">
            <motion.div
                className="mx-auto max-w-6xl px-4 text-center"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="font-heading text-3xl font-bold md:text-4xl">Who We Are</h2>
                <p className="mt-4 text-foreground/80">
                    We are a future-forward agency crafting bold brands that thrive across social and web. Our work blends
                    strategy, design, and storytelling to help you grow faster.
                </p>

                <div className="mt-8 grid gap-6 md:grid-cols-3">
                    {[
                        { title: "Our Vision", icon: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941", desc: "To be the leading creative agency that empowers brands to thrive in the digital age through innovative storytelling and strategic design." },
                        { title: "Our Values", icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z", desc: "Integrity, creativity, and collaboration guide our work, ensuring every project delivers exceptional quality and measurable results." },
                        { title: "Our Edge", icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z", desc: "Cutting-edge technology and data-driven insights give us the competitive advantage to deliver ahead of trends." },
                    ].map((c, index) => (
                        <motion.div
                            key={c.title}
                            className="rounded-2xl border border-border bg-foreground/5 p-6 backdrop-blur text-center relative overflow-hidden"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
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
                                        <stop offset="0%" stopColor="var(--brand-blue)">
                                            <animate attributeName="stop-color" values="var(--brand-blue);var(--brand-purple)" dur="2s" begin="1.5s" />
                                        </stop>
                                        <stop offset="50%" stopColor="transparent" />
                                        <stop offset="100%" stopColor="var(--brand-purple)">
                                            <animate attributeName="stop-color" values="var(--brand-purple);var(--brand-blue)" dur="2s" begin="1.5s" />
                                        </stop>
                                    </linearGradient>
                                </defs>
                            </motion.svg>
                            {/* Animated background on hover */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0"
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.svg
                                className="h-8 w-8 text-primary mx-auto relative z-10"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                                whileHover={{
                                    scale: 1.2,
                                    rotate: 360,
                                    color: "var(--brand-purple)"
                                }}
                                transition={{ duration: 0.5 }}
                            >
                                <path d={c.icon} />
                            </motion.svg>
                            <motion.div
                                className="mt-4 font-semibold text-lg relative z-10"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                {c.title}
                            </motion.div>
                            <motion.p
                                className="mt-2 text-sm text-foreground/70 leading-relaxed relative z-10"
                                initial={{ opacity: 0.8 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.2 }}
                            >
                                {c.desc}
                            </motion.p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* OUR TEAM Section */}
            <motion.div
                className="mt-16 text-center"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="font-heading text-3xl font-bold md:text-4xl">OUR TEAM</h2>
                <p className="mt-4 text-foreground/80 max-w-2xl mx-auto">
                    Meet the creative minds behind our innovative solutions. Our diverse team brings together expertise in design, strategy, and technology to deliver exceptional results.
                </p>

                <div className="mt-12 grid gap-8 px-10 md:grid-cols-2">
                    {[
                        {
                            name: "Jayesh Dhamale",
                            role: "Creative Director",
                            bio: "Leading design innovation with 10+ years of experience in branding and visual storytelling.",
                            image: "/jayesh profile.jpg",
                            instagram: " https://www.instagram.com/ig.jayuu?igsh=MWN2ajhqc2Ruam1qcg== ",
                            linkedin: " https://in.linkedin.com/in/jayesh-gajanan-dhamale-991264327?utm_source=share&utm_medium=member_mweb&utm_campaign=share_via&utm_content=profile  "
                        },
                        {
                            name: "Gajanan Chaudhari",
                            role: "Creative Director",
                            bio: "Full-stack developer passionate about creating seamless user experiences and scalable solutions.",
                            image: "/gajanan profile.jpg",
                            instagram: "https://www.instagram.com/gaju_2214?igsh=MTZva2oxNWJtNnZ2OQ==",
                            linkedin: "https://www.linkedin.com/in/gajanan-chaudhari-b37a41259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app "
                        },

                    ].map((member, index) => (
                        <motion.div
                            key={member.name}
                            className="rounded-2xl border border-border bg-foreground/5 p-6 text-center backdrop-blur relative"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <motion.svg
                                className="absolute inset-0 w-full h-full -z-100"
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
                                        <stop offset="0%" stopColor="var(--brand-blue)">
                                            <animate attributeName="stop-color" values="var(--brand-blue);var(--brand-purple)" dur="2s" begin="1.5s" />
                                        </stop>
                                        <stop offset="50%" stopColor="transparent" />
                                        <stop offset="100%" stopColor="var(--brand-purple)">
                                            <animate attributeName="stop-color" values="var(--brand-purple);var(--brand-blue)" dur="2s" begin="1.5s" />
                                        </stop>
                                    </linearGradient>
                                </defs>
                            </motion.svg>
                            <img
                                src={member.image}
                                alt={member.name}
                                className="mx-auto h-20 w-20 rounded-full object-cover border-2 border-primary/20"
                            />
                            <a href=""><h3 className="mt-4 font-semibold text-lg">{member.name}</h3></a>
                            <p className="text-primary font-medium text-sm">{member.role}</p>
                            <p className="mt-2 text-sm text-foreground/70">{member.bio}</p>
                            <div className="mt-4 flex justify-center space-x-4">
                                <a
                                    href={member.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-foreground/70 hover:text-primary transition-all duration-200 cursor-pointer"
                                    aria-label={`${member.name} Instagram`}
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="h-5 w-5 hover:scale-110 transition-transform duration-200"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={1.5}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        aria-hidden="true"
                                    >
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-foreground/70 hover:text-primary transition-all duration-200"
                                    aria-label={`${member.name} LinkedIn`}
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="h-5 w-5 hover:scale-110 transition-transform duration-200"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={1.5}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        aria-hidden="true"
                                    >
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div >
        </section >
    )
}
