'use client'

import { motion } from 'framer-motion'

const features = [
  {
    title: 'Accuracy',
    description: 'Precision is our priority. We use advanced equipment and proven methodologies to ensure accurate measurements every time.',
    icon: '✓',
  },
  {
    title: 'Modern Technology',
    description: 'State-of-the-art GPS, Total Station, and drone technology for the most reliable and efficient surveying solutions.',
    icon: '📡',
  },
  {
    title: 'Experienced Team',
    description: 'Certified surveyors with years of experience handling projects of all sizes and complexities.',
    icon: '👥',
  },
  {
    title: 'On-time Delivery',
    description: 'We respect your timeline. Our efficient processes ensure projects are completed on schedule without compromising quality.',
    icon: '⏱️',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-primary text-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-accent">Us</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            What sets us apart in the land surveying industry
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg p-6 text-center hover:bg-gray-800 transition-colors duration-300 group"
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-2xl font-bold mb-3 text-accent">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

