"use client"

import { useRef, useEffect } from 'react'

interface MatrixBackgroundProps {
    opacity?: number
    speed?: number
    fontSize?: number
    color?: string
}

export function MatrixBackground({
    opacity = 0.4,
    speed = 50,
    fontSize = 14,
    color = '#60A5FA'
}: MatrixBackgroundProps) {
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

        const columns = canvas.width / fontSize

        const drops: number[] = []
        for (let x = 0; x < columns; x++) {
            drops[x] = 1
        }

        function draw() {
            if (!ctx || !canvas) return

            ctx.fillStyle = 'rgba(0, 0, 0, 0.08)'
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // Add glow effect
            ctx.shadowColor = '#3B82F6'
            ctx.shadowBlur = 10
            ctx.fillStyle = color
            ctx.font = `bold ${fontSize}px 'Courier New', monospace`

            for (let i = 0; i < drops.length; i++) {
                const text = matrixArray[Math.floor(Math.random() * matrixArray.length)]

                // Add gradient effect for leading characters
                if (drops[i] * fontSize < canvas.height - fontSize * 5) {
                    ctx.fillStyle = color
                } else {
                    ctx.fillStyle = '#1E40AF'
                }

                ctx.fillText(text, i * fontSize, drops[i] * fontSize)

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.970) {
                    drops[i] = 0
                }
                drops[i]++
            }

            // Reset shadow
            ctx.shadowBlur = 0
        }

        const interval = setInterval(draw, speed)

        const handleResize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        window.addEventListener('resize', handleResize)

        return () => {
            clearInterval(interval)
            window.removeEventListener('resize', handleResize)
        }
    }, [fontSize, speed, color])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0"
            style={{ background: 'black', opacity }}
        />
    )
}
