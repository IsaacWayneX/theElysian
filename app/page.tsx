"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Users, Globe, Lightbulb, Award, Handshake, TrendingUp, Building2, Palette, Zap, Facebook, Linkedin, Twitter, Instagram, Play, Sparkles, Mail, Phone } from "lucide-react"
import { MultiStepExhibitorForm } from "@/components/multi-step-exhibitor-form"
import { ConsultationModal } from "@/components/consultation-modal"
import { Header } from "@/components/header"
import { ImageCard } from "@/components/image-card"
import { VideoCard } from "@/components/video-card"
import { AdvancedCarousel } from "@/components/advanced-carousel"
import { GridCarousel } from "@/components/grid-carousel"
import { AnimatedSection } from "@/components/animated-section"
import { useState } from "react"

export default function ElysianSummitPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  const openConsultationModal = () => setIsConsultationModalOpen(true)
  const closeConsultationModal = () => setIsConsultationModalOpen(false)

  // Featured Industries from the form
  const featuredIndustries = [
    {
      id: '1',
      title: 'Energy Sector',
      description: 'Revolutionary technologies transforming energy production, distribution, and renewable energy solutions across Nigeria.',
      imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop',
      badge: 'Energy',
      category: 'Innovation'
    },
    {
      id: '2',
      title: 'Real Estate Development',
      description: 'Smart city planning, sustainable housing solutions, and innovative property technologies reshaping urban landscapes.',
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      badge: 'Real Estate',
      category: 'Development'
    },
    {
      id: '3',
      title: 'Fashion & Design',
      description: 'Cutting-edge fashion technology, sustainable textiles, and innovative design solutions from Nigerian creatives.',
      imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
      badge: 'Fashion',
      category: 'Creative'
    },
    {
      id: '4',
      title: 'Banking & Finance',
      description: 'Digital banking solutions, fintech innovations, and blockchain technologies reshaping financial services.',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      badge: 'Banking',
      category: 'Technology'
    },
    {
      id: '5',
      title: 'Creative Industry',
      description: 'Digital media, entertainment technology, and innovative content creation platforms driving cultural innovation.',
      imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
      badge: 'Creative',
      category: 'Media'
    },
    {
      id: '6',
      title: 'Logistics & Supply Chain',
      description: 'Smart logistics solutions, automated warehousing, and supply chain optimization technologies.',
      imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
      badge: 'Logistics',
      category: 'Operations'
    },
    {
      id: '7',
      title: 'Interior Design & Decor',
      description: 'Smart home technologies, sustainable materials, and innovative interior design solutions.',
      imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
      badge: 'Interior',
      category: 'Design'
    },
    {
      id: '8',
      title: 'Smart Technologies',
      description: 'IoT solutions, AI applications, and smart city technologies transforming everyday experiences.',
      imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop',
      badge: 'Smart Tech',
      category: 'Innovation'
    },
    {
      id: '9',
      title: 'Automobile Industry',
      description: 'Electric vehicles, autonomous driving technologies, and sustainable transportation solutions.',
      imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      badge: 'Automobile',
      category: 'Transportation'
    },
    {
      id: '10',
      title: 'Agriculture & AgTech',
      description: 'Precision farming, smart irrigation systems, and sustainable agricultural technologies.',
      imageUrl: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=600&fit=crop',
      badge: 'Agriculture',
      category: 'Sustainability'
    },
    {
      id: '11',
      title: 'Oil & Gas Innovation',
      description: 'Advanced drilling technologies, renewable energy integration, and sustainable extraction methods.',
      imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
      badge: 'Oil & Gas',
      category: 'Energy'
    },
    {
      id: '12',
      title: 'Health & Wellness',
      description: 'Telemedicine platforms, health monitoring devices, and innovative healthcare solutions.',
      imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
      badge: 'Health',
      category: 'Wellness'
    },
    {
      id: '13',
      title: 'Education Technology',
      description: 'E-learning platforms, virtual reality education, and innovative learning management systems.',
      imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
      badge: 'Education',
      category: 'EdTech'
    },
    {
      id: '14',
      title: 'Security & Safety',
      description: 'Cybersecurity solutions, smart surveillance systems, and advanced security technologies.',
      imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      badge: 'Security',
      category: 'Protection'
    },
    {
      id: '15',
      title: 'Emerging Industries',
      description: 'Innovative solutions and breakthrough technologies across diverse sectors and emerging markets.',
      imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop',
      badge: 'Other',
      category: 'Innovation'
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
      imageUrl: '/excellent craftmanship/Image_fx (93).jpg',
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
      imageUrl: '/cross industry collaboration/Image_fx (85).jpg',
      badge: 'Connect',
      category: 'Networking',
      type: 'image' as const
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      <Header onOpenModal={openModal} onOpenConsultationModal={openConsultationModal} />
      
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
         
            </div>

            {/* Enhanced Main Headlines */}
            <div className="text-left space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-tight" style={{ fontFamily: 'var(--font-nohemi)' }}>
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
            <button 
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-10 py-5 text-xl"
              onClick={openModal}
            >
              Become an Exhibitor
            </button>
              <button 
                className="bg-white text-gray-800 border border-gray-300 hover:bg-gray-50 px-10 py-5 text-xl"
                onClick={openConsultationModal}
              >
                Book a Consultation
            </button>
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
        backgroundType="white"
        className="scroll-mt-20"
        id="featured"
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
        backgroundType="white"
        className="scroll-mt-20"
        id="vision"
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
        backgroundType="white"
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
        backgroundType="white"
        className="scroll-mt-20"
        id="objectives"
      >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
            {
              title: "Innovation Showcase",
              description: "Showcase cutting-edge innovations & disruptive technologies.",
              imageUrl: "/innovate collaboration/Image_fx (86).jpg",
              badge: "Innovation"
            },
            {
              title: "Cross-Industry Collaboration",
              description: "Foster cross-industry collaboration and partnerships.",
              imageUrl: "/cross industry collaboration/Image_fx (82).jpg",
              badge: "Collaboration"
            },
            {
              title: "Excellence & Craftsmanship",
              description: "Highlight excellence & craftsmanship across all industries.",
              imageUrl: "/excellent craftmanship/Image_fx (90).jpg",
              badge: "Excellence"
            },
            {
              title: "Sustainable Solutions",
              description: "Promote sustainable & smart solutions for the future.",
              imageUrl: "/innovate collaboration/Image_fx (87).jpg",
              badge: "Sustainability"
            },
            {
              title: "Investment Opportunities",
              description: "Enable investment & business opportunities for growth.",
              imageUrl: "/cross industry collaboration/Image_fx (83).jpg",
              badge: "Investment"
            },
            {
              title: "Digital Transformation",
              description: "Drive digital transformation in traditional sectors.",
              imageUrl: "/excellent craftmanship/Image_fx (91).jpg",
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
        backgroundType="white"
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
            <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
              <div className="w-4 h-4 bg-yellow-500 rounded-full flex-shrink-0 animate-pulse"></div>
                <p className="text-gray-800 text-lg" style={{ fontFamily: 'var(--font-nohemi)' }}>{outcome}</p>
              </div>
            ))}
          </div>
      </AnimatedSection>

      {/* Who Should Attend */}
      <AnimatedSection
        title="Who Should Attend?"
        subtitle="Join the community of visionaries and innovators"
        backgroundType="white"
      >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                title: "Investors",
              description: "Discover the next big opportunity.",
              imageUrl: "/cross industry collaboration/Image_fx (84).jpg",
              badge: "Investment"
              },
              {
                title: "Business Leaders",
              description: "Build strategic partnerships.",
              imageUrl: "/innovate collaboration/Image_fx (88).jpg",
              badge: "Leadership"
              },
              {
                title: "Innovators & Creatives",
              description: "Gain global exposure.",
              imageUrl: "/innovate collaboration/Image_fx (89).jpg",
              badge: "Innovation"
              },
              {
                title: "SMEs & Startups",
              description: "Connect with markets & investors.",
              imageUrl: "/excellent craftmanship/Image_fx (92).jpg",
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
        backgroundType="white"
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
        backgroundType="white"
      >
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-12 py-6 text-xl"
              onClick={openModal}
            >
              Become an Exhibitor
            </button>
            <button 
              className="bg-white text-gray-800 border border-gray-300 hover:bg-gray-50 px-12 py-6 text-xl"
              onClick={openConsultationModal}
            >
              Book a Consultation
            </button>
          </div>
        </div>
      </AnimatedSection>

      {/* Call for Volunteers */}
      <AnimatedSection
        backgroundType="dark"
        className="scroll-mt-20"
        id="volunteers"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8 lg:text-left text-center">
              {/* Main Call to Action */}
              <div>
                <h3 className="text-4xl md:text-5xl font-black text-white mb-6" style={{ fontFamily: 'var(--font-nohemi)' }}>
                  Be Part of Something BIG
                </h3>
                
                {/* Mobile Image - Show only on mobile, between title and body */}
                <div className="lg:hidden flex justify-center mb-8">
                  <div className="relative w-80 h-80 aspect-square">
                    {/* Floating Telephone Animation */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="animate-float">
                        <Image
                          src="/telephoned cropped.png"
                          alt="Vintage Telephone - Call for Volunteers"
                          width={400}
                          height={400}
                          className="drop-shadow-2xl"
                          priority
                        />
                      </div>
                    </div>

                    {/* Animated Fireflies */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      {/* Firefly 1 */}
                      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-yellow-400 rounded-full animate-firefly-1 opacity-80"></div>
                      {/* Firefly 2 */}
                      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-amber-300 rounded-full animate-firefly-2 opacity-70"></div>
                      {/* Firefly 3 */}
                      <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-yellow-300 rounded-full animate-firefly-3 opacity-90"></div>
                      {/* Firefly 4 */}
                      <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-amber-400 rounded-full animate-firefly-4 opacity-75"></div>
                      {/* Firefly 5 */}
                      <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-yellow-500 rounded-full animate-firefly-5 opacity-85"></div>
                      {/* Firefly 6 */}
                      <div className="absolute top-2/3 right-1/6 w-2 h-2 bg-amber-200 rounded-full animate-firefly-6 opacity-80"></div>
                      {/* Firefly 7 */}
                      <div className="absolute bottom-1/2 right-1/2 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-firefly-7 opacity-70"></div>
                      {/* Firefly 8 */}
                      <div className="absolute top-1/6 left-1/2 w-2.5 h-2.5 bg-amber-300 rounded-full animate-firefly-8 opacity-90"></div>
                    </div>
                  </div>
                </div>

                <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8" style={{ fontFamily: 'var(--font-nohemi)' }}>
                  Elysian is hosting the Elysian Summit & Exhibition 2026, a grand showcase of innovation, creativity and enterprise. 
                  We're inviting passionate and reliable individuals to join our Volunteer Team.
                </p>
              </div>

              {/* Call to Action Button */}
              <div>
                <a 
                  href="https://forms.gle/No9x8GcG9igPVqVJ7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 text-lg font-bold transition-all duration-300 hover:scale-105"
                >
                  Join Our Volunteer Team
                </a>
              </div>
            </div>

            {/* Right Side - Image (Desktop only) */}
            <div className="hidden lg:flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg aspect-square">
                {/* Floating Telephone Animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-float">
                    <Image
                      src="/telephoned cropped.png"
                      alt="Vintage Telephone - Call for Volunteers"
                      width={500}
                      height={500}
                      className="drop-shadow-2xl"
                      priority
                    />
                  </div>
                </div>

                {/* Animated Fireflies */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {/* Firefly 1 */}
                  <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-yellow-400 rounded-full animate-firefly-1 opacity-80"></div>
                  {/* Firefly 2 */}
                  <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-amber-300 rounded-full animate-firefly-2 opacity-70"></div>
                  {/* Firefly 3 */}
                  <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-yellow-300 rounded-full animate-firefly-3 opacity-90"></div>
                  {/* Firefly 4 */}
                  <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-amber-400 rounded-full animate-firefly-4 opacity-75"></div>
                  {/* Firefly 5 */}
                  <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-yellow-500 rounded-full animate-firefly-5 opacity-85"></div>
                  {/* Firefly 6 */}
                  <div className="absolute top-2/3 right-1/6 w-2 h-2 bg-amber-200 rounded-full animate-firefly-6 opacity-80"></div>
                  {/* Firefly 7 */}
                  <div className="absolute bottom-1/2 right-1/2 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-firefly-7 opacity-70"></div>
                  {/* Firefly 8 */}
                  <div className="absolute top-1/6 left-1/2 w-2.5 h-2.5 bg-amber-300 rounded-full animate-firefly-8 opacity-90"></div>
                </div>
              </div>
            </div>
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
                <div className="flex items-center justify-center md:justify-start mb-4">
                  <div className="w-16 h-16 relative">
                    <Image
                      src="/ELYSIAN LOGO no background.png"
                      alt="Elysian Summit Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <p className="text-white text-lg" style={{ fontFamily: 'var(--font-nohemi)' }}>Abuja, Nigeria — 2026</p>
                <Badge className="mt-2 bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Coming Soon
                </Badge>
            </div>
              <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-nohemi)' }}>Contact & Inquiries</h3>
                <p className="text-gray-300 mb-2" style={{ fontFamily: 'var(--font-nohemi)' }}>
                  <a href="mailto:theelysiansummitandexhibition@gmail.com" className="hover:text-yellow-400 transition-colors duration-300 flex items-center justify-center md:justify-start gap-2">
                    <Mail className="w-4 h-4" />
                  theelysiansummitandexhibition@gmail.com
                </a>
              </p>
              <p className="text-gray-300" style={{ fontFamily: 'var(--font-nohemi)' }}>
                  <a href="tel:+2348114294274" className="hover:text-yellow-400 transition-colors duration-300 flex items-center justify-center md:justify-start gap-2">
                    <Phone className="w-4 h-4" />
                  +234 8114 294 274
                </a>
              </p>
            </div>
              <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-nohemi)' }}>Follow Us</h3>
                <div className="flex justify-center md:justify-start space-x-4">
                {[
                  { name: "Facebook", icon: Facebook, color: "hover:text-blue-400" },
                  { name: "LinkedIn", icon: Linkedin, color: "hover:text-blue-400" },
                  { name: "Twitter", icon: Twitter, color: "hover:text-blue-400" },
                  { name: "Instagram", icon: Instagram, color: "hover:text-pink-400" }
                ].map((platform) => (
                  <button 
                    key={platform.name} 
                    className={`border border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white w-10 h-10 flex items-center justify-center ${platform.color}`}
                  >
                    <platform.icon className="h-4 w-4" />
                  </button>
                ))}
              </div>
            </div>
          </div>
          
            <Separator className="my-8 bg-gray-700" />
          
          <div className="text-center">
              <p className="text-gray-300 text-lg" style={{ fontFamily: 'var(--font-nohemi)' }}>
                © 2025 The Elysian Summit & Exhibition. All rights reserved.
              </p>
              <p className="text-gray-400 mt-2" style={{ fontFamily: 'var(--font-nohemi)' }}>
                Building the future of innovation
              </p>
            </div>
        </div>
      </footer>
      </AnimatedSection>

      {/* Multi-Step Exhibitor Registration Form */}
      <MultiStepExhibitorForm isOpen={isModalOpen} onClose={closeModal} />
      
      {/* Consultation Modal */}
      <ConsultationModal isOpen={isConsultationModalOpen} onClose={closeConsultationModal} />
    </div>
  )
}
