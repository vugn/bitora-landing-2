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

// Solar System Component
function SolarSystem({ activeNode }: { activeNode: number | null }) {
  const groupRef = useRef<THREE.Group>(null!)
  const planetRefs = useRef<(THREE.Group | null)[]>([])
  const [time, setTime] = useState(0)

  useFrame((state) => {
    setTime(state.clock.elapsedTime)
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0005 // Very slow system rotation
    }
    
    // Animate planets in orbital motion
    planetRefs.current.forEach((planetGroup, index) => {
      if (planetGroup) {
        const planet = planets[index]
        const speed = 0.3 + index * 0.1 // Different orbital speeds
        const angle = state.clock.elapsedTime * speed
        
        planetGroup.position.x = Math.cos(angle) * planet.distance
        planetGroup.position.z = Math.sin(angle) * planet.distance
        planetGroup.position.y = 2 + Math.sin(angle * 0.3) * 0.2 // Slight vertical oscillation
        
        // Planet self-rotation
        planetGroup.rotation.y += 0.01 + index * 0.003
      }
    })
  })

  // Generate circuit-style orbital paths
  const generateOrbitPath = (radius: number) => {
    const points: [number, number, number][] = []
    const segments = 128 // More segments for smoother circuit lines
    
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2
      // Add slight circuit-like variations
      const variation = Math.sin(angle * 8) * 0.1
      const x = Math.cos(angle) * (radius + variation)
      const z = Math.sin(angle) * (radius + variation)
      const y = 2 + Math.sin(angle * 4) * 0.05 // Slight vertical wave
      points.push([x, y, z])
    }
    
    return points
  }

  // Solar system planets data with proper distances
  const planets = [
    { name: 'FEATURES', color: '#10b981', size: 0.8, distance: 5 },
    { name: 'PIZZA', color: '#f59e0b', size: 1.0, distance: 7 },
    { name: 'ROADMAP', color: '#8b5cf6', size: 1.2, distance: 9 },
    { name: 'ECOSYSTEM', color: '#06d6a0', size: 1.4, distance: 11 },
  ]

  return (
    <group ref={groupRef}>
      {/* Space background with stars */}
      <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[80, 80]} />
        <meshStandardMaterial 
          color="#000510" 
          transparent 
          opacity={0.9}
          emissive="#001122"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Central Sun */}
      <mesh position={[0, 2, 0]}>
        <sphereGeometry args={[1.8, 32, 32]} />
        <meshStandardMaterial
          color="#ffaa00"
          emissive="#ff6600"
          emissiveIntensity={0.9 + Math.sin(time * 2) * 0.3}
        />
      </mesh>
      
      {/* Sun corona layers */}
      <mesh position={[0, 2, 0]}>
        <sphereGeometry args={[2.2, 32, 32]} />
        <meshBasicMaterial
          color="#ffaa00"
          transparent
          opacity={0.3 + Math.sin(time * 1.5) * 0.1}
          side={2}
        />
      </mesh>
      
      <mesh position={[0, 2, 0]}>
        <sphereGeometry args={[2.6, 32, 32]} />
        <meshBasicMaterial
          color="#ff8800"
          transparent
          opacity={0.15 + Math.sin(time * 1.2) * 0.05}
          side={2}
        />
      </mesh>

      {/* Circuit-style Orbital Paths with Plasma Effect */}
      {planets.map((planet, index) => {
        const orbitPath = generateOrbitPath(planet.distance)
        const isActive = activeNode !== null && index + 1 === activeNode
        
        return (
          <group key={`orbit-group-${index}`}>
            {/* Main Circuit Line */}
            <Line
              points={orbitPath}
              color={isActive ? planet.color : '#66ccff'}
              transparent
              opacity={isActive ? 1.0 : 0.7}
            />
            
            {/* Plasma Glow Effect */}
            <Line
              points={orbitPath}
              color={isActive ? '#ffffff' : '#88ddff'}
              transparent
              opacity={isActive ? 0.6 : 0.3}
            />
            
            {/* Circuit Nodes */}
            {orbitPath.filter((_, i) => i % 8 === 0).map((point, nodeIndex) => (
              <mesh key={`node-${index}-${nodeIndex}`} position={point}>
                <sphereGeometry args={[0.05, 8, 8]} />
                <meshBasicMaterial 
                  color={isActive ? planet.color : '#66ccff'}
                  transparent
                  opacity={isActive ? 1.0 : 0.8}
                />
              </mesh>
            ))}
            
            {/* Plasma Particles */}
            {isActive && Array.from({ length: 12 }).map((_, particleIndex) => {
              const angle = (particleIndex / 12) * Math.PI * 2 + time * 2
              const x = Math.cos(angle) * planet.distance
              const z = Math.sin(angle) * planet.distance
              const y = 2 + Math.sin(time * 3 + particleIndex) * 0.2
              
              return (
                <mesh key={`plasma-${index}-${particleIndex}`} position={[x, y, z]}>
                  <sphereGeometry args={[0.08, 6, 6]} />
                  <meshBasicMaterial 
                    color={planet.color}
                    transparent
                    opacity={0.8 + Math.sin(time * 4 + particleIndex) * 0.2}
                  />
                </mesh>
              )
            })}
          </group>
        )
      })}
      
      {/* Orbiting planets (invisible placeholders for ContentNode positioning) */}
      {planets.map((planet, index) => (
        <group
          key={`planet-${index}`}
          ref={(el) => {
            if (planetRefs.current) {
              planetRefs.current[index] = el
            }
          }}
        >
          {/* This will be overridden by ContentNode positioning */}
        </group>
      ))}

      {/* Solar Energy Beams to active planet */}
      {activeNode !== null && activeNode > 0 && activeNode <= planets.length && (
        <Line
          points={[
            [0, 2, 0],
            [
              Math.cos((time * (0.3 + (activeNode - 1) * 0.1))) * planets[activeNode - 1].distance,
              2 + Math.sin((time * (0.3 + (activeNode - 1) * 0.1)) * 0.3) * 0.2,
              Math.sin((time * (0.3 + (activeNode - 1) * 0.1))) * planets[activeNode - 1].distance
            ]
          ]}
          color={planets[activeNode - 1].color}
          transparent
          opacity={0.7 + Math.sin(time * 3) * 0.2}
        />
      )}

      {/* Asteroid belt */}
      {Array.from({ length: 30 }, (_, i) => {
        const angle = (i / 30) * Math.PI * 2 + time * 0.05
        const radius = 13 + Math.sin(i * 0.5) * 1.5
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius
        const y = 2 + Math.sin(i * 2 + time * 0.3) * 0.3
        
        return (
          <mesh key={`asteroid-${i}`} position={[x, y, z]}>
            <sphereGeometry args={[0.03 + Math.sin(i) * 0.02, 6, 6]} />
            <meshStandardMaterial
              color="#666666"
              metalness={0.7}
              roughness={0.5}
            />
          </mesh>
        )
      })}
      
      {/* Distant stars */}
      {Array.from({ length: 50 }, (_, i) => {
        const angle = (i / 50) * Math.PI * 2
        const radius = 25 + Math.random() * 10
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius
        const y = 2 + (Math.random() - 0.5) * 8
        
        return (
          <mesh key={`star-${i}`} position={[x, y, z]}>
            <sphereGeometry args={[0.02, 4, 4]} />
            <meshBasicMaterial
              color="#aaccff"
            />
          </mesh>
        )
      })}

      {/* Quantum Processing Nodes */}
      {[
        { pos: [0, 2, 0] as [number, number, number], size: 0.4, type: 'quantum-core', color: '#ff6b6b' },
        { pos: [-8, 2, -6] as [number, number, number], size: 0.25, type: 'feature-node', color: '#10b981' },
        { pos: [8, 2, -6] as [number, number, number], size: 0.25, type: 'pizza-node', color: '#f59e0b' },
        { pos: [-8, 2, 6] as [number, number, number], size: 0.25, type: 'roadmap-node', color: '#8b5cf6' },
        { pos: [8, 2, 6] as [number, number, number], size: 0.25, type: 'ecosystem-node', color: '#06d6a0' },
        
        // Quantum processors
        { pos: [-4, 1, -3] as [number, number, number], size: 0.12, type: 'processor', color: '#3b82f6' },
        { pos: [4, 1, -3] as [number, number, number], size: 0.12, type: 'processor', color: '#3b82f6' },
        { pos: [-4, 1, 3] as [number, number, number], size: 0.12, type: 'processor', color: '#3b82f6' },
        { pos: [4, 1, 3] as [number, number, number], size: 0.12, type: 'processor', color: '#3b82f6' },
        { pos: [0, 1, -4] as [number, number, number], size: 0.12, type: 'processor', color: '#3b82f6' },
        { pos: [0, 1, 4] as [number, number, number], size: 0.12, type: 'processor', color: '#3b82f6' },
      ].map((node, i) => {
        const isActive = activeNode !== null
        const pulsePhase = time * 2 + i * 0.5
        const pulseIntensity = isActive ? 0.3 + Math.sin(pulsePhase) * 0.2 : 0.1
        const scaleMultiplier = node.type === 'quantum-core' ? 1.2 + Math.sin(pulsePhase * 0.5) * 0.1 : 1
        
        return (
          <group key={`quantum-node-${i}`} position={node.pos}>
            <Sphere args={[node.size * scaleMultiplier]}>
              <meshStandardMaterial
                color={isActive ? node.color : "#4b5563"}
                emissive={node.color}
                emissiveIntensity={pulseIntensity}
                transparent
                opacity={0.9}
                metalness={0.3}
                roughness={0.2}
              />
            </Sphere>
            
            {/* Quantum field around core */}
            {node.type === 'quantum-core' && (
              <Sphere args={[node.size * 2]}>
                <meshStandardMaterial
                  color={node.color}
                  transparent
                  opacity={0.1 + Math.sin(pulsePhase) * 0.05}
                  emissive={node.color}
                  emissiveIntensity={0.1}
                />
              </Sphere>
            )}
          </group>
        )
      })}

      {/* Quantum Energy Particles */}
      {Array.from({ length: 20 }, (_, i) => {
        const angle = (i / 20) * Math.PI * 2
        const radius = 12 + Math.sin(time + i) * 2
        const x = Math.cos(angle + time * 0.1) * radius
        const z = Math.sin(angle + time * 0.1) * radius
        const y = 1 + Math.sin(time * 2 + i) * 0.5
        
        return (
          <Sphere key={`quantum-particle-${i}`} position={[x, y, z]} args={[0.05]}>
            <meshStandardMaterial
              color="#00d4ff"
              emissive="#00d4ff"
              emissiveIntensity={0.6 + Math.sin(time * 3 + i) * 0.3}
              transparent
              opacity={0.8}
            />
          </Sphere>
        )
      })}
    </group>
  )
}

