"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { useMultiStepForm } from "@/components/multi-step-form-context"
import { ZigzagUnderline } from "@/components/svg-zigzag-underline"
import { SVGStars } from "@/components/svg-stars"
import Image from "next/image"

const industries = [
  { value: "energy", label: "Energy" },
  { value: "real-estate", label: "Real Estate" },
  { value: "fashion", label: "Fashion" },
  { value: "banking", label: "Banking" },
  { value: "creative-industry", label: "Creative Industry" },
  { value: "logistics", label: "Logistics" },
  { value: "interior-decor", label: "Interior Decor" },
  { value: "smart-technologies", label: "Smart Technologies" },
  { value: "automobile", label: "Automobile" },
  { value: "agriculture", label: "Agriculture" },
  { value: "oil-gas", label: "Oil and Gas" },
  { value: "health-wellness", label: "Health and Wellness" },
  { value: "education", label: "Education" },
  { value: "security", label: "Security" },
  { value: "other", label: "Other" }
]

export function Step6Industry() {
  const { formData, updateFormData, nextStep, prevStep } = useMultiStepForm()
  const [value, setValue] = useState(formData.industry)

  const handleContinue = () => {
    if (value) {
      updateFormData('industry', value)
      nextStep()
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
                What industry are you in?
              </h1>
              <ZigzagUnderline className="w-full" />
            </div>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 text-center md:text-left font-bold" style={{ fontFamily: 'var(--font-nohemi)' }}>
              Help us understand your business sector to better serve your needs.
            </p>

            {/* Form */}
            <div className="space-y-4 md:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <Label htmlFor="industry" className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold block text-center md:text-left" style={{ fontFamily: 'var(--font-nohemi)' }}>
                  Industry
                </Label>
                <Select value={value} onValueChange={setValue}>
                  <SelectTrigger className="bg-transparent border-0 border-b border-gray-600 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black py-2 md:py-4 px-0 focus:border-gray-600 focus:ring-0 focus:outline-none rounded-none">
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-gray-700">
                    {industries.map((industry) => (
                      <SelectItem 
                        key={industry.value} 
                        value={industry.value}
                        className="text-white hover:bg-gray-800 focus:bg-gray-800 text-sm sm:text-lg md:text-xl font-bold"
                      >
                        {industry.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
              alt="Industrial innovation"
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
