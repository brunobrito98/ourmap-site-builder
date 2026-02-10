import { MapPin, Users, Calendar } from "lucide-react";
import discoverImage from "@/assets/feature-discover.png";
import connectImage from "@/assets/feature-connect.png";
import organizeImage from "@/assets/feature-organize.png";

const features = [
  {
    icon: MapPin,
    image: discoverImage,
    title: "Descubra Eventos",
    description: "Explore eventos próximos com nosso mapa interativo. Festas, shows, workshops e muito mais na palma da sua mão.",
  },
  {
    icon: Users,
    image: connectImage,
    title: "Conecte-se",
    description: "Faça novos amigos, encontre grupos com seus interesses e amplie sua rede de contatos através dos eventos.",
  },
  {
    icon: Calendar,
    image: organizeImage,
    title: "Organize & Crie",
    description: "Crie seus próprios eventos em minutos e compartilhe com a comunidade. Seja você o anfitrião da próxima experiência inesquecível.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="hidden sm:block absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="hidden sm:block absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-20 space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-glass mb-4">
            <span className="text-xs sm:text-sm font-bold text-primary tracking-wide uppercase">Recursos</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight text-balance">
            Tudo Que Você Precisa
            <span className="block mt-2 sm:mt-3 bg-clip-text text-transparent" style={{ backgroundImage: 'var(--gradient-hero)' }}>Em Um Só Lugar</span>
          </h2>
          <p className="text-base sm:text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium text-balance">
            OurMap é mais que um app de eventos. É sua porta de entrada para uma vida social mais rica e conectada.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card/80 backdrop-blur-glass rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-[var(--shadow-elegant)] transition-all duration-500 hover:-translate-y-3 border border-border/50 hover:border-primary/30"
            >
              {/* Icon */}
              <div className={`mb-6 sm:mb-8 w-14 h-14 sm:w-20 sm:h-20 rounded-2xl ${index === 1 ? 'bg-gradient-to-br from-[hsl(var(--pink))]/20 to-[hsl(var(--pink))]/5 shadow-[var(--shadow-pink)]' : index === 2 ? 'bg-gradient-to-br from-purple-500/20 to-purple-500/5' : 'bg-gradient-to-br from-primary/20 to-primary/5 shadow-[var(--shadow-elegant)]'} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                <feature.icon className={`w-7 h-7 sm:w-10 sm:h-10 ${index === 1 ? 'text-[hsl(var(--pink))]' : index === 2 ? 'text-purple-500' : 'text-primary'}`} />
              </div>

              {/* Feature Image */}
              <div className="mb-6 sm:mb-8 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 p-4 sm:p-6 group-hover:scale-105 transition-transform duration-500">
                <img
                  src={feature.image}
                  alt={`Ilustração de ${feature.title}`}
                  className="w-full h-48 object-contain drop-shadow-lg"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                {feature.description}
              </p>

              {/* Decorative Elements */}
              <div className={`absolute -top-px -right-px w-32 h-32 ${index === 1 ? 'bg-gradient-to-br from-[hsl(var(--pink))]/20' : index === 2 ? 'bg-gradient-to-br from-purple-500/20' : 'bg-gradient-to-br from-primary/20'} to-transparent rounded-tr-3xl rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="absolute -bottom-1 -left-1 w-24 h-24 bg-gradient-to-tr from-primary/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
