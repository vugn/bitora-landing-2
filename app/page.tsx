"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Play,
  FileText,
  Github,
  Twitter,
  MessageCircle,
  Network,
  Database,
  Zap,
  TrendingUp,
  Globe,
  ChevronRight,
  Menu,
  X,
  Code,
  Terminal,
  Save,
  Sparkles,
  Shield,
  Rocket,
  Users,
  ArrowRight,
  Star,
  CheckCircle,
} from "lucide-react"

// Matrix Background Component
function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}"
    const matrixArray = matrix.split("")

    const fontSize = 14
    const columns = canvas.width / fontSize

    const drops: number[] = []
    for (let x = 0; x < columns; x++) {
      drops[x] = 1
    }

    function draw() {
      if (!ctx || !canvas) return

      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Add glow effect
      ctx.shadowColor = '#3B82F6'
      ctx.shadowBlur = 10
      ctx.fillStyle = '#60A5FA'  // Brighter matrix blue
      ctx.font = `bold ${fontSize}px 'Courier New', monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)]

        // Add gradient effect for leading characters
        if (drops[i] * fontSize < canvas.height - fontSize * 5) {
          ctx.fillStyle = '#60A5FA'
        } else {
          ctx.fillStyle = '#1E40AF'
        }

        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.970) {
          drops[i] = 0
        }
        drops[i]++
      }

      // Reset shadow
      ctx.shadowBlur = 0
    }

    const interval = setInterval(draw, 50)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 opacity-40"
      style={{ background: 'black' }}
    />
  )
}

// Navigation Component (Updated for Bitora with enhanced design)
function Navigation() {
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
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
      ? 'bg-slate-900/98 backdrop-blur-2xl border-b border-blue-500/30 shadow-lg shadow-blue-500/10'
      : 'bg-slate-900/95 backdrop-blur-xl border-b border-blue-500/20'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-300 group-hover:scale-110">
                <span className="text-white font-bold text-sm font-mono">B</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse"></div>
            </div>
            <span className="text-white font-bold text-lg sm:text-xl font-mono group-hover:text-blue-300 transition-colors duration-300">
              <span className="hidden sm:inline">[BITORA_PROTOCOL]</span>
              <span className="sm:hidden">[BITORA]</span>
            </span>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {[
              { id: 'features', label: 'Protocol', icon: '' },
              { id: 'demo', label: 'Live Demo', icon: '' },
              { id: 'about', label: 'Infrastructure', icon: '' },
              { id: 'ecosystem', label: 'Ecosystem', icon: '' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-3 py-2 text-slate-300 hover:text-white transition-all duration-300 font-mono text-sm group overflow-hidden rounded-lg"
              >
                <span className="relative z-10 flex items-center space-x-1">
                  <span className="hidden lg:inline text-xs">{item.icon}</span>
                  <span>{item.label}</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
              </button>
            ))}
            <div className="ml-4">
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-mono text-sm px-4 py-2 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105">
                <Terminal className="mr-1 h-4 w-4" />
                <span className="hidden lg:inline">Launch App</span>
                <span className="lg:hidden">Launch</span>
              </Button>
            </div>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-slate-800/50 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-5 h-5">
              <span className={`absolute block w-5 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`}></span>
              <span className={`absolute block w-5 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute block w-5 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 py-4' : 'max-h-0'}`}>
          <div className="border-t border-slate-700/50">
            <div className="flex flex-col space-y-1 pt-4">
              {[
                { id: 'features', label: 'Protocol', icon: '' },
                { id: 'demo', label: 'Live Demo', icon: '' },
                { id: 'about', label: 'Infrastructure', icon: '' },
                { id: 'ecosystem', label: 'Ecosystem', icon: '' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-2 text-slate-300 hover:text-white hover:bg-slate-800/30 transition-all duration-300 font-mono text-sm py-3 px-2 rounded-lg"
                >
                  <span className="text-xs">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white w-full font-mono mt-3">
                <Terminal className="mr-2 h-4 w-4" />
                Launch App
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

// Live Stats Component
function LiveStats() {
  const [stats, setStats] = useState({
    btoPrice: 0.00,
    validators: 0,
    txVolume: 0,
    tokensCreated: 0,
    posLocations: 0,
    marketCap: 0,
    countries: 0
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        btoPrice: 0.0847 + (Math.random() - 0.5) * 0.001,
        validators: 2156 + Math.floor(Math.random() * 10),
        txVolume: 12847 + Math.floor(Math.random() * 1000),
        tokensCreated: 1247 + Math.floor(Math.random() * 5),
        posLocations: 89 + Math.floor(Math.random() * 3),
        marketCap: 84700000 + Math.floor(Math.random() * 100000),
        countries: 12 + Math.floor(Math.random() * 2)
      }))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
      <div className="bg-slate-800/50 border border-gray-500/20 rounded-lg p-4 text-center">
        <div className="text-2xl font-bold text-white font-mono">${stats.btoPrice.toFixed(4)}</div>
        <div className="text-xs text-white">BTO Price</div>
      </div>
      <div className="bg-slate-800/50 border border-gray-500/20 rounded-lg p-4 text-center">
        <div className="text-2xl font-bold text-white font-mono">{stats.validators.toLocaleString()}</div>
        <div className="text-xs text-white">Validators</div>
      </div>
      <div className="bg-slate-800/50 border border-gray-500/20 rounded-lg p-4 text-center">
        <div className="text-2xl font-bold text-white font-mono">{stats.txVolume.toLocaleString()}</div>
        <div className="text-xs text-white">TX Volume</div>
      </div>
      <div className="bg-slate-800/50 border border-gray-500/20 rounded-lg p-4 text-center">
        <div className="text-2xl font-bold text-white font-mono">{stats.tokensCreated.toLocaleString()}</div>
        <div className="text-xs text-white">Tokens Created</div>
      </div>
      <div className="bg-slate-800/50 border border-gray-500/20 rounded-lg p-4 text-center">
        <div className="text-2xl font-bold text-white font-mono">{stats.posLocations}</div>
        <div className="text-xs text-white">POS Locations</div>
      </div>
      <div className="bg-slate-800/50 border border-gray-500/20 rounded-lg p-4 text-center">
        <div className="text-2xl font-bold text-white font-mono">${(stats.marketCap / 1000000).toFixed(1)}M</div>
        <div className="text-xs text-white">Market Cap</div>
      </div>
      <div className="bg-slate-800/50 border border-gray-500/20 rounded-lg p-4 text-center">
        <div className="text-2xl font-bold text-white font-mono">{stats.countries}</div>
        <div className="text-xs text-white">Countries</div>
      </div>
    </div>
  )
}

// Hero Section Component (Updated with better mobile responsivity)
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4 sm:mb-6">
            <div className="text-xs sm:text-sm text-blue-400 font-mono mb-1 sm:mb-2">
              <span className="hidden sm:inline">[PROTOCOL INITIALIZATION COMPLETE]</span>
              <span className="sm:hidden">[PROTOCOL ONLINE]</span>
            </div>
            <div className="text-xs text-slate-400 font-mono">
              <span className="hidden sm:inline">BITORA LAYER 1 BLOCKCHAIN // STATUS: ONLINE</span>
              <span className="sm:hidden">BITORA L1 // ONLINE</span>
            </div>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 font-mono leading-tight">
            <span className="block sm:inline">The Infrastructure Layer for</span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent block mt-2 sm:mt-0"> Crypto-Natives, Retail Builders,</span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent block"> and Sovereign Systems</span>
          </h1>
          <p className="text-base sm:text-xl lg:text-2xl text-slate-300 mb-6 sm:mb-8 max-w-4xl mx-auto font-mono leading-relaxed px-2">
            <span className="block sm:inline">Build anything. Trade instantly. Operate legally. Pay globally.</span>
            <span className="block text-blue-400 mt-2">Powered by the $BTO token on the Bitora Layer 1 chain.</span>
          </p>

          {/* Live Stats Ticker */}
          <LiveStats />

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 max-w-4xl mx-auto">
            <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white border-0 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-mono shadow-lg hover:shadow-xl transition-all">
              <Terminal className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Launch App
            </Button>
            <Button size="lg" className="w-full sm:w-auto bg-slate-800/80 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-mono shadow-lg hover:shadow-xl transition-all">
              <FileText className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Read Whitepaper
            </Button>
            <Button size="lg" className="w-full sm:w-auto bg-slate-800/80 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-mono shadow-lg hover:shadow-xl transition-all">
              <Network className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Join Ecosystem
            </Button>
          </div>
        </motion.div>


      </div>
    </section>
  )
}


