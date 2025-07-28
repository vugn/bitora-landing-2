"use client"

import { useState, useEffect, useRef, Suspense, useMemo } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Text, OrbitControls, Sphere } from "@react-three/drei"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import * as THREE from "three"
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
} from "lucide-react"

// Matrix Background Component
function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()

    const chars = '0123456789ABCDEF'
    const charArray = chars.split('')
    const fontSize = 16
    const columns = Math.floor(canvas.width / fontSize)
    const drops: number[] = Array(columns).fill(1)

    function draw() {
      if (!ctx || !canvas) return

      // Fade effect
      ctx.fillStyle = 'rgba(15, 23, 42, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)]

        // Color gradient - blue theme
        const alpha = Math.random() * 0.8 + 0.2
        ctx.fillStyle = `rgba(59, 130, 246, ${alpha})`

        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 100)
    window.addEventListener('resize', resizeCanvas)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 30%, #334155 100%)'
      }}
    />
  )
}

// Terminal Loading Component
function TerminalLoader({ onComplete }: { onComplete: () => void }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  const steps = [
    { text: 'INITIALIZING BITORA PROTOCOL', delay: 8 },
    { text: 'LOADING QUANTUM ENCRYPTION', delay: 7 },
    { text: 'CONNECTING TO VALIDATOR NETWORK', delay: 10 },
    { text: 'SYNCING BLOCKCHAIN STATE', delay: 10 },
    { text: 'ACTIVATING CONSENSUS LAYER', delay: 8 },
    { text: 'LOADING 3D INTERFACE', delay: 10 },
    { text: 'PARSING SMART CONTRACTS', delay: 7 },
    { text: 'FINALIZING INITIALIZATION', delay: 10 },
    { text: 'BITORA PROTOCOL READY 🚀', delay: 12 },
  ]

  const [completedSteps, setCompletedSteps] = useState<boolean[]>(
    new Array(steps.length).fill(false)
  )

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  // Main typing effect
  useEffect(() => {
    if (currentStep >= steps.length) return

    setIsTyping(true)
    setDisplayText('')

    const currentText = steps[currentStep].text
    const typingDelay = steps[currentStep].delay

    let charIndex = 0
    const typeInterval = setInterval(() => {
      if (charIndex < currentText.length) {
        setDisplayText(currentText.slice(0, charIndex + 1))
        charIndex++
      } else {
        clearInterval(typeInterval)
        setIsTyping(false)

        // Mark step as completed
        setCompletedSteps(prev => {
          const newSteps = [...prev]
          newSteps[currentStep] = true
          return newSteps
        })

        // Move to next step after a pause
        setTimeout(() => {
          if (currentStep + 1 >= steps.length) {
            // All steps completed, wait a bit then call onComplete
            setTimeout(() => {
              onComplete()
            }, 80) // Short wait time
          } else {
            setCurrentStep(prev => prev + 1)
          }
        }, 30) // Short transition between steps
      }
    }, typingDelay)

    return () => clearInterval(typeInterval)
  }, [currentStep])

  const progress = ((currentStep) / steps.length) * 100

  return (
    <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
      {/* Terminal Window */}
      <div className="bg-slate-900/95 backdrop-blur-lg border border-blue-500/20 rounded-2xl shadow-2xl overflow-hidden">
        {/* Terminal Header */}
        <div className="bg-slate-800/90 px-6 py-4 border-b border-blue-500/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-blue-400 font-mono text-sm font-semibold">
                BITORA_PROTOCOL_v2.1.0.exe
              </span>
            </div>
            <div className="text-xs text-slate-400 font-mono">
              {Math.round(progress)}%
            </div>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-8 min-h-[500px] font-mono">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-blue-400 text-sm mb-2">
              ╔══════════════════════════════════════════════════════════╗
            </div>
            <div className="text-blue-400 text-sm mb-2">
              ║               BITORA PROTOCOL INITIALIZATION            ║
            </div>
            <div className="text-blue-400 text-sm mb-4">
              ╚══════════════════════════════════════════════════════════╝
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-3 mb-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-6 text-center">
                  {completedSteps[index] ? (
                    <span className="text-green-400">✓</span>
                  ) : index === currentStep ? (
                    <span className="text-blue-400 animate-pulse">●</span>
                  ) : (
                    <span className="text-slate-600">○</span>
                  )}
                </div>
                <div className="flex-1">
                  {index < currentStep ? (
                    <span className="text-green-400">{step.text}</span>
                  ) : index === currentStep ? (
                    <span className="text-blue-300">
                      {displayText}
                      {isTyping && showCursor && (
                        <span className="bg-blue-400 text-blue-900 ml-1">█</span>
                      )}
                    </span>
                  ) : (
                    <span className="text-slate-500">{step.text}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* System Info */}
          <div className="border-t border-slate-700 pt-6 text-xs text-slate-400 space-y-1">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div>NETWORK: Cosmos SDK</div>
                <div>CONSENSUS: Tendermint BFT</div>
              </div>
              <div>
                <div>TOKEN: $BTO</div>
                <div>STATUS: {currentStep >= steps.length ? 'READY' : 'INITIALIZING'}</div>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex justify-between text-xs text-blue-400 mb-2">
              <span>INITIALIZATION PROGRESS</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
              <motion.div
                className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 h-full rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Custom Line Component - Simplified Version
function Line({ points, color = "#ffffff", transparent = false, opacity = 1 }: {
  points: [number, number, number][]
  color?: string
  transparent?: boolean
  opacity?: number
}) {
  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry()
    const positions = new Float32Array(points.length * 3)

    points.forEach((point, i) => {
      positions[i * 3] = point[0]
      positions[i * 3 + 1] = point[1]
      positions[i * 3 + 2] = point[2]
    })

    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return geom
  }, [points])

  return (
    <line>
      <primitive object={geometry} attach="geometry" />
      <lineBasicMaterial color={color} transparent={transparent} opacity={opacity} />
    </line>
  )
}

// Floating Particles Component
function FloatingParticles() {
  const meshRef = useRef<THREE.InstancedMesh>(null!)
  const [particles] = useState(() => {
    return Array.from({ length: 50 }, () => ({
      x: (Math.random() - 0.5) * 40,
      y: (Math.random() - 0.5) * 20,
      z: (Math.random() - 0.5) * 40,
      speed: Math.random() * 0.02 + 0.01,
      phase: Math.random() * Math.PI * 2,
    }))
  })

  useFrame((state) => {
    if (!meshRef.current) return

    const matrix = new THREE.Matrix4()
    particles.forEach((particle, i) => {
      particle.phase += particle.speed
      const y = particle.y + Math.sin(particle.phase) * 2
      matrix.setPosition(particle.x, y, particle.z)
      meshRef.current.setMatrixAt(i, matrix)
    })

    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, 50]}>
      <sphereGeometry args={[0.1]} />
      <meshBasicMaterial color="#3b82f6" transparent opacity={0.6} />
    </instancedMesh>
  )
}

