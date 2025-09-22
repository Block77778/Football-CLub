import { Card, CardContent } from "@/components/ui/card"
import { Shield, Heart, Globe } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              About <span className="text-secondary">Football Club</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Football Club Token (MK) represents the next evolution in fan engagement. We're building a community where
              passion for football meets the power of blockchain technology.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Secure & Transparent</h3>
                  <p className="text-muted-foreground text-pretty">
                    Built on proven blockchain technology with full transparency and security for all transactions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Fan-Centric</h3>
                  <p className="text-muted-foreground text-pretty">
                    Every feature and decision is made with our passionate football community in mind.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Global Community</h3>
                  <p className="text-muted-foreground text-pretty">
                    Connecting football fans from around the world in one unified ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Card className="overflow-hidden border-secondary/20">
              <CardContent className="p-0">
                <img src="/diverse-group-of-football-fans-celebrating-togethe.jpg" alt="Football Fans Community" className="w-full h-auto" />
              </CardContent>
            </Card>

            <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-6 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">1B+</div>
                <div className="text-sm">MK Tokens</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
