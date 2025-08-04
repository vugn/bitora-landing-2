"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { roadmapData, type RoadmapPhase, type PhaseStatus } from '@/config/roadmap'

interface RoadmapSectionProps {
    data?: typeof roadmapData
    onPhaseClick?: (phase: RoadmapPhase) => void
}

export function RoadmapSection({ data = roadmapData, onPhaseClick }: RoadmapSectionProps) {
    const [expandedPhase, setExpandedPhase] = useState<number | null>(null)

    const getStatusColor = (status: PhaseStatus): string => {
        switch (status) {
            case 'completed': return 'text-green-400'
            case 'in-progress': return 'text-orange-400'
            case 'scheduled': return 'text-red-400'
            default: return 'text-gray-400'
        }
    }

    const getStatusIcon = (status: PhaseStatus) => {
        switch (status) {
            case 'completed':
                return <CheckCircle className="h-6 w-6" />
            case 'in-progress':
                return <div className="w-6 h-6 border-2 border-orange-400 border-t-transparent rounded-full animate-spin"></div>
            case 'scheduled':
                return <div className="w-6 h-6 border-2 border-red-400 rounded-full"></div>
            default:
                return <div className="w-6 h-6 border-2 border-gray-400 rounded-full"></div>
        }
    }

    const handlePhaseClick = (phase: RoadmapPhase) => {
        if (onPhaseClick) {
            onPhaseClick(phase)
        }
        setExpandedPhase(expandedPhase === phase.id ? null : phase.id)
    }

    const getKeyOutputsTitle = (status: PhaseStatus): string => {
        switch (status) {
            case 'completed': return 'Key Outputs:'
            case 'in-progress': return 'Core Components Being Integrated:'
            case 'scheduled': return 'Protocol Enforcement Rules:'
            default: return 'Key Outputs:'
        }
    }

    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-mono leading-tight">
                        {data.title}
                    </h2>
                    <p className="text-lg text-slate-300 max-w-4xl mx-auto font-mono italic border-l-2 border-blue-400 pl-4 mb-8">
                        "{data.manifesto}"
                        <br />
                        <span className="text-blue-400">{data.author}</span>
                    </p>
                </div>

                {/* Phases */}
                <div className="space-y-6">
                    {data.phases.map((phase, index) => (
                        <motion.div
                            key={phase.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-slate-800/50 border border-gray-500/30 rounded-lg overflow-hidden"
                        >
                            {/* Phase Header */}
                            <button
                                onClick={() => handlePhaseClick(phase)}
                                className="w-full p-6 text-left hover:bg-slate-700/30 transition-colors duration-300"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <span className={`text-2xl font-mono ${getStatusColor(phase.status)}`}>
                                            {getStatusIcon(phase.status)}
                                        </span>
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-bold text-white font-mono">
                                                {phase.title}
                                            </h3>
                                            <p className={`text-sm font-mono ${getStatusColor(phase.status)}`}>
                                                {phase.period}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-gray-400">
                                        {expandedPhase === phase.id ? '−' : '+'}
                                    </div>
                                </div>
                            </button>

                            {/* Expanded Content */}
                            <AnimatePresence>
                                {expandedPhase === phase.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="border-t border-gray-600/30"
                                    >
                                        <div className="p-6 space-y-4">
                                            {/* Overview */}
                                            <div>
                                                <h4 className="text-white font-semibold font-mono mb-2">Overview:</h4>
                                                <p className="text-gray-300 font-mono text-sm leading-relaxed">
                                                    {phase.overview}
                                                </p>
                                            </div>

                                            {/* Key Outputs */}
                                            <div>
                                                <h4 className="text-white font-semibold font-mono mb-3">
                                                    {getKeyOutputsTitle(phase.status)}
                                                </h4>
                                                <ul className="space-y-2">
                                                    {phase.keyOutputs.map((output, idx) => (
                                                        <li key={idx} className="flex items-start space-x-2">
                                                            <span className="text-blue-400 mt-1 text-sm">•</span>
                                                            <span className="text-gray-300 font-mono text-sm">{output}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
