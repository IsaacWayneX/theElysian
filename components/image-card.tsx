"use client"

import Image from "next/image"

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
  return (
    <div 
      className={`bg-white cursor-pointer ${className}`}
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
        
        {/* Badge */}
        {badge && (
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-yellow-500 text-white px-3 py-1 text-sm font-medium">
              {badge}
            </span>
          </div>
        )}
        
        {/* Category */}
        {category && (
          <div className="absolute top-4 right-4 z-10">
            <span className="bg-white/90 text-gray-800 px-3 py-1 text-sm font-medium">
              {category}
            </span>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-4 sm:p-6 space-y-2 sm:space-y-3">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-nohemi)' }}>
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed" style={{ fontFamily: 'var(--font-nohemi)' }}>
          {description}
        </p>
      </div>
    </div>
  )
}
