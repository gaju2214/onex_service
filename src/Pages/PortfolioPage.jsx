import { SEO } from "../Components/SEO"
import { Portfolio } from "../Components/portfolio"

export function PortfolioPage() {
    return (
        <>
            <SEO
                title="Our Work | Onex Service, Jalgaon"
                description="See the campaigns, content, and websites we've built for businesses in Jalgaon and across India."
                keywords="social media marketing portfolio, digital marketing case studies Jalgaon, Onex Service work"
            />
            <div className="pt-24 sm:pt-28 md:pt-36">
                <Portfolio />
            </div>
        </>
    )
}
