import type React from "react"
import type { Metadata } from "next"
import { Fira_Code } from "next/font/google"
import "./globals.css"

const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Bitora Protocol - Blockchain Neural Interface",
  description:
    "Access the Bitora blockchain through our 3D neural interface. Hack into the future of crypto-native systems.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${firaCode.variable} font-mono antialiased`}>{children}</body>
    </html>
  )
}
