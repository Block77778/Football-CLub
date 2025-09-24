import { Button } from "@/components/ui/button"
import { Twitter, MessageCircle, Users, Star } from "lucide-react"

export function CommunitySection() {
  const stats = [
    { label: "Community Members", value: "50K+", icon: Users },
    { label: "Twitter Followers", value: "25K+", icon: Twitter },
    { label: "Discord Members", value: "15K+", icon: MessageCircle },
    { label: "Average Rating", value: "4.9/5", icon: Star },
  ]

  return (
    <section id="community" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Join Our <span className="text-secondary">Community</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Be part of a passionate community of football fans and crypto enthusiasts from around the world
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-secondary" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 text-balance">Ready to Join the Revolution?</h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto text-pretty">
            Get your MK tokens today and become part of the most passionate football community in crypto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-black hover:bg-white/90 text-lg px-8 py-4">
              onClick={() =>
                window.open(
                  "https://raydium.io/swap/?inputMint=sol&outputMint=4kxmPUoHZAvRtCSfwhU97R6gyegGwMNMmSKddQp3KJSE",
                  "_blank",
                )
              }
            >
             Buy MK Token
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-4 bg-transparent"
            >
              Join X (Twitter)
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
