import { Suspense, lazy } from "react"
import { Routes, Route } from "react-router-dom"
import { FloatingStickers } from "./Components/FloatingStickers"
import { Footer } from "./Components/footer"
import { Navbar } from "./Components/navbar"
import { ScrollToTop } from "./Components/ScrollToTop"
import { ThemeProvider } from "./Components/theme-provider"
import { WhatsAppButton } from "./Components/WhatsAppButton"
import { Home } from "./Pages/Home"
import { categories } from "./data/categories"

// Route-level code splitting: only the homepage (the most-visited entry
// point) loads eagerly. Every other page is a separate chunk fetched on
// navigation, which keeps the initial JS payload small — page load speed
// is itself an SEO/ranking factor, and this had been triggering Vite's
// "chunk larger than 500kB" build warning.
const AboutPage = lazy(() => import("./Pages/AboutPage").then((m) => ({ default: m.AboutPage })))
const ServicesPage = lazy(() => import("./Pages/ServicesPage").then((m) => ({ default: m.ServicesPage })))
const PortfolioPage = lazy(() => import("./Pages/PortfolioPage").then((m) => ({ default: m.PortfolioPage })))
const ContactPage = lazy(() => import("./Pages/ContactPage").then((m) => ({ default: m.ContactPage })))
const FreeAuditPage = lazy(() => import("./Pages/FreeAuditPage").then((m) => ({ default: m.FreeAuditPage })))
const SocialMediaMarketingPage = lazy(() => import("./Pages/SocialMediaMarketingPage").then((m) => ({ default: m.SocialMediaMarketingPage })))
const WhatsappBusinessApiPage = lazy(() => import("./Pages/WhatsappBusinessApiPage").then((m) => ({ default: m.WhatsappBusinessApiPage })))
const WebDevelopmentPage = lazy(() => import("./Pages/WebDevelopmentPage").then((m) => ({ default: m.WebDevelopmentPage })))
const AppDevelopmentPage = lazy(() => import("./Pages/AppDevelopmentPage").then((m) => ({ default: m.AppDevelopmentPage })))
const PricingPage = lazy(() => import("./Pages/PricingPage").then((m) => ({ default: m.PricingPage })))
const CategoryPage = lazy(() => import("./Components/CategoryPage").then((m) => ({ default: m.CategoryPage })))
const CategoriesPage = lazy(() => import("./Pages/CategoriesPage").then((m) => ({ default: m.CategoriesPage })))
const CaseStudiesPage = lazy(() => import("./Pages/CaseStudiesPage").then((m) => ({ default: m.CaseStudiesPage })))
const CaseStudyDetailPage = lazy(() => import("./Pages/CaseStudyDetailPage").then((m) => ({ default: m.CaseStudyDetailPage })))
const InsightsPage = lazy(() => import("./Pages/InsightsPage").then((m) => ({ default: m.InsightsPage })))
const InsightDetailPage = lazy(() => import("./Pages/InsightDetailPage").then((m) => ({ default: m.InsightDetailPage })))

function PageFallback() {
  return (
    <div className="flex min-h-[60svh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-[var(--brand-gold)] border-t-transparent" aria-label="Loading" />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <FloatingStickers />
      <WhatsAppButton />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/free-audit" element={<FreeAuditPage />} />
              <Route path="/social-media-marketing" element={<SocialMediaMarketingPage />} />
              <Route path="/whatsapp-business-api" element={<WhatsappBusinessApiPage />} />
              <Route path="/web-development" element={<WebDevelopmentPage />} />
              <Route path="/app-development" element={<AppDevelopmentPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/industries" element={<CategoriesPage />} />
              <Route path="/for-coaching-institutes" element={<CategoryPage data={categories.coachingInstitutes} />} />
              <Route path="/for-clinics-hospitals" element={<CategoryPage data={categories.clinicsHospitals} />} />
              <Route path="/for-real-estate" element={<CategoryPage data={categories.realEstate} />} />
              <Route path="/for-restaurants" element={<CategoryPage data={categories.restaurants} />} />
              <Route path="/for-retail-d2c" element={<CategoryPage data={categories.retailD2c} />} />
              <Route path="/for-wedding-events" element={<CategoryPage data={categories.weddingEvents} />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
              <Route path="/insights" element={<InsightsPage />} />
              <Route path="/insights/:slug" element={<InsightDetailPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
