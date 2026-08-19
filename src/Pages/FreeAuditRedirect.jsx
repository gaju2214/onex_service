import { useEffect } from "react"
import { SEO } from "../Components/SEO"

const WHATSAPP_NUMBER = "917875359828"
const AUDIT_MESSAGE = "Hi! I'd like to request a free growth audit for my business."

// Placeholder for the real multi-field "Free Audit Request" form (Section 6
// of the site restructure). For now this immediately opens a pre-filled
// WhatsApp chat, with a manual fallback link in case the auto-redirect is
// blocked by the browser. The route and any links to it won't need to
// change when Section 6 replaces this page's content with the real form.
export function FreeAuditRedirect() {
    const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(AUDIT_MESSAGE)}`

    useEffect(() => {
        window.location.href = href
    }, [href])

    return (
        <>
            <SEO
                title="Get a Free Audit | Onex Service, Jalgaon"
                description="Request a free growth audit from Onex Service — social media, WhatsApp automation, and web/app development for your business."
            />
            <section className="flex min-h-[60svh] flex-col items-center justify-center px-4 pt-24 text-center sm:pt-28 md:pt-36">
                <h1 className="font-heading text-2xl font-bold md:text-3xl">
                    Redirecting you to WhatsApp...
                </h1>
                <p className="mt-3 max-w-md text-sm text-foreground/70">
                    If nothing happens automatically, tap the button below to start your free audit request.
                </p>
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold text-[#1a1a1a] ring-1 ring-primary/20 transition hover:-translate-y-0.5 bg-gradient-to-r from-[#E8C077] to-[var(--brand-gold)]"
                >
                    Continue to WhatsApp →
                </a>
            </section>
        </>
    )
}
