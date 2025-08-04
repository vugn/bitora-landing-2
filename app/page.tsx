"use client"

import { useState } from 'react'
import { MatrixBackground } from '@/components/background/matrix-background'
import { Navigation } from '@/components/navigation/navigation'
import { HeroSection } from '@/components/sections/hero-section'
import { CodeGenesisSection } from '@/components/sections/code-genesis-section'
import { RoadmapSection } from '@/components/sections/roadmap-section'
import {
  RetailPointSystemSection,
  DeveloperPortalSection,
  WalletNeuralSection,
  NeuralEcosystemSection,
  ExchangeNeuralSection,
  SupportNeuralSection,
  PizzaNeuralExperienceSection
} from '@/components/sections/other-sections'
import { AboutSection, CTASection } from '@/components/sections/additional-sections'
import { Footer } from '@/components/sections/footer'
import { TerminalLoader } from '@/components/loading/terminal-loader'
import { useStats, useRoadmap } from '@/hooks/use-api-data'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  // Configuration for API integration - set to true when ready to use real APIs
  const enableApi = process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_API_ENABLED === 'true'

  // Fetch data using hooks
  const { stats, loading: statsLoading } = useStats(enableApi)
  const { roadmap, loading: roadmapLoading } = useRoadmap(enableApi)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  // Handle section navigation
  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Handle button actions
  const handleButtonClick = (action: string) => {
    switch (action) {
      case 'launch-wallet':
        // Replace with actual wallet launch logic
        console.log('Launch wallet clicked')
        break
      case 'whitepaper':
        // Replace with actual whitepaper URL
        window.open('#', '_blank')
        break
      case 'ecosystem':
        // Replace with actual ecosystem link
        handleSectionClick('neural-ecosystem')
        break
      default:
        console.log(`Action clicked: ${action}`)
    }
  }

  // Handle roadmap phase clicks
  const handlePhaseClick = (phase: any) => {
    // Add custom logic for phase interactions
    console.log('Phase clicked:', phase)
  }

  if (isLoading) {
    return <TerminalLoader onComplete={handleLoadingComplete} />
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background */}
      <MatrixBackground />

      {/* Navigation */}
      <Navigation onSectionClick={handleSectionClick} />

      {/* Hero Section */}
      <HeroSection
        onButtonClick={handleButtonClick}
        customStats={enableApi ? stats : undefined}
      />

      {/* Code Genesis Section */}
      <CodeGenesisSection />

      {/* Roadmap Section */}
      <div id="roadmap">
        <RoadmapSection
          data={enableApi ? roadmap : undefined}
          onPhaseClick={handlePhaseClick}
        />
      </div>

      {/* Other Sections */}
      <RetailPointSystemSection />
      <DeveloperPortalSection />
      <WalletNeuralSection />
      <NeuralEcosystemSection />
      <ExchangeNeuralSection />
      <SupportNeuralSection />
      <PizzaNeuralExperienceSection />

      {/* About Section */}
      <AboutSection onActionClick={handleButtonClick} />

      {/* Call to Action Section */}
      <CTASection onActionClick={handleButtonClick} />

      {/* Footer */}
      <Footer onSectionClick={handleSectionClick} />
    </div>
  )
}
