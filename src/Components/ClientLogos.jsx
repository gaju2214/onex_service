import { motion } from "framer-motion"

// Real client data, sourced from public/clients_logo/clients_details.
// Logo files live under /public/clients_logo/ and are served at /clients_logo/<filename>.
const clients = [
    { name: "Maharaj Wholesale", instagram: "@maharaj.wholesale_official", logo: "/clients_logo/Maharaj Wholesale.png" },
    { name: "Peehus Rasoi", instagram: "@peehus.rasoi_333", logo: "/clients_logo/Peehus Rasoi.png" },
    { name: "The Kidszone", instagram: "@thekidszone_jalgaon", logo: "/clients_logo/The Kidszone.jpeg" },
    { name: "The Baithak Bar & Restro", instagram: "@thebaithak.jalgaon", logo: "/clients_logo/The Baithak Bar & Restro.png" },
    { name: "Hotel Shree Gajanan", instagram: "@hotel.shreegajanan", logo: "/clients_logo/Hotel Shree Gajanan.jpeg" },
    { name: "Navid Sofa", instagram: "@navidsofa", logo: "/clients_logo/Navid Sofa.png" },
    { name: "Aanand Saw Mill", instagram: "@asmwoodwork", logo: "/clients_logo/Aanand Saw Mill.jpeg" },
    { name: "ShopGrow", instagram: "@shopgrow.in", logo: "/clients_logo/ShopGrow.jpeg" },
    { name: "Kaviesh Creations, Pune", instagram: "@kaviesh_creations", logo: "/clients_logo/Kaviesh Creations, Pune.png" },
    { name: "Rita Bhalla Kitchen", instagram: "@ritabhalla.kitchen", logo: "/clients_logo/Rita Bhalla Kitchen .WEBP" },
    { name: "Louis Creation", instagram: "@louis_creation", logo: "/clients_logo/Louis Creation.JPEG" },
]

function LogoCard({ client }) {
    return (
        <div className="mx-3 flex min-h-28 w-36 flex-shrink-0 flex-col items-center justify-center gap-1 rounded-2xl border border-border bg-foreground/5 px-3 py-3 backdrop-blur sm:mx-4 sm:min-h-32 sm:w-44 sm:px-4">
            {/* Fixed white backdrop so logos with dark/transparent backgrounds
                (common in client-supplied logo files) stay visible against
                the site's dark theme instead of blending into the card. */}
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white p-1.5 sm:h-14 sm:w-14">
                <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="h-full w-full object-contain"
                    loading="lazy"
                    onError={(e) => {
                        e.currentTarget.parentElement.style.display = "none"
                    }}
                />
            </div>
            <span className="text-center text-xs font-semibold leading-tight">{client.name}</span>
            <span className="text-xs text-foreground/60">{client.instagram}</span>
        </div>
    )
}

export function ClientLogos() {
    const track = [...clients, ...clients]

    return (
        <section
            id="client-logos"
            className="scroll-mt-24 overflow-hidden border-t border-border py-12"
            aria-label="Our Clients"
        >
            <motion.h2
                className="px-4 font-heading text-xl font-bold text-center sm:text-2xl md:text-3xl"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5 }}
            >
                Trusted by <span className="text-[var(--brand-gold)]">Businesses</span> Across India
            </motion.h2>

            <div className="relative mt-8 w-full">
                <motion.div
                    className="flex w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                >
                    {track.map((client, i) => (
                        <LogoCard key={`${client.name}-${i}`} client={client} />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
