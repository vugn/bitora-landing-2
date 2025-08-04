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
            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-14 sm:h-16">
                    {/* Logo */}
                    <div
                        className="flex items-center space-x-2 sm:space-x-3 group cursor-pointer flex-shrink-0"
                        onClick={handleLogoClick}
                    >
                        <div className="relative">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-white/40 transition-all duration-300 group-hover:scale-110">
                                <img
                                    src={siteConfig.navigation.logo.src}
                                    alt={siteConfig.navigation.logo.alt}
                                    className="w-6 h-6 sm:w-8 sm:h-8"
                                />
                            </div>
                        </div>
                        <span className="text-white font-bold text-sm sm:text-lg md:text-xl font-mono group-hover:text-white transition-colors duration-300 truncate">
                            <span className="hidden sm:inline">{siteConfig.navigation.logo.text.desktop}</span>
                            <span className="sm:hidden">{siteConfig.navigation.logo.text.mobile}</span>
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1 lg:space-x-2 flex-shrink-0">
                        {siteConfig.navigation.items.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="relative px-2 lg:px-3 py-2 text-white hover:text-white transition-all duration-300 font-mono text-xs lg:text-sm group overflow-hidden rounded-lg whitespace-nowrap"
                            >
                                <span className="relative z-10">{item.label}</span>
                                <div className="absolute inset-0 bg-gray-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></div>
                            </button>
                        ))}
                        <div className="ml-2 lg:ml-4">
                            <Button className="bg-green-600 hover:bg-green-700 text-white font-mono text-xs lg:text-sm px-3 lg:px-4 py-2 shadow-lg transition-all duration-300 hover:scale-105">
                                <Terminal className="mr-1 h-3 w-3 lg:h-4 lg:w-4" />
                                <span className="hidden lg:inline">Launch Wallet</span>
                                <span className="lg:hidden">Wallet</span>
                            </Button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-1.5 sm:p-2 rounded-lg hover:bg-slate-800/50 transition-colors duration-300 flex-shrink-0"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle mobile menu"
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
                <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    <div className="border-t border-slate-700/50 mt-2">
                        <div className="flex flex-col space-y-1 py-3">
                            {siteConfig.navigation.items.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="flex items-center text-white hover:text-white hover:bg-slate-800/30 transition-all duration-300 font-mono text-sm py-2.5 px-3 rounded-lg text-left w-full"
                                >
                                    <span>{item.label}</span>
                                </button>
                            ))}
                            <div className="pt-2">
                                <Button className="bg-green-600 hover:bg-green-700 text-white w-full font-mono text-sm py-3">
                                    <Terminal className="mr-2 h-4 w-4" />
                                    Launch Wallet
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
