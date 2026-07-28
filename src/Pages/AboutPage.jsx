import { SEO } from "../Components/SEO"
import { About } from "../Components/about"

export function AboutPage() {
    return (
        <>
            <SEO
                title="About Us | Onex Digital Services"
                description="Meet the team behind Onex Digital Services — helping Indian businesses grow through social media marketing, content creation, and web development."
            />
            <About />
        </>
    )
}
