import { useState } from "react"
import { motion } from "framer-motion"
import { SEO } from "../Components/SEO"

const WHATSAPP_NUMBER = "917875359828"

const CATEGORY_OPTIONS = [
    "Coaching Institute",
    "Clinic / Hospital",
    "Real Estate",
    "Restaurant",
    "Retail / D2C",
    "Wedding / Event Vendor",
    "Other",
]

const INTEREST_OPTIONS = [
    { key: "socialMedia", label: "Social Media Marketing" },
    { key: "whatsappApi", label: "WhatsApp Business API" },
    { key: "website", label: "Website" },
    { key: "app", label: "App" },
]

const initialForm = {
    name: "",
    businessName: "",
    category: "",
    phone: "",
    instagram: "",
    interests: [],
}

export function FreeAuditPage() {
    const [form, setForm] = useState(initialForm)
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (field) => (e) => {
        setForm((prev) => ({ ...prev, [field]: e.target.value }))
    }

    const toggleInterest = (key) => {
        setForm((prev) => ({
            ...prev,
            interests: prev.interests.includes(key)
                ? prev.interests.filter((i) => i !== key)
                : [...prev.interests, key],
        }))
    }

    const validate = () => {
        const nextErrors = {}
        if (!form.name.trim()) nextErrors.name = "Please enter your name"
        if (!form.businessName.trim()) nextErrors.businessName = "Please enter your business name"
        if (!form.category) nextErrors.category = "Please select a category"
        if (!form.phone.trim()) nextErrors.phone = "Please enter your phone/WhatsApp number"
        else if (!/^[0-9+\-\s]{7,15}$/.test(form.phone.trim())) nextErrors.phone = "Enter a valid phone number"
        setErrors(nextErrors)
        return Object.keys(nextErrors).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!validate()) return

        const interestLabels = INTEREST_OPTIONS.filter((o) => form.interests.includes(o.key)).map((o) => o.label)
        const lines = [
            "Hi! I'd like to request a free growth audit.",
            `Name: ${form.name}`,
            `Business: ${form.businessName}`,
            `Category: ${form.category}`,
            `Phone: ${form.phone}`,
        ]
        if (form.instagram.trim()) lines.push(`Instagram: ${form.instagram.trim()}`)
        if (interestLabels.length) lines.push(`Interested in: ${interestLabels.join(", ")}`)

        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`
        window.open(url, "_blank", "noopener,noreferrer")
        setSubmitted(true)
    }

    return (
        <>
            <SEO
                title="Get a Free Audit | Onex Service, Jalgaon"
                description="Request a free growth audit from Onex Service — social media, WhatsApp automation, and web/app development for businesses in Jalgaon and Maharashtra."
                keywords="free marketing audit Jalgaon, free digital marketing audit Maharashtra, growth audit request"
            />
            <section className="pt-24 pb-16 sm:pt-28 md:pt-36 md:pb-24" aria-label="Free Audit Request">
                <div className="mx-auto max-w-2xl px-4">
                    <motion.h1
                        className="font-heading text-3xl font-bold text-center md:text-4xl"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5 }}
                    >
                        Get a Free <span className="text-[var(--brand-gold)]">Growth Audit</span>
                    </motion.h1>
                    <p className="mx-auto mt-3 max-w-lg text-center text-sm text-foreground/80 md:text-base">
                        Tell us a bit about your business and we'll show you where to start — content,
                        WhatsApp automation, or a website/app, tailored to how you actually grow.
                    </p>

                    {submitted ? (
                        <motion.div
                            className="mt-10 rounded-2xl border border-border bg-foreground/5 p-8 text-center backdrop-blur"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <h2 className="font-heading text-xl font-bold">Thanks, {form.name.split(" ")[0]}!</h2>
                            <p className="mt-2 text-sm text-foreground/80">
                                We've opened WhatsApp with your details filled in — just hit send and we'll get
                                back to you shortly with your free audit.
                            </p>
                            <button
                                type="button"
                                onClick={() => {
                                    setForm(initialForm)
                                    setSubmitted(false)
                                }}
                                className="mt-6 inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-foreground ring-1 ring-border transition hover:bg-foreground/5"
                            >
                                Submit another request
                            </button>
                        </motion.div>
                    ) : (
                        <motion.form
                            onSubmit={handleSubmit}
                            noValidate
                            className="mt-10 rounded-2xl border border-border bg-foreground/5 p-6 backdrop-blur md:p-8"
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="audit-name" className="text-sm font-medium">Name</label>
                                    <input
                                        id="audit-name"
                                        type="text"
                                        value={form.name}
                                        onChange={handleChange("name")}
                                        className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                        aria-invalid={Boolean(errors.name)}
                                    />
                                    {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                                </div>

                                <div>
                                    <label htmlFor="audit-business" className="text-sm font-medium">Business Name</label>
                                    <input
                                        id="audit-business"
                                        type="text"
                                        value={form.businessName}
                                        onChange={handleChange("businessName")}
                                        className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                        aria-invalid={Boolean(errors.businessName)}
                                    />
                                    {errors.businessName && <p className="mt-1 text-xs text-destructive">{errors.businessName}</p>}
                                </div>

                                <div>
                                    <label htmlFor="audit-category" className="text-sm font-medium">Category</label>
                                    <select
                                        id="audit-category"
                                        value={form.category}
                                        onChange={handleChange("category")}
                                        className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                        aria-invalid={Boolean(errors.category)}
                                    >
                                        <option value="">Select your business category</option>
                                        {CATEGORY_OPTIONS.map((option) => (
                                            <option key={option} value={option}>{option}</option>
                                        ))}
                                    </select>
                                    {errors.category && <p className="mt-1 text-xs text-destructive">{errors.category}</p>}
                                </div>

                                <div>
                                    <label htmlFor="audit-phone" className="text-sm font-medium">Phone / WhatsApp Number</label>
                                    <input
                                        id="audit-phone"
                                        type="tel"
                                        value={form.phone}
                                        onChange={handleChange("phone")}
                                        className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                        aria-invalid={Boolean(errors.phone)}
                                    />
                                    {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
                                </div>

                                <div>
                                    <label htmlFor="audit-instagram" className="text-sm font-medium">Instagram Handle (optional)</label>
                                    <input
                                        id="audit-instagram"
                                        type="text"
                                        placeholder="@yourbusiness"
                                        value={form.instagram}
                                        onChange={handleChange("instagram")}
                                        className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>

                                <div>
                                    <span className="text-sm font-medium">What are you most interested in?</span>
                                    <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                                        {INTEREST_OPTIONS.map((option) => (
                                            <label
                                                key={option.key}
                                                className="flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm"
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={form.interests.includes(option.key)}
                                                    onChange={() => toggleInterest(option.key)}
                                                    className="h-4 w-4 accent-[var(--brand-gold)]"
                                                />
                                                {option.label}
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full rounded-xl px-5 py-3 text-sm font-semibold text-[#1a1a1a] ring-1 ring-primary/20 transition hover:-translate-y-0.5 bg-gradient-to-r from-[#E8C077] to-[var(--brand-gold)]"
                                >
                                    Send via WhatsApp →
                                </button>
                            </div>
                        </motion.form>
                    )}
                </div>
            </section>
        </>
    )
}
