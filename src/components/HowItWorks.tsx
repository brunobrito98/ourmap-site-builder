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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Como Funciona
          </h2>
          <p className="text-lg text-muted-foreground">
            Em três passos simples, você está pronto para descobrir os melhores eventos da sua cidade
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/50 to-primary/20" />
                )}

                {/* Step Card */}
                <div className="relative bg-card rounded-2xl p-8 text-center shadow-lg border border-border/50 hover:border-primary/50 transition-all duration-300">
                  {/* Number Badge */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground font-bold text-lg flex items-center justify-center shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mt-4 mb-6 w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
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
