import { SEO } from "../Components/SEO"
import { Services } from "../Components/services"
import { WebsiteDevelopment } from "../Components/website-development"

export function ServicesPage() {
    return (
        <>
            <SEO
                title="Our Services | Onex Digital Services"
                description="Social media marketing, content creation, Meta ads, and web development services for growing Indian businesses."
            />
            <Services />
            <WebsiteDevelopment />
        </>
    )
}
