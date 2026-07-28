import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Mail, Phone } from "lucide-react"

const CONTACT_WHATSAPP_NUMBER = "917875359828"

export function Contact() {
    const [form, setForm] = useState({ name: "", phone: "", message: "" })
    const [errors, setErrors] = useState({})

    const handleChange = (field) => (e) => {
        setForm((prev) => ({ ...prev, [field]: e.target.value }))
    }

    const validate = () => {
        const nextErrors = {}
        if (!form.name.trim()) nextErrors.name = "Please enter your name"
        if (!form.phone.trim()) nextErrors.phone = "Please enter your phone number"
        else if (!/^[0-9+\-\s]{7,15}$/.test(form.phone.trim())) nextErrors.phone = "Enter a valid phone number"
        if (!form.message.trim()) nextErrors.message = "Please enter a message"
        setErrors(nextErrors)
        return Object.keys(nextErrors).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!validate()) return

        const text = `Hi, I'm ${form.name} (${form.phone}). ${form.message}`
        const url = `https://wa.me/${CONTACT_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
        window.open(url, "_blank", "noopener,noreferrer")
    }

    return (
        <section id="contact" className="scroll-mt-24 border-t border-border py-12 sm:py-16 md:py-24" aria-label="Contact">
            <div className="mx-auto max-w-6xl px-4">
                <motion.h2
                    className="font-heading text-2xl font-bold text-center sm:text-3xl md:text-4xl"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                >
                    {"Let's build something amazing together."}
                </motion.h2>

                <div className="mt-6 flex justify-center sm:mt-8">
                    <a
                        href="https://wa.me/7875359828"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold text-[#1a1a1a] ring-1 ring-primary/20 transition hover:animate-pulse bg-gradient-to-r from-[#E8C077] to-[var(--brand-gold)] sm:px-8 sm:py-4 sm:text-lg"
                    >
                        Contact Us on WhatsApp
                    </a>
                </div>

                <div className="mt-10 grid gap-6 sm:mt-12 lg:grid-cols-2 lg:gap-8">
                    <form
                        onSubmit={handleSubmit}
                        noValidate
                        className="rounded-2xl border border-border bg-foreground/5 p-5 backdrop-blur"
                    >
                        <h3 className="font-heading text-lg font-bold sm:text-xl">Send us a message</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{"We'll reply on WhatsApp."}</p>

                        <div className="mt-4 space-y-4">
                            <div>
                                <label htmlFor="contact-name" className="text-sm font-medium">Name</label>
                                <input
                                    id="contact-name"
                                    type="text"
                                    value={form.name}
                                    onChange={handleChange("name")}
                                    className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                    aria-invalid={Boolean(errors.name)}
                                />
                                {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                            </div>

                            <div>
                                <label htmlFor="contact-phone" className="text-sm font-medium">Phone</label>
                                <input
                                    id="contact-phone"
                                    type="tel"
                                    value={form.phone}
                                    onChange={handleChange("phone")}
                                    className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                    aria-invalid={Boolean(errors.phone)}
                                />
                                {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
                            </div>

                            <div>
                                <label htmlFor="contact-message" className="text-sm font-medium">Message</label>
                                <textarea
                                    id="contact-message"
                                    rows={4}
                                    value={form.message}
                                    onChange={handleChange("message")}
                                    className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                    aria-invalid={Boolean(errors.message)}
                                />
                                {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                            </div>

                            <button
                                type="submit"
                                className="w-full rounded-xl px-5 py-3 text-sm font-semibold text-[#1a1a1a] ring-1 ring-primary/20 transition hover:-translate-y-0.5 bg-gradient-to-r from-[#E8C077] to-[var(--brand-gold)]"
                            >
                                Send via WhatsApp
                            </button>
                        </div>
                    </form>

                    <div className="rounded-2xl border border-border bg-foreground/5 p-5 backdrop-blur">
                        <h3 className="font-heading text-lg font-bold sm:text-xl">Grow Your Business with Expert Guidance!</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{"Connect with our experts and let's create a powerful online strategy together."}</p>

                        <div className="mt-6 space-y-4">
                            <div className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                                <div>
                                    <p className="text-sm font-semibold">Location</p>
                                    <a
                                        href="https://www.google.com/maps/search/?api=1&query=Ring+Road,+above+Hotel+Gulmohar,+near+JDCC+Bank,+Ganesh+Colony,+Jalgaon,+Maharashtra+425001"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                                    >
                                        Infront of Mahadev Temple, Bhushan Colony Ramanand Nagar, Jalgaon, Maharashtra, India 425001.
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Mail className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                                <div>
                                    <p className="text-sm font-semibold">E-Mail us</p>
                                    <a
                                        href="mailto:onexdigiserv@gmail.com"
                                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                                    >
                                        onexdigiserv@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Phone className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                                <div>
                                    <p className="text-sm font-semibold">Phone</p>
                                    <p className="text-sm text-muted-foreground">
                                        +91 7875359828 | +91 7822860876
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
