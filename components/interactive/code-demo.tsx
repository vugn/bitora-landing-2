"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Database, Shield, Network, Code, Sparkles, Rocket } from 'lucide-react'
import { Button } from '@/components/ui/button'

// TypewriterText Component
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
export function CodeDemo() {
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
                                        <span className="text-blue-400">{quantumState.coherence.toFixed(0)}%</span>
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
                            {aiAssistant.active ? 'AI Active' : 'Activate AI'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Clean Card Layout */}
            <div className="relative">
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
                        backgroundSize: '20px 20px'
                    }}></div>
                </div>

                {/* Cards Grid */}
                <div className={`relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full transition-all duration-300 ${visualEffects.glitch ? 'animate-pulse filter blur-[1px]' : ''
                    } ${visualEffects.hologram ? 'opacity-80' : ''
                    }`}>
                    {codingSteps.map((step, index) => {
                        const status = getCardStatus(index)
                        return (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{
                                    opacity: 1,
                                    scale: status === 'active' ? 1.02 : 1,
                                    y: status === 'active' ? -2 : 0
                                }}
                                transition={{ duration: 0.3 }}
                                className={`relative overflow-hidden rounded-xl border transition-all duration-300 min-h-[280px] sm:min-h-[320px] w-full ${status === 'completed'
                                    ? 'border-green-500/50 bg-gray-900/50 shadow-lg shadow-green-500/10'
                                    : status === 'active'
                                        ? 'border-red-500/50 bg-gray-900/50 shadow-lg shadow-red-500/10'
                                        : 'border-gray-600/30 bg-gray-900/50'
                                    }`}
                            >
                                {/* Progress indicator */}
                                <div className={`absolute top-0 left-0 h-1 transition-all duration-1000 ${status === 'completed'
                                    ? 'w-full bg-green-500'
                                    : status === 'active'
                                        ? 'w-1/2 bg-red-500 animate-pulse'
                                        : 'w-0 bg-gray-500'
                                    }`}></div>
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
