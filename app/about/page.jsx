import Navbar from '@/components/Navbar'
import AboutHero from '@/components/AboutHero'
import About from '@/components/About'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar isStatic={true} />
      <AboutHero />
      <About />
      <Footer />
    </main>
  )
}
