"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import Image from "next/image"
import { ArrowRight, ExternalLink } from "lucide-react"

interface ImageCardProps {
  title: string
  description: string
  imageUrl: string
  badge?: string
  category?: string
  onClick?: () => void
  className?: string
}

export function ImageCard({ 
  title, 
  description, 
  imageUrl, 
  badge, 
  category,
  onClick,
  className = "" 
}: ImageCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card 
      className={`group relative overflow-hidden bg-card/90 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className={`object-cover transition-all duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Badge */}
        {badge && (
          <div className="absolute top-4 left-4 z-10">
            <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30 hover:bg-yellow-500/30 backdrop-blur-sm">
              {badge}
            </Badge>
          </div>
        )}
        
        {/* Category */}
        {category && (
          <div className="absolute top-4 right-4 z-10">
            <Badge variant="outline" className="bg-black/20 text-white border-white/30 backdrop-blur-sm">
              {category}
            </Badge>
          </div>
        )}
        
        {/* Hover Effect Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-yellow-500/20 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
      </div>
      
      {/* Content */}
      <div className="p-4 sm:p-6 space-y-2 sm:space-y-3">
        <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300" style={{ fontFamily: 'var(--font-nohemi)' }}>
          {title}
        </h3>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed" style={{ fontFamily: 'var(--font-nohemi)' }}>
          {description}
        </p>
        
        {/* Action Indicator */}
        <div className={`flex items-center text-primary transition-all duration-300 ${isHovered ? 'translate-x-2' : 'translate-x-0'}`}>
          <span className="text-sm font-medium" style={{ fontFamily: 'var(--font-nohemi)' }}>Learn More</span>
          <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
      
      {/* Glow Effect */}
      <div className={`absolute inset-0 rounded-lg transition-opacity duration-500 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-500/10 via-amber-500/10 to-yellow-500/10 blur-xl" />
      </div>
    </Card>
  )
}
