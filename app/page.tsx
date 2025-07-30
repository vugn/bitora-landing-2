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

    const fontSize = 10
    const columns = canvas.width / fontSize

    const drops: number[] = []
    for (let x = 0; x < columns; x++) {
      drops[x] = 1
    }

    function draw() {
      if (!ctx || !canvas) return
      
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#3B82F6'  // Matrix blue
      ctx.font = fontSize + 'px arial'

      for (let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 35)

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
      className="fixed inset-0 z-0 opacity-20"
      style={{ background: 'black' }}
    />
  )
}

// Navigation Component
function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-xl border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-white font-bold text-xl">Bitora</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
            <a href="#technology" className="text-slate-300 hover:text-white transition-colors">Technology</a>
            <a href="#demo" className="text-slate-300 hover:text-white transition-colors">Demo</a>
            <a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
              <a href="#technology" className="text-slate-300 hover:text-white transition-colors">Technology</a>
              <a href="#demo" className="text-slate-300 hover:text-white transition-colors">Demo</a>
              <a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// Hero Section Component
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            The Future of
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Blockchain</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Bitora Protocol revolutionizes blockchain technology with advanced Golang implementation, 
            quantum-resistant security, and seamless DeFi integration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              <Rocket className="mr-2 h-5 w-5" />
              Launch App
            </Button>
            <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 text-lg">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">99.9%</div>
            <div className="text-slate-300">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">10k+</div>
            <div className="text-slate-300">Transactions/sec</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">$2B+</div>
            <div className="text-slate-300">Total Value Locked</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Features Section Component
function FeaturesSection() {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quantum-Resistant Security",
      description: "Advanced cryptographic protocols protect against future quantum computing threats."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning Fast",
      description: "Process over 10,000 transactions per second with sub-second finality."
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Golang Implementation",
      description: "Built with Go for superior performance, reliability, and developer experience."
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: "Interoperable",
      description: "Seamlessly connect with other blockchains through advanced bridge technology."
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Scalable Architecture",
      description: "Horizontal scaling capabilities to handle enterprise-level workloads."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Developer Friendly",
      description: "Comprehensive SDKs, documentation, and tools for rapid development."
    }
  ]

  return (
    <section id="features" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Discover the cutting-edge capabilities that make Bitora the most advanced blockchain protocol.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/50 border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="text-blue-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Technology Section Component
function TechnologySection() {
  return (
    <section id="technology" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            Built with Cutting-Edge Technology
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our advanced Golang implementation ensures maximum performance and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Why Golang?</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white">Superior Performance</h4>
                  <p className="text-slate-300">Compiled language with garbage collection for optimal speed and memory management.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white">Concurrent by Design</h4>
                  <p className="text-slate-300">Built-in goroutines enable massive parallel processing capabilities.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white">Enterprise Ready</h4>
                  <p className="text-slate-300">Proven reliability in production environments at scale.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800/50 border border-blue-500/20 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-white">Network Statistics</h4>
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-slate-300">TPS</span>
                <span className="text-blue-400 font-mono">12,847</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Block Time</span>
                <span className="text-blue-400 font-mono">0.8s</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Validators</span>
                <span className="text-blue-400 font-mono">2,156</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Network Uptime</span>
                <span className="text-green-400 font-mono">99.97%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Simple Code Demo Component
function CodeDemo() {
  const [currentCode, setCurrentCode] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  
  const codeExample = `package main

import (
    "fmt"
    "github.com/bitora/protocol/core"
    "github.com/bitora/protocol/consensus"
)

func main() {
    // Initialize Bitora Protocol
    protocol := core.NewProtocol()
    
    // Configure quantum-resistant consensus
    consensus := consensus.NewQuantumPoS()
    protocol.SetConsensus(consensus)
    
    // Start the blockchain network
    protocol.Start()
    
    fmt.Println("Bitora Protocol is running!")
}`

  useEffect(() => {
    if (!isTyping) return
    
    const timer = setTimeout(() => {
      if (currentCode.length < codeExample.length) {
        setCurrentCode(codeExample.slice(0, currentCode.length + 1))
      } else {
        setIsTyping(false)
        setTimeout(() => {
          setCurrentCode('')
          setIsTyping(true)
        }, 3000)
      }
    }, 50)
    
    return () => clearTimeout(timer)
  }, [currentCode, isTyping, codeExample])

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-lg overflow-hidden">
      <div className="bg-slate-800 px-4 py-2 flex items-center space-x-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="text-slate-400 text-sm ml-4">bitora-protocol.go</span>
      </div>
      <div className="p-4 font-mono text-sm">
        <pre className="text-green-400">
          <code>{currentCode}</code>
          {isTyping && <span className="bg-green-400 text-black animate-pulse">█</span>}
        </pre>
      </div>
    </div>
  )
}

// About Section Component
function AboutSection() {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
              About Bitora Protocol
            </h2>
            <p className="text-xl text-slate-300 mb-6">
              Bitora represents the next evolution in blockchain technology, combining the power of Golang 
              with innovative consensus mechanisms and quantum-resistant cryptography.
            </p>
            <p className="text-lg text-slate-300 mb-8">
              Our mission is to create a blockchain infrastructure that can scale to meet the demands of 
              global adoption while maintaining the highest standards of security and decentralization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <FileText className="mr-2 h-4 w-4" />
                Read Whitepaper
              </Button>
              <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </Button>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-blue-500/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Global Network</h3>
                    <p className="text-slate-300">Distributed across 50+ countries</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-blue-500/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Security First</h3>
                    <p className="text-slate-300">Quantum-resistant from day one</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-blue-500/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Open Source</h3>
                    <p className="text-slate-300">Transparent and community-driven</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

// Call to Action Section
function CTASection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
          Ready to Build the Future?
        </h2>
        <p className="text-xl text-slate-300 mb-8">
          Join thousands of developers building on the most advanced blockchain protocol.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
            <Rocket className="mr-2 h-5 w-5" />
            Start Building
          </Button>
          <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 text-lg">
            <MessageCircle className="mr-2 h-5 w-5" />
            Join Community
          </Button>
        </div>
      </div>
    </section>
  )
}

// Footer Component
function Footer() {
  return (
    <footer className="relative border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-white font-bold text-xl">Bitora</span>
            </div>
            <p className="text-slate-300 mb-4">
              The future of blockchain technology, built with Golang for maximum performance and security.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                <Github className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                <MessageCircle className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SDKs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">Whitepaper</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            © 2024 Bitora Protocol. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <MatrixBackground />
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <TechnologySection />
      <section id="demo" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
              Live Coding Demo
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Watch our Golang implementation in action.
            </p>
          </div>
          <CodeDemo />
        </div>
      </section>
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  )
}
