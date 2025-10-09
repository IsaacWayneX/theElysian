"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState, useRef } from "react"
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react"

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
  const [isMuted, setIsMuted] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
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

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen()
      }
    }
  }

  return (
    <Card 
      className={`group relative overflow-hidden bg-card/90 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Video Container */}
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted={isMuted}
          loop
          playsInline
          poster={thumbnailUrl}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        
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
        
        {/* Video Controls */}
        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovered || isPlaying ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center space-x-3">
            <Button
              size="lg"
              className="bg-yellow-600/90 hover:bg-yellow-700/90 text-white rounded-full w-12 h-12 sm:w-16 sm:h-16 backdrop-blur-sm"
              onClick={togglePlay}
            >
              {isPlaying ? <Pause className="w-4 h-4 sm:w-6 sm:h-6" /> : <Play className="w-4 h-4 sm:w-6 sm:h-6 ml-1" />}
            </Button>
          </div>
        </div>
        
        {/* Bottom Controls */}
        <div className={`absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 flex items-center justify-between transition-opacity duration-300 ${isHovered || isPlaying ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <Button
              size="sm"
              variant="ghost"
              className="bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm w-6 h-6 sm:w-8 sm:h-8"
              onClick={toggleMute}
            >
              {isMuted ? <VolumeX className="w-3 h-3 sm:w-4 sm:h-4" /> : <Volume2 className="w-3 h-3 sm:w-4 sm:h-4" />}
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm w-6 h-6 sm:w-8 sm:h-8"
              onClick={toggleFullscreen}
            >
              <Maximize2 className="w-3 h-3 sm:w-4 sm:h-4" />
            </Button>
          </div>
        </div>
        
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
      </div>
      
      {/* Glow Effect */}
      <div className={`absolute inset-0 rounded-lg transition-opacity duration-500 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-500/10 via-amber-500/10 to-yellow-500/10 blur-xl" />
      </div>
    </Card>
  )
}
