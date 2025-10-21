# 💳 Tutorial: Criar Eventos Pagos com Ingressos

## Introdução

Monetize seus eventos com nosso sistema completo de venda de ingressos integrado ao Stripe. Este tutorial cobre tudo que você precisa saber para criar eventos pagos de sucesso.

## Pré-requisitos

Antes de criar eventos pagos, você precisa:

1. ✅ **Conta na plataforma** (verificada)
2. ✅ **Conta Stripe Connect** (configuração one-time)
3. ✅ **Documento de identidade** (para verificação Stripe)
4. ✅ **Conta bancária** (para receber pagamentos)

## Configurando Conta Stripe

### Primeira Vez

1. Ao criar primeiro evento pago, você será direcionado para configuração
2. Clique em **"Conectar com Stripe"**
3. Preencha informações:
   - Nome completo
   - CPF/CNPJ
   - Endereço
   - Dados bancários
4. Aguarde aprovação (geralmente 1-2 dias úteis)

### Verificação

Stripe pode solicitar:
- 📄 Documento com foto
- 🏦 Comprovante de conta bancária
- 🏢 Comprovante de endereço (para CNPJ)

**Dica:** Tenha documentos prontos para agilizar aprovação.

## Tipos de Precificação

### 1. Preço Único

Todos ingressos pelo mesmo valor.

**Quando usar:**
- Eventos simples
- Pequeno porte
- Primeira experiência com eventos pagos

**Exemplo:**
- Workshop de fotografia: R$ 50,00
- Show local: R$ 30,00

### 2. Múltiplos Tipos de Ingresso

Diferentes categorias com preços distintos.

**Quando usar:**
- Eventos médios/grandes
- Diferentes experiências
- Maximizar receita

**Exemplos:**

**Show:**
- 🎫 Pista: R$ 80,00
- 🎭 Camarote: R$ 150,00
- 💎 VIP (Meet & Greet): R$ 250,00

**Conferência:**
- 👤 Individual: R$ 200,00
- 🎓 Estudante: R$ 100,00
- 👥 Grupo (4+): R$ 150,00/pessoa

**Workshop:**
- 📚 Básico: R$ 120,00
- 📊 Intermediário: R$ 180,00
- 🏆 Avançado + Certificado: R$ 250,00

### 3. Lotes Progressivos

Preço aumenta conforme vendas ou tempo.

**Quando usar:**
- Incentivar compras antecipadas
- Eventos com longo prazo de venda
- Maximizar early birds

**Exemplo - Por Quantidade:**
```
1º Lote (100 ingressos): R$ 50,00
2º Lote (150 ingressos): R$ 70,00
3º Lote (100 ingressos): R$ 90,00
```

**Exemplo - Por Data:**
```
1º Lote (até 30 dias antes): R$ 80,00
2º Lote (30-15 dias antes): R$ 100,00
3º Lote (15 dias até evento): R$ 120,00
```

## Passo a Passo: Criando Evento Pago

### 1. Informações Básicas

Igual a qualquer evento:
- Título atrativo
- Descrição completa
- Data e horário
- Local no mapa
- Categoria
- Foto de capa profissional

### 2. Configuração de Ingressos

**Ativar Venda:**
1. Em "Tipo de Preço", selecione **"Pago"**
2. Escolha estratégia de precificação

**Preço Único:**
```
Nome do Ingresso: Ingresso Geral
Preço: R$ 50,00
Quantidade: 100
```

**Múltiplos Tipos:**
```
Tipo 1: Pista
  Preço: R$ 80,00
  Quantidade: 200
  Descrição: Acesso à pista de dança

Tipo 2: Camarote
  Preço: R$ 150,00
  Quantidade: 50
  Descrição: Área VIP com bar exclusivo
  Benefícios: Open bar, área reservada
```

**Lotes Progressivos:**
```
Lote 1:
  Nome: Super Early Bird
  Preço: R$ 50,00
  Quantidade: 50
  Válido até: 15/11/2025

Lote 2:
  Nome: Early Bird
  Preço: R$ 70,00
  Quantidade: 100
  Válido até: 30/11/2025

Lote 3:
  Nome: Regular
  Preço: R$ 90,00
  Quantidade: 150
  Válido até: Dia do evento
```

### 3. Política de Reembolso

Defina suas regras:

**Opções:**
- ✅ **Reembolso Total:** Até X dias antes
- ✅ **Reembolso Parcial:** 50% até X dias, depois não
- ✅ **Não Reembolsável:** Apenas em caso de cancelamento
- ✅ **Personalizada:** Sua própria política

**Exemplo Balanceado:**
```
- Até 7 dias antes: Reembolso total (menos taxa)
- 7-3 dias antes: Reembolso de 50%
- Menos de 3 dias: Sem reembolso
- Cancelamento do evento: Reembolso total automático
```

