# 🔁 Tutorial: Eventos Recorrentes

## O que são Eventos Recorrentes?

Eventos que acontecem regularmente em um padrão previsível:
- 📅 Semanais (toda segunda-feira)
- 🗓️ Quinzenais (a cada 2 semanas)
- 📆 Mensais (primeira sexta do mês)
- 🔄 Personalizados (a cada 3 dias, etc.)

## Quando Usar Eventos Recorrentes?

### ✅ Use Para:

**Atividades Regulares:**
- Aulas de yoga (toda terça e quinta, 19h)
- Clube do livro (última sexta do mês)
- Corrida de rua (todos os sábados, 7h)
- Meetup de desenvolvedores (primeira quarta do mês)

**Séries de Workshops:**
- Curso de fotografia (4 encontros semanais)
- Workshop de empreendedorismo (6 sábados consecutivos)

**Eventos Sociais:**
- Happy hour semanal
- Noite de jogos quinzenal
- Jam session mensal

### ❌ Não Use Para:

- Eventos únicos ou esporádicos
- Conferências anuais (use evento único)
- Eventos sem padrão claro
- Situações que exigem flexibilidade total

## Criar Evento Recorrente

### Passo 1: Informações Básicas

Igual a qualquer evento:
- Título
- Descrição
- Local
- Categoria
- Foto de capa

**Dica:** No título, indique a recorrência:
- ✅ "Yoga ao Ar Livre - Todas as Terças"
- ✅ "Meetup de Startups - Mensal"
- ❌ "Yoga ao Ar Livre" (sem indicar recorrência)

### Passo 2: Configurar Recorrência

**Ativar Recorrência:**
1. Marque ☑️ **"Este é um evento recorrente"**
2. Escolha padrão de recorrência

**Opções Disponíveis:**

#### 📅 Diário
```
Repete: Diariamente
Intervalo: A cada X dias
Exemplo: A cada 1 dia (todos os dias)
         A cada 2 dias (dia sim, dia não)
```

**Quando Usar:**
- Eventos diários (raro)
- Temporadas específicas (festival de 10 dias)

#### 📆 Semanal
```
Repete: Semanalmente
Dias: Selecione dias da semana
Intervalo: A cada X semanas
Exemplo: Toda segunda, quarta e sexta
         A cada 2 semanas, às terças
```

**Quando Usar:**
- Aulas regulares
- Treinos
- Meetups semanais

#### 🗓️ Mensal
```
Repete: Mensalmente
Opções:
  1. No dia X do mês (ex: dia 15)
  2. Na Xª semana, dia Y (ex: 1ª sexta)
Intervalo: A cada X meses
```

**Quando Usar:**
- Clubes mensais
- Eventos específicos do calendário
- Reuniões mensais

#### 🔢 Personalizado
```
Repete: A cada X dias/semanas/meses
Totalmente flexível
```

### Passo 3: Data de Término

Defina quando a recorrência termina:

**Opções:**

1. **Data Específica:**
   ```
   Primeira ocorrência: 01/11/2025
   Repete até: 31/12/2025
   Resultado: ~9 ocorrências (semanais)
   ```

2. **Número de Ocorrências:**
   ```
   Total de eventos: 8
   Sistema calcula data final automaticamente
   ```

3. **Sem Término (Indeterminado):**
   ```
   Continua indefinidamente
   Você pode cancelar/editar depois
   ```

**Recomendação:** Use data específica ou número de ocorrências para melhor planejamento.

### Passo 4: Revisão

Sistema mostra preview:
```
📅 Próximas Ocorrências:
1. Segunda, 04/11/2025 às 19:00
2. Segunda, 11/11/2025 às 19:00
3. Segunda, 18/11/2025 às 19:00
4. Segunda, 25/11/2025 às 19:00
... (mais 6 ocorrências)
Total: 10 eventos
```

Confirme e publique!

## Exemplos Práticos

### Yoga Semanal

**Configuração:**
```
Título: Yoga ao Ar Livre - Parque Ibirapuera
Descrição: Aulas de yoga para todos os níveis...
Categoria: Esportes > Yoga
Local: Parque Ibirapuera - Portão 7

Recorrência:
  Tipo: Semanal
  Dias: Terça e Quinta
  Horário: 07:00
  Duração: 1h
  Término: Após 12 semanas (24 aulas)
  
Preço: Gratuito
Vagas: 30 por aula
```

**Resultado:**
- 24 eventos criados automaticamente
- Participantes podem confirmar em todos ou escolher datas específicas
- Organizador gerencia todos de uma vez

### Clube do Livro Mensal

**Configuração:**
```
Título: Clube do Livro - Ficção Contemporânea
Descrição: Encontro mensal para discutir...
Categoria: Educação > Leitura

Recorrência:
  Tipo: Mensal
  Padrão: Última sexta de cada mês
  Horário: 19:30
  Duração: 2h
  Término: Dezembro 2025 (8 encontros)
  
Preço: Gratuito
Local: Livraria XYZ - Centro
```

**Diferencial:** Cada evento pode ter descrição única (livro do mês).

