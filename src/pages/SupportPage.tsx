import {
  Mail, MessageCircle, FileText, HelpCircle,
  ChevronDown, ExternalLink, Clock, CheckCircle2,
  Smartphone, CreditCard, Users, MapPin, Bell, Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { openAppStore, getAppStoreUrl } from "@/lib/openAppStore";

const SupportPage = () => {
  const faqCategories = [
    {
      category: "Conta e Perfil",
      icon: Users,
      color: "primary",
      questions: [
        {
          question: "Como criar uma conta no OurMap?",
          answer: "Baixe o app OurMap ou acesse app.ourmap.com.br, clique em 'Criar Conta' e siga as instruções. Você pode se cadastrar usando email ou entrar com sua conta Google/Apple."
        },
        {
          question: "Esqueci minha senha, o que faço?",
          answer: "Na tela de login, clique em 'Esqueci minha senha'. Você receberá um email com um link para redefinir sua senha. Verifique também sua pasta de spam."
        },
        {
          question: "Como alterar minha foto de perfil?",
          answer: "Acesse seu perfil tocando no ícone do usuário, depois toque na sua foto atual. Você pode escolher uma imagem da galeria ou tirar uma nova foto."
        },
        {
          question: "Posso ter mais de uma conta?",
          answer: "Recomendamos usar apenas uma conta por pessoa. Múltiplas contas podem ser desativadas conforme nossos termos de uso."
        }
      ]
    },
    {
      category: "Eventos",
      icon: MapPin,
      color: "pink",
      questions: [
        {
          question: "Como encontrar eventos próximos a mim?",
          answer: "Na tela inicial, você verá um feed com eventos próximos. Use os filtros para refinar por categoria, data ou distância. Ative a localização para melhores resultados."
        },
        {
          question: "Como criar um evento?",
          answer: "Toque no botão '+' na barra inferior, selecione 'Criar Evento' e preencha as informações: título, descrição, data, local e tipo de ingresso. Confira nossos manuais para detalhes."
        },
        {
          question: "Como confirmar presença em um evento?",
          answer: "Abra o evento desejado e toque em 'Participar' ou 'Comprar Ingresso' dependendo se é gratuito ou pago. Você receberá uma confirmação por email."
        },
        {
          question: "Posso cancelar minha participação?",
          answer: "Sim! Acesse 'Meus Eventos', encontre o evento e toque em 'Cancelar Participação'. Para eventos pagos, verifique a política de reembolso do organizador."
        }
      ]
    },
    {
      category: "Ingressos e Pagamentos",
      icon: CreditCard,
      color: "purple",
      questions: [
        {
          question: "Quais formas de pagamento são aceitas?",
          answer: "Aceitamos cartões de crédito (Visa, Mastercard, Amex, Elo), cartões de débito e PIX. Todos os pagamentos são processados de forma segura via Stripe."
        },
        {
          question: "Como acessar meu ingresso?",
          answer: "Após a compra, seu ingresso com QR Code estará disponível em 'Meus Ingressos' no app. Você também receberá uma cópia por email."
        },
        {
          question: "Posso pedir reembolso?",
          answer: "A política de reembolso é definida por cada organizador. Geralmente, cancelamentos até 48h antes do evento são reembolsáveis. Verifique as condições na página do evento."
        },
        {
          question: "Meu pagamento foi recusado, o que fazer?",
          answer: "Verifique se os dados do cartão estão corretos, se há limite disponível e se seu banco não bloqueou a transação. Tente outro método de pagamento ou entre em contato conosco."
        }
      ]
    },
    {
      category: "Notificações",
      icon: Bell,
      color: "accent",
      questions: [
        {
          question: "Como ativar/desativar notificações?",
          answer: "Vá em Configurações > Notificações. Você pode personalizar quais tipos de alertas deseja receber: eventos, mensagens, lembretes, etc."
        },
        {
          question: "Não estou recebendo notificações, o que fazer?",
          answer: "Verifique se as notificações estão ativadas no app E nas configurações do seu celular. No iPhone, vá em Ajustes > OurMap. No Android, vá em Configurações > Apps > OurMap."
        },
        {
          question: "Como parar de receber emails?",
          answer: "Em Configurações > Notificações > Email, você pode escolher quais emails receber ou desativar todos. Também há um link de cancelamento no rodapé de cada email."
        }
      ]
    },
    {
      category: "Privacidade e Segurança",
      icon: Shield,
      color: "green",
      questions: [
        {
          question: "Minhas informações estão seguras?",
          answer: "Sim! Usamos criptografia de ponta a ponta, servidores seguros e estamos em conformidade com LGPD e GDPR. Seus dados nunca são vendidos a terceiros."
        },
        {
          question: "Como denunciar conteúdo impróprio?",
          answer: "Em qualquer evento, perfil ou mensagem, toque nos três pontos (⋮) e selecione 'Denunciar'. Nossa equipe analisa todas as denúncias o mais rápido possível."
        },
        {
          question: "Como bloquear um usuário?",
          answer: "Acesse o perfil do usuário, toque nos três pontos e selecione 'Bloquear'. O usuário não poderá mais ver seu perfil ou entrar em contato com você."
        },
        {
          question: "Como excluir minha conta?",
          answer: "Vá em Configurações > Conta > Excluir Conta. Atenção: esta ação é irreversível e todos os seus dados serão permanentemente removidos após 30 dias."
        }
      ]
    }
  ];

  const contactOptions = [
    {
      icon: Mail,
      title: "Email",
      description: "Resposta rápida",
      action: "suporte@ourmap.com.br",
      href: "mailto:suporte@ourmap.com.br",
      primary: true
    },
    {
      icon: MessageCircle,
      title: "Chat no App",
      description: "Atendimento em tempo real",
      action: "Abrir App",
      href: "app-store",
      primary: false
    },
    {
      icon: FileText,
      title: "Manuais",
      description: "Guias detalhados de uso",
      action: "Ver Manuais",
      href: "/manuais",
      primary: false
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string }> = {
      primary: { bg: "bg-primary/10", text: "text-primary" },
      pink: { bg: "bg-[hsl(var(--pink))]/10", text: "text-[hsl(var(--pink))]" },
      purple: { bg: "bg-[hsl(var(--purple))]/10", text: "text-[hsl(var(--purple))]" },
      accent: { bg: "bg-accent/10", text: "text-accent" },
      green: { bg: "bg-green-500/10", text: "text-green-600" }
    };
    return colors[color] || colors.primary;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-[hsl(var(--pink))]/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[hsl(var(--pink))]/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="text-sm px-4 py-2 bg-primary/10 text-primary border-primary/20">
              Central de Ajuda
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Como Podemos
              <span className="block mt-2 bg-clip-text text-transparent" style={{ backgroundImage: 'var(--gradient-hero)' }}>
                Ajudar Você?
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Encontre respostas para suas dúvidas, acesse nossos manuais ou entre em contato com nossa equipe de suporte.
            </p>
          </div>
        </div>
      </section>

      {/* Opções de Contato */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactOptions.map((option, index) => (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-primary/50 ${option.primary ? 'ring-2 ring-primary/20' : ''}`}
              >
                <CardHeader className="text-center pb-2">
                  <div className={`w-16 h-16 rounded-2xl ${option.primary ? 'bg-gradient-to-br from-primary to-[hsl(var(--pink))]' : 'bg-primary/10'} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <option.icon className={`w-8 h-8 ${option.primary ? 'text-white' : 'text-primary'}`} />
                  </div>
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                  <CardDescription className="flex items-center justify-center gap-2">
                    <Clock className="w-4 h-4" />
                    {option.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  {option.href.startsWith('mailto:') ? (
                    <a
                      href={option.href}
                      className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                    >
                      {option.action}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : option.href === 'app-store' ? (
                    <Button
                      variant={option.primary ? "hero" : "outline"}
                      className="w-full"
                      onClick={() => openAppStore()}
                    >
                      {option.action}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  ) : option.href.startsWith('http') ? (
                    <Button
                      variant={option.primary ? "hero" : "outline"}
                      className="w-full"
                      onClick={() => window.open(option.href, '_blank')}
                    >
                      {option.action}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => window.location.href = option.href}
                    >
                      {option.action}
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Respostas rápidas para as dúvidas mais comuns
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {faqCategories.map((category, catIndex) => {
              const colorClasses = getColorClasses(category.color);
              return (
                <Card key={catIndex} className="overflow-hidden border-border/50">
                  <CardHeader className="bg-card">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl ${colorClasses.bg} flex items-center justify-center`}>
                        <category.icon className={`w-6 h-6 ${colorClasses.text}`} />
                      </div>
                      <CardTitle className="text-2xl">{category.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((item, qIndex) => (
                        <AccordionItem key={qIndex} value={`item-${catIndex}-${qIndex}`} className="border-border/50">
                          <AccordionTrigger className="text-left hover:text-primary transition-colors py-4">
                            <span className="pr-4">{item.question}</span>
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                            {item.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dicas Rápidas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Dicas Rápidas
            </h2>
            <p className="text-lg text-muted-foreground">
              Aproveite ao máximo o OurMap
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { tip: "Ative a localização para descobrir eventos próximos automaticamente", icon: MapPin },
              { tip: "Siga organizadores favoritos para não perder novos eventos", icon: Users },
              { tip: "Use filtros para encontrar eventos do seu interesse rapidamente", icon: HelpCircle },
              { tip: "Ative notificações para lembretes de eventos confirmados", icon: Bell },
              { tip: "Compartilhe eventos com amigos", icon: ExternalLink },
              { tip: "Confira os manuais para tutoriais detalhados de cada função", icon: FileText }
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed pt-2">{item.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl p-12 md:p-16 text-center overflow-hidden shadow-2xl" style={{ background: 'var(--gradient-hero)' }}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

              <div className="relative z-10 space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Ainda Precisa de Ajuda?
                </h2>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  Nossa equipe de suporte está pronta para ajudar você. Entre em contato e responderemos o mais rápido possível.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="text-lg px-8 py-6 h-auto bg-white text-primary hover:bg-white/90"
                    onClick={() => window.location.href = 'mailto:suporte@ourmap.com.br'}
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Enviar Email
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6 h-auto border-white/30 text-white hover:bg-white/10"
                    onClick={() => window.location.href = '/manuais'}
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Ver Manuais
                  </Button>
                </div>
                <div className="flex items-center justify-center gap-2 text-white/80 text-sm pt-4">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Resposta rápida e eficiente</span>
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

export default SupportPage;

