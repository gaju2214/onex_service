import { SEO } from "../Components/SEO"
import { Services } from "../Components/services"
import { WebsiteDevelopment } from "../Components/website-development"

export function ServicesPage() {
    return (
        <>
            <SEO
                title="Our Services | Onex Service, Jalgaon"
                description="Social media marketing, content creation, Meta ads, and web development services for growing businesses in Jalgaon and across India."
                keywords="social media marketing services Jalgaon, Meta ads services, content creation services, website development Jalgaon, digital marketing services"
            />
            <div className="pt-24 sm:pt-28 md:pt-36">
                <Services />
            </div>
            <WebsiteDevelopment />
        </>
    )
}
