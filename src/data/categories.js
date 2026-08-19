import { GraduationCap, Stethoscope, Building2, UtensilsCrossed, ShoppingBag, Clock, Bell, Megaphone, ShieldCheck, MessageCircle, ImagePlay, Utensils, Globe, PackageSearch, Repeat } from "lucide-react"

// Category landing pages, driven by data so a shared template
// (src/Components/CategoryPage.jsx) renders all of them. Pain points come
// directly from the categories and specifics given in the business brief —
// no invented stats or claims.

export const categories = {
    coachingInstitutes: {
        slug: "for-coaching-institutes",
        icon: GraduationCap,
        seoTitle: "Social Media & WhatsApp Marketing for Coaching Institutes | Jalgaon, Maharashtra",
        seoDescription: "Faster admission enquiry response, batch and fee WhatsApp alerts, and admission-season content for coaching institutes in Jalgaon and Maharashtra.",
        seoKeywords: "coaching institute marketing Jalgaon, coaching classes digital marketing Maharashtra, admission enquiry WhatsApp automation, coaching institute WhatsApp alerts",
        eyebrow: "For Coaching Institutes",
        title: "Turn admission enquiries into enrolled students",
        description: "Faster enquiry response, WhatsApp alerts for batches and fees, and content built for admission season — for coaching institutes across Jalgaon and Maharashtra.",
        painPoints: [
            {
                icon: Clock,
                title: "Slow Enquiry Response",
                description: "Every hour an admission enquiry sits unanswered, that student is looking at your competitor. WhatsApp automation gets a response out instantly, any time of day.",
            },
            {
                icon: Bell,
                title: "Batch & Fee Alerts",
                description: "Automated WhatsApp alerts for batch schedules, fee due dates, and reminders — so your front desk isn't manually calling every parent.",
            },
            {
                icon: Megaphone,
                title: "Admission-Season Content",
                description: "Content and ads timed around your admission season, when enquiries actually spike, instead of generic posting all year round.",
            },
        ],
    },
    clinicsHospitals: {
        slug: "for-clinics-hospitals",
        icon: Stethoscope,
        seoTitle: "Social Media & WhatsApp Marketing for Clinics & Hospitals | Jalgaon, Maharashtra",
        seoDescription: "Appointment reminders, trust-building content, booking websites, and patient communication for clinics and hospitals in Jalgaon and Maharashtra.",
        seoKeywords: "clinic marketing Jalgaon, hospital digital marketing Maharashtra, patient WhatsApp reminders, clinic booking website Jalgaon",
        eyebrow: "For Clinics & Hospitals",
        title: "Fewer missed appointments, more patient trust",
        description: "Appointment reminders, trust-building content, and booking websites — for clinics and hospitals across Jalgaon and Maharashtra.",
        painPoints: [
            {
                icon: Bell,
                title: "Appointment Reminders",
                description: "Automated WhatsApp reminders cut down on missed appointments without your staff making manual follow-up calls.",
            },
            {
                icon: ShieldCheck,
                title: "Trust-Building Content",
                description: "Content that builds patient confidence — your expertise, your facility, and real patient experiences, handled with the sensitivity healthcare content needs.",
            },
            {
                icon: MessageCircle,
                title: "Booking Websites & Patient Communication",
                description: "A booking website that lets patients schedule appointments directly, backed by WhatsApp for follow-ups and confirmations.",
            },
        ],
    },
    realEstate: {
        slug: "for-real-estate",
        icon: Building2,
        seoTitle: "Social Media & WhatsApp Marketing for Real Estate | Jalgaon, Maharashtra",
        seoDescription: "Project promo content, WhatsApp lead follow-up, and project landing pages for real estate developers and agents in Jalgaon and Maharashtra.",
        seoKeywords: "real estate marketing Jalgaon, real estate digital marketing Maharashtra, property WhatsApp lead follow-up, real estate landing page Jalgaon",
        eyebrow: "For Real Estate",
        title: "Turn project interest into site visits",
        description: "Project promo content, WhatsApp lead follow-up, and dedicated project landing pages — for real estate developers and agents across Jalgaon and Maharashtra.",
        painPoints: [
            {
                icon: ImagePlay,
                title: "Project Promo Content",
                description: "Reels and promo content that show off your project — layouts, amenities, construction progress — to the buyers actually looking in your area.",
            },
            {
                icon: MessageCircle,
                title: "WhatsApp Lead Follow-Up",
                description: "Real estate leads go cold fast. Automated WhatsApp follow-up keeps the conversation going until it turns into a site visit.",
            },
            {
                icon: Globe,
                title: "Project Landing Pages",
                description: "A dedicated landing page per project — pricing, floor plans, location, and a direct enquiry path — instead of burying every project on one generic site.",
            },
        ],
    },
    restaurants: {
        slug: "for-restaurants",
        icon: UtensilsCrossed,
        seoTitle: "Social Media & WhatsApp Marketing for Restaurants | Jalgaon, Maharashtra",
        seoDescription: "Reels for your menu and offers, WhatsApp ordering, and an online menu site for restaurants and food businesses in Jalgaon and Maharashtra.",
        seoKeywords: "restaurant marketing Jalgaon, restaurant digital marketing Maharashtra, WhatsApp ordering restaurant, restaurant online menu website Jalgaon",
        eyebrow: "For Restaurants",
        title: "Fill more tables, take more orders",
        description: "Reels for your menu and offers, WhatsApp ordering, and an online menu site — for restaurants across Jalgaon and Maharashtra.",
        painPoints: [
            {
                icon: Utensils,
                title: "Reels for Menu & Offers",
                description: "Food reels that make people hungry and share-worthy — your dishes, your offers, your specials, shot to actually get watched.",
            },
            {
                icon: MessageCircle,
                title: "WhatsApp Ordering & Offers",
                description: "Customers order and get offer alerts directly on WhatsApp — no separate app to download, no friction between seeing a post and ordering.",
            },
            {
                icon: Globe,
                title: "Online Menu Site",
                description: "A simple online menu site customers can browse and share, so your menu isn't stuck in a single Instagram highlight or a blurry photo.",
            },
        ],
    },
    retailD2c: {
        slug: "for-retail-d2c",
        icon: ShoppingBag,
        seoTitle: "Social Media & WhatsApp Marketing for Retail & D2C Brands | Jalgaon, Maharashtra",
        seoDescription: "Product reels, WhatsApp catalog and order updates, and e-commerce websites for retail and D2C brands in Jalgaon and Maharashtra.",
        seoKeywords: "retail marketing Jalgaon, D2C brand marketing Maharashtra, WhatsApp catalog orders, e-commerce website Jalgaon",
        eyebrow: "For Retail & D2C",
        title: "Turn followers into repeat customers",
        description: "Product reels, WhatsApp catalog and order updates, and e-commerce site builds — for retail and D2C brands across Jalgaon and Maharashtra.",
        painPoints: [
            {
                icon: PackageSearch,
                title: "Product Reels",
                description: "Reels that show your products in use, not just static catalog shots — the kind of content that actually drives DMs and orders.",
            },
            {
                icon: Repeat,
                title: "WhatsApp Catalog & Order Updates",
                description: "Customers browse your catalog and get order/shipping updates directly on WhatsApp, keeping them engaged after the sale, not just before it.",
            },
            {
                icon: Globe,
                title: "E-Commerce Site Needs",
                description: "From a simple product showcase to a full checkout flow, we build the e-commerce site that matches where your business actually is.",
            },
        ],
    },
}
