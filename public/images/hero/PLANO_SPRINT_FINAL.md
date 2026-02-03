# Plano de Sprint Final - IntegraPet

**Data de Início:** [INSERIR DATA]
**Data de Entrega:** [DATA + 21 dias]
**Equipe:** 2 desenvolvedores plenos
**Capacidade Total:** ~250 horas (21 dias × 6h produtivas × 2 devs)

---

## 1. Visão Geral do Projeto

### 1.1 Contexto Técnico

**IntegraPet** é uma aplicação Flutter que compila para 4 apps distintos:
- **App Clientes** - Mobile para usuários finais
- **Painel Empresas** - Web para empresas parceiras
- **Painel Admin** - Web administrativo interno
- **Painel Prestadores** - Web mobile-first para prestadores

**Stack:**
- Frontend: Flutter/Dart
- Backend: Node.js (API REST)
- Database: MongoDB
- Auth: Firebase Authentication
- Storage: Firebase Storage
- Push: Firebase Cloud Messaging

### 1.2 Estado Atual da Codebase

| Métrica | Quantidade |
|---------|------------|
| Models | 46 |
| Repositories | 31 |
| Endpoints mapeados | ~175 |
| Screens/Pages | 90+ |
| Widgets customizados | 50+ |

### 1.3 Funcionalidades a Entregar

| # | Funcionalidade | Horas Estimadas | Prioridade |
|---|----------------|-----------------|------------|
| 1 | Relatório de Rastreabilidade | 4h | Alta |
| 2 | Relatórios Gerais | 10h | Média |
| 3 | Import/Export Planilhas (TODOS módulos) | 90h | Alta |
| 4 | Notificações Push | 8h | Alta |
| 5 | Validade Lançamento Insumo | 2h | Alta |
| 6 | Integração FocusNFe | 25h | Alta |
| 7 | Cálculos Nível Garantia Etiqueta | 12h | Média |
| 8 | Ajustes Cadastro Pet | 4h | Média |
| 9 | Cálculo Consumo Pet | 10h | Média |
| 10 | Módulo Rotulagem | 8h | Baixa |
| 11 | Publicação App Store e Google Play | 20h | **Crítica** |
| **TOTAL** | | **~175h** | |

---

## 2. Análise Técnica Detalhada

### 2.1 Publicação App Store e Google Play

**Prioridade:** 🔴 CRÍTICA - Iniciar no Dia 1

**Justificativa:** Apple App Store tem review de 1-7 dias. Precisa submeter o mais cedo possível para ter margem de correção se rejeitado.

#### Pré-requisitos
- [ ] Conta Apple Developer ativa ($99/ano)
- [ ] Conta Google Play Console ativa ($25 única)
- [ ] Certificados de assinatura (iOS e Android)
- [ ] Ícones em todas as resoluções
- [ ] Screenshots para todas as telas principais
- [ ] Textos de descrição (PT-BR)
- [ ] Política de privacidade publicada

#### Tarefas iOS
```
1. Gerar certificado de distribuição no Apple Developer Portal
2. Criar App ID no Apple Developer Portal
3. Criar perfil de provisionamento de distribuição
4. Configurar Xcode com signing correto
5. Gerar build de release (flutter build ipa)
6. Criar app no App Store Connect
7. Preencher metadados (descrição, keywords, screenshots)
8. Upload via Transporter ou Xcode
9. Submeter para review
10. Acompanhar e responder feedback
```

#### Tarefas Android
```
1. Gerar keystore de release (se não existir)
2. Configurar key.properties
3. Gerar build de release (flutter build appbundle)
4. Criar app no Google Play Console
5. Preencher ficha da loja (descrição, screenshots)
6. Configurar classificação de conteúdo
7. Upload do AAB
8. Criar release de produção
9. Submeter para review
10. Acompanhar e responder feedback
```

#### Critérios de Aceite
- [ ] App iOS disponível na App Store brasileira
- [ ] App Android disponível na Google Play brasileira
- [ ] Deep links funcionando
- [ ] Push notifications funcionando em ambas plataformas

---

### 2.2 Integração FocusNFe

**Prioridade:** 🔴 ALTA

**Descrição:** Integrar com API FocusNFe para emissão automática de NF-e/NFC-e.

#### Pré-requisitos
- [ ] Conta FocusNFe (sandbox e produção)
- [ ] Token de API
- [ ] Certificado digital A1 da empresa (para produção)
- [ ] Documentação de campos obrigatórios por tipo de nota

#### Backend - Tarefas

**Model NotaFiscal:**
```javascript
{
  id: ObjectId,
  empresaId: ObjectId,
  pedidoId: ObjectId,
  tipo: 'nfe' | 'nfce',
  numero: Number,
  serie: Number,
  chaveAcesso: String (44 dígitos),
  status: 'pendente' | 'autorizada' | 'cancelada' | 'rejeitada',
  valorTotal: Number,
  xmlUrl: String,
  danfeUrl: String,
  focusNfeRef: String,
  erros: [{ codigo: String, mensagem: String }],
  dataCriacao: Date,
  dataAutorizacao: Date,
  dataCancelamento: Date
}
```

