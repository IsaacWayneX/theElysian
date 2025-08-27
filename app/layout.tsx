import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Cormorant_Garamond } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "The Elysian Summit & Exhibition | Capital City Showcase 2026",
  description: "Join global innovators, leaders, and creators at The Elysian Summit & Exhibition in Abuja. Experience cutting-edge innovations, cross-industry collaboration, and a future shaped by excellence and ingenuity.",
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${cormorant.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
