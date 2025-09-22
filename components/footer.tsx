import Image from "next/image"
import { Twitter, MessageCircle, Github, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image src="/logo.png" alt="Football Club Logo" width={40} height={40} />
              <span className="text-xl font-bold">Football Club</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md text-pretty">
              The ultimate fan token for football enthusiasts. Join our community and be part of the revolution.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary/80 transition-colors"
              >
                <Twitter className="h-5 w-5 text-secondary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary/80 transition-colors"
              >
                <MessageCircle className="h-5 w-5 text-secondary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary/80 transition-colors"
              >
                <Github className="h-5 w-5 text-secondary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary/80 transition-colors"
              >
                <Mail className="h-5 w-5 text-secondary-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#tokenomics" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Tokenomics
                </a>
              </li>
              <li>
                <a href="#roadmap" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Roadmap
                </a>
              </li>
              <li>
                <a href="#community" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-primary-foreground/60 mb-4 md:mb-0">
              © 2024 Football Club Token. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-primary-foreground/60">
              <span>Token: MK</span>
              <span>Supply: 1,000,000,000</span>
              <span>Network: Ethereum</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
