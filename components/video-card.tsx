"use client"

import { useState, useRef } from "react"
import { Play, Pause } from "lucide-react"

interface VideoCardProps {
  title: string
  description: string
  videoUrl: string
  thumbnailUrl?: string
  badge?: string
  category?: string
  className?: string
}

export function VideoCard({ 
  title, 
  description, 
  videoUrl, 
  thumbnailUrl,
  badge, 
  category,
  className = "" 
}: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div 
      className={`bg-white ${className}`}
    >
      {/* Video Container */}
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          loop
          playsInline
          poster={thumbnailUrl}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        
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
        
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            className="bg-white/90 hover:bg-white text-gray-800 w-12 h-12 flex items-center justify-center"
            onClick={togglePlay}
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
          </button>
        </div>
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
