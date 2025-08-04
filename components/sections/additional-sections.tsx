"use client"

import { motion } from 'framer-motion'
import { Globe, Shield, Code, Terminal, FileText, Network } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

interface AboutSectionProps {
    data?: any
    onActionClick?: (action: string) => void
}

export function AboutSection({ data, onActionClick }: AboutSectionProps) {
    return (
        <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
            <div className="relative z-10 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-mono leading-tight">
                        <span className="block sm:inline">[PROTOCOL_</span>
                        <span className="block sm:inline">INFRASTRUCTURE]</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-slate-300 max-w-4xl mx-auto font-mono px-4 sm:px-0">
                        Built using Cosmos SDK with validator scoring, fast finality, and native staking. The gas token is $BTO.
                    </p>
                </motion.div>

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

interface CTASectionProps {
    data?: any
    onActionClick?: (action: string) => void
}

export function CTASection({ data, onActionClick }: CTASectionProps) {
    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-mono leading-tight">
                        [PROTOCOL_ACTIVATION]
                    </h2>
                    <p className="text-base sm:text-xl text-slate-300 mb-6 sm:mb-8 font-mono px-2">
                        Build anything. Trade instantly. Operate legally. Pay globally.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 max-w-3xl mx-auto">
                        <Button
                            size="lg"
                            className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white border-0 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-mono shadow-lg hover:shadow-xl transition-all"
                            onClick={() => onActionClick?.('launch-wallet')}
                        >
                            <Terminal className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                            Launch Wallet
                        </Button>
                        <Button
                            size="lg"
                            className="w-full sm:w-auto bg-slate-800/80 border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-mono shadow-lg hover:shadow-xl transition-all"
                            onClick={() => onActionClick?.('whitepaper')}
                        >
                            <FileText className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                            Read Whitepaper
                        </Button>
                        <Button
                            size="lg"
                            className="w-full sm:w-auto bg-slate-800/80 border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-mono shadow-lg hover:shadow-xl transition-all"
                            onClick={() => onActionClick?.('ecosystem')}
                        >
                            <Network className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                            Join Ecosystem
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
