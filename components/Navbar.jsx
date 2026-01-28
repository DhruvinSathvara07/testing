'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FiPhoneCall, FiMail, FiMapPin, FiInstagram, FiFacebook, FiLinkedin, FiX, FiChevronDown } from 'react-icons/fi'
import logo from '../assests/img/logo.jpeg'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Homepage', href: '#home', hasDropdown: false },
    { name: 'About Us', href: '#about', hasDropdown: false },
    { name: 'Services', href: '#services', hasDropdown: false },
    {
      name: 'Projects',
      href: '#projects',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Residential Projects', href: '#projects' },
        { name: 'Commercial Projects', href: '#projects' },
        { name: 'Industrial Projects', href: '#projects' },
      ]
    },
    {
      name: 'Pages',
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Our Team', href: '#about' },
        { name: 'Testimonials', href: '#about' },
        { name: 'FAQ', href: '#contact' },
        { name: 'Blog', href: '#' },
      ]
    },
    { name: 'Contact Us', href: '#contact', hasDropdown: false },
  ]

  const phoneNumber = '(555) 123-456-789'

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed  top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-xl' : ''
        }`}
    >
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex max-w-7xl mx-auto items-center justify-between py-3">
            <motion.a
              href="#home"
              className="flex items-center gap-4 group"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="relative w-16 h-16 flex-shrink-0 rounded-full overflow-hidden border-2 border-[#a00e1a] bg-white">
                <Image
                  src={logo}
                  alt="Shraddha Surveying & Geomatics Solutions logo"
                  fill
                  className="object-contain p-1"
                  sizes="64px"
                  priority
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-[#a00e1a]">
                  Shraddha
                </span>
                <span className="text-xs sm:text-sm text-gray-800 font-medium">
                  Surveying &amp; Geomatics Solutions
                </span>
              </div>
            </motion.a>

            <div className="hidden xl:flex items-center gap-10">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#C1121F] hover:bg-[#a00e1a] text-white font-semibold px-6 py-5 rounded-sm uppercase text-xs tracking-wide shadow-md"
              >
                Request a Quote
              </motion.button>

              <div className="flex items-center gap-8 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C1121F] flex items-center justify-center text-white shadow-md">
                    <FiPhoneCall className="w-5 h-5 text-current" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[14px] uppercase tracking-wide text-gray-500">Call Now</span>
                    <a
                      href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                      className="font-normal text-gray-900 hover:text-[#C1121F] transition-colors"
                    >
                      {phoneNumber}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C1121F] flex items-center justify-center text-white shadow-md">
                    <FiMail className="w-5 h-5 text-current" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[14px] uppercase tracking-wide text-gray-500">Email</span>
                    <a
                      href="mailto:info@shraddhasgs.com"
                      className="font-normal text-gray-900 hover:text-[#C1121F] transition-colors"
                    >
                      info@shraddhasgs.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C1121F] flex items-center justify-center text-white shadow-md">
                    <FiMapPin className="w-5 h-5 text-current" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[14px]  uppercase tracking-wide text-gray-500">Address</span>
                    <span className="font-normal text-gray-900">
                      Your City, Country
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <motion.button
              className={`xl:hidden p-2 rounded-full border transition-colors duration-300 ${isMobileMenuOpen
                ? 'bg-[#C1121F] border-[#C1121F] text-white shadow-md'
                : 'bg-white border-gray-300 text-gray-900'
                }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.svg
                className="w-7 h-7"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
              >
                {isMobileMenuOpen ? (
                  <motion.path
                    d="M6 18L18 6M6 6l12 12"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  />
                ) : (
                  <motion.path
                    d="M4 6h16M4 12h16M4 18h16"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.svg>
            </motion.button>
          </div>
        </div>
      </div>

      <div className="xl:bg-navbar" style={{ padding: '12px' }}>
        <div className="container max-w-7xl mx-auto">
          <div className="hidden xl:flex items-center justify-between h-14">
            <div className="flex items-center gap-8">
              {navLinks.map((link, index) => (
                <div
                  key={index}
                  className="relative"
                >
                  <motion.a
                    href={link.href}
                    className={`relative font-medium text-[14px] tracking-[0.2em] uppercase flex items-center gap-1 transition-colors duration-300 ${index === 0 ? 'text-[#C1121F]' : 'text-white hover:text-[#C1121F]'}`}
                    whileHover={{ y: -2 }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.08, duration: 0.4 }}
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <FiChevronDown className="w-5 h-5 text-current" />
                    )}

                    <motion.span
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#C1121F]"
                      initial={{ scaleX: index === 0 ? 1 : 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>

                  <AnimatePresence>
                    {link.hasDropdown && activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-full left-0 mt-3 w-52 bg-[#0b0f19] rounded-md shadow-xl overflow-hidden border border-gray-800"
                      >
                        {link.dropdownItems.map((item, itemIndex) => (
                          <motion.a
                            key={itemIndex}
                            href={item.href}
                            className="block px-4 py-2.5 text-sm text-white/90 hover:bg-[#C1121F] hover:text-white transition-colors"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: itemIndex * 0.05 }}
                            onMouseEnter={() => setActiveDropdown(link.name)}
                          >
                            {item.name}
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                className="w-9 h-9 bg-[#0b0f19] hover:bg-[#C1121F] text-white flex items-center justify-center transition-colors duration-300"
              >
                <FiInstagram />
              </button>
              <button
                className="w-9 h-9 bg-[#0b0f19] hover:bg-[#C1121F] text-white flex items-center justify-center transition-colors duration-300"
              >
                <FiFacebook />
              </button>
              <button
                className="w-9 h-9 bg-[#0b0f19] hover:bg-[#C1121F] text-white flex items-center justify-center transition-colors duration-300"
              >
                <FiLinkedin />
              </button>
              <button
                className="w-9 h-9 bg-[#0b0f19] hover:bg-[#C1121F] text-white flex items-center justify-center transition-colors duration-300"
              >
                <FiX />
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 xl:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-navbar z-50 shadow-2xl xl:hidden overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between gap-3 mb-8 pb-6 border-b border-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 flex-shrink-0 rounded-full overflow-hidden border-2 border-[#C1121F] bg-white">
                      <Image
                        src={logo}
                        alt="Shraddha Surveying & Geomatics Solutions logo"
                        fill
                        className="object-contain p-1"
                        sizes="48px"
                      />
                    </div>
                    <div className="flex flex-col leading-tight">
                      <span className="text-lg font-extrabold uppercase tracking-tight text-[#C1121F]">
                        Shraddha
                      </span>
                      <span className="text-[11px] text-white/80 font-medium">
                        Surveying &amp; Geomatics Solutions
                      </span>
                    </div>
                  </div>

                  {/* Close button inside drawer */}
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Close menu"
                    className="ml-4 p-2 rounded-full border border-gray-600 text-white/80 hover:text-white hover:border-[#C1121F] hover:bg-[#C1121F]/10 transition-colors duration-200"
                    whileHover={{ rotate: 90, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiX className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Mobile Menu Items */}
                <div className="space-y-2">
                  {navLinks.map((link, index) => (
                    <div key={index}>
                      <motion.a
                        href={link.href}
                        className="block py-3 px-4 text-white font-medium uppercase tracking-wide rounded-lg transition-colors hover:bg-white/5"
                        onClick={() => {
                          if (!link.hasDropdown) {
                            setIsMobileMenuOpen(false)
                          } else {
                            setActiveDropdown(activeDropdown === link.name ? null : link.name)
                          }
                        }}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex items-center justify-between">
                          <span>{link.name}</span>
                          {link.hasDropdown && (
                            <motion.svg
                              className="w-4 h-4 text-white/80"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              animate={{ rotate: activeDropdown === link.name ? 180 : 0 }}
                            >
                              <path d="M19 9l-7 7-7-7" />
                            </motion.svg>
                          )}
                        </div>
                      </motion.a>

                      {/* Mobile Dropdown */}
                      <AnimatePresence>
                        {link.hasDropdown && activeDropdown === link.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-6 space-y-1">
                              {link.dropdownItems.map((item, itemIndex) => (
                                <motion.a
                                  key={itemIndex}
                                  href={item.href}
                                  className="block py-2 px-4 text-white/80 text-sm hover:text-[#C1121F] transition-colors"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  initial={{ opacity: 0, x: 10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: itemIndex * 0.05 }}
                                >
                                  {item.name}
                                </motion.a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                {/* Mobile Phone Info */}
                <div className="mt-8 pt-6 border-t border-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border-2 border-[#C1121F] flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-[#C1121F]"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white/70 text-xs">Call us anytime</div>
                      <a
                        href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                        className="text-[#C1121F] font-semibold text-sm"
                      >
                        {phoneNumber}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