### Workshop de Fotografia (Série)

**Configuração:**
```
Título: Curso de Fotografia - Básico ao Avançado
Descrição: Aprenda fotografia em 6 semanas...
Categoria: Educação > Fotografia

Recorrência:
  Tipo: Semanal
  Dia: Sábado
  Horário: 14:00
  Duração: 3h
  Término: 6 ocorrências
  
Preço: R$ 120,00 (pacote completo)
Vagas: 15
```

**Vantagem:** Participante compra 1 ingresso = acesso aos 6 eventos!

## Gerenciar Eventos Recorrentes

### Visão Unificada

No seu painel de organizador:
- Veja série completa
- Estatísticas agregadas:
  - Total de participantes únicos
  - Taxa de presença média
  - Receita total (se pago)

### Editar Série

**Editar Todos os Eventos:**
1. Vá para qualquer evento da série
2. Clique em **"Editar Série"**
3. Faça alterações:
   - Descrição
   - Local
   - Horário
   - Preço
4. Sistema pergunta: **"Aplicar a todos eventos futuros?"**
5. Confirme

**Editar Apenas Um Evento:**
1. Acesse evento específico
2. Clique em **"Editar Este Evento"**
3. Alterações afetam apenas esta ocorrência
4. Útil para:
   - Mudança de local pontual
   - Cancelamento de data específica
   - Convidado especial em uma sessão

**Exemplo:**
```
Série: Yoga às terças, 19h
Edição: Dia 15/11 será às 18h (diferente)
Resultado: 
  - 14/11: 19h (normal)
  - 15/11: 18h (exceção)
  - 21/11: 19h (normal de novo)
```

### Cancelar Eventos

**Cancelar Evento Único:**
- Cancela apenas 1 ocorrência
- Demais eventos continuam normais
- Participantes daquela data são notificados e reembolsados

**Cancelar Série Completa:**
- Cancela todos eventos futuros
- Eventos passados permanecem no histórico
- Reembolso automático para todos
- Notificações enviadas

### Adicionar Ocorrências

Série terminou mas quer continuar?
1. Acesse série
2. Clique em **"Estender Série"**
3. Defina:
   - Quantas ocorrências a mais
   - Ou nova data de término
4. Sistema cria novos eventos automaticamente

## Participantes e Inscrições

### Como Participante se Inscreve?

**Opção 1: Série Completa**
```
"Confirmar presença em TODOS os eventos"
→ Adiciona automaticamente a todos
```

**Opção 2: Eventos Individuais**
```
Ver todas datas → Selecionar específicas
→ Confirma apenas nas escolhidas
```

**Vantagem para Organizador:**
Saber quem vai em cada data facilita planejamento.

### Ingressos em Eventos Recorrentes

**Modelos de Precificação:**

#### 1. Ingresso Individual
```
Cada aula: R$ 30,00
Participante compra por evento
Total se frequentar todas 10 aulas: R$ 300
```

#### 2. Pacote Completo
```
Pacote 10 aulas: R$ 250,00 (economia de R$ 50)
Ingresso dá acesso a todas ocorrências
Participante economiza comprando série
```

#### 3. Pacote + Individual
```
Pacote (recomendado): R$ 250 (10 aulas)
Individual: R$ 30 por aula
Flexibilidade para participantes
```

**Recomendação:** Ofereça pacote com desconto para incentivar comprometimento.

### Check-in em Eventos Recorrentes

Se eventos são pagos com QR Code:
- Cada evento tem check-in separado
- QR Code único por ocorrência
- Participante mostra QR da data específica
- Sistema rastreia presença por evento

**Analytics:**
```
João Silva - Série Yoga
Ingresso: Pacote Completo (10 aulas)
Presença:
  ✅ 01/11 - Presente
  ✅ 08/11 - Presente
  ❌ 15/11 - Ausente
  ✅ 22/11 - Presente
Taxa de frequência: 75%
```

## Notificações e Lembretes

### Lembretes Automáticos

Participantes recebem lembrete:
- 📧 Email 24h antes
- 📱 Push 1h antes
- Para CADA ocorrência que confirmaram presença

**Exemplo:**
```
🔔 Lembrete: Yoga ao Ar Livre
Amanhã, Terça 19/11 às 19:00
Local: Parque Ibirapuera - Portão 7
```

### Notificações de Mudanças

Se você editar série:
- Todos participantes são notificados
- Email + push explicando mudança
- Link para nova informação

**Mensagem Automática:**
```
⚠️ Atualização: Yoga ao Ar Livre
O organizador alterou informações do evento:
- Novo horário: 18:30 (era 19:00)
Aplicado a todos eventos a partir de 25/11
```

## Estratégias de Sucesso

### Construa Comunidade

Eventos recorrentes criam vínculo:
- Mesmas pessoas se encontram regularmente
- Amizades se formam
- Comprometimento aumenta
- Taxa de presença melhora

**Dicas:**
- Crie grupo na plataforma para os participantes
- Incentive interação entre eventos
- Reconheça participantes assíduos
- Peça feedback regularmente

### Precificação Inteligente