// Content Node Component
function ContentNode({ position, title, isActive, onClick }: any) {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
      if (isActive) {
        meshRef.current.scale.setScalar(1.1 + Math.sin(state.clock.elapsedTime * 3) * 0.1)
      } else {
        meshRef.current.scale.setScalar(1)
      }
    }
  })

  // Planet sizes for solar system
  const getPlanetSize = (title: string) => {
    switch(title) {
      case 'FEATURES':
        return 1.2 // Mercury-like
      case 'PIZZA':
        return 1.5 // Venus-like
      case 'ROADMAP':
        return 1.8 // Earth-like
      case 'ECOSYSTEM':
        return 2.0 // Mars-like
      default:
        return 1.0
    }
  }

  const getColor = () => {
    switch(title) {
      case 'FEATURES':
        return isActive ? "#10b981" : "#065f46"
      case 'PIZZA':
        return isActive ? "#f59e0b" : "#92400e"
      case 'ROADMAP':
        return isActive ? "#8b5cf6" : "#5b21b6"
      case 'ECOSYSTEM':
        return isActive ? "#06d6a0" : "#047857"
      default:
        return isActive ? "#3b82f6" : "#1e40af"
    }
  }

  return (
    <group position={position} onClick={onClick}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[getPlanetSize(title), 32, 32]} />
        <meshStandardMaterial
          color={getColor()}
          emissive={getColor()}
          emissiveIntensity={isActive ? 0.4 : 0.25}
          metalness={0.6}
          roughness={0.3}
          transparent
          opacity={isActive ? 1.0 : 0.8}
        />
      </mesh>
      {/* Planet Ring for active planet */}
      {isActive && (
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[getPlanetSize(title) + 0.3, getPlanetSize(title) + 0.5, 32]} />
          <meshBasicMaterial
            color={getColor()}
            transparent
            opacity={0.3}
            side={2}
          />
        </mesh>
      )}
      <group>
        {/* Text Shadow/Outline */}
        <Text
          position={[0, 2.5, 0.01]}
          fontSize={0.6}
          color="#000000"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="#000000"
        >
          {title}
        </Text>
        
        {/* Main Text */}
        <Text
          position={[0, 2.5, 0.02]}
          fontSize={0.6}
          color={isActive ? getColor() : "#ffffff"}
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.01}
          outlineColor="#333333"
        >
          {title}
        </Text>
        
        {/* Glow Effect */}
         <Text
           position={[0, 2.5, 0.03]}
           fontSize={0.62}
           color={isActive ? "#ffffff" : "#cccccc"}
           anchorX="center"
           anchorY="middle"
         >
           {title}
         </Text>
      </group>
    </group>
  )
}

