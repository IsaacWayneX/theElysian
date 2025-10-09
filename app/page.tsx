"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Users, Globe, Lightbulb, Award, Handshake, TrendingUp, Building2, Palette, Zap, Facebook, Linkedin, Twitter, Instagram, Play, Star, Sparkles, Mail, Phone } from "lucide-react"
import { ExhibitorRegistrationModal } from "@/components/exhibitor-registration-modal"
import { Header } from "@/components/header"
import { ImageCard } from "@/components/image-card"
import { VideoCard } from "@/components/video-card"
import { AdvancedCarousel } from "@/components/advanced-carousel"
import { GridCarousel } from "@/components/grid-carousel"
import { AnimatedSection } from "@/components/animated-section"
import { useState } from "react"

export default function ElysianSummitPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  // Sample data for carousels and cards
  const featuredIndustries = [
    {
      id: '1',
      title: 'Oil & Gas Innovation',
      description: 'Revolutionary technologies transforming energy production and distribution across Nigeria.',
      imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
      badge: 'Energy',
      category: 'Innovation'
    },
    {
      id: '2',
      title: 'Fintech Revolution',
      description: 'Digital banking solutions and blockchain technologies reshaping financial services.',
      imageUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop',
      badge: 'Finance',
      category: 'Technology'
    },
    {
      id: '3',
      title: 'Smart Construction',
      description: 'AI-powered building technologies and sustainable construction methods.',
      imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop',
      badge: 'Construction',
      category: 'Smart Tech'
    }
  ]

  const showcaseVideos = [
    {
      id: '1',
      title: 'The Future of Innovation',
      description: 'Experience cutting-edge technologies that are reshaping industries across Nigeria and beyond.',
      videoUrl: 'https://res.cloudinary.com/dgxz2wk78/video/upload/v1760018735/3975494-hd_1920_1080_24fps_jfxnfm.mp4',
      badge: 'Featured',
      category: 'Innovation'
    },
    {
      id: '2',
      title: 'Sustainable Development',
      description: 'Discover how green technologies are creating a more sustainable future for our cities.',
      videoUrl: 'https://res.cloudinary.com/dgxz2wk78/video/upload/v1760018735/3975494-hd_1920_1080_24fps_jfxnfm.mp4',
      badge: 'Sustainability',
      category: 'Green Tech'
    }
  ]

  const experienceCards = [
    {
      id: '1',
      title: 'Live Demonstrations',
      description: 'Interactive showcases of cutting-edge technologies and innovative solutions.',
      imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop',
      badge: 'Interactive',
      category: 'Experience',
      type: 'image' as const
    },
    {
      id: '2',
      title: 'Expert Panels',
      description: 'Thought-provoking discussions with industry leaders and visionaries.',
      videoUrl: 'https://res.cloudinary.com/dgxz2wk78/video/upload/v1760018735/3975494-hd_1920_1080_24fps_jfxnfm.mp4',
      badge: 'Knowledge',
      category: 'Learning',
      type: 'video' as const
    },
    {
      id: '3',
      title: 'Networking Hub',
      description: 'Connect with like-minded professionals and potential business partners.',
      imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      badge: 'Connect',
      category: 'Networking',
      type: 'image' as const
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      <Header onOpenModal={openModal} />
      
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden pt-20">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://res.cloudinary.com/dgxz2wk78/video/upload/v1760018735/3975494-hd_1920_1080_24fps_jfxnfm.mp4" type="video/mp4" />
          </video>
          {/* Enhanced overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
        </div>
        
        {/* Enhanced Ambient Lighting */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-yellow-900/20 to-slate-900/60">
          {/* Multiple gold ambient lighting effects */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl animate-pulse animation-delay-500"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-yellow-500/8 via-amber-500/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-yellow-400/10 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-ping animation-delay-2000"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-amber-400 rounded-full animate-ping animation-delay-500"></div>
          <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-yellow-300 rounded-full animate-ping animation-delay-1000"></div>
        </div>

        {/* Enhanced Text Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 pb-8">
          <div className="space-y-8">
            {/* Enhanced Badge */}
            <div className="flex justify-start">
              <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30 hover:bg-yellow-500/30 px-6 py-3 rounded-full text-sm font-medium backdrop-blur-sm shadow-lg">
                <Sparkles className="w-4 h-4 mr-2" />
            Capital City Showcase 2026
          </Badge>
            </div>

            {/* Enhanced Main Headlines */}
            <div className="text-left space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-tight gold-glow" style={{ fontFamily: 'var(--font-nohemi)' }}>
            The Elysian Summit & Exhibition
          </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-yellow-200 flex items-center gap-3" style={{ fontFamily: 'var(--font-nohemi)' }}>
                <Play className="w-8 h-8 text-yellow-400" />
            Coming Soon
          </h2>
            </div>
          
            {/* Enhanced Subheadline */}
            <div className="text-left">
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-5xl font-medium" style={{ fontFamily: 'var(--font-nohemi)' }}>
            Capital City Showcase 2026: Forging The Future – Innovation, Excellence, Legacy.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-start">
            <Button 
              size="lg" 
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-10 py-5 text-xl rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(234,179,8,0.8)] flex items-center gap-3 gold-border-glow"
              onClick={openModal}
            >
                <Star className="w-6 h-6" />
              Become an Exhibitor
                <ArrowRight className="w-6 h-6" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-yellow-500/50 text-yellow-300 hover:bg-yellow-500/10 hover:text-yellow-200 px-10 py-5 text-xl rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]"
              >
                Book a Consultation
            </Button>
            </div>

            {/* Enhanced Tagline */}
            <div className="text-left">
              <p className="text-base text-gray-300 font-medium" style={{ fontFamily: 'var(--font-nohemi)' }}>
                The Elysian Summit & Exhibition » Building the future of innovation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Industries Carousel */}
      <AnimatedSection
        title="Featured Industries"
        subtitle="Discover the cutting-edge innovations transforming Nigeria's key sectors"
        backgroundType="gradient"
        className="scroll-mt-20"
      >
        <AdvancedCarousel
          items={featuredIndustries}
          autoPlay={true}
          autoPlayInterval={6000}
        />
      </AnimatedSection>

      {/* Vision & Mission with Video Cards */}
      <AnimatedSection
        title="Our Guiding Purpose"
        subtitle="Building the future through innovation and collaboration"
        backgroundType="gradient"
        className="scroll-mt-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <VideoCard
            title="Our Vision"
            description="To be the world's premier platform celebrating groundbreaking innovations, technologies, and craftsmanship that shape a smarter, sustainable future."
            videoUrl="https://res.cloudinary.com/dgxz2wk78/video/upload/v1760018735/3975494-hd_1920_1080_24fps_jfxnfm.mp4"
            badge="Vision"
            category="Purpose"
          />
          <VideoCard
            title="Our Mission"
            description="To unite visionary leaders, pioneers, and creatives from diverse industries to share transformative ideas, showcase breakthrough innovations, and foster impactful collaborations."
            videoUrl="https://res.cloudinary.com/dgxz2wk78/video/upload/v1760018735/3975494-hd_1920_1080_24fps_jfxnfm.mp4"
            badge="Mission"
            category="Purpose"
          />
        </div>
      </AnimatedSection>

      {/* Theme 2026 with Showcase Videos */}
      <AnimatedSection
        title="Capital City Showcase 2026 – Forging the Future"
        subtitle="This year's edition celebrates Abuja as a hub where tradition meets modernity. From renewable energy & smart tech to oil & gas, real estate, construction, fashion, interior décor, and creative enterprise, the showcase positions Abuja as a true marketplace of ideas, partnerships, and innovation."
        backgroundType="gradient"
      >
        <GridCarousel
          items={showcaseVideos.map(item => ({ ...item, type: 'video' as const }))}
          itemsPerView={2}
        />
      </AnimatedSection>

      {/* Key Objectives with Image Cards */}
      <AnimatedSection
        title="Summit & Exhibition Objectives"
        subtitle="Driving innovation and excellence across all sectors"
        backgroundType="gradient"
        className="scroll-mt-20"
      >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
            {
              title: "Innovation Showcase",
              description: "Showcase cutting-edge innovations & disruptive technologies.",
              imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
              badge: "Innovation"
            },
            {
              title: "Cross-Industry Collaboration",
              description: "Foster cross-industry collaboration and partnerships.",
              imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop",
              badge: "Collaboration"
            },
            {
              title: "Excellence & Craftsmanship",
              description: "Highlight excellence & craftsmanship across all industries.",
              imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
              badge: "Excellence"
            },
            {
              title: "Sustainable Solutions",
              description: "Promote sustainable & smart solutions for the future.",
              imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop",
              badge: "Sustainability"
            },
            {
              title: "Investment Opportunities",
              description: "Enable investment & business opportunities for growth.",
              imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop",
              badge: "Investment"
            },
            {
              title: "Digital Transformation",
              description: "Drive digital transformation in traditional sectors.",
              imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
              badge: "Digital"
            }
            ].map((objective, index) => (
            <ImageCard
              key={index}
              title={objective.title}
              description={objective.description}
              imageUrl={objective.imageUrl}
              badge={objective.badge}
              category={`Objective ${index + 1}`}
            />
          ))}
        </div>
      </AnimatedSection>

      {/* What to Expect */}
      <AnimatedSection
        title="What to Expect"
        subtitle="Transformative outcomes and lasting impact"
        backgroundType="gradient"
      >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
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
            <div key={index} className="flex items-center space-x-4 p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-primary/20">
              <div className="w-4 h-4 bg-primary rounded-full flex-shrink-0 animate-pulse"></div>
                <p className="text-foreground text-lg" style={{ fontFamily: 'var(--font-nohemi)' }}>{outcome}</p>
              </div>
            ))}
          </div>
      </AnimatedSection>

      {/* Who Should Attend */}
      <AnimatedSection
        title="Who Should Attend?"
        subtitle="Join the community of visionaries and innovators"
        backgroundType="gradient"
      >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                title: "Investors",
              description: "Discover the next big opportunity.",
              imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop",
              badge: "Investment"
              },
              {
                title: "Business Leaders",
              description: "Build strategic partnerships.",
              imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop",
              badge: "Leadership"
              },
              {
                title: "Innovators & Creatives",
              description: "Gain global exposure.",
              imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
              badge: "Innovation"
              },
              {
                title: "SMEs & Startups",
              description: "Connect with markets & investors.",
              imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
              badge: "Growth"
              }
            ].map((audience, index) => (
            <ImageCard
              key={index}
              title={audience.title}
              description={audience.description}
              imageUrl={audience.imageUrl}
              badge={audience.badge}
              category="Attendee"
            />
          ))}
        </div>
      </AnimatedSection>

      {/* Immersive Event Experiences */}
      <AnimatedSection
        title="Immersive Event Experiences"
        subtitle="Engage with cutting-edge technologies and innovative solutions"
        backgroundType="gradient"
      >
        <GridCarousel
          items={experienceCards}
          itemsPerView={3}
        />
      </AnimatedSection>

      {/* Final CTA */}
      <AnimatedSection
        title="Be Part of the Future"
        subtitle="Celebrate excellence. Elevate ideas. Shape the future at The Elysian Summit & Exhibition."
        backgroundType="gradient"
      >
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-12 py-6 text-xl rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(234,179,8,0.8)] flex items-center gap-3 gold-border-glow"
              onClick={openModal}
            >
              <Star className="w-6 h-6" />
              Become an Exhibitor
              <ArrowRight className="w-6 h-6" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-yellow-500/50 text-yellow-300 hover:bg-yellow-500/10 hover:text-yellow-200 px-12 py-6 text-xl rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]"
            >
              Book a Consultation
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* Enhanced Footer */}
      <AnimatedSection
        backgroundType="none"
        className="scroll-mt-20 bg-black"
      >
        <footer id="contact" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
              <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-gold-gradient mb-4" style={{ fontFamily: 'var(--font-nohemi)' }}>Event Details</h3>
                <p className="text-foreground text-lg" style={{ fontFamily: 'var(--font-nohemi)' }}>Abuja, Nigeria — 2026</p>
                <Badge className="mt-2 bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Coming Soon
                </Badge>
            </div>
              <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-gold-gradient mb-4" style={{ fontFamily: 'var(--font-nohemi)' }}>Contact & Inquiries</h3>
                <p className="text-foreground mb-2" style={{ fontFamily: 'var(--font-nohemi)' }}>
                  <a href="mailto:theelysiansummitandexhibition@gmail.com" className="hover:text-primary transition-colors duration-300 flex items-center justify-center md:justify-start gap-2">
                    <Mail className="w-4 h-4" />
                  theelysiansummitandexhibition@gmail.com
                </a>
              </p>
              <p className="text-foreground" style={{ fontFamily: 'var(--font-nohemi)' }}>
                  <a href="tel:+2348114294274" className="hover:text-primary transition-colors duration-300 flex items-center justify-center md:justify-start gap-2">
                    <Phone className="w-4 h-4" />
                  +234 8114 294 274
                </a>
              </p>
            </div>
              <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-gold-gradient mb-4" style={{ fontFamily: 'var(--font-nohemi)' }}>Follow Us</h3>
                <div className="flex justify-center md:justify-start space-x-4">
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
                      className={`border-primary/30 text-primary hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110 ${platform.color} rounded-full w-10 h-10`}
                  >
                    <platform.icon className="h-4 w-4" />
                  </Button>
                ))}
              </div>
            </div>
          </div>
          
            <Separator className="my-8 bg-primary/20" />
          
          <div className="text-center">
              <p className="text-foreground text-lg" style={{ fontFamily: 'var(--font-nohemi)' }}>
                © 2025 The Elysian Summit & Exhibition. All rights reserved.
              </p>
              <p className="text-muted-foreground mt-2" style={{ fontFamily: 'var(--font-nohemi)' }}>
                Building the future of innovation
              </p>
            </div>
        </div>
      </footer>
      </AnimatedSection>

      {/* Exhibitor Registration Modal */}
      <ExhibitorRegistrationModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}
