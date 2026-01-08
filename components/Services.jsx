'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const services = [
  {
    title: 'Land Survey',
    description: 'Comprehensive land surveying services for property boundaries, subdivisions, and legal documentation.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    icon: '📐',
  },
  {
    title: 'Boundary Survey',
    description: 'Accurate boundary identification and marking to establish property lines and resolve disputes.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    icon: '🗺️',
  },
  {
    title: 'Construction Survey',
    description: 'Pre-construction surveys, site layout, and as-built surveys for construction projects.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80',
    icon: '🏗️',
  },
  {
    title: 'Topographic Mapping',
    description: 'Detailed topographic maps showing elevation, contours, and natural features of the land.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    icon: '🗻',
  },
  {
    title: 'Drone Survey',
    description: 'Advanced aerial surveying using drone technology for large areas and inaccessible locations.',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    icon: '🚁',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Comprehensive surveying solutions tailored to your specific needs
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-4xl">{service.icon}</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

