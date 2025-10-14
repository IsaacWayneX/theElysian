"use client"

interface SVGStarsProps {
  className?: string
}

export function SVGStars({ className = "" }: SVGStarsProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {/* Large stars */}
      <svg className="absolute top-4 left-4 w-8 h-8 text-yellow-400 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
      
      <svg className="absolute top-8 right-8 w-6 h-6 text-yellow-300 animate-pulse animation-delay-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
      
      <svg className="absolute bottom-8 left-8 w-7 h-7 text-yellow-400 animate-pulse animation-delay-1000" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
      
      <svg className="absolute bottom-4 right-4 w-5 h-5 text-yellow-300 animate-pulse animation-delay-1500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
      
      {/* Medium stars */}
      <svg className="absolute top-1/3 left-2 w-4 h-4 text-yellow-500 animate-pulse animation-delay-2000" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
      
      <svg className="absolute top-2/3 right-2 w-4 h-4 text-yellow-400 animate-pulse animation-delay-2500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
      
      {/* Small stars */}
      <svg className="absolute top-1/4 right-1/3 w-3 h-3 text-yellow-300 animate-pulse animation-delay-3000" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
      
      <svg className="absolute bottom-1/4 left-1/3 w-3 h-3 text-yellow-500 animate-pulse animation-delay-3500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
      
      <svg className="absolute top-1/2 left-1 w-2 h-2 text-yellow-400 animate-pulse animation-delay-4000" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
      
      <svg className="absolute top-1/2 right-1 w-2 h-2 text-yellow-300 animate-pulse animation-delay-4500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    </div>
  )
}
