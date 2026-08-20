import { SEO } from "../Components/SEO"
import { ServiceHero } from "../Components/ServiceHero"
import { ServiceIntro } from "../Components/ServiceIntro"
import { ServiceBenefits } from "../Components/ServiceBenefits"
import { ServiceProcess } from "../Components/ServiceProcess"
import { ServiceCTA } from "../Components/ServiceCTA"
import { whatsappBusinessApi as data } from "../data/serviceDetails"
import { serviceSchema } from "../data/schema"

const schema = serviceSchema({ name: "WhatsApp Business API", description: data.seoDescription, path: "/whatsapp-business-api" })

export function WhatsappBusinessApiPage() {
    return (
        <>
            <SEO title={data.seoTitle} description={data.seoDescription} keywords={data.seoKeywords} schema={schema} />
            <div className="pt-24 sm:pt-28 md:pt-36">
                <ServiceHero
                    eyebrow={data.eyebrow}
                    title={data.title}
                    description={data.description}
                    externalLink={data.externalLink}
                />
                <ServiceIntro text={data.extended} />
                <ServiceBenefits benefits={data.benefits} />
                <ServiceProcess process={data.process} />
                <ServiceCTA />
            </div>
        </>
    )
}
