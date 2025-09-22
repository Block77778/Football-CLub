import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Coins, Users, Trophy, Zap } from "lucide-react"

export function TokenInfo() {
  const features = [
    {
      icon: Coins,
      title: "MK Token",
      description: "Our native token with a total supply of 1 billion tokens, designed for the football community.",
      stats: "1,000,000,000 MK",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Built by fans, for fans. Every decision is made with the community at heart.",
      stats: "50,000+ Members",
    },
    {
      icon: Trophy,
      title: "Exclusive Benefits",
      description: "Access to exclusive content, merchandise, and VIP experiences for token holders.",
      stats: "Premium Access",
    },
    {
      icon: Zap,
      title: "Fast & Secure",
      description: "Lightning-fast transactions with enterprise-grade security for all your token activities.",
      stats: "< 1s Transactions",
    },
  ]

  return (
    <section id="tokenomics" className="py-20 bg-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-6 h-6 bg-secondary/30 rounded-full animate-football-roll"></div>
        <div className="absolute bottom-20 left-20 w-8 h-8 bg-secondary/20 rounded-full animate-bounce-in"></div>
        <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-secondary/25 rounded-full animate-float"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Why Choose <span className="text-secondary">MK Token?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Experience the future of fan engagement with our revolutionary token ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-secondary/50 bg-white"
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <feature.icon className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl font-bold text-black">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-black/70 mb-4 text-pretty">{feature.description}</p>
                <div className="text-lg font-semibold text-secondary">{feature.stats}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-card rounded-2xl p-8 border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">Token Distribution</h3>
              <div className="mb-6 p-4 bg-muted/50 rounded-lg border border-border">
                <p className="text-sm text-black/70 mb-2">Contract Address:</p>
                <code className="text-xs font-mono text-black break-all">
                  4kxmPUoHZAvRtCSfwhU97R6gyegGwMNMmSKddQp3KJSE
                </code>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-black">Community (40%)</span>
                  <span className="text-secondary font-semibold">400M MK</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-secondary h-2 rounded-full" style={{ width: "40%" }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-black">Development (25%)</span>
                  <span className="text-secondary font-semibold">250M MK</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-secondary h-2 rounded-full" style={{ width: "25%" }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-black">Marketing (20%)</span>
                  <span className="text-secondary font-semibold">200M MK</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-secondary h-2 rounded-full" style={{ width: "20%" }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-black">Team (15%)</span>
                  <span className="text-secondary font-semibold">150M MK</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-secondary h-2 rounded-full" style={{ width: "15%" }}></div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="/soccer-ball-goal-net.png" alt="Soccer Ball in Goal Net" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
