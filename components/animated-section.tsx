"use client"

import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  title?: string
  subtitle?: string
  children: React.ReactNode
  className?: string
  backgroundType?: 'gradient' | 'video' | 'image' | 'none'
  backgroundUrl?: string
  overlay?: boolean
}

export function AnimatedSection({
  title,
  subtitle,
  children,
  className = "",
  backgroundType = 'gradient',
  backgroundUrl,
  overlay = true
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const renderBackground = () => {
    switch (backgroundType) {
      case 'video':
        return (
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={backgroundUrl} type="video/mp4" />
            </video>
            {overlay && <div className="absolute inset-0 bg-black/40" />}
          </div>
        )
      case 'image':
        return (
          <div className="absolute inset-0">
            <img
              src={backgroundUrl}
              alt=""
              className="w-full h-full object-cover"
            />
            {overlay && <div className="absolute inset-0 bg-black/40" />}
          </div>
        )
      case 'gradient':
      default:
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-yellow-900/20 to-slate-900/60">
            {/* Gold Ambient Lighting Effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-yellow-500/5 via-amber-500/5 to-transparent rounded-full blur-3xl" />
          </div>
        )
    }
  }

  return (
    <section
      ref={sectionRef}
      className={cn("relative py-20 px-4 overflow-hidden", className)}
    >
      {/* Background */}
      {backgroundType !== 'none' && renderBackground()}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        {(title || subtitle) && (
          <div className={cn(
            "text-center mb-16 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            {title && (
              <h2 className="text-4xl md:text-6xl font-black mb-8 text-gold-gradient" style={{ fontFamily: 'var(--font-nohemi)' }}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-4xl mx-auto" style={{ fontFamily: 'var(--font-nohemi)' }}>
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Children Content */}
        <div className={cn(
          "transition-all duration-1000 delay-300",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {children}
        </div>
      </div>
    </section>
  )
}
