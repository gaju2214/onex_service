// Pricing tiers for the Growth Bundle packages page. Kept in one file so
// pricing/features can be updated without touching component code.

export const pricingFootnote = "*Fair usage and scope terms apply — ask us for full details."
export const pricingCustomNote = "These packages are a starting point — pricing and inclusions can be customized to fit your specific business requirements. Get a free audit and we'll put together a plan tailored to you."

export const pricingTiers = [
    {
        name: "Starter",
        price: "7,999",
        period: "/month",
        tagline: "Get found online — content and presence basics.",
        featured: false,
        features: [
            { label: "Content volume", value: "4 posts + 4 reels / month" },
            { label: "Ads management", value: "As per requirement + SC" },
            { label: "Influencer promo shoot", value: "1 included" },
            { label: "WhatsApp API", value: "Included, renews with your plan" },
            { label: "Website", value: "Not included" },
            { label: "Account management", value: "Email & phone support" },
        ],
    },
    {
        name: "Growth",
        price: "14,999",
        period: "/month",
        tagline: "Content, ads, and WhatsApp automation working together.",
        featured: true,
        features: [
            { label: "Content volume", value: "8 posts + 8 reels / month" },
            { label: "Ads management", value: "Meta ads included" },
            { label: "Influencer promo shoot", value: "2 included" },
            { label: "WhatsApp API", value: "6-month subscription (renewable)" },
            { label: "Website", value: "Not included" },
            { label: "Account management", value: "Dedicated WhatsApp & phone support" },
        ],
    },
    {
        name: "Full-Funnel",
        price: "24,999",
        period: "/month",
        tagline: "The complete system — attention, conversion, infrastructure.",
        featured: false,
        features: [
            { label: "Content volume", value: "Daily posts* + 15 reels / month" },
            { label: "Ads management", value: "Meta ads, fully managed" },
            { label: "Influencer promo shoot", value: "3 included" },
            { label: "WhatsApp API", value: "1-year subscription" },
            { label: "Website", value: "Full website included*" },
            { label: "Account management", value: "Dedicated account manager + phone support" },
        ],
    },
]

export const webDevPricingTiers = [
    {
        name: "Starter",
        price: "15,000",
        period: "one-time",
        tagline: "A clean static website to get your business online.",
        featured: false,
        customQuote: false,
        features: [
            { label: "Site type", value: "Static website" },
            { label: "Pages", value: "Up to 5 pages" },
            { label: "Design", value: "Mobile-responsive, custom design" },
            { label: "Hosting & domain setup", value: "Included" },
            { label: "CMS / admin panel", value: "Not included" },
            { label: "Support", value: "Email & phone support" },
        ],
    },
    {
        name: "Growth",
        price: "Contact Us",
        period: "",
        tagline: "A growth-ready web app built for scale — bookings, payments, dashboards.",
        featured: true,
        customQuote: true,
        features: [
            { label: "Site type", value: "Full web application" },
            { label: "Custom features", value: "Bookings, payments, dashboards, and more" },
            { label: "CMS / admin panel", value: "Included" },
            { label: "Database & backend", value: "Included" },
            { label: "Integrations", value: "WhatsApp API, payment gateways, and more" },
            { label: "Support", value: "Dedicated account manager + phone support" },
        ],
    },
    {
        name: "Full-Funnel",
        price: "Contact Us",
        period: "",
        tagline: "Website or app bundled with content, ads, and WhatsApp automation.",
        featured: false,
        customQuote: true,
        features: [
            { label: "Site type", value: "Website or app, tailored to your business" },
            { label: "Content & ads", value: "Included, as part of Growth Bundle" },
            { label: "WhatsApp API", value: "Included" },
            { label: "CMS / admin panel", value: "Included" },
            { label: "Integrations", value: "WhatsApp API, payment gateways, and more" },
            { label: "Support", value: "Dedicated account manager + phone support" },
        ],
    },
]