### 4. Taxas e Custos

**Taxa Stripe (você paga):**
- Cartão de crédito: 3,99% + R$ 0,40 por transação
- PIX: 0,99% por transação

**Você recebe:**
```
Ingresso vendido: R$ 100,00
Taxa Stripe (3,99%): R$ 3,99
Taxa fixa: R$ 0,40
─────────────────────────
Você recebe: R$ 95,61
```

**Nossa plataforma:** 0% de taxa extra! 🎉

### 5. Publicar Evento

Depois de configurar:
1. Revise todas informações
2. Confirme política de reembolso
3. Clique em **"Publicar Evento"**
4. Sistema ativa vendas automaticamente

## Gerenciando Vendas

### Dashboard do Organizador

Acesse estatísticas em tempo real:

**Visão Geral:**
- 💰 **Receita Total:** Quanto arrecadou
- 🎫 **Ingressos Vendidos:** Quantidade por tipo
- 📊 **Taxa de Conversão:** Visitas → Vendas
- 📈 **Gráfico de Vendas:** Evolução ao longo do tempo

**Por Tipo de Ingresso:**
- Quantidade vendida
- Quantidade disponível
- Receita por tipo
- % de conversão

**Últimas Vendas:**
- Nome do comprador
- Tipo de ingresso
- Valor
- Data/hora da compra

### Check-in no Evento

**Preparação:**
1. No dia do evento, acesse painel
2. Ative modo **"Check-in"**
3. Use câmera para escanear QR Codes

**Processo:**
1. Participante mostra QR Code (email ou celular)
2. Você escaneia com app
3. Sistema valida:
   - ✅ Ingresso válido → Entrada liberada
   - ❌ Já usado → Alerta de duplicata
   - ❌ Inválido → Ingresso falso/cancelado

**Controles:**
- Veja total de check-ins
- Lista de quem já entrou
- Lista de ausentes
- Busca manual por nome (se necessário)

### Cancelamentos e Reembolsos

**Se você cancelar o evento:**
1. Todos ingressos são reembolsados automaticamente
2. Emails enviados para todos compradores
3. Push notifications enviadas
4. Stripe processa reembolsos (2-10 dias úteis)

**Se comprador solicitar reembolso:**
1. Pedido aparece no painel
2. Você aprova ou nega (baseado em sua política)
3. Se aprovado, Stripe processa
4. Você arca com taxa Stripe (não retornável)

## Estratégias de Precificação

### Pesquisa de Mercado

Antes de definir preços:

1. **Eventos Similares:**
   - Busque eventos parecidos na plataforma
   - Note faixa de preço
   - Veja taxa de lotação

2. **Seu Público:**
   - Estudantes: Preço mais acessível
   - Profissionais: Podem pagar mais
   - Famílias: Considere pacotes

3. **Custos:**
   ```
   Local: R$ 1.000
   Som/luz: R$ 800
   Segurança: R$ 400
   Divulgação: R$ 300
   ─────────────────
   Total: R$ 2.500
   ```
   
   Se espera 100 pessoas:
   - Custo por pessoa: R$ 25,00
   - Margem desejada: 100%
   - **Preço: R$ 50,00**

### Psicologia de Preços

**Preços que Convertem:**
- R$ 49,90 > R$ 50,00
- R$ 99,00 > R$ 100,00
- R$ 197,00 > R$ 200,00

**Ancoragem:**
```
❌ Regular: R$ 80,00

✅ Regular: R$ 80,00 (De: R$ 120,00)
   Economia: R$ 40,00 (33% OFF)
```

**Escassez:**
```
⏰ Últimas 10 vagas do 1º lote!
🔥 Apenas 5 ingressos VIP restantes
⚡ Promoção termina em 48h
```

### Promoções e Descontos

**Cupons:**
- Crie códigos promocionais
- Defina % ou valor fixo de desconto
- Limite de usos
- Validade

**Exemplos:**
```
EARLYBIRD: 20% OFF (Primeiros 50 usos)
AMIGOS: R$ 10 OFF (Sem limite)
VIP2024: 2º ingresso 50% OFF
```

**Grupos:**
- Desconto para compras múltiplas
- Ex: "Compre 4, pague 3"

## Maximizando Vendas

### Landing Page Perfeita

**Checklist:**
- ✅ Foto de capa HD e atrativa
- ✅ Título claro sobre o evento
- ✅ Data, hora e local em destaque
- ✅ Descrição completa com programação
- ✅ Palestrantes/atrações com fotos
- ✅ Depoimentos (se tiver eventos anteriores)
- ✅ FAQ respondendo dúvidas comuns
- ✅ CTA claro: "Garanta seu Ingresso"

