"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const handleBuyToken = () => {
    window.open(
      "https://raydium.io/swap/?inputMint=sol&outputMint=4kxmPUoHZAvRtCSfwhU97R6gyegGwMNMmSKddQp3KJSE",
      "_blank",
    )
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false) // Close mobile menu after clicking
  }

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <Image src="/logo.png" alt="Football Club Logo" width={40} height={40} />
            <span className="text-xl font-bold text-foreground">Football Club</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-accent transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("tokenomics")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Tokenomics
            </button>
            <button
              onClick={() => scrollToSection("roadmap")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Roadmap
            </button>
            <button
              onClick={() => scrollToSection("community")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Community
            </button>
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90 animate-pulse-gold"
              onClick={handleBuyToken}
            >
              Buy MK Token
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-accent"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("tokenomics")}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-accent"
              >
                Tokenomics
              </button>
              <button
                onClick={() => scrollToSection("roadmap")}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-accent"
              >
                Roadmap
              </button>
              <button
                onClick={() => scrollToSection("community")}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-accent"
              >
                Community
              </button>
              <Button className="w-full mt-2 bg-primary text-primary-foreground" onClick={handleBuyToken}>
                Buy MK Token
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
