"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface RetailPointSystemSectionProps {
    data?: any
    onActionClick?: (action: string) => void
}

export function RetailPointSystemSection({ data, onActionClick }: RetailPointSystemSectionProps) {
    return (
        <section id="retail-pos" className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
            <div className="relative z-10 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-mono leading-tight">
                        [RETAIL_POINT_SYSTEM]
                    </h2>
                    <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto font-mono px-4 sm:px-0">
                        Autonomous transaction processing for physical commerce layers
                    </p>
                </motion.div>

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

interface DeveloperPortalSectionProps {
    data?: any
    onActionClick?: (action: string) => void
}

export function DeveloperPortalSection({ data, onActionClick }: DeveloperPortalSectionProps) {
    return (
        <section id="dev-portal" className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
            <div className="relative z-10 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-mono leading-tight">
                        [DEVELOPER_PORTAL_ACCESS]
                    </h2>
                    <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto font-mono px-4 sm:px-0">
                        Direct interface to Bitora infrastructure layers
                    </p>
                </motion.div>

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

interface WalletNeuralSectionProps {
    data?: any
    onActionClick?: (action: string) => void
}

export function WalletNeuralSection({ data, onActionClick }: WalletNeuralSectionProps) {
    return (
        <section id="wallet-neural" className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
            <div className="relative z-10 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-mono leading-tight">
                        [WALLET_INTERFACE]
                    </h2>
                </motion.div>

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

interface NeuralEcosystemSectionProps {
    data?: any
    onActionClick?: (action: string) => void
}

export function NeuralEcosystemSection({ data, onActionClick }: NeuralEcosystemSectionProps) {
    return (
        <section id="neural-ecosystem" className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
            <div className="relative z-10 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-mono leading-tight">
                        [ECOSYSTEM_MATRIX]
                    </h2>
                </motion.div>

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

interface ExchangeNeuralSectionProps {
    data?: any
    onActionClick?: (action: string) => void
}

export function ExchangeNeuralSection({ data, onActionClick }: ExchangeNeuralSectionProps) {
    return (
        <section id="exchange-neural" className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
            <div className="relative z-10 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-mono leading-tight">
                        [EXCHANGE_HUB]
                    </h2>
                    <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto font-mono px-4 sm:px-0">
                        Trading algorithms with pattern recognition
                    </p>
                </motion.div>

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

interface SupportNeuralSectionProps {
    data?: any
    onActionClick?: (action: string) => void
}

export function SupportNeuralSection({ data, onActionClick }: SupportNeuralSectionProps) {
    return (
        <section id="support-neural" className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
            <div className="relative z-10 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-mono leading-tight">
                        [SUPPORT_NETWORK]
                    </h2>
                </motion.div>

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

interface PizzaNeuralExperienceSectionProps {
    data?: any
    onActionClick?: (action: string) => void
}

export function PizzaNeuralExperienceSection({ data, onActionClick }: PizzaNeuralExperienceSectionProps) {
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
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
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
                </motion.div>

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