**Endpoints:**
```
POST   /notas-fiscais              - Emitir nota fiscal
GET    /notas-fiscais              - Listar notas da empresa
GET    /notas-fiscais/:id          - Buscar nota por ID
GET    /notas-fiscais/:id/xml      - Download XML
GET    /notas-fiscais/:id/danfe    - Download DANFE (PDF)
POST   /notas-fiscais/:id/cancelar - Cancelar nota
POST   /webhook/focusnfe           - Receber callbacks
```

**Service FocusNFe:**
```javascript
// Métodos necessários:
- emitirNFe(dadosNota)
- emitirNFCe(dadosNota)
- consultarNota(ref)
- cancelarNota(ref, justificativa)
- baixarXml(ref)
- baixarDanfe(ref)
```

#### Frontend - Tarefas

**Model (lib/shared/models/nota_fiscal.dart):**
```dart
class NotaFiscal {
  String id;
  String empresaId;
  String pedidoId;
  String tipo; // 'nfe' ou 'nfce'
  int numero;
  int serie;
  String? chaveAcesso;
  StatusNotaFiscal status;
  double valorTotal;
  String? xmlUrl;
  String? danfeUrl;
  DateTime dataCriacao;
  DateTime? dataAutorizacao;
}
```

**Repository (lib/shared/repositorios/nota_fiscal_repository.dart):**
```dart
class NotaFiscalRepository {
  static Future<NotaFiscal> emitir(String pedidoId, String tipo);
  static Future<List<NotaFiscal>> listar({String? status, DateTime? dataInicio});
  static Future<NotaFiscal> buscarPorId(String id);
  static Future<List<int>> baixarXml(String id);
  static Future<List<int>> baixarDanfe(String id);
  static Future<NotaFiscal> cancelar(String id, String justificativa);
}
```

**Telas:**
```
- Botão "Emitir NF" no PedidoDialog (painel empresas)
- Dialog de confirmação de emissão
- Lista de notas fiscais (nova aba ou página)
- Visualização de nota com download XML/DANFE
- Dialog de cancelamento
```

#### Critérios de Aceite
- [ ] Empresa consegue emitir NF-e a partir de um pedido
- [ ] Nota aparece no histórico com status correto
- [ ] Download de XML funciona
- [ ] Download de DANFE (PDF) funciona
- [ ] Cancelamento funciona (dentro do prazo legal)
- [ ] Erros da SEFAZ são exibidos de forma clara

---

### 2.3 Import/Export Planilhas

**Prioridade:** 🔴 ALTA

**Descrição:** Sistema completo de importação e exportação de dados via Excel/CSV para todos os módulos.

#### Arquitetura Geral

```
┌─────────────────────────────────────────────────────────────┐
│                      FLUXO DE IMPORTAÇÃO                    │
├─────────────────────────────────────────────────────────────┤
│  1. Usuário faz upload da planilha (Firebase Storage)       │
│  2. Frontend envia POST /importacao com URL e tipo          │
│  3. Backend cria registro com status "processando"          │
│  4. Backend processa em background (Bull Queue)             │
│  5. Frontend faz polling do status                          │
│  6. Ao concluir, exibe estatísticas (novos, atualizados,    │
│     erros)                                                  │
│  7. Se erros, permite download de planilha de erros         │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                      FLUXO DE EXPORTAÇÃO                    │
├─────────────────────────────────────────────────────────────┤
│  1. Usuário clica em "Exportar" no módulo desejado          │
│  2. Frontend chama GET /{modulo}/exportar                   │
│  3. Backend gera planilha e retorna bytes                   │
│  4. Frontend faz download do arquivo                        │
└─────────────────────────────────────────────────────────────┘
```

#### Backend - Model RegistroImportacao

```javascript
{
  id: ObjectId,
  urlPlanilha: String,
  tipoImportacao: String, // 'produto', 'insumo', etc.
  usuarioId: ObjectId,
  empresaId: ObjectId | null,
  status: 'aguardando' | 'processando' | 'concluida' | 'erro',
  estatisticas: {
    totalLinhas: Number,
    novosCadastrados: Number,
    registrosAtualizados: Number,
    erros: [{
      linha: Number,
      campo: String,
      mensagem: String
    }]
  },
  urlPlanilhaErros: String | null,
  criadoEm: Date,
  iniciadoEm: Date,
  finalizadoEm: Date
}
```

#### Backend - Endpoints

```
POST   /importacao                    - Iniciar importação
GET    /importacao/:id                - Status da importação
GET    /importacao/:id/erros          - Download planilha de erros

GET    /empresas/exportar             - Exportar empresas (admin)
GET    /produtos/exportar             - Exportar produtos
GET    /insumos/exportar              - Exportar insumos
GET    /fornecedores/exportar         - Exportar fornecedores
GET    /categorias-produto/exportar   - Exportar categorias
GET    /taxas-entrega/exportar        - Exportar taxas
GET    /equipe/exportar               - Exportar funcionários
GET    /clientes/exportar             - Exportar clientes
GET    /pedidos/exportar              - Exportar pedidos
GET    /ordens-producao/exportar      - Exportar ordens
GET    /rotas-entrega/exportar        - Exportar rotas
GET    /transacoes/exportar           - Exportar transações
GET    /documentos/exportar           - Exportar documentos
GET    /prestadores/exportar          - Exportar prestadores (admin)
GET    /tipos-insumo/exportar         - Exportar tipos de insumo
```

#### Módulos e Campos para Import/Export

**Produtos:**
```
| Campo | Exportar | Importar | Obrigatório |
|-------|----------|----------|-------------|
| numero | ✅ | ✅ | Não (auto) |
| nome | ✅ | ✅ | Sim |
| descricao | ✅ | ✅ | Não |
| categoria (numero) | ✅ | ✅ | Não |
| tamanho_porcao | ✅ | ✅ | Sim |
| unidade_medida | ✅ | ✅ | Sim |
| preco_venda | ✅ | ✅ | Sim |
| capacidade_produtiva | ✅ | ✅ | Não |
| dias_validade | ✅ | ✅ | Não |
| valor_energetico | ✅ | ✅ | Não |
| classificacao | ✅ | ✅ | Não |
| imagem_url | ✅ | ✅ | Não |
| ativo | ✅ | ✅ | Não |
```

**Insumos:**
```
| Campo | Exportar | Importar | Obrigatório |
|-------|----------|----------|-------------|
| codigo | ✅ | ✅ | Sim |
| nome | ✅ | ✅ | Sim |
| tipo_insumo (numero) | ✅ | ✅ | Não |
| unidade_medida | ✅ | ✅ | Sim |
| estoque_minimo | ✅ | ✅ | Não |
| estoque_ideal | ✅ | ✅ | Não |
| preco_medio | ✅ | ✅ | Não |
| fator_correcao | ✅ | ✅ | Não |
| ativo | ✅ | ✅ | Não |
```

**Fornecedores:**
```
| Campo | Exportar | Importar | Obrigatório |
|-------|----------|----------|-------------|
| numero | ✅ | ✅ | Não (auto) |
| nome | ✅ | ✅ | Sim |
| cnpj | ✅ | ✅ | Não |
| telefone | ✅ | ✅ | Não |
| email | ✅ | ✅ | Não |
| endereco | ✅ | ✅ | Não |
| observacoes | ✅ | ✅ | Não |
| ativo | ✅ | ✅ | Não |
```

*[Documentar demais módulos seguindo mesmo padrão]*

#### Frontend - Tarefas

**Model (lib/shared/models/registro_importacao.dart):**
```dart
class RegistroImportacao {
  String id;
  String urlPlanilha;
  String tipoImportacao;
  StatusImportacao status;
  EstatisticasImportacao? estatisticas;
  String? urlPlanilhaErros;
  DateTime criadoEm;
  DateTime? finalizadoEm;
}

class EstatisticasImportacao {
  int totalLinhas;
  int novosCadastrados;
  int registrosAtualizados;
  List<ErroImportacao> erros;
}
```

**Repository (lib/shared/repositorios/importacao_repository.dart):**
```dart
class ImportacaoRepository {
  static Future<RegistroImportacao> iniciar(String urlPlanilha, String tipo);
  static Future<RegistroImportacao> buscarStatus(String id);
  static Future<List<int>> baixarErros(String id);
}
```

**Widgets/Telas:**
```
- ImportacaoDialog: Upload de arquivo + seleção de tipo
- ImportacaoProgressWidget: Exibe status em tempo real
- ImportacaoResultadoDialog: Estatísticas finais
- Botão "Importar" em cada módulo
- Botão "Exportar" em cada módulo
```

#### Critérios de Aceite
- [ ] Upload de planilha funciona (xlsx e csv)
- [ ] Importação processa em background sem travar UI
- [ ] Progresso é exibido em tempo real
- [ ] Estatísticas finais são exibidas corretamente
- [ ] Erros são listados com linha e mensagem
- [ ] Exportação gera arquivo válido com todos os campos
- [ ] Funciona para todos os 15 módulos listados

---

### 2.4 Notificações Push

**Prioridade:** 🔴 ALTA

**Descrição:** Sistema de notificações push para eventos críticos.

#### Eventos que Disparam Notificações

