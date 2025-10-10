"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { cn } from "@/lib/utils"

interface CarouselItem {
  id: string
  title: string
  description: string
  imageUrl?: string
  videoUrl?: string
  badge?: string
  category?: string
}

interface AdvancedCarouselProps {
  items: CarouselItem[]
  title?: string
  subtitle?: string
  autoPlay?: boolean
  autoPlayInterval?: number
  showControls?: boolean
  showIndicators?: boolean
  className?: string
}

export function AdvancedCarousel({
  items,
  title,
  subtitle,
  autoPlay = true,
  autoPlayInterval = 5000,
  showControls = true,
  showIndicators = true,
  className = ""
}: AdvancedCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [isHovered, setIsHovered] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying)
  }

  useEffect(() => {
    if (isPlaying && !isHovered) {
      intervalRef.current = setInterval(nextSlide, autoPlayInterval)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying, isHovered, autoPlayInterval])

  return (
    <div className={cn("relative w-full", className)}>
      {/* Header */}
      {(title || subtitle) && (
        <div className="text-center mb-12">
          {title && (
            <h2 className="text-4xl md:text-6xl font-black mb-4 text-gold-gradient" style={{ fontFamily: 'var(--font-nohemi)' }}>
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg md:text-xl text-foreground max-w-4xl mx-auto" style={{ fontFamily: 'var(--font-nohemi)' }}>
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Carousel Container */}
      <div 
        className="relative overflow-hidden rounded-2xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Slides */}
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={item.id} className="w-full flex-shrink-0">
              <div className="relative h-96 md:h-[500px] overflow-hidden bg-white">
                {/* Background Image/Video */}
                <div className="absolute inset-0">
                  {item.videoUrl ? (
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src={item.videoUrl} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  
                  {/* Simple overlay */}
                  <div className="absolute inset-0 bg-black/30" />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12">
                  <div className="max-w-4xl">
                    {/* Badge */}
                    {item.badge && (
                      <div className="mb-4">
                        <span className="inline-block bg-yellow-500 text-white px-4 py-2 text-sm font-medium">
                          {item.badge}
                        </span>
                      </div>
                    )}
                    
                    {/* Title */}
                    <h3 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight" style={{ fontFamily: 'var(--font-nohemi)' }}>
                      {item.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl" style={{ fontFamily: 'var(--font-nohemi)' }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        {showControls && (
          <>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 w-12 h-12 flex items-center justify-center"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 w-12 h-12 flex items-center justify-center"
              onClick={nextSlide}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Auto-play Toggle */}
        <button
          className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 w-10 h-10 flex items-center justify-center"
          onClick={toggleAutoPlay}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
      </div>

      {/* Indicators */}
      {showIndicators && (
        <div className="flex justify-center space-x-2 mt-6">
          {items.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-3 h-3 transition-all duration-300",
                index === currentIndex
                  ? "bg-yellow-500"
                  : "bg-gray-300 hover:bg-gray-400"
              )}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
