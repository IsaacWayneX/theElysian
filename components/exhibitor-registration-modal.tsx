"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { X, Building2, User, Mail, Phone, Globe, FileText, ArrowRight, CheckCircle, AlertCircle } from "lucide-react"

interface ExhibitorRegistrationModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ExhibitorRegistrationModal({ isOpen, onClose }: ExhibitorRegistrationModalProps) {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    website: "",
    industry: "",
    boothSize: "",
    description: "",
    specialRequirements: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')
    
    try {
      // Use our API route instead of calling Google Apps Script directly
      const response = await fetch('/api/submit-exhibitor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      const result = await response.json()
      
      if (result.success || response.ok) {
        setSubmitStatus('success')
        // Reset form
        setFormData({
          companyName: "",
          contactPerson: "",
          email: "",
          phone: "",
          website: "",
          industry: "",
          boothSize: "",
          description: "",
          specialRequirements: ""
        })
        // Close modal after 2 seconds
        setTimeout(() => {
          onClose()
          setSubmitStatus('idle')
        }, 2000)
      } else {
        setSubmitStatus('error')
        setErrorMessage(result.error || 'Failed to submit registration')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Network error. Please try again.')
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card/95 backdrop-blur-sm border-primary/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gold-gradient text-center" style={{ fontFamily: 'var(--font-nohemi)' }}>
            Become an Exhibitor
          </DialogTitle>
          <DialogDescription className="text-foreground text-center mt-2" style={{ fontFamily: 'var(--font-nohemi)' }}>
            Join The Elysian Summit & Exhibition 2026 as an exhibitor
          </DialogDescription>
        </DialogHeader>

        {/* Success/Error Messages */}
        {submitStatus === 'success' && (
          <div className="flex items-center space-x-2 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-600">
            <CheckCircle className="w-5 h-5" />
            <p style={{ fontFamily: 'var(--font-nohemi)' }}>Registration submitted successfully! Thank you for your interest.</p>
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="flex items-center space-x-2 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-600">
            <AlertCircle className="w-5 h-5" />
            <p style={{ fontFamily: 'var(--font-nohemi)' }}>{errorMessage}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="companyName" className="text-foreground flex items-center" style={{ fontFamily: 'var(--font-nohemi)' }}>
                <Building2 className="w-4 h-4 mr-2 text-primary" />
                Company Name *
              </Label>
              <Input
                id="companyName"
                value={formData.companyName}
                onChange={(e) => handleChange("companyName", e.target.value)}
                required
                className="bg-background/50 border-border/50 focus:border-primary"
                placeholder="Enter your company name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contactPerson" className="text-foreground flex items-center" style={{ fontFamily: 'var(--font-nohemi)' }}>
                <User className="w-4 h-4 mr-2 text-primary" />
                Contact Person *
              </Label>
              <Input
                id="contactPerson"
                value={formData.contactPerson}
                onChange={(e) => handleChange("contactPerson", e.target.value)}
                required
                className="bg-background/50 border-border/50 focus:border-primary"
                placeholder="Full name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground flex items-center" style={{ fontFamily: 'var(--font-nohemi)' }}>
                <Mail className="w-4 h-4 mr-2 text-primary" />
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
                className="bg-background/50 border-border/50 focus:border-primary"
                placeholder="your@email.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground flex items-center" style={{ fontFamily: 'var(--font-nohemi)' }}>
                <Phone className="w-4 h-4 mr-2 text-primary" />
                Phone Number *
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                required
                className="bg-background/50 border-border/50 focus:border-primary"
                placeholder="+234 XXX XXX XXXX"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="website" className="text-foreground flex items-center" style={{ fontFamily: 'var(--font-nohemi)' }}>
                <Globe className="w-4 h-4 mr-2 text-primary" />
                Website
              </Label>
              <Input
                id="website"
                type="url"
                value={formData.website}
                onChange={(e) => handleChange("website", e.target.value)}
                className="bg-background/50 border-border/50 focus:border-primary"
                placeholder="https://yourcompany.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="industry" className="text-foreground" style={{ fontFamily: 'var(--font-nohemi)' }}>
                Industry *
              </Label>
              <Select value={formData.industry} onValueChange={(value) => handleChange("industry", value)} required>
                <SelectTrigger className="bg-background/50 border-border/50 focus:border-primary">
                  <SelectValue placeholder="Select your industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="oil-gas">Oil & Gas</SelectItem>
                  <SelectItem value="fintech">Fintech & Banking</SelectItem>
                  <SelectItem value="fashion">Fashion & Design</SelectItem>
                  <SelectItem value="construction">Real Estate & Construction</SelectItem>
                  <SelectItem value="tech">Smart Technologies</SelectItem>
                  <SelectItem value="logistics">Logistics & Transport</SelectItem>
                  <SelectItem value="creative">Creative Industries</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="boothSize" className="text-foreground" style={{ fontFamily: 'var(--font-nohemi)' }}>
                Preferred Booth Size *
              </Label>
              <Select value={formData.boothSize} onValueChange={(value) => handleChange("boothSize", value)} required>
                <SelectTrigger className="bg-background/50 border-border/50 focus:border-primary">
                  <SelectValue placeholder="Select booth size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3x3">3m x 3m (Standard)</SelectItem>
                  <SelectItem value="4x4">4m x 4m (Large)</SelectItem>
                  <SelectItem value="6x4">6m x 4m (Premium)</SelectItem>
                  <SelectItem value="custom">Custom Size</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-foreground flex items-center" style={{ fontFamily: 'var(--font-nohemi)' }}>
              <FileText className="w-4 h-4 mr-2 text-primary" />
              Company Description *
            </Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              required
              className="bg-background/50 border-border/50 focus:border-primary min-h-[100px]"
              placeholder="Tell us about your company, products, and what you'll showcase..."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="specialRequirements" className="text-foreground" style={{ fontFamily: 'var(--font-nohemi)' }}>
              Special Requirements
            </Label>
            <Textarea
              id="specialRequirements"
              value={formData.specialRequirements}
              onChange={(e) => handleChange("specialRequirements", e.target.value)}
              className="bg-background/50 border-border/50 focus:border-primary min-h-[80px]"
              placeholder="Any special setup requirements, equipment needs, or additional services..."
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-white py-3 flex items-center justify-center gap-2"
              disabled={isSubmitting || submitStatus === 'success'}
            >
              {isSubmitting ? (
                "Submitting..."
              ) : submitStatus === 'success' ? (
                <>
                  <CheckCircle className="h-4 w-4" />
                  Submitted!
                </>
              ) : (
                <>
                  Submit Application
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 py-3"
            >
              Cancel
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