// Circuit Board Component
function CircuitBoard() {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.05
    }
  })

  return (
    <group ref={groupRef}>
      {/* Base circuit board */}
      <mesh position={[0, -0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <meshBasicMaterial color="#0f172a" transparent opacity={0.8} />
      </mesh>

      {/* Circuit paths */}
      {([
        [
          [-15, 0, -15],
          [0, 0, 0],
          [15, 0, 15],
        ],
        [
          [15, 0, -15],
          [0, 0, 0],
          [-15, 0, 15],
        ],
      ] as [number, number, number][][]).map((path, i) => (
        <Line key={i} points={path} color="#3b82f6" transparent opacity={0.6} />
      ))}

      {/* Circuit nodes */}
      {([
        [-12, 0.2, -8],
        [12, 0.2, -8],
        [-12, 0.2, 8],
        [12, 0.2, 8],
        [0, 0.2, 0],
      ] as [number, number, number][]).map((pos, i) => (
        <Sphere key={i} position={pos} args={[0.3]}>
          <meshBasicMaterial color="#3b82f6" />
        </Sphere>
      ))}
    </group>
  )
}

// Content Node Component
function ContentNode({ position, title, isActive, onClick }: any) {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
      meshRef.current.scale.setScalar(isActive ? 1.1 : 1)
    }
  })

  return (
    <group position={position} onClick={onClick}>
      <mesh ref={meshRef}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshBasicMaterial
          color={isActive ? "#3b82f6" : "#1e40af"}
          transparent
          opacity={isActive ? 0.9 : 0.7}
          wireframe={!isActive}
        />
      </mesh>
      <Text
        position={[0, 2.5, 0]}
        fontSize={0.6}
        color={isActive ? "#3b82f6" : "#64748b"}
        anchorX="center"
        anchorY="middle"
      >
        {title}
      </Text>
    </group>
  )
}

