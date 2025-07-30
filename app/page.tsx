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
  const [networkNodes, setNetworkNodes] = useState<{id: number, x: number, y: number, active: boolean}[]>([])
  const [dataFlow, setDataFlow] = useState<{from: number, to: number, progress: number}[]>([])
  const [systemMetrics, setSystemMetrics] = useState({
    cpu: 0,
    memory: 0,
    network: 0,
    transactions: 0
  })
  const [terminalLogs, setTerminalLogs] = useState<string[]>([])
  const [particleSystem, setParticleSystem] = useState<{id: number, x: number, y: number, vx: number, vy: number}[]>([])
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
      color: "from-blue-500 to-blue-600",
      status: "pending"
    },
    {
      id: 2,
      title: "Quantum Consensus",
      description: "Implementing quantum-resistant consensus",
      code: `consensus := consensus.NewQuantumPoS()\nprotocol.SetConsensus(consensus)\n\n// Quantum-resistant validation\nconsensus.EnableQuantumSecurity()`,
      icon: <Shield className="h-6 w-6" />,
      color: "from-green-500 to-green-600",
      status: "pending"
    },
    {
      id: 3,
      title: "Network Layer",
      description: "Establishing P2P network connections",
      code: `network := network.NewP2PNetwork()\nprotocol.SetNetwork(network)\n\n// Connect to peers\nnetwork.ConnectToPeers()`,
      icon: <Network className="h-6 w-6" />,
      color: "from-purple-500 to-purple-600",
      status: "pending"
    },
    {
      id: 4,
      title: "Smart Contracts",
      description: "Deploying smart contract engine",
      code: `contracts := contracts.NewEngine()\nprotocol.SetContractEngine(contracts)\n\n// Deploy sample contract\ncontract := contracts.Deploy(sampleContract)`,
      icon: <Code className="h-6 w-6" />,
      color: "from-orange-500 to-orange-600",
      status: "pending"
    },
    {
      id: 5,
      title: "Launch Network",
      description: "Starting the blockchain network",
      code: `// Start the protocol\nprotocol.Start()\n\nfmt.Println("Bitora Protocol is running!")\nfmt.Println("Network ready for transactions")`,
      icon: <Rocket className="h-6 w-6" />,
      color: "from-cyan-500 to-cyan-600",
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
          setTerminalLogs(logs => [...logs, `[${new Date().toLocaleTimeString()}] 🚀 Bitora Protocol fully deployed!`])
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
      <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-blue-500/30 p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* System Metrics */}
          <div className="space-y-3">
            <h4 className="text-blue-400 font-semibold text-sm">System Metrics</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-gray-300">CPU</span>
                <span className="text-green-400">{systemMetrics.cpu.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-1.5">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 h-1.5 rounded-full transition-all duration-500" style={{width: `${systemMetrics.cpu}%`}}></div>
              </div>
              
              <div className="flex justify-between text-xs">
                <span className="text-gray-300">Memory</span>
                <span className="text-blue-400">{systemMetrics.memory.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-1.5">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 rounded-full transition-all duration-500" style={{width: `${systemMetrics.memory}%`}}></div>
              </div>
              
              <div className="flex justify-between text-xs">
                <span className="text-gray-300">Network</span>
                <span className="text-purple-400">{systemMetrics.network.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-1.5">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-1.5 rounded-full transition-all duration-500" style={{width: `${systemMetrics.network}%`}}></div>
              </div>
            </div>
          </div>
          
          {/* Network Visualization */}
          <div className="space-y-3">
            <h4 className="text-blue-400 font-semibold text-sm">Network Topology</h4>
            <div className="relative h-24 bg-gray-800/50 rounded-lg overflow-hidden">
              {/* Particle Background */}
              {particleSystem.map(particle => (
                <div
                  key={particle.id}
                  className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
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
                  className={`absolute w-2 h-2 rounded-full transition-all duration-300 ${
                    node.active ? 'bg-green-400 shadow-lg shadow-green-400/50 scale-125' : 'bg-gray-500'
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
          <div className="space-y-3">
            <h4 className="text-blue-400 font-semibold text-sm">Blockchain Stats</h4>
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
          <div className="space-y-3">
            <h4 className="text-blue-400 font-semibold text-sm">System Logs</h4>
            <div className="bg-black/50 rounded-lg p-2 h-24 overflow-y-auto font-mono text-xs">
              {terminalLogs.map((log, i) => (
                <div key={i} className="text-green-400 mb-1 animate-fadeIn">
                  {log}
                </div>
              ))}
            </div>
          </div>
          
          {/* AI Assistant & Quantum Computing */}
          <div className="space-y-3">
            <h4 className="text-blue-400 font-semibold text-sm">AI Assistant</h4>
            <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-lg p-3 h-24 overflow-hidden relative">
              {/* Quantum Visualization */}
              <div className="absolute inset-0 opacity-30">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className={`absolute w-1 h-1 rounded-full ${
                      quantumState.entanglement > 50 ? 'bg-purple-400' : 'bg-blue-400'
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
                  <div className={`w-2 h-2 rounded-full ${
                    aiAssistant.active ? 'bg-green-400 animate-pulse' : 'bg-gray-500'
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
        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <label className="text-sm text-gray-300">Speed:</label>
              <input
                type="range"
                min="500"
                max="5000"
                step="500"
                value={simulationSpeed}
                onChange={(e) => setSimulationSpeed(Number(e.target.value))}
                className="w-32 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              />
              <span className="text-xs text-blue-400">{(6000 - simulationSpeed) / 1000}x</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${
                isSimulating ? 'bg-green-400 animate-pulse' : 'bg-red-400'
              }`}></div>
              <span className="text-sm text-gray-300">
                {isSimulating ? 'Running' : 'Stopped'}
              </span>
            </div>
          </div>
          
          {/* Advanced Mode Controls */}
          <div className="flex items-center justify-between border-t border-gray-700/50 pt-4">
            <div className="flex items-center space-x-6">
              {/* Hacking Mode */}
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hackingMode}
                  onChange={(e) => setHackingMode(e.target.checked)}
                  className="sr-only"
                />
                <div className={`w-10 h-6 rounded-full transition-all duration-300 ${
                  hackingMode ? 'bg-red-500' : 'bg-gray-600'
                } relative`}>
                  <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all duration-300 ${
                    hackingMode ? 'left-5' : 'left-1'
                  }`}></div>
                </div>
                <span className={`text-sm ${
                  hackingMode ? 'text-red-400' : 'text-gray-300'
                }`}>Hacking Mode</span>
              </label>
              
              {/* Visual Effects */}
              <button
                onClick={() => setVisualEffects(prev => ({ ...prev, matrix: !prev.matrix }))}
                className={`px-3 py-1 rounded-lg text-xs transition-all ${
                  visualEffects.matrix 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-gray-700/50 text-gray-300 border border-gray-600/30'
                }`}
              >
                Matrix FX
              </button>
              
              <button
                onClick={() => setVisualEffects(prev => ({ ...prev, hologram: !prev.hologram }))}
                className={`px-3 py-1 rounded-lg text-xs transition-all ${
                  visualEffects.hologram 
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
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                aiAssistant.active
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
         <div className={`relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-full transition-all duration-300 ${
           visualEffects.glitch ? 'animate-pulse filter blur-[1px]' : ''
         } ${
           visualEffects.hologram ? 'opacity-80' : ''
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
                className={`relative overflow-hidden rounded-xl border-2 transition-all duration-300 min-h-[320px] max-w-full ${
                   status === 'completed' 
                     ? 'border-green-500 bg-green-900/20' 
                     : status === 'active'
                     ? 'border-blue-500 bg-blue-900/20 shadow-lg shadow-blue-500/25'
                     : 'border-gray-600 bg-gray-900/50'
                 } ${
                   hackingMode && status === 'active' ? 'border-red-500 bg-red-900/20 shadow-lg shadow-red-500/25' : ''
                 } ${
                   visualEffects.matrix && status === 'active' ? 'animate-bounce' : ''
                 } ${
                   soundEffects.typing && status === 'active' ? 'ring-2 ring-blue-400/50' : ''
                 }`}
              >
                {/* Card Header */}
                <div className={`p-4 bg-gradient-to-r ${step.color} bg-opacity-10`}>
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${step.color} text-white flex-shrink-0`}>
                      {step.icon}
                    </div>
                    <div className="flex-1 min-w-0 overflow-hidden">
                       <h3 className="text-white font-semibold text-sm truncate">{step.title}</h3>
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
                        <div className="w-6 h-6 bg-blue-500 rounded-full animate-pulse"></div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Code Preview */}
                 <div className="p-3 flex-1">
                    <div className="bg-gray-900 rounded-lg p-3 font-mono text-xs h-32 overflow-hidden">
                      <div className={`h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 ${
                        status === 'completed' ? 'text-green-400' :
                        status === 'active' ? 'text-blue-400' : 'text-gray-500'
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
                              <span className="block whitespace-pre-wrap break-words">{line}</span>
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
                          <span className="bg-blue-400 text-black inline-block w-2 h-3 mr-1">█</span>
                          <span className="text-blue-400 text-xs">Typing...</span>
                        </motion.div>
                      )}
                    </div>
                  </div>

                {/* Progress Indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1">
                  <div className={`h-full transition-all duration-500 ${
                    status === 'completed' ? 'bg-green-500 w-full' :
                    status === 'active' ? 'bg-blue-500 w-3/4 animate-pulse' : 'bg-gray-600 w-0'
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
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
        >
          {isSimulating ? 'Pause Simulation' : 'Start Simulation'}
        </Button>
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