### Divulgação Estratégica

**Fase 1: Lançamento (30 dias antes)**
- Anúncio em redes sociais
- Email para sua base
- Grupos relevantes
- Parceiros e influencers
- Early bird incentiva urgência

**Fase 2: Aquecimento (15 dias antes)**
- Posts regulares com contagem regressiva
- Stories mostrando preparativos
- Teasers de atrações
- Depoimentos de quem já comprou

**Fase 3: Última Chance (7 dias antes)**
- Intensificar comunicação
- Destacar escassez ("70% vendido!")
- Último lote/preço final
- FOMO (Fear of Missing Out)

**Fase 4: Dia do Evento**
- Stories ao vivo
- Cobertura em tempo real
- Incentivar compartilhamento
- Marketing para próximo evento

### Use o Boost

Para eventos pagos, Boost tem ROI claro:

**Cálculo:**
```
Boost Ouro: R$ 69,90
Ingresso médio: R$ 80,00
Taxa Stripe: ~4%
Líquido por ingresso: R$ 76,80

Precisa vender: 1 ingresso extra para pagar Boost!
```

Qualquer venda adicional = lucro puro.

## Casos de Uso

### Workshop de Fotografia

**Setup:**
- Tipo: Evento único
- Preço: R$ 120,00
- Vagas: 20
- Inclui: Material didático + certificado

**Estratégia:**
- Lançamento com 10% OFF (R$ 108)
- Divulgação em grupos de fotografia
- Depoimentos de alunos anteriores
- Mini-aulas gratuitas como teaser

**Resultado:**
- Lotou em 10 dias
- Receita: R$ 2.400
- Custo: R$ 800 (local + material)
- **Lucro: R$ 1.600**

### Festival de Música

**Setup:**
- Tipo: Multi-dia (2 dias)
- Ingressos:
  - Pista (Dia 1): R$ 80
  - Pista (Dia 2): R$ 80
  - Passaporte (2 dias): R$ 140
  - VIP (2 dias): R$ 250
- Vagas: 500 por dia

**Estratégia:**
- 3 lotes progressivos
- Divulgação 2 meses antes
- Parceria com artistas (compartilham)
- Boost Diamante para alcance
- Aftermovie do ano anterior

**Resultado:**
- 450 ingressos vendidos (90%)
- Receita: ~R$ 52.000
- ROI positivo com lucro significativo

### Conferência de Tecnologia

**Setup:**
- Tipo: Evento corporativo (1 dia)
- Ingressos:
  - Estudante: R$ 100
  - Profissional: R$ 300
  - Empresarial (5+): R$ 250/pessoa
- Vagas: 200

**Estratégia:**
- Palestrantes renomados confirmados cedo
- Lote early bird com 40% OFF
- Networking como diferencial
- Certificado profissional incluído

**Resultado:**
- 180 ingressos vendidos
- Mix de públicos
- Networking valioso
- Primeira edição de evento recorrente

## Perguntas Frequentes

**Q: Quando recebo o dinheiro das vendas?**  
R: Stripe transfere para sua conta bancária em 2-7 dias úteis após cada venda.

**Q: Posso mudar o preço depois de publicar?**  
R: Sim, mas quem já comprou paga o preço anterior. Novos compradores veem novo preço.

**Q: O que acontece se cancelar o evento?**  
R: Reembolso automático para todos. Você pode perder taxa Stripe.

**Q: Posso vender ingressos offline também?**  
R: Sim! Marque como "cortesia" no sistema para controlar vagas.

**Q: Há limite mínimo/máximo de preço?**  
R: Mínimo: R$ 5,00. Máximo: R$ 10.000 por ingresso.

**Q: Preciso emitir nota fiscal?**  
R: Depende da sua situação fiscal. Consulte contador. Stripe fornece recibos automáticos.

**Q: Posso criar evento gratuito e depois tornar pago?**  
R: Não recomendado. Quem já confirmou presença pode ficar insatisfeito. Crie novo evento.

**Q: Funciona para eventos online?**  
R: Sim! No local, indique "Evento Online" e adicione link na descrição.

## Recursos Adicionais

- 📊 [Métricas e Analytics](./metricas-eventos.md)
- 🎯 [Estratégias de Marketing](./marketing-eventos.md)
- 💡 [Casos de Sucesso](./casos-sucesso.md)

---

**Checklist Final:**
- [ ] Conta Stripe configurada
- [ ] Preços pesquisados e definidos
- [ ] Política de reembolso clara
- [ ] Landing page completa
- [ ] Estratégia de divulgação pronta
- [ ] Plano de check-in definido

**Pronto para vender ingressos! 🎫**
