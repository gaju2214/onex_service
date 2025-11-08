import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "./theme-provider"

const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
]

export function Navbar() {
    const [solid, setSolid] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        const onScroll = () => setSolid(window.scrollY > 24)
        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={[
                "fixed inset-x-0 top-0 z-50 transition-all duration-300",
                solid
                    ? "bg-background/90 backdrop-blur supports-[backdrop-filter]:backdrop-blur border-b border-border shadow-lg"
                    : "bg-transparent",
            ].join(" ")}
            role="banner"
        >
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-2 py-2" aria-label="Primary">
                <motion.a
                    href="#home"
                    className="flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.img
                        src="/logo2.png"
                        alt="ContentOcean Logo"
                        className="h-30 object-contain drop-shadow-md rounded-full"
                        whileHover={{
                            scale: 1.05,
                            rotate: [0, -1, 1, 0]
                        }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.a>

                <ul className="hidden items-center gap-6 md:flex">
                    {navItems.map((item, index) => (
                        <motion.li
                            key={item.href}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <motion.a
                                href={item.href}
                                className="text-sm text-foreground/80 hover:text-foreground transition-colors relative"
                                whileHover={{
                                    scale: 1.1,
                                    textShadow: "0 0 8px rgba(0,122,255,0.5)"
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {item.label}
                                <motion.div
                                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
                                    initial={{ width: 0 }}
                                    whileHover={{ width: "100%" }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.a>
                        </motion.li>
                    ))}
                </ul>

                <div className="hidden md:flex items-center gap-4">
                    <motion.button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg hover:bg-accent transition-colors"
                        aria-label="Toggle theme"
                        whileHover={{ scale: 1.1, rotate: 180 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            key={theme}
                            initial={{ rotate: -180, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 180, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {theme === "dark" ? (
                                <Sun className="h-4 w-4" />
                            ) : (
                                <Moon className="h-4 w-4" />
                            )}
                        </motion.div>
                    </motion.button>
                    <motion.a
                        href="#contact"
                        className="rounded-xl px-4 py-2 text-sm font-semibold text-foreground shadow-lg ring-1 ring-primary/20 bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-purple)]"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 32px rgba(0,122,255,0.4)",
                            y: -2
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        {"Let’s Talk"}
                    </motion.a>
                </div>

                {/* Mobile menu button */}
                <motion.button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 overflow-hidden"
                    aria-label="Toggle menu"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <div className="w-5 h-5 relative">
                        <motion.span
                            className="block absolute h-0.5 w-5 bg-current transform transition-all duration-300 ease-in-out"
                            animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: -4 }}
                        ></motion.span>
                        <motion.span
                            className="block absolute h-0.5 w-5 bg-current transform transition-all duration-300 ease-in-out"
                            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                        ></motion.span>
                        <motion.span
                            className="block absolute h-0.5 w-5 bg-current transform transition-all duration-300 ease-in-out"
                            animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 4 }}
                        ></motion.span>
                    </div>
                </motion.button>

                {/* Mobile menu */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.ul
                            initial={{ opacity: 0, scale: 0.8, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="absolute top-full right-4 mt-2 space-y-2 rounded-xl border border-border bg-background/95 p-3 shadow-lg md:hidden"
                        >
                            {navItems.map((item, index) => (
                                <motion.li
                                    key={item.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    <motion.a
                                        href={item.href}
                                        className="block rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-foreground/5 hover:text-foreground"
                                        onClick={() => setMenuOpen(false)}
                                        whileHover={{ scale: 1.05, x: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {item.label}
                                    </motion.a>
                                </motion.li>
                            ))}
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                            >
                                <motion.button
                                    onClick={() => {
                                        toggleTheme();
                                        setMenuOpen(false);
                                    }}
                                    className="flex items-center justify-center w-full rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-foreground/5 hover:text-foreground"
                                    whileHover={{ scale: 1.05, x: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {theme === "dark" ? (
                                        <Sun className="h-4 w-4 mr-2" />
                                    ) : (
                                        <Moon className="h-4 w-4 mr-2" />
                                    )}
                                    Toggle Theme
                                </motion.button>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: (navItems.length + 1) * 0.1 }}
                            >
                                <motion.a
                                    href="#contact"
                                    className="block rounded-lg px-3 py-2 text-center text-sm font-semibold text-foreground shadow-lg ring-1 ring-primary/20 bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-purple)]"
                                    onClick={() => setMenuOpen(false)}
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,122,255,0.4)" }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {"Let’s Talk"}
                                </motion.a>
                            </motion.li>
                        </motion.ul>
                    )}
                </AnimatePresence>
            </nav>
        </motion.header>
    )
}
