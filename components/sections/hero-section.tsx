"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Terminal, FileText, Network } from 'lucide-react'
import { LiveStats } from '@/components/stats/live-stats'
import { siteConfig } from '@/config/site'

interface HeroSectionProps {
    onButtonClick?: (action: string) => void
    customStats?: any
    customContent?: {
        title?: string
        taglines?: string[]
        buttons?: Array<{
            text: string
            icon: string
            variant: string
            action: string
        }>
    }
}

const iconMap = {
    Terminal,
    FileText,
    Network
}

export function HeroSection({ onButtonClick, customStats, customContent }: HeroSectionProps) {
    const content = customContent || siteConfig.hero
    const statusText = siteConfig.hero.statusText

    const handleButtonClick = (action: string) => {
        if (onButtonClick) {
            onButtonClick(action)
        } else {
            // Default actions
            switch (action) {
                case 'launch-wallet':
                    window.open('#', '_blank')
                    break
                case 'whitepaper':
                    window.open('#', '_blank')
                    break
                case 'ecosystem':
                    window.open('#', '_blank')
                    break
            }
        }
    }

    const getButtonStyles = (variant: string) => {
        switch (variant) {
            case 'primary':
                return "w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white border-0"
            case 'secondary':
                return "w-full sm:w-auto bg-slate-800/80 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900"
            case 'tertiary':
                return "w-full sm:w-auto bg-slate-800/80 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
            default:
                return "w-full sm:w-auto bg-gray-600 hover:bg-gray-700 text-white"
        }
    }

    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
            <div className="relative z-10 max-w-7xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Status Text */}
                    <div className="mb-4 sm:mb-6">
                        <div className="text-xs sm:text-sm text-blue-400 font-mono mb-1 sm:mb-2">
                            <span className="hidden sm:inline">[PROTOCOL INITIALIZATION COMPLETE]</span>
                            <span className="sm:hidden">[PROTOCOL ONLINE]</span>
                        </div>
                        <div className="text-xs text-slate-400 font-mono">
                            <span className="hidden sm:inline">
                                {statusText.desktop} <span className="text-green-400">ONLINE</span>
                            </span>
                            <span className="sm:hidden">
                                {statusText.mobile} <span className="text-green-400">ONLINE</span>
                            </span>
                        </div>
                    </div>

                    {/* Main Title */}
                    <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold text-white mb-4 sm:mb-6 font-mono leading-tight">
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            {customContent?.title || siteConfig.name}
                        </span>
                    </h1>

                    {/* Taglines */}
                    <div className="text-base sm:text-xl lg:text-2xl text-slate-300 mb-6 sm:mb-8 max-w-4xl mx-auto font-mono leading-relaxed px-2">
                        {(content.taglines || siteConfig.hero.taglines).map((tagline, index) => (
                            <span
                                key={index}
                                className={`block ${index < 2 ? 'text-white' :
                                        index === 2 ? 'text-slate-300' : 'text-blue-400'
                                    } ${index === 1 ? 'mb-4' : index === 2 ? 'sm:inline' : 'mt-2'}`}
                            >
                                {tagline}
                            </span>
                        ))}
                    </div>

                    {/* Live Stats */}
                    <LiveStats data={customStats} />

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 max-w-4xl mx-auto">
                        {(content.buttons || siteConfig.hero.buttons).map((button, index) => {
                            const IconComponent = iconMap[button.icon as keyof typeof iconMap]
                            return (
                                <Button
                                    key={index}
                                    size="lg"
                                    className={`${getButtonStyles(button.variant)} px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-mono shadow-lg hover:shadow-xl transition-all`}
                                    onClick={() => handleButtonClick(button.action)}
                                >
                                    {IconComponent && <IconComponent className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />}
                                    {button.text}
                                </Button>
                            )
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
