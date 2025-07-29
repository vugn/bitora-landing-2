"use client"

import { useState, useEffect, useRef } from "react"
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
  Code,
  Terminal,
  Save,
  Sparkles,
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
      className="fixed inset-0 z-0"
      style={{ background: 'black' }}
    />
  )
}

// Modern Loading Component
function ModernLoader({ onComplete }: { onComplete: () => void }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)

  const steps = [
    { text: 'Initializing Bitora Protocol', icon: '🚀' },
    { text: 'Loading Quantum Encryption', icon: '🔐' },
    { text: 'Connecting Validator Network', icon: '🌐' },
    { text: 'Syncing Blockchain State', icon: '⛓️' },
    { text: 'Activating Consensus Layer', icon: '⚡' },
    { text: 'Loading 3D Interface', icon: '🎯' },
    { text: 'Parsing Smart Contracts', icon: '📋' },
    { text: 'Finalizing Setup', icon: '✨' },
  ]

  const [completedSteps, setCompletedSteps] = useState<boolean[]>(
    new Array(steps.length).fill(false)
  )

  // Auto progress through steps
  useEffect(() => {
    if (currentStep >= steps.length) {
      setTimeout(() => onComplete(), 1000)
      return
    }

    const timer = setTimeout(() => {
      setCompletedSteps(prev => {
        const newSteps = [...prev]
        newSteps[currentStep] = true
        return newSteps
      })
      
      setTimeout(() => {
        setCurrentStep(prev => prev + 1)
        setProgress(((currentStep + 1) / steps.length) * 100)
      }, 200)
    }, 300)

    return () => clearTimeout(timer)
  }, [currentStep, onComplete])

  useEffect(() => {
    setProgress((currentStep / steps.length) * 100)
  }, [currentStep])

  return (
    <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6">
      {/* Terminal Window */}
      <div className="bg-slate-900/98 backdrop-blur-xl border border-blue-400/30 rounded-3xl shadow-2xl overflow-hidden">
        {/* Terminal Header */}
        <div className="bg-gradient-to-r from-slate-800/95 to-slate-700/95 px-4 sm:px-6 py-3 sm:py-4 border-b border-blue-400/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="flex space-x-1.5 sm:space-x-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full animate-pulse"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
              <span className="text-blue-300 font-mono text-xs sm:text-sm font-semibold truncate">
                BITORA_PROTOCOL_v2.1.0.exe
              </span>
            </div>
            <div className="text-xs text-blue-300 font-mono bg-blue-500/20 px-2 py-1 rounded-lg">
              {Math.round(progress)}%
            </div>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-4 sm:p-6 lg:p-8 min-h-[400px] sm:min-h-[500px] font-mono">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="text-blue-300 text-xs sm:text-sm mb-2 hidden sm:block">
              ╔══════════════════════════════════════════════════════════╗
            </div>
            <div className="text-blue-300 text-xs sm:text-sm mb-2 px-2">
              <span className="hidden sm:inline">║</span> BITORA PROTOCOL INITIALIZATION <span className="hidden sm:inline">║</span>
            </div>
            <div className="text-blue-300 text-xs sm:text-sm mb-4 hidden sm:block">
              ╚══════════════════════════════════════════════════════════╝
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center space-x-2 sm:space-x-3 p-2 rounded-lg hover:bg-slate-800/50 transition-colors">
                <div className="w-8 sm:w-10 text-center">
                  {completedSteps[index] ? (
                    <span className="text-green-400 text-sm sm:text-base">✓</span>
                  ) : index === currentStep ? (
                    <span className="text-blue-400 animate-spin text-sm sm:text-base">⟳</span>
                  ) : (
                    <span className="text-slate-600 text-sm sm:text-base">○</span>
                  )}
                </div>
                <div className="flex-1">
                  {completedSteps[index] ? (
                    <span className="text-green-400 text-xs sm:text-sm">{step.text}</span>
                  ) : index === currentStep ? (
                    <span className="text-blue-300 animate-pulse text-xs sm:text-sm">
                      {step.text}
                    </span>
                  ) : (
                    <span className="text-slate-500 text-xs sm:text-sm">{step.text}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* System Info */}
          <div className="border-t border-blue-500/30 pt-4 sm:pt-6 text-xs text-blue-200 space-y-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
              <div className="bg-slate-800/50 p-3 rounded-lg">
                <div className="text-blue-300 font-semibold mb-1">NETWORK</div>
                <div>Cosmos SDK</div>
                <div className="text-blue-300 font-semibold mb-1 mt-2">CONSENSUS</div>
                <div>Tendermint BFT</div>
              </div>
              <div className="bg-slate-800/50 p-3 rounded-lg">
                <div className="text-blue-300 font-semibold mb-1">TOKEN</div>
                <div>$BTO</div>
                <div className="text-blue-300 font-semibold mb-1 mt-2">STATUS</div>
                <div className={currentStep >= steps.length ? 'text-green-400' : 'text-yellow-400'}>
                  {currentStep >= steps.length ? 'READY' : 'INITIALIZING'}
                </div>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-4 sm:mt-6">
            <div className="flex justify-between text-xs text-blue-300 mb-3">
              <span className="font-semibold">INITIALIZATION PROGRESS</span>
              <span className="bg-blue-500/20 px-2 py-1 rounded">{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-slate-800/70 rounded-full h-3 sm:h-4 overflow-hidden border border-blue-500/30">
              <motion.div
                className="bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 h-full rounded-full shadow-lg"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </div>
            <div className="flex justify-between text-xs text-blue-400/70 mt-2">
              <span>0%</span>
              <span>50%</span>
              <span>100%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



// AI Code Editor Component
function AICodeEditor({ activeNode, setActiveNode }: any) {
  const [codeContent, setCodeContent] = useState('')
  const [isGenerating, setIsGenerating] = useState(true)
  const [generatedCards, setGeneratedCards] = useState<any[]>([])
  const [currentLine, setCurrentLine] = useState(0)
  const [currentTemplate, setCurrentTemplate] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [mobileTab, setMobileTab] = useState<'code' | 'modules'>('code')

  const codeTemplates = [
    `// Bitora Protocol Core
class BitoraProtocol {
  constructor() {
    this.network = 'cosmos-sdk'
    this.consensus = 'tendermint'
    this.token = 'BTO'
    this.validators = new Set()
    this.blocks = []
  }
  
  async initialize() {
    console.log('Bitora Protocol Initializing')
    await this.connectValidators()
    await this.syncBlockchain()
    this.startConsensus()
    return 'Protocol Ready'
  }
  
  async processTransaction(tx) {
    const validation = await this.validateTx(tx)
    if (validation.valid) {
      this.addToMempool(tx)
      return tx.hash
    }
    throw new Error('Invalid transaction')
  }
}`,
    `// Advanced Feature Engine
class FeatureEngine {
  constructor() {
    this.tokenFactory = new TokenFactory()
    this.posSystem = new POSSystem()
    this.complianceLayer = new ComplianceLayer()
  }
  
  async generateToken(config) {
    const compliance = await this.validateCompliance(config)
    const token = new Token({
      name: config.name,
      symbol: config.symbol,
      supply: config.totalSupply,
      compliance: compliance,
      kyc: config.kycRequired,
      mintable: config.mintable
    })
    
    await this.deployContract(token)
    return token
  }
  
  async deployPOS(storeConfig) {
    const pos = new POSSystem({
      storeId: storeConfig.id,
      location: storeConfig.location,
      realtime: true,
      compliance: 'built-in',
      paymentMethods: ['BTO', 'USDC', 'ETH']
    })
    
    await pos.initialize()
    return pos
  }
}`,
    `// Pizza Proof of Concept
class PizzaProofOfConcept {
  constructor() {
    this.stores = new Map()
    this.transactions = []
    this.inventory = new InventoryManager()
    this.analytics = new AnalyticsEngine()
  }
  
  async processSale(saleData) {
    const { amount, items, storeId, paymentMethod } = saleData
    
    // Process payment
    const payment = await this.processPayment(amount, paymentMethod)
    
    // Update inventory
    await this.inventory.updateStock(items)
    
    // Token economics
    const burnAmount = amount * 0.01
    const yieldAmount = amount * 0.02
    
    await this.burnTokens(burnAmount)
    await this.distributeYield(yieldAmount)
    
    // Compliance reporting
    await this.reportCompliance({
      transactionId: payment.id,
      amount: amount,
      timestamp: Date.now(),
      storeId: storeId
    })
    
    return payment
  }
  
  async openNewStore(location) {
    const store = new PizzaStore({
      location: location,
      posSystem: await this.deployPOS(),
      inventory: new InventoryManager(),
      compliance: true
    })
    
    this.stores.set(store.id, store)
    return store
  }
}`,
    `// Roadmap Execution Engine
const roadmapEngine = {
  phases: {
    '2025_Q1': {
      milestones: [
        'mainnet_launch',
        'bto_token_live',
        'validator_network_active'
      ],
      status: 'in_progress',
      completion: 75
    },
    '2025_Q2': {
      milestones: [
        'dex_integration',
        'pizza_stores_anz',
        'mobile_wallet_launch'
      ],
      status: 'planned',
      completion: 0
    },
    '2026': {
      milestones: [
        'asia_pacific_expansion',
        'national_stablecoins',
        'audx_phpx_launch',
        'enterprise_partnerships'
      ],
      status: 'planned',
      completion: 0
    },
    '2027': {
      milestones: [
        'us_eu_compliance',
        'treasury_deflation_protocol',
        'global_adoption',
        'institutional_integration'
      ],
      status: 'future',
      completion: 0
    }
  },
  
  async executeMilestone(phase, milestone) {
    console.log('Executing milestone:', milestone)
    const result = await this.deployMilestone(milestone)
    this.updateProgress(phase, milestone)
    return result
  }
}`,
    `// Ecosystem Management Platform
class EcosystemManager {
  constructor() {
    this.developers = new DeveloperRegistry()
    this.validators = new ValidatorNetwork()
    this.dapps = new DAppRegistry()
    this.grants = new GrantProgram()
    this.governance = new GovernanceSystem()
  }
  
  async onboardDeveloper(profile) {
    const developer = await this.developers.register({
      address: profile.walletAddress,
      skills: profile.skills,
      experience: profile.experience,
      github: profile.github
    })
    
    // Assign starter grant
    const starterGrant = await this.grants.createGrant({
      recipient: developer.id,
      amount: 1000, // BTO
      type: 'starter',
      requirements: ['complete_tutorial', 'deploy_testnet']
    })
    
    return { developer, grant: starterGrant }
  }
  
  async launchDApp(dappConfig) {
    const dapp = new DApp({
      name: dappConfig.name,
      category: dappConfig.category,
      developer: dappConfig.developerId,
      contract: dappConfig.contractAddress
    })
    
    await this.dapps.register(dapp)
    await this.governance.proposeListingVote(dapp)
    
    return dapp
  }
  
  async distributeRewards() {
    const validators = await this.validators.getActive()
    const developers = await this.developers.getActive()
    
    for (const validator of validators) {
      await this.distributeValidatorReward(validator)
    }
    
    for (const developer of developers) {
      await this.distributeDeveloperReward(developer)
    }
  }
}`,
    `// Smart Contract Factory
class SmartContractFactory {
  constructor() {
    this.templates = new Map()
    this.deployedContracts = new Map()
    this.compiler = new SolidityCompiler()
  }
  
  async createTokenContract(params) {
    const template = this.templates.get('ERC20')
    const customizedCode = template.customize({
      name: params.name,
      symbol: params.symbol,
      decimals: params.decimals,
      totalSupply: params.totalSupply,
      mintable: params.mintable,
      burnable: params.burnable
    })
    
    const compiled = await this.compiler.compile(customizedCode)
    const deployed = await this.deploy(compiled, params.network)
    
    this.deployedContracts.set(deployed.address, {
      type: 'token',
      params: params,
      deployedAt: Date.now()
    })
    
    return deployed
  }
  
  async createNFTContract(params) {
    const template = this.templates.get('ERC721')
    const customizedCode = template.customize(params)
    
    const compiled = await this.compiler.compile(customizedCode)
    const deployed = await this.deploy(compiled, params.network)
    
    return deployed
  }
}`,
    `// DeFi Protocol Integration
class DeFiProtocol {
  constructor() {
    this.liquidityPools = new Map()
    this.stakingPools = new Map()
    this.yieldFarms = new Map()
    this.governance = new GovernanceToken()
  }
  
  async createLiquidityPool(tokenA, tokenB, fee) {
    const pool = new LiquidityPool({
      tokenA: tokenA,
      tokenB: tokenB,
      fee: fee,
      protocol: 'Bitora-AMM'
    })
    
    await pool.initialize()
    this.liquidityPools.set(pool.id, pool)
    
    return pool
  }
  
  async stake(amount, duration) {
    const stakingPool = this.stakingPools.get('BTO-STAKE')
    const position = await stakingPool.stake({
      amount: amount,
      duration: duration,
      user: this.getCurrentUser()
    })
    
    return position
  }
  
  async calculateYield(poolId, userAddress) {
    const pool = this.yieldFarms.get(poolId)
    const userPosition = await pool.getUserPosition(userAddress)
    
    const timeStaked = Date.now() - userPosition.startTime
    const apr = pool.getCurrentAPR()
    const yield = (userPosition.amount * apr * timeStaked) / (365 * 24 * 60 * 60 * 1000)
    
    return yield
  }
}`
  ]

  // Continuous code generation effect
  useEffect(() => {
    const generateCode = () => {
      const currentCode = codeTemplates[currentTemplate]
      
      if (!isDeleting) {
        // Typing effect
        if (charIndex < currentCode.length) {
          setCodeContent(currentCode.slice(0, charIndex + 1))
          setCharIndex(prev => prev + 1)
          setCurrentLine(currentCode.slice(0, charIndex + 1).split('\n').length - 1)
        } else {
          // Start deleting after a pause
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        // Deleting effect
        if (charIndex > 0) {
          setCodeContent(currentCode.slice(0, charIndex - 1))
          setCharIndex(prev => prev - 1)
          setCurrentLine(currentCode.slice(0, charIndex - 1).split('\n').length - 1)
        } else {
          // Switch to next template
          setIsDeleting(false)
          setCurrentTemplate(prev => (prev + 1) % codeTemplates.length)
          
          // Generate card for completed code
          const newCard = {
            id: Date.now() + Math.random(),
            title: getNodeTitle(currentTemplate),
            code: currentCode,
            timestamp: new Date().toLocaleTimeString()
          }
          setGeneratedCards(prev => {
            const newCards = [newCard, ...prev]
            return newCards.slice(0, 8) // Keep max 8 cards
          })
        }
      }
    }

    const speed = isDeleting ? 30 : (Math.random() * 50 + 30) // Variable typing speed
    const timer = setTimeout(generateCode, speed)
    
    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, currentTemplate])

  // Generate card when activeNode changes
  useEffect(() => {
    if (activeNode !== null) {
      const nodeCard = {
        id: Date.now() + Math.random(),
        title: getNodeTitle(activeNode),
        code: codeTemplates[activeNode % codeTemplates.length],
        timestamp: new Date().toLocaleTimeString()
      }
      setGeneratedCards(prev => {
        // Check if card with same title already exists
        const exists = prev.some(card => card.title === nodeCard.title)
        if (!exists) {
          const newCards = [nodeCard, ...prev]
          return newCards.slice(0, 8)
        }
        return prev
      })
    }
  }, [activeNode])

  const getNodeTitle = (templateIndex: number) => {
    const titles = [
      'Protocol Core', 
      'Feature Engine', 
      'Pizza PoC', 
      'Roadmap Engine', 
      'Ecosystem Manager',
      'Smart Contracts',
      'DeFi Protocol'
    ]
    return titles[templateIndex] || 'Code Module'
  }

  return (
    <div className="h-full bg-slate-900 text-green-400 font-mono text-sm overflow-hidden">
      {/* Editor Header */}
      <div className="bg-slate-800 border-b border-slate-700 p-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex items-center space-x-2">
            <Terminal className="h-4 w-4 text-blue-400" />
            <span className="text-blue-400">Bitora AI Agent</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {isGenerating && (
            <>
              <Sparkles className="h-4 w-4 text-yellow-400 animate-pulse" />
              <span className="text-yellow-400 text-xs">Generating...</span>
            </>
          )}
          <Save className="h-4 w-4 text-slate-400" />
        </div>
      </div>

      {/* Mobile Tabs */}
      <div className="lg:hidden mb-4">
        <div className="flex bg-slate-800 rounded-lg p-1">
          <button
            onClick={() => setMobileTab('code')}
            className={`flex-1 px-3 py-2 rounded text-sm font-medium transition-colors ${
              mobileTab === 'code'
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Code Editor
          </button>
          <button
            onClick={() => setMobileTab('modules')}
            className={`flex-1 px-3 py-2 rounded text-sm font-medium transition-colors ${
              mobileTab === 'modules'
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Modules ({generatedCards.length})
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row h-full min-h-0">
        {/* Code Editor */}
        <div className={`flex-1 p-2 sm:p-4 overflow-auto h-64 sm:h-80 lg:min-h-full bg-slate-900 ${
          mobileTab === 'code' ? 'block' : 'hidden lg:block'
        }`}>
          <div className="flex h-full min-h-60 sm:min-h-76">
            {/* Line Numbers */}
            <div className="w-8 sm:w-10 bg-slate-800 border-r border-slate-700 text-slate-500 text-right pr-2 select-none flex-shrink-0 overflow-hidden">
              {codeContent.split('\n').map((_, i) => (
                <div key={i} className={`leading-5 sm:leading-6 text-xs sm:text-sm py-0.5 ${i === currentLine && isGenerating ? 'text-yellow-400' : ''}`}>
                  {i + 1}
                </div>
              ))}
            </div>
            
            {/* Code Content */}
            <div className="flex-1 overflow-auto p-2 sm:p-3">
              <pre className="leading-5 sm:leading-6">
                <code className="text-green-400 text-xs sm:text-sm block whitespace-pre-wrap break-words">
                  {codeContent}
                  {isGenerating && (
                    <span className="bg-green-400 text-black animate-pulse">█</span>
                  )}
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* Generated Cards Sidebar */}
        <div className={`w-full lg:w-80 bg-slate-800 border-t lg:border-t-0 lg:border-l border-slate-700 p-2 sm:p-3 lg:p-4 overflow-y-auto lg:max-h-none flex-shrink-0 ${
          mobileTab === 'modules' ? 'block' : 'hidden lg:block'
        }`}>
          <div className="flex items-center space-x-2 mb-2 sm:mb-3">
            <Code className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400" />
            <span className="text-blue-400 font-semibold text-xs sm:text-sm">Generated Modules</span>
            <span className="text-slate-400 text-xs ml-auto">{generatedCards.length}</span>
          </div>
          
          <div className="relative space-y-3">
            {/* Enhanced Connecting Lines */}
            {generatedCards.length > 1 && (
              <div className="absolute left-4 sm:left-6 top-0 bottom-0 z-0">
                {/* Main glowing line */}
                <div className="absolute w-1 h-full bg-gradient-to-b from-cyan-400/20 via-blue-500/40 via-purple-500/40 to-emerald-400/20 rounded-full" />
                <div className="absolute w-0.5 h-full bg-gradient-to-b from-cyan-300 via-blue-400 via-purple-400 to-emerald-300 rounded-full left-0.25 shadow-lg shadow-blue-500/50" />
                
                {/* Animated energy pulses */}
                <motion.div
                  className="absolute w-3 h-8 bg-gradient-to-b from-cyan-400 to-transparent rounded-full -left-1 blur-sm"
                  animate={{
                    y: [0, 400],
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute w-2 h-6 bg-gradient-to-b from-blue-400 to-transparent rounded-full -left-0.5 blur-sm"
                  animate={{
                    y: [0, 400],
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                />
                <motion.div
                  className="absolute w-2.5 h-7 bg-gradient-to-b from-purple-400 to-transparent rounded-full -left-0.75 blur-sm"
                  animate={{
                    y: [0, 400],
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 3
                  }}
                />
                
                {/* Flowing particles */}
                <motion.div
                  className="absolute w-1.5 h-1.5 bg-cyan-300 rounded-full -left-0.25 shadow-lg shadow-cyan-300/80"
                  animate={{
                    y: [0, 400],
                    opacity: [0, 1, 0],
                    scale: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <motion.div
                  className="absolute w-1 h-1 bg-blue-300 rounded-full left-0 shadow-md shadow-blue-300/60"
                  animate={{
                    y: [0, 400],
                    opacity: [0, 1, 0],
                    scale: [0.3, 1, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 1
                  }}
                />
                <motion.div
                  className="absolute w-1.5 h-1.5 bg-emerald-300 rounded-full -left-0.25 shadow-lg shadow-emerald-300/80"
                  animate={{
                    y: [0, 400],
                    opacity: [0, 1, 0],
                    scale: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 2
                  }}
                />
              </div>
            )}
            
            <AnimatePresence>
              {generatedCards.map((card, index) => (
                <div key={card.id} className="relative z-10">
                  {/* Enhanced Connection Node */}
                    {index < generatedCards.length && (
                      <div className="absolute left-2.5 sm:left-4.5 top-4 sm:top-6 w-3 h-3 sm:w-4 sm:h-4 z-20">
                       {/* Outer glow ring */}
                       <motion.div
                         className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-sm"
                         animate={{
                           scale: [1, 1.8, 1],
                           opacity: [0.3, 0.8, 0.3]
                         }}
                         transition={{
                           duration: 2.5,
                           repeat: Infinity,
                           delay: index * 0.4
                         }}
                       />
                       {/* Inner core */}
                       <div className="absolute inset-1 bg-gradient-to-br from-cyan-300 to-blue-400 rounded-full shadow-lg shadow-blue-400/60" />
                       {/* Center dot */}
                       <div className="absolute inset-2 bg-white rounded-full" />
                       {/* Pulse effect */}
                       <motion.div
                         className="absolute inset-0 border-2 border-cyan-300 rounded-full"
                         animate={{
                           scale: [1, 2, 1],
                           opacity: [0.8, 0, 0.8]
                         }}
                         transition={{
                           duration: 2,
                           repeat: Infinity,
                           delay: index * 0.3
                         }}
                       />
                     </div>
                   )}
                  
                  <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="ml-6 sm:ml-8 bg-slate-700 border border-slate-600 rounded-lg p-2 sm:p-3 cursor-pointer hover:bg-slate-600 hover:border-blue-500/50 transition-all duration-200 group relative"
                    onClick={() => {
                      // Map card title to correct activeNode
                      const titleToNodeMap = {
                        'Protocol Core': 0,
                        'Feature Engine': 1, 
                        'Pizza PoC': 2,
                        'Roadmap Engine': 3,
                        'Ecosystem Manager': 4,
                        'Smart Contracts': 1, // Map to Features
                        'DeFi Protocol': 1 // Map to Features
                      }
                      const targetNode = titleToNodeMap[card.title as keyof typeof titleToNodeMap] ?? 0
                      setActiveNode(targetNode)
                    }}
                  >
                    {/* Card Status Indicator */}
                     <div className="absolute -left-1 sm:-left-2 top-2 sm:top-3 w-0.5 sm:w-1 h-6 sm:h-8 bg-gradient-to-b from-blue-400 to-green-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="flex items-center justify-between mb-1 sm:mb-2">
                       <span className="text-white font-medium text-xs sm:text-sm group-hover:text-blue-300 truncate">{card.title}</span>
                       <span className="text-slate-400 text-xs ml-2 flex-shrink-0">{card.timestamp}</span>
                     </div>
                     <div className="text-green-400 text-xs font-mono bg-slate-800 p-1.5 sm:p-2 rounded overflow-hidden relative">
                       <div className="truncate text-xs">{card.code?.split('\n')[0] || 'Loading...'}</div>
                       <div className="text-slate-500 truncate text-xs hidden sm:block">{card.code?.split('\n')[1] || '...'}</div>
                       <div className="absolute bottom-0 right-0 bg-gradient-to-l from-slate-800 to-transparent px-1 sm:px-2 text-slate-500 text-xs">...</div>
                     </div>
                    
                    {/* Process Step Number */}
                     <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                       {index + 1}
                     </div>
                  </motion.div>
                </div>
              ))}
            </AnimatePresence>
          </div>
          
          {generatedCards.length === 0 && (
            <div className="text-slate-500 text-center text-sm mt-8">
              <Code className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p>Click navigation items to generate code modules</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// 3D Scene Component (Simplified)
function Scene({ activeNode, setActiveNode }: any) {
  return (
    <div className="h-full">
      <AICodeEditor activeNode={activeNode} setActiveNode={setActiveNode} />
    </div>
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
          <ModernLoader onComplete={handleLoadingComplete} />
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
              <div className="flex flex-wrap items-center gap-2 text-sm">
                {['Protocol', 'Features', 'Pizza', 'Roadmap', 'Ecosystem'].map((item, index) => (
                  <button
                    key={item}
                    onClick={() => setActiveNode(index)}
                    className={`px-3 py-1.5 rounded transition-colors flex-shrink-0 ${
                      activeNode === index
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-400 hover:text-white hover:bg-slate-700'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <div className="flex items-center space-x-4 text-sm border-l border-slate-600 pl-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400">Live</span>
                </div>
                <span className="text-slate-400">BTO: ${stats.btoPrice}</span>
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
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {['Protocol', 'Features', 'Pizza', 'Roadmap', 'Ecosystem'].map((item, index) => (
                      <button
                        key={item}
                        onClick={() => {
                          setActiveNode(index)
                          setIsMobileMenuOpen(false)
                        }}
                        className={`px-3 py-2 rounded text-sm transition-colors flex-shrink-0 ${
                          activeNode === index
                            ? 'bg-blue-600 text-white'
                            : 'text-slate-400 hover:text-white hover:bg-slate-700'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm pt-2 border-t border-slate-700">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-green-400">Live</span>
                    </div>
                    <span className="text-slate-400">BTO: ${stats.btoPrice}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)]">
        {/* 3D Scene - Desktop Only */}
        <div className="hidden lg:block lg:w-1/2 relative bg-slate-900 min-h-0 overflow-hidden">
          <Scene activeNode={activeNode} setActiveNode={setActiveNode} />

          {/* AI Agent Info */}
          <div className="absolute bottom-4 left-4 bg-slate-800/90 backdrop-blur-sm border border-slate-600 rounded-lg p-3 text-xs">
            <div className="flex items-center space-x-2 mb-2">
              <Sparkles className="h-4 w-4 text-yellow-400" />
              <span className="text-yellow-400 font-semibold">Bitora AI Agent</span>
            </div>
            <div className="space-y-1 text-slate-300">
              <div>• Auto-generates protocol code</div>
              <div className="hidden sm:block">• Real-time module creation</div>
            </div>
          </div>
        </div>

        {/* Mobile AI Code Editor */}
        <div className="lg:hidden">
          <AICodeEditor activeNode={activeNode} setActiveNode={setActiveNode} />
        </div>

        {/* Content Panel */}
        <div className="w-full lg:w-1/2 p-4 lg:p-8 overflow-y-auto min-h-96 sm:min-h-[32rem] lg:min-h-0 max-h-screen">
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
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
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
