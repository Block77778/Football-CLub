"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Copy } from "lucide-react"
import { useState } from "react"

export function HeroSection() {
  const [copied, setCopied] = useState(false)
  const contractAddress = "4kxmPUoHZAvRtCSfwhU97R6gyegGwMNMmSKddQp3KJSE"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/football-stadium-crowd-celebrating-with-golden-lig.jpg"
          alt="Football Stadium"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32">
        <div className="animate-slide-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
            Welcome to the
            <span className="text-secondary block">Football Club</span>
            Revolution
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto text-pretty">
            Join 1 billion MK tokens and become part of the ultimate fan community. Where passion meets innovation in
            the world of football.
          </p>

          <div className="mb-8 p-4 bg-black/40 backdrop-blur-sm rounded-lg border border-secondary/30 max-w-2xl mx-auto">
            <p className="text-sm text-gray-300 mb-2">Contract Address:</p>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <code className="text-secondary text-sm font-mono break-all">{contractAddress}</code>
              <Button
                size="sm"
                variant="outline"
                onClick={copyToClipboard}
                className="border-secondary text-secondary hover:bg-secondary hover:text-black bg-transparent"
              >
                <Copy className="h-4 w-4" />
                {copied ? "Copied!" : "Copy"}
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-4 animate-pulse-gold"
              onClick={() =>
                window.open(
                  "https://raydium.io/swap/?inputMint=sol&outputMint=4kxmPUoHZAvRtCSfwhU97R6gyegGwMNMmSKddQp3KJSE",
                  "_blank",
                )
              }
            >
              Buy MK Token
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-4 bg-transparent"
            >
              <TrendingUp className="mr-2 h-5 w-5" />
              View Chart
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-secondary/30">
              <h3 className="text-2xl font-bold text-secondary mb-2">MK</h3>
              <p className="text-white">Token Symbol</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-secondary/30">
              <h3 className="text-2xl font-bold text-secondary mb-2">1B</h3>
              <p className="text-white">Total Supply</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-secondary/30">
              <h3 className="text-2xl font-bold text-secondary mb-2">∞</h3>
              <p className="text-white">Fan Passion</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
