"use client"

import { createContext, useContext, useState, ReactNode } from 'react'

export interface FormData {
  companyName: string
  contactPerson: string
  email: string
  phone: string
  website: string
  industry: string
  boothSize: string
  description: string
  specialRequirements: string
}

interface MultiStepFormContextType {
  currentStep: number
  formData: FormData
  isSubmitting: boolean
  submitStatus: 'idle' | 'success' | 'error'
  errorMessage: string
  nextStep: () => void
  prevStep: () => void
  goToStep: (step: number) => void
  updateFormData: (field: keyof FormData, value: string) => void
  submitForm: () => Promise<void>
  resetForm: () => void
}

const MultiStepFormContext = createContext<MultiStepFormContextType | undefined>(undefined)

const initialFormData: FormData = {
  companyName: "",
  contactPerson: "",
  email: "",
  phone: "",
  website: "",
  industry: "",
  boothSize: "",
  description: "",
  specialRequirements: ""
}

export function MultiStepFormProvider({ children }: { children: ReactNode }) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const totalSteps = 10

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const goToStep = (step: number) => {
    if (step >= 1 && step <= totalSteps) {
      setCurrentStep(step)
    }
  }

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const submitForm = async () => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')
    
    try {
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
        // Auto-close after 3 seconds
        setTimeout(() => {
          resetForm()
        }, 3000)
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

  const resetForm = () => {
    setCurrentStep(1)
    setFormData(initialFormData)
    setIsSubmitting(false)
    setSubmitStatus('idle')
    setErrorMessage('')
  }

  const value: MultiStepFormContextType = {
    currentStep,
    formData,
    isSubmitting,
    submitStatus,
    errorMessage,
    nextStep,
    prevStep,
    goToStep,
    updateFormData,
    submitForm,
    resetForm
  }

  return (
    <MultiStepFormContext.Provider value={value}>
      {children}
    </MultiStepFormContext.Provider>
  )
}

export function useMultiStepForm() {
  const context = useContext(MultiStepFormContext)
  if (context === undefined) {
    throw new Error('useMultiStepForm must be used within a MultiStepFormProvider')
  }
  return context
}
