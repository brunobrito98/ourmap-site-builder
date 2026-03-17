import { MapPin, Users, Calendar } from "lucide-react";
import discoverImage from "@/assets/1.png";
import connectImage from "@/assets/2.png";
import organizeImage from "@/assets/3.png";

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

const featureStyles = [
  {
    iconBg: "bg-gradient-to-br from-primary/20 to-primary/5 shadow-[var(--shadow-elegant)]",
    iconColor: "text-primary",
    previewBg: "from-primary/15 via-orange-100/70 to-background",
    glowBg: "bg-primary/10",
    accentGradient: "from-primary/20",
    screenBorder: "border-primary/15",
  },
  {
    iconBg: "bg-gradient-to-br from-[hsl(var(--pink))]/20 to-[hsl(var(--pink))]/5 shadow-[var(--shadow-pink)]",
    iconColor: "text-[hsl(var(--pink))]",
    previewBg: "from-[hsl(var(--pink))]/15 via-rose-50 to-background",
    glowBg: "bg-[hsl(var(--pink))]/10",
    accentGradient: "from-[hsl(var(--pink))]/20",
    screenBorder: "border-[hsl(var(--pink))]/15",
  },
  {
    iconBg: "bg-gradient-to-br from-purple-500/20 to-purple-500/5",
    iconColor: "text-purple-500",
    previewBg: "from-purple-500/15 via-fuchsia-50 to-background",
    glowBg: "bg-purple-500/10",
    accentGradient: "from-purple-500/20",
    screenBorder: "border-purple-500/15",
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
          {features.map((feature, index) => {
            const style = featureStyles[index];

            return (
              <div
                key={index}
                className="group relative bg-card/80 backdrop-blur-glass rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-[var(--shadow-elegant)] transition-all duration-500 hover:-translate-y-3 border border-border/50 hover:border-primary/30"
              >
                <div className={`mb-6 sm:mb-8 w-14 h-14 sm:w-20 sm:h-20 rounded-2xl ${style.iconBg} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <feature.icon className={`w-7 h-7 sm:w-10 sm:h-10 ${style.iconColor}`} />
                </div>

                <div className={`mb-6 sm:mb-8 relative overflow-hidden rounded-[2rem] border border-white/60 bg-gradient-to-br ${style.previewBg} px-4 pt-5 pb-0 sm:px-6 sm:pt-7 sm:pb-0 shadow-inner`}>
                  <div className={`pointer-events-none absolute -right-8 top-8 h-28 w-28 rounded-full blur-3xl ${style.glowBg}`} />
                  <div className="pointer-events-none absolute inset-x-6 top-0 h-16 rounded-b-[2rem] bg-white/30 blur-2xl" />

                  <div className={`relative mx-auto mb-[-2.75rem] sm:mb-[-3.5rem] w-[78%] sm:w-[74%] rounded-[2.25rem] border ${style.screenBorder} bg-slate-950 p-2 shadow-[0_30px_60px_-25px_rgba(15,23,42,0.55)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-[1.03]`}>
                    <div className="mx-auto mb-2 h-1.5 w-20 rounded-full bg-white/12" />
                    <div className="overflow-hidden rounded-[1.7rem] bg-white">
                      <img
                        src={feature.image}
                        alt={`Preview do app em ${feature.title}`}
                        className="h-[24rem] w-full object-cover object-top sm:h-[27rem]"
                      />
                    </div>
                  </div>
                </div>

                <h3 className="text-xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                  {feature.description}
                </p>

                <div className={`absolute -top-px -right-px w-32 h-32 bg-gradient-to-br ${style.accentGradient} to-transparent rounded-tr-3xl rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="absolute -bottom-1 -left-1 w-24 h-24 bg-gradient-to-tr from-primary/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
