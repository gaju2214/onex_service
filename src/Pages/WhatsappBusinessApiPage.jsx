import { SEO } from "../Components/SEO"
import { ServiceHero } from "../Components/ServiceHero"
import { ServiceBenefits } from "../Components/ServiceBenefits"
import { whatsappBusinessApi as data } from "../data/serviceDetails"

export function WhatsappBusinessApiPage() {
    return (
        <>
            <SEO title={data.seoTitle} description={data.seoDescription} keywords={data.seoKeywords} />
            <div className="pt-24 sm:pt-28 md:pt-36">
                <ServiceHero
                    eyebrow={data.eyebrow}
                    title={data.title}
                    description={data.description}
                    externalLink={data.externalLink}
                />
                <ServiceBenefits benefits={data.benefits} />
            </div>
        </>
    )
}
