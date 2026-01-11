# ✅ Tasks - Novidade Urbana (Site + CMS)

## Visão Geral do Projeto

Este é um projeto completo com:
- **Site público:** Home, Projetos, Artistas, Diretores, Sobre, Contato
- **Painel Admin:** CMS completo com CRUD
- **SEO Analyzer:** Módulo estilo RankMath
- **Deploy:** VPS Linux com PostgreSQL

---

## Fase 1: Setup Inicial
**Tempo estimado: 30-45 min**

### 1.1 Criar projeto e instalar dependências
```bash
npx create-next-app@latest novidade-urbana --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd novidade-urbana

# Frontend
npm install framer-motion react-hook-form zod @hookform/resolvers lucide-react

# Backend/Auth
npm install prisma @prisma/client next-auth bcryptjs
npm install -D @types/bcryptjs

# Editor
npm install @tiptap/react @tiptap/starter-kit @tiptap/extension-image @tiptap/extension-link @tiptap/extension-placeholder @tiptap/extension-heading @tiptap/extension-bullet-list @tiptap/extension-ordered-list @tiptap/extension-blockquote @tiptap/extension-code-block

# Utilitários
npm install slugify reading-time date-fns clsx tailwind-merge
```

### 1.2 Inicializar Prisma
```bash
npx prisma init
```
- [ ] Configurar `DATABASE_URL` no `.env`
- [ ] Copiar schema do arquivo `DATABASE.md`

### 1.3 Estrutura de pastas
- [ ] Criar todas as pastas conforme `STRUCTURE.md`
- [ ] Criar arquivos placeholder

### 1.4 Configurar Tailwind
- [ ] Adicionar cores brand (yellow, black, white, gray, orange)
- [ ] Adicionar fontFamily customizada
- [ ] Adicionar spacing customizado

### 1.5 Configurar fontes
- [ ] Adicionar arquivos da fonte (ou usar fallback)
- [ ] Criar `src/lib/fonts.ts`

### 1.6 Configurar globals.css
- [ ] Classes utilitárias
- [ ] Variáveis CSS
- [ ] Estilos base

---

## Fase 2: Database e Auth
**Tempo estimado: 1-2 horas**

### 2.1 Schema Prisma
- [ ] Criar schema completo (ver `DATABASE.md`)
- [ ] Rodar migration inicial
```bash
npx prisma migrate dev --name init
```

### 2.2 Prisma Client
- [ ] Criar `src/lib/prisma.ts` (singleton)
```typescript
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

export const prisma = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
```

### 2.3 NextAuth Setup
- [ ] Criar `src/lib/auth.ts` com configuração
- [ ] Criar `src/app/api/auth/[...nextauth]/route.ts`
- [ ] Configurar Credentials Provider
- [ ] Middleware para proteger rotas admin

### 2.4 Seed inicial
- [ ] Criar `prisma/seed.ts`
- [ ] Adicionar usuário admin
- [ ] Adicionar categorias iniciais
- [ ] Rodar seed
```bash
npx prisma db seed
```

---

## Fase 3: Componentes Base
**Tempo estimado: 1-2 horas**

### 3.1 UI Components
- [ ] `Button.tsx` - variants: primary, secondary, outline, ghost
- [ ] `Input.tsx` - com label, error, icon
- [ ] `Textarea.tsx`
- [ ] `Select.tsx`
- [ ] `Badge.tsx` - para status, categorias
- [ ] `Card.tsx` - wrapper genérico
- [ ] `Modal.tsx` - dialog reutilizável
- [ ] `LoadingSpinner.tsx`
- [ ] `Pagination.tsx`

### 3.2 Layout Components
- [ ] `Container.tsx`
- [ ] `Section.tsx`

### 3.3 Utilitários
- [ ] `src/lib/utils.ts` - cn(), formatDate(), etc.
- [ ] `src/lib/animations.ts` - variants Framer Motion
- [ ] `src/lib/validations.ts` - schemas Zod

