import Image from "next/image"

export function LegendsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Legends of the Game</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join the ranks of football greatness with MK Token - where legends inspire the next generation of fans.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-card rounded-2xl p-8 border border-border hover:border-secondary/50 transition-all duration-300">
              <Image
                src="/ronaldo.jpg"
                alt="Cristiano Ronaldo"
                width={400}
                height={500}
                className="w-full h-80 object-cover rounded-xl mb-6 animate-bounce-in"
              />
              <h3 className="text-2xl font-bold text-black mb-4">Cristiano Ronaldo</h3>
              <p className="text-black/70">
                The Portuguese phenomenon who redefined excellence in football. With 5 Ballon d'Or awards and countless
                records, CR7 embodies the relentless pursuit of greatness that MK Token represents.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">5</div>
                  <div className="text-sm text-black/60">Ballon d'Or</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">800+</div>
                  <div className="text-sm text-black/60">Career Goals</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">32</div>
                  <div className="text-sm text-black/60">Major Trophies</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-card rounded-2xl p-8 border border-border hover:border-secondary/50 transition-all duration-300">
              <Image
                src="/messi.jpg"
                alt="Lionel Messi"
                width={400}
                height={500}
                className="w-full h-80 object-cover rounded-xl mb-6 animate-bounce-in"
              />
              <h3 className="text-2xl font-bold text-black mb-4">Lionel Messi</h3>
              <p className="text-black/70">
                The Argentine maestro whose magical touch and vision have captivated the world. With 8 Ballon d'Or
                awards and a World Cup victory, Messi represents the artistry and passion that drives our community.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">8</div>
                  <div className="text-sm text-black/60">Ballon d'Or</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">800+</div>
                  <div className="text-sm text-black/60">Career Goals</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">44</div>
                  <div className="text-sm text-black/60">Major Trophies</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-card rounded-full px-8 py-4 border border-border">
            <div className="w-8 h-8 bg-secondary rounded-full animate-football-roll"></div>
            <span className="text-lg font-semibold text-black">Be part of football history with MK Token</span>
            <div className="w-8 h-8 bg-secondary rounded-full animate-football-roll"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
