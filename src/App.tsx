import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import TrustedLogo from './components/TrustedLogo'
import Services from './components/Services'
import Info from './components/Info'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <TrustedLogo />
      <Services/>
      <Info/>/
      <Features/>
      <Footer/>
    </>
  )
}

export default App