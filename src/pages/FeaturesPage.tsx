import {
  Search, Heart, PartyPopper, CreditCard, Users, MessageCircle,
  Bell, Star, Target, Repeat, TrendingUp, BarChart3,
  UserCheck, Camera, Shield, Lock, MapPin, Mail, Zap, Globe,
  CheckCircle2, Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { openAppStore } from "@/lib/openAppStore";

const FeaturesPage = () => {
  const participantFeatures = [
    {
      icon: Search,
      title: "Descoberta Inteligente",
      description: "Encontre eventos próximos baseados em sua localização e interesses com nosso sistema de busca avançado."
    },
    {
      icon: CreditCard,
      title: "Ingressos Digitais",
      description: "Compre ingressos com QR Code único e pagamento seguro via Stripe. Tudo direto no seu celular."
    },
    {
      icon: Users,
      title: "Conexões Sociais",
      description: "Sistema completo de amizades e networking. Conecte-se com pessoas que compartilham seus interesses."
    },
    {
      icon: MessageCircle,
      title: "Chat em Tempo Real",
      description: "Converse com amigos e organizadores através do nosso sistema de mensagens instantâneas."
    },
    {
      icon: Bell,
      title: "Notificações Inteligentes",
      description: "Receba alertas push e email para não perder nada. Controle o que você quer receber."
    },
    {
      icon: Star,
      title: "Avaliações e Reviews",
      description: "Avalie eventos e organizadores. Ajude outros usuários a fazer melhores escolhas."
    },
    {
      icon: Target,
      title: "Grupos Temáticos",
      description: "Participe de comunidades organizadas por interesse e descubra eventos relevantes para você."
    }
  ];

  const organizerFeatures = [
    {
      icon: PartyPopper,
      title: "Criação Simplificada",
      description: "Interface intuitiva para criar eventos em minutos. Do conceito à publicação rapidamente."
    },
    {
      icon: CreditCard,
      title: "Monetização Completa",
      description: "Venda ingressos com múltiplos tipos, lotes progressivos e pagamento seguro integrado."
    },
    {
      icon: Repeat,
      title: "Eventos Recorrentes",
      description: "Configure séries de eventos automaticamente. Perfeito para eventos semanais ou mensais."
    },
    {
      icon: Heart,
      title: "Vaquinha/Crowdfunding",
      description: "Arrecade fundos coletivamente para realizar eventos especiais com sua comunidade."
    },
    {
      icon: TrendingUp,
      title: "Sistema de Boost",
      description: "Promova seus eventos com planos pagos (Prata, Ouro, Diamante) e alcance mais pessoas."
    },
    {
      icon: BarChart3,
      title: "Analytics Completo",
      description: "Acompanhe métricas detalhadas, taxa de conversão e receita em tempo real."
    },
    {
      icon: UserCheck,
      title: "Gestão de Participantes",
      description: "Check-in, lista de espera, convidados VIP e controle total de quem participa."
    },
    {
      icon: Camera,
      title: "Galeria Colaborativa",
      description: "Participantes compartilham fotos do evento, criando memórias coletivas."
    }
  ];

  const socialFeatures = [
    {
      icon: Users,
      title: "Sistema de Amizades",
      description: "Conexões, seguidores e uma verdadeira rede social focada em eventos e experiências."
    },
    {
      icon: Globe,
      title: "Grupos e Comunidades",
      description: "Crie ou participe de grupos temáticos com discussões, enquetes e eventos exclusivos."
    },
    {
      icon: MessageCircle,
      title: "Mensagens Privadas",
      description: "Chat 1-on-1 seguro com controles completos de privacidade e bloqueio."
    },
    {
      icon: Sparkles,
      title: "Perfis Personalizados",
      description: "Galeria de fotos, bio customizada, links para redes sociais e muito mais."
    }
  ];

  const techFeatures = [
    {
      icon: Lock,
      title: "Pagamentos Seguros",
      description: "Stripe para processamento seguro de pagamentos com criptografia de ponta a ponta."
    },
    {
      icon: MapPin,
      title: "Mapbox Integration",
      description: "Mapas interativos, geolocalização precisa e busca por proximidade."
    },
    {
      icon: Mail,
      title: "SendGrid Email",
      description: "Emails transacionais profissionais, confirmações e notificações automáticas."
    },
    {
      icon: Zap,
      title: "Firebase Push",
      description: "Notificações push em tempo real para manter você sempre conectado."
    },
    {
      icon: Shield,
      title: "Moderação Automática",
      description: "Sistema anti-spam e filtro de conteúdo inadequado para manter a comunidade segura."
    },
    {
      icon: CheckCircle2,
      title: "LGPD e GDPR",
      description: "Conformidade completa com leis de proteção de dados do Brasil e Europa."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="text-sm px-4 py-2 bg-primary/10 text-primary border-primary/20" data-testid="badge-features">
              Funcionalidades Completas
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Tudo Que Você Precisa Para
              <span className="block mt-2 bg-clip-text text-transparent" style={{ backgroundImage: 'var(--gradient-hero)' }}>
                Eventos Incríveis
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Uma plataforma completa para criar, descobrir e participar de eventos.
              Conecte pessoas, construa comunidades e crie experiências inesquecíveis.
            </p>
          </div>
        </div>
      </section>

      {/* Para Participantes */}
      <section className="py-20 bg-background" id="participantes">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Para Participantes
            </h2>
            <p className="text-lg text-muted-foreground">
              Descubra eventos, conecte-se com pessoas e viva experiências únicas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {participantFeatures.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-primary/50"
                data-testid={`card-participant-feature-${index}`}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${index === 3 ? 'bg-gradient-to-br from-[hsl(var(--pink))]/20 to-[hsl(var(--pink))]/5' : 'bg-gradient-to-br from-primary/20 to-primary/5'} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`w-6 h-6 ${index === 3 ? 'text-[hsl(var(--pink))]' : 'text-primary'}`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Para Organizadores */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20" id="organizadores">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Para Organizadores
            </h2>
            <p className="text-lg text-muted-foreground">
              Crie eventos incríveis, monetize e gerencie tudo em um só lugar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {organizerFeatures.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-primary/50"
                data-testid={`card-organizer-feature-${index}`}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${index === 2 ? 'bg-gradient-to-br from-[hsl(var(--pink))]/20 to-[hsl(var(--pink))]/5' : 'bg-gradient-to-br from-accent/20 to-accent/5'} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`w-6 h-6 ${index === 2 ? 'text-[hsl(var(--pink))]' : 'text-accent'}`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recursos Sociais */}
      <section className="py-20 bg-background" id="social">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Recursos Sociais
            </h2>
            <p className="text-lg text-muted-foreground">
              Construa comunidades, faça amizades e crie conexões duradouras
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {socialFeatures.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-primary/50"
                data-testid={`card-social-feature-${index}`}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${index === 1 ? 'bg-gradient-to-br from-[hsl(var(--pink))]/20 to-[hsl(var(--pink))]/5' : 'bg-gradient-to-br from-primary/20 to-primary/5'} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`w-6 h-6 ${index === 1 ? 'text-[hsl(var(--pink))]' : 'text-primary'}`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnologia e Segurança */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20" id="seguranca">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Tecnologia e Segurança
            </h2>
            <p className="text-lg text-muted-foreground">
              Infraestrutura robusta com as melhores tecnologias do mercado
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {techFeatures.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-primary/50"
                data-testid={`card-tech-feature-${index}`}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${index === 1 ? 'bg-gradient-to-br from-[hsl(var(--pink))]/20 to-[hsl(var(--pink))]/5' : index === 4 ? 'bg-gradient-to-br from-[hsl(var(--purple))]/20 to-[hsl(var(--purple))]/5' : 'bg-gradient-to-br from-green-500/20 to-green-500/5'} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`w-6 h-6 ${index === 1 ? 'text-[hsl(var(--pink))]' : index === 4 ? 'text-[hsl(var(--purple))]' : 'text-green-600'}`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl p-12 md:p-16 text-center overflow-hidden shadow-2xl" style={{ background: 'var(--gradient-hero)' }}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

              <div className="relative z-10 space-y-6">
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
                    onClick={() => openAppStore()}
                    data-testid="button-start-now"
                  >
                    Começar Agora
                    <PartyPopper className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FeaturesPage;
