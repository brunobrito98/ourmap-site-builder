import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Book, Users, Calendar, Bell, CreditCard, TrendingUp, Repeat, MessageCircle, CheckCircle2 } from "lucide-react";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";

interface ManualContent {
  icon: any;
  title: string;
  description: string;
  color: string;
  sections: {
    title: string;
    content: string;
    steps?: string[];
    tips?: string[];
  }[];
}

const ManualDetailPage = () => {
  const { manualId } = useParams<{ manualId: string }>();
  const navigate = useNavigate();

  const manuals: Record<string, ManualContent> = {
    "manual-usuario": {
      icon: Book,
      title: "Manual do Usuário",
      description: "Guia completo sobre como usar todas as funcionalidades da plataforma",
      color: "from-orange-500 to-red-500",
      sections: [
        {
          title: "Criação de Conta e Perfil",
          content: "Comece sua jornada no OurMap criando uma conta personalizada que reflete quem você é.",
          steps: [
            "Baixe o aplicativo OurMap na App Store ou Google Play",
            "Toque em 'Criar Conta' na tela inicial",
            "Escolha criar conta com email, Google ou Apple",
            "Preencha seus dados básicos (nome, email, senha)",
            "Confirme seu email através do link enviado",
            "Complete seu perfil com foto, bio e interesses"
          ],
          tips: [
            "Use uma foto de perfil clara para que outros usuários possam reconhecê-lo",
            "Preencha seus interesses para receber sugestões personalizadas de eventos",
            "Conecte suas redes sociais para encontrar amigos mais facilmente"
          ]
        },
        {
          title: "Descobrir e Participar de Eventos",
          content: "Explore eventos próximos e encontre experiências perfeitas para você.",
          steps: [
            "Acesse a aba 'Explorar' no menu principal",
            "Use filtros por categoria, data, distância e preço",
            "Toque em um evento para ver todos os detalhes",
            "Veja localização no mapa, fotos e avaliações",
            "Toque em 'Participar' para eventos gratuitos",
            "Para eventos pagos, selecione o tipo de ingresso e finalize a compra",
            "Seu ingresso digital aparecerá em 'Meus Ingressos'"
          ],
          tips: [
            "Ative notificações para receber alertas sobre eventos que você segue",
            "Salve eventos em 'Favoritos' para decidir depois",
            "Compartilhe eventos com amigos para irem juntos"
          ]
        },
        {
          title: "Configurações de Privacidade",
          content: "Controle quem pode ver seu perfil, seus eventos e interagir com você.",
          steps: [
            "Acesse 'Configurações' no menu do seu perfil",
            "Vá em 'Privacidade e Segurança'",
            "Defina quem pode ver seu perfil: Todos, Amigos ou Ninguém",
            "Configure quem pode enviar mensagens diretas",
            "Ative/desative compartilhamento de localização",
            "Gerencie permissões de marcação em fotos",
            "Configure visibilidade dos seus eventos passados"
          ],
          tips: [
            "Revise suas configurações de privacidade periodicamente",
            "Use a lista de bloqueados para gerenciar usuários indesejados",
            "Mantenha a autenticação em dois fatores ativada para mais segurança"
          ]
        },
        {
          title: "Sistema de Amizades",
          content: "Conecte-se com pessoas que compartilham seus interesses e construa sua rede social.",
          steps: [
            "Busque amigos pelo nome ou username na barra de pesquisa",
            "Importe contatos do seu telefone (com permissão)",
            "Envie solicitações de amizade tocando no botão 'Adicionar'",
            "Aceite ou recuse solicitações em 'Notificações'",
            "Veja todos seus amigos na aba 'Amigos' do seu perfil",
            "Envie mensagens diretas tocando no ícone de chat",
            "Organize amigos em listas personalizadas"
          ],
          tips: [
            "Quanto mais amigos você tiver, melhores serão as recomendações de eventos",
            "Veja quais eventos seus amigos estão participando",
            "Crie grupos com amigos para organizar saídas em conjunto"
          ]
        }
      ]
    },
    "eventos-pagos": {
      icon: CreditCard,
      title: "Eventos Pagos",
      description: "Como criar e gerenciar eventos com venda de ingressos",
      color: "from-red-500 to-pink-500",
      sections: [
        {
          title: "Configurar Conta Stripe",
          content: "Configure sua conta de pagamentos para começar a vender ingressos de forma segura.",
          steps: [
            "Acesse 'Meu Perfil' > 'Configurações de Pagamento'",
            "Toque em 'Conectar com Stripe'",
            "Preencha as informações da sua empresa ou dados pessoais",
            "Forneça informações bancárias para receber pagamentos",
            "Envie documentos de verificação (RG, CPF ou CNPJ)",
            "Aguarde aprovação (geralmente 24-48 horas)",
            "Receba confirmação e comece a criar eventos pagos"
          ],
          tips: [
            "Mantenha seus dados bancários sempre atualizados",
            "A verificação é necessária apenas uma vez",
            "Você receberá os pagamentos 7 dias após o evento"
          ]
        },
        {
          title: "Tipos de Precificação",
          content: "Escolha a melhor estratégia de preços para maximizar suas vendas e receita.",
          steps: [
            "Ao criar evento, acesse a seção 'Ingressos'",
            "Escolha entre: Ingresso Único, Múltiplos Tipos ou Lotes Progressivos",
            "Para ingresso único: defina preço fixo",
            "Para múltiplos tipos: crie categorias (VIP, Pista, Camarote)",
            "Para lotes progressivos: configure preços crescentes por período",
            "Defina quantidade limitada ou ilimitada para cada tipo",
            "Configure descontos para grupos ou cupons promocionais"
          ],
          tips: [
            "Lotes progressivos incentivam compra antecipada",
            "Ofereça early bird para gerar buzz inicial",
            "Use tipos diferentes para segmentar público e maximizar receita"
          ]
        },
        {
          title: "Check-in com QR Code",
          content: "Valide ingressos no evento usando nosso sistema de QR Code seguro.",
          steps: [
            "No dia do evento, acesse 'Meus Eventos' > Seu evento",
            "Toque em 'Check-in' para abrir o scanner",
            "Permita acesso à câmera do celular",
            "Aponte para o QR Code no ingresso do participante",
            "Sistema validará automaticamente e mostrará dados do ingresso",
            "Confirme entrada (verde) ou negue se já foi usado (vermelho)",
            "Acompanhe total de check-ins em tempo real"
          ],
          tips: [
            "Cada QR Code só pode ser usado uma vez",
            "Tenha internet estável para validação em tempo real",
            "Designe equipe para pontos de entrada em eventos grandes"
          ]
        },
        {
          title: "Políticas de Reembolso",
          content: "Configure regras claras de cancelamento e reembolso para proteger você e seus participantes.",
          steps: [
            "Ao criar evento, vá em 'Configurações Avançadas'",
            "Selecione 'Política de Reembolso'",
            "Escolha entre: Sem reembolso, Parcial ou Total",
            "Defina prazo limite para solicitações (ex: até 7 dias antes)",
            "Configure taxa de administração (se aplicável)",
            "Escreva termos detalhados da política",
            "Publique para que fique visível na página do evento"
          ],
          tips: [
            "Seja transparente sobre a política antes da compra",
            "Políticas flexíveis aumentam confiança e vendas",
            "Eventos cancelados exigem reembolso total automático"
          ]
        }
      ]
    },
    "eventos-recorrentes": {
      icon: Repeat,
      title: "Eventos Recorrentes",
      description: "Crie séries de eventos que acontecem regularmente",
      color: "from-pink-500 to-purple-500",
      sections: [
        {
          title: "Configurar Recorrência",
          content: "Configure eventos que se repetem automaticamente em intervalos regulares.",
          steps: [
            "Ao criar evento, ative 'Evento Recorrente'",
            "Escolha frequência: Diária, Semanal, Quinzenal ou Mensal",
            "Defina dia(s) da semana (para eventos semanais)",
            "Configure horário de início e duração",
            "Defina data de término da série ou número de ocorrências",
            "Revise calendário de todas as datas geradas",
            "Publique a série completa de uma vez"
          ],
          tips: [
            "Perfeito para aulas, ensaios, happy hours semanais",
            "Participantes podem se inscrever em toda a série",
            "Economize tempo criando múltiplos eventos de uma vez"
          ]
        },
        {
          title: "Gerenciar Séries de Eventos",
          content: "Acompanhe e administre todas as ocorrências da sua série de eventos.",
          steps: [
            "Acesse 'Meus Eventos' > 'Séries'",
            "Veja lista de todas suas séries ativas",
            "Toque em uma série para ver calendário completo",
            "Acompanhe participantes em cada data",
            "Visualize receita total e por evento",
            "Pause ou encerre série a qualquer momento",
            "Exporte relatórios de toda a série"
          ],
          tips: [
            "Monitore taxa de presença em cada ocorrência",
            "Use analytics para identificar melhores datas",
            "Comunique mudanças para todos inscritos simultaneamente"
          ]
        },
        {
          title: "Editar Eventos Futuros",
          content: "Faça ajustes em eventos individuais ou em toda a série de uma vez.",
          steps: [
            "Selecione o evento recorrente que deseja editar",
            "Escolha: 'Editar apenas este' ou 'Editar todos futuros'",
            "Para edição individual: altere data, hora ou detalhes específicos",
            "Para edição em série: mudanças aplicam a todos eventos futuros",
            "Confirme alterações e revise impactos",
            "Sistema notifica participantes afetados automaticamente",
            "Eventos passados nunca são alterados"
          ],
          tips: [
            "Edite com antecedência para evitar confusão",
            "Eventos individuais editados se desvinculam da série",
            "Use mensagens para explicar mudanças importantes"
          ]
        },
        {
          title: "Casos de Uso",
          content: "Exemplos práticos de como usar eventos recorrentes de forma eficaz.",
          steps: [
            "Aulas e workshops: semanais com mesma turma",
            "Happy hours corporativos: toda sexta-feira",
            "Clubes de leitura: encontro mensal",
            "Treinos esportivos: rotina fixa de treinos",
            "Meetups temáticos: reuniões quinzenais",
            "Sessões de cinema: toda terça com desconto",
            "Feiras de artesanato: primeira semana do mês"
          ],
          tips: [
            "Crie senso de comunidade com eventos regulares",
            "Participantes regulares trazem previsibilidade de receita",
            "Divulgue série completa para compromisso de longo prazo"
          ]
        }
      ]
    },
    "sistema-boost": {
      icon: TrendingUp,
      title: "Sistema de Boost",
      description: "Promova seus eventos e alcance mais pessoas",
      color: "from-purple-500 to-orange-500",
      sections: [
        {
          title: "Como Funciona o Boost",
          content: "Entenda como impulsionar seus eventos para alcançar muito mais pessoas.",
          steps: [
            "Boost coloca seu evento em destaque no app",
            "Aparece no topo dos resultados de busca",
            "Recebe badge especial de 'Evento em Destaque'",
            "É incluído em notificações push para usuários relevantes",
            "Aparece em banners promocionais na página inicial",
            "Duração do boost varia conforme plano escolhido",
            "Relatórios mostram impacto do boost em visualizações e vendas"
          ],
          tips: [
            "Ideal para eventos importantes ou com baixa venda inicial",
            "Combine boost com marketing externo para maior impacto",
            "Use em datas estratégicas (início das vendas ou última semana)"
          ]
        },
        {
          title: "Planos Disponíveis (Prata, Ouro, Diamante)",
          content: "Escolha o plano de boost que melhor se adequa às suas necessidades e orçamento.",
          steps: [
            "Prata: 3 dias de destaque - R$ 29,90",
            "Ouro: 7 dias de destaque - R$ 69,90 (mais popular)",
            "Diamante: 14 dias de destaque - R$ 119,90 (melhor custo-benefício)",
            "Todos incluem: destaque na busca e notificações",
            "Ouro e Diamante: banner na home e email marketing",
            "Diamante: post nas redes sociais oficiais do OurMap",
            "Selecione plano ao publicar evento ou depois em 'Impulsionar'"
          ],
          tips: [
            "Plano Ouro oferece melhor equilíbrio custo-benefício",
            "Diamante ideal para eventos grandes ou com alto ticket",
            "Aguarde eventos Prata para ter base de comparação"
          ]
        },
        {
          title: "Usar Créditos de Referência",
          content: "Use os créditos ganhos indicando amigos para impulsionar seus eventos gratuitamente.",
          steps: [
            "Acesse 'Meu Perfil' > 'Programa de Referência'",
            "Veja saldo disponível de créditos",
            "Ao selecionar boost, escolha 'Pagar com Créditos'",
            "R$ 10 em créditos = 1 dia de boost",
            "Combine créditos com pagamento (se não tiver saldo total)",
            "Créditos são deduzidos automaticamente",
            "Histórico mostra todas transações de créditos"
          ],
          tips: [
            "Convide amigos antes de eventos para acumular créditos",
            "Não há validade para créditos acumulados",
            "Use créditos estrategicamente em eventos prioritários"
          ]
        },
        {
          title: "Melhores Práticas",
          content: "Maximize o retorno do investimento em boost com estas estratégias comprovadas.",
          steps: [
            "Agende boost para começar 1-2 semanas antes do evento",
            "Certifique-se que página do evento está completa e atraente",
            "Use fotos de alta qualidade e descrição convincente",
            "Configure preços competitivos antes de impulsionar",
            "Monitore analytics durante boost e ajuste estratégia",
            "Responda rapidamente perguntas durante período de boost",
            "Combine com posts em redes sociais próprias"
          ],
          tips: [
            "Eventos com avaliações positivas performam melhor no boost",
            "Atualize evento durante boost para aparecer como 'recente'",
            "Use insights do boost anterior para melhorar próximos eventos"
          ]
        }
      ]
    },
    "grupos-comunidades": {
      icon: Users,
      title: "Grupos e Comunidades",
      description: "Participe ou crie grupos temáticos",
      color: "from-orange-500 to-pink-500",
      sections: [
        {
          title: "Encontrar Grupos",
          content: "Descubra comunidades alinhadas com seus interesses e conecte-se com pessoas similares.",
          steps: [
            "Acesse a aba 'Grupos' no menu principal",
            "Use a busca para encontrar grupos por nome ou tema",
            "Filtre por categoria: Música, Esportes, Tecnologia, etc.",
            "Veja grupos 'Sugeridos' baseados em seus interesses",
            "Toque em um grupo para ver descrição e membros",
            "Verifique regras e tipo (Público, Privado ou Secreto)",
            "Toque em 'Participar' para grupos públicos ou 'Solicitar' para privados"
          ],
          tips: [
            "Grupos ativos têm discussões e eventos regulares",
            "Participe de múltiplos grupos para diversificar conexões",
            "Grupos verificados têm moderação ativa"
          ]
        },
        {
          title: "Participar de Discussões",
          content: "Engaje-se nas conversas, compartilhe ideias e construa relacionamentos.",
          steps: [
            "Entre no grupo e acesse a aba 'Feed'",
            "Leia as regras do grupo antes de postar",
            "Toque no campo de texto para criar nova publicação",
            "Adicione texto, fotos, links ou enquetes",
            "Use hashtags para facilitar busca de tópicos",
            "Comente em posts de outros membros",
            "Curta e reaja para mostrar apoio",
            "Denuncie conteúdo inadequado se necessário"
          ],
          tips: [
            "Seja respeitoso e siga as diretrizes da comunidade",
            "Contribua com valor antes de promover seus eventos",
            "Interações genuínas criam conexões mais fortes"
          ]
        },
        {
          title: "Criar Enquetes",
          content: "Engaje membros e tome decisões coletivas através de enquetes interativas.",
          steps: [
            "No grupo, toque em 'Nova Publicação'",
            "Selecione tipo 'Enquete'",
            "Escreva a pergunta clara e objetiva",
            "Adicione opções de resposta (mínimo 2, máximo 10)",
            "Configure duração da enquete (1 a 30 dias)",
            "Escolha se permite múltiplas respostas",
            "Defina se resultados são públicos ou privados",
            "Publique e acompanhe votação em tempo real"
          ],
          tips: [
            "Use enquetes para decidir data/local de próximo evento",
            "Perguntas simples têm maior taxa de participação",
            "Compartilhe resultados e insights com o grupo"
          ]
        },
        {
          title: "Gerenciar Seu Grupo",
          content: "Administre sua comunidade de forma eficiente e mantenha ambiente saudável.",
          steps: [
            "Como criador, acesse 'Configurações do Grupo'",
            "Defina descrição, regras e categorias",
            "Escolha tipo: Público (todos veem), Privado (por aprovação) ou Secreto",
            "Adicione moderadores para ajudar na gestão",
            "Aprove/rejeite solicitações de entrada (grupos privados)",
            "Remova membros ou conteúdo inapropriado",
            "Configure permissões: quem pode postar, criar eventos, etc.",
            "Acompanhe analytics: crescimento, engajamento, eventos"
          ],
          tips: [
            "Regras claras previnem conflitos e spam",
            "Moderadores ativos mantêm qualidade das discussões",
            "Promova eventos exclusivos para engajar membros",
            "Reconheça e destaque membros mais ativos"
          ]
        }
      ]
    },
    "notificacoes": {
      icon: Bell,
      title: "Notificações",
      description: "Configure como e quando receber notificações",
      color: "from-red-500 to-purple-500",
      sections: [
        {
          title: "Notificações Push",
          content: "Receba alertas instantâneos no seu dispositivo sobre eventos e atividades importantes.",
          steps: [
            "Acesse 'Configurações' > 'Notificações'",
            "Ative/desative notificações push gerais",
            "Configure notificações por categoria:",
            "- Eventos próximos (24h antes)",
            "- Novos eventos de organizadores favoritos",
            "- Amigos confirmaram presença em eventos",
            "- Mensagens diretas e menções",
            "- Atualizações de grupos que você participa",
            "- Lembretes de eventos que você confirmou",
            "Defina 'Não Perturbe' para horários específicos"
          ],
          tips: [
            "Ative apenas categorias relevantes para evitar sobrecarga",
            "Use 'Não Perturbe' durante trabalho ou sono",
            "Notificações críticas sempre serão entregues"
          ]
        },
        {
          title: "Notificações por Email",
          content: "Receba resumos e atualizações importantes diretamente na sua caixa de entrada.",
          steps: [
            "Em 'Configurações' > 'Notificações' > 'Email'",
            "Ative/desative notificações por email",
            "Configure frequência: Imediata, Diária ou Semanal",
            "Escolha tipos de notificações:",
            "- Resumo semanal de novos eventos",
            "- Confirmação de compra de ingressos",
            "- Lembretes de eventos (configurável)",
            "- Newsletter com destaques da plataforma",
            "- Atualizações de eventos salvos",
            "Gerencie preferências de marketing separadamente"
          ],
          tips: [
            "Resumos semanais reduzem volume de emails",
            "Mantenha notificações de compra sempre ativas",
            "Use filtros de email para organizar mensagens do OurMap"
          ]
        },
        {
          title: "Personalizar Preferências",
          content: "Ajuste finamente cada tipo de notificação para uma experiência personalizada.",
          steps: [
            "Vá em 'Configurações Avançadas de Notificações'",
            "Para cada categoria, defina: Push, Email, Ambos ou Nenhum",
            "Configure horário preferido para resumos",
            "Defina distância máxima para alertas de eventos próximos",
            "Escolha frequência de lembretes de eventos",
            "Ative alertas especiais para eventos limitados",
            "Configure notificações de amigos específicos",
            "Salve preferências personalizadas"
          ],
          tips: [
            "Revise e ajuste preferências mensalmente",
            "Teste configurações diferentes para encontrar equilíbrio ideal",
            "Priorize notificações que agregam valor real"
          ]
        },
        {
          title: "Gerenciar Centro de Notificações",
          content: "Acompanhe histórico e gerencie todas suas notificações em um só lugar.",
          steps: [
            "Acesse ícone de sino no topo do app",
            "Veja todas notificações recentes organizadas por data",
            "Filtre por tipo: Eventos, Sociais, Grupos, Sistema",
            "Marque como lida ou arquive notificações antigas",
            "Toque em notificação para ver detalhes completos",
            "Use busca para encontrar notificações específicas",
            "Configure para limpar automaticamente após 30 dias",
            "Ative badge numérico no ícone do app"
          ],
          tips: [
            "Limpe regularmente para manter organizado",
            "Notificações importantes ficam fixadas no topo",
            "Use filtros para encontrar rapidamente o que precisa",
            "Arquive em vez de deletar para manter histórico"
          ]
        }
      ]
    },
    "programa-referencia": {
      icon: MessageCircle,
      title: "Programa de Referência",
      description: "Ganhe créditos indicando amigos",
      color: "from-pink-500 to-orange-500",
      sections: [
        {
          title: "Como Funciona",
          content: "Entenda como ganhar créditos compartilhando OurMap com sua rede de contatos.",
          steps: [
            "Cada usuário tem um código de referência único",
            "Compartilhe seu código com amigos e familiares",
            "Quando alguém se cadastra usando seu código:",
            "- Você ganha R$ 10 em créditos",
            "- Seu amigo ganha R$ 5 de bônus de boas-vindas",
            "Créditos são adicionados após o amigo completar cadastro",
            "Use créditos para impulsionar eventos (R$ 10 = 1 dia de boost)",
            "Não há limite de quantas pessoas você pode indicar"
          ],
          tips: [
            "Quanto mais ativo seu amigo, mais você ganha indiretamente",
            "Indique pessoas que realmente vão usar a plataforma",
            "Créditos nunca expiram, acumule sem pressa"
          ]
        },
        {
          title: "Compartilhar Seu Link",
          content: "Divulgue seu código de referência de forma eficiente e alcance mais pessoas.",
          steps: [
            "Acesse 'Meu Perfil' > 'Programa de Referência'",
            "Copie seu link único de convite",
            "Compartilhe via:",
            "- WhatsApp, Telegram ou outras mensagens",
            "- Instagram, Facebook, Twitter Stories",
            "- Email para lista de contatos",
            "- QR Code para compartilhar pessoalmente",
            "Acompanhe quantas pessoas usaram seu link",
            "Veja histórico de créditos ganhos por indicação"
          ],
          tips: [
            "Adicione mensagem personalizada explicando benefícios",
            "Compartilhe quando houver eventos interessantes acontecendo",
            "Use QR Code em eventos presenciais que você organiza"
          ]
        },
        {
          title: "Usar Créditos em Boosts",
          content: "Transforme seus créditos de referência em visibilidade para seus eventos.",
          steps: [
            "Ao criar ou editar evento, vá em 'Impulsionar Evento'",
            "Selecione plano de boost desejado",
            "Na tela de pagamento, escolha 'Usar Créditos'",
            "Veja saldo disponível e quanto será usado",
            "Confirme uso dos créditos",
            "Boost é ativado imediatamente",
            "Saldo restante fica disponível para próximos usos",
            "Combine créditos com pagamento se necessário"
          ],
          tips: [
            "Acumule créditos antes de eventos importantes",
            "R$ 30 em créditos = 3 dias de boost grátis",
            "Planeje indicações estrategicamente para eventos futuros"
          ]
        },
        {
          title: "Estratégias para Ganhar Mais",
          content: "Maximize seus ganhos com técnicas comprovadas de compartilhamento.",
          steps: [
            "Identifique amigos que amam eventos e sair",
            "Explique benefícios específicos do OurMap para cada pessoa",
            "Compartilhe eventos específicos junto com seu link",
            "Crie posts explicando como a plataforma ajuda você",
            "Ofereça ajuda pessoal para amigos se cadastrarem",
            "Compartilhe regularmente (sem spam)",
            "Participe ativamente e mostre valor através do uso",
            "Agradeça quem usa seu código publicamente"
          ],
          tips: [
            "Autenticidade gera mais conversões que vendas forçadas",
            "Foque em qualidade das indicações, não quantidade",
            "Organize eventos e convide pessoas usando seu link",
            "Celebre marcos (10, 50, 100 indicações) para manter motivação"
          ]
        }
      ]
    }
  };

  const manual = manualId ? manuals[manualId] : null;

  if (!manual) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Manual não encontrado</h1>
          <Button onClick={() => navigate("/manuais")} data-testid="button-back-to-manuals">
            Voltar para Manuais
          </Button>
        </div>
      </div>
    );
  }

  const Icon = manual.icon;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate("/manuais")}
                data-testid="button-back"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
              <Logo showText={false} size="sm" />
            </div>
            <Button 
              variant="hero"
              onClick={() => window.open('https://app.ourmap.com.br', '_blank')}
              data-testid="button-open-app-header"
            >
              Abrir App
            </Button>
          </div>
        </div>
      </header>

      <section className="py-12 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${manual.color} flex items-center justify-center mx-auto shadow-lg`}>
              <Icon className="w-10 h-10 text-white" style={{ filter: 'drop-shadow(0 0 8px rgba(0,0,0,0.5))' }} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              {manual.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {manual.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {manual.sections.map((section, index) => (
              <Card key={index} className="border-border/50" data-testid={`section-${index}`}>
                <CardHeader>
                  <CardTitle className="text-2xl">{section.title}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {section.content}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {section.steps && (
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        Passo a Passo
                      </h4>
                      <ol className="space-y-3 ml-7">
                        {section.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="text-muted-foreground flex gap-3">
                            <span className="font-semibold text-primary min-w-6">{stepIndex + 1}.</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                  
                  {section.tips && (
                    <div className="space-y-3 bg-primary/5 p-6 rounded-lg border border-primary/20">
                      <h4 className="font-semibold text-foreground">💡 Dicas Importantes</h4>
                      <ul className="space-y-2">
                        {section.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl p-12 md:p-16 text-center overflow-hidden shadow-2xl" style={{background: 'var(--gradient-hero)'}}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

              <div className="relative z-10 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Pronto para Começar?
                </h2>
                <p className="text-lg text-white/90 max-w-2xl mx-auto">
                  Coloque em prática o que aprendeu e aproveite ao máximo todas as funcionalidades do OurMap
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button 
                    size="lg"
                    variant="secondary"
                    className="text-lg px-8 py-6 h-auto bg-white text-primary hover:bg-white/90"
                    onClick={() => window.open('https://app.ourmap.com.br', '_blank')}
                    data-testid="button-open-app-cta"
                  >
                    Abrir App
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6 h-auto border-white text-white hover:bg-white/20"
                    onClick={() => navigate("/manuais")}
                    data-testid="button-see-other-manuals"
                  >
                    Ver Outros Manuais
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

export default ManualDetailPage;
