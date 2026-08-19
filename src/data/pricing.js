// Pricing tiers for the Growth Bundle packages page. All figures here are
// PLACEHOLDER values — replace with real ₹ pricing before this page goes
// live. Kept in one file so pricing can be updated without touching
// component code.

export const pricingTiers = [
    {
        name: "Starter",
        price: "9,999",
        period: "/month",
        tagline: "Get found online — content and presence basics.",
        featured: false,
        features: [
            { label: "Content volume", value: "8 posts / month" },
            { label: "Ads management", value: "Not included" },
            { label: "WhatsApp API messages", value: "500 / month" },
            { label: "Website / App", value: "Not included" },
            { label: "Account management", value: "Email support" },
        ],
    },
    {
        name: "Growth",
        price: "24,999",
        period: "/month",
        tagline: "Content, ads, and WhatsApp automation working together.",
        featured: true,
        features: [
            { label: "Content volume", value: "16 posts + 4 reels / month" },
            { label: "Ads management", value: "Meta ads included" },
            { label: "WhatsApp API messages", value: "2,500 / month" },
            { label: "Website / App", value: "1-page landing site" },
            { label: "Account management", value: "Dedicated WhatsApp support" },
        ],
    },
    {
        name: "Full-Funnel",
        price: "49,999",
        period: "/month",
        tagline: "The complete system — attention, conversion, infrastructure.",
        featured: false,
        features: [
            { label: "Content volume", value: "Unlimited posts + 8 reels / month" },
            { label: "Ads management", value: "Meta ads, fully managed" },
            { label: "WhatsApp API messages", value: "10,000 / month" },
            { label: "Website / App", value: "Full website or app included" },
            { label: "Account management", value: "Dedicated account manager" },
        ],
    },
]
