// JSON-LD structured data. Helps search engines understand exactly which
// services this business offers and where, which is what actually
// influences whether the site surfaces for a specific service search
// (e.g. "WhatsApp business API Jalgaon") — plain keywords in text help,
// but structured data is what search engines use most reliably for this.

const SITE_URL = "https://onexservice.in"

export const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Onex Service",
    url: SITE_URL,
    image: `${SITE_URL}/logo3.png`,
    telephone: "+917875359828",
    address: {
        "@type": "PostalAddress",
        streetAddress: "Infront of Mahadev Temple, Bhushan Colony Ramanand Nagar",
        addressLocality: "Jalgaon",
        addressRegion: "Maharashtra",
        postalCode: "425001",
        addressCountry: "IN",
    },
    areaServed: [
        { "@type": "City", name: "Jalgaon" },
        { "@type": "State", name: "Maharashtra" },
    ],
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Social Media Marketing",
                    url: `${SITE_URL}/social-media-marketing`,
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "WhatsApp Business API",
                    url: `${SITE_URL}/whatsapp-business-api`,
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Web Development",
                    url: `${SITE_URL}/web-development`,
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "App Development",
                    url: `${SITE_URL}/app-development`,
                },
            },
        ],
    },
}

// Per-service Service schema, keyed the same way as src/data/serviceDetails.js.
export function serviceSchema({ name, description, path }) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: name,
        name,
        description,
        url: `${SITE_URL}${path}`,
        provider: {
            "@type": "ProfessionalService",
            name: "Onex Service",
            url: SITE_URL,
            address: {
                "@type": "PostalAddress",
                addressLocality: "Jalgaon",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
            },
        },
        areaServed: [
            { "@type": "City", name: "Jalgaon" },
            { "@type": "State", name: "Maharashtra" },
        ],
    }
}
