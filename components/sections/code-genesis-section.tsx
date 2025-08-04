"use client"

import { motion } from 'framer-motion'
import { CodeDemo } from '@/components/interactive/code-demo'

interface CodeGenesisSectionProps {
    data?: any
    onActionClick?: (action: string) => void
}

export function CodeGenesisSection({ data, onActionClick }: CodeGenesisSectionProps) {
    return (
        <section id="code-genesis" className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-gray-800">
            <div className="relative z-10 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 sm:mb-16"
                >
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-mono leading-tight">
                        <span className="block sm:inline">[CODE_GENESIS_</span>
                        <span className="block sm:inline">PROTOCOL]</span>
                    </h2>
                    <p className="text-sm sm:text-base lg:text-xl text-white max-w-3xl mx-auto font-mono px-4">
                        Infrastructure powering autonomous payment systems
                    </p>
                </motion.div>

                {/* Interactive Code Demo */}
                <CodeDemo />
            </div>
        </section>
    )
}