// 3D Scene Component
function Scene({ activeNode, setActiveNode }: any) {
  const { camera } = useThree()

  useEffect(() => {
    camera.position.set(0, 12, 20)
    camera.lookAt(0, 0, 0)
  }, [camera])

  const nodes: { id: number; title: string; position: [number, number, number] }[] = [
    { id: 0, title: "PROTOCOL", position: [0, 4, 0] },
    { id: 1, title: "FEATURES", position: [-8, 2, -6] },
    { id: 2, title: "PIZZA", position: [8, 2, -6] },
    { id: 3, title: "ROADMAP", position: [-8, 2, 6] },
    { id: 4, title: "ECOSYSTEM", position: [8, 2, 6] },
  ]

  return (
    <>
      {/* Background sphere */}
      <mesh>
        <sphereGeometry args={[100]} />
        <meshBasicMaterial color="#0f172a" side={2} />
      </mesh>
      
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#3b82f6" />
      <pointLight position={[-10, 10, -10]} intensity={0.8} color="#1e40af" />

      <FloatingParticles />
      <CircuitBoard />

      {nodes.map((node) => (
        <ContentNode
          key={node.id}
          position={node.position}
          title={node.title}
          isActive={activeNode === node.id}
          onClick={() => setActiveNode(node.id)}
        />
      ))}

      {/* Connection lines */}
      {activeNode !== null && activeNode !== 0 && (
        <Line
          points={[nodes[0].position, nodes[activeNode]?.position || [0, 0, 0]]}
          color="#3b82f6"
          transparent
          opacity={0.8}
        />
      )}

      <OrbitControls
        enablePan={false}
        enableZoom={true}
        enableRotate={true}
        minDistance={12}
        maxDistance={30}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  )
}

