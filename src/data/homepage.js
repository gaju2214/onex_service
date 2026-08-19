// Homepage content data — the 3-step process flow and target client
// categories. Kept separate from JSX so copy can be tweaked without
// touching component code.

export const processSteps = [
    {
        step: "01",
        title: "Content & Ads",
        description: "Reels, promo shoots, and Instagram/Meta ads management that get your business noticed.",
    },
    {
        step: "02",
        title: "WhatsApp Automation",
        description: "OneClickMsg, our in-house WhatsApp Business API product, turns that attention into conversations and bookings.",
    },
    {
        step: "03",
        title: "Website / App",
        description: "A fast, reliable website or app to run bookings, orders, and your business — built by our own dev team.",
    },
]

export const clientCategories = [
    { label: "Coaching Institutes", icon: "GraduationCap", to: "/for-coaching-institutes" },
    { label: "Clinics & Hospitals", icon: "Stethoscope", to: "/for-clinics-hospitals" },
    { label: "Real Estate", icon: "Building2", to: "/for-real-estate" },
    { label: "Restaurants", icon: "UtensilsCrossed", to: "/for-restaurants" },
    { label: "Retail & D2C", icon: "ShoppingBag", to: "/for-retail-d2c" },
    { label: "Wedding & Events", icon: "PartyPopper", to: null },
]
