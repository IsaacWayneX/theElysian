"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { ImageCard } from "./image-card"
import { VideoCard } from "./video-card"

interface GridCarouselItem {
  id: string
  title: string
  description: string
  imageUrl?: string
  videoUrl?: string
  badge?: string
  category?: string
  type: 'image' | 'video'
}

interface GridCarouselProps {
  items: GridCarouselItem[]
  title?: string
  subtitle?: string
  itemsPerView?: number
  className?: string
}

export function GridCarousel({
  items,
  title,
  subtitle,
  itemsPerView = 3,
  className = ""
}: GridCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Responsive items per view - SSR safe
  const getResponsiveItemsPerView = () => {
    if (typeof window === 'undefined') return itemsPerView // Default for SSR
    if (isMobile) return 1
    if (window.innerWidth < 768) return 1
    if (window.innerWidth < 1024) return 2
    return itemsPerView
  }

  const responsiveItemsPerView = getResponsiveItemsPerView()
  const maxIndex = Math.max(0, items.length - responsiveItemsPerView)

  // Handle window resize - SSR safe
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  const canGoNext = currentIndex < maxIndex
  const canGoPrev = currentIndex > 0

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
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Items Grid */}
        <div 
          ref={containerRef}
          className="flex transition-transform duration-700 ease-in-out"
          style={{ 
            transform: `translateX(-${currentIndex * (100 / responsiveItemsPerView)}%)`,
            width: `${(items.length / responsiveItemsPerView) * 100}%`
          }}
        >
          {items.map((item) => (
            <div 
              key={item.id} 
              className="flex-shrink-0 px-2 sm:px-4"
              style={{ width: `${100 / items.length}%` }}
            >
              {item.type === 'video' ? (
                <VideoCard
                  title={item.title}
                  description={item.description}
                  videoUrl={item.videoUrl!}
                  thumbnailUrl={item.imageUrl}
                  badge={item.badge}
                  category={item.category}
                />
              ) : (
                <ImageCard
                  title={item.title}
                  description={item.description}
                  imageUrl={item.imageUrl!}
                  badge={item.badge}
                  category={item.category}
                />
              )}
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <Button
          variant="ghost"
          size="lg"
          className={cn(
            "absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm rounded-full w-10 h-10 sm:w-12 sm:h-12 transition-opacity duration-300",
            !canGoPrev && "opacity-50 cursor-not-allowed"
          )}
          onClick={prevSlide}
          disabled={!canGoPrev}
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
        </Button>
        
        <Button
          variant="ghost"
          size="lg"
          className={cn(
            "absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm rounded-full w-10 h-10 sm:w-12 sm:h-12 transition-opacity duration-300",
            !canGoNext && "opacity-50 cursor-not-allowed"
          )}
          onClick={nextSlide}
          disabled={!canGoNext}
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
        </Button>
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center mt-8">
        <div className="flex space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === currentIndex
                  ? "bg-primary scale-125"
                  : "bg-primary/30 hover:bg-primary/50"
              )}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
