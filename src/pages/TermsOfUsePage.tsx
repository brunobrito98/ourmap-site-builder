import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const TermsOfUsePage = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Content */}
            <main className="container mx-auto px-4 pt-24 py-12 max-w-4xl">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold tracking-tight text-foreground">Termos de Uso - OurMap</h1>
                        <p className="text-muted-foreground">Última atualização: 09/02/2026</p>
                    </div>

                    <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">1. Aceitação dos Termos</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Ao acessar e usar o OurMap, você concorda em estar vinculado a estes Termos de Uso, todas as leis e regulamentos aplicáveis. Se você não concorda com algum destes termos, está proibido de usar ou acessar esta plataforma. O uso continuado do serviço após alterações aos termos constitui aceitação das mudanças.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">2. Descrição do Serviço</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                O OurMap é uma plataforma completa de gerenciamento de eventos que permite aos usuários:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li><strong>Criação e Gestão de Eventos:</strong> Criar eventos gratuitos, pagos, privados ou públicos com opções de recorrência (diário, semanal, quinzenal, mensal)</li>
                                <li><strong>Sistema de Ingressos:</strong> Vender ingressos com múltiplos tipos, preços em lote, datas de validade e limites de quantidade</li>
                                <li><strong>Crowdfunding:</strong> Criar eventos de arrecadação de fundos com contribuições personalizadas</li>
                                <li><strong>Pagamentos Seguros:</strong> Processar pagamentos via Stripe com suporte multi-moeda (BRL/USD)</li>
                                <li><strong>Check-in Digital:</strong> Utilizar QR codes para gerenciar entrada de participantes</li>
                                <li><strong>Descoberta de Eventos:</strong> Buscar eventos por localização, categoria, data e distância</li>
                                <li><strong>Recursos Sociais:</strong> Conectar-se com amigos, chat em tempo real, seguir organizadores, participar de grupos</li>
                                <li><strong>Grupos Temáticos:</strong> Criar e participar de grupos públicos ou privados com postagens, enquetes e eventos exclusivos</li>
                                <li><strong>Avaliações:</strong> Avaliar eventos e organizadores após participação</li>
                                <li><strong>Galeria de Fotos:</strong> Compartilhar fotos dos eventos com a comunidade</li>
                                <li><strong>Impulsionamento:</strong> Promover eventos através de planos de boost pagos</li>
                                <li><strong>Programa de Indicação:</strong> Convidar amigos e ganhar cupons de desconto</li>
                                <li><strong>Notificações:</strong> Receber atualizações via push, email e notificações em tempo real</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">3. Conta de Usuário</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Para usar determinados recursos do serviço, você deve criar uma conta. Você é responsável por:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Fornecer informações verdadeiras, precisas e completas durante o cadastro</li>
                                <li>Manter a confidencialidade de sua senha e credenciais de acesso</li>
                                <li>Todas as atividades que ocorrem sob sua conta</li>
                                <li>Notificar-nos imediatamente sobre qualquer uso não autorizado ou violação de segurança</li>
                                <li>Ser maior de 13 anos de idade</li>
                                <li>Atualizar suas informações de perfil quando necessário</li>
                            </ul>
                            <p className="text-muted-foreground leading-relaxed">
                                Reservamos o direito de suspender ou encerrar contas que violem estes termos ou forneçam informações falsas.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">4. Criação e Gestão de Eventos</h2>

                            <h3 className="text-xl font-medium text-foreground">4.1 Responsabilidades do Organizador</h3>
                            <p className="text-muted-foreground">Ao criar um evento, você garante que:</p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Possui todos os direitos necessários para realizar o evento</li>
                                <li>Todas as informações fornecidas são verdadeiras e precisas</li>
                                <li>O evento não viola leis locais, estaduais ou federais</li>
                                <li>Cumprirá todas as promessas feitas aos participantes</li>
                                <li>É responsável pela segurança e bem-estar dos participantes</li>
                                <li>Possui as licenças e autorizações necessárias para eventos pagos ou em locais públicos</li>
                            </ul>

                            <h3 className="text-xl font-medium text-foreground mt-6">4.2 Moderação de Conteúdo</h3>
                            <p className="text-muted-foreground">Todos os eventos passam por sistema de moderação automatizado e manual:</p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li><strong>Aprovação Automática:</strong> Eventos com baixo risco são aprovados automaticamente</li>
                                <li><strong>Revisão Manual:</strong> Eventos com risco médio são revisados por moderadores</li>
                                <li><strong>Rejeição:</strong> Eventos que violem nossos termos são rejeitados automaticamente</li>
                                <li>Utilizamos filtros de palavras-chave, URLs e conteúdo impróprio</li>
                                <li>Pontuação de confiança do usuário influencia na moderação</li>
                            </ul>

                            <h3 className="text-xl font-medium text-foreground mt-6">4.3 Tipos de Eventos</h3>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li><strong>Gratuitos:</strong> Sem cobrança de ingressos, com ou sem limite de participantes</li>
                                <li><strong>Pagos:</strong> Com venda de ingressos através do Stripe Connect</li>
                                <li><strong>Crowdfunding:</strong> Arrecadação de fundos com contribuições personalizadas</li>
                                <li><strong>Privados:</strong> Acessíveis apenas por convite ou link especial</li>
                                <li><strong>Recorrentes:</strong> Eventos que se repetem periodicamente (diário, semanal, etc.)</li>
                            </ul>

                            <h3 className="text-xl font-medium text-foreground mt-6">4.4 Cancelamento e Alterações</h3>
                            <p className="text-muted-foreground">Organizadores podem cancelar ou alterar eventos, mas devem:</p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Notificar todos os participantes confirmados com antecedência adequada</li>
                                <li>Processar reembolsos conforme política estabelecida para o evento</li>
                                <li>Não alterar informações essenciais após venda de ingressos sem compensação adequada</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">5. Sistema de Ingressos e Pagamentos</h2>

                            <h3 className="text-xl font-medium text-foreground">5.1 Processamento de Pagamentos</h3>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li><strong>Stripe como Processador:</strong> Todos os pagamentos são processados via Stripe</li>
                                <li><strong>Stripe Connect:</strong> Organizadores que vendem ingressos devem criar conta Stripe Connect e concordar com seus termos</li>
                                <li><strong>Segurança PCI DSS:</strong> Dados de cartão são processados diretamente pelo Stripe (certificado PCI DSS nível 1)</li>
                                <li><strong>Multi-moeda:</strong> Suporte a BRL (Brasil) e USD (internacional) baseado na localização do usuário</li>
                            </ul>

                            <h3 className="text-xl font-medium text-foreground mt-6">5.2 Tipos de Ingressos</h3>
                            <p className="text-muted-foreground">Organizadores podem criar:</p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Múltiplos tipos de ingressos (VIP, estudante, backstage, etc.)</li>
                                <li>Preços em lote (early bird, lotes progressivos)</li>
                                <li>Datas de início e fim de vendas por tipo</li>
                                <li>Quantidade máxima de ingressos por pedido</li>
                                <li>Ingressos gratuitos e pagos no mesmo evento</li>
                            </ul>

                            <h3 className="text-xl font-medium text-foreground mt-6">5.3 Taxas e Comissões</h3>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Taxas de processamento do Stripe são aplicadas conforme tabela do Stripe</li>
                                <li>Taxas de serviço da plataforma podem ser aplicadas e serão exibidas antes da compra</li>
                                <li>Organizadores recebem pagamentos diretamente em sua conta Stripe Connect</li>
                            </ul>

                            <h3 className="text-xl font-medium text-foreground mt-6">5.4 Política de Reembolso</h3>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Políticas de reembolso são definidas pelo organizador do evento</li>
                                <li>Solicitações de reembolso devem ser feitas ao organizador</li>
                                <li>OurMap atua como facilitador e não é responsável por reembolsos</li>
                                <li>Em caso de cancelamento do evento, organizador deve reembolsar todos os participantes</li>
                                <li>Disputas de pagamento são gerenciadas pelo Stripe conforme suas políticas</li>
                            </ul>

                            <h3 className="text-xl font-medium text-foreground mt-6">5.5 QR Codes e Check-in</h3>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Cada ingresso possui QR code único para validação</li>
                                <li>Organizadores usam sistema de scanner para check-in</li>
                                <li>QR codes são enviados por email após compra confirmada</li>
                                <li>Usuários podem acessar ingressos na seção "Meus Ingressos"</li>
                                <li>Transferência ou revenda de ingressos só é permitida com aprovação do organizador</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">6. Recursos Sociais e Comunidade</h2>

                            <h3 className="text-xl font-medium text-foreground">6.1 Sistema de Amizades</h3>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Usuários podem enviar, aceitar ou recusar solicitações de amizade</li>
                                <li>Amigos podem visualizar atividades e eventos uns dos outros (conforme configurações de privacidade)</li>
                                <li>Usuários podem bloquear outros usuários a qualquer momento</li>
                            </ul>

                            <h3 className="text-xl font-medium text-foreground mt-6">6.2 Chat em Tempo Real</h3>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Chat privado disponível apenas entre amigos conectados</li>
                                <li>Mensagens são transmitidas via WebSocket para comunicação instantânea</li>
                                <li>Histórico de mensagens é mantido para referência</li>
                                <li>Status de leitura é exibido nas conversas</li>
                                <li>Usuários podem denunciar mensagens impróprias</li>
                            </ul>

                            <h3 className="text-xl font-medium text-foreground mt-6">6.3 Grupos e Comunidades</h3>
                            <p className="text-muted-foreground">Ao criar ou participar de grupos:</p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li><strong>Grupos Públicos:</strong> Qualquer usuário pode encontrar e participar</li>
                                <li><strong>Grupos Privados:</strong> Acesso mediante aprovação do administrador</li>
                                <li><strong>Moderação:</strong> Criadores de grupos são responsáveis pela moderação do conteúdo</li>
                                <li><strong>Postagens:</strong> Membros podem criar postagens, comentários e enquetes</li>
                                <li><strong>Eventos de Grupo:</strong> Grupos podem ter eventos exclusivos para membros</li>
                                <li><strong>Regras:</strong> Membros devem respeitar regras do grupo e da plataforma</li>
                                <li><strong>Remoção:</strong> Administradores podem remover membros ou conteúdo inadequado</li>
                            </ul>
                            <p className="text-muted-foreground">Reservamos direito de remover grupos que violem nossos termos.</p>

                            <h3 className="text-xl font-medium text-foreground mt-6">6.4 Sistema de Seguidores</h3>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Usuários podem seguir organizadores para receber atualizações sobre novos eventos</li>
                                <li>Organizadores podem ver lista de seguidores</li>
                                <li>Seguidores recebem notificações de eventos criados pelos organizadores</li>
                                <li>Seguir não constitui endosso ou parceria comercial</li>
                                <li>Usuários podem deixar de seguir a qualquer momento</li>
                            </ul>

                            <h3 className="text-xl font-medium text-foreground mt-6">6.5 Avaliações e Comentários</h3>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Participantes podem avaliar eventos após conclusão</li>
                                <li>Organizadores podem ser avaliados separadamente</li>
                                <li>Avaliações devem ser honestas e baseadas em experiência real</li>
                                <li>Proibido avaliações falsas, ofensivas ou difamatórias</li>
                                <li>Avaliações inadequadas podem ser removidas</li>
                                <li>Média de avaliações é exibida publicamente</li>
                            </ul>

                            <h3 className="text-xl font-medium text-foreground mt-6">6.6 Galeria de Fotos</h3>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Participantes podem carregar fotos de eventos</li>
                                <li>Fotos devem respeitar direitos autorais e privacidade</li>
                                <li>Usuários podem curtir e comentar fotos</li>
                                <li>Organizadores podem moderar galeria de seus eventos</li>
                                <li>Conteúdo impróprio será removido</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">7. Sistema de Notificações</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                A plataforma oferece múltiplos canais de notificação:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li><strong>Notificações Push:</strong> Via Firebase Cloud Messaging para atualizações em tempo real</li>
                                <li><strong>Notificações Email:</strong> Via SendGrid com opções de digest diário ou semanal</li>
                                <li><strong>Notificações In-App:</strong> Centro de notificações dentro do aplicativo</li>
                                <li><strong>Lembretes de Eventos:</strong> Notificações automáticas 1 hora antes e no início do evento</li>
                                <li><strong>Solicitações de Avaliação:</strong> Enviadas após conclusão do evento</li>
                            </ul>
                            <p className="text-muted-foreground leading-relaxed mt-2">
                                Você pode configurar preferências de notificação nas Configurações. Algumas notificações essenciais (transacionais) não podem ser desativadas.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">8. Impulsionamento e Promoção de Eventos</h2>

                            <h3 className="text-xl font-medium text-foreground">8.1 Planos de Boost</h3>
                            <p className="text-muted-foreground">Organizadores podem promover eventos através de planos pagos:</p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li><strong>Destaque Prata:</strong> Promoção básica com múltiplas subidas ao topo</li>
                                <li><strong>Destaque Ouro:</strong> Promoção intermediária com mais visibilidade</li>
                                <li><strong>Destaque Diamante:</strong> Promoção premium com selo especial e notificações</li>
                            </ul>

                            <h3 className="text-xl font-medium text-foreground mt-6">8.2 Funcionamento</h3>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Boost é comprado por evento individual</li>
                                <li>Pagamento processado via Stripe</li>
                                <li>Duração do boost conforme plano escolhido</li>
                                <li>Subidas ao topo são distribuídas automaticamente ao longo do período</li>
                                <li>Eventos impulsionados têm prioridade na ordenação</li>
                            </ul>

                            <h3 className="text-xl font-medium text-foreground mt-6">8.3 Termos do Boost</h3>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Não garantimos número específico de visualizações ou participantes</li>
                                <li>Boost não isenta evento de moderação ou políticas de conteúdo</li>
                                <li>Reembolso de boost só em caso de falha técnica da plataforma</li>
                                <li>Cancelamento de evento não resulta em reembolso de boost</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">9. Programa de Indicação</h2>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Usuários recebem código único de indicação</li>
                                <li>Ao indicar amigos que se cadastram, ambos ganham cupons de desconto</li>
                                <li>Cupons aplicáveis em planos de boost de eventos</li>
                                <li>Limite de uso e validade conforme definido na promoção</li>
                                <li>Fraude ou abuso resulta em suspensão de conta</li>
                                <li>Programa pode ser modificado ou encerrado sem aviso prévio</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">10. Conteúdo do Usuário e Conduta</h2>

                            <h3 className="text-xl font-medium text-foreground">10.1 Responsabilidade pelo Conteúdo</h3>
                            <p className="text-muted-foreground">
                                Você é responsável por todo conteúdo publicado, incluindo eventos, mensagens, comentários, fotos, avaliações e postagens em grupos. Você concorda em não publicar conteúdo que:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Viole direitos autorais, marcas registradas ou outros direitos de propriedade intelectual</li>
                                <li>Seja ilegal, fraudulento, difamatório, obsceno ou ameaçador</li>
                                <li>Contenha vírus, malware ou código malicioso</li>
                                <li>Seja spam, propaganda enganosa ou esquemas fraudulentos</li>
                                <li>Incite ódio, discriminação ou violência</li>
                                <li>Viole privacidade de terceiros ou divulgue informações pessoais sem consentimento</li>
                                <li>Represente falsamente identidade ou afiliação</li>
                                <li>Seja sexualmente explícito envolvendo menores</li>
                            </ul>

                            <h3 className="text-xl font-medium text-foreground mt-6">10.2 Moderação e Remoção</h3>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Reservamos direito de remover qualquer conteúdo que viole estes termos</li>
                                <li>Sistema automatizado de moderação filtra conteúdo impróprio</li>
                                <li>Usuários podem denunciar conteúdo inadequado</li>
                                <li>Violações repetidas resultam em suspensão ou banimento permanente</li>
                                <li>Não somos obrigados a monitorar conteúdo, mas podemos fazê-lo</li>
                            </ul>

                            <h3 className="text-xl font-medium text-foreground mt-6">10.3 Licença de Conteúdo</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Ao publicar conteúdo, você concede ao OurMap licença mundial, não-exclusiva, livre de royalties para usar, reproduzir, modificar, adaptar, publicar e distribuir tal conteúdo em conexão com o serviço.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">11. Localização e Mapas</h2>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Serviço utiliza Mapbox para exibição de mapas e geocodificação</li>
                                <li>Dados de localização são usados para descobrir eventos próximos</li>
                                <li>Usuários podem permitir ou negar acesso à localização GPS</li>
                                <li>Precisão da localização depende de dispositivo e rede</li>
                                <li>Organizadores devem fornecer endereço preciso dos eventos</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">12. Propriedade Intelectual</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                O serviço e seu conteúdo original (exceto conteúdo fornecido por usuários), recursos e funcionalidade são propriedade exclusiva do OurMap e seus licenciadores. Incluindo mas não limitado a:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Design, layout e código da plataforma</li>
                                <li>Marca, logos e identidade visual</li>
                                <li>Algoritmos de moderação e recomendação</li>
                                <li>Documentação e materiais de ajuda</li>
                            </ul>
                            <p className="text-muted-foreground leading-relaxed mt-2">
                                É proibido copiar, modificar, distribuir, vender ou explorar comercialmente qualquer parte do serviço sem permissão expressa por escrito.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">13. Limitação de Responsabilidade</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                O OurMap é fornecido "como está" e "conforme disponível". Não garantimos que o serviço será:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Ininterrupto, pontual, seguro ou livre de erros</li>
                                <li>Isento de vírus ou outros componentes prejudiciais</li>
                                <li>Preciso, confiável ou adequado para fins específicos</li>
                            </ul>
                            <p className="text-muted-foreground leading-relaxed mt-4">
                                Em nenhum caso seremos responsáveis por danos diretos, indiretos, incidentais, especiais, consequenciais ou punitivos, incluindo mas não limitado a:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Perda de lucros, receitas, dados ou uso</li>
                                <li>Custo de serviços substitutos</li>
                                <li>Interrupção de negócios</li>
                                <li>Danos pessoais ou à propriedade</li>
                            </ul>
                            <p className="text-muted-foreground leading-relaxed mt-4">
                                Especificamente, não somos responsáveis por:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Qualidade, segurança ou legalidade de eventos criados por usuários</li>
                                <li>Veracidade de informações fornecidas por organizadores</li>
                                <li>Disputas entre organizadores e participantes</li>
                                <li>Problemas com processamento de pagamentos pelo Stripe</li>
                                <li>Conteúdo ou conduta de usuários</li>
                                <li>Perda ou roubo de ingressos</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">14. Acordo de Nível de Serviço (SLA) e Disponibilidade</h2>

                            <h3 className="text-xl font-medium text-foreground">14.1 Meta de Disponibilidade</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Nos esforçamos para manter a plataforma OurMap disponível e operacional com uma meta de disponibilidade de 99% (noventa e nove por cento) ao ano, calculada mensalmente. No entanto, esta é uma meta de esforço comercial razoável e não constitui uma garantia ou obrigação contratual vinculante.
                            </p>

                            <h3 className="text-xl font-medium text-foreground mt-6">14.2 Exclusões do SLA</h3>
                            <p className="text-muted-foreground">A meta de disponibilidade NÃO se aplica a períodos de indisponibilidade causados por:</p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li><strong>Manutenção Programada:</strong> Manutenções agendadas e comunicadas com antecedência mínima de 24 horas</li>
                                <li><strong>Manutenção de Emergência:</strong> Atualizações críticas de segurança ou correções urgentes de bugs</li>
                                <li><strong>Força Maior:</strong> Eventos fora de nosso controle incluindo desastres naturais, guerras, ataques cibernéticos de terceiros, falhas de infraestrutura de internet, falta de energia elétrica, greves ou ações governamentais</li>
                                <li><strong>Problemas de Terceiros:</strong> Indisponibilidade de serviços de terceiros dos quais dependemos (Stripe, SendGrid, Firebase, Mapbox, Supabase, provedores de hospedagem)</li>
                                <li><strong>Problemas do Usuário:</strong> Falhas devido a equipamento, software, conexão de internet ou configurações do usuário</li>
                                <li><strong>Ataques e Abusos:</strong> Ataques DDoS, invasões, uso excessivo ou abusivo da plataforma</li>
                                <li><strong>Testes e Atualizações:</strong> Períodos de teste de novas funcionalidades ou migrações de sistema</li>
                            </ul>

                            <h3 className="text-xl font-medium text-foreground mt-6">14.3 Sem Garantia de Disponibilidade Ininterrupta</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Embora nos esforcemos para manter alta disponibilidade, o serviço é fornecido "como está" e "conforme disponível". NÃO GARANTIMOS que a plataforma estará:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Disponível ininterruptamente, sem pausas ou interrupções</li>
                                <li>Livre de erros, bugs ou falhas técnicas</li>
                                <li>Acessível a qualquer momento específico</li>
                                <li>Funcionando em velocidade ou desempenho específico</li>
                            </ul>

                            <h3 className="text-xl font-medium text-foreground mt-6">14.4 Isenção de Responsabilidade por Indisponibilidade</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                O OurMap não será responsável por quaisquer perdas, danos ou prejuízos decorrentes de indisponibilidade temporária ou permanente da plataforma, incluindo mas não limitado a:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Perda de receitas, vendas de ingressos ou oportunidades de negócio</li>
                                <li>Incapacidade de criar, editar, promover ou cancelar eventos</li>
                                <li>Perda de dados de eventos, usuários ou transações (embora façamos backups regulares)</li>
                                <li>Impossibilidade de acessar ingressos, QR codes ou informações de eventos</li>
                                <li>Danos à reputação ou relacionamento com participantes</li>
                                <li>Eventos não realizados devido a impossibilidade de acesso à plataforma</li>
                                <li>Qualquer dano consequencial, indireto ou incidental</li>
                            </ul>

                            <h3 className="text-xl font-medium text-foreground mt-6">14.5 Sem Compensação Financeira</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Períodos de indisponibilidade ou degradação de desempenho NÃO darão direito a reembolsos, créditos, descontos ou qualquer forma de compensação financeira, incluindo:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Reembolso de taxas de serviço ou planos de boost</li>
                                <li>Créditos ou cupons de desconto</li>
                                <li>Indenizações por lucros cessantes</li>
                                <li>Compensação por danos morais ou materiais</li>
                            </ul>

                            <h3 className="text-xl font-medium text-foreground mt-6">14.6 Recomendações aos Organizadores</h3>
                            <p className="text-muted-foreground">Recomendamos fortemente que organizadores de eventos:</p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Mantenham canais alternativos de comunicação com participantes (WhatsApp, email pessoal, redes sociais)</li>
                                <li>Façam backup de informações críticas de eventos (listas de participantes, códigos de ingresso)</li>
                                <li>Planejem procedimentos de contingência para check-in manual em caso de indisponibilidade</li>
                                <li>Comuniquem informações essenciais aos participantes com antecedência</li>
                                <li>Não dependam exclusivamente da plataforma para operações críticas de evento</li>
                            </ul>

                            <h3 className="text-xl font-medium text-foreground mt-6">14.7 Monitoramento e Melhorias Contínuas</h3>
                            <p className="text-muted-foreground">Comprometemo-nos a:</p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Monitorar constantemente a disponibilidade e desempenho da plataforma</li>
                                <li>Trabalhar diligentemente para restaurar o serviço em caso de interrupções</li>
                                <li>Implementar melhorias contínuas de infraestrutura e confiabilidade</li>
                                <li>Comunicar incidentes significativos através de nossos canais oficiais quando possível</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">15. Indenização</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Você concorda em indenizar, defender e isentar OurMap, suas afiliadas, diretores, funcionários e agentes de quaisquer reivindicações, responsabilidades, danos, perdas e despesas (incluindo honorários advocatícios) decorrentes de:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Seu uso do serviço</li>
                                <li>Violação destes Termos de Uso</li>
                                <li>Violação de direitos de terceiros</li>
                                <li>Conteúdo que você publica</li>
                                <li>Eventos que você cria ou participa</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">16. Exclusão de Conta</h2>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Você pode excluir sua conta a qualquer momento nas Configurações</li>
                                <li>Exclusão remove seus dados pessoais conforme Política de Privacidade</li>
                                <li>Eventos criados podem ser mantidos anonimizados se tiverem participantes</li>
                                <li>Ingressos comprados permanecem válidos após exclusão de conta</li>
                                <li>Conteúdo em grupos pode ser mantido de forma anônima</li>
                                <li>Transações financeiras são mantidas conforme obrigações legais</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">17. Suspensão e Encerramento</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Podemos suspender ou encerrar seu acesso ao serviço imediatamente, sem aviso prévio, por:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Violação destes Termos de Uso</li>
                                <li>Solicitação de autoridades legais</li>
                                <li>Fraude ou atividade suspeita</li>
                                <li>Conduta que prejudique outros usuários</li>
                                <li>Inadimplência em pagamentos</li>
                                <li>Inatividade prolongada</li>
                            </ul>
                            <p className="text-muted-foreground leading-relaxed mt-2">
                                Podemos também encerrar o serviço a qualquer momento, mediante aviso razoável quando possível.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">18. Links para Terceiros</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                O serviço pode conter links para sites ou serviços de terceiros (Stripe, Mapbox, etc.). Não controlamos e não somos responsáveis por conteúdo, políticas de privacidade ou práticas de sites de terceiros. Você reconhece e concorda que não seremos responsáveis por danos resultantes do uso de tais sites.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">19. Lei Aplicável e Jurisdição</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Estes Termos são regidos pelas leis do Brasil. Qualquer disputa relacionada a estes termos será submetida à jurisdição exclusiva dos tribunais brasileiros.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">20. Alterações nos Termos</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Podemos modificar estes termos a qualquer momento. Alterações significativas serão notificadas por email ou através do aplicativo com pelo menos 7 dias de antecedência. O uso continuado do serviço após tais alterações constitui sua aceitação dos novos termos.
                            </p>
                            <p className="text-muted-foreground leading-relaxed mt-2">
                                Se você não concordar com os novos termos, deve parar de usar o serviço e excluir sua conta.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">21. Disposições Gerais</h2>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li><strong>Integralidade:</strong> Estes termos constituem o acordo completo entre você e OurMap</li>
                                <li><strong>Renúncia:</strong> Falha em aplicar qualquer direito não constitui renúncia</li>
                                <li><strong>Divisibilidade:</strong> Se alguma disposição for inválida, as demais permanecem em vigor</li>
                                <li><strong>Atribuição:</strong> Você não pode transferir seus direitos sem nossa aprovação</li>
                                <li><strong>Idioma:</strong> Em caso de conflito entre versões, a versão em português prevalece</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">22. Contato</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Para questões sobre estes Termos de Uso, entre em contato:
                            </p>
                            <div className="text-muted-foreground mt-2">
                                <p><strong>Email:</strong> suporte@ourmap.com.br</p>
                                <p><strong>Endereço:</strong> Rua Manoel Franco, 1682. Ji-Paraná, RO</p>
                            </div>
                            <p className="text-muted-foreground leading-relaxed mt-2">
                                Você também pode acessar a central de ajuda dentro do aplicativo para suporte técnico.
                            </p>
                        </section>

                        <section className="bg-primary/5 p-6 rounded-lg border border-primary/10 mt-8">
                            <p className="text-muted-foreground leading-relaxed">
                                Ao usar o OurMap, você reconhece que leu, compreendeu e concordou em estar vinculado a estes Termos de Uso e à nossa <a href="/politica-de-privacidade" className="text-primary hover:underline">Política de Privacidade</a>.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default TermsOfUsePage;
