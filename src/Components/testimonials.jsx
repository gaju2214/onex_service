import { motion } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import { chunk } from "../lib/utils"

// Real client names/logos, sourced from public/clients_logo/clients_details.
// Quote text is still placeholder pending real written reviews from these
// clients — swap `quote` per entry once that's supplied.
const testimonials = [
    {
        name: "Maharaj Wholesale",
        role: "Owner, Maharaj Wholesale",
        logo: "/clients_logo/Maharaj Wholesale.png",
        quote: "Our Instagram went from a few hundred to thousands of followers. Enquiries have doubled since we started working with them.",
    },
    {
        name: "Peehus Rasoi",
        role: "Owner, Peehus Rasoi",
        logo: "/clients_logo/Peehus Rasoi.png",
        quote: "They understood our local audience and made reels that actually felt like us, not a generic agency template.",
    },
    {
        name: "The Kidszone",
        role: "Director, The Kidszone, Jalgaon",
        logo: "/clients_logo/The Kidszone.jpeg",
        quote: "We used to rely only on word of mouth. Now our enquiries come from Instagram every single day.",
    },
    {
        name: "The Baithak Bar & Restro",
        role: "Owner, The Baithak Bar & Restro, Jalgaon",
        logo: "/clients_logo/The Baithak Bar & Restro.png",
        quote: "Professional, honest, and they explain everything in simple terms. No confusing jargon, just results.",
    },
    {
        name: "Hotel Shree Gajanan",
        role: "Proprietor, Hotel Shree Gajanan",
        logo: "/clients_logo/Hotel Shree Gajanan.jpeg",
        quote: "Best decision for our hotel's social media. Clear reporting every month and steady growth.",
    },
    {
        name: "Navid Sofa",
        role: "Owner, Navid Sofa",
        logo: "/clients_logo/Navid Sofa.png",
        quote: "Our showroom gets steady enquiries from Instagram now, something that never happened before.",
    },
    {
        name: "Aanand Saw Mill",
        role: "Owner, Aanand Saw Mill",
        logo: "/clients_logo/Aanand Saw Mill.jpeg",
        quote: "They made our woodwork business look premium online. Great content, great communication.",
    },
    {
        name: "ShopGrow",
        role: "Founder, ShopGrow",
        logo: "/clients_logo/ShopGrow.jpeg",
        quote: "Consistent posting and clear monthly updates. Exactly what we needed to grow online.",
    },
    {
        name: "Kaviesh Creations",
        role: "Owner, Kaviesh Creations, Pune",
        logo: "/clients_logo/Kaviesh Creations, Pune.png",
        quote: "Our page finally looks and feels professional. Enquiries have picked up noticeably.",
    },
    {
        name: "Rita Bhalla Kitchen",
        role: "Owner, Rita Bhalla Kitchen",
        logo: "/clients_logo/Rita Bhalla Kitchen .WEBP",
        quote: "They understand food content — our reels actually get watched and shared now.",
    },
    {
        name: "Louis Creation",
        role: "Owner, Louis Creation",
        logo: "/clients_logo/Louis Creation.JPEG",
        quote: "Reliable team, good creative ideas, and they actually explain the results to us.",
    },
]

const TESTIMONIALS_PER_SLIDE = 3

function TestimonialCard({ t, i }) {
    return (
        <motion.article
            className="flex aspect-square h-full flex-col rounded-2xl border border-border bg-foreground/5 p-5 backdrop-blur"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
        >
            <div className="flex items-center gap-3">
                <img
                    src={t.logo}
                    alt={`${t.name} logo`}
                    className="h-10 w-10 flex-shrink-0 rounded-full border border-border object-cover"
                    loading="lazy"
                />
                <div className="min-w-0">
                    <div className="truncate text-sm font-semibold">{t.name}</div>
                    <div className="truncate text-xs text-foreground/70">{t.role}</div>
                </div>
            </div>
            <p className="mt-4 flex-1 overflow-y-auto text-sm text-foreground/80">
                "{t.quote}"
            </p>
        </motion.article>
    )
}

export function Testimonials() {
    return (
        <section
            id="testimonials"
            className="scroll-mt-24 border-t border-border py-16 md:py-24"
            aria-label="Testimonials"
        >
            <div className="mx-auto max-w-6xl px-4">
                <motion.h2
                    className="font-heading text-3xl font-bold md:text-4xl text-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                >
                    What Clients Say
                </motion.h2>

                <div className="mt-8">
                    <Carousel opts={{ align: "start", autoPlay: true }}>
                        <CarouselContent>
                            {chunk(testimonials, TESTIMONIALS_PER_SLIDE).map((group, groupIndex) => (
                                <CarouselItem key={group[0].name} className="basis-full">
                                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                        {group.map((t, i) => (
                                            <TestimonialCard key={t.name} t={t} i={groupIndex * TESTIMONIALS_PER_SLIDE + i} />
                                        ))}
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-2" />
                        <CarouselNext className="right-2" />
                    </Carousel>
                </div>
            </div>
        </section>
    )
}
