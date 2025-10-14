"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Menu, X, ChevronDown } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"
import Image from "next/image"

interface HeaderProps {
  onOpenModal?: () => void
  onOpenConsultationModal?: () => void
}

export function Header({ onOpenModal, onOpenConsultationModal }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const isMobile = useIsMobile()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen)

  const navigationItems = [
    { label: "Featured", href: "#featured" },
    { label: "Vision", href: "#vision" },
    { label: "Objectives", href: "#objectives" },
    { label: "Contact", href: "#contact" }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-yellow-500/30 shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              {/* Logo Image */}
              <div className="w-12 h-12 relative">
                <Image
                  src="/ELYSIAN LOGO no background.png"
                  alt="Elysian Summit Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              
              {/* Brand Text */}
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-nohemi)' }}>
                  Elysian Summit
                </h1>
                <p className="text-xs text-yellow-300 font-medium" style={{ fontFamily: 'var(--font-nohemi)' }}>
                  Capital City Showcase 2026
                </p>
              </div>
            </div>
            
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-yellow-300 transition-all duration-300 font-medium relative group"
                style={{ fontFamily: 'var(--font-nohemi)' }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* CTA and Social */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Social Icons */}
            <div className="flex items-center space-x-2">
              <button className="text-white hover:text-yellow-300 hover:bg-yellow-500/10 w-10 h-10 flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
              <button className="text-white hover:text-yellow-300 hover:bg-yellow-500/10 w-10 h-10 flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </button>
            </div>
            
            {/* CTA Button */}
            <button 
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2"
              onClick={onOpenConsultationModal}
            >
              Book a consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-yellow-300 hover:bg-yellow-500/10 w-10 h-10 flex items-center justify-center"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="border-t border-yellow-500/30 bg-black/20 backdrop-blur-xl shadow-lg shadow-black/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    scrollToSection(item.href)
                    setIsMenuOpen(false)
                  }}
                  className="block w-full text-left px-3 py-2 text-white hover:text-yellow-300 hover:bg-yellow-500/10 rounded-md transition-all duration-200 font-medium"
                  style={{ fontFamily: 'var(--font-nohemi)' }}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2 border-t border-yellow-500/20">
                <button 
                  className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3"
                  onClick={() => {
                    onOpenConsultationModal?.()
                    setIsMenuOpen(false)
                  }}
                >
                  Book a consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
