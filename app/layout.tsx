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
  title: "The Elysian Summit & Exhibition - Coming Soon",
  description: "Experience luxury and innovation at The Elysian Summit & Exhibition. An exclusive gathering of visionaries, creators, and industry leaders in an elegant venue. Join the waitlist for this prestigious event.",
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
