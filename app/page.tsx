import { HeroSection } from "@/components/hero-section"
import { TokenInfo } from "@/components/token-info"
import { AboutSection } from "@/components/about-section"
import { LegendsSection } from "@/components/legends-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { CommunitySection } from "@/components/community-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <TokenInfo />
      <AboutSection />
      <LegendsSection />
      <RoadmapSection />
      <CommunitySection />
      <Footer />
    </main>
  )
}
