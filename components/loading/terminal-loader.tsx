"use client"

import { useState, useEffect } from 'react'

interface TerminalLoaderProps {
    onComplete: () => void
}

export function TerminalLoader({ onComplete }: TerminalLoaderProps) {
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
                        ]
                        const pos = positions[i % positions.length]
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
                        )
                    })}
                </div>

                {/* Fast Falling Matrix Effect */}
                <div className="absolute inset-0 opacity-40">
                    {Array.from({ length: 60 }).map((_, i) => {
                        const leftPositions = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 43, 46, 49, 52, 55, 58, 61, 64, 67, 70, 73, 76, 79, 82, 85, 88, 91, 94, 97, 2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47, 50, 53, 56, 59, 62, 65, 68, 71, 74, 77, 80]
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
                        )
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
