"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Terminal } from 'lucide-react'
import { siteConfig } from '@/config/site'

interface NavigationProps {
    onSectionClick?: (sectionId: string) => void
}

export function Navigation({ onSectionClick }: NavigationProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (sectionId: string) => {
        if (onSectionClick) {
            onSectionClick(sectionId)
            return
        }

        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setIsMenuOpen(false)
        }
    }

    const handleLogoClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-slate-900/98 backdrop-blur-2xl border-b border-gray-500/30 shadow-lg'
                : 'bg-slate-900/95 backdrop-blur-xl border-b border-gray-500/20'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div
                        className="flex items-center space-x-3 group cursor-pointer"
                        onClick={handleLogoClick}
                    >
                        <div className="relative">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-white/40 transition-all duration-300 group-hover:scale-110">
                                <img
                                    src={siteConfig.navigation.logo.src}
                                    alt={siteConfig.navigation.logo.alt}
                                    className="w-8 h-8"
                                />
                            </div>
                        </div>
                        <span className="text-white font-bold text-lg sm:text-xl font-mono group-hover:text-white transition-colors duration-300">
                            <span className="hidden sm:inline">{siteConfig.navigation.logo.text.desktop}</span>
                            <span className="sm:hidden">{siteConfig.navigation.logo.text.mobile}</span>
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
                        {siteConfig.navigation.items.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="relative px-3 py-2 text-white hover:text-white transition-all duration-300 font-mono text-sm group overflow-hidden rounded-lg"
                            >
                                <span className="relative z-10">{item.label}</span>
                                <div className="absolute inset-0 bg-gray-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></div>
                            </button>
                        ))}
                        <div className="ml-4">
                            <Button className="bg-green-600 hover:bg-green-700 text-white font-mono text-sm px-4 py-2 shadow-lg transition-all duration-300 hover:scale-105">
                                <Terminal className="mr-1 h-4 w-4" />
                                <span className="hidden lg:inline">Launch Wallet</span>
                                <span className="lg:hidden">Wallet</span>
                            </Button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2 rounded-lg hover:bg-slate-800/50 transition-colors duration-300"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <div className="relative w-5 h-5">
                            <span className={`absolute block w-5 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
                                }`}></span>
                            <span className={`absolute block w-5 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'
                                }`}></span>
                            <span className={`absolute block w-5 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
                                }`}></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 py-4' : 'max-h-0'
                    }`}>
                    <div className="border-t border-slate-700/50">
                        <div className="flex flex-col space-y-1 pt-4">
                            {siteConfig.navigation.items.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="flex items-center text-white hover:text-white hover:bg-slate-800/30 transition-all duration-300 font-mono text-sm py-3 px-2 rounded-lg text-left"
                                >
                                    <span>{item.label}</span>
                                </button>
                            ))}
                            <Button className="bg-green-600 hover:bg-green-700 text-white w-full font-mono mt-3">
                                <Terminal className="mr-2 h-4 w-4" />
                                Launch Wallet
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
