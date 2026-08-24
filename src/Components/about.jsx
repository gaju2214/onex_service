import { motion } from "framer-motion"
import { InstagramLogo, LinkedinLogo } from "./PlatformLogos"

export function About() {
    return (
        <section id="about" className="scroll-mt-24 py-16 md:py-24" aria-label="About Onex Service">
            <motion.div
                className="mx-auto max-w-6xl px-4 text-center"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="font-heading text-3xl font-bold md:text-4xl">Who We Are</h2>
                <p className="mt-4 text-foreground/80">
                    We're a Jalgaon-based team building the full growth funnel for businesses across
                    Jalgaon and Maharashtra — content and ads that get attention, WhatsApp automation
                    (our own product, OneClickMsg) that turns it into conversations, and websites and apps
                    that give your business the infrastructure to run on. One team, one system, instead of
                    three separate vendors.
                </p>

                <div className="mt-8 grid gap-6 md:grid-cols-3">
                    {[
                        { title: "Our Vision", icon: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941", desc: "To be Jalgaon and Maharashtra's go-to full-funnel growth partner — the team businesses call for content, automation, and infrastructure, not just social media posts." },
                        { title: "Our Values", icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z", desc: "Integrity, ownership, and real results — we build our own products instead of reselling, and we measure success by whether your enquiries actually convert." },
                        { title: "Our Edge", icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z", desc: "We own our own WhatsApp Business API product (OneClickMsg) and build our own websites and apps — proof we're a real technical team, not just a content shop." },
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
                                        <stop offset="0%" stopColor="var(--brand-gold)">
                                            <animate attributeName="stop-color" values="var(--brand-gold);var(--brand-graphite)" dur="2s" begin="1.5s" />
                                        </stop>
                                        <stop offset="50%" stopColor="transparent" />
                                        <stop offset="100%" stopColor="var(--brand-graphite)">
                                            <animate attributeName="stop-color" values="var(--brand-graphite);var(--brand-gold)" dur="2s" begin="1.5s" />
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
                                    color: "var(--brand-graphite)"
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
                            role: "Technical Director",
                            bio: "Full-stack developer building OneClickMsg and the websites/apps we deliver — passionate about seamless user experiences and scalable solutions.",
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
                                        <stop offset="0%" stopColor="var(--brand-gold)">
                                            <animate attributeName="stop-color" values="var(--brand-gold);var(--brand-graphite)" dur="2s" begin="1.5s" />
                                        </stop>
                                        <stop offset="50%" stopColor="transparent" />
                                        <stop offset="100%" stopColor="var(--brand-graphite)">
                                            <animate attributeName="stop-color" values="var(--brand-graphite);var(--brand-gold)" dur="2s" begin="1.5s" />
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
                                    className="transition-transform duration-200 hover:scale-110"
                                    aria-label={`${member.name} Instagram`}
                                >
                                    <InstagramLogo className="h-7 w-7 rounded-md" />
                                </a>
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-transform duration-200 hover:scale-110"
                                    aria-label={`${member.name} LinkedIn`}
                                >
                                    <LinkedinLogo className="h-7 w-7 rounded-md" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div >
        </section >
    )
}
