import { SEO } from "../Components/SEO"
import { ServiceHero } from "../Components/ServiceHero"
import { ServiceCTA } from "../Components/ServiceCTA"
import { About } from "../Components/about"

export function AboutPage() {
    return (
        <>
            <SEO
                title="About Us | Onex Service, Jalgaon"
                description="Meet the team behind Onex Service — Jalgaon and Maharashtra's full-funnel growth partner for social media marketing, WhatsApp automation, and web/app development."
                keywords="about Onex Service, social media agency Jalgaon team, digital marketing team Jalgaon, full-funnel agency Maharashtra"
            />
            <div className="pt-24 sm:pt-28 md:pt-36">
                <ServiceHero
                    eyebrow="About Onex Service"
                    title="Jalgaon's full-funnel growth team"
                    description="We're not just another social media agency — we're the team behind content, WhatsApp automation, and the websites and apps that run your business, all in Jalgaon and across Maharashtra."
                />
                <About />
                <ServiceCTA />
            </div>
        </>
    )
}
