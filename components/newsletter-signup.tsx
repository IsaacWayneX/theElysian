"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Mail, CheckCircle } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setIsLoading(false)
    setEmail("")
  }

  if (isSubmitted) {
    return (
      <Card className="p-8 max-w-md mx-auto bg-card/90 backdrop-blur-sm border border-primary/20">
        <div className="text-center">
          <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">Thank You!</h3>
          <p className="text-muted-foreground">
            You've been added to our exclusive list. We'll be in touch soon with exciting updates.
          </p>
        </div>
      </Card>
    )
  }

  return (
    <Card className="p-8 max-w-md mx-auto bg-card/90 backdrop-blur-sm border border-primary/20">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center space-x-2 mb-4">
          <Mail className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium text-foreground">Exclusive Updates</span>
        </div>

        <div className="space-y-3">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-background/50 border-border/50 focus:border-primary"
          />

          <Button type="submit" className="w-full rounded-full font-semibold" disabled={isLoading}>
            {isLoading ? "Joining..." : "Join the Waitlist"}
          </Button>
        </div>

        <p className="text-xs text-muted-foreground text-center">We respect your privacy. Unsubscribe at any time.</p>
      </form>
    </Card>
  )
}
