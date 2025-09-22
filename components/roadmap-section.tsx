import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Circle, Clock } from "lucide-react"

export function RoadmapSection() {
  const roadmapItems = [
    {
      phase: "Phase 1",
      title: "Token Launch",
      description: "Official launch of MK Token with initial distribution and community building.",
      status: "completed",
      date: "Q1 2024",
    },
    {
      phase: "Phase 2",
      title: "Exchange Listings",
      description: "Listing on major cryptocurrency exchanges for wider accessibility.",
      status: "completed",
      date: "Q2 2024",
    },
    {
      phase: "Phase 3",
      title: "Fan Platform",
      description: "Launch of exclusive fan platform with premium content and experiences.",
      status: "in-progress",
      date: "Q4 2024",
    },
    {
      phase: "Phase 4",
      title: "NFT Marketplace",
      description: "Introduction of Football Club NFT marketplace for collectibles and memorabilia.",
      status: "upcoming",
      date: "Q1 2025",
    },
    {
      phase: "Phase 5",
      title: "Global Expansion",
      description: "Partnership with international football clubs and expansion worldwide.",
      status: "upcoming",
      date: "Q2 2025",
    },
    {
      phase: "Phase 6",
      title: "Metaverse Integration",
      description: "Virtual stadium experiences and metaverse integration for fans.",
      status: "upcoming",
      date: "Q3 2025",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-6 w-6 text-green-500" />
      case "in-progress":
        return <Clock className="h-6 w-6 text-secondary" />
      default:
        return <Circle className="h-6 w-6 text-muted-foreground" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "border-green-500/50 bg-green-500/5"
      case "in-progress":
        return "border-secondary/50 bg-secondary/5"
      default:
        return "border-border bg-card"
    }
  }

  return (
    <section id="roadmap" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Our <span className="text-secondary">Roadmap</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Follow our journey as we revolutionize the football fan experience through blockchain technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roadmapItems.map((item, index) => (
            <Card
              key={index}
              className={`${getStatusColor(item.status)} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-white">{item.phase}</span>
                  {getStatusIcon(item.status)}
                </div>
                <CardTitle
                  className={`text-xl font-bold ${
                    item.phase === "Phase 1" || item.phase === "Phase 2" || item.phase === "Phase 3"
                      ? "text-white"
                      : "text-black"
                  }`}
                >
                  {item.title}
                </CardTitle>
                <div
                  className={`text-sm ${
                    item.phase === "Phase 1" || item.phase === "Phase 2" || item.phase === "Phase 3"
                      ? "text-white/80"
                      : "text-black/60"
                  }`}
                >
                  {item.date}
                </div>
              </CardHeader>
              <CardContent>
                <p
                  className={`text-pretty ${
                    item.phase === "Phase 1" || item.phase === "Phase 2" || item.phase === "Phase 3"
                      ? "text-white/90"
                      : "text-black/70"
                  }`}
                >
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-card rounded-full px-8 py-4 border border-border">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-sm text-foreground">Completed</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-secondary" />
              <span className="text-sm text-foreground">In Progress</span>
            </div>
            <div className="flex items-center space-x-2">
              <Circle className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm text-foreground">Upcoming</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
