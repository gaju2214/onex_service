import { SEO } from "../Components/SEO"
import { About } from "../Components/about"

export function AboutPage() {
    return (
        <>
            <SEO
                title="About Us | Onex Service, Jalgaon"
                description="Meet the team behind Onex Service — helping businesses in Jalgaon and across India grow through social media marketing, content creation, and web development."
                keywords="about Onex Service, social media agency Jalgaon team, digital marketing team Jalgaon"
            />
            <div className="pt-24 sm:pt-28 md:pt-36">
                <About />
            </div>
        </>
    )
}
