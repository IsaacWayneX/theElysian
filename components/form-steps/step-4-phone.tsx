"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { useMultiStepForm } from "@/components/multi-step-form-context"
import { ZigzagUnderline } from "@/components/svg-zigzag-underline"
import { SVGStars } from "@/components/svg-stars"
import Image from "next/image"

export function Step4Phone() {
  const { formData, updateFormData, nextStep, prevStep } = useMultiStepForm()
  const [value, setValue] = useState(formData.phone)

  const handleContinue = () => {
    if (value.trim()) {
      updateFormData('phone', value.trim())
      nextStep()
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && value.trim()) {
      handleContinue()
    }
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
                What's your phone number?
              </h1>
              <ZigzagUnderline className="w-full" />
            </div>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 text-center md:text-left font-bold" style={{ fontFamily: 'var(--font-nohemi)' }}>
              We may need to reach you for urgent updates or clarifications.
            </p>

            {/* Form */}
            <div className="space-y-4 md:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <Label htmlFor="phone" className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold block text-center md:text-left" style={{ fontFamily: 'var(--font-nohemi)' }}>
                  Phone Number
                </Label>
                <div className="relative">
                  <Input
                    id="phone"
                    type="tel"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="e.g., +234 811 429 4274"
                    className="bg-transparent border-0 border-b border-gray-600 text-white placeholder:text-gray-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black py-2 md:py-4 px-0 focus:border-gray-600 focus:ring-0 focus:outline-none rounded-none"
                    autoFocus
                  />
                </div>
              </div>

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
                  disabled={!value.trim()}
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
              <div className="w-2 h-2 md:w-3 md:h-3 bg-gray-600" />
              <div className="w-2 h-2 md:w-3 md:h-3 bg-gray-600" />
              <div className="w-2 h-2 md:w-3 md:h-3 bg-gray-600" />
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
              alt="Phone communication"
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
