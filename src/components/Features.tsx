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
    <section id="features" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Tudo Que Você Precisa
            <span className="block mt-2 text-primary">Em Um Só Lugar</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            OurMap é mais que um app de eventos. É sua porta de entrada para uma vida social mais rica e conectada.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 shadow-lg hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-2 border border-border/50"
            >
              {/* Icon */}
              <div className={`mb-6 w-16 h-16 rounded-xl ${index === 1 ? 'bg-gradient-to-br from-[hsl(var(--pink))]/20 to-[hsl(var(--pink))]/5' : 'bg-gradient-to-br from-primary/20 to-primary/5'} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-8 h-8 ${index === 1 ? 'text-[hsl(var(--pink))]' : 'text-primary'}`} />
              </div>

              {/* Feature Image */}
              <div className="mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 p-4">
                <img
                  src={feature.image}
                  alt={`Ilustração de ${feature.title}`}
                  className="w-full h-48 object-contain"
                />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
