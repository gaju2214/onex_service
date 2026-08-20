import { SEO } from "../Components/SEO"
import { localBusinessSchema } from "../data/schema"
import { Hero } from "../Components/hero"
import { ClientLogos } from "../Components/ClientLogos"
import { ProcessFlow } from "../Components/ProcessFlow"
import { BuiltInHouse } from "../Components/BuiltInHouse"
import { Services } from "../Components/services"
import { ClientCategories } from "../Components/ClientCategories"
import { FeaturedCaseStudies } from "../Components/FeaturedCaseStudies"
import { ReelsShowcase } from "../Components/ReelsShowcase"
import { GrowthDashboard } from "../Components/GrowthDashboard"
import { InstagramProfiles } from "../Components/InstagramProfiles"
import { Testimonials } from "../Components/testimonials"

export function Home() {
    return (
        <>
            <SEO
                title="Onex Service | Social Media Marketing, WhatsApp API & Web Development in Jalgaon"
                description="Onex Service is Jalgaon's full-funnel growth partner — social media marketing, WhatsApp Business API automation (OneClickMsg), and web/app development for businesses across Jalgaon and Maharashtra."
                keywords="social media marketing agency Jalgaon, digital marketing agency Jalgaon, WhatsApp business API Jalgaon, WhatsApp automation Maharashtra, web development company Jalgaon, app development Jalgaon, full-funnel marketing agency Maharashtra, best digital marketing agency Jalgaon"
                schema={localBusinessSchema}
            />
            <Hero />
            <ClientLogos />
            <ProcessFlow />
            <BuiltInHouse />
            <Services />
            <ClientCategories />
            <FeaturedCaseStudies />
            <ReelsShowcase />
            <GrowthDashboard />
            <InstagramProfiles />
            <Testimonials />
        </>
    )
}
