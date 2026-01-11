"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react"
import { useMultiStepForm } from "@/components/multi-step-form-context"
import { ZigzagUnderline } from "@/components/svg-zigzag-underline"
import { SVGStars } from "@/components/svg-stars"
import Image from "next/image"
import { Booth } from "@/lib/supabase"

const industryLabels: { [key: string]: string } = {
  "energy": "Energy",
  "real-estate": "Real Estate",
  "fashion": "Fashion",
  "banking": "Banking",
  "creative-industry": "Creative Industry",
  "logistics": "Logistics",
  "interior-decor": "Interior Decor",
  "smart-technologies": "Smart Technologies",
  "automobile": "Automobile",
  "agriculture": "Agriculture",
  "oil-gas": "Oil and Gas",
  "health-wellness": "Health and Wellness",
  "education": "Education",
  "security": "Security",
  "other": "Other"
}

export function Step10Confirmation() {
  const { formData, submitForm, prevStep, isSubmitting, submitStatus, errorMessage } = useMultiStepForm()
  const [selectedBooth, setSelectedBooth] = useState<Booth | null>(null)

  useEffect(() => {
    const fetchBooth = async () => {
      if (formData.boothSize) {
        try {
          const response = await fetch('/api/booths')
          const result = await response.json()
          
          if (result.success && result.data) {
            const booth = result.data.find((b: Booth) => b.id === formData.boothSize)
            setSelectedBooth(booth || null)
          }
        } catch (err) {
          console.error('Error fetching booth:', err)
        }
      }
    }

    fetchBooth()
  }, [formData.boothSize])

  const handleSubmit = async () => {
    await submitForm()
  }

  return (
    <div className="h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Content Container */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-full">
        {/* Left Side - Text Content */}
        <div className="flex-1 max-w-2xl w-full md:max-w-2xl h-full flex flex-col justify-center">
          <div className="space-y-4 md:space-y-8 overflow-y-auto max-h-full pr-2 py-4 scrollbar-hide">
            {/* Title with Zigzag Underline */}
            <div className="space-y-2 md:space-y-4">
              <h1 className="text-xl sm:text-2xl md:text-4xl font-black text-white leading-tight text-center md:text-left" style={{ fontFamily: 'var(--font-nohemi)' }}>
                Review your information
              </h1>
              <ZigzagUnderline className="w-full" />
            </div>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-xl text-gray-300 text-center md:text-left font-bold" style={{ fontFamily: 'var(--font-nohemi)' }}>
              Please review all the details before submitting your exhibitor application.
            </p>

            {/* Review List */}
            <div className="space-y-2 md:space-y-4">
              {/* Desktop: 2 Column Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {/* Left Column */}
                <div className="space-y-3 md:space-y-4">
                  {/* Company Information */}
                  <div className="space-y-2 md:space-y-3">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white text-center md:text-left" style={{ fontFamily: 'var(--font-nohemi)' }}>
                      Company Information
                    </h3>
                    <div className="space-y-1 md:space-y-2 text-gray-300">
                      <div className="flex flex-col gap-1">
                        <span className="text-white text-xs sm:text-sm md:text-lg font-bold">Company:</span>
                        <span className="text-xs sm:text-sm md:text-lg">{formData.companyName}</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-white text-xs sm:text-sm md:text-lg font-bold">Industry:</span>
                        <span className="text-xs sm:text-sm md:text-lg">{industryLabels[formData.industry] || formData.industry}</span>
                      </div>
                      {formData.website && (
                        <div className="flex flex-col gap-1">
                          <span className="text-white text-xs sm:text-sm md:text-lg font-bold">Website:</span>
                          <span className="text-xs sm:text-sm md:text-lg break-all">{formData.website}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Exhibition Details */}
                  <div className="space-y-2 md:space-y-3">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white text-center md:text-left" style={{ fontFamily: 'var(--font-nohemi)' }}>
                      Exhibition Details
                    </h3>
                    <div className="space-y-1 md:space-y-2 text-gray-300">
                      <div className="flex flex-col gap-1">
                        <span className="text-white text-xs sm:text-sm md:text-lg font-bold">Booth Size:</span>
                        <span className="text-xs sm:text-sm md:text-lg">
                          {selectedBooth ? selectedBooth.size : formData.boothSize}
                        </span>
                      </div>
                      {formData.specialRequirements && (
                        <div className="flex flex-col gap-1">
                          <span className="text-white text-xs sm:text-sm md:text-lg font-bold">Requirements:</span>
                          <span className="text-xs sm:text-sm md:text-lg">{formData.specialRequirements}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-3 md:space-y-4">
                  {/* Contact Information */}
                  <div className="space-y-2 md:space-y-3">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white text-center md:text-left" style={{ fontFamily: 'var(--font-nohemi)' }}>
                      Contact Information
                    </h3>
                    <div className="space-y-1 md:space-y-2 text-gray-300">
                      <div className="flex flex-col gap-1">
                        <span className="text-white text-xs sm:text-sm md:text-lg font-bold">Contact:</span>
                        <span className="text-xs sm:text-sm md:text-lg">{formData.contactPerson}</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-white text-xs sm:text-sm md:text-lg font-bold">Email:</span>
                        <span className="text-xs sm:text-sm md:text-lg break-all">{formData.email}</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-white text-xs sm:text-sm md:text-lg font-bold">Phone:</span>
                        <span className="text-xs sm:text-sm md:text-lg">{formData.phone}</span>
                      </div>
                    </div>
                  </div>

                  {/* Company Description */}
                  <div className="space-y-2 md:space-y-3">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white text-center md:text-left" style={{ fontFamily: 'var(--font-nohemi)' }}>
                      Company Description
                    </h3>
                    <p className="text-gray-300 text-xs sm:text-sm md:text-lg leading-relaxed">
                      {formData.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 sm:p-4 max-w-2xl mx-auto">
              <p className="text-red-400 text-center text-sm sm:text-base" style={{ fontFamily: 'var(--font-nohemi)' }}>
                {errorMessage}
              </p>
            </div>
          )}

          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 sm:p-6 max-w-2xl mx-auto text-center">
              <CheckCircle className="w-8 h-8 sm:w-12 sm:h-12 text-green-400 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-nohemi)' }}>
                Application Submitted Successfully!
              </h3>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg" style={{ fontFamily: 'var(--font-nohemi)' }}>
                Registration submitted successfully! Thank you for your interest in The Elysian Summit & Exhibition.
              </p>
            </div>
          )}

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 pt-3 md:pt-6">
              <Button
                onClick={prevStep}
                className="flex-1 border-2 border-white text-white hover:bg-white hover:text-black px-4 sm:px-12 py-3 sm:py-6 text-sm sm:text-lg md:text-xl lg:text-2xl font-bold rounded-none bg-transparent"
                disabled={isSubmitting || submitStatus === 'success'}
              >
                <ArrowLeft className="w-4 h-4 sm:w-6 sm:h-6 mr-2 sm:mr-4" />
                Back
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting || submitStatus === 'success'}
                className="flex-1 bg-white hover:bg-gray-100 text-black px-4 sm:px-12 py-3 sm:py-6 text-sm sm:text-lg md:text-xl lg:text-2xl font-bold flex items-center justify-center gap-2 sm:gap-4 disabled:opacity-50 disabled:cursor-not-allowed rounded-none border-0"
              >
              {isSubmitting ? (
                "Submitting..."
              ) : submitStatus === 'success' ? (
                <>
                  <CheckCircle className="w-6 h-6" />
                  Submitted!
                </>
              ) : (
                <>
                  Submit Application
                  <ArrowRight className="w-6 h-6" />
                </>
              )}
            </Button>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center space-x-2 pt-8">
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
          </div>
          </div>
        </div>

        {/* Right Side - Image - Hidden on Mobile */}
        <div className="hidden md:flex flex-1 max-w-lg md:ml-16 relative w-full">
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=800&fit=crop"
              alt="Success and confirmation"
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
