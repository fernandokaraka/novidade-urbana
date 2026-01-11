# 🎤 Novidade Urbana - Site + CMS Admin

## Sobre o Projeto
Site institucional + CMS completo para a **Novidade Urbana**, empresa de gestão e agenciamento artístico com reconhecimento internacional. Inclui painel administrativo com gerenciamento de conteúdo e análise de SEO estilo RankMath.

---

## Páginas do Site

| Página | Rota | Tipo |
|--------|------|------|
| Home | `/` | Estática |
| Projetos | `/projetos` | Listagem blog |
| Projeto Individual | `/projetos/[slug]` | Dinâmica |
| Artistas | `/artistas` | Listagem blog |
| Artista Individual | `/artistas/[slug]` | Dinâmica |
| Diretores | `/diretores` | Listagem blog |
| Diretor Individual | `/diretores/[slug]` | Dinâmica |
| Sobre Nós | `/sobre` | Estática |
| Contato | `/contato` | Formulário |

---

## Stack Tecnológica

### Frontend (Site Público)
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Animações:** Framer Motion
- **Formulário:** React Hook Form + Zod
- **Ícones:** Lucide React

### Backend + CMS
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Auth:** NextAuth.js (Credentials Provider)
- **Editor:** TipTap (rich text editor)
- **Upload:** Local storage na VPS (public/uploads)
- **SEO Analysis:** Módulo customizado

### Deploy
- **Servidor:** VPS Linux
- **Process Manager:** PM2
- **Reverse Proxy:** Nginx
- **Database:** PostgreSQL local ou managed

---

## Comandos de Setup

```bash
# Criar projeto
npx create-next-app@latest novidade-urbana --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd novidade-urbana

# Dependências Frontend
npm install framer-motion react-hook-form zod @hookform/resolvers lucide-react

# Dependências Backend/CMS
npm install prisma @prisma/client next-auth bcryptjs
npm install -D @types/bcryptjs

# Editor Rich Text
npm install @tiptap/react @tiptap/starter-kit @tiptap/extension-image @tiptap/extension-link @tiptap/extension-placeholder

# Utilitários
npm install slugify reading-time date-fns

# Inicializar Prisma
npx prisma init
```

---

## Funcionalidades do Painel Admin

### 📝 Gerenciamento de Conteúdo
- **Projetos:** CRUD completo com imagens, categorias, tags
- **Artistas:** CRUD com bio, fotos, redes sociais, projetos relacionados
- **Diretores:** CRUD com cargo, bio, foto, ordem de exibição
- **Categorias:** Gerenciamento por tipo (projetos, artistas)
- **Tags:** Sistema de tags global
- **Mídia:** Galeria de uploads com organização

### 🔍 Módulo SEO (Estilo RankMath)

Para cada post/página:

| Análise | Verificação |
|---------|-------------|
| **Título SEO** | Comprimento (50-60 chars), palavra-chave no início |
| **Meta Description** | Comprimento (150-160 chars), palavra-chave presente |
| **Slug/URL** | Palavra-chave presente, sem caracteres especiais |
| **Palavra-chave foco** | Densidade no conteúdo (1-2%), presente no H1 |
| **Headings** | Estrutura correta (H1 único, H2-H6 hierárquicos) |
| **Imagens** | Alt text presente, palavra-chave no alt |
| **Links** | Links internos e externos presentes |
| **Legibilidade** | Parágrafos curtos, frases curtas, voz ativa |
| **Tamanho conteúdo** | Mínimo 300 palavras recomendado |

**Score visual:** 0-100 com indicadores verde/amarelo/vermelho

### 📊 Dashboard
- Posts recentes
- Rascunhos pendentes
- Métricas básicas (total posts, categorias, etc.)
- Atalhos rápidos

### 👤 Autenticação
- Login seguro com hash bcrypt
- Sessão via NextAuth
- Proteção de rotas admin
- Logout

---

## Arquivos de Referência
- `DESIGN_SYSTEM.md` - Tokens de design (cores, fontes, espaçamentos)
- `STRUCTURE.md` - Arquitetura completa do projeto
- `TASKS.md` - Lista de tarefas em ordem de execução
- `DATABASE.md` - Schema do banco de dados

---

## Diretrizes de Desenvolvimento

### Performance
- Usar `next/image` para todas as imagens
- Implementar lazy loading nas seções
- Otimizar fontes com `next/font`
- ISR (Incremental Static Regeneration) para páginas dinâmicas

### Animações
- Usar Framer Motion para animações de entrada
- Scroll-triggered animations
- Efeitos de hover em cards
- Parallax sutil no hero

### SEO
- Metadata dinâmica por página/post
- Open Graph images dinâmicas
- Schema.org (Organization, Article, Person)
- Sitemap dinâmico
- robots.txt

### Responsividade
- Mobile-first approach
- Breakpoints: sm(640px), md(768px), lg(1024px), xl(1280px)
- Admin responsivo (mas otimizado para desktop)

---

## Integrações
- **WhatsApp:** Botão flutuante com link direto
- **Formulário de Contato:** Envio via API Route + email
- **Redes Sociais:** Links nos perfis de artistas/diretores

---

## Observações Importantes
1. A fonte "TT Runs Trial" é paga - verificar licenciamento ou usar alternativa
2. Manter consistência visual amarelo/preto
3. Admin pode usar design mais neutro (não precisa seguir a identidade visual)
4. Implementar backup do banco de dados
5. Configurar SSL (Let's Encrypt) na VPS
