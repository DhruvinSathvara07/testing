'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Survey Engineer at Work"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Trusted & Experienced
                <span className="block text-accent">Land Survey Company</span>
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                With years of experience in the industry, we provide comprehensive land surveying and mapping services that meet the highest standards of accuracy and professionalism.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our team of certified surveyors uses state-of-the-art equipment and modern technology to deliver precise measurements and detailed mapping solutions for residential, commercial, and construction projects.
              </p>
              <p className="text-lg text-gray-700">
                We are committed to excellence, ensuring every project is completed on time and within budget, while maintaining the highest level of customer satisfaction.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

