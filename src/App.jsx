import { About } from "./Components/about"
import { Contact } from "./Components/contact"
import { FloatingStickers } from "./Components/FloatingStickers"
import { Footer } from "./Components/footer"
import { Hero } from "./Components/hero"
import { Navbar } from "./Components/navbar"
import { Portfolio } from "./Components/portfolio"
import { Services } from "./Components/services"
import { Testimonials } from "./Components/testimonials"
import { ThemeProvider } from "./Components/theme-provider"
import { WebsiteDevelopment } from "./Components/website-development"

function App() {
  return (
    <ThemeProvider>
      <FloatingStickers />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Portfolio />
        <WebsiteDevelopment />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