### 3.4 Context e Hooks
- [ ] `ToastContext.tsx` - notificações
- [ ] `useToast.ts`
- [ ] `useDebounce.ts`
- [ ] `useMediaQuery.ts`

---

## Fase 4: Layout Site Público
**Tempo estimado: 1-2 horas**

### 4.1 Header
- [ ] Logo à esquerda
- [ ] Menu: Home, Projetos, Artistas, Diretores, Sobre, Contato
- [ ] Menu hamburger mobile
- [ ] Scroll effect (transparente → sólido)
- [ ] Animação de entrada

### 4.2 Footer
- [ ] Logo
- [ ] Links navegação
- [ ] Redes sociais
- [ ] Informações contato
- [ ] Copyright

### 4.3 Layout principal
- [ ] `src/app/layout.tsx` com fonte e metadata
- [ ] Integrar Header/Footer
- [ ] WhatsAppButton flutuante

---

## Fase 5: Home Page
**Tempo estimado: 3-4 horas**

### 5.1 Hero
- [ ] Título com palavras destacadas
- [ ] Layout responsivo (texto + imagem)
- [ ] Elementos decorativos (brush strokes)
- [ ] Animações de entrada

### 5.2 Artistas em Destaque
- [ ] Buscar artistas featured do banco
- [ ] Grid/carrossel de cards
- [ ] Hover effects
- [ ] Link para página de artistas

### 5.3 Projetos Recentes
- [ ] Buscar últimos projetos publicados
- [ ] Grid de cards
- [ ] Link para página de projetos

### 5.4 Reconhecimento
- [ ] Seção de prêmios/certificações
- [ ] Background escuro
- [ ] Animações de texto

### 5.5 Nossa História
- [ ] Preview da história
- [ ] Galeria de fotos P&B
- [ ] Link para página Sobre

### 5.6 Diretores Preview
- [ ] Grid com os diretores
- [ ] Link para página de diretores

### 5.7 CTA Contato
- [ ] Call to action final
- [ ] Botão para página de contato

---

## Fase 6: Páginas de Listagem
**Tempo estimado: 2-3 horas**

### 6.1 Projetos (`/projetos`)
- [ ] Buscar projetos do banco
- [ ] Grid de ProjectCards
- [ ] Filtro por categoria
- [ ] Paginação
- [ ] Metadata dinâmica

### 6.2 Artistas (`/artistas`)
- [ ] Buscar artistas do banco
- [ ] Grid de ArtistCards
- [ ] Filtro por categoria
- [ ] Destaque para featured
- [ ] Metadata dinâmica

### 6.3 Diretores (`/diretores`)
- [ ] Buscar diretores ordenados
- [ ] Grid de DirectorCards
- [ ] Metadata dinâmica

---

## Fase 7: Páginas Individuais (Blog)
**Tempo estimado: 3-4 horas**

### 7.1 Projeto Individual (`/projetos/[slug]`)
- [ ] Buscar projeto por slug
- [ ] Hero com imagem destaque
- [ ] Conteúdo rich text
- [ ] Galeria de imagens
- [ ] Artistas relacionados
- [ ] Projetos relacionados
- [ ] Botões compartilhar
- [ ] Schema.org Article
- [ ] generateStaticParams
- [ ] generateMetadata

### 7.2 Artista Individual (`/artistas/[slug]`)
- [ ] Buscar artista por slug
- [ ] Hero com foto + cover
- [ ] Bio completa
- [ ] Links redes sociais
- [ ] Galeria
- [ ] Projetos do artista
- [ ] Schema.org Person
- [ ] generateStaticParams
- [ ] generateMetadata

### 7.3 Diretor Individual (`/diretores/[slug]`)
- [ ] Buscar diretor por slug
- [ ] Foto grande
- [ ] Cargo e bio
- [ ] Contato/LinkedIn
- [ ] Schema.org Person
- [ ] generateStaticParams
- [ ] generateMetadata

---

## Fase 8: Páginas Estáticas
**Tempo estimado: 1-2 horas**

### 8.1 Sobre Nós (`/sobre`)
- [ ] História da empresa
- [ ] Missão, Visão, Valores
- [ ] Timeline (opcional)
- [ ] Galeria
- [ ] Stats animados
- [ ] Schema.org Organization

### 8.2 Contato (`/contato`)
- [ ] Formulário com validação
- [ ] API route para envio
- [ ] Informações de contato
- [ ] Mapa (opcional)
- [ ] Feedback de envio

---

## Fase 9: Painel Admin - Layout
**Tempo estimado: 2-3 horas**

### 9.1 Layout Admin
- [ ] `src/app/admin/layout.tsx`
- [ ] Sidebar com menu
- [ ] Header com user info
- [ ] Container principal
- [ ] Design neutro/profissional

### 9.2 Componentes Admin Layout
- [ ] `AdminSidebar.tsx`
- [ ] `AdminHeader.tsx`
- [ ] `AdminContainer.tsx`

### 9.3 Página de Login
- [ ] `src/app/admin/login/page.tsx`
- [ ] Formulário de login
- [ ] Integração NextAuth
- [ ] Redirect após login

### 9.4 Proteção de Rotas
- [ ] Middleware para /admin/*
- [ ] Redirect se não autenticado

---

## Fase 10: Admin - Dashboard
**Tempo estimado: 1-2 horas**

### 10.1 Dashboard (`/admin`)
- [ ] StatsCards (projetos, artistas, diretores, contatos)
- [ ] Lista de posts recentes
- [ ] Lista de rascunhos
- [ ] Contatos não lidos
- [ ] Quick actions

### 10.2 Queries do Dashboard
- [ ] API ou Server Component para stats
- [ ] Buscar últimas edições
- [ ] Buscar rascunhos

---

## Fase 11: Admin - CRUD APIs
**Tempo estimado: 3-4 horas**

### 11.1 API Projetos
- [ ] `GET /api/admin/projects` - Listar com paginação/filtros
- [ ] `POST /api/admin/projects` - Criar
- [ ] `GET /api/admin/projects/[id]` - Buscar um
- [ ] `PUT /api/admin/projects/[id]` - Atualizar
- [ ] `DELETE /api/admin/projects/[id]` - Deletar

### 11.2 API Artistas
- [ ] `GET /api/admin/artists`
- [ ] `POST /api/admin/artists`
- [ ] `GET /api/admin/artists/[id]`
- [ ] `PUT /api/admin/artists/[id]`
- [ ] `DELETE /api/admin/artists/[id]`

### 11.3 API Diretores
- [ ] `GET /api/admin/directors`
- [ ] `POST /api/admin/directors`
- [ ] `GET /api/admin/directors/[id]`
- [ ] `PUT /api/admin/directors/[id]`
- [ ] `DELETE /api/admin/directors/[id]`

### 11.4 API Categorias e Tags
- [ ] CRUD Categorias
- [ ] CRUD Tags

### 11.5 API Upload
- [ ] `POST /api/admin/upload`
- [ ] Salvar em public/uploads
- [ ] Retornar URL

---

## Fase 12: Admin - Editor TipTap
**Tempo estimado: 2-3 horas**

### 12.1 Editor Base
- [ ] `TipTapEditor.tsx`
- [ ] Configurar extensions (heading, bold, italic, lists, etc.)
- [ ] Estilização do editor

### 12.2 Toolbar
- [ ] `EditorToolbar.tsx`
- [ ] Botões de formatação
- [ ] Inserir link
- [ ] Inserir imagem

### 12.3 Upload de Imagem no Editor
- [ ] `ImageUpload.tsx`
- [ ] Drag & drop
- [ ] Upload inline
- [ ] Preview

---

## Fase 13: Admin - Páginas CRUD
**Tempo estimado: 4-5 horas**

### 13.1 Lista de Projetos
- [ ] DataTable com projetos
- [ ] Filtros (status, categoria)
- [ ] Busca
- [ ] Actions (editar, deletar)
- [ ] Paginação

### 13.2 Formulário Projeto (Novo/Editar)
- [ ] Layout duas colunas
- [ ] Campos básicos (título, slug, excerpt)
- [ ] Editor TipTap para conteúdo
- [ ] Seleção de categorias
- [ ] Input de tags
- [ ] Upload imagem destaque
- [ ] Galeria
- [ ] Módulo SEO
- [ ] Botões salvar/publicar

### 13.3 Replicar para Artistas
- [ ] Lista
- [ ] Formulário com campos específicos (redes sociais, etc.)

### 13.4 Replicar para Diretores
- [ ] Lista
- [ ] Formulário com campos específicos (cargo, ordem)

### 13.5 Gerenciar Categorias
- [ ] Lista
- [ ] Modal criar/editar
- [ ] Deletar

### 13.6 Gerenciar Tags
- [ ] Lista
- [ ] Modal criar/editar
- [ ] Deletar

---

## Fase 14: Módulo SEO
**Tempo estimado: 3-4 horas**

### 14.1 Lógica de Análise
- [ ] `src/lib/seo-analyzer.ts`
- [ ] Implementar todas as verificações
- [ ] Cálculo de score

### 14.2 API SEO
- [ ] `POST /api/seo/analyze`
- [ ] Receber conteúdo e retornar análise

### 14.3 Componentes SEO
- [ ] `SeoFields.tsx` - Campos (keyword, título, descrição)
- [ ] `SeoScoreCircle.tsx` - Círculo com pontuação
- [ ] `SeoChecklist.tsx` - Lista de verificações
- [ ] `SeoAnalyzer.tsx` - Container que une tudo

### 14.4 Hook SEO
- [ ] `useSeoAnalysis.ts`
- [ ] Debounce na análise
- [ ] Estado reativo

### 14.5 Integração no Editor
- [ ] Adicionar SeoAnalyzer no formulário
- [ ] Atualizar em tempo real
- [ ] Salvar dados SEO no banco

---

## Fase 15: Galeria de Mídia
**Tempo estimado: 2-3 horas**

### 15.1 Página de Mídia
- [ ] `src/app/admin/midia/page.tsx`
- [ ] Grid de imagens
- [ ] Upload múltiplo
- [ ] Filtros por tipo/pasta
- [ ] Busca

### 15.2 Componentes
- [ ] `MediaLibrary.tsx`
- [ ] `MediaGrid.tsx`
- [ ] `MediaUploader.tsx`
- [ ] `MediaModal.tsx` - Selecionar mídia

### 15.3 Modal de Seleção
- [ ] Usar em formulários
- [ ] Selecionar imagem existente
- [ ] Ou fazer upload novo

---

## Fase 16: Contatos Admin
**Tempo estimado: 1-2 horas**

### 16.1 Página de Contatos
- [ ] Lista de mensagens recebidas
- [ ] Marcar como lido
- [ ] Visualizar detalhes
- [ ] Deletar

### 16.2 Notificações
- [ ] Badge no menu com não lidos
- [ ] Atualizar no dashboard

---

## Fase 17: Animações e Polish
**Tempo estimado: 2-3 horas**

### 17.1 Animações Site
- [ ] Scroll-triggered nas seções
- [ ] Parallax no hero
- [ ] Hover effects refinados
- [ ] Transições de página

### 17.2 Animações Admin
- [ ] Loading states
- [ ] Transições suaves
- [ ] Feedback visual

### 17.3 Responsividade
- [ ] Testar todas as páginas
- [ ] Ajustes mobile
- [ ] Admin tablet/desktop

---

## Fase 18: SEO e Performance
**Tempo estimado: 1-2 horas**

### 18.1 Metadata
- [ ] Configurar metadata em todas as páginas
- [ ] Open Graph
- [ ] Twitter Cards

### 18.2 Schema.org
- [ ] Organization
- [ ] Article (projetos)
- [ ] Person (artistas, diretores)

### 18.3 Sitemap
- [ ] Gerar sitemap dinâmico
- [ ] robots.txt

### 18.4 Performance
- [ ] Otimizar imagens
- [ ] Lazy loading
- [ ] Code splitting
- [ ] Lighthouse audit

---

## Fase 19: Testes e Ajustes
**Tempo estimado: 2-3 horas**

### 19.1 Testes Funcionais
- [ ] Testar todos os CRUDs
- [ ] Testar formulário público
- [ ] Testar autenticação
- [ ] Testar SEO analyzer

### 19.2 Cross-browser
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Mobile

### 19.3 Ajustes finais
- [ ] Corrigir bugs encontrados
- [ ] Ajustes visuais
- [ ] Textos e conteúdo placeholder

---

## Fase 20: Deploy VPS
**Tempo estimado: 2-3 horas**

### 20.1 Preparar servidor
- [ ] Instalar Node.js, PostgreSQL, Nginx
- [ ] Configurar PostgreSQL
- [ ] Instalar PM2

### 20.2 Deploy aplicação
- [ ] Clonar/upload código
- [ ] Configurar .env
- [ ] npm ci && npm run build
- [ ] Rodar migrations
- [ ] Iniciar com PM2

### 20.3 Nginx e SSL
- [ ] Configurar virtual host
- [ ] Configurar proxy reverso
- [ ] Instalar SSL com Certbot

### 20.4 Verificações finais
- [ ] Testar todas as páginas
- [ ] Verificar HTTPS
- [ ] Testar formulários
- [ ] Verificar uploads

---

## Checklist Final

### Site Público
- [ ] Home responsiva e animada
- [ ] Listagens funcionando (Projetos, Artistas, Diretores)
- [ ] Páginas individuais funcionando
- [ ] Sobre e Contato funcionando
- [ ] WhatsApp button funcionando
- [ ] SEO configurado
- [ ] Performance otimizada

### Painel Admin
- [ ] Login funcionando
- [ ] Dashboard com stats
- [ ] CRUD Projetos completo
- [ ] CRUD Artistas completo
- [ ] CRUD Diretores completo
- [ ] Categorias e Tags funcionando
- [ ] Galeria de mídia funcionando
- [ ] SEO Analyzer funcionando
- [ ] Contatos funcionando

### Infraestrutura
- [ ] PostgreSQL configurado
- [ ] Nginx configurado
- [ ] SSL ativo
- [ ] PM2 rodando
- [ ] Backup configurado

---

## Tempo Total Estimado

| Fase | Tempo |
|------|-------|
| Setup e Database | 2-3h |
| Componentes Base | 2-3h |
| Site Público | 8-12h |
| Admin Layout | 2-3h |
| Admin CRUD | 8-10h |
| SEO Module | 3-4h |
| Mídia e Contatos | 3-4h |
| Polish e Testes | 4-6h |
| Deploy | 2-3h |
| **Total** | **~35-50 horas** |

---

## Notas para o Claude Code

### Prioridade de Execução
1. **Setup completo** - Garantir que banco e auth funcionam
2. **Admin básico** - CRUD funcionando primeiro
3. **Site público** - Consumir dados do admin
4. **Polish** - Animações e SEO por último

### Boas Práticas
- Sempre usar TypeScript strict
- Validar dados com Zod
- Usar Server Components quando possível
- Client Components só quando necessário
- Manter componentes pequenos e reutilizáveis

### Se tiver dúvidas
- Checar DESIGN_SYSTEM.md para cores/espaçamentos
- Checar DATABASE.md para schema
- Checar STRUCTURE.md para arquitetura
