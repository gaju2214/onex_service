import { motion } from "framer-motion"

const WHATSAPP_NUMBER = "917875359828"
const WHATSAPP_MESSAGE = "Hi! I'm interested in your social media marketing services."

export function WhatsAppButton() {
    const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full shadow-lg sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
            style={{ backgroundColor: "#25D366" }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <svg
                viewBox="0 0 24 24"
                className="h-7 w-7 fill-white"
                aria-hidden="true"
            >
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.29-1.39a9.9 9.9 0 0 0 4.7 1.2h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.84 14.11c-.25.7-1.45 1.34-2 1.43-.51.08-1.15.11-1.86-.12-.43-.14-.98-.32-1.69-.63-2.97-1.28-4.91-4.27-5.06-4.47-.15-.2-1.21-1.61-1.21-3.07 0-1.46.77-2.18 1.04-2.48.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.19.01.44-.07.68.52.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.36 1.45.3.15.47.12.65-.07.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.27.1 1.75.82 2.05.97.3.15.5.22.57.35.07.13.07.72-.18 1.42Z" />
            </svg>
        </motion.a>
    )
}
