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
import { SocialMediaMarketingPage } from "./Pages/SocialMediaMarketingPage"
import { WhatsappBusinessApiPage } from "./Pages/WhatsappBusinessApiPage"
import { WebDevelopmentPage } from "./Pages/WebDevelopmentPage"
import { AppDevelopmentPage } from "./Pages/AppDevelopmentPage"
import { PricingPage } from "./Pages/PricingPage"
import { CategoryPage } from "./Components/CategoryPage"
import { categories } from "./data/categories"

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
            <Route path="/social-media-marketing" element={<SocialMediaMarketingPage />} />
            <Route path="/whatsapp-business-api" element={<WhatsappBusinessApiPage />} />
            <Route path="/web-development" element={<WebDevelopmentPage />} />
            <Route path="/app-development" element={<AppDevelopmentPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/for-coaching-institutes" element={<CategoryPage data={categories.coachingInstitutes} />} />
            <Route path="/for-clinics-hospitals" element={<CategoryPage data={categories.clinicsHospitals} />} />
            <Route path="/for-real-estate" element={<CategoryPage data={categories.realEstate} />} />
            <Route path="/for-restaurants" element={<CategoryPage data={categories.restaurants} />} />
            <Route path="/for-retail-d2c" element={<CategoryPage data={categories.retailD2c} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
