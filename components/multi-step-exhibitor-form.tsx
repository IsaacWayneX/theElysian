"use client"

import { MultiStepFormProvider, useMultiStepForm } from "@/components/multi-step-form-context"
import { Step1CompanyName } from "@/components/form-steps/step-1-company-name"
import { Step2ContactPerson } from "@/components/form-steps/step-2-contact-person"
import { Step3Email } from "@/components/form-steps/step-3-email"
import { Step4Phone } from "@/components/form-steps/step-4-phone"
import { Step5Website } from "@/components/form-steps/step-5-website"
import { Step6Industry } from "@/components/form-steps/step-6-industry"
import { Step7BoothSize } from "@/components/form-steps/step-7-booth-size"
import { Step8Description } from "@/components/form-steps/step-8-description"
import { Step9SpecialRequirements } from "@/components/form-steps/step-9-special-requirements"
import { Step10Confirmation } from "@/components/form-steps/step-10-confirmation"

interface MultiStepExhibitorFormProps {
  isOpen: boolean
  onClose: () => void
}

export function MultiStepExhibitorForm({ isOpen, onClose }: MultiStepExhibitorFormProps) {
  if (!isOpen) return null

  return (
    <MultiStepFormProvider>
      <MultiStepFormContent onClose={onClose} />
    </MultiStepFormProvider>
  )
}

function MultiStepFormContent({ onClose }: { onClose: () => void }) {
  const { currentStep, submitStatus } = useMultiStepForm()

  // Auto-close on successful submission
  if (submitStatus === 'success') {
    setTimeout(() => {
      onClose()
    }, 3000)
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1CompanyName />
      case 2:
        return <Step2ContactPerson />
      case 3:
        return <Step3Email />
      case 4:
        return <Step4Phone />
      case 5:
        return <Step5Website />
      case 6:
        return <Step6Industry />
      case 7:
        return <Step7BoothSize />
      case 8:
        return <Step8Description />
      case 9:
        return <Step9SpecialRequirements />
      case 10:
        return <Step10Confirmation />
      default:
        return <Step1CompanyName />
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-black">
      {renderStep()}
    </div>
  )
}

