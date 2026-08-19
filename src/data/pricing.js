// Pricing tiers for the Growth Bundle packages page. Kept in one file so
// pricing/features can be updated without touching component code.

export const pricingFootnote = "*Fair usage and scope terms apply — ask us for full details."

export const pricingTiers = [
    {
        name: "Starter",
        price: "7,999",
        period: "/month",
        tagline: "Get found online — content and presence basics.",
        featured: false,
        features: [
            { label: "Content volume", value: "8 posts + 8 reels / month" },
            { label: "Ads management", value: "Not included" },
            { label: "Influencer promo shoot", value: "1 included" },
            { label: "WhatsApp API", value: "Not included" },
            { label: "Website", value: "Not included" },
            { label: "Account management", value: "Email support" },
        ],
    },
    {
        name: "Growth",
        price: "14,999",
        period: "/month",
        tagline: "Content, ads, and WhatsApp automation working together.",
        featured: true,
        features: [
            { label: "Content volume", value: "16 posts + 15 reels / month" },
            { label: "Ads management", value: "Meta ads included" },
            { label: "Influencer promo shoot", value: "2 included" },
            { label: "WhatsApp API", value: "6-month subscription" },
            { label: "Website", value: "Not included" },
            { label: "Account management", value: "Dedicated WhatsApp support" },
        ],
    },
    {
        name: "Full-Funnel",
        price: "29,999",
        period: "/month",
        tagline: "The complete system — attention, conversion, infrastructure.",
        featured: false,
        features: [
            { label: "Content volume", value: "Unlimited posts* + 20 reels / month" },
            { label: "Ads management", value: "Meta ads, fully managed" },
            { label: "Influencer promo shoot", value: "3 included" },
            { label: "WhatsApp API", value: "1-year subscription" },
            { label: "Website", value: "Full website included*" },
            { label: "Account management", value: "Dedicated account manager" },
        ],
    },
]