// Solar Energy Beam Component
function SolarEnergyBeam({ start, end, activeNode, streamColor = "#ffaa00" }: {
  start: [number, number, number]
  end: [number, number, number]
  activeNode: number | null
  streamColor?: string
}) {
  const streamRef = useRef<THREE.Group>(null!)
  const [time, setTime] = useState(0)
  const [dataPackets, setDataPackets] = useState<Array<{ id: number; progress: number; phase: number }>>([]);

  useFrame((state) => {
    setTime(state.clock.elapsedTime)
  })

  useEffect(() => {
    if (!activeNode) return
    
    // Create quantum data packets
    const packets = Array.from({ length: 3 }, (_, i) => ({
      id: i,
      progress: i * -0.33,
      phase: i * Math.PI * 0.67
    }))
    setDataPackets(packets)
    
    const interval = setInterval(() => {
      setDataPackets(prev => prev.map(packet => ({
        ...packet,
        progress: packet.progress >= 1.2 ? -0.2 : packet.progress + 0.018
      })))
    }, 40)
    
    return () => clearInterval(interval)
  }, [activeNode])

  // Generate quantum tunnel path
  const getQuantumPath = (start: [number, number, number], end: [number, number, number]): [number, number, number][] => {
    const path: [number, number, number][] = []
    const steps = 16
    
    for (let i = 0; i <= steps; i++) {
      const t = i / steps
      const smoothT = t * t * (3 - 2 * t)
      
      // Create quantum tunnel effect with helical motion
      const helixRadius = 0.3 * Math.sin(t * Math.PI)
      const helixAngle = t * Math.PI * 4 + time * 0.5
      
      const x = start[0] + (end[0] - start[0]) * smoothT + Math.cos(helixAngle) * helixRadius
      const y = start[1] + (end[1] - start[1]) * smoothT + Math.sin(helixAngle) * helixRadius * 0.5
      const z = start[2] + (end[2] - start[2]) * smoothT + Math.sin(helixAngle + Math.PI/2) * helixRadius
      
      path.push([x, y, z] as [number, number, number])
    }
    
    return path
  }

  const pathPoints = getQuantumPath(start, end)

  // Calculate position along quantum path
  const getQuantumPosition = (progress: number): [number, number, number] => {
    if (progress <= 0) return pathPoints[0]
    if (progress >= 1) return pathPoints[pathPoints.length - 1]
    
    const scaledProgress = progress * (pathPoints.length - 1)
    const index = Math.floor(scaledProgress)
    const t = scaledProgress - index
    
    if (index >= pathPoints.length - 1) return pathPoints[pathPoints.length - 1]
    
    const current = pathPoints[index]
    const next = pathPoints[index + 1]
    
    return [
      current[0] + (next[0] - current[0]) * t,
      current[1] + (next[1] - current[1]) * t,
      current[2] + (next[2] - current[2]) * t
    ]
  }

  if (!activeNode) return null

  return (
    <group ref={streamRef}>
      {/* Quantum tunnel visualization */}
      <Line
        points={pathPoints}
        color={streamColor}
        transparent
        opacity={0.6 + Math.sin(time * 2) * 0.2}
      />
      
      {/* Quantum data packets */}
      {dataPackets.filter(packet => packet.progress >= 0 && packet.progress <= 1).map((packet) => {
        const position = getQuantumPosition(packet.progress)
        const size = 0.06 + Math.sin(time * 4 + packet.phase) * 0.02
        const intensity = 0.8 + Math.sin(time * 3 + packet.phase) * 0.2
        
        return (
          <group key={packet.id}>
            {/* Core data packet */}
            <Sphere position={position} args={[size]}>
              <meshStandardMaterial
                color={streamColor}
                emissive={streamColor}
                emissiveIntensity={intensity}
                transparent
                opacity={0.9}
              />
            </Sphere>
            
            {/* Quantum field around packet */}
            <Sphere position={position} args={[size * 2.5]}>
              <meshStandardMaterial
                color={streamColor}
                emissive={streamColor}
                emissiveIntensity={0.2}
                transparent
                opacity={0.2}
              />
            </Sphere>
          </group>
        )
      })}
    </group>
  )
}

