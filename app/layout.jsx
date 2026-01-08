import './globals.css'

export const metadata = {
  title: 'Professional Land Survey & Mapping Solutions',
  description: 'Trusted land survey, property measurement, mapping, and construction survey services. Accurate, reliable, and professional surveying solutions.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}

