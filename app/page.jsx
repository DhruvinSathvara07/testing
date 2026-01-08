import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      {/* <div id="home">
        <Hero />
      </div>
      <About />
      <Services />
      <WhyChooseUs />
      <Projects />
      <Contact />
      <Footer /> */}
    </main>
  )
}