| Evento | Destinatário | Título | Mensagem |
|--------|--------------|--------|----------|
| Novo pedido | Empresa | "Novo pedido #{numero}" | "Cliente {nome} fez um pedido de {valor}" |
| Pedido confirmado | Cliente | "Pedido confirmado" | "Seu pedido #{numero} foi confirmado" |
| Pedido em produção | Cliente | "Preparando seu pedido" | "Seu pedido #{numero} está sendo preparado" |
| Pedido pronto | Cliente | "Pedido pronto!" | "Seu pedido #{numero} está pronto" |
| Saiu para entrega | Cliente | "Saiu para entrega" | "Seu pedido #{numero} está a caminho" |
| Pedido entregue | Cliente | "Pedido entregue" | "Seu pedido #{numero} foi entregue" |
| Pedido cancelado | Cliente/Empresa | "Pedido cancelado" | "O pedido #{numero} foi cancelado" |
| Orçamento respondido | Cliente | "Orçamento pronto!" | "Seu orçamento foi respondido" |
| Orçamento expirando | Cliente | "Orçamento expirando" | "Seu orçamento expira em {dias} dias" |
| Lote vencendo | Empresa | "Lote próximo do vencimento" | "{insumo} lote {numero} vence em {dias} dias" |
| Estoque baixo | Empresa | "Estoque baixo" | "{insumo} está com estoque crítico" |

#### Backend - Tarefas

**Model Notificacao:**
```javascript
{
  id: ObjectId,
  usuarioId: ObjectId,
  titulo: String,
  mensagem: String,
  tipo: String, // 'pedido', 'orcamento', 'estoque', 'producao'
  dados: {
    pedidoId: ObjectId,
    // outros dados para deep linking
  },
  lida: Boolean,
  dataCriacao: Date,
  dataLeitura: Date
}
```

**Endpoints:**
```
GET    /notificacoes              - Listar notificações do usuário
PUT    /notificacoes/:id/ler      - Marcar como lida
PUT    /notificacoes/ler-todas    - Marcar todas como lidas
DELETE /notificacoes/:id          - Deletar notificação
```

**Service de Push:**
```javascript
class PushNotificationService {
  async enviarParaUsuario(usuarioId, titulo, mensagem, dados);
  async enviarParaEmpresa(empresaId, titulo, mensagem, dados);
  async enviarParaTodos(tipo, titulo, mensagem, dados); // Admin only
}
```

#### Frontend - Tarefas

**Model (lib/shared/models/notificacao.dart):**
```dart
class Notificacao {
  String id;
  String titulo;
  String mensagem;
  TipoNotificacao tipo;
  Map<String, dynamic>? dados;
  bool lida;
  DateTime dataCriacao;
}
```

**Repository + Telas:**
- NotificacaoRepository com CRUD
- NotificacoesPage (lista com swipe para deletar)
- Badge de contagem no ícone
- Deep linking ao clicar (abrir pedido, orçamento, etc.)

#### Critérios de Aceite
- [ ] Push chega no dispositivo quando app fechado
- [ ] Push chega quando app em background
- [ ] Notificação in-app quando app aberto
- [ ] Deep linking funciona corretamente
- [ ] Lista de notificações exibe histórico
- [ ] Marcar como lida funciona
- [ ] Badge atualiza em tempo real

---

### 2.5 Validade Lançamento Insumo

**Prioridade:** 🟢 BAIXA (já existe parcialmente)

**Descrição:** Garantir que campo de validade está funcionando corretamente no cadastro de insumos.

#### Verificações Necessárias
- [ ] Campo `dataValidade` existe no Model Lote ✅
- [ ] Campo está no formulário de registro de compra ✅
- [ ] Validação: não permitir data passada
- [ ] Alerta visual se validade < 30 dias
- [ ] Ordenação por vencimento na lista de lotes

#### Melhorias Sugeridas
```dart
// Adicionar no RegistrarCompraDialog:
if (dataValidade.isBefore(DateTime.now())) {
  // Erro: data de validade não pode ser no passado
}

if (dataValidade.difference(DateTime.now()).inDays < 30) {
  // Aviso: validade próxima do vencimento
}
```

#### Critérios de Aceite
- [ ] Não é possível cadastrar lote com validade passada
- [ ] Aviso visual aparece se validade < 30 dias
- [ ] Lista de lotes mostra indicador de "vencimento próximo"

---

### 2.6 Cálculos Nível Garantia Etiqueta

**Prioridade:** 🟡 MÉDIA

**Descrição:** Implementar cálculos nutricionais para etiquetas de produtos.

#### Dependência Externa
⚠️ **BLOQUEADOR:** Aguardando fórmulas oficiais do MAPA do cliente

#### Campos Necessários no Model Produto

```dart
// Adicionar ao Model Produto:
double? proteina;           // % de proteína
double? gordura;            // % de gordura (extrato etéreo)
double? fibraBruta;         // % de fibra bruta
double? materiaMineralCinzas; // % de matéria mineral
double? umidade;            // % de umidade
double? calcio;             // % de cálcio (opcional)
double? fosforo;            // % de fósforo (opcional)

// Campos calculados:
double? carboidratos;       // Calculado: 100 - (proteina + gordura + fibra + cinzas + umidade)
double? energiaMetabolizavel; // kcal/kg - fórmula específica
```

#### Fórmulas (exemplo - confirmar com cliente)

```dart
// Energia Metabolizável (EM) - Fórmula de Atwater Modificada
// EM (kcal/kg) = (3.5 × proteína) + (8.5 × gordura) + (3.5 × carboidratos)

double calcularEnergiaMetabolizavel(Produto p) {
  final carboidratos = 100 - (p.proteina + p.gordura + p.fibraBruta +
                               p.materiaMineralCinzas + p.umidade);
  return (3.5 * p.proteina) + (8.5 * p.gordura) + (3.5 * carboidratos);
}
```

#### Etiqueta - Campos Obrigatórios (MAPA)

```
┌─────────────────────────────────────────┐
│         NOME DO PRODUTO                 │
│         Alimento completo para cães     │
├─────────────────────────────────────────┤
│  NÍVEIS DE GARANTIA                     │
│  Umidade (máx.).............. XX,X %    │
│  Proteína bruta (mín.)....... XX,X %    │
│  Extrato etéreo (mín.)....... XX,X %    │
│  Matéria fibrosa (máx.)...... XX,X %    │
│  Matéria mineral (máx.)...... XX,X %    │
│  Cálcio (mín. - máx.)........ X,X-X,X % │
│  Fósforo (mín.).............. X,X %     │
├─────────────────────────────────────────┤
│  Energia metabolizável: XXXX kcal/kg    │
├─────────────────────────────────────────┤
│  LOTE: XXXXX    VAL: DD/MM/AAAA         │
│  Peso líquido: XXX g                    │
└─────────────────────────────────────────┘
```

#### Critérios de Aceite
- [ ] Campos nutricionais no cadastro de produto
- [ ] Cálculo automático de carboidratos
- [ ] Cálculo automático de energia metabolizável
- [ ] Etiqueta gerada com todos os campos obrigatórios
- [ ] Formatação correta (casas decimais, unidades)

---

### 2.7 Ajustes Cadastro Pet

**Prioridade:** 🟡 MÉDIA

**Descrição:** Adicionar campos para melhor rastreamento nutricional.

#### Campos a Adicionar

```dart
// Model Pet - campos novos:
String? especie;           // 'cachorro', 'gato', 'outro'
String? porte;             // 'mini', 'pequeno', 'medio', 'grande', 'gigante'
String? nivelAtividade;    // 'sedentario', 'moderado', 'ativo', 'muito_ativo'
String? condicaoEspecial;  // 'normal', 'castrado', 'gestante', 'lactante', 'senior'
double? pesoIdeal;         // Peso ideal do pet (para controle)
String? condicaoCorporal;  // 'abaixo', 'ideal', 'acima', 'obeso' (BCS)
```

#### Atualizações Necessárias

**Backend:**
- Adicionar campos no schema do MongoDB
- Atualizar validações

**Frontend:**
- Atualizar `Pet.fromJson()` e `Pet.toJson()`
- Adicionar campos no `CriarPetDialog`
- Adicionar dropdowns para campos enum

#### Critérios de Aceite
- [ ] Todos os campos novos funcionando no cadastro
- [ ] Campos são opcionais (não quebra pets existentes)
- [ ] Dropdowns com opções corretas
- [ ] Dados salvos e recuperados corretamente

---

### 2.8 Cálculo Consumo Pet

**Prioridade:** 🟡 MÉDIA

**Descrição:** Calcular automaticamente a porção recomendada baseado nos dados do pet.

#### Dependência
- Campos do item 2.7 (Ajustes Cadastro Pet)
- Fórmulas nutricionais do cliente

#### Fórmulas (exemplo - confirmar com cliente)

```dart
// Necessidade Energética de Manutenção (NEM)
// NEM = RER × Fator de Atividade

// RER (Requisito Energético de Repouso):
// Para cães: RER = 70 × (peso em kg)^0.75
// Para gatos: RER = 70 × (peso em kg)^0.67

double calcularRER(Pet pet) {
  if (pet.especie == 'gato') {
    return 70 * pow(pet.peso!, 0.67);
  }
  return 70 * pow(pet.peso!, 0.75);
}

// Fatores de atividade:
// Sedentário: 1.2
// Moderado: 1.4
// Ativo: 1.6
// Muito ativo: 1.8
// Castrado: reduzir 20%
// Gestante: aumentar 25-50%
// Lactante: aumentar 100-300%
// Senior (>7 anos): reduzir 10-20%

double calcularNEM(Pet pet) {
  final rer = calcularRER(pet);
  var fator = _getFatorAtividade(pet.nivelAtividade);

  if (pet.condicaoEspecial == 'castrado') fator *= 0.8;
  if (pet.condicaoEspecial == 'gestante') fator *= 1.3;
  if (pet.condicaoEspecial == 'lactante') fator *= 2.0;
  if (pet.idade > 7) fator *= 0.9;

  return rer * fator;
}

// Porção diária = NEM / EM do produto (kcal/kg) × 1000
double calcularPorcaoDiaria(Pet pet, Produto produto) {
  final nem = calcularNEM(pet);
  final emProduto = produto.energiaMetabolizavel ?? 3500; // default
  return (nem / emProduto) * 1000; // em gramas
}
```

#### Integração na UI

```dart
// Na tela SelecionarPorcaoScreen:
// 1. Calcular porção recomendada
final porcaoRecomendada = calcularPorcaoDiaria(pet, produto);

// 2. Exibir como sugestão
Text('Porção recomendada: ${porcaoRecomendada.toStringAsFixed(0)}g/dia');

// 3. Slider começa no valor recomendado (não em 100%)
final valorInicial = porcaoRecomendada / produto.tamanhoPorcao;
```

#### Critérios de Aceite
- [ ] Cálculo de NEM funciona para cães e gatos
- [ ] Fatores de condição especial aplicados corretamente
- [ ] Porção recomendada exibida na tela de seleção
- [ ] Slider inicia no valor recomendado
- [ ] Usuário pode ajustar manualmente

---

### 2.9 Relatório de Rastreabilidade

**Prioridade:** 🟢 BAIXA (backend pronto)

**Descrição:** Tela para rastrear produtos desde o pedido até os insumos/fornecedores.

#### Fluxo de Rastreabilidade

```
PEDIDO #123
    └── Item: Ração Premium 500g (x2)
            └── Ordem de Produção #456
                    ├── Insumo: Frango desfiado
                    │       └── Lote: FRG-2024-001
                    │               └── Fornecedor: Frigorífico ABC
                    │               └── Validade: 15/02/2025
                    │               └── NF Compra: 12345
                    │
                    ├── Insumo: Arroz integral
                    │       └── Lote: ARZ-2024-015
                    │               └── Fornecedor: Grãos & Cia
                    │
                    └── Insumo: Cenoura
                            └── Lote: CEN-2024-008
                                    └── Fornecedor: Hortifruti XYZ
```

#### Tela Frontend

```dart
// RastreabilidadeScreen
// - Campo de busca (número do pedido ou lote)
// - Resultado em formato de árvore expansível
// - Cada nó clicável para ver detalhes
// - Botão "Exportar PDF" com rastreio completo
```

#### Critérios de Aceite
- [ ] Busca por número de pedido funciona
- [ ] Busca reversa por lote funciona (quais pedidos usaram)
- [ ] Árvore de rastreabilidade exibe corretamente
- [ ] Detalhes de cada nível acessíveis
- [ ] Exportar PDF com rastreio completo

---

### 2.10 Módulo Rotulagem

**Prioridade:** 🟢 BAIXA

**Descrição:** Extrair funcionalidades de etiquetas para módulo dedicado.

#### Funcionalidades

```
1. Configuração de templates de etiqueta
   - Tamanho (largura × altura)
   - Campos a exibir
   - Fonte e tamanhos
   - Logo da empresa

2. Preview de etiqueta
   - Visualização antes de imprimir
   - Zoom in/out

3. Impressão
   - PDF para impressoras comuns
   - ZPL para impressoras Zebra
   - Impressão em lote

4. Histórico
   - Etiquetas geradas
   - Reimpressão
```

#### Critérios de Aceite
- [ ] Configuração de template funciona
- [ ] Preview exibe etiqueta corretamente
- [ ] Impressão PDF funciona
- [ ] Impressão Zebra funciona (se aplicável)
- [ ] Histórico de etiquetas acessível

---

### 2.11 Relatórios Gerais

**Prioridade:** 🟡 MÉDIA

**Descrição:** Tela centralizada para geração de relatórios gerenciais.

#### Tipos de Relatório

| Relatório | Filtros | Formato |
|-----------|---------|---------|
| Vendas | Período, produto, categoria | PDF, Excel |
| Financeiro | Período, tipo transação | PDF, Excel |
| Estoque | Data, insumo, fornecedor | PDF, Excel |
| Produção | Período, produto, status | PDF, Excel |
| Entregas | Período, entregador, status | PDF, Excel |
| Clientes | Período, valor gasto | PDF, Excel |

#### Critérios de Aceite
- [ ] Tela de relatórios acessível no menu
- [ ] Todos os tipos de relatório disponíveis
- [ ] Filtros funcionam corretamente
- [ ] Geração em PDF funciona
- [ ] Geração em Excel funciona
- [ ] Download automático após geração

---

## 3. Estrutura do Jira

### 3.1 Criar Projeto

```
Nome do Projeto: IntegraPet - Sprint Final
Chave: IPET
Tipo: Scrum
```

### 3.2 Épicos (Criar 11)