export default function BitoraLanding() {
  const [activeNode, setActiveNode] = useState<number | null>(0)
  const [isLoading, setIsLoading] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [stats, setStats] = useState({
    btoPrice: 0.4523,
    validators: 147,
    txVolume: 25847,
    tokensCreated: 1267,
    posLocations: 87,
    marketCap: 45234567,
    countries: 14,
  })

  // Loading sequence - remove the timer, let terminal control it
  // useEffect(() => {
  //   const timer = setTimeout(() => setIsLoading(false), 6000)
  //   return () => clearTimeout(timer)
  // }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  // Animate stats
  useEffect(() => {
    if (!isLoading) {
      const interval = setInterval(() => {
        setStats((prev) => ({
          ...prev,
          btoPrice: +(Math.random() * 0.1 + 0.45).toFixed(4),
          validators: Math.floor(Math.random() * 10 + 145),
          txVolume: Math.floor(Math.random() * 1000 + 25000),
          countries: Math.floor(Math.random() * 3 + 12),
        }))
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isLoading])

  const getNodeContent = (nodeId: number | null) => {
    switch (nodeId) {
      case 0:
        return {
          title: "Bitora Protocol",
          subtitle: "Next-Generation Layer 1 Blockchain",
          description:
            "Bitora is a next-generation Layer 1 blockchain built for real-world usage, crypto-native systems, and regulated institutional operations. It enables token creation, real-time trading, retail payments, and fiat compliance—all on-chain.",
          features: [
            "Built using Cosmos SDK with validator scoring",
            "Fast finality and native staking",
            "Gas token is $BTO",
            "Real-world integration ready",
          ],
        }
      case 1:
        return {
          title: "Core Features",
          subtitle: "Modular Infrastructure for Next-Gen Finance",
          description:
            "Comprehensive blockchain infrastructure designed for diverse use cases, from token creation to compliance.",
          features: [
            "Token Generation Engine with compliance templates",
            "Real-World POS System for physical stores",
            "Internal and External Exchange integration",
            "Two-tier Governance with quadratic voting",
            "Built-in Compliance Layer with KYC/AML",
            "Cross-chain compatibility",
          ],
        }
      case 2:
        return {
          title: "Pizza Proof-of-Concept",
          subtitle: "Real-World Blockchain Implementation",
          description:
            "Pizza provides the ideal proof-of-use case, demonstrating high transaction volume economics and real-world utility.",
          features: [
            "High transaction volume, low margin economics",
            "Origin of crypto payments (Bitcoin Pizza, 2010)",
            "Each sale triggers token burns and yield distribution",
            "Compliance reporting built-in",
            "Pizza is the benchmark, not the business",
          ],
        }
      case 3:
        return {
          title: "Development Roadmap",
          subtitle: "Protocol Evolution Timeline",
          description: "Strategic development phases leading to global blockchain adoption and regulatory compliance.",
          features: [
            "2025: Mainnet Live, $BTO Launch, DEX Active",
            "2025: Pizza Stores in Australia/New Zealand",
            "2026: Asia-Pacific Expansion",
            "2026: National Stablecoins (AUDx, PHPx, etc.)",
            "2027+: US and European Regulatory Integration",
            "2027+: Treasury-backed deflation protocol",
          ],
        }
      case 4:
        return {
          title: "Ecosystem & Community",
          subtitle: "Built for Diverse Participants",
          description:
            "Comprehensive ecosystem supporting builders, traders, retailers, institutions, and governments.",
          features: [
            "Developer Documentation and Tools",
            "Validator Network Participation",
            "POS System Integration",
            "Grant Programs for Builders",
            "dApp Launch Platform",
            "Governance Participation",
          ],
        }
      default:
        return {
          title: "Welcome to Bitora",
          subtitle: "Explore the 3D Interface",
          description: "Click on the 3D nodes above to explore different aspects of the Bitora Protocol.",
          features: ["Interactive 3D visualization", "Real-time blockchain data", "Comprehensive protocol overview"],
        }
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900 relative overflow-hidden flex items-center justify-center">
        <MatrixBackground />
        <div className="text-center space-y-6 px-4">
          <TerminalLoader onComplete={handleLoadingComplete} />
        </div>
      </div>
    )
  }

  const nodeContent = getNodeContent(activeNode)

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Database className="h-8 w-8 text-blue-400" />
              <div>
                <div className="text-xl font-bold">Bitora Protocol</div>
                <div className="text-xs text-slate-400 hidden sm:block">Layer 1 Blockchain Infrastructure</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400">Live</span>
                </div>
                <span className="text-slate-400">BTO: ${stats.btoPrice}</span>
                <span className="text-slate-400">Validators: {stats.validators}</span>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-400 hover:text-white"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden mt-4 pt-4 border-t border-slate-700"
              >
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-400">Live</span>
                  </div>
                  <span className="text-slate-400">BTO: ${stats.btoPrice}</span>
                  <span className="text-slate-400">{stats.validators} Validators</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)]">
        {/* 3D Scene */}
        <div className="lg:w-1/2 h-64 sm:h-80 lg:h-auto relative bg-slate-900">
          <Canvas>
            <Suspense fallback={null}>
              <Scene activeNode={activeNode} setActiveNode={setActiveNode} />
            </Suspense>
          </Canvas>

          {/* 3D Controls Info */}
          <div className="absolute bottom-4 left-4 bg-slate-800/90 backdrop-blur-sm border border-slate-600 rounded-lg p-3 text-xs">
            <div className="flex items-center space-x-2 mb-2">
              <Network className="h-4 w-4 text-blue-400" />
              <span className="text-blue-400 font-semibold">3D Controls</span>
            </div>
            <div className="space-y-1 text-slate-300">
              <div>• Click nodes to explore</div>
              <div className="hidden sm:block">• Drag to rotate • Scroll to zoom</div>
            </div>
          </div>
        </div>

        {/* Content Panel */}
        <div className="lg:w-1/2 p-4 lg:p-8 overflow-y-auto">
          <motion.div
            key={activeNode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Header */}
            <div>
              <h1 className="text-2xl lg:text-4xl font-bold text-white mb-2">{nodeContent.title}</h1>
              <p className="text-lg text-blue-400 mb-4">{nodeContent.subtitle}</p>
              <p className="text-slate-300 leading-relaxed">{nodeContent.description}</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
              <div className="space-y-3">
                {nodeContent.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <ChevronRight className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "BTO Price", value: `$${stats.btoPrice}`, icon: <TrendingUp className="h-5 w-5" /> },
                { label: "Validators", value: stats.validators, icon: <Network className="h-5 w-5" /> },
                { label: "Daily TX", value: stats.txVolume.toLocaleString(), icon: <Zap className="h-5 w-5" /> },
                { label: "Countries", value: stats.countries, icon: <Globe className="h-5 w-5" /> },
              ].map((stat, i) => (
                <Card key={i} className="bg-slate-800 border-slate-700">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="text-blue-400">{stat.icon}</div>
                      <div className="text-xs text-slate-400 uppercase">{stat.label}</div>
                    </div>
                    <div className="text-lg font-bold text-white">{stat.value}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Play className="mr-2 h-5 w-5" />
                Launch Protocol
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
              >
                <FileText className="mr-2 h-5 w-5" />
                Read Whitepaper
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-4 border-t border-slate-700">
              <span className="text-slate-400 text-sm">Connect:</span>
              <div className="flex space-x-3">
                {[
                  { icon: <Github className="h-5 w-5" />, href: "#" },
                  { icon: <Twitter className="h-5 w-5" />, href: "#" },
                  { icon: <MessageCircle className="h-5 w-5" />, href: "#" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="text-slate-400 hover:text-blue-400 transition-colors p-2 hover:bg-slate-800 rounded"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
