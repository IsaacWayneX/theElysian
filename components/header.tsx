"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Menu, X, ChevronDown } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const isMobile = useIsMobile()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen)

  const navigationItems = [
    { label: "About", href: "#about" },
    { label: "Vision", href: "#vision" },
    { label: "Objectives", href: "#objectives" },
    { label: "Contact", href: "#contact" }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-primary/20">
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
                <h1 className="text-xl font-serif font-bold text-gold-gradient">
                  Elysian Summit
                </h1>
                <p className="text-xs text-muted-foreground font-medium">
                  Capital City Showcase 2026
                </p>
              </div>
            </div>
            
            {/* Event Badge */}
            <Badge className="hidden md:flex bg-primary/20 text-primary border-primary/30 hover:bg-primary/30">
              Coming Soon
            </Badge>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="text-foreground hover:text-primary hover:bg-primary/10"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-primary/20 bg-background/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary hover:bg-primary/10 rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
