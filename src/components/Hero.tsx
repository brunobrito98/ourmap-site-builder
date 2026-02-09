import { Button } from "@/components/ui/button";
import { Sparkles, MapPin, Users, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-events.jpg";

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
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/[0.08] rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-glass animate-slide-up shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300" style={{ animationDelay: '0.1s' }}>
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground tracking-wide">
              O mapa de eventos da sua cidade
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.1] tracking-tight animate-slide-up text-balance" style={{ animationDelay: '0.2s' }}>
            Descubra Eventos
            <span className="block mt-3 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 animate-gradient" style={{ backgroundImage: 'var(--gradient-hero)' }}>
              Que Você Vai Amar
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground/80 max-w-3xl mx-auto leading-relaxed font-medium animate-slide-up text-balance" style={{ animationDelay: '0.3s' }}>
            Transforme sua cidade em um mapa de oportunidades. Encontre festas, shows,
            workshops e muito mais perto de você.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 py-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card/50 backdrop-blur-glass border border-border/50 hover:border-primary/30 transition-colors">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold">Eventos Próximos</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card/50 backdrop-blur-glass border border-border/50 hover:border-pink-500/30 transition-colors">
              <Users className="w-5 h-5 text-pink-500" />
              <span className="text-sm font-semibold">Comunidade Ativa</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card/50 backdrop-blur-glass border border-border/50 hover:border-purple-500/30 transition-colors">
              <Calendar className="w-5 h-5 text-purple-500" />
              <span className="text-sm font-semibold">Fácil de Criar</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <Button
              size="lg"
              variant="hero"
              className="text-lg px-10 py-7 h-auto rounded-2xl font-bold shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)] hover:scale-105 transition-all duration-300"
              onClick={() => window.open('https://app.ourmap.com.br', '_blank')}
            >
              Abrir App
              <Sparkles className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-7 h-auto rounded-2xl font-bold backdrop-blur-glass hover:bg-primary/5 hover:border-primary/50 hover:scale-105 transition-all duration-300"
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
