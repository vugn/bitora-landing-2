"use client"

import { siteConfig } from '@/config/site'

interface FooterProps {
    onSectionClick?: (sectionId: string) => void
    customSocial?: typeof siteConfig.social
}

export function Footer({ onSectionClick, customSocial }: FooterProps) {
    const social = customSocial || siteConfig.social

    const scrollToSection = (sectionId: string) => {
        if (onSectionClick) {
            onSectionClick(sectionId)
            return
        }

        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="relative bg-slate-900/95 border-t border-gray-500/20 py-16 px-4 sm:px-6 lg:px-8">
            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Logo and Description */}
                    <div className="md:col-span-1">
                        <div className="flex items-center space-x-2 mb-4 cursor-pointer group" onClick={scrollToTop}>
                            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-white/25 transition-all duration-300">
                                <img src={siteConfig.navigation.logo.src} alt={siteConfig.navigation.logo.alt} className="w-6 h-6 sm:w-8 sm:h-8" />
                            </div>
                            <span className="text-white font-bold text-base sm:text-xl font-mono group-hover:text-white transition-colors duration-300">
                                <span className="hidden sm:inline">{siteConfig.navigation.logo.text.desktop}</span>
                                <span className="sm:hidden">{siteConfig.navigation.logo.text.mobile}</span>
                            </span>
                        </div>
                        <p className="text-slate-400 text-sm font-mono leading-relaxed mb-6">
                            {siteConfig.description}
                        </p>
                    </div>

                    {/* Platform Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 font-mono">Platform</h3>
                        <ul className="space-y-2 text-white">
                            {siteConfig.footer.sections.platform.map((item) => (
                                <li key={item.id}>
                                    <button
                                        onClick={() => scrollToSection(item.id)}
                                        className="hover:text-white transition-all font-mono text-left w-full text-sm hover:translate-x-1 duration-300"
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 font-mono">Services</h3>
                        <ul className="space-y-2 text-white">
                            {siteConfig.footer.sections.services.map((item) => (
                                <li key={item.id}>
                                    <button
                                        onClick={() => scrollToSection(item.id)}
                                        className="hover:text-white transition-all font-mono text-left w-full text-sm hover:translate-x-1 duration-300"
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 font-mono">Resources</h3>
                        <ul className="space-y-2 text-white">
                            <li><a href="#" className="hover:text-white transition-all font-mono text-sm hover:translate-x-1 duration-300 block">Documentation</a></li>
                            <li><a href="#" className="hover:text-white transition-all font-mono text-sm hover:translate-x-1 duration-300 block">GitHub</a></li>
                            <li><a href="#" className="hover:text-white transition-all font-mono text-sm hover:translate-x-1 duration-300 block">API Reference</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-white font-mono text-sm mb-4 sm:mb-0">
                        {siteConfig.footer.copyright}
                    </p>
                    <div className="flex space-x-6 text-white font-mono text-sm">
                        <a href={social.telegram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            Telegram
                        </a>
                        <a href={social.discord} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            Discord
                        </a>
                        <a href={social.medium} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            Medium
                        </a>
                        <a href={social.reddit} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            Reddit
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
