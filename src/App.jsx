import { Routes, Route } from "react-router-dom"
import { FloatingStickers } from "./Components/FloatingStickers"
import { Footer } from "./Components/footer"
import { Navbar } from "./Components/navbar"
import { ScrollToTop } from "./Components/ScrollToTop"
import { ThemeProvider } from "./Components/theme-provider"
import { WhatsAppButton } from "./Components/WhatsAppButton"
import { Home } from "./Pages/Home"
import { AboutPage } from "./Pages/AboutPage"
import { ServicesPage } from "./Pages/ServicesPage"
import { PortfolioPage } from "./Pages/PortfolioPage"
import { ContactPage } from "./Pages/ContactPage"
import { FreeAuditRedirect } from "./Pages/FreeAuditRedirect"

function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <FloatingStickers />
      <WhatsAppButton />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/free-audit" element={<FreeAuditRedirect />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
