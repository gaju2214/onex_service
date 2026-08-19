import { GraduationCap, UtensilsCrossed, Building2, ShoppingBag } from "lucide-react"

// Case studies for /case-studies and /case-studies/:slug. These are
// ILLUSTRATIVE, ANONYMIZED placeholder examples (client type, not real
// business names) showing the kind of results the full-funnel approach is
// built to deliver — not verified real-client outcomes yet. Swap in real
// client details and confirmed numbers here once available; the page
// structure (client type -> problem -> what we did -> result) won't need
// to change.

export const caseStudiesNote = "The examples below are illustrative — they show how our full-funnel approach is designed to work. Real client case studies with confirmed results are coming soon."

export const caseStudies = [
    {
        slug: "coaching-institute-admissions",
        icon: GraduationCap,
        category: "Coaching Institute",
        categoryLink: "/for-coaching-institutes",
        clientType: "A Jalgaon Coaching Institute",
        headline: "Turning admission enquiries into enrolled students",
        seoTitle: "Case Study: Coaching Institute Admission Growth | Onex Service, Jalgaon",
        seoDescription: "How a Jalgaon coaching institute used content, ads, and WhatsApp automation to respond to enquiries faster and improve admissions.",
        problem: "Admission enquiries were coming in through Instagram DMs and phone calls, but the front desk often took hours — sometimes a full day during peak admission season — to respond. Enquiries went cold before anyone followed up, and batch/fee reminders were handled manually by calling every parent.",
        whatWeDid: [
            "Set up WhatsApp automation through OneClickMsg so every enquiry gets an instant response, any time of day.",
            "Ran admission-season reels and Meta ads timed around when enquiries actually spike.",
            "Automated batch schedule and fee due-date reminders on WhatsApp.",
        ],
        result: "Illustrative outcome: enquiry response time drops from hours to instant, and the front desk spends far less time on manual follow-up calls.",
    },
    {
        slug: "restaurant-whatsapp-ordering",
        icon: UtensilsCrossed,
        category: "Restaurant",
        categoryLink: "/for-restaurants",
        clientType: "A Restaurant in Jalgaon",
        headline: "Filling more tables with reels and WhatsApp ordering",
        seoTitle: "Case Study: Restaurant Growth with Reels & WhatsApp | Onex Service, Jalgaon",
        seoDescription: "How a Jalgaon restaurant used food reels and WhatsApp ordering to increase orders and offer engagement.",
        problem: "The restaurant's menu and offers lived in scattered Instagram posts and a printed menu card. Customers had no easy way to browse the menu online or place orders without calling in, and offer promotions rarely reached repeat customers.",
        whatWeDid: [
            "Produced food reels built to be scroll-stopping and share-worthy, not static photos.",
            "Set up WhatsApp ordering and offer alerts so customers could order directly from a reel or post.",
            "Built a simple online menu site customers could browse and share.",
        ],
        result: "Illustrative outcome: more orders placed directly through WhatsApp, and offer content reaching repeat customers instead of getting lost in the feed.",
    },
    {
        slug: "real-estate-lead-follow-up",
        icon: Building2,
        category: "Real Estate",
        categoryLink: "/for-real-estate",
        clientType: "A Real Estate Developer in Jalgaon",
        headline: "Turning project interest into booked site visits",
        seoTitle: "Case Study: Real Estate Lead Follow-Up | Onex Service, Jalgaon",
        seoDescription: "How a Jalgaon real estate developer used WhatsApp automation and project landing pages to keep leads from going cold.",
        problem: "Interested buyers would message about a project on Instagram, but follow-up often took days — by which point many had already visited a competitor's project. There was no dedicated page per project, so all listings were buried on one general website.",
        whatWeDid: [
            "Created project promo reels showing layouts, amenities, and construction progress.",
            "Set up automated WhatsApp follow-up so no enquiry sat unanswered for more than a few minutes.",
            "Built a dedicated landing page per project with pricing, floor plans, and a direct enquiry path.",
        ],
        result: "Illustrative outcome: faster lead follow-up and a clearer path from enquiry to booked site visit.",
    },
    {
        slug: "retail-d2c-repeat-customers",
        icon: ShoppingBag,
        category: "Retail & D2C",
        categoryLink: "/for-retail-d2c",
        clientType: "A D2C Brand in Maharashtra",
        headline: "Turning followers into repeat customers",
        seoTitle: "Case Study: D2C Brand Repeat Customer Growth | Onex Service, Maharashtra",
        seoDescription: "How a D2C brand in Maharashtra used product reels and WhatsApp catalog updates to increase repeat purchases.",
        problem: "The brand had a growing Instagram following, but most customers bought once and never came back — there was no system for staying in touch after the sale, and the product catalog wasn't easy to browse outside of scrolling old posts.",
        whatWeDid: [
            "Produced product reels showing items in use, not just static catalog shots.",
            "Set up WhatsApp catalog browsing plus order and shipping updates to stay engaged after the sale.",
            "Built an e-commerce site matched to where the brand actually was — product showcase with a clear path to purchase.",
        ],
        result: "Illustrative outcome: more customers re-engaging after their first purchase instead of going quiet after checkout.",
    },
]