**Para Maximizar Receita:**
```
Aula avulsa: R$ 40
Pacote 4 aulas: R$ 140 (R$ 35/aula)
Pacote mensal (8 aulas): R$ 240 (R$ 30/aula)

Psicologia: Quanto mais compra, mais economiza
```

**Para Maximizar Comprometimento:**
```
Apenas pacotes disponíveis
Cria senso de compromisso
Reduz ausências
```

### Gerencie Capacidade

**Problema:** Lotação varia por data
**Solução:**
- Defina limite por ocorrência
- Liste espera por evento específico
- Promova datas com baixa procura

**Exemplo:**
```
Evento Recorrente: Meetup de Startups
Capacidade: 50 pessoas

Inscrições:
  Nov 15: 48/50 (96%)
  Dez 20: 35/50 (70%)
  Jan 17: 22/50 (44%)
  
Ação: Divulgar mais as datas de Jan
```

### Marketing da Série

**Destaque Benefícios:**
- "Aprenda ao longo de 8 semanas"
- "Faça parte de uma comunidade"
- "Evolução gradual garantida"

**Use Scarcity:**
- "Apenas 20 vagas para série completa"
- "Últimas 5 vagas do pacote"

**Social Proof:**
- "120 pessoas já participaram da série anterior"
- "4.8⭐ de avaliação média"

## Casos de Uso Avançados

### Curso com Módulos

**Estrutura:**
```
Curso: Marketing Digital Completo
Duração: 8 semanas
Formato: Semanal (terças, 19h-21h)

Módulos:
Semana 1: Introdução
Semana 2: SEO
Semana 3: Redes Sociais
Semana 4: Email Marketing
Semana 5: Google Ads
Semana 6: Analytics
Semana 7: Estratégia
Semana 8: Prática + Certificado
```

**Implementação:**
- Crie série recorrente
- Edite descrição de cada evento individualmente (módulo)
- Venda como pacote único
- Participantes acessam todos módulos

### Festival Multi-Dia com Repetição

**Exemplo:**
```
Festival de Jazz - 3 Dias
Sex, Sáb, Dom - mesmo local
Diferentes artistas cada noite

Recorrência: Diária (3 dias)
Ingressos:
  - Dia único: R$ 80
  - Passaporte 3 dias: R$ 200
```

**Vantagem:** Gestão unificada, estatísticas consolidadas.

### Temporada de Teatro

**Formato:**
```
Peça: "Hamlet"
Temporada: 2 meses
Sessões: Sextas e sábados, 20h

Recorrência: Semanal (sex+sab), 8 semanas = 16 apresentações
Ingressos individuais por apresentação
Assentos limitados por sessão
```

## Troubleshooting

### Problema: Participantes não comparecem

**Soluções:**
1. **Exija pagamento:** Compromisso financeiro aumenta presença
2. **Lembretes:** Intensifique comunicação
3. **Incentivos:** "Participe de 8/10 aulas e ganhe desconto no próximo curso"
4. **Penalidade leve:** "3 ausências = removido da série"

### Problema: Preciso mudar horário de 1 data

**Solução:**
1. Edite apenas aquele evento específico
2. Sistema notifica participantes daquela data
3. Ofereça transferência para outra data se houver conflito

### Problema: Série não encheu

**Ações:**
1. **Boost:** Promova série com destaque pago
2. **Early bird:** Desconto para primeiros inscritos
3. **Indicação:** Quem traz amigo ganha desconto
4. **Parceria:** Associe-se a grupo/comunidade relevante
5. **Reduza preço:** Se próximo da data e ainda vazio

### Problema: Quero pausar série por 1 semana

**Solução:**
1. Cancele evento específico daquela semana
2. Na descrição da série, explique pausa
3. Notifique participantes com antecedência
4. Série retoma automaticamente na semana seguinte

## Perguntas Frequentes

**Q: Posso ter eventos recorrentes com datas irregulares?**  
R: Não diretamente. Para datas totalmente irregulares, crie eventos separados.

**Q: Participante pode se inscrever apenas em algumas datas?**  
R: Sim! Na visualização da série, ele escolhe quais eventos quer confirmar.

**Q: Como funciona reembolso em série paga?**  
R: Se você cancelar série, reembolso proporcional. Se participante desistir, depende da sua política.

**Q: Posso transformar evento único em recorrente depois?**  
R: Não. Mas pode criar nova série e migrar participantes manualmente.

**Q: Quantas ocorrências posso ter?**  
R: Limite de 365 ocorrências por série (1 ano de eventos diários).

**Q: Eventos recorrentes aparecem no calendário?**  
R: Sim! Cada ocorrência aparece individualmente no calendário do usuário.

---

**Checklist Final:**
- [ ] Padrão de recorrência bem definido
- [ ] Data de término clara
- [ ] Título indica recorrência
- [ ] Descrição explica formato
- [ ] Precificação (individual vs pacote) decidida
- [ ] Capacidade por evento configurada
- [ ] Plano de divulgação pronto

**Eventos recorrentes bem executados constroem comunidades fortes e receita previsível! 🔁✨**
