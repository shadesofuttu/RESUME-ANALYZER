import { Navbar } from '../components/navigation/Navbar.jsx'
import { Hero } from '../components/hero/Hero.jsx'
import { LandingSections } from '../components/landing/LandingSections.jsx'

export function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <LandingSections />
    </>
  )
}
