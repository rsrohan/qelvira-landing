import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Audience from "./components/Audience"
import Pillars from "./components/Pillars"
import HowItWorks from "./components/HowItWorks"
import Platform from "./components/Platform"
import Products from "./components/Products"
import SavingsCalculator from "./components/SavingsCalculator"
import Faq from "./components/Faq"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import WhatsAppFab from "./components/WhatsAppFab"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Audience />
        <Pillars />
        <HowItWorks />
        <Platform />
        <Products />
        <SavingsCalculator />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}

export default App
