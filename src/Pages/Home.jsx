import { SEO } from "../Components/SEO"
import { Hero } from "../Components/hero"
import { ClientLogos } from "../Components/ClientLogos"
import { Services } from "../Components/services"
import { ReelsShowcase } from "../Components/ReelsShowcase"
import { GrowthDashboard } from "../Components/GrowthDashboard"
import { Testimonials } from "../Components/testimonials"

export function Home() {
    return (
        <>
            <SEO
                title="Onex Digital Services | Social Media Marketing for Indian Businesses"
                description="Grow your business with expert social media marketing, content creation, and web development — trusted by businesses across Maharashtra and India."
            />
            <Hero />
            <ClientLogos />
            <Services />
            <ReelsShowcase />
            <GrowthDashboard />
            <Testimonials />
        </>
    )
}
