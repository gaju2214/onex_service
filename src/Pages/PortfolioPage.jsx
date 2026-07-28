import { SEO } from "../Components/SEO"
import { Portfolio } from "../Components/portfolio"

export function PortfolioPage() {
    return (
        <>
            <SEO
                title="Our Work | Onex Digital Services"
                description="See the campaigns, content, and websites we've built for businesses across India."
            />
            <Portfolio />
        </>
    )
}