| Chave | Nome | Descrição |
|-------|------|-----------|
| IPET-E1 | Publicação nas Lojas | Publicar apps na App Store e Google Play |
| IPET-E2 | Integração Fiscal | Integração com FocusNFe para emissão de NF-e |
| IPET-E3 | Import/Export | Sistema de importação e exportação de planilhas |
| IPET-E4 | Notificações Push | Sistema de notificações push |
| IPET-E5 | Controle de Validade | Melhorias no controle de validade de insumos |
| IPET-E6 | Cálculos Nutricionais | Cálculos de níveis de garantia para etiquetas |
| IPET-E7 | Cadastro de Pets | Melhorias no cadastro de pets |
| IPET-E8 | Consumo Pet | Cálculo automático de consumo |
| IPET-E9 | Rastreabilidade | Relatório de rastreabilidade de produtos |
| IPET-E10 | Rotulagem | Módulo de rotulagem e etiquetas |
| IPET-E11 | Relatórios | Relatórios gerenciais |

### 3.3 Histórias de Usuário por Épico

#### IPET-E1: Publicação nas Lojas

```
IPET-1: [iOS] Configurar certificados e provisioning profiles
  - Gerar certificado de distribuição
  - Criar App ID
  - Criar provisioning profile
  Story Points: 2

IPET-2: [iOS] Preparar metadados da App Store
  - Screenshots (6.5", 5.5")
  - Descrição, keywords, categoria
  - Política de privacidade
  Story Points: 3

IPET-3: [iOS] Build e submissão
  - Gerar build de release
  - Upload para App Store Connect
  - Submeter para review
  Story Points: 2

IPET-4: [Android] Configurar keystore e assinatura
  - Gerar/configurar keystore
  - Configurar key.properties
  Story Points: 1

IPET-5: [Android] Preparar metadados da Google Play
  - Screenshots
  - Descrição, categoria
  - Classificação de conteúdo
  Story Points: 2

IPET-6: [Android] Build e submissão
  - Gerar AAB de release
  - Upload para Google Play Console
  - Criar release e submeter
  Story Points: 2
```

#### IPET-E2: Integração Fiscal

```
IPET-10: [BE] Criar model NotaFiscal
  Story Points: 2

IPET-11: [BE] Implementar service FocusNFe
  - Autenticação
  - Emissão NF-e/NFC-e
  - Consulta
  - Cancelamento
  Story Points: 5

IPET-12: [BE] Criar endpoints de notas fiscais
  Story Points: 3

IPET-13: [BE] Implementar webhook FocusNFe
  Story Points: 2

IPET-14: [FE] Criar model NotaFiscal
  Story Points: 1

IPET-15: [FE] Criar NotaFiscalRepository
  Story Points: 2

IPET-16: [FE] Implementar botão "Emitir NF" no pedido
  Story Points: 2

IPET-17: [FE] Criar tela de listagem de notas fiscais
  Story Points: 3

IPET-18: [FE] Implementar download XML/DANFE
  Story Points: 2

IPET-19: [FE] Implementar cancelamento de nota
  Story Points: 2
```

#### IPET-E3: Import/Export

```
IPET-20: [BE] Criar model RegistroImportacao
  Story Points: 2

IPET-21: [BE] Implementar endpoint de importação
  Story Points: 3

IPET-22: [BE] Implementar processador de importação (queue)
  Story Points: 5

IPET-23: [BE] Implementar importação de Produtos
  Story Points: 3

IPET-24: [BE] Implementar importação de Insumos
  Story Points: 3

IPET-25: [BE] Implementar importação de Fornecedores
  Story Points: 2

IPET-26: [BE] Implementar importação de Categorias
  Story Points: 2

IPET-27: [BE] Implementar importação de Equipe
  Story Points: 2

IPET-28: [BE] Implementar importação de Taxas
  Story Points: 2

IPET-29: [BE] Implementar importação de Transações
  Story Points: 2

IPET-30: [BE] Implementar importação de Tipos Insumo
  Story Points: 1

IPET-31: [BE] Implementar exportação de Produtos
  Story Points: 2

IPET-32: [BE] Implementar exportação de Insumos
  Story Points: 2

IPET-33: [BE] Implementar exportação de demais módulos
  Story Points: 5

IPET-40: [FE] Criar model RegistroImportacao
  Story Points: 1

IPET-41: [FE] Criar ImportacaoRepository
  Story Points: 2

IPET-42: [FE] Criar ImportacaoDialog (upload)
  Story Points: 3

IPET-43: [FE] Criar widget de progresso de importação
  Story Points: 2

IPET-44: [FE] Criar dialog de resultado/erros
  Story Points: 2

IPET-45: [FE] Adicionar botões Import/Export em cada módulo
  Story Points: 3
```

#### IPET-E4: Notificações Push

