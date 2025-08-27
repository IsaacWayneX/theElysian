"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Users, Globe, Lightbulb, Award, Handshake, TrendingUp, Building2, Palette, Zap, Facebook, Linkedin, Twitter, Instagram } from "lucide-react"
import { ExhibitorRegistrationModal } from "@/components/exhibitor-registration-modal"
import { useState } from "react"

export default function ElysianSummitPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video/Image Montage */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('/elegant-luxury-venue-with-marble-columns-and-cryst.png')`,
          }}
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Badge */}
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 px-4 py-2">
            Capital City Showcase 2026
          </Badge>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 tracking-tight text-gold-gradient gold-glow">
            The Elysian Summit & Exhibition
          </h1>
          <h2 className="text-2xl md:text-4xl font-serif font-light text-foreground mb-4 gold-glow">
            Coming Soon
          </h2>
          <h3 className="text-xl md:text-2xl font-serif font-light text-foreground mb-6 gold-glow">
            Elevating Ideas & Celebrating Innovation
          </h3>
          
          {/* Subheadline */}
          <h2 className="text-xl md:text-3xl font-serif font-light text-foreground mb-8 gold-glow">
            Capital City Showcase 2026: Forging The Future – Innovation, Excellence, Legacy.
          </h2>

          {/* CTA */}
          <div className="flex justify-center items-center mb-8">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 hover:text-primary px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] hover:shadow-primary"
              onClick={openModal}
            >
              Become an Exhibitor
            </Button>
          </div>
        </div>

        {/* Ambient gold glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </section>

      {/* About the Summit */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 text-gold-gradient">
              Welcome to The Elysian Summit & Exhibition
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                A premier showcase of innovation, technology, excellence, and craftsmanship across diverse industries. From oil and gas to banking, fashion to logistics, real estate & construction to smart technologies, this immersive event unites trailblazers, disruptors, and visionaries shaping the industries of tomorrow.
              </p>
              <p className="text-lg md:text-xl font-semibold text-primary">
                It's more than an event — it's an experience where tradition meets technology, and innovation drives every conversation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-16 text-center text-gold-gradient">
            Our Guiding Purpose
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 bg-card/90 backdrop-blur-sm border-primary/20">
              <div className="text-center">
                <Globe className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-serif font-bold mb-4">Vision</h3>
                <p className="text-foreground leading-relaxed">
                  To be the world's premier platform celebrating groundbreaking innovations, technologies, and craftsmanship that shape a smarter, sustainable future.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-card/90 backdrop-blur-sm border-primary/20">
              <div className="text-center">
                <Handshake className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-serif font-bold mb-4">Mission</h3>
                <p className="text-foreground leading-relaxed">
                  To unite visionary leaders, pioneers, and creatives from diverse industries to share transformative ideas, showcase breakthrough innovations, and foster impactful collaborations.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Theme 2026 */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 text-gold-gradient">
            Capital City Showcase 2026 – Forging the Future
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
              This year's edition celebrates Abuja as a hub where tradition meets modernity. From renewable energy & smart tech to oil & gas, real estate, construction, fashion, interior décor, and creative enterprise, the showcase positions Abuja as a true marketplace of ideas, partnerships, and innovation.
            </p>

          </div>
        </div>
      </section>

      {/* Key Objectives */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-16 text-center text-gold-gradient">
            Summit & Exhibition Objectives
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Showcase cutting-edge innovations & disruptive technologies.",
              "Foster cross-industry collaboration.",
              "Highlight excellence & craftsmanship.",
              "Promote sustainable & smart solutions.",
              "Enable investment & business opportunities.",
              "Drive digital transformation in traditional sectors.",
              "Inspire through expert-led sessions.",
              "Support SMEs & local talent.",
              "Facilitate global networking & expansion."
            ].map((objective, index) => (
              <Card key={index} className="p-6 bg-card/90 backdrop-blur-sm border-primary/20">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-foreground">{objective}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-16 text-center text-gold-gradient">
            What to Expect
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Strategic partnerships & collaborations.",
              "Visibility for innovative products/services.",
              "Investment opportunities & funding deals.",
              "Knowledge sharing & policy insights.",
              "Recognition for local & indigenous innovation.",
              "Global networking & market expansion.",
              "Launchpad for new products & ideas.",
              "Establishment of Abuja as a multi-industry innovation hub."
            ].map((outcome, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                <p className="text-foreground text-lg">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Attend */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-16 text-center text-gold-gradient">
            Who Should Attend?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Investors",
                description: "Discover the next big opportunity."
              },
              {
                title: "Business Leaders",
                description: "Build strategic partnerships."
              },
              {
                title: "Innovators & Creatives",
                description: "Gain global exposure."
              },
              {
                title: "SMEs & Startups",
                description: "Connect with markets & investors."
              }
            ].map((audience, index) => (
              <Card key={index} className="p-6 bg-card/90 backdrop-blur-sm border-primary/20 text-center">
                <h3 className="text-xl font-serif font-bold mb-3">{audience.title}</h3>
                <p className="text-foreground">{audience.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Experiences */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-16 text-center text-gold-gradient">
            Immersive Event Experiences
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Live Demonstrations", icon: Zap },
              { title: "Curated Design Spaces", icon: Palette },
              { title: "Interactive Showcases", icon: Award },
              { title: "Expert Panels & Workshops", icon: Users }
            ].map((experience, index) => (
              <Card key={index} className="p-6 bg-card/90 backdrop-blur-sm border-primary/20 text-center">
                <experience.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-serif font-bold">{experience.title}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 text-gold-gradient">
            Be Part of the Future
          </h2>
          <p className="text-xl text-foreground mb-8">
            Celebrate excellence. Elevate ideas. Shape the future at The Elysian Summit & Exhibition.
          </p>
          
          <div className="flex justify-center items-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 hover:text-primary px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] hover:shadow-primary"
              onClick={openModal}
            >
              Become an Exhibitor
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-card/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-gold-gradient mb-4">Event Details</h3>
              <p className="text-foreground">Abuja, Nigeria — 2026</p>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-gold-gradient mb-4">Contact & Inquiries</h3>
              <p className="text-foreground">info@elysiansummit.ng</p>
              <p className="text-foreground">+234 XXX XXX XXXX</p>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-gold-gradient mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {[
                  { name: "Facebook", icon: Facebook, color: "hover:text-blue-500" },
                  { name: "LinkedIn", icon: Linkedin, color: "hover:text-blue-600" },
                  { name: "Twitter", icon: Twitter, color: "hover:text-blue-400" },
                  { name: "Instagram", icon: Instagram, color: "hover:text-pink-500" }
                ].map((platform) => (
                  <Button 
                    key={platform.name} 
                    variant="outline" 
                    size="sm" 
                    className={`border-primary/30 text-primary hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110 ${platform.color}`}
                  >
                    <platform.icon className="h-4 w-4" />
                  </Button>
                ))}
              </div>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="text-center">
                          <p className="text-foreground">© 2025 The Elysian Summit & Exhibition. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Exhibitor Registration Modal */}
      <ExhibitorRegistrationModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}
