import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-12 md:p-16 text-center overflow-hidden shadow-[var(--shadow-elegant)]">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

            {/* Content */}
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm">
                <Smartphone className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">
                  Disponível para iOS e Android
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Pronto Para Começar?
              </h2>

              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Junte-se a milhares de pessoas que já estão descobrindo os melhores eventos da sua cidade
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 py-6 h-auto bg-white text-primary hover:bg-white/90"
                  onClick={() => window.open('https://app.ourmap.com.br', '_blank')}
                >
                  Começar Agora
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>

              <p className="text-sm text-white/80">
                ✨ Gratuito • 🚀 Sem cartão de crédito • 📱 Acesso instantâneo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
