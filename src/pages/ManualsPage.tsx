import { Book, Users, Calendar, Bell, CreditCard, TrendingUp, Repeat, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { openAppStore } from "@/lib/openAppStore";

const ManualsPage = () => {
  const navigate = useNavigate();

  const manuals = [
    {
      id: "manual-usuario",
      icon: Book,
      title: "Manual do Usuário",
      description: "Guia completo sobre como usar todas as funcionalidades da plataforma",
      topics: [
        "Criação de conta e perfil",
        "Descobrir e participar de eventos",
        "Configurações de privacidade",
        "Sistema de amizades"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      id: "eventos-pagos",
      icon: CreditCard,
      title: "Eventos Pagos",
      description: "Como criar e gerenciar eventos com venda de ingressos",
      topics: [
        "Configurar conta Stripe",
        "Tipos de precificação",
        "Check-in com QR Code",
        "Políticas de reembolso"
      ],
      color: "from-red-500 to-pink-500"
    },
    {
      id: "eventos-recorrentes",
      icon: Repeat,
      title: "Eventos Recorrentes",
      description: "Crie séries de eventos que acontecem regularmente",
      topics: [
        "Configurar recorrência",
        "Gerenciar séries de eventos",
        "Editar eventos futuros",
        "Casos de uso"
      ],
      color: "from-pink-500 to-purple-500"
    },
    {
      id: "sistema-boost",
      icon: TrendingUp,
      title: "Sistema de Boost",
      description: "Promova seus eventos e alcance mais pessoas",
      topics: [
        "Como funciona o boost",
        "Planos disponíveis (Prata, Ouro, Diamante)",
        "Melhores práticas"
      ],
      color: "from-purple-500 to-orange-500"
    },
    {
      id: "grupos-comunidades",
      icon: Users,
      title: "Grupos e Comunidades",
      description: "Participe ou crie grupos temáticos",
      topics: [
        "Encontrar grupos",
        "Participar de discussões",
        "Criar enquetes",
        "Gerenciar seu grupo"
      ],
      color: "from-orange-500 to-pink-500"
    },
    {
      id: "notificacoes",
      icon: Bell,
      title: "Notificações",
      description: "Configure como e quando receber notificações",
      topics: [
        "Notificações push",
        "Notificações por email",
        "Personalizar preferências",
        "Gerenciar centro de notificações"
      ],
      color: "from-red-500 to-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <Book className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                Central de Ajuda
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Manuais de Uso
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Aprenda a usar todas as funcionalidades da plataforma com nossos guias completos e detalhados
            </p>
          </div>
        </div>
      </section>

      {/* Manuais Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {manuals.map((manual, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-primary/50"
                data-testid={`card-manual-${index}`}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${manual.color} bg-opacity-10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <manual.icon className="w-6 h-6 text-white" style={{ filter: 'drop-shadow(0 0 8px rgba(0,0,0,0.5))' }} />
                  </div>
                  <CardTitle className="text-xl">{manual.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {manual.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {manual.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    onClick={() => navigate(`/manuais/${manual.id}`)}
                    data-testid={`button-read-manual-${index}`}
                  >
                    Ler Manual
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Suporte Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl p-12 md:p-16 text-center overflow-hidden shadow-2xl" style={{ background: 'var(--gradient-hero)' }}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

              <div className="relative z-10 space-y-6">
                <Shield className="w-16 h-16 text-white mx-auto" />
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Precisa de Ajuda?
                </h2>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  Nossa equipe de suporte está pronta para ajudar você a aproveitar ao máximo a plataforma
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="text-lg px-8 py-6 h-auto bg-white text-primary hover:bg-white/90"
                    onClick={() => window.location.href = 'mailto:suporte@ourmap.com.br'}
                    data-testid="button-contact-support"
                  >
                    Contatar Suporte
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6 h-auto border-white text-white hover:bg-white/20"
                    onClick={() => openAppStore()}
                    data-testid="button-open-app-support"
                  >
                    Abrir App
                  </Button>
                </div>
                <p className="text-sm text-white/80">
                  📧 suporte@ourmap.com.br • 💬 Chat disponível no app
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ManualsPage;
