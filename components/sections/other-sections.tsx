"use client"

import { motion } from 'framer-motion'

interface RetailPointSystemSectionProps {
    data?: any
    onActionClick?: (action: string) => void
}

export function RetailPointSystemSection({ data, onActionClick }: RetailPointSystemSectionProps) {
    return (
        <section id="retail-pos" className="relative py-20 px-4 sm:px-6 lg:px-8">
            <div className="relative z-10 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-mono">
                        [RETAIL_POS_SYSTEM]
                    </h2>
                    <p className="text-lg text-slate-300 max-w-3xl mx-auto font-mono">
                        Content will be populated here...
                    </p>
                </motion.div>
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
        <section id="dev-portal" className="relative py-20 px-4 sm:px-6 lg:px-8">
            <div className="relative z-10 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-mono">
                        [DEVELOPER_PORTAL]
                    </h2>
                    <p className="text-lg text-slate-300 max-w-3xl mx-auto font-mono">
                        Content will be populated here...
                    </p>
                </motion.div>
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
        <section id="wallet-neural" className="relative py-20 px-4 sm:px-6 lg:px-8">
            <div className="relative z-10 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-mono">
                        [WALLET_NEURAL]
                    </h2>
                    <p className="text-lg text-slate-300 max-w-3xl mx-auto font-mono">
                        Content will be populated here...
                    </p>
                </motion.div>
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
        <section id="neural-ecosystem" className="relative py-20 px-4 sm:px-6 lg:px-8">
            <div className="relative z-10 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-mono">
                        [NEURAL_ECOSYSTEM]
                    </h2>
                    <p className="text-lg text-slate-300 max-w-3xl mx-auto font-mono">
                        Content will be populated here...
                    </p>
                </motion.div>
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
        <section id="exchange-neural" className="relative py-20 px-4 sm:px-6 lg:px-8">
            <div className="relative z-10 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-mono">
                        [EXCHANGE_NEURAL]
                    </h2>
                    <p className="text-lg text-slate-300 max-w-3xl mx-auto font-mono">
                        Content will be populated here...
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
