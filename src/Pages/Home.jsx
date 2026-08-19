import { SEO } from "../Components/SEO"
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
                title="Onex Service | Full-Funnel Growth Partner in Jalgaon"
                description="Social media marketing, WhatsApp automation (OneClickMsg), and web/app development — the full growth funnel for businesses in Jalgaon and across India, under one roof."
                keywords="full-funnel marketing agency Jalgaon, social media marketing agency Jalgaon, WhatsApp business API Jalgaon, WhatsApp automation, web development Jalgaon, digital marketing Jalgaon"
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
