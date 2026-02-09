import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Book, Users, Bell, CreditCard, TrendingUp, Repeat, CheckCircle2 } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { openAppStore } from "@/lib/openAppStore";

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
          title: "Introdução",
          content: "Uma solução completa para descobrir e participar de eventos, criar e gerenciar seus próprios eventos, conectar-se com pessoas com interesses semelhantes, interagir através de chat e grupos, e promover seus eventos com sistema de boost."
        },
        {
          title: "Criação de Conta",
          content: "Escolha entre diferentes métodos de autenticação para criar sua conta.",
          steps: [
            "Replit Auth: Login rápido e seguro, sem necessidade de senha adicional, sincronização automática com Replit",
            "Conta Local: Email + senha personalizados, verificação de email obrigatória, recuperação de senha disponível"
          ]
        },
        {
          title: "Personalização do Perfil",
          content: "Configure seu perfil com informações pessoais, galeria de fotos e redes sociais.",
          steps: [
            "Informações Básicas: Nome e Sobrenome, Foto de Perfil (JPG, PNG ou GIF até 5MB), Bio (até 160 caracteres), Localização (Cidade, estado e país)",
            "Galeria de Fotos: Adicione até 4 fotos ao seu perfil, mostre seus interesses e personalidade, configure visibilidade individual",
            "Redes Sociais: Conecte Instagram, Facebook, Twitter/X, LinkedIn, Website pessoal"
          ],
          tips: [
            "Configure visibilidade individual de cada elemento do perfil",
            "Use galeria para mostrar seus interesses"
          ]
        },
        {
          title: "Configurações de Privacidade",
          content: "Controle quem vê suas informações e quem pode interagir com você.",
          steps: [
            "Localização: Todos / Conexões / Seguidores / Ninguém",
            "Eventos Confirmados: Todos / Conexões / Seguidores / Ninguém",
            "Eventos Criados: Todos / Seguidores / Conexões",
            "Bio: Todos / Conexões / Seguidores / Ninguém",
            "Galeria de Fotos: Todos / Conexões / Seguidores / Ninguém",
            "Privacidade de Mensagens: Qualquer pessoa / Apenas quem você segue / Apenas conexões (amigos)"
          ]
        },
        {
          title: "Descobrir Eventos",
          content: "Encontre eventos próximos usando filtros, busca e visualização no mapa.",
          steps: [
            "Tela Inicial (Home): Eventos próximos baseados na sua localização, Filtros por categoria, data e preço, Busca por nome, local ou palavra-chave, Mapa com visualização geográfica",
            "Categorias: Música, Esportes, Arte & Cultura, Educação, Gastronomia, Meio Ambiente, Networking, Jogos & Tecnologia, Família, Festas & Social"
          ]
        },
        {
          title: "Participar de Eventos",
          content: "Confirme presença em eventos gratuitos ou compre ingressos para eventos pagos.",
          steps: [
            "Eventos Gratuitos: Clique no evento, leia os detalhes, clique em 'Confirmar Presença', pronto! Você receberá lembretes",
            "Eventos Pagos: Escolha o tipo de ingresso, quantidade (se aplicável), complete o pagamento via Stripe, receba ingresso com QR Code por email, apresente o QR Code no dia do evento",
            "Eventos com Vaquinha (Crowdfunding): Contribua com o valor que desejar, valor mínimo (se definido pelo organizador), acompanhe o progresso da meta, sua contribuição pode ser anônima ou pública",
            "Lista de Espera: Se o evento estiver lotado, entre na lista de espera, receba notificação se abrir vaga, aceite a vaga em até 24h"
          ]
        },
        {
          title: "Criar Eventos",
          content: "Organize seus próprios eventos com ferramentas completas de gestão.",
          steps: [
            "Informações Básicas: Título descritivo e atrativo, Descrição com detalhes do evento (markdown suportado), Data e Hora (início e fim), Local usando o mapa para precisão, Categoria e Subcategoria, Foto de Capa atrativa (mín. 1200x630px)",
            "Evento Gratuito: Sem custos para participantes, ideal para eventos comunitários, pode ter limite de vagas",
            "Evento Pago: Configure tipos de ingresso, Preços em BRL (Brasil) ou USD (internacional), Receba pagamentos via Stripe, Tipos: Lote único (preço fixo), Lotes progressivos (preços aumentam com tempo), Múltiplos tipos (VIP, Standard, Student, etc.)",
            "Vaquinha (Crowdfunding): Defina meta de arrecadação, valor mínimo por contribuição (opcional), acompanhe total arrecadado, transparência total para contribuidores",
            "Evento Privado: Apenas com link ou convite, link compartilhável único, controle total de participantes, perfeito para eventos corporativos/familiares",
            "Evento Recorrente: Diário, semanal, quinzenal ou mensal, configure intervalo personalizado, defina data de término, gestão unificada de todas ocorrências",
            "Limite de Participantes: Defina capacidade máxima, lista de espera automática, notificações de vagas disponíveis",
            "Convidados Especiais: Adicione palestrantes, DJs, instrutores - foto, nome, bio e função, ordem de exibição personalizada"
          ]
        },
        {
          title: "Gerenciar Eventos",
          content: "Administre seus eventos com painel completo do organizador.",
          steps: [
            "Participantes: Veja quem confirmou presença",
            "Check-in: Escaneie QR Codes (eventos pagos)",
            "Vendas: Acompanhe receita e ingressos vendidos",
            "Vaquinha: Veja contribuições e progresso",
            "Edição: Modifique detalhes (notifica participantes)",
            "Cancelamento: Reembolso automático + notificações",
            "Galeria de Fotos: Participantes podem adicionar fotos, galeria colaborativa do evento, moderação de fotos (opcional), compartilhamento em redes sociais",
            "Avaliações: Após o evento, participantes podem avaliar o evento (1-5 estrelas), avaliar o organizador (1-5 estrelas), deixar comentários"
          ]
        },
        {
          title: "Sistema de Amizades",
          content: "Conecte-se através de amizades, seguindo e seguidores.",
          steps: [
            "Tipos de Conexões: Amigos (vínculo mútuo), Seguindo (você acompanha alguém), Seguidores (pessoas que te acompanham)",
            "Fazer Amizades: Encontre usuários pela busca, em eventos que participou, ou sugestões baseadas em interesses, Envie solicitação de amizade, Aguarde aceitação, Conexão estabelecida!"
          ]
        },
        {
          title: "Chat Privado",
          content: "Mensagens em tempo real com histórico completo.",
          steps: [
            "Recursos: Mensagens em tempo real, Histórico completo, Notificações instantâneas, Marcação de leitura",
            "Configurações de Privacidade: Controle quem pode te enviar mensagens - Qualquer pessoa, Apenas quem você segue, Apenas amigos (conexões)"
          ]
        },
        {
          title: "Grupos Temáticos",
          content: "Comunidades organizadas por interesse ou localização.",
          steps: [
            "O que são Grupos: Grupos de interesse (Música, Arte, Esportes), Grupos por cidade/região, Grupos profissionais, Grupos de hobbies",
            "Participar de Grupos: Navegue por grupos, filtre por interesse ou cidade, clique em 'Entrar no Grupo', participe das discussões!",
            "Feed de Discussões: Crie posts, comente em discussões, curta contribuições, compartilhe eventos relacionados",
            "Enquetes: Vote em decisões do grupo, crie suas próprias enquetes, veja resultados em tempo real, opções múltiplas suportadas",
            "Eventos do Grupo: Eventos exclusivos para membros, notificações prioritárias, comunidade engajada"
          ]
        },
        {
          title: "Notificações",
          content: "Sistema completo de notificações push e por email.",
          steps: [
            "Notificações Push (Instantâneas): Novas solicitações de amizade, Novos eventos na sua área, Lembretes de eventos (1h antes e no horário), Confirmações de presença nos seus eventos, Novas mensagens, Avaliações recebidas, Atividade de grupos, Cancelamento de eventos",
            "Notificações por Email - Eventos Locais: Nunca, Imediatamente, Resumo Diário (1 email por dia), Resumo Semanal (1 email por semana)",
            "Outras Notificações por Email: Eventos de amigos, Atividade de amigos, Novas mensagens, Confirmações nos seus eventos, Cancelamentos de eventos",
            "Configurar: Vá para Configurações > Notificações, Ative/desative por tipo, Escolha frequência de emails, Salve alterações"
          ],
          tips: [
            "Deixe lembretes de eventos ativos para não perder nada"
          ]
        },
        {
          title: "Pagamentos",
          content: "Todos os pagamentos são processados pelo Stripe, líder mundial em segurança de pagamentos.",
          steps: [
            "Métodos Aceitos: Cartões de crédito (Visa, Mastercard, Amex, Elo), Cartões de débito, PIX (Brasil), Todos os dados criptografados",
            "Comprar Ingressos: Selecione tipo e quantidade de ingressos, Revise o carrinho, Clique em 'Pagar', Complete informações de pagamento, Confirmação instantânea, Receba ingresso por email com QR Code",
            "Vendedor de Ingressos - Configuração: Conecte conta Stripe (one-time), Configure tipos de ingressos, Defina preços (BRL ou USD automático), Ative vendas",
            "Recebimento: Pagamentos diretos na sua conta Stripe, Taxas Stripe padrão aplicadas, Relatórios detalhados, Reembolsos automáticos em cancelamentos",
            "Contribuir em Vaquinhas: Escolha valor da contribuição, Decida se quer aparecer publicamente, Complete pagamento, Acompanhe progresso da meta, Organizador recebe quando meta é atingida"
          ]
        },
        {
          title: "Sistema de Boost",
          content: "Sistema de promoção paga para destacar seu evento: Aparece primeiro nas buscas, Destaque na tela inicial, Maior visibilidade, Mais participantes.",
          steps: [
            "Plano Prata: R$ 29,90 / $9.90 - 20 'subidas' ao longo de 7 dias, Destaque moderado, Ideal para eventos locais",
            "Plano Ouro: R$ 69,90 / $19.90 - 50 'subidas' ao longo de 14 dias + 10 aparições no topo, Destaque forte, Ideal para eventos médios",
            "Plano Diamante: R$ 149,90 / $39.90 - 100 'subidas' ao longo de 30 dias + 30 aparições no topo, Máximo destaque, Ideal para grandes eventos",
            "Como Funciona: Compre o Plano (escolha e pague via Stripe), Distribuição Automática (sistema 'sobe' seu evento automaticamente ao longo do período), Maior Alcance (seu evento aparece para muito mais pessoas), Acompanhe (veja estatísticas de visualizações e confirmações)"
          ]
        },
        {
          title: "Privacidade e Segurança",
          content: "Seus dados estão protegidos e você tem controle total sobre sua privacidade.",
          steps: [
            "Seus Dados: Criptografia em todas comunicações, Senhas protegidas com hash bcrypt, Dados pessoais nunca compartilhados, Conformidade com LGPD/GDPR",
            "Controles de Privacidade: Configure individualmente - Visibilidade do perfil, Quem pode ver sua localização, Quem vê seus eventos, Quem pode te enviar mensagens, Visibilidade da galeria de fotos",
            "Moderação de Conteúdo: Sistema automático de detecção, Análise de eventos criados, Denúncias de usuários, Equipe de moderação humana, Ação rápida contra violações",
            "Reportar Evento: Spam, Informações falsas, Conteúdo impróprio, Fraude, Imagem inadequada",
            "Reportar Usuário: Assédio, Spam, Discurso de ódio, Falsificação de identidade, Conteúdo impróprio"
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
          title: "Introdução",
          content: "Monetize seus eventos com nosso sistema completo de venda de ingressos integrado ao Stripe. Este tutorial cobre tudo que você precisa saber para criar eventos pagos de sucesso."
        },
        {
          title: "Pré-requisitos",
          content: "O que você precisa antes de criar eventos pagos.",
          steps: [
            "Conta na plataforma (verificada)",
            "Conta Stripe Connect (configuração one-time)",
            "Documento de identidade (para verificação Stripe)",
            "Conta bancária (para receber pagamentos)"
          ]
        },
        {
          title: "Configurando Conta Stripe",
          content: "Configure sua conta de pagamentos pela primeira vez.",
          steps: [
            "Ao criar primeiro evento pago, você será direcionado para configuração",
            "Clique em 'Conectar com Stripe'",
            "Preencha informações: Nome completo, CPF/CNPJ, Endereço, Dados bancários",
            "Aguarde aprovação (geralmente 1-2 dias úteis)",
            "Stripe pode solicitar: Documento com foto, Comprovante de conta bancária, Comprovante de endereço (para CNPJ)"
          ],
          tips: [
            "Tenha documentos prontos para agilizar aprovação"
          ]
        },
        {
          title: "Tipos de Precificação",
          content: "Escolha a estratégia de preços ideal para seu evento.",
          steps: [
            "Preço Único: Todos ingressos pelo mesmo valor. Use para eventos simples, pequeno porte, primeira experiência com eventos pagos. Exemplo: Workshop de fotografia R$ 50,00, Show local R$ 30,00",
            "Múltiplos Tipos de Ingresso: Diferentes categorias com preços distintos. Use para eventos médios/grandes, diferentes experiências, maximizar receita. Exemplo: Pista R$ 80, Camarote R$ 150, VIP R$ 250",
            "Lotes Progressivos: Preço aumenta conforme vendas ou tempo. Use para incentivar compras antecipadas, eventos com longo prazo de venda. Exemplo: 1º Lote (100 ingressos) R$ 50, 2º Lote (150 ingressos) R$ 70, 3º Lote (100 ingressos) R$ 90"
          ]
        },
        {
          title: "Criando Evento Pago",
          content: "Passo a passo completo para configurar seu evento pago.",
          steps: [
            "Informações Básicas: Título atrativo, descrição completa, data e horário, local no mapa, categoria, foto de capa profissional",
            "Ativar Venda: Em 'Tipo de Preço', selecione 'Pago', escolha estratégia de precificação",
            "Configurar Ingressos: Preço Único (Nome, Preço, Quantidade), Múltiplos Tipos (cada tipo com preço, quantidade, descrição, benefícios), Lotes Progressivos (nome do lote, preço, quantidade, válido até)",
            "Política de Reembolso: Defina suas regras - Reembolso Total (até X dias antes), Reembolso Parcial (50% até X dias, depois não), Não Reembolsável (apenas em caso de cancelamento), ou Personalizada"
          ]
        },
        {
          title: "Taxas e Recebimento",
          content: "Entenda custos e como receber seus pagamentos.",
          steps: [
            "Taxa Stripe (você paga): Cartão de crédito 3,99% + R$ 0,40 por transação, PIX 0,99% por transação",
            "Nossa plataforma: 0% de taxa extra!",
            "Exemplo: Ingresso vendido R$ 100 - Taxa Stripe R$ 3,99 - Taxa fixa R$ 0,40 = Você recebe R$ 95,61",
            "Stripe transfere para sua conta bancária em 2-7 dias úteis após cada venda"
          ]
        },
        {
          title: "Check-in no Evento",
          content: "Sistema seguro de validação de ingressos.",
          steps: [
            "Preparação: No dia do evento, acesse painel, ative modo 'Check-in', use câmera para escanear QR Codes",
            "Processo: Participante mostra QR Code (email ou celular), você escaneia com app, sistema valida - ingresso válido (entrada liberada), já usado (alerta de duplicata), inválido (ingresso falso/cancelado)",
            "Controles: Veja total de check-ins, lista de quem já entrou, lista de ausentes, busca manual por nome (se necessário)"
          ]
        },
        {
          title: "Cancelamentos e Reembolsos",
          content: "Como funciona o processo de reembolso.",
          steps: [
            "Se você cancelar o evento: Todos ingressos são reembolsados automaticamente, emails enviados para todos compradores, push notifications enviadas, Stripe processa reembolsos (2-10 dias úteis)",
            "Se comprador solicitar reembolso: Pedido aparece no painel, você aprova ou nega (baseado em sua política), se aprovado, Stripe processa, você arca com taxa Stripe (não retornável)"
          ]
        },
        {
          title: "Estratégias de Precificação",
          content: "Maximize vendas com precificação inteligente.",
          steps: [
            "Pesquisa de Mercado: Busque eventos similares na plataforma, note faixa de preço, veja taxa de lotação, considere seu público (estudantes, profissionais, famílias)",
            "Calcule Custos: Some local, som/luz, segurança, divulgação. Divida por pessoas esperadas + margem desejada",
            "Psicologia de Preços: R$ 49,90 > R$ 50,00, R$ 99,00 > R$ 100,00, R$ 197,00 > R$ 200,00",
            "Ancoragem: Mostre 'De: R$ 120' junto com 'Por: R$ 80' (Economia: R$ 40 - 33% OFF)",
            "Escassez: 'Últimas 10 vagas do 1º lote!', 'Apenas 5 ingressos VIP restantes', 'Promoção termina em 48h'"
          ]
        },
        {
          title: "Maximizando Vendas",
          content: "Landing page perfeita e divulgação estratégica.",
          steps: [
            "Landing Page: Foto de capa HD e atrativa, título claro, data/hora/local em destaque, descrição completa com programação, palestrantes/atrações com fotos, FAQ, CTA claro 'Garanta seu Ingresso'",
            "Fase 1 - Lançamento (30 dias antes): Anúncio em redes sociais, email para sua base, grupos relevantes, parceiros e influencers, early bird incentiva urgência",
            "Fase 2 - Aquecimento (15 dias antes): Posts regulares com contagem regressiva, stories mostrando preparativos, teasers de atrações, depoimentos de quem já comprou",
            "Fase 3 - Última Chance (7 dias antes): Intensificar comunicação, destacar escassez ('70% vendido!'), último lote/preço final, FOMO",
            "Fase 4 - Dia do Evento: Stories ao vivo, cobertura em tempo real, incentivar compartilhamento"
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
          title: "O que são Eventos Recorrentes?",
          content: "Eventos que acontecem regularmente em um padrão previsível.",
          steps: [
            "Semanais: Toda segunda-feira, por exemplo",
            "Quinzenais: A cada 2 semanas",
            "Mensais: Primeira sexta do mês",
            "Personalizados: A cada 3 dias, etc."
          ]
        },
        {
          title: "Quando Usar?",
          content: "Use para atividades regulares, séries de workshops e eventos sociais.",
          steps: [
            "✅ Use Para: Atividades regulares (aulas de yoga toda terça e quinta 19h, clube do livro última sexta do mês, corrida de rua todos os sábados 7h, meetup de desenvolvedores primeira quarta do mês), Séries de workshops (curso de fotografia 4 encontros semanais, workshop de empreendedorismo 6 sábados consecutivos), Eventos sociais (happy hour semanal, noite de jogos quinzenal, jam session mensal)",
            "❌ Não Use Para: Eventos únicos ou esporádicos, conferências anuais (use evento único), eventos sem padrão claro, situações que exigem flexibilidade total"
          ]
        },
        {
          title: "Configurar Recorrência",
          content: "Passo a passo para criar evento recorrente.",
          steps: [
            "Informações Básicas: Título (indique a recorrência, ex: 'Yoga ao Ar Livre - Todas as Terças'), descrição, local, categoria, foto de capa",
            "Ativar Recorrência: Marque 'Este é um evento recorrente', escolha padrão de recorrência",
            "Opções: Diário (repete diariamente, intervalo a cada X dias), Semanal (semanalmente, selecione dias da semana, intervalo a cada X semanas), Mensal (no dia X do mês ou na Xª semana dia Y, intervalo a cada X meses), Personalizado (totalmente flexível)",
            "Data de Término: Data Específica (primeira ocorrência + repete até data final = ~9 ocorrências), Número de Ocorrências (total de eventos, sistema calcula data final automaticamente), Sem Término (continua indefinidamente, você pode cancelar/editar depois)",
            "Revisão: Sistema mostra preview com todas próximas ocorrências antes de publicar"
          ],
          tips: [
            "Use data específica ou número de ocorrências para melhor planejamento",
            "No título, indique recorrência para clareza"
          ]
        },
        {
          title: "Gerenciar Série",
          content: "Administre todas ocorrências de forma unificada ou individual.",
          steps: [
            "Visão Unificada: Total de participantes únicos, taxa de presença média, receita total (se pago)",
            "Editar Todos os Eventos: Vá para qualquer evento da série, clique em 'Editar Série', faça alterações (descrição, local, horário, preço), sistema pergunta 'Aplicar a todos eventos futuros?', confirme",
            "Editar Apenas Um Evento: Acesse evento específico, clique em 'Editar Este Evento', alterações afetam apenas esta ocorrência. Útil para mudança de local pontual, cancelamento de data específica, convidado especial em uma sessão",
            "Cancelar Evento Único: Cancela apenas 1 ocorrência, demais eventos continuam normais, participantes daquela data são notificados e reembolsados",
            "Cancelar Série Completa: Cancela todos eventos futuros, eventos passados permanecem no histórico, reembolso automático para todos, notificações enviadas",
            "Estender Série: Série terminou mas quer continuar? Acesse série, clique em 'Estender Série', defina quantas ocorrências a mais ou nova data de término, sistema cria novos eventos automaticamente"
          ]
        },
        {
          title: "Precificação de Séries",
          content: "Modelos de cobrança para eventos recorrentes.",
          steps: [
            "Ingresso Individual: Cada aula/evento pago separadamente (ex: Cada aula R$ 30, total 10 aulas R$ 300)",
            "Pacote Completo: Preço único dá acesso a todas ocorrências com desconto (ex: Pacote 10 aulas R$ 250, economia de R$ 50)",
            "Pacote + Individual: Ofereça ambas opções para flexibilidade (ex: Pacote R$ 250 ou Individual R$ 30 por aula)",
            "Check-in: Cada evento tem check-in separado, QR Code único por ocorrência, participante mostra QR da data específica, sistema rastreia presença por evento"
          ],
          tips: [
            "Pacote com desconto incentiva comprometimento",
            "Ofereça flexibilidade para atrair mais participantes"
          ]
        },
        {
          title: "Notificações e Lembretes",
          content: "Sistema automático de lembretes para cada ocorrência.",
          steps: [
            "Lembretes Automáticos: Email 24h antes, Push 1h antes, para CADA ocorrência que confirmaram presença",
            "Notificações de Mudanças: Se você editar série, todos participantes são notificados, email + push explicando mudança, link para nova informação. Exemplo: 'O organizador alterou informações do evento: Novo horário 18:30 (era 19:00), Aplicado a todos eventos a partir de 25/11'"
          ]
        },
        {
          title: "Estratégias de Sucesso",
          content: "Construa comunidade e maximize comprometimento.",
          steps: [
            "Construa Comunidade: Eventos recorrentes criam vínculo, mesmas pessoas se encontram regularmente, amizades se formam, comprometimento aumenta. Dicas: Crie grupo na plataforma para os participantes, incentive interação entre eventos, reconheça participantes assíduos, peça feedback regularmente",
            "Precificação Inteligente: Para maximizar receita (Aula avulsa R$ 40, Pacote 4 aulas R$ 140 = R$ 35/aula, Pacote mensal 8 aulas R$ 240 = R$ 30/aula). Para maximizar comprometimento: Apenas pacotes disponíveis, cria senso de compromisso, reduz ausências",
            "Gerencie Capacidade: Defina limite por ocorrência, liste espera por evento específico, promova datas com baixa procura",
            "Marketing da Série: Destaque benefícios ('Aprenda ao longo de 8 semanas', 'Faça parte de uma comunidade', 'Evolução gradual garantida'), Use scarcity ('Apenas 20 vagas para série completa', 'Últimas 5 vagas do pacote'), Social proof ('120 pessoas já participaram da série anterior', '4.8⭐ de avaliação média')"
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
          title: "O que é Boost?",
          content: "O Boost é uma ferramenta de promoção paga para destacar eventos. Quando ativado, o evento:",
          steps: [
            "📊 Aparece nas primeiras posições das buscas",
            "🔝 Fica destacado na tela inicial",
            "📍 Ganha visibilidade em buscas por localização",
            "🎯 Alcança usuários com interesses relacionados"
          ]
        },
        {
          title: "Planos Disponíveis",
          content: "Escolha o plano ideal conforme tamanho e alcance do evento.",
          steps: [
            "🥈 Prata: R$ 7,90 / $2.90 - 7 dias, 3 subidas. Perfeito para testar! Destaque visual simples",
            "🥇 Ouro: R$ 14,90 / $4.90 - 15 dias, 7 subidas. O mais popular! Maior destaque, aparece nas recomendações",
            "💎 Diamante: R$ 29,90 / $9.90 - 30 dias, 15 subidas. Destaque máximo, topo das buscas, notificações para usuários"
          ]
        },
        {
          title: "Como Funciona",
          content: "Entenda como o sistema opera para maximizar seus resultados.",
          steps: [
            "Distribuição Inteligente: O sistema distribui as 'subidas' automaticamente ao longo do período do plano",
            "Compra via Stripe: O pagamento é processado pelo Stripe",
            "Uso de Créditos: É possível pagar usando créditos do programa de referência",
            "Primeiro Boost Grátis: O primeiro evento do usuário pode ser impulsionado gratuitamente com o plano Prata",
            "Upgrade: É possível fazer upgrade para planos superiores durante a vigência de um boost ativo",
            "Cupons de Desconto: O sistema aceita cupons que podem ser aplicados na compra"
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
          title: "O que são Grupos?",
          content: "Comunidades organizadas por interesse ou localização.",
          steps: [
            "Grupos de interesse: Música, Arte, Esportes, Profissionais, Hobbies, Gastronomia",
            "Grupos por cidade/região: Organizados por localização",
            "Grupos profissionais: Networking e desenvolvimento de carreira",
            "Grupos de hobbies: Compartilhe paixões com pessoas similares"
          ]
        },
        {
          title: "Participar de Grupos",
          content: "Descubra e entre em grupos alinhados com seus interesses.",
          steps: [
            "Navegue por grupos na plataforma",
            "Filtre por interesse ou cidade",
            "Use busca por nome ou palavras-chave",
            "Veja detalhes: descrição, membros, atividade, eventos",
            "Clique 'Entrar no Grupo' e participe das discussões"
          ]
        },
        {
          title: "Feed de Discussões",
          content: "Engaje-se nas conversas da comunidade.",
          steps: [
            "Crie posts com texto, fotos ou links",
            "Comente em discussões de outros membros",
            "Curta contribuições",
            "Compartilhe eventos relacionados ao grupo"
          ],
          tips: [
            "Leia regras do grupo antes de postar",
            "Seja respeitoso e siga diretrizes da comunidade"
          ]
        },
        {
          title: "Enquetes",
          content: "Participe de decisões coletivas através de enquetes.",
          steps: [
            "Vote em decisões do grupo",
            "Crie suas próprias enquetes",
            "Veja resultados em tempo real",
            "Opções múltiplas suportadas"
          ]
        },
        {
          title: "Eventos do Grupo",
          content: "Participe de eventos exclusivos para membros.",
          steps: [
            "Eventos exclusivos para membros do grupo",
            "Notificações prioritárias sobre novos eventos",
            "Comunidade engajada com interesses similares"
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
          title: "Tipos de Notificações",
          content: "Push (instantâneas) e Email (periódicas ou transacionais).",
          steps: [
            "Notificações Push: Novas solicitações de amizade, Novos eventos na sua área, Lembretes de eventos (1h antes e no horário), Confirmações de presença nos seus eventos, Novas mensagens, Avaliações recebidas, Atividade de grupos, Cancelamento de eventos",
            "Notificações por Email - Eventos Locais: Nunca, Imediatamente, Resumo Diário (1 email por dia às 7h), Resumo Semanal (1 email por semana às 9h segunda-feira)",
            "Outras Notificações: Eventos de amigos, Atividade de amigos, Novas mensagens, Confirmações nos seus eventos, Cancelamentos de eventos"
          ]
        },
        {
          title: "Configurar Notificações",
          content: "Personalize suas preferências de notificação.",
          steps: [
            "Vá para Configurações",
            "Selecione Notificações",
            "Ative/desative por tipo",
            "Escolha frequência de emails",
            "Salve alterações"
          ],
          tips: [
            "Deixe lembretes de eventos ativos para não perder nada",
            "Configure frequência de emails para evitar sobrecarga"
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
      <Navbar />

      <section className="py-12 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/manuais")}
            data-testid="button-back"
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Manuais
          </Button>
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
            <div className="relative rounded-3xl p-12 md:p-16 text-center overflow-hidden shadow-2xl" style={{ background: 'var(--gradient-hero)' }}>
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
                    onClick={() => openAppStore()}
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
