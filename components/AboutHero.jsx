'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import aboutImage from '../assests/img/about.jpg'

export default function AboutHero() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={aboutImage}
          alt="About Us Background"
          fill
          className="object-cover"
          priority
          style={{
            filter: 'blur(6px) brightness(0.5) saturate(0.8)',
            transform: 'scale(1.1)',
          }}
        />
        {/* Gradient Overlay for Better Contrast */}
        <div className="absolute inset-0  from-slate-700/75 via-slate-800/80 to-slate-900/85"></div>
        <div className="absolute inset-0  from-transparent via-gray-800/30 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 uppercase font-rajdhani drop-shadow-2xl">
              About Us
            </h1>

            {/* Breadcrumb Navigation */}
            <nav className="flex items-center justify-center gap-2 text-sm md:text-base">
              <Link
                href="/"
                className="text-white hover:text-orange transition-colors duration-300 drop-shadow-lg"
              >
                Home
              </Link>
              <span className="text-white drop-shadow-lg"> &gt; </span>
              <span className="text-orange font-medium drop-shadow-lg">About Us</span>
            </nav>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