// 3D Scene Component
function Scene({ activeNode, setActiveNode }: any) {
  const { camera } = useThree()
  const [time, setTime] = useState(0)

  useFrame((state) => {
    setTime(state.clock.elapsedTime)
  })

  useEffect(() => {
    camera.position.set(0, 12, 20)
    camera.lookAt(0, 0, 0)
  }, [camera])

  const getContentPosition = (content: string, time: number = 0): [number, number, number] => {
    const planets = [
      { name: 'FEATURES', distance: 5, speed: 0.3 },
      { name: 'PIZZA', distance: 7, speed: 0.4 },
      { name: 'ROADMAP', distance: 9, speed: 0.5 },
      { name: 'ECOSYSTEM', distance: 11, speed: 0.6 },
    ]
    
    const planet = planets.find(p => p.name === content)
    if (!planet) return [0, 2, 0]
    
    const angle = time * planet.speed
    return [
      Math.cos(angle) * planet.distance,
      2 + Math.sin(angle * 0.3) * 0.2,
      Math.sin(angle) * planet.distance
    ]
  }

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
        <meshBasicMaterial color="#000510" side={2} />
      </mesh>
      
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#3b82f6" />
      <pointLight position={[-10, 10, -10]} intensity={0.8} color="#1e40af" />

      <FloatingParticles />
      <SolarSystem activeNode={activeNode} />

      {nodes.slice(1).map((node) => (
        <ContentNode
          key={node.id}
          position={getContentPosition(node.title, time)}
          title={node.title}
          isActive={activeNode === node.id}
          onClick={() => setActiveNode(node.id)}
        />
      ))}
      
      {/* Central Sun Node */}
      <ContentNode
        key={nodes[0].id}
        position={[0, 2, 0]}
        title={nodes[0].title}
        isActive={activeNode === nodes[0].id}
        onClick={() => setActiveNode(nodes[0].id)}
      />

      {/* Solar Energy Beam Connection */}
      {activeNode !== null && activeNode !== 0 && (
        <SolarEnergyBeam
          start={[0, 2, 0]}
          end={getContentPosition(nodes[activeNode]?.title || '', time)}
          activeNode={activeNode}
          streamColor="#ffaa00"
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
