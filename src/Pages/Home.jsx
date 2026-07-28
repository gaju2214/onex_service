import { SEO } from "../Components/SEO"
import { Hero } from "../Components/hero"
import { ClientLogos } from "../Components/ClientLogos"
import { Services } from "../Components/services"
import { ReelsShowcase } from "../Components/ReelsShowcase"
import { GrowthDashboard } from "../Components/GrowthDashboard"
import { InstagramProfiles } from "../Components/InstagramProfiles"
import { Testimonials } from "../Components/testimonials"

export function Home() {
    return (
        <>
            <SEO
                title="Onex Service | Best Social Media Marketing Agency in Jalgaon"
                description="Grow your business with expert social media marketing, content creation, and web development — trusted by businesses across Jalgaon, Maharashtra and India."
                keywords="social media marketing agency Jalgaon, digital marketing Jalgaon, Instagram marketing, best social media agency Jalgaon, content creation agency, Meta ads Jalgaon"
            />
            <Hero />
            <ClientLogos />
            <Services />
            <ReelsShowcase />
            <GrowthDashboard />
            <InstagramProfiles />
            <Testimonials />
        </>
    )
}