// Roadmap Section
function RoadmapSection() {
  const roadmapItems = [
    {
      year: "2025",
      items: [
        "Bitora Mainnet Live",
        "$BTO Launched",
        "Internal DEX Active",
        "Pizza Stores in AU/NZ"
      ],
      color: "blue"
    },
    {
      year: "2026",
      items: [
        "Asia-Pacific Expansion",
        "National Stablecoins (AUDx, PHPx, etc.)",
        "Institutional Validator Onboarding"
      ],
      color: "cyan"
    },
    {
      year: "2027+",
      items: [
        "U.S. and European Regulatory Integration",
        "Full Retail Sector Expansion",
        "Treasury-backed deflation protocol activated"
      ],
      color: "purple"
    }
  ]

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-mono leading-tight">
            [ROADMAP]
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roadmapItems.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`bg-slate-800/50 border border-${phase.color}-500/20 rounded-lg p-6`}
            >
              <h3 className={`text-2xl font-bold text-${phase.color}-400 mb-6 font-mono`}>
                {phase.year}
              </h3>
              <div className="space-y-3">
                {phase.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 bg-${phase.color}-400 rounded-full mt-2 flex-shrink-0`}></div>
                    <p className="text-slate-300 font-mono text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Target Audiences Section
function TargetAudiencesSection() {
  const audiences = [
    {
      title: "Builders",
      description: "Deploy tokens, DAOs, or payment tools",
      icon: "",
      color: "blue"
    },
    {
      title: "Traders",
      description: "Swap assets via DEX/CEX, interact with fiat bridges",
      icon: "",
      color: "green"
    },
    {
      title: "Retailers",
      description: "Accept crypto legally, settle in fiat, deploy loyalty programs",
      icon: "",
      color: "orange"
    },
    {
      title: "Institutions",
      description: "Issue regulated assets or stablecoins",
      icon: "",
      color: "purple"
    },
    {
      title: "Governments",
      description: "Tokenize grants, ID systems, and public revenue",
      icon: "",
      color: "cyan"
    }
  ]

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-mono leading-tight">
            [TARGET_AUDIENCES]
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-slate-800/50 border border-${audience.color}-500/20 rounded-lg p-6 hover:border-${audience.color}-500/40 transition-colors`}
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{audience.icon}</div>
                <h3 className={`text-xl font-bold text-${audience.color}-400 mb-3 font-mono`}>
                  {audience.title}
                </h3>
                <p className="text-slate-300 font-mono text-sm">
                  {audience.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Ecosystem Resource Center Section
function EcosystemResourceCenter() {
  const resources = [
    { title: "Developer Documentation", icon: "", color: "blue" },
    { title: "Run a Validator", icon: "", color: "green" },
    { title: "Use POS System", icon: "", color: "orange" },
    { title: "Apply for Grants", icon: "", color: "purple" },
    { title: "Launch dApps", icon: "", color: "cyan" },
    { title: "Join Governance", icon: "", color: "pink" }
  ]

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-mono leading-tight">
            <span className="block sm:inline">[ECOSYSTEM_RESOURCE</span>
            <span className="block sm:inline">_CENTER]</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-slate-800/50 border border-${resource.color}-500/20 rounded-lg p-6 hover:border-${resource.color}-500/40 transition-colors cursor-pointer group`}
            >
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{resource.icon}</div>
                <h3 className={`text-lg font-bold text-${resource.color}-400 font-mono group-hover:text-${resource.color}-300 transition-colors`}>
                  {resource.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Bitora Newsroom Section
function NewsroomSection() {
  const newsCategories = [
    "Protocol Announcements",
    "Governance and DAO Votes",
    "Wallet & POS Launches",
    "Real-World Expansion Reports",
    "Exchange Listings",
    "Strategic Partnerships",
    "Research & Economics"
  ]

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-mono leading-tight">
            <span className="block sm:inline">[BITORA_</span>
            <span className="block sm:inline">NEWSROOM]</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {newsCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 border border-blue-500/20 rounded-lg p-4 hover:border-blue-500/40 transition-colors cursor-pointer"
            >
              <h3 className="text-blue-400 font-mono text-sm font-bold">
                {category}
              </h3>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-mono px-8 py-3 rounded-lg transition-colors">
            View All Updates
          </button>
        </div>
      </div>
    </section>
  )
}

// Bitora Wallet Section
function WalletSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-mono leading-tight">
            <span className="block sm:inline">[WALLET_FOR_REAL_WORLD</span>
            <span className="block sm:inline">_+_WEB3]</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 font-mono">Purpose-built wallet with:</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-slate-300 font-mono">Non-custodial storage for $BTO and all TGE tokens</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-slate-300 font-mono">Biometric login, PIN, and delegated recovery</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-slate-300 font-mono">On-chain loyalty tokens, coupons, and receipts</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-slate-300 font-mono">Integrated fiat balance display (via off-ramp APIs)</p>
              </div>
            </div>
            <div className="mt-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-mono px-8 py-3 rounded-lg transition-colors">
                Download Wallet (Coming Soon)
              </button>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-blue-500/20 rounded-lg p-8">
            <div className="text-center">
              <div className="text-6xl mb-4"></div>
              <h4 className="text-xl font-bold text-blue-400 mb-4 font-mono">Mobile UI Mockup</h4>
              <div className="bg-slate-900/50 rounded-lg p-4 font-mono text-sm">
                <div className="text-green-400 mb-2">Balance: $2,847.32</div>
                <div className="text-blue-400 mb-2">BTO: 15,247 tokens</div>
                <div className="text-orange-400 mb-2">Loyalty Points: 847</div>
                <div className="text-purple-400">Recent: Pizza Store #42</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// BTX Trading Engine Section
function BTXSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-mono leading-tight">
            <span className="block sm:inline">[BTX_–_BITORA_</span>
            <span className="block sm:inline">TRADING_ENGINE]</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-mono px-4 sm:px-0">
            Trade Instantly with BTX
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 font-mono">Bitora's native decentralized exchange:</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-slate-300 font-mono">No-gas token swaps</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-slate-300 font-mono">AMM-based architecture</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-slate-300 font-mono">Fee distribution to treasury and stakers</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-slate-300 font-mono">Jurisdiction-gated listings for compliance</p>
              </div>
            </div>
            <div className="mt-8">
              <button className="bg-green-600 hover:bg-green-700 text-white font-mono px-8 py-3 rounded-lg transition-colors">
                Launch DEX
              </button>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-green-500/20 rounded-lg p-8">
            <div className="text-center">
              <div className="text-6xl mb-4"></div>
              <h4 className="text-xl font-bold text-green-400 mb-4 font-mono">BTX Live Stats</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-300 font-mono">24h Volume</span>
                  <span className="text-green-400 font-mono">$2.4M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300 font-mono">Active Pairs</span>
                  <span className="text-green-400 font-mono">47</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300 font-mono">Total Liquidity</span>
                  <span className="text-green-400 font-mono">$12.8M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300 font-mono">Avg Swap Time</span>
                  <span className="text-green-400 font-mono">0.3s</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Typewriter Text Component
function TypewriterText({ text, delay = 0, speed = 50 }: { text: string, delay?: number, speed?: number }) {
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    if (!text) {
      setDisplayedText('')
      return
    }

    const timer = setTimeout(() => {
      setIsTyping(true)
      let currentIndex = 0

      const typeInterval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex))
          currentIndex++
        } else {
          setIsTyping(false)
          clearInterval(typeInterval)
        }
      }, speed)

      return () => clearInterval(typeInterval)
    }, delay)

    return () => clearTimeout(timer)
  }, [text, delay, speed])

  return (
    <span className="block">
      {displayedText}
      {isTyping && (
        <motion.span
          className="bg-blue-400 text-black inline-block w-1 ml-0.5"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        >
          |
        </motion.span>
      )}
    </span>
  )
}

// Interactive Live Coding Demo Component
function CodeDemo() {
  const [activeCard, setActiveCard] = useState(0)
  const [completedCards, setCompletedCards] = useState<number[]>([])
  const [isSimulating, setIsSimulating] = useState(false)
  const [simulationSpeed, setSimulationSpeed] = useState(2000)
  const [networkNodes, setNetworkNodes] = useState<{ id: number, x: number, y: number, active: boolean }[]>([])
  const [dataFlow, setDataFlow] = useState<{ from: number, to: number, progress: number }[]>([])
  const [systemMetrics, setSystemMetrics] = useState({
    cpu: 0,
    memory: 0,
    network: 0,
    transactions: 0
  })
  const [terminalLogs, setTerminalLogs] = useState<string[]>([])
  const [particleSystem, setParticleSystem] = useState<{ id: number, x: number, y: number, vx: number, vy: number }[]>([])
  const [soundEffects, setSoundEffects] = useState({
    typing: false,
    compilation: false,
    success: false
  })
  const [visualEffects, setVisualEffects] = useState({
    glitch: false,
    hologram: false,
    matrix: false
  })
  const [aiAssistant, setAiAssistant] = useState({
    active: false,
    message: '',
    suggestions: [] as string[]
  })
  const [hackingMode, setHackingMode] = useState(false)
  const [quantumState, setQuantumState] = useState({
    entanglement: 0,
    coherence: 100,
    qubits: 0
  })

  const codingSteps = [
    {
      id: 1,
      title: "Initialize Protocol",
      description: "Setting up Bitora Protocol core",
      code: `package main\n\nimport "github.com/bitora/protocol/core"\n\nfunc main() {\n    protocol := core.NewProtocol()\n}`,
      icon: <Database className="h-6 w-6" />,
      color: "from-gray-700 to-gray-800",
      status: "pending"
    },
    {
      id: 2,
      title: "Quantum Consensus",
      description: "Implementing quantum-resistant consensus",
      code: `consensus := consensus.NewQuantumPoS()\nprotocol.SetConsensus(consensus)\n\n// Quantum-resistant validation\nconsensus.EnableQuantumSecurity()`,
      icon: <Shield className="h-6 w-6" />,
      color: "from-gray-700 to-gray-800",
      status: "pending"
    },
    {
      id: 3,
      title: "Network Layer",
      description: "Establishing P2P network connections",
      code: `network := network.NewP2PNetwork()\nprotocol.SetNetwork(network)\n\n// Connect to peers\nnetwork.ConnectToPeers()`,
      icon: <Network className="h-6 w-6" />,
      color: "from-gray-700 to-gray-800",
      status: "pending"
    },
    {
      id: 4,
      title: "Smart Contracts",
      description: "Deploying smart contract engine",
      code: `contracts := contracts.NewEngine()\nprotocol.SetContractEngine(contracts)\n\n// Deploy sample contract\ncontract := contracts.Deploy(sampleContract)`,
      icon: <Code className="h-6 w-6" />,
      color: "from-gray-700 to-gray-800",
      status: "pending"
    },
    {
      id: 5,
      title: "Neural Interface",
      description: "Activating neural connection protocols",
      code: `neural := neural.NewInterface()\nprotocol.SetNeuralLayer(neural)\n\n// Initialize neural pathways\nneural.ActivatePathways()`,
      icon: <Sparkles className="h-6 w-6" />,
      color: "from-gray-700 to-gray-800",
      status: "pending"
    },
    {
      id: 6,
      title: "Launch Network",
      description: "Starting the blockchain network",
      code: `// Start the protocol\nprotocol.Start()\n\nfmt.Println("Bitora Protocol is running!")\nfmt.Println("Network ready for transactions")`,
      icon: <Rocket className="h-6 w-6" />,
      color: "from-gray-700 to-gray-800",
      status: "pending"
    }
  ]

  // Advanced simulation with real-time metrics
  useEffect(() => {
    if (!isSimulating) return

    const timer = setInterval(() => {
      setActiveCard(prev => {
        const nextCard = prev + 1
        if (nextCard < codingSteps.length) {
          setCompletedCards(completed => [...completed, prev])

          // Add terminal log
          setTerminalLogs(logs => [...logs.slice(-4), `[${new Date().toLocaleTimeString()}] ${codingSteps[prev].title} completed successfully`])

          // Update metrics based on step
          setSystemMetrics(metrics => ({
            cpu: Math.min(100, metrics.cpu + Math.random() * 20),
            memory: Math.min(100, metrics.memory + Math.random() * 15),
            network: Math.min(100, metrics.network + Math.random() * 25),
            transactions: metrics.transactions + Math.floor(Math.random() * 100)
          }))

          return nextCard
        } else {
          setCompletedCards(completed => [...completed, prev])
          setTerminalLogs(logs => [...logs, `[${new Date().toLocaleTimeString()}] Bitora Protocol fully deployed!`])
          setIsSimulating(false)

          // Reset after completion
          setTimeout(() => {
            setActiveCard(0)
            setCompletedCards([])
            setTerminalLogs([])
            setSystemMetrics({ cpu: 0, memory: 0, network: 0, transactions: 0 })
            setIsSimulating(true)
          }, 5000)
          return prev
        }
      })
    }, simulationSpeed)

    return () => clearInterval(timer)
  }, [isSimulating, simulationSpeed, codingSteps.length])

  // Initialize network nodes and particle system
  useEffect(() => {
    const nodes = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: 20 + (i % 4) * 20,
      y: 20 + Math.floor(i / 4) * 60,
      active: false
    }))
    setNetworkNodes(nodes)

    const particles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2
    }))
    setParticleSystem(particles)

    // Auto-start simulation
    setIsSimulating(true)
  }, [])

  // Animate network nodes and data flow
  useEffect(() => {
    if (!isSimulating) return

    const interval = setInterval(() => {
      setNetworkNodes(nodes =>
        nodes.map(node => ({
          ...node,
          active: Math.random() > 0.7
        }))
      )

      setDataFlow(flows => {
        const newFlows = Array.from({ length: 3 }, (_, i) => ({
          from: Math.floor(Math.random() * 8),
          to: Math.floor(Math.random() * 8),
          progress: 0
        }))
        return newFlows
      })

      // Animate particles
      setParticleSystem(particles =>
        particles.map(p => ({
          ...p,
          x: (p.x + p.vx + 100) % 100,
          y: (p.y + p.vy + 100) % 100
        }))
      )

      // Update quantum state
      setQuantumState(prev => ({
        entanglement: Math.min(100, prev.entanglement + Math.random() * 5),
        coherence: Math.max(50, prev.coherence - Math.random() * 2),
        qubits: Math.min(64, prev.qubits + (Math.random() > 0.8 ? 1 : 0))
      }))

      // Trigger sound effects
      if (Math.random() > 0.7) {
        setSoundEffects(prev => ({ ...prev, typing: true }))
        setTimeout(() => setSoundEffects(prev => ({ ...prev, typing: false })), 200)
      }

      // AI Assistant messages
      if (aiAssistant.active && Math.random() > 0.9) {
        const messages = [
          'Optimizing quantum entanglement...',
          'Neural network convergence detected',
          'Blockchain integrity verified',
          'Quantum tunneling established',
          'AI consensus algorithm active'
        ]
        setAiAssistant(prev => ({
          ...prev,
          message: messages[Math.floor(Math.random() * messages.length)]
        }))
      }

      // Visual effects triggers
      if (hackingMode && Math.random() > 0.8) {
        setVisualEffects(prev => ({ ...prev, glitch: true }))
        setTimeout(() => setVisualEffects(prev => ({ ...prev, glitch: false })), 300)
      }
    }, 500)

    return () => clearInterval(interval)
  }, [isSimulating, aiAssistant.active, hackingMode])

  const getCardStatus = (index: number) => {
    if (completedCards.includes(index)) return 'completed'
    if (index === activeCard) return 'active'
    return 'pending'
  }

  return (
    <div className="space-y-8">
      {/* Advanced Control Panel */}
      <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-500/30 p-4 sm:p-6 mb-8 overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {/* System Metrics */}
          <div className="space-y-2 sm:space-y-3">
            <h4 className="text-white font-semibold text-xs sm:text-sm">System Metrics</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-gray-300">CPU</span>
                <span className="text-white">{systemMetrics.cpu.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-1.5">
                <div className="bg-gray-400 h-1.5 rounded-full transition-all duration-500" style={{ width: `${systemMetrics.cpu}%` }}></div>
              </div>

              <div className="flex justify-between text-xs">
                <span className="text-gray-300">Memory</span>
                <span className="text-white">{systemMetrics.memory.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-1.5">
                <div className="bg-gray-400 h-1.5 rounded-full transition-all duration-500" style={{ width: `${systemMetrics.memory}%` }}></div>
              </div>

              <div className="flex justify-between text-xs">
                <span className="text-gray-300">Network</span>
                <span className="text-white">{systemMetrics.network.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-1.5">
                <div className="bg-gray-400 h-1.5 rounded-full transition-all duration-500" style={{ width: `${systemMetrics.network}%` }}></div>
              </div>
            </div>
          </div>

          {/* Network Visualization */}
          <div className="space-y-2 sm:space-y-3">
            <h4 className="text-white font-semibold text-xs sm:text-sm">Network Topology</h4>
            <div className="relative h-20 sm:h-24 bg-gray-800/50 rounded-lg overflow-hidden">
              {/* Particle Background */}
              {particleSystem.map(particle => (
                <div
                  key={particle.id}
                  className="absolute w-1 h-1 bg-white rounded-full opacity-60"
                  style={{
                    left: `${particle.x}%`,
                    top: `${particle.y}%`,
                    transition: 'all 0.5s ease-in-out'
                  }}
                />
              ))}

              {/* Network Nodes */}
              {networkNodes.map(node => (
                <div
                  key={node.id}
                  className={`absolute w-2 h-2 rounded-full transition-all duration-300 ${node.active ? 'bg-green-400 scale-125' : 'bg-gray-500'
                    }`}
                  style={{
                    left: `${node.x}%`,
                    top: `${node.y}%`
                  }}
                />
              ))}

              {/* Data Flow Lines */}
              <svg className="absolute inset-0 w-full h-full">
                {dataFlow.map((flow, i) => {
                  const fromNode = networkNodes[flow.from]
                  const toNode = networkNodes[flow.to]
                  if (!fromNode || !toNode) return null

                  return (
                    <line
                      key={i}
                      x1={`${fromNode.x}%`}
                      y1={`${fromNode.y}%`}
                      x2={`${toNode.x}%`}
                      y2={`${toNode.y}%`}
                      stroke="#3b82f6"
                      strokeWidth="1"
                      opacity="0.6"
                      className="animate-pulse"
                    />
                  )
                })}
              </svg>
            </div>
          </div>

          {/* Transaction Counter */}
          <div className="space-y-2 sm:space-y-3">
            <h4 className="text-blue-400 font-semibold text-xs sm:text-sm">Blockchain Stats</h4>
            <div className="space-y-2">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{systemMetrics.transactions}</div>
                <div className="text-xs text-gray-400">Transactions</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-blue-400">{completedCards.length}/{codingSteps.length}</div>
                <div className="text-xs text-gray-400">Modules</div>
              </div>
            </div>
          </div>

          {/* Terminal Logs */}
          <div className="space-y-2 sm:space-y-3">
            <h4 className="text-blue-400 font-semibold text-xs sm:text-sm">System Logs</h4>
            <div className="bg-black/50 rounded-lg p-2 h-20 sm:h-24 overflow-y-auto font-mono text-xs">
              {terminalLogs.map((log, i) => (
                <div key={i} className="text-green-400 mb-1 animate-fadeIn">
                  {log}
                </div>
              ))}
            </div>
          </div>

          {/* AI Assistant & Quantum Computing */}
          <div className="space-y-2 sm:space-y-3">
            <h4 className="text-blue-400 font-semibold text-xs sm:text-sm">AI Assistant</h4>
            <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-lg p-2 sm:p-3 h-20 sm:h-24 overflow-hidden relative">
              {/* Quantum Visualization */}
              <div className="absolute inset-0 opacity-30">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className={`absolute w-1 h-1 rounded-full ${quantumState.entanglement > 50 ? 'bg-purple-400' : 'bg-blue-400'
                      } animate-pulse`}
                    style={{
                      left: `${10 + (i % 4) * 20}%`,
                      top: `${20 + Math.floor(i / 4) * 25}%`,
                      animationDelay: `${i * 0.1}s`,
                      animationDuration: `${1 + (i % 3) * 0.5}s`
                    }}
                  />
                ))}
              </div>

              {/* AI Status */}
              <div className="relative z-10">
                <div className="flex items-center space-x-2 mb-2">
                  <div className={`w-2 h-2 rounded-full ${aiAssistant.active ? 'bg-green-400 animate-pulse' : 'bg-gray-500'
                    }`}></div>
                  <span className="text-xs text-purple-300">
                    {aiAssistant.active ? 'AI Online' : 'AI Standby'}
                  </span>
                </div>

                {/* Quantum Metrics */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-300">Qubits</span>
                    <span className="text-purple-400">{quantumState.qubits}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-300">Coherence</span>
                    <span className="text-blue-400">{quantumState.coherence}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Controls */}
        <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <label className="text-xs sm:text-sm text-gray-300">Speed:</label>
              <input
                type="range"
                min="500"
                max="5000"
                step="500"
                value={simulationSpeed}
                onChange={(e) => setSimulationSpeed(Number(e.target.value))}
                className="w-24 sm:w-32 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              />
              <span className="text-xs text-blue-400">{(6000 - simulationSpeed) / 1000}x</span>
            </div>

            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${isSimulating ? 'bg-green-400 animate-pulse' : 'bg-red-400'
                }`}></div>
              <span className="text-xs sm:text-sm text-gray-300">
                {isSimulating ? 'Running' : 'Stopped'}
              </span>
            </div>
          </div>

          {/* Advanced Mode Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-t border-gray-700/50 pt-3 sm:pt-4 space-y-3 sm:space-y-0">
            <div className="flex flex-wrap items-center gap-3 sm:gap-6">
              {/* Hacking Mode */}
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hackingMode}
                  onChange={(e) => setHackingMode(e.target.checked)}
                  className="sr-only"
                />
                <div className={`w-8 sm:w-10 h-5 sm:h-6 rounded-full transition-all duration-300 ${hackingMode ? 'bg-red-500' : 'bg-gray-600'
                  } relative`}>
                  <div className={`w-3 sm:w-4 h-3 sm:h-4 bg-white rounded-full absolute top-1 transition-all duration-300 ${hackingMode ? 'left-4 sm:left-5' : 'left-1'
                    }`}></div>
                </div>
                <span className={`text-xs sm:text-sm ${hackingMode ? 'text-red-400' : 'text-gray-300'
                  }`}>Hacking Mode</span>
              </label>

              {/* Visual Effects */}
              <button
                onClick={() => setVisualEffects(prev => ({ ...prev, matrix: !prev.matrix }))}
                className={`px-2 sm:px-3 py-1 rounded-lg text-xs transition-all ${visualEffects.matrix
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                  : 'bg-gray-700/50 text-gray-300 border border-gray-600/30'
                  }`}
              >
                Matrix FX
              </button>

              <button
                onClick={() => setVisualEffects(prev => ({ ...prev, hologram: !prev.hologram }))}
                className={`px-2 sm:px-3 py-1 rounded-lg text-xs transition-all ${visualEffects.hologram
                  ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  : 'bg-gray-700/50 text-gray-300 border border-gray-600/30'
                  }`}
              >
                Hologram
              </button>
            </div>

            {/* AI Assistant Toggle */}
            <button
              onClick={() => setAiAssistant(prev => ({ ...prev, active: !prev.active }))}
              className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all w-full sm:w-auto ${aiAssistant.active
                ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                : 'bg-gray-700/50 text-gray-300 border border-gray-600/30'
                }`}
            >
              {aiAssistant.active ? '🤖 AI Active' : '🤖 Activate AI'}
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Connection Lines */}
      <div className="relative">
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
          {codingSteps.map((_, index) => {
            if (index === codingSteps.length - 1) return null
            const isActive = completedCards.includes(index) || index === activeCard
            return (
              <line
                key={index}
                x1={`${20 + (index % 3) * 33}%`}
                y1={`${20 + Math.floor(index / 3) * 40}%`}
                x2={`${20 + ((index + 1) % 3) * 33}%`}
                y2={`${20 + Math.floor((index + 1) / 3) * 40}%`}
                stroke={isActive ? '#3b82f6' : '#374151'}
                strokeWidth="2"
                strokeDasharray={isActive ? '0' : '5,5'}
                className={isActive ? 'animate-pulse' : ''}
              />
            )
          })}
        </svg>

        {/* Cards Grid */}
        <div className={`relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full transition-all duration-300 ${visualEffects.glitch ? 'animate-pulse filter blur-[1px]' : ''
          } ${visualEffects.hologram ? 'opacity-80' : ''
          }`} style={{ zIndex: 2 }}>
          {codingSteps.map((step, index) => {
            const status = getCardStatus(index)
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: status === 'active' ? 1.05 : 1,
                  y: status === 'active' ? -5 : 0
                }}
                transition={{ duration: 0.3 }}
                className={`relative overflow-hidden rounded-xl border-2 transition-all duration-300 min-h-[280px] sm:min-h-[320px] w-full ${status === 'completed'
                  ? 'border-green-500 bg-gray-900/50'
                  : status === 'active'
                    ? 'border-red-500 bg-gray-900/50'
                    : 'border-gray-600 bg-gray-900/50'
                  }`}
              >
                {/* Card Header */}
                <div className="p-3 sm:p-4 bg-gray-800/50">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="p-1.5 sm:p-2 rounded-lg bg-gray-700 text-white flex-shrink-0">
                      {step.icon}
                    </div>
                    <div className="flex-1 min-w-0 overflow-hidden">
                      <h3 className="text-white font-semibold text-xs sm:text-sm truncate">{step.title}</h3>
                      <p className="text-gray-300 text-xs leading-tight break-words">{step.description}</p>
                    </div>
                    {status === 'completed' && (
                      <div className="ml-auto">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">✓</span>
                        </div>
                      </div>
                    )}
                    {status === 'active' && (
                      <div className="ml-auto">
                        <div className="w-6 h-6 bg-red-500 rounded-full animate-pulse"></div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Code Preview */}
                <div className="p-2 sm:p-3 flex-1 ">
                  <div className="bg-gray-900 p-2 sm:p-3 font-mono text-xs  overflow-hidden">
                    <div className={`h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 ${status === 'completed' ? 'text-green-400' :
                      status === 'active' ? 'text-white' : 'text-gray-500'
                      }`}>
                      {step.code.split('\n').map((line, lineIndex) => (
                        <div key={lineIndex} className="leading-tight mb-1 text-xs overflow-hidden">
                          {status === 'active' ? (
                            <TypewriterText
                              text={line}
                              delay={lineIndex * 150}
                              speed={25}
                            />
                          ) : (
                            <span className="block whitespace-pre-wrap break-all">{line}</span>
                          )}
                        </div>
                      ))}
                    </div>
                    {status === 'active' && (
                      <motion.div
                        className="mt-1 flex items-center"
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <span className="bg-red-500 text-white inline-block w-2 h-3 mr-1">█</span>
                        <span className="text-white text-xs">Typing...</span>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1">
                  <div className={`h-full transition-all duration-500 ${status === 'completed' ? 'bg-green-500 w-full' :
                    status === 'active' ? 'bg-red-500 w-3/4 animate-pulse' : 'bg-gray-600 w-0'
                    }`}></div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Simulation Controls */}
      <div className="text-center">
        <Button
          onClick={() => {
            setActiveCard(0)
            setCompletedCards([])
            setIsSimulating(!isSimulating)
          }}
          className={`${isSimulating ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'} text-white px-6 py-2`}
        >
          {isSimulating ? 'Pause Simulation' : 'Start Simulation'}
        </Button>
      </div>
    </div>
  )
}

// Live Stats Section (Enhanced)
function LiveStatsSection() {
  const [stats, setStats] = useState({
    tokensCreated: 1247,
    posLocations: 42,
    btoPrice: 2.47,
    validatorsOnline: 156,
    dailyTxVolume: 847000,
    countriesOperating: 3
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        tokensCreated: prev.tokensCreated + Math.floor(Math.random() * 3),
        posLocations: prev.posLocations + (Math.random() > 0.95 ? 1 : 0),
        btoPrice: prev.btoPrice + (Math.random() - 0.5) * 0.1,
        validatorsOnline: prev.validatorsOnline + Math.floor(Math.random() * 2 - 1),
        dailyTxVolume: prev.dailyTxVolume + Math.floor(Math.random() * 1000),
        countriesOperating: prev.countriesOperating
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 font-mono">
            [LIVE_STATS]
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-slate-800/50 border border-gray-500/20 rounded-lg p-6">
            <h3 className="text-white font-mono text-sm mb-2">Tokens Created</h3>
            <div className="text-3xl font-bold text-white font-mono">{stats.tokensCreated.toLocaleString()}</div>
          </div>
          <div className="bg-slate-800/50 border border-gray-500/20 rounded-lg p-6">
            <h3 className="text-white font-mono text-sm mb-2">Active POS Locations</h3>
            <div className="text-3xl font-bold text-white font-mono">{stats.posLocations}</div>
          </div>
          <div className="bg-slate-800/50 border border-gray-500/20 rounded-lg p-6">
            <h3 className="text-white font-mono text-sm mb-2">$BTO Price</h3>
            <div className="text-3xl font-bold text-white font-mono">${stats.btoPrice.toFixed(2)}</div>
          </div>
          <div className="bg-slate-800/50 border border-gray-500/20 rounded-lg p-6">
            <h3 className="text-white font-mono text-sm mb-2">Validators Online</h3>
            <div className="text-3xl font-bold text-white font-mono">{stats.validatorsOnline}</div>
          </div>
          <div className="bg-slate-800/50 border border-gray-500/20 rounded-lg p-6">
            <h3 className="text-white font-mono text-sm mb-2">Daily TX Volume</h3>
            <div className="text-3xl font-bold text-white font-mono">{stats.dailyTxVolume.toLocaleString()}</div>
          </div>
          <div className="bg-slate-800/50 border border-gray-500/20 rounded-lg p-6">
            <h3 className="text-white font-mono text-sm mb-2">Countries Operating</h3>
            <div className="text-3xl font-bold text-white font-mono">{stats.countriesOperating}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

// About Section Component (Updated for Bitora)
function AboutSection() {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-mono leading-tight">
            <span className="block sm:inline">[PROTOCOL_</span>
            <span className="block sm:inline">INFRASTRUCTURE]</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-4xl mx-auto font-mono px-4 sm:px-0">
            Built using Cosmos SDK with validator scoring, fast finality, and native staking. The gas token is $BTO.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="bg-slate-800/50 border-blue-500/20">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 font-mono">Layer 1 Blockchain</h3>
              <p className="text-slate-300 font-mono text-sm">Built using Cosmos SDK with validator scoring and fast finality</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-green-500/20">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 font-mono">Compliance Layer</h3>
              <p className="text-slate-300 font-mono text-sm">Jurisdictional KYC, AML scoring, and real-time sanctions enforcement</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-purple-500/20">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 font-mono">Governance Framework</h3>
              <p className="text-slate-300 font-mono text-sm">Two-tier governance model with quadratic voting and council veto protection</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

// Call to Action Section (Updated for Bitora)
function CTASection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-mono leading-tight">
          [PROTOCOL_ACTIVATION]
        </h2>
        <p className="text-base sm:text-xl text-slate-300 mb-6 sm:mb-8 font-mono px-2">
          Build anything. Trade instantly. Operate legally. Pay globally.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 max-w-3xl mx-auto">
          <Button size="lg" className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white border-0 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-mono shadow-lg hover:shadow-xl transition-all">
            <Terminal className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Launch App
          </Button>
          <Button size="lg" className="w-full sm:w-auto bg-slate-800/80 border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-mono shadow-lg hover:shadow-xl transition-all">
            <FileText className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Read Whitepaper
          </Button>
          <Button size="lg" className="w-full sm:w-auto bg-slate-800/80 border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-mono shadow-lg hover:shadow-xl transition-all">
            <Network className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Join Ecosystem
          </Button>
        </div>
      </div>
    </section>
  )
}

// Footer Component (Updated for Bitora with better mobile responsivity and navigation)
function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-slate-800 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4 cursor-pointer group" onClick={scrollToTop}>
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                <span className="text-white font-bold text-xs sm:text-sm font-mono">B</span>
              </div>
              <span className="text-white font-bold text-base sm:text-xl font-mono group-hover:text-blue-300 transition-colors duration-300">
                <span className="hidden sm:inline">[BITORA_PROTOCOL]</span>
                <span className="sm:hidden">[BITORA]</span>
              </span>
            </div>
            <p className="text-slate-300 mb-4 font-mono text-sm sm:text-base">
              The Infrastructure Layer for Crypto-Natives, Retail Builders, and Sovereign Systems.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300">
                <Github className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300">
                <MessageCircle className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 font-mono">Navigation</h3>
            <ul className="space-y-2 text-slate-300">
              <li>
                <button
                  onClick={() => scrollToSection('features')}
                  className="hover:text-blue-400 transition-colors font-mono text-left w-full text-sm hover:translate-x-1 transition-transform duration-300"
                >
                  Protocol Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('demo')}
                  className="hover:text-blue-400 transition-colors font-mono text-left w-full text-sm hover:translate-x-1 transition-transform duration-300"
                >
                  Live Demo
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-blue-400 transition-colors font-mono text-left w-full text-sm hover:translate-x-1 transition-transform duration-300"
                >
                  Infrastructure
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('ecosystem')}
                  className="hover:text-blue-400 transition-colors font-mono text-left w-full text-sm hover:translate-x-1 transition-transform duration-300"
                >
                  Ecosystem
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 font-mono">Network</h3>
            <ul className="space-y-2 text-slate-300">
              <li><a href="https://twitter.com/bitora" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors font-mono text-sm hover:translate-x-1 transition-transform duration-300 block">Twitter/X</a></li>
              <li><a href="https://t.me/bitora" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors font-mono text-sm hover:translate-x-1 transition-transform duration-300 block">Telegram</a></li>
              <li><a href="https://discord.gg/bitora" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors font-mono text-sm hover:translate-x-1 transition-transform duration-300 block">Discord</a></li>
              <li><a href="https://linkedin.com/company/bitora" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors font-mono text-sm hover:translate-x-1 transition-transform duration-300 block">LinkedIn</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 font-mono">Resources</h3>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors font-mono text-sm hover:translate-x-1 transition-transform duration-300 block">Whitepaper</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors font-mono text-sm hover:translate-x-1 transition-transform duration-300 block">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors font-mono text-sm hover:translate-x-1 transition-transform duration-300 block">Run Validator</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors font-mono text-sm hover:translate-x-1 transition-transform duration-300 block">Apply for Grants</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 font-mono text-sm">
            © 2024 Bitora Protocol. All rights reserved. | Built on the Bitora Layer 1 Chain
          </p>
        </div>
      </div>
    </footer>
  )
}

