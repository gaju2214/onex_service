import { About } from "./Components/about"
import { ClientLogos } from "./Components/ClientLogos"
import { Contact } from "./Components/contact"
import { FloatingStickers } from "./Components/FloatingStickers"
import { Footer } from "./Components/footer"
import { GrowthDashboard } from "./Components/GrowthDashboard"
import { Hero } from "./Components/hero"
import { Navbar } from "./Components/navbar"
import { Portfolio } from "./Components/portfolio"
import { ReelsShowcase } from "./Components/ReelsShowcase"
import { Services } from "./Components/services"
import { Testimonials } from "./Components/testimonials"
import { ThemeProvider } from "./Components/theme-provider"
import { WebsiteDevelopment } from "./Components/website-development"
import { WhatsAppButton } from "./Components/WhatsAppButton"

function App() {
  return (
    <ThemeProvider>
      <FloatingStickers />
      <WhatsAppButton />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <Hero />
        <ClientLogos />
        <About />
        <Services />
        <ReelsShowcase />
        <GrowthDashboard />
        {/* <Testimonials /> */}
        {/* <Portfolio /> */}
        <WebsiteDevelopment />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
