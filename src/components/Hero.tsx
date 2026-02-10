import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-events.jpg";
import { openAppStore } from "@/lib/openAppStore";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Pessoas curtindo um festival de música com luzes coloridas"
          className="w-full h-full object-cover scale-105 animate-[scale_20s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/70 to-background/75" />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-pink-500/5" />
      </div>

      {/* Decorative elements */}
      <div className="hidden sm:block absolute top-20 left-10 w-72 h-72 bg-primary/[0.08] rounded-full blur-3xl" />
      <div className="hidden sm:block absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.1] tracking-tight animate-slide-up text-balance" style={{ animationDelay: '0.2s' }}>
            Descubra Eventos
            <span className="block mt-2 sm:mt-3 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 animate-gradient" style={{ backgroundImage: 'var(--gradient-hero)' }}>
              Que Você Vai Amar
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-foreground/80 max-w-3xl mx-auto leading-relaxed font-medium animate-slide-up text-balance" style={{ animationDelay: '0.3s' }}>
            Transforme sua cidade em um mapa de oportunidades. Encontre festas, shows,
            workshops e muito mais perto de você.
          </p>


          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 sm:pt-6 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <Button
              size="lg"
              variant="hero"
              className="text-base sm:text-lg px-6 py-5 sm:px-10 sm:py-7 h-auto rounded-2xl font-bold shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)] hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              onClick={() => openAppStore()}
            >
              Abrir App
              <Sparkles className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base sm:text-lg px-6 py-5 sm:px-10 sm:py-7 h-auto rounded-2xl font-bold backdrop-blur-glass hover:bg-primary/5 hover:border-primary/50 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex items-start justify-center p-2 backdrop-blur-sm">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
