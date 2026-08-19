import { SEO } from "../Components/SEO"
import { ServiceHero } from "../Components/ServiceHero"
import { ServiceCTA } from "../Components/ServiceCTA"
import { Portfolio } from "../Components/portfolio"

export function PortfolioPage() {
    return (
        <>
            <SEO
                title="Our Work | Onex Service, Jalgaon"
                description="Reels, campaigns, and websites we've built as part of the full growth funnel for businesses in Jalgaon and Maharashtra."
                keywords="social media marketing portfolio Jalgaon, digital marketing work Maharashtra, Onex Service work, website development portfolio Jalgaon"
            />
            <div className="pt-24 sm:pt-28 md:pt-36">
                <ServiceHero
                    eyebrow="Our Work"
                    title="Real content, real websites, real results"
                    description="A look at the reels, campaigns, and websites we've built as part of the full funnel — for businesses across Jalgaon and Maharashtra."
                />
                <Portfolio />
                <ServiceCTA />
            </div>
        </>
    )
}
