"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { X, Send, CheckCircle } from "lucide-react"
import { ZigzagUnderline } from "@/components/svg-zigzag-underline"

interface ConsultationModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (submitStatus === 'error') {
      setSubmitStatus('idle')
      setErrorMessage('')
    }
  }

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all fields')
      setSubmitStatus('error')
      return
    }

    if (!validateEmail(formData.email)) {
      setErrorMessage('Please enter a valid email address')
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/submit-consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
        setTimeout(() => {
          onClose()
          setSubmitStatus('idle')
        }, 2000)
      } else {
        throw new Error('Failed to submit consultation request')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Failed to submit consultation request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-2 sm:p-4">
      <div className="relative w-full max-w-2xl mx-auto bg-black border-2 border-yellow-500/30 shadow-2xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 md:top-4 md:right-4 text-white hover:text-yellow-400 transition-colors duration-300 z-10 bg-black/50 rounded-full p-2 touch-manipulation"
          aria-label="Close consultation modal"
        >
          <X className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        {/* Modal Content */}
        <div className="p-4 sm:p-6 md:p-8 lg:p-12">
          {/* Header */}
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-3 md:mb-4" style={{ fontFamily: 'var(--font-nohemi)' }}>
              Book a Consultation
            </h2>
            <ZigzagUnderline className="w-24 sm:w-32 mx-auto mb-3 md:mb-4" />
            <p className="text-base sm:text-lg md:text-xl text-gray-300 font-bold px-2" style={{ fontFamily: 'var(--font-nohemi)' }}>
              Let's discuss how you can be part of The Elysian Summit & Exhibition
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white text-base sm:text-lg md:text-xl font-bold block" style={{ fontFamily: 'var(--font-nohemi)' }}>
                Full Name
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Enter your full name"
                className="bg-transparent border-0 border-b border-gray-600 text-white placeholder:text-gray-500 text-lg sm:text-xl md:text-2xl font-bold py-3 sm:py-4 px-0 focus:border-yellow-500 focus:ring-0 focus:outline-none rounded-none touch-manipulation"
                required
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white text-base sm:text-lg md:text-xl font-bold block" style={{ fontFamily: 'var(--font-nohemi)' }}>
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="Enter your email address"
                className="bg-transparent border-0 border-b border-gray-600 text-white placeholder:text-gray-500 text-lg sm:text-xl md:text-2xl font-bold py-3 sm:py-4 px-0 focus:border-yellow-500 focus:ring-0 focus:outline-none rounded-none touch-manipulation"
                required
              />
            </div>

            {/* Phone Field */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white text-base sm:text-lg md:text-xl font-bold block" style={{ fontFamily: 'var(--font-nohemi)' }}>
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="Enter your phone number"
                className="bg-transparent border-0 border-b border-gray-600 text-white placeholder:text-gray-500 text-lg sm:text-xl md:text-2xl font-bold py-3 sm:py-4 px-0 focus:border-yellow-500 focus:ring-0 focus:outline-none rounded-none touch-manipulation"
                required
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-white text-base sm:text-lg md:text-xl font-bold block" style={{ fontFamily: 'var(--font-nohemi)' }}>
                Message
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="Tell us about your consultation needs..."
                className="bg-transparent border-0 border-b border-gray-600 text-white placeholder:text-gray-500 text-lg sm:text-xl md:text-2xl font-bold py-3 sm:py-4 px-0 focus:border-yellow-500 focus:ring-0 focus:outline-none rounded-none min-h-[100px] sm:min-h-[120px] resize-none touch-manipulation"
                required
              />
            </div>

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 sm:p-4">
                <p className="text-red-400 text-center font-bold text-sm sm:text-base" style={{ fontFamily: 'var(--font-nohemi)' }}>
                  {errorMessage}
                </p>
              </div>
            )}

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 sm:p-6 text-center">
                <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-green-400 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-nohemi)' }}>
                  Consultation Request Submitted!
                </h3>
                <p className="text-gray-300 text-base sm:text-lg" style={{ fontFamily: 'var(--font-nohemi)' }}>
                  We'll get back to you within 24 hours.
                </p>
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-4 sm:pt-6">
              <Button
                type="submit"
                disabled={isSubmitting || submitStatus === 'success'}
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-lg sm:text-xl md:text-2xl font-bold flex items-center justify-center gap-2 sm:gap-4 disabled:opacity-50 disabled:cursor-not-allowed rounded-none border-0 touch-manipulation"
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : submitStatus === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="hidden sm:inline">Submitted Successfully</span>
                    <span className="sm:hidden">Success!</span>
                  </>
                ) : (
                  <>
                    <span className="hidden sm:inline">Send Consultation Request</span>
                    <span className="sm:hidden">Send Request</span>
                    <Send className="w-5 h-5 sm:w-6 sm:h-6" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
