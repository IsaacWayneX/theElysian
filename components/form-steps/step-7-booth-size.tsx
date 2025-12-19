"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { ArrowRight, ArrowLeft, Loader2 } from "lucide-react"
import { useMultiStepForm } from "@/components/multi-step-form-context"
import { ZigzagUnderline } from "@/components/svg-zigzag-underline"
import { SVGStars } from "@/components/svg-stars"
import Image from "next/image"
import { Booth } from "@/lib/supabase"

export function Step7BoothSize() {
  const { formData, updateFormData, nextStep, prevStep } = useMultiStepForm()
  const [value, setValue] = useState(formData.boothSize)
  const [booths, setBooths] = useState<Booth[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchBooths = async () => {
      try {
        setIsLoading(true)
        setError(null)
        const response = await fetch('/api/booths')
        const result = await response.json()
        
        if (result.success) {
          setBooths(result.data || [])
        } else {
          setError(result.error || 'Failed to load booths')
        }
      } catch (err) {
        console.error('Error fetching booths:', err)
        setError('Failed to load booths. Please try again.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchBooths()
  }, [])

  const handleContinue = () => {
    if (value) {
      updateFormData('boothSize', value)
      nextStep()
    }
  }

  const selectedBooth = booths.find(booth => booth.id === value)
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Content Container */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-full">
        {/* Left Side - Text Content */}
        <div className="flex-1 max-w-2xl w-full md:max-w-2xl h-full flex flex-col justify-center">
          <div className="space-y-6 md:space-y-12 overflow-y-auto max-h-full pr-2 py-4 scrollbar-hide">
            {/* Title with Zigzag Underline */}
            <div className="space-y-2 md:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight text-center md:text-left" style={{ fontFamily: 'var(--font-nohemi)' }}>
                What booth size do you prefer?
              </h1>
              <ZigzagUnderline className="w-full" />
            </div>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 text-center md:text-left font-bold" style={{ fontFamily: 'var(--font-nohemi)' }}>
              Choose the perfect space to showcase your innovations and connect with visitors.
            </p>

            {/* Form */}
            <div className="space-y-4 md:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <Label htmlFor="boothSize" className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold block text-center md:text-left" style={{ fontFamily: 'var(--font-nohemi)' }}>
                  Preferred Booth Size
                </Label>
                
                {isLoading ? (
                  <div className="flex items-center justify-center py-8">
                    <Loader2 className="w-8 h-8 text-yellow-500 animate-spin" />
                    <span className="ml-3 text-white text-lg" style={{ fontFamily: 'var(--font-nohemi)' }}>
                      Loading booths...
                    </span>
                  </div>
                ) : error ? (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                    <p className="text-red-400 text-center font-bold" style={{ fontFamily: 'var(--font-nohemi)' }}>
                      {error}
                    </p>
                  </div>
                ) : booths.length === 0 ? (
                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                    <p className="text-yellow-400 text-center font-bold" style={{ fontFamily: 'var(--font-nohemi)' }}>
                      No booths available at the moment. Please contact us for custom options.
                    </p>
                  </div>
                ) : (
                  <Select value={value} onValueChange={setValue}>
                    <SelectTrigger className="bg-transparent border-0 border-b border-gray-600 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black py-2 md:py-4 px-0 focus:border-gray-600 focus:ring-0 focus:outline-none rounded-none">
                      <SelectValue placeholder="Select booth size" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-gray-700">
                      {booths.map((booth) => (
                        <SelectItem 
                          key={booth.id} 
                          value={booth.id}
                          className="text-white hover:bg-gray-800 focus:bg-gray-800 text-sm sm:text-lg md:text-xl font-bold"
                        >
                          <div className="flex flex-col items-start w-full">
                            <div className="flex items-center justify-between w-full">
                              <span className="font-bold">{booth.name}</span>
                              <span className="text-yellow-400 ml-4">{formatPrice(booth.price)}</span>
                            </div>
                            <span className="text-xs sm:text-sm text-gray-400 mt-1">{booth.size}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              </div>

              {/* Selected Booth Info */}
              {selectedBooth && (
                <div className="bg-transparent border-2 border-gray-600 p-3 md:p-6 text-center md:text-left">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-yellow-300 text-sm sm:text-lg md:text-xl font-bold" style={{ fontFamily: 'var(--font-nohemi)' }}>
                      {selectedBooth.name}
                    </p>
                    <p className="text-yellow-400 text-sm sm:text-lg md:text-xl font-bold" style={{ fontFamily: 'var(--font-nohemi)' }}>
                      {formatPrice(selectedBooth.price)}
                    </p>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-base md:text-lg" style={{ fontFamily: 'var(--font-nohemi)' }}>
                    Size: {selectedBooth.size}
                  </p>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 pt-4 md:pt-8">
                <Button
                  onClick={prevStep}
                  className="flex-1 border-2 border-white text-white hover:bg-white hover:text-black px-4 sm:px-12 py-3 sm:py-6 text-sm sm:text-lg md:text-xl lg:text-2xl font-bold rounded-none bg-transparent"
                >
                  <ArrowLeft className="w-4 h-4 sm:w-6 sm:h-6 mr-2 sm:mr-4" />
                  Back
                </Button>
                <Button
                  onClick={handleContinue}
                  disabled={!value}
                  className="flex-1 bg-white hover:bg-gray-100 text-black px-4 sm:px-12 py-3 sm:py-6 text-sm sm:text-lg md:text-xl lg:text-2xl font-bold flex items-center justify-center gap-2 sm:gap-4 disabled:opacity-50 disabled:cursor-not-allowed rounded-none border-0"
                >
                  Continue
                  <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6" />
                </Button>
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="flex space-x-2 md:space-x-3 pt-4 md:pt-8 justify-center md:justify-start">
              <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500" />
              <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500" />
              <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500" />
              <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500" />
              <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500" />
              <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500" />
              <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500" />
              <div className="w-2 h-2 md:w-3 md:h-3 bg-gray-600" />
              <div className="w-2 h-2 md:w-3 md:h-3 bg-gray-600" />
              <div className="w-2 h-2 md:w-3 md:h-3 bg-gray-600" />
            </div>
          </div>
        </div>

        {/* Right Side - Image - Hidden on Mobile */}
        <div className="hidden md:flex flex-1 max-w-lg md:ml-16 relative w-full">
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=800&fit=crop"
              alt="Exhibition booth setup"
              width={600}
              height={600}
              className="object-cover w-full h-auto rounded-lg shadow-2xl"
            />
            <SVGStars />
          </div>
        </div>
      </div>
    </div>
  )
}