```
IPET-50: [BE] Criar model Notificacao
  Story Points: 1

IPET-51: [BE] Criar service de envio de push
  Story Points: 3

IPET-52: [BE] Implementar triggers de notificação
  Story Points: 3

IPET-53: [BE] Criar endpoints de notificações
  Story Points: 2

IPET-54: [FE] Criar model Notificacao
  Story Points: 1

IPET-55: [FE] Criar NotificacaoRepository
  Story Points: 1

IPET-56: [FE] Criar NotificacoesPage
  Story Points: 2

IPET-57: [FE] Implementar deep linking
  Story Points: 2

IPET-58: [FE] Implementar badge de não lidas
  Story Points: 1
```

#### IPET-E5 a E11: (Criar histórias similares)

*[Seguir mesmo padrão para os demais épicos]*

---

## 4. Configuração das Sprints no Jira

### 4.1 Criar 3 Sprints

```
Sprint 1: Semana 1 (Dias 1-7)
Sprint 2: Semana 2 (Dias 8-14)
Sprint 3: Semana 3 (Dias 15-21)
```

### 4.2 Distribuição das Histórias

#### Sprint 1 (Foco: Publicação + Início Backend)

**Dev 1 (Backend):**
- IPET-10, 11, 12, 13 (FocusNFe backend)
- IPET-20, 21, 22 (Import/Export estrutura)

**Dev 2 (Frontend):**
- IPET-1, 2, 3 (iOS)
- IPET-4, 5, 6 (Android)
- IPET-14, 15 (Model e Repository NF)

**Total Sprint 1:** ~50 Story Points

---

#### Sprint 2 (Foco: Import/Export + Continuação)

**Dev 1 (Backend):**
- IPET-23 a 33 (Import/Export módulos)
- IPET-50, 51, 52, 53 (Notificações backend)

**Dev 2 (Frontend):**
- IPET-16, 17, 18, 19 (NF-e frontend completo)
- IPET-40 a 45 (Import/Export frontend)

**Total Sprint 2:** ~55 Story Points

---

#### Sprint 3 (Foco: Finalização + Polimento)

**Dev 1 (Backend):**
- Cálculos nutricionais (backend)
- Campos Pet (backend)
- Consumo Pet (backend)
- Buffer para bugs

**Dev 2 (Frontend):**
- IPET-54 a 58 (Notificações frontend)
- Rastreabilidade
- Relatórios
- Rotulagem
- Acompanhar reviews das lojas

**Total Sprint 3:** ~50 Story Points

---

### 4.3 Board Customizado

**Colunas:**
```
To Do | In Progress | Code Review | Testing | Done
```

**Swimlanes:**
```
- Backend
- Frontend iOS
- Frontend Android
- Frontend Web
```

**Labels:**
```
- blocker
- bug
- backend
- frontend
- ios
- android
- urgente
```

---

## 5. Definition of Done (DoD)

Uma história é considerada DONE quando:

- [ ] Código implementado e funcionando
- [ ] Testes manuais realizados
- [ ] Code review aprovado (se aplicável)
- [ ] Sem erros no `flutter analyze`
- [ ] Build de debug funciona em iOS, Android e Web
- [ ] Documentação atualizada (se necessário)
- [ ] Merge na branch develop

---

## 6. Cerimônias Sugeridas

| Cerimônia | Frequência | Duração | Participantes |
|-----------|------------|---------|---------------|
| Daily Standup | Diária | 15 min | Devs |
| Sprint Planning | Início de sprint | 1h | Devs + PM |
| Sprint Review | Fim de sprint | 30 min | Devs + Stakeholders |
| Retrospectiva | Fim de sprint | 30 min | Devs |

---

## 7. Riscos e Mitigações

| Risco | Probabilidade | Impacto | Mitigação |
|-------|---------------|---------|-----------|
| Rejeição App Store | Média | Alto | Submeter cedo, ter buffer |
| FocusNFe indisponível | Baixa | Alto | Usar sandbox, mock para testes |
| Fórmulas atrasam | Alta | Médio | Começar estrutura, esperar dados |
| Escopo cresce | Alta | Alto | Controlar rigorosamente |
| Bug crítico em produção | Média | Alto | Testes extensivos |

---

## 8. Contatos e Recursos

| Recurso | Link/Contato |
|---------|--------------|
| Repositório | [URL do Git] |
| API Produção | https://integrapet-api-xxx.run.app |
| Firebase Console | [URL] |
| App Store Connect | [URL] |
| Google Play Console | [URL] |
| FocusNFe Docs | https://focusnfe.com.br/doc/ |
| Jira | [URL do projeto] |

---

## 9. Checklist Pré-Sprint

### Antes de começar:

- [ ] Acesso ao repositório Git
- [ ] Ambiente Flutter configurado
- [ ] Acesso ao Firebase Console
- [ ] Credenciais FocusNFe (sandbox)
- [ ] Conta Apple Developer verificada
- [ ] Conta Google Play Console verificada
- [ ] Jira configurado com épicos e histórias
- [ ] Daily marcada no calendário
- [ ] Canal de comunicação definido (Slack/Discord/Teams)

---

**Documento criado em:** [DATA]
**Última atualização:** [DATA]
**Versão:** 1.0
