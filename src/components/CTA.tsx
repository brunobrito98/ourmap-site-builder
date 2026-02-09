import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Star } from "lucide-react";
import { openAppStore } from "@/lib/openAppStore";

const CTA = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-primary/5 via-background to-pink-500/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-[3rem] p-12 md:p-20 text-center overflow-hidden shadow-2xl border border-white/10" style={{ background: 'var(--gradient-hero)' }}>
            {/* Animated Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-white/5 via-transparent to-white/5 rounded-full blur-2xl" />

            {/* Floating stars decoration */}
            <div className="absolute top-10 left-10 animate-pulse" style={{ animationDuration: '3s' }}>
              <Star className="w-6 h-6 text-white/30 fill-white/30" />
            </div>
            <div className="absolute top-20 right-20 animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }}>
              <Star className="w-4 h-4 text-white/30 fill-white/30" />
            </div>
            <div className="absolute bottom-16 left-20 animate-pulse" style={{ animationDuration: '5s', animationDelay: '0.5s' }}>
              <Star className="w-5 h-5 text-white/30 fill-white/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-8">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/25 backdrop-blur-glass border border-white/30 shadow-lg">
                <Smartphone className="w-5 h-5 text-white" />
                <span className="text-sm font-bold text-white tracking-wide">
                  Disponível para iOS e Android
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight text-balance">
                Pronto Para Começar?
              </h2>

              <p className="text-2xl md:text-3xl text-white/95 max-w-3xl mx-auto leading-relaxed font-medium text-balance">
                Junte-se a milhares de pessoas que já estão descobrindo os melhores eventos da sua cidade
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center pt-6">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-xl px-12 py-8 h-auto rounded-2xl font-bold bg-white text-primary hover:bg-white/95 hover:scale-105 shadow-2xl hover:shadow-white/30 transition-all duration-300"
                  onClick={() => openAppStore()}
                >
                  Começar Agora
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Button>
              </div>

              {/* Social proof */}
              <div className="flex flex-wrap items-center justify-center gap-6 pt-8">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/50" />
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/50" />
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/50" />
                  </div>
                  <span className="text-white/90 font-semibold text-sm">+10k usuários ativos</span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                  ))}
                  <span className="text-white/90 font-semibold text-sm ml-2">4.9/5.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
