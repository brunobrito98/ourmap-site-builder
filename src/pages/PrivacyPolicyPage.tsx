import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Content */}
      <main className="container mx-auto px-4 pt-24 py-12 max-w-4xl">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">Política de Privacidade - OurMap</h1>
            <p className="text-muted-foreground">Última atualização: 09/02/2026</p>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">1. Introdução</h2>
              <p className="text-muted-foreground leading-relaxed">
                A sua privacidade é importante para nós. Esta Política de Privacidade explica como Bruno de Brito Bispo ("nós", "nosso") coleta, usa, compartilha e protege suas informações ao utilizar a plataforma OurMap ("Plataforma", "Serviço").
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ao usar o OurMap, você concorda com os termos desta Política de Privacidade e com o tratamento de seus dados conforme descrito aqui.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">2. Controlador de Dados</h2>
              <div className="text-muted-foreground leading-relaxed">
                <p><strong>Controlador:</strong> Bruno de Brito Bispo</p>
                <p><strong>Email de contato/DPO:</strong> suporte@ourmap.com.br</p>
                <p><strong>Endereço:</strong> Rua Manoel Franco, 1682. Ji-Paraná, RO</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">3. Informações que Coletamos</h2>

              <h3 className="text-xl font-medium text-foreground">3.1 Informações Fornecidas Diretamente</h3>
              <p className="text-muted-foreground">Você fornece informações ao:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Criar Conta:</strong> Nome completo, email, nome de usuário, senha (criptografada), número de telefone (opcional)</li>
                <li><strong>Perfil de Usuário:</strong> Foto de perfil, banner, biografia, links de redes sociais, cidade, estado, país</li>
                <li><strong>Criar Eventos:</strong> Título, descrição, categoria, local, data/hora, imagens, tipo (gratuito/pago/privado), configurações de recorrência</li>
                <li><strong>Configurar Ingressos:</strong> Tipos, preços, quantidades, datas de venda</li>
                <li><strong>Conta Stripe Connect:</strong> Dados bancários, documentos de identificação (processados pelo Stripe)</li>
                <li><strong>Pagamentos:</strong> Informações de cartão de crédito (processadas diretamente pelo Stripe, não armazenamos)</li>
                <li><strong>Comunicações:</strong> Mensagens de chat, postagens em grupos, comentários, avaliações</li>
                <li><strong>Conteúdo de Mídia:</strong> Fotos de eventos, imagens de perfil, banners</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mt-6">3.2 Informações de Localização</h3>
              <p className="text-muted-foreground">O OurMap utiliza dados de localização para funcionalidades essenciais:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Geolocalização GPS:</strong> Com sua permissão, coletamos localização precisa para exibir eventos próximos</li>
                <li><strong>Endereço Salvo:</strong> Cidade, estado e país salvos no perfil</li>
                <li><strong>Mapbox Geocoding:</strong> Utilizamos Mapbox para converter endereços em coordenadas e vice-versa</li>
                <li><strong>IP Geolocation:</strong> País e cidade aproximados baseados em endereço IP</li>
              </ul>
              <p className="text-muted-foreground mt-2">Você pode desativar acesso à localização GPS a qualquer momento nas configurações do dispositivo, mas isso limitará funcionalidades de descoberta de eventos próximos.</p>

              <h3 className="text-xl font-medium text-foreground mt-6">3.3 Informações Coletadas Automaticamente</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Dados de Uso:</strong> Eventos visualizados, pesquisas realizadas, cliques, tempo de navegação, recursos acessados</li>
                <li><strong>Dados do Dispositivo:</strong> Modelo, sistema operacional, versão do app, idioma, fuso horário, resolução de tela</li>
                <li><strong>Identificadores:</strong> ID de dispositivo, ID de sessão, endereço IP</li>
                <li><strong>Logs do Sistema:</strong> Registros de erros, crashes e atividades do servidor</li>
                <li><strong>Cookies e Tecnologias Similares:</strong> Cookies de sessão, localStorage, sessionStorage</li>
                <li><strong>WebSocket Connections:</strong> Dados de conexão para chat em tempo real</li>
                <li><strong>Tokens FCM:</strong> Token do Firebase Cloud Messaging para notificações push</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mt-6">3.4 Informações de Terceiros</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Contatos (opcional):</strong> Para encontrar amigos que usam o app</li>
                <li><strong>Redes Sociais:</strong> Se você conectar perfis sociais, coletamos informações públicas</li>
                <li><strong>Stripe:</strong> Informações de transações processadas</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mt-6">3.5 Dados Sensíveis</h3>
              <p className="text-muted-foreground">Não coletamos intencionalmente:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Dados de menores de 13 anos</li>
                <li>Informações sensíveis (raça, religião, orientação sexual) exceto quando fornecidas voluntariamente em perfil ou eventos</li>
                <li>Dados de saúde ou biométricos</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">4. Como Usamos suas Informações</h2>
              <p className="text-muted-foreground">Utilizamos suas informações para:</p>

              <h3 className="text-xl font-medium text-foreground">4.1 Prestação de Serviços</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Criar e gerenciar sua conta</li>
                <li>Processar criação, edição e exclusão de eventos</li>
                <li>Facilitar venda e compra de ingressos</li>
                <li>Processar pagamentos via Stripe</li>
                <li>Gerar e validar QR codes de ingressos</li>
                <li>Exibir eventos próximos baseados em localização</li>
                <li>Habilitar chat em tempo real entre amigos</li>
                <li>Gerenciar grupos e comunidades</li>
                <li>Processar avaliações e comentários</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mt-6">4.2 Comunicação e Notificações</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Enviar notificações push sobre eventos, mensagens e atualizações</li>
                <li>Enviar emails transacionais (confirmação de compra, lembretes de eventos)</li>
                <li>Enviar digests diários ou semanais de atividades (se habilitado)</li>
                <li>Notificar sobre novos eventos de organizadores seguidos</li>
                <li>Solicitar avaliações após participação em eventos</li>
                <li>Comunicar atualizações de serviço e alterações de termos</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mt-6">4.3 Personalização e Recomendações</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Recomendar eventos baseados em interesses e localização</li>
                <li>Sugerir usuários para conectar</li>
                <li>Personalizar conteúdo e interface</li>
                <li>Adaptar idioma e moeda conforme localização</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mt-6">4.4 Segurança e Moderação</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Detectar e prevenir fraudes</li>
                <li>Moderar conteúdo automaticamente (filtros de palavras, URLs)</li>
                <li>Calcular pontuação de risco de eventos</li>
                <li>Calcular pontuação de confiança de usuários</li>
                <li>Investigar violações de termos</li>
                <li>Garantir segurança da plataforma</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mt-6">4.5 Melhorias e Análises</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Analisar uso da plataforma</li>
                <li>Identificar tendências e padrões</li>
                <li>Melhorar funcionalidades existentes</li>
                <li>Desenvolver novos recursos</li>
                <li>Realizar testes A/B</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mt-6">4.6 Conformidade Legal</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Cumprir obrigações legais e regulatórias</li>
                <li>Responder a solicitações de autoridades</li>
                <li>Aplicar termos de uso</li>
                <li>Proteger direitos e propriedade</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">5. Compartilhamento de Informações</h2>
              <p className="text-muted-foreground">Não vendemos nem alugamos suas informações pessoais. Compartilhamos informações nas seguintes situações:</p>

              <h3 className="text-xl font-medium text-foreground mt-6">5.1 Com Outros Usuários</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Perfil Público:</strong> Nome, username, foto, biografia, eventos criados</li>
                <li><strong>Eventos:</strong> Participação em eventos públicos é visível</li>
                <li><strong>Grupos Públicos:</strong> Postagens e comentários visíveis para todos os membros</li>
                <li><strong>Avaliações:</strong> Avaliações de eventos são públicas</li>
                <li><strong>Seguidores:</strong> Lista de seguidores visível para organizadores</li>
                <li><strong>Amigos:</strong> Conforme configurações de privacidade</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mt-6">5.2 Com Prestadores de Serviço e Parceiros</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Supabase:</strong> Banco de dados PostgreSQL e armazenamento de arquivos (imagens de eventos, fotos de perfil). Servidores podem estar fora do Brasil.</li>
                <li><strong>Stripe:</strong> Processamento de pagamentos, dados de cartão de crédito (PCI DSS Level 1). Para organizadores: dados bancários e documentos via Stripe Connect.</li>
                <li><strong>Mapbox:</strong> Mapas interativos, geocodificação, reverse geocoding, sugestões de endereço. Localização compartilhada para funcionalidade.</li>
                <li><strong>SendGrid:</strong> Envio de emails transacionais, lembretes, digests e notificações.</li>
                <li><strong>Firebase (Google):</strong> Push notifications via Firebase Cloud Messaging, tokens FCM.</li>
                <li><strong>Twilio:</strong> Envio de SMS e verificação de telefone (quando aplicável).</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mt-6">5.3 Por Exigências Legais</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Quando requerido por lei, decisão judicial ou solicitação governamental</li>
                <li>Para proteger direitos, propriedade ou segurança do OurMap, usuários ou público</li>
                <li>Em investigações de fraude ou violações de segurança</li>
                <li>Para aplicar termos de uso e políticas</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mt-6">5.4 Transferências Corporativas</h3>
              <p className="text-muted-foreground leading-relaxed">Em caso de fusão, aquisição, venda de ativos ou reorganização, suas informações podem ser transferidas como parte da transação. Notificaremos sobre mudanças no controle de dados.</p>

              <h3 className="text-xl font-medium text-foreground mt-6">5.5 Com Seu Consentimento</h3>
              <p className="text-muted-foreground leading-relaxed">Compartilhamos informações para outros propósitos mediante seu consentimento explícito.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">6. Armazenamento e Transferência Internacional</h2>
              <p className="text-muted-foreground leading-relaxed">
                Seus dados são armazenados em servidores da Supabase e parceiros internacionais (Firebase, Mapbox, Stripe), que podem estar localizados fora do Brasil, incluindo Estados Unidos e União Europeia.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Garantimos que todos os provedores seguem medidas adequadas de segurança e proteção compatíveis com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018) e regulamentos internacionais como GDPR quando aplicável.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ao usar nosso serviço, você consente com a transferência internacional de seus dados conforme descrito.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">7. Retenção de Dados</h2>
              <p className="text-muted-foreground">Mantemos seus dados pelo tempo necessário para fornecer os serviços e cumprir obrigações legais:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Dados de Conta:</strong> Enquanto conta estiver ativa</li>
                <li><strong>Dados de Eventos:</strong> Por até 2 anos após conclusão do evento</li>
                <li><strong>Transações Financeiras:</strong> Por 5 anos conforme legislação fiscal</li>
                <li><strong>Mensagens de Chat:</strong> Até exclusão de conta ou solicitação de remoção</li>
                <li><strong>Logs do Sistema:</strong> Por até 90 dias</li>
                <li><strong>Cookies:</strong> Conforme configurações do navegador</li>
              </ul>
              <p className="text-muted-foreground mt-2">
                Após exclusão da conta, dados pessoais são apagados ou anonimizados dentro de um prazo razoável (até 30 dias), salvo quando houver obrigação legal de retenção.
              </p>
              <p className="text-muted-foreground mt-2">
                Eventos criados podem ser mantidos de forma anonimizada se tiverem participantes confirmados, para preservar histórico de ingressos e transações.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">8. Segurança dos Dados</h2>
              <p className="text-muted-foreground">Implementamos medidas técnicas e organizacionais para proteger suas informações:</p>

              <h3 className="text-xl font-medium text-foreground">8.1 Medidas Técnicas</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Criptografia:</strong> HTTPS/TLS para transmissão de dados</li>
                <li><strong>Senhas:</strong> Hash com algoritmo scrypt e salt único</li>
                <li><strong>Sessões:</strong> Cookies assinados com secret key</li>
                <li><strong>Banco de Dados:</strong> Acesso restrito com credenciais seguras</li>
                <li><strong>Tokens:</strong> JWT para autenticação de API</li>
                <li><strong>Pagamentos:</strong> PCI DSS compliance via Stripe</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mt-6">8.2 Medidas Organizacionais</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Acesso a dados pessoais limitado a funcionários autorizados</li>
                <li>Treinamento em privacidade e segurança</li>
                <li>Auditorias regulares de segurança</li>
                <li>Política de resposta a incidentes</li>
                <li>Contratos de processamento de dados com parceiros</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mt-6">8.3 Limitações</h3>
              <p className="text-muted-foreground leading-relaxed">
                Embora sigamos boas práticas de segurança, nenhum sistema é 100% livre de riscos. Não podemos garantir segurança absoluta. Você é responsável por manter senha confidencial e reportar atividades suspeitas.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Em caso de incidente de segurança que afete dados pessoais, notificaremos usuários afetados e autoridade nacional de proteção de dados (ANPD) conforme exigido pela LGPD.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">9. Seus Direitos (LGPD)</h2>
              <p className="text-muted-foreground">Conforme a Lei Geral de Proteção de Dados (LGPD), você tem os seguintes direitos:</p>

              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="bg-card p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2">9.1 Direito de Acesso</h4>
                  <ul className="list-disc pl-4 text-sm text-muted-foreground space-y-1">
                    <li>Confirmar existência de tratamento de dados</li>
                    <li>Solicitar cópia de seus dados pessoais</li>
                    <li>Obter informações sobre uso e compartilhamento</li>
                  </ul>
                </div>

                <div className="bg-card p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2">9.2 Direito de Correção</h4>
                  <ul className="list-disc pl-4 text-sm text-muted-foreground space-y-1">
                    <li>Atualizar dados incompletos, inexatos ou desatualizados</li>
                    <li>Editar perfil diretamente nas Configurações</li>
                  </ul>
                </div>

                <div className="bg-card p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2">9.3 Direito de Exclusão</h4>
                  <ul className="list-disc pl-4 text-sm text-muted-foreground space-y-1">
                    <li>Solicitar exclusão de dados pessoais</li>
                    <li>Excluir conta diretamente nas Configurações</li>
                    <li>Dados são apagados ou anonimizados em até 30 dias</li>
                  </ul>
                </div>

                <div className="bg-card p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2">9.4 Direito de Portabilidade</h4>
                  <ul className="list-disc pl-4 text-sm text-muted-foreground space-y-1">
                    <li>Receber dados em formato estruturado e legível</li>
                    <li>Transferir dados para outro serviço ou fornecedor</li>
                  </ul>
                </div>

                <div className="bg-card p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2">9.5 Direito de Oposição</h4>
                  <ul className="list-disc pl-4 text-sm text-muted-foreground space-y-1">
                    <li>Opor-se ao tratamento de dados em situações específicas</li>
                    <li>Revogar consentimento a qualquer momento</li>
                    <li>Desativar notificações e comunicações</li>
                  </ul>
                </div>

                <div className="bg-card p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2">9.6 Outros Direitos</h4>
                  <ul className="list-disc pl-4 text-sm text-muted-foreground space-y-1">
                    <li>Anonimização, bloqueio ou eliminação de dados desnecessários</li>
                    <li>Informação sobre compartilhamento de dados</li>
                    <li>Informação sobre possibilidade de não fornecer consentimento</li>
                    <li>Revisão de decisões automatizadas</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-medium text-foreground mt-8">9.7 Como Exercer seus Direitos</h3>
              <p className="text-muted-foreground">Para exercer qualquer destes direitos, entre em contato:</p>
              <div className="mt-2 text-muted-foreground">
                <p><strong>Email:</strong> suporte@ourmap.com.br</p>
                <p><strong>Central de Ajuda:</strong> Acesse dentro do aplicativo</p>
              </div>
              <p className="text-muted-foreground mt-2">
                Responderemos sua solicitação em até 15 dias. Podemos solicitar informações adicionais para verificar sua identidade antes de processar a solicitação.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">10. Cookies e Tecnologias Similares</h2>

              <h3 className="text-xl font-medium text-foreground">10.1 Tipos de Cookies Utilizados</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Cookies Essenciais:</strong> Necessários para autenticação e funcionamento do serviço (cookies de sessão)</li>
                <li><strong>Cookies de Preferências:</strong> Armazenam idioma, tema e configurações</li>
                <li><strong>Cookies de Análise:</strong> Medem uso e desempenho da plataforma</li>
                <li><strong>LocalStorage/SessionStorage:</strong> Armazenamento local de dados temporários</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mt-6">10.2 Controle de Cookies</h3>
              <p className="text-muted-foreground">
                Você pode controlar cookies através das configurações do navegador. Note que desabilitar cookies essenciais pode impedir uso de algumas funcionalidades.
              </p>

              <h3 className="text-xl font-medium text-foreground mt-6">10.3 Outras Tecnologias</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>WebSockets:</strong> Conexões persistentes para chat em tempo real</li>
                <li><strong>Service Workers:</strong> Para notificações push e funcionalidade offline</li>
                <li><strong>Web APIs:</strong> Geolocation API, Notification API, etc.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">11. Privacidade de Crianças</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nosso serviço não é destinado a menores de 13 anos. Não coletamos intencionalmente informações pessoais de crianças.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Se você é pai/mãe ou responsável e acredita que seu filho forneceu informações pessoais, entre em contato imediatamente em suporte@ourmap.com.br. Tomaremos medidas para excluir tais informações.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">12. Configurações de Privacidade</h2>
              <p className="text-muted-foreground">Você pode controlar visibilidade de suas informações nas Configurações de Privacidade:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Perfil:</strong> Público ou visível apenas para amigos</li>
                <li><strong>Eventos Participados:</strong> Público ou privado</li>
                <li><strong>Lista de Amigos:</strong> Pública ou privada</li>
                <li><strong>Localização:</strong> Compartilhar ou não</li>
                <li><strong>Atividade em Grupos:</strong> Conforme configurações do grupo</li>
                <li><strong>Quem pode me adicionar:</strong> Todos, amigos de amigos, ninguém</li>
                <li><strong>Quem pode me mensagear:</strong> Todos, apenas amigos</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">13. Notificações e Comunicações</h2>

              <h3 className="text-xl font-medium text-foreground">13.1 Tipos de Notificações</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Transacionais:</strong> Confirmação de compra, lembretes de eventos (não podem ser desativadas)</li>
                <li><strong>Sociais:</strong> Mensagens, solicitações de amizade, comentários</li>
                <li><strong>Eventos:</strong> Novos eventos de organizadores seguidos, atualizações</li>
                <li><strong>Promocionais:</strong> Novidades da plataforma, recursos novos (podem ser desativadas)</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mt-6">13.2 Canais</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Push:</strong> Notificações via Firebase (pode desativar no dispositivo)</li>
                <li><strong>Email:</strong> Imediato, digest diário ou semanal (configurável)</li>
                <li><strong>In-App:</strong> Centro de notificações</li>
                <li><strong>SMS:</strong> Apenas para verificação de telefone (quando aplicável)</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mt-6">13.3 Gerenciamento</h3>
              <p className="text-muted-foreground">Configure preferências em: Configurações &gt; Notificações</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">14. Grupos e Comunidades</h2>
              <p className="text-muted-foreground">Ao participar de grupos:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Grupos Públicos:</strong> Todas as informações compartilhadas são públicas</li>
                <li><strong>Grupos Privados:</strong> Informações visíveis apenas para membros</li>
                <li><strong>Administradores:</strong> Têm acesso a todas as atividades do grupo</li>
                <li><strong>Postagens e Comentários:</strong> Podem ser moderados ou removidos</li>
                <li><strong>Saída do Grupo:</strong> Suas postagens podem ser mantidas de forma anônima</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">15. Pagamentos e Dados Financeiros</h2>

              <h3 className="text-xl font-medium text-foreground">15.1 Stripe como Processador</h3>
              <p className="text-muted-foreground">Todo processamento de pagamentos é feito via Stripe:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Informações de cartão são enviadas diretamente ao Stripe (não passam por nossos servidores)</li>
                <li>Stripe é certificado PCI DSS Level 1, o mais alto padrão de segurança de pagamentos</li>
                <li>Mantemos apenas registros de transações (não dados completos do cartão)</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mt-6">15.2 Stripe Connect para Organizadores</h3>
              <p className="text-muted-foreground">Organizadores que vendem ingressos utilizam Stripe Connect:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Dados bancários e documentos de identificação são processados pelo Stripe</li>
                <li>Pagamentos depositados diretamente na conta Stripe do organizador</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mt-6">15.3 Retenção de Dados de Transação</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Registros de transações mantidos por 5 anos conforme legislação fiscal</li>
                <li>Dados incluem: valor, data, evento, status, mas não dados completos do cartão</li>
                <li>Utilizados para suporte, reembolsos e cumprimento de obrigações legais</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">16. Mapas e Serviços de Localização</h2>
              <p className="text-muted-foreground">Utilizamos Mapbox para serviços de mapa:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Exibição de Mapas:</strong> Mapas interativos em eventos e perfis</li>
                <li><strong>Geocodificação:</strong> Converter endereços em coordenadas</li>
                <li><strong>Reverse Geocoding:</strong> Converter coordenadas em endereços</li>
                <li><strong>Busca de Locais:</strong> Sugestões de endereços ao criar eventos</li>
                <li><strong>Cálculo de Distância:</strong> Ordenar eventos por proximidade</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">17. Alterações nesta Política</h2>
              <p className="text-muted-foreground leading-relaxed">
                Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas, tecnologia, requisitos legais ou outros fatores.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Alterações significativas serão notificadas por:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Email para endereço cadastrado</li>
                <li>Notificação destacada no aplicativo</li>
                <li>Atualização da data "Última atualização" no topo desta página</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Recomendamos revisar esta página regularmente. O uso continuado do serviço após alterações constitui aceitação da nova política.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Se você não concordar com alterações, deve parar de usar o serviço e excluir sua conta.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">18. Base Legal para Processamento (GDPR)</h2>
              <p className="text-muted-foreground">Para residentes da União Europeia, processamos dados pessoais com base nas seguintes bases legais conforme GDPR (Art. 6):</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Consentimento (Art. 6(1)(a)):</strong> Notificações de marketing, cookies não-essenciais, compartilhamento de localização GPS</li>
                <li><strong>Execução de Contrato (Art. 6(1)(b)):</strong> Criação de conta, processamento de eventos, compra de ingressos, chat</li>
                <li><strong>Obrigação Legal (Art. 6(1)(c)):</strong> Retenção de dados fiscais, resposta a autoridades</li>
                <li><strong>Interesse Legítimo (Art. 6(1)(f)):</strong> Segurança da plataforma, prevenção de fraude, análise de uso, moderação de conteúdo</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                <strong>Decisões Automatizadas (Art. 22):</strong> Utilizamos moderação automatizada para filtrar conteúdo impróprio. Você tem direito de contestar decisões automatizadas e solicitar revisão humana.
              </p>
              <p className="text-muted-foreground mt-2">
                <strong>Transferências Internacionais:</strong> Dados são transferidos para países fora da UE (Brasil, EUA) com salvaguardas adequadas como Cláusulas Contratuais Padrão (SCCs) com nossos provedores.
              </p>
              <p className="text-muted-foreground mt-2">
                <strong>Prazo de Resposta:</strong> Respondemos solicitações de direitos em até 30 dias (extensível a 60 dias se complexo).
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">19. Direitos dos Consumidores da Califórnia (CCPA/CPRA)</h2>
              <p className="text-muted-foreground">Para residentes da Califórnia, você tem direitos adicionais sob CCPA/CPRA:</p>

              <h3 className="text-xl font-medium text-foreground mt-6">19.1 Seus Direitos CCPA/CPRA</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Direito de Saber:</strong> Categorias e itens específicos de dados coletados nos últimos 12 meses</li>
                <li><strong>Direito de Excluir:</strong> Solicitar exclusão de dados pessoais (com exceções legais)</li>
                <li><strong>Direito de Corrigir:</strong> Corrigir informações pessoais imprecisas</li>
                <li><strong>Direito de Opt-Out:</strong> Recusar venda ou compartilhamento de dados para publicidade comportamental</li>
                <li><strong>Direito de Limitar:</strong> Limitar uso de informações pessoais sensíveis</li>
                <li><strong>Não Discriminação:</strong> Não seremos discriminatórios por exercer seus direitos</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mt-6">19.2 Categorias de Informações Pessoais Coletadas</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Identificadores:</strong> Nome, email, username, telefone, endereço IP</li>
                <li><strong>Informações Comerciais:</strong> Histórico de compras, eventos criados/participados</li>
                <li><strong>Atividade na Internet:</strong> Histórico de navegação, interações, pesquisas</li>
                <li><strong>Geolocalização:</strong> Localização GPS precisa (com consentimento)</li>
                <li><strong>Informações Sensíveis:</strong> Dados de login, informações financeiras (processadas via Stripe)</li>
                <li><strong>Inferências:</strong> Preferências de eventos, interesses</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mt-6">19.3 Venda e Compartilhamento de Dados</h3>
              <p className="text-muted-foreground">Não vendemos suas informações pessoais. Compartilhamos com prestadores de serviço para operação da plataforma conforme descrito nesta política.</p>

              <h3 className="text-xl font-medium text-foreground mt-6">19.4 Decisões Automatizadas (ADMT)</h3>
              <p className="text-muted-foreground">Utilizamos tecnologia de decisão automatizada para:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Moderação de conteúdo e filtragem de spam</li>
                <li>Recomendação de eventos baseada em preferências</li>
                <li>Pontuação de risco para aprovação de eventos</li>
              </ul>
              <p className="text-muted-foreground mt-2">
                Você pode optar por não estar sujeito a decisões automatizadas que produzam efeitos legais ou significativos. Para contestar, entre em contato em suporte@ourmap.com.br.
              </p>

              <h3 className="text-xl font-medium text-foreground mt-6">19.5 Como Exercer seus Direitos</h3>
              <p className="text-muted-foreground">Para exercer direitos CCPA/CPRA:</p>
              <div className="mt-2 text-muted-foreground">
                <p><strong>Email:</strong> suporte@ourmap.com.br</p>
                <p><strong>Prazo de Resposta:</strong> 45 dias (extensível a 90 dias se complexo)</p>
              </div>
              <p className="text-muted-foreground mt-2">Podemos solicitar verificação de identidade antes de processar solicitações.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">20. Contato e Solicitações</h2>
              <p className="text-muted-foreground">Para questões sobre esta Política de Privacidade, exercício de direitos LGPD ou tratamento de dados pessoais, entre em contato:</p>
              <div className="text-muted-foreground mt-2">
                <p><strong>Email do DPO:</strong> suporte@ourmap.com.br</p>
                <p><strong>Central de Ajuda:</strong> Disponível no aplicativo</p>
                <p><strong>Endereço:</strong> Rua Manoel Franco, 1682. Ji-Paraná, RO</p>
              </div>
              <p className="text-muted-foreground mt-2">Responderemos solicitações em até 15 dias úteis.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">21. Autoridade de Proteção de Dados</h2>
              <p className="text-muted-foreground">Você tem direito de apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD) se considerar que o tratamento de seus dados viola a LGPD:</p>
              <div className="text-muted-foreground mt-2">
                <p><strong>Site:</strong> www.gov.br/anpd</p>
                <p><strong>Canal de Atendimento:</strong> Conforme orientações no site da ANPD</p>
              </div>
            </section>

            <section className="bg-primary/5 p-6 rounded-lg border border-primary/10 mt-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">Resumo Executivo</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Coletamos dados necessários para fornecer serviços de gerenciamento de eventos</li>
                <li>Utilizamos prestadores confiáveis (Supabase, Stripe, Mapbox, SendGrid, Firebase)</li>
                <li>Conformidade com LGPD (Brasil), GDPR (União Europeia) e CCPA/CPRA (Califórnia)</li>
                <li>Você tem controle total sobre seus dados com direitos específicos por jurisdição</li>
                <li>Não vendemos suas informações pessoais</li>
                <li>Implementamos medidas robustas de segurança (PCI DSS, criptografia, SCCs)</li>
                <li>Pode excluir sua conta a qualquer momento</li>
                <li>Transferências internacionais com salvaguardas adequadas</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Esta Política complementa os <a href="/termos-de-uso" className="text-primary hover:underline">Termos de Uso</a> do OurMap. Ao usar nossa plataforma, você concorda com ambos os documentos.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
