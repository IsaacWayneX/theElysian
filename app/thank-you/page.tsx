"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, Home, Sparkles } from "lucide-react"
import { ZigzagUnderline } from "@/components/svg-zigzag-underline"
import { SVGStars } from "@/components/svg-stars"
import Image from "next/image"
import Link from "next/link"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl animate-pulse animation-delay-2000" />
      </div>

      {/* Content Container */}
      <div className="w-full max-w-4xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between py-8 md:py-12 relative z-10">
        {/* Left Side - Text Content */}
        <div className="flex-1 max-w-2xl w-full md:max-w-2xl text-center md:text-left">
          <div className="space-y-8 md:space-y-12">
            {/* Success Icon */}
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-yellow-500/20 rounded-full flex items-center justify-center border-2 border-yellow-500/30">
                  <CheckCircle className="w-12 h-12 md:w-16 md:h-16 text-yellow-500" />
                </div>
                <div className="absolute -top-2 -right-2">
                  <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
                </div>
              </div>
            </div>

            {/* Title with Zigzag Underline */}
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight" style={{ fontFamily: 'var(--font-nohemi)' }}>
                Thank You!
              </h1>
              <ZigzagUnderline className="w-full" />
            </div>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 font-bold" style={{ fontFamily: 'var(--font-nohemi)' }}>
              Your payment has been successfully processed.
            </p>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
                We're thrilled to have you join us at The Elysian Innovation Exhibition. Your invoice has been paid and your booth reservation is confirmed.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-500">
                You'll receive a confirmation email with all the details shortly. We can't wait to showcase your innovations!
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-8">
              <Link href="/">
                <Button className="w-full sm:w-auto bg-yellow-600 hover:bg-yellow-700 text-black px-8 py-4 text-lg md:text-xl font-bold flex items-center justify-center gap-3 rounded-none border-0 transition-all duration-300 hover:scale-105">
                  <Home className="w-5 h-5 md:w-6 md:h-6" />
                  Return to Home
                </Button>
              </Link>
              <Link href="/#contact">
                <Button className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg md:text-xl font-bold rounded-none bg-transparent transition-all duration-300 hover:scale-105">
                  Contact Us
                </Button>
              </Link>
            </div>

            {/* Additional Info */}
            <div className="pt-8 border-t border-gray-800">
              <p className="text-sm text-gray-600">
                Need help? Contact our support team at{" "}
                <a href="mailto:support@theelysian.com" className="text-yellow-500 hover:text-yellow-400 transition-colors">
                  support@theelysian.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Image - Hidden on Mobile */}
        <div className="hidden md:flex flex-1 max-w-lg md:ml-16 relative w-full">
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=800&fit=crop"
              alt="Success and celebration"
              width={600}
              height={600}
              className="object-cover w-full h-auto rounded-lg shadow-2xl"
            />
            <SVGStars />
            {/* Success Badge Overlay */}
            <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
              <CheckCircle className="w-4 h-4" />
              Paid
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-yellow-500/20 animate-bounce animation-delay-500">
        <Sparkles className="w-8 h-8" />
      </div>
      <div className="absolute bottom-20 right-10 text-yellow-500/20 animate-bounce animation-delay-1000">
        <Sparkles className="w-6 h-6" />
      </div>
      <div className="absolute top-1/2 left-10 text-yellow-500/20 animate-bounce animation-delay-2000">
        <Sparkles className="w-4 h-4" />
      </div>
    </div>
  )
}