// Terminal Loading Screen Component
function TerminalLoader({ onComplete }: { onComplete: () => void }) {
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const codeLines = [
    "package main",
    "import \"fmt\"",
    "func main() {",
    '  fmt.Println("Bitora Loading..."))',
    "}"
  ]

  useEffect(() => {
    if (isComplete) {
      setTimeout(() => onComplete(), 100)
      return
    }

    if (currentLine >= codeLines.length) {
      setIsComplete(true)
      return
    }

    const currentLineText = codeLines[currentLine]

    if (currentChar >= currentLineText.length) {
      setTimeout(() => {
        setCurrentLine(prev => prev + 1)
        setCurrentChar(0)
      }, 120)
      return
    }

    const timer = setTimeout(() => {
      setCurrentChar(prev => prev + 1)
    }, 30)

    return () => clearTimeout(timer)
  }, [currentLine, currentChar, isComplete, onComplete])

  const renderCodeLine = (line: string) => {
    if (line.includes('package') || line.includes('import') || line.includes('type') || line.includes('func')) {
      return (
        <span>
          <span className="text-purple-400">
            {line.match(/(package|import|type|func)/)?.[0]}
          </span>
          <span className="text-gray-100">
            {line.replace(/(package|import|type|func)/, '')}
          </span>
        </span>
      )
    }
    if (line.includes('string') || line.includes('int')) {
      return (
        <span className="text-blue-400">{line}</span>
      )
    }
    if (line.includes('"')) {
      return (
        <span className="text-green-300">{line}</span>
      )
    }
    return (
      <span className="text-gray-100">{line}</span>
    )
  }

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
      {/* Matrix Background */}
      <div className="absolute inset-0 bg-black overflow-hidden">
        {/* Dense Matrix Background */}
        <div className="absolute inset-0 opacity-60">
          {Array.from({ length: 150 }).map((_, i) => {
            const positions = [
              { left: 5, top: 10 }, { left: 12, top: 25 }, { left: 18, top: 5 }, { left: 25, top: 40 }, { left: 32, top: 15 },
              { left: 38, top: 30 }, { left: 45, top: 8 }, { left: 52, top: 35 }, { left: 58, top: 20 }, { left: 65, top: 45 },
              { left: 72, top: 12 }, { left: 78, top: 38 }, { left: 85, top: 22 }, { left: 92, top: 48 }, { left: 8, top: 55 },
              { left: 15, top: 70 }, { left: 22, top: 60 }, { left: 28, top: 75 }, { left: 35, top: 65 }, { left: 42, top: 80 },
              { left: 48, top: 58 }, { left: 55, top: 85 }, { left: 62, top: 68 }, { left: 68, top: 90 }, { left: 75, top: 78 },
              { left: 82, top: 95 }, { left: 88, top: 85 }, { left: 95, top: 92 }, { left: 3, top: 88 }, { left: 10, top: 95 },
              { left: 17, top: 82 }, { left: 23, top: 98 }, { left: 30, top: 88 }, { left: 37, top: 95 }, { left: 43, top: 85 },
              { left: 50, top: 92 }, { left: 57, top: 98 }, { left: 63, top: 88 }, { left: 70, top: 95 }, { left: 77, top: 85 },
              { left: 83, top: 92 }, { left: 90, top: 98 }, { left: 97, top: 88 }, { left: 2, top: 45 }, { left: 9, top: 52 },
              { left: 16, top: 48 }, { left: 23, top: 55 }, { left: 29, top: 42 }, { left: 36, top: 58 }, { left: 43, top: 45 }
            ];
            const pos = positions[i % positions.length];
            return (
              <div
                key={i}
                className="absolute text-blue-400 text-sm font-mono animate-pulse"
                style={{
                  left: `${pos.left}%`,
                  top: `${pos.top}%`,
                  animationDelay: `${(i % 8) * 0.1}s`,
                  animationDuration: `${1.2 + (i % 2) * 0.6}s`,
                  textShadow: '0 0 10px #3b82f6, 0 0 20px #1e40af, 0 0 30px #1e3a8a'
                }}
              >
                {i % 3 === 0 ? '1' : i % 3 === 1 ? '0' : 'X'}
              </div>
            );
          })}
        </div>

        {/* Fast Falling Matrix Effect */}
        <div className="absolute inset-0 opacity-40">
          {Array.from({ length: 60 }).map((_, i) => {
            const leftPositions = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 43, 46, 49, 52, 55, 58, 61, 64, 67, 70, 73, 76, 79, 82, 85, 88, 91, 94, 97, 2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47, 50, 53, 56, 59, 62, 65, 68, 71, 74, 77, 80];
            return (
              <div
                key={i}
                className="absolute w-0.5 bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-pulse"
                style={{
                  left: `${leftPositions[i]}%`,
                  height: '150px',
                  animationDelay: `${(i % 6) * 0.1}s`,
                  animationDuration: `${1.2 + (i % 3) * 0.3}s`,
                  boxShadow: '0 0 10px #3b82f6'
                }}
              />
            );
          })}
        </div>

        {/* Matrix Rain Effect */}
        <div className="absolute inset-0 opacity-50">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-blue-300 text-sm font-mono font-bold"
              style={{
                left: `${(i * 2) % 100}%`,
                top: '-20px',
                animation: `matrixRain ${1.8 + (i % 3) * 0.6}s linear infinite`,
                animationDelay: `${(i % 10) * 0.1}s`,
                textShadow: '0 0 8px #3b82f6, 0 0 16px #1e40af'
              }}
            >
              {['1', '0', 'A', 'B', 'C', 'X', 'Y', 'Z', '█', '▓', '▒', '░'][i % 12]}
            </div>
          ))}
        </div>

        {/* Additional Matrix Columns */}
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 25 }).map((_, i) => (
            <div
              key={i}
              className="absolute flex flex-col text-blue-400 text-xs font-mono"
              style={{
                left: `${i * 4}%`,
                top: '0',
                height: '100%',
                animation: `matrixColumn ${3 + (i % 4) * 1.2}s linear infinite`,
                animationDelay: `${(i % 8) * 0.3}s`
              }}
            >
              {Array.from({ length: 20 }).map((_, j) => (
                <div
                  key={j}
                  className="mb-2"
                  style={{
                    textShadow: '0 0 5px #3b82f6',
                    opacity: (i + j) % 2 === 0 ? 1 : 0.3
                  }}
                >
                  {['1', '0', '█'][j % 3]}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
          @keyframes matrixRain {
            0% { transform: translateY(-20px); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(100vh); opacity: 0; }
          }
          @keyframes matrixColumn {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100vh); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.5s ease-in-out;
          }
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .slider::-webkit-slider-thumb {
            appearance: none;
            height: 16px;
            width: 16px;
            border-radius: 50%;
            background: linear-gradient(45deg, #3b82f6, #8b5cf6);
            cursor: pointer;
            box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
          }
          .slider::-moz-range-thumb {
            height: 16px;
            width: 16px;
            border-radius: 50%;
            background: linear-gradient(45deg, #3b82f6, #8b5cf6);
            cursor: pointer;
            border: none;
            box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
          }
        `}</style>

      {/* Modern Terminal Window */}
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <div className="bg-gray-900/95 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-2xl overflow-hidden">
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-gray-800/80 border-b border-gray-700/50">
            <div className="flex items-center space-x-3">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full shadow-lg"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-lg"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full shadow-lg"></div>
              </div>
              <div className="text-gray-300 text-sm font-medium">bitora-protocol.go</div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full border border-blue-500/30">
                Go 1.21
              </div>
              <div className="px-3 py-1 bg-green-600/20 text-green-400 text-xs rounded-full border border-green-500/30">
                Compiling...
              </div>
            </div>
          </div>

          {/* Code Editor Content */}
          <div className="p-6 font-mono text-sm bg-gray-900/50 min-h-[400px] max-h-[500px] overflow-hidden">
            {/* Line Numbers */}
            <div className="flex">
              <div className="text-gray-500 text-right pr-4 select-none min-w-[3rem]">
                {codeLines.map((_, index) => (
                  <div key={index} className={`leading-6 ${index <= currentLine ? 'opacity-100' : 'opacity-30'}`}>
                    {index + 1}
                  </div>
                ))}
              </div>

              {/* Code Content */}
              <div className="flex-1">
                {codeLines.map((line, index) => (
                  <div key={index} className="leading-6 min-h-[1.5rem]">
                    {index < currentLine ? (
                      <div className="flex items-center">
                        {renderCodeLine(line)}
                        <span className="ml-2 text-green-400 animate-pulse">[OK]</span>
                      </div>
                    ) : index === currentLine ? (
                      <div className="flex items-center">
                        {renderCodeLine(line.substring(0, currentChar))}
                        <span className="bg-blue-400 text-black animate-pulse w-2 inline-block">█</span>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            {isComplete && (
              <div className="mt-6 p-4 bg-green-900/30 border border-green-500/30 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-medium">Compilation successful!</span>
                </div>
                <div className="text-gray-300 text-xs mt-1">
                  → Launching Bitora Protocol Interface...
                </div>
              </div>
            )}
          </div>

          {/* Progress Bar */}
          <div className="px-6 py-3 bg-gray-800/50 border-t border-gray-700/50">
            <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
              <span>Building Bitora Protocol</span>
              <span>{Math.min(Math.round((currentLine / codeLines.length) * 100), 100)}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-1.5">
              <div
                className="bg-gradient-to-r from-blue-500 to-green-500 h-1.5 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${Math.min((currentLine / codeLines.length) * 100, 100)}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Code Genesis Section (Moved to first)
function CodeGenesisSection() {
  return (
    <section id="code-genesis" className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-gray-800">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-mono leading-tight">
            <span className="block sm:inline">[CODE_GENESIS_</span>
            <span className="block sm:inline">PROTOCOL]</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-white max-w-3xl mx-auto font-mono px-4">
            Infrastructure powering autonomous payment systems
          </p>
        </div>
        <CodeDemo />
      </div>
    </section>
  )
}

// Retail Point System Section
function RetailPointSystemSection() {
  return (
    <section id="retail-pos" className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-mono leading-tight">
            [RETAIL_POINT_SYSTEM]
          </h2>
          <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto font-mono px-4 sm:px-0">
            Autonomous transaction processing for physical commerce layers
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 font-mono">POS Architecture:</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-white font-mono">Quantum-resistant payment protocols</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-white font-mono">Real-time compliance matrix verification</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-white font-mono">Biometric authentication layer</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-white font-mono">Autonomous inventory synchronization</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-gray-500/20 rounded-lg p-8">
            <div className="text-center">
              <h4 className="text-xl font-bold text-white mb-4 font-mono">Live Terminal Stats</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-white font-mono">Active Terminals</span>
                  <span className="text-white font-mono">247</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white font-mono">Transaction/Sec</span>
                  <span className="text-white font-mono">1,847</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white font-mono">System Uptime</span>
                  <span className="text-white font-mono">99.97%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white font-mono">Compliance Score</span>
                  <span className="text-white font-mono">A++</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Developer Portal Section
function DeveloperPortalSection() {
  return (
    <section id="dev-portal" className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-mono leading-tight">
            [DEVELOPER_PORTAL_ACCESS]
          </h2>
          <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto font-mono px-4 sm:px-0">
            Direct interface to Bitora infrastructure layers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 border border-gray-500/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4 font-mono">Development SDK</h3>
            <div className="space-y-2">
              <div className="text-white font-mono text-sm">• Direct memory allocation</div>
              <div className="text-white font-mono text-sm">• Quantum state management</div>
              <div className="text-white font-mono text-sm">• Protocol optimization</div>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-gray-500/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4 font-mono">API Matrix</h3>
            <div className="space-y-2">
              <div className="text-white font-mono text-sm">• Real-time data streams</div>
              <div className="text-white font-mono text-sm">• Autonomous smart contracts</div>
              <div className="text-white font-mono text-sm">• Cross-chain bridges</div>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-gray-500/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4 font-mono">Documentation</h3>
            <div className="space-y-2">
              <div className="text-white font-mono text-sm">• Protocol specifications</div>
              <div className="text-white font-mono text-sm">• Integration blueprints</div>
              <div className="text-white font-mono text-sm">• Debugging tools</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Wallet Interface Section
function WalletNeuralSection() {
  return (
    <section id="wallet-neural" className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-mono leading-tight">
            [WALLET_INTERFACE]
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 font-mono">Wallet capabilities:</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-white font-mono">Quantum-encrypted private keys</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-white font-mono">Biometric authentication</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-white font-mono">Multi-dimensional asset storage</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-white font-mono">Autonomous transaction routing</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-gray-500/20 rounded-lg p-8">
            <div className="text-center">
              <h4 className="text-xl font-bold text-white mb-4 font-mono">Wallet Interface</h4>
              <div className="bg-slate-900/50 rounded-lg p-4 font-mono text-sm">
                <div className="text-white mb-2">Balance: $12,847.32</div>
                <div className="text-white mb-2">BTO: 45,247 tokens</div>
                <div className="text-white mb-2">Security Score: 247/255</div>
                <div className="text-white">Status: SYNCHRONIZED</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Ecosystem Section
function NeuralEcosystemSection() {
  return (
    <section id="neural-ecosystem" className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-mono leading-tight">
            [ECOSYSTEM_MATRIX]
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-slate-800/50 border border-gray-500/20 rounded-lg p-6 hover:border-gray-400/40 transition-colors cursor-pointer group">
            <div className="text-center">
              <h3 className="text-lg font-bold text-white font-mono group-hover:text-gray-300 transition-colors">
                Validator Network
              </h3>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-gray-500/20 rounded-lg p-6 hover:border-gray-400/40 transition-colors cursor-pointer group">
            <div className="text-center">
              <h3 className="text-lg font-bold text-white font-mono group-hover:text-gray-300 transition-colors">
                Governance Pathways
              </h3>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-gray-500/20 rounded-lg p-6 hover:border-gray-400/40 transition-colors cursor-pointer group">
            <div className="text-center">
              <h3 className="text-lg font-bold text-white font-mono group-hover:text-gray-300 transition-colors">
                Grant Allocation
              </h3>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-gray-500/20 rounded-lg p-6 hover:border-gray-400/40 transition-colors cursor-pointer group">
            <div className="text-center">
              <h3 className="text-lg font-bold text-white font-mono group-hover:text-gray-300 transition-colors">
                dApp Deployment
              </h3>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-gray-500/20 rounded-lg p-6 hover:border-gray-400/40 transition-colors cursor-pointer group">
            <div className="text-center">
              <h3 className="text-lg font-bold text-white font-mono group-hover:text-gray-300 transition-colors">
                Liquidity Pools
              </h3>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-gray-500/20 rounded-lg p-6 hover:border-gray-400/40 transition-colors cursor-pointer group">
            <div className="text-center">
              <h3 className="text-lg font-bold text-white font-mono group-hover:text-gray-300 transition-colors">
                Documentation Hub
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Exchange Hub Section
function ExchangeNeuralSection() {
  return (
    <section id="exchange-neural" className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-mono leading-tight">
            [EXCHANGE_HUB]
          </h2>
          <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto font-mono px-4 sm:px-0">
            Trading algorithms with pattern recognition
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 font-mono">Trading matrix:</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-white font-mono">Quantum-speed order execution</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-white font-mono">Liquidity optimization</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-white font-mono">Cross-dimensional asset bridging</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-white font-mono">Autonomous MEV protection</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-gray-500/20 rounded-lg p-8">
            <div className="text-center">
              <h4 className="text-xl font-bold text-white mb-4 font-mono">Exchange Stats</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-white font-mono">24h Volume</span>
                  <span className="text-white font-mono">$24.7M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white font-mono">Trading Pairs</span>
                  <span className="text-white font-mono">247</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white font-mono">Liquidity TVL</span>
                  <span className="text-white font-mono">$128.4M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white font-mono">Execution Speed</span>
                  <span className="text-white font-mono">0.03ms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Support Network Section
function SupportNeuralSection() {
  return (
    <section id="support-neural" className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-mono leading-tight">
            [SUPPORT_NETWORK]
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-slate-800/50 border border-gray-500/20 rounded-lg p-4 hover:border-gray-400/40 transition-colors cursor-pointer">
            <h3 className="text-white font-mono text-sm font-bold">
              Documentation Matrix
            </h3>
          </div>
          <div className="bg-slate-800/50 border border-gray-500/20 rounded-lg p-4 hover:border-gray-400/40 transition-colors cursor-pointer">
            <h3 className="text-white font-mono text-sm font-bold">
              Developer Support
            </h3>
          </div>
          <div className="bg-slate-800/50 border border-gray-500/20 rounded-lg p-4 hover:border-gray-400/40 transition-colors cursor-pointer">
            <h3 className="text-white font-mono text-sm font-bold">
              Bug Reporting
            </h3>
          </div>
          <div className="bg-slate-800/50 border border-gray-500/20 rounded-lg p-4 hover:border-gray-400/40 transition-colors cursor-pointer">
            <h3 className="text-white font-mono text-sm font-bold">
              24/7 Assistance
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}

// Pizza Store Statistics Section
function PizzaNeuralExperienceSection() {
  const [stats, setStats] = useState({
    pizzaStores: 247,
    dailyOrders: 12847,
    pizzasCreated: 248570,
    avgOrderValue: 24.7,
    btoProcessed: 84750,
    countries: 12,
    totalRevenue: 2847000,
    posTerminals: 389
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        pizzaStores: prev.pizzaStores + (Math.random() > 0.95 ? 1 : 0),
        dailyOrders: prev.dailyOrders + Math.floor(Math.random() * 50),
        pizzasCreated: prev.pizzasCreated + Math.floor(Math.random() * 100),
        avgOrderValue: prev.avgOrderValue + (Math.random() - 0.5) * 0.5,
        btoProcessed: prev.btoProcessed + Math.floor(Math.random() * 100),
        countries: prev.countries + (Math.random() > 0.99 ? 1 : 0),
        totalRevenue: prev.totalRevenue + Math.floor(Math.random() * 1000),
        posTerminals: prev.posTerminals + (Math.random() > 0.97 ? 1 : 0)
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="pizza-neural" className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-mono leading-tight">
            [PIZZA_STORE_NETWORK]
          </h2>
          <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto font-mono px-4 sm:px-0">
            Global pizza stores powered by Bitora POS infrastructure
          </p>
          <div className="mt-4 p-4 bg-green-900/20 border border-green-500/30 rounded-lg max-w-md mx-auto">
            <p className="text-green-400 font-mono text-sm font-bold">
              *LIVE NETWORK STATUS: OPERATIONAL
            </p>
          </div>
        </div>

        {/* Pizza Store Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-slate-800/50 border border-gray-500/20 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-white font-mono mb-2">{stats.pizzaStores}</div>
            <div className="text-sm text-white font-mono">Active Pizza Stores</div>
          </div>

          <div className="bg-slate-800/50 border border-gray-500/20 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-white font-mono mb-2">{stats.dailyOrders.toLocaleString()}</div>
            <div className="text-sm text-white font-mono">Daily Orders</div>
          </div>

          <div className="bg-slate-800/50 border border-gray-500/20 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-white font-mono mb-2">{stats.pizzasCreated.toLocaleString()}</div>
            <div className="text-sm text-white font-mono">Total Pizzas Created</div>
          </div>

          <div className="bg-slate-800/50 border border-gray-500/20 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-white font-mono mb-2">${stats.avgOrderValue.toFixed(2)}</div>
            <div className="text-sm text-white font-mono">Avg Order Value</div>
          </div>

          <div className="bg-slate-800/50 border border-gray-500/20 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-white font-mono mb-2">{stats.btoProcessed.toLocaleString()}</div>
            <div className="text-sm text-white font-mono">BTO Processed</div>
          </div>

          <div className="bg-slate-800/50 border border-gray-500/20 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-white font-mono mb-2">{stats.countries}</div>
            <div className="text-sm text-white font-mono">Countries</div>
          </div>

          <div className="bg-slate-800/50 border border-gray-500/20 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-white font-mono mb-2">${(stats.totalRevenue / 1000000).toFixed(1)}M</div>
            <div className="text-sm text-white font-mono">Total Revenue</div>
          </div>

          <div className="bg-slate-800/50 border border-gray-500/20 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-white font-mono mb-2">{stats.posTerminals}</div>
            <div className="text-sm text-white font-mono">POS Terminals</div>
          </div>
        </div>

        {/* Pizza Store Network Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 font-mono">Network Performance:</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-white font-mono">99.97% POS system uptime</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-white font-mono">Average transaction time: 2.3 seconds</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-white font-mono">Multi-currency support enabled</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-white font-mono">Real-time inventory synchronization</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-gray-500/20 rounded-lg p-8">
            <div className="text-center">
              <h4 className="text-xl font-bold text-white mb-4 font-mono">Network Status</h4>
              <div className="bg-slate-900/50 rounded-lg p-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-white font-mono">System Status</span>
                  <span className="text-green-400 font-mono">OPERATIONAL</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white font-mono">Network Load</span>
                  <span className="text-white font-mono">72%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white font-mono">Response Time</span>
                  <span className="text-white font-mono">2.3ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white font-mono">Active Connections</span>
                  <span className="text-white font-mono">{stats.posTerminals}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white font-mono">Success Rate</span>
                  <span className="text-green-400 font-mono">99.97%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future Expansion Info */}
        <div className="mt-12 p-6 bg-slate-800/50 border border-red-500/20 rounded-lg text-center">
          <h4 className="text-lg font-bold text-red-400 mb-3 font-mono">EXPANSION ROADMAP</h4>
          <p className="text-white font-mono text-sm mb-4">
            Pizza store network expansion planned for 2025-2029
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="text-white font-mono">
              <span className="text-red-400">2025:</span> 500+ stores
            </div>
            <div className="text-white font-mono">
              <span className="text-red-400">2027:</span> 2,000+ stores
            </div>
            <div className="text-white font-mono">
              <span className="text-red-400">2029:</span> 10,000+ stores
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  if (isLoading) {
    return <TerminalLoader onComplete={handleLoadingComplete} />
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <MatrixBackground />
      <Navigation />
      <HeroSection />
      <CodeGenesisSection />
      <RetailPointSystemSection />
      <DeveloperPortalSection />
      <WalletNeuralSection />
      <NeuralEcosystemSection />
      <ExchangeNeuralSection />
      <SupportNeuralSection />
      <PizzaNeuralExperienceSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  )
}
