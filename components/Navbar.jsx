'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

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

  // Navigation links matching the image
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-xl' : ''
      }`}
    >
      {/* Main Navbar - #1F1F1F Background */}
      <div className="bg-navbar">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left: Logo & Brand */}
            <motion.a
              href="#home"
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {/* Logo Icon - Survey Total Station Silhouette in Orange */}
              <div className="relative w-12 h-12 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-full h-full text-orange"
                  viewBox="0 0 100 100"
                  fill="currentColor"
                >
                  {/* Surveyor figure */}
                  <circle cx="30" cy="70" r="8" />
                  <rect x="26" y="78" width="8" height="12" />
                  {/* Surveying instrument line */}
                  <line x1="30" y1="50" x2="70" y2="30" stroke="currentColor" strokeWidth="3" />
                  {/* Total Station on tripod */}
                  <rect x="65" y="25" width="12" height="8" />
                  <line x1="71" y1="33" x2="71" y2="85" stroke="currentColor" strokeWidth="2" />
                  <line x1="60" y1="85" x2="82" y2="85" stroke="currentColor" strokeWidth="2" />
                  <line x1="60" y1="85" x2="71" y2="33" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="82" y1="85" x2="71" y2="33" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              
              {/* Brand Name & Tagline */}
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white uppercase tracking-tight leading-tight">
                  SurveyUK
                </span>
                <span className="text-xs text-white/70 leading-tight">
                  Precision in Every Point
                </span>
              </div>
            </motion.a>

            {/* Center: Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <motion.a
                    href={link.href}
                    className="relative text-white font-medium text-sm uppercase tracking-wide hover:text-orange transition-colors duration-300 flex items-center gap-1"
                    whileHover={{ y: -2 }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <motion.svg
                        className="w-4 h-4"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        animate={{ rotate: activeDropdown === link.name ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    )}
                    
                    {/* Hover Underline Animation */}
                    <motion.span
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {link.hasDropdown && activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-xl overflow-hidden border border-gray-800"
                      >
                        {link.dropdownItems.map((item, itemIndex) => (
                          <motion.a
                            key={itemIndex}
                            href={item.href}
                            className="block px-4 py-3 text-white text-sm hover:bg-orange hover:text-white transition-colors"
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

            {/* Right: Phone Info (Matching Image) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="hidden lg:flex items-center gap-3"
            >
              <div className="flex items-center gap-2">
                {/* Phone Icon in Orange Circle */}
                <div className="w-10 h-10 rounded-full border-2 border-orange flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-orange"
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
                <div className="flex flex-col">
                  <span className="text-white/70 text-xs leading-tight">Call us anytime</span>
                  <a 
                    href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                    className="text-orange font-semibold text-sm leading-tight hover:text-orange-light transition-colors"
                  >
                    {phoneNumber}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <motion.svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </motion.svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Slide-in Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-navbar z-50 shadow-2xl lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Mobile Logo */}
                <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-800">
                  <div className="w-10 h-10 text-orange flex-shrink-0">
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 100 100"
                      fill="currentColor"
                    >
                      <circle cx="30" cy="70" r="8" />
                      <rect x="26" y="78" width="8" height="12" />
                      <line x1="30" y1="50" x2="70" y2="30" stroke="currentColor" strokeWidth="3" />
                      <rect x="65" y="25" width="12" height="8" />
                      <line x1="71" y1="33" x2="71" y2="85" stroke="currentColor" strokeWidth="2" />
                      <line x1="60" y1="85" x2="82" y2="85" stroke="currentColor" strokeWidth="2" />
                      <line x1="60" y1="85" x2="71" y2="33" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="82" y1="85" x2="71" y2="33" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white uppercase">SurveyUK</div>
                    <div className="text-xs text-white/70">Precision in Every Point</div>
                  </div>
                </div>

                {/* Mobile Menu Items */}
                <div className="space-y-2">
                  {navLinks.map((link, index) => (
                    <div key={index}>
                      <motion.a
                        href={link.href}
                        className="block py-3 px-4 text-white font-medium uppercase tracking-wide hover:bg-gray-900 rounded-lg transition-colors"
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
                              className="w-4 h-4"
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
                                  className="block py-2 px-4 text-white/80 text-sm hover:text-orange transition-colors"
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
                    <div className="w-10 h-10 rounded-full border-2 border-orange flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-orange"
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
                        className="text-orange font-semibold text-sm"
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
