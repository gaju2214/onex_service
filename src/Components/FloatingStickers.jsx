import { motion } from "framer-motion"

const stickers = [
    { emoji: "🚀", delay: 0 },
    { emoji: "🎯", delay: 1 },
    { emoji: "📈", delay: 2 },
    { emoji: "💡", delay: 3 },
    { emoji: "🌟", delay: 4 },
    { emoji: "📊", delay: 5 },
    { emoji: "💼", delay: 6 },
    { emoji: "📱", delay: 7 },
    { emoji: "🎨", delay: 8 },
    { emoji: "🔥", delay: 9 },
]

export function FloatingStickers() {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {stickers.map((sticker, index) => (
                <motion.div
                    key={index}
                    className="absolute text-4xl opacity-20"
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: window.innerHeight + 100,
                        rotate: 0,
                        scale: 0.5,
                    }}
                    animate={{
                        y: -100,
                        rotate: 360,
                        scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 20 + Math.random() * 10,
                        delay: sticker.delay,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{
                        left: `${Math.random() * 100}%`,
                    }}
                >
                    {sticker.emoji}
                </motion.div>
            ))}
        </div>
    )
}
