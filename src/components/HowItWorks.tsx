import { Search, Heart, PartyPopper } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Explore",
    description: "Abra o app e veja todos os eventos próximos de você no mapa interativo.",
  },
  {
    icon: Heart,
    number: "02",
    title: "Escolha",
    description: "Filtre por categoria, data ou localização e encontre o evento perfeito.",
  },
  {
    icon: PartyPopper,
    number: "03",
    title: "Participe",
    description: "Confirme presença, convide amigos e aproveite experiências incríveis!",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmOTc0MTYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMS0xLjc5IDQtNCA0cy00LTEuNzktNC00IDEuNzktNCA0LTQgNCAxLjc5IDQgNHptMCAxMGMwIDIuMjEtMS43OSA0LTQgNHMtNC0xLjc5LTQtNCAxLjc5LTQgNC00IDQgMS43OSA0IDR6bTAgMTBjMCAyLjIxLTEuNzkgNC00IDRzLTQtMS43OS00LTQgMS43OS00IDQtNCA0IDEuNzkgNCA0eiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-glass mb-4">
            <span className="text-sm font-bold text-primary tracking-wide uppercase">Simples & Rápido</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight text-balance">
            Como Funciona
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium text-balance">
            Em três passos simples, você está pronto para descobrir os melhores eventos da sua cidade
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Connector Line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-[60%] w-full h-1 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary/60 via-primary/40 to-primary/20 group-hover:from-primary/80 group-hover:via-primary/60 transition-all duration-500" />
                  </div>
                )}

                {/* Step Card */}
                <div className="relative bg-card/80 backdrop-blur-glass rounded-3xl p-10 text-center shadow-lg border border-border/50 hover:border-primary/50 hover:shadow-[var(--shadow-elegant)] transition-all duration-500 hover:-translate-y-2">
                  {/* Number Badge */}
                  <div className={`absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl ${index === 1 ? 'bg-gradient-to-br from-[hsl(var(--pink))] to-[hsl(var(--pink))]/80 shadow-[var(--shadow-pink)]' : index === 2 ? 'bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg shadow-purple-500/30' : 'bg-gradient-to-br from-primary to-primary/80 shadow-[var(--shadow-elegant)]'} text-primary-foreground font-bold text-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 rotate-3 group-hover:rotate-0`}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`mt-6 mb-8 w-24 h-24 mx-auto rounded-2xl ${index === 1 ? 'bg-gradient-to-br from-[hsl(var(--pink))]/20 to-[hsl(var(--pink))]/5' : index === 2 ? 'bg-gradient-to-br from-purple-500/20 to-purple-500/5' : 'bg-gradient-to-br from-primary/20 to-primary/5'} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <step.icon className={`w-12 h-12 ${index === 1 ? 'text-[hsl(var(--pink))]' : index === 2 ? 'text-purple-500' : 'text-primary'}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-3xl font-bold text-foreground mb-4 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {step.description}
                  </p>

                  {/* Decorative corner */}
                  <div className={`absolute top-0 right-0 w-20 h-20 ${index === 1 ? 'bg-gradient-to-bl from-[hsl(var(--pink))]/10' : index === 2 ? 'bg-gradient-to-bl from-purple-500/10' : 'bg-gradient-to-bl from-primary/10'} to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
