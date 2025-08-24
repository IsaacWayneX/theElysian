export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with dark overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: `url('/elegant-luxury-venue-with-marble-columns-and-cryst.png')`,
          }}
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Main Title with gold gradient and glow */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold mb-8 tracking-tight text-gold-gradient gold-glow">
            The Elysian
            <span className="block mt-4">Summit & Exhibition</span>
          </h1>

          {/* Coming Soon text */}
          <div className="relative">
            <p className="text-3xl md:text-5xl font-serif font-light text-foreground mb-8 gold-glow">Coming Soon</p>

            {/* Decorative gold line */}
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto gold-border-glow"></div>
          </div>
        </div>

        {/* Ambient gold glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </section>
    </div>
  )
}
