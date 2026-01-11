# 🏗️ Estrutura do Projeto - Novidade Urbana

## Arquitetura de Pastas

```
novidade-urbana/
├── prisma/
│   ├── schema.prisma
│   ├── seed.ts
│   └── migrations/
│
├── public/
│   ├── fonts/
│   │   └── TTRunsTrial-*.woff2
│   ├── images/
│   │   ├── logo/
│   │   ├── hero/
│   │   ├── decorative/
│   │   └── placeholders/
│   └── uploads/          # Mídia gerenciada pelo CMS
│       ├── projects/
│       ├── artists/
│       ├── directors/
│       └── media/
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx                    # Home
│   │   ├── globals.css
│   │   │
│   │   ├── (site)/                     # Grupo: páginas públicas
│   │   │   ├── projetos/
│   │   │   │   ├── page.tsx            # Listagem
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx        # Página individual
│   │   │   ├── artistas/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx
│   │   │   ├── diretores/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx
│   │   │   ├── sobre/
│   │   │   │   └── page.tsx
│   │   │   └── contato/
│   │   │       └── page.tsx
│   │   │
│   │   ├── admin/                      # Painel Administrativo
│   │   │   ├── layout.tsx              # Layout do admin
│   │   │   ├── page.tsx                # Dashboard
│   │   │   │
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   ├── projetos/
│   │   │   │   ├── page.tsx            # Lista
│   │   │   │   ├── novo/
│   │   │   │   │   └── page.tsx        # Criar
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx        # Editar
│   │   │   │
│   │   │   ├── artistas/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── novo/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx
│   │   │   │
│   │   │   ├── diretores/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── novo/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx
│   │   │   │
│   │   │   ├── categorias/
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   ├── tags/
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   ├── midia/
│   │   │   │   └── page.tsx            # Galeria de mídia
│   │   │   │
│   │   │   ├── contatos/
│   │   │   │   └── page.tsx            # Mensagens recebidas
│   │   │   │
│   │   │   └── configuracoes/
│   │   │       └── page.tsx
│   │   │
│   │   └── api/
│   │       ├── auth/
│   │       │   └── [...nextauth]/
│   │       │       └── route.ts
│   │       │
│   │       ├── admin/
│   │       │   ├── projects/
│   │       │   │   ├── route.ts        # GET (list), POST (create)
│   │       │   │   └── [id]/
│   │       │   │       └── route.ts    # GET, PUT, DELETE
│   │       │   ├── artists/
│   │       │   │   ├── route.ts
│   │       │   │   └── [id]/
│   │       │   │       └── route.ts
│   │       │   ├── directors/
│   │       │   │   ├── route.ts
│   │       │   │   └── [id]/
│   │       │   │       └── route.ts
│   │       │   ├── categories/
│   │       │   │   └── route.ts
│   │       │   ├── tags/
│   │       │   │   └── route.ts
│   │       │   └── upload/
│   │       │       └── route.ts
│   │       │
│   │       ├── seo/
│   │       │   └── analyze/
│   │       │       └── route.ts        # Análise SEO
│   │       │
│   │       └── contact/
│   │           └── route.ts            # Formulário público
│   │
│   ├── components/
│   │   ├── layout/                     # Site público
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Container.tsx
│   │   │   └── Section.tsx
│   │   │
│   │   ├── ui/                         # Componentes reutilizáveis
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Textarea.tsx
│   │   │   ├── Select.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Dropdown.tsx
│   │   │   ├── Pagination.tsx
│   │   │   ├── LoadingSpinner.tsx
│   │   │   ├── Toast.tsx
│   │   │   └── WhatsAppButton.tsx
│   │   │
│   │   ├── sections/                   # Seções da Home
│   │   │   ├── Hero.tsx
│   │   │   ├── ArtistasDestaque.tsx
│   │   │   ├── ProjetosDestaque.tsx
│   │   │   ├── Reconhecimento.tsx
│   │   │   ├── NossaHistoria.tsx
│   │   │   ├── DiretoresPreview.tsx
│   │   │   └── ContatoHome.tsx
│   │   │
│   │   ├── cards/                      # Cards para listagens
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── ArtistCard.tsx
│   │   │   └── DirectorCard.tsx
│   │   │
│   │   ├── forms/                      # Formulários
│   │   │   ├── ContactForm.tsx
│   │   │   ├── ProjectForm.tsx
│   │   │   ├── ArtistForm.tsx
│   │   │   ├── DirectorForm.tsx
│   │   │   └── CategoryForm.tsx
│   │   │
│   │   ├── admin/                      # Componentes do Admin
│   │   │   ├── layout/
│   │   │   │   ├── AdminSidebar.tsx
│   │   │   │   ├── AdminHeader.tsx
│   │   │   │   └── AdminContainer.tsx
│   │   │   │
│   │   │   ├── dashboard/
│   │   │   │   ├── StatsCard.tsx
│   │   │   │   ├── RecentPosts.tsx
│   │   │   │   └── QuickActions.tsx
│   │   │   │
│   │   │   ├── editor/
│   │   │   │   ├── TipTapEditor.tsx
│   │   │   │   ├── EditorToolbar.tsx
│   │   │   │   └── ImageUpload.tsx
│   │   │   │
│   │   │   ├── seo/
│   │   │   │   ├── SeoAnalyzer.tsx
│   │   │   │   ├── SeoScoreCircle.tsx
│   │   │   │   ├── SeoChecklist.tsx
│   │   │   │   └── SeoFields.tsx
│   │   │   │
│   │   │   ├── media/
│   │   │   │   ├── MediaLibrary.tsx
│   │   │   │   ├── MediaGrid.tsx
│   │   │   │   ├── MediaUploader.tsx
│   │   │   │   └── MediaModal.tsx
│   │   │   │
│   │   │   └── tables/
│   │   │       ├── DataTable.tsx
│   │   │       ├── TableActions.tsx
│   │   │       └── TableFilters.tsx
│   │   │
│   │   └── seo/                        # Componentes SEO
│   │       ├── JsonLd.tsx
│   │       └── OpenGraph.tsx
│   │
│   ├── lib/
│   │   ├── prisma.ts                   # Cliente Prisma singleton
│   │   ├── auth.ts                     # Configuração NextAuth
│   │   ├── fonts.ts                    # Configuração de fontes
│   │   ├── animations.ts               # Variants Framer Motion
│   │   ├── utils.ts                    # Funções utilitárias
│   │   ├── seo-analyzer.ts             # Lógica de análise SEO
│   │   ├── upload.ts                   # Funções de upload
│   │   └── validations.ts              # Schemas Zod
│   │
│   ├── hooks/
│   │   ├── useScrollAnimation.ts
│   │   ├── useMediaQuery.ts
│   │   ├── useDebounce.ts
│   │   ├── useSeoAnalysis.ts
│   │   └── useToast.ts
│   │
│   ├── types/
│   │   ├── index.ts
│   │   ├── api.ts
│   │   └── seo.ts
│   │
│   └── context/
│       ├── ToastContext.tsx
│       └── AdminContext.tsx
│
├── tailwind.config.ts
├── next.config.js
├── package.json
├── tsconfig.json
└── .env.local
```

---

## Páginas Públicas (Site)

### Home (`/`)
```
Seções:
1. Hero - Destaque principal com artista
2. Artistas em Destaque - Grid ou carrossel
3. Projetos Recentes - Últimos 3-4 projetos
4. Reconhecimento - Prêmios e certificações
5. Nossa História - Timeline ou galeria
6. Diretores - Preview com link para página
7. CTA Contato - Call to action final
```

### Projetos (`/projetos`)
```
Listagem:
- Grid responsivo de cards
- Filtro por categoria
- Paginação
- Cards com: imagem, título, excerpt, data

Página Individual (/projetos/[slug]):
- Hero com imagem destaque
- Conteúdo completo (rich text)
- Galeria de imagens
- Artistas relacionados
- Projetos relacionados
- Botões compartilhar redes sociais
```

### Artistas (`/artistas`)
```
Listagem:
- Grid de artistas com fotos
- Filtro por categoria/gênero
- Destaque visual para "featured"

Página Individual (/artistas/[slug]):
- Hero com foto grande + cover
- Bio completa
- Links redes sociais
- Galeria de fotos
- Projetos do artista
- Player Spotify embed (se tiver)
```

### Diretores (`/diretores`)
```
Listagem:
- Grid ordenado por cargo/hierarquia
- Cards com foto circular, nome, cargo

Página Individual (/diretores/[slug]):
- Foto grande
- Cargo/função
- Bio completa
- LinkedIn / email
```

### Sobre Nós (`/sobre`)
```
- História da empresa (texto + imagens)
- Missão, Visão, Valores
- Timeline de conquistas
- Galeria de momentos
- Números/Estatísticas animadas
```

### Contato (`/contato`)
```
- Formulário completo
- Informações de contato (email, telefone)
- Endereço + Mapa (opcional)
- Links redes sociais
```

---

## Painel Administrativo

### Layout Admin
```
┌─────────────────────────────────────────────────────────┐
│  [Logo]     Novidade Urbana - Admin     [User ▼][Sair]  │
├────────────┬────────────────────────────────────────────┤
│            │                                            │
│  Dashboard │   Main Content Area                        │
│  Projetos  │                                            │
│  Artistas  │   - Dashboard: Stats + Recent + Actions    │
│  Diretores │   - Listas: Tabela + Filtros + Actions     │
│  ────────  │   - Editor: Form + TipTap + SEO Sidebar    │
│  Categorias│                                            │
│  Tags      │                                            │
│  ────────  │                                            │
│  Mídia     │                                            │
│  Contatos  │                                            │
│  ────────  │                                            │
│  Config    │                                            │
│            │                                            │
└────────────┴────────────────────────────────────────────┘
```

### Dashboard (`/admin`)
```typescript
// Estatísticas em cards:
// - Total de Projetos (publicados/rascunhos)
// - Total de Artistas
// - Total de Diretores
// - Contatos não lidos

// Lista de posts recentes (últimas edições)
// Lista de rascunhos pendentes
// Ações rápidas: Novo Projeto, Novo Artista, etc.
```

### Página de Listagem (Projetos/Artistas/Diretores)
```
┌─────────────────────────────────────────────────────────┐
│  Projetos                              [+ Novo Projeto] │
├─────────────────────────────────────────────────────────┤
│  [Buscar...] [Status ▼] [Categoria ▼]                   │
├─────────────────────────────────────────────────────────┤
│  □  Imagem  Título           Categoria  Status   Ações  │
│  ─────────────────────────────────────────────────────  │
│  □  [img]   Show em SP       Shows     ● Pub    [⋮]     │
│  □  [img]   Lançamento X     Lanç.     ○ Rasc   [⋮]     │
│  □  [img]   Parceria ABC     Parce.    ● Pub    [⋮]     │
├─────────────────────────────────────────────────────────┤
│  ◄ 1 2 3 4 5 ►                          10 de 47        │
└─────────────────────────────────────────────────────────┘
```

### Editor de Conteúdo (Novo/Editar)
```
┌──────────────────────────────────┬──────────────────────┐
│                                  │  Status              │
│  Título do Post                  │  ○ Rascunho          │
│  ────────────────────────────    │  ● Publicado         │
│                                  │                      │
│  ┌────────────────────────────┐  │  Data Publicação     │
│  │  B I U │ H1 H2 │ • │ 🔗 📷 │  │  [01/01/2026    ]    │
│  ├────────────────────────────┤  │                      │
│  │                            │  │  ─────────────────   │
│  │                            │  │                      │
│  │      Editor TipTap         │  │  Categorias          │
│  │                            │  │  ☑ Shows             │
│  │                            │  │  ☐ Lançamentos       │
│  │                            │  │  ☐ Parcerias         │
│  │                            │  │                      │
│  │                            │  │  ─────────────────   │
│  │                            │  │                      │
│  └────────────────────────────┘  │  Tags                │
│                                  │  [tag1, tag2, +    ] │
│  Excerpt/Resumo                  │                      │
│  ────────────────────────────    │  ─────────────────   │
│  [                           ]   │                      │
│                                  │  Imagem Destaque     │
│  Slug                            │  ┌────────────────┐  │
│  [titulo-do-post            ]    │  │                │  │
│                                  │  │   [Escolher]   │  │
│                                  │  └────────────────┘  │
│                                  │                      │
│                                  │  ═══════════════════ │
│                                  │  SEO                 │
│                                  │  Score: 75/100 🟡    │
│                                  │  [Ver detalhes]      │
│                                  │                      │
├──────────────────────────────────┴──────────────────────┤
│              [Cancelar]    [Salvar Rascunho]  [Publicar]│
└─────────────────────────────────────────────────────────┘
```

---

## Módulo SEO

### Campos SEO no Editor
```
┌─────────────────────────────────────────────────────────┐
│  SEO                                       Score: 85 🟢  │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Palavra-chave Foco                                     │
│  [show sertanejo são paulo                         ]    │
│                                                         │
│  Título SEO                                    54/60    │
│  [Show Sertanejo em São Paulo - Novidade Urbana    ]    │
│                                                         │
│  Meta Descrição                               148/160   │
│  [Confira o grande show sertanejo em São Paulo     ]    │
│  [organizado pela Novidade Urbana com artistas...  ]    │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  Análise SEO                                            │
│                                                         │
│  ✓ Título tem bom comprimento (54 caracteres)           │
│  ✓ Palavra-chave presente no título                     │
│  ✓ Meta descrição tem bom comprimento                   │
│  ✓ Palavra-chave presente na descrição                  │
│  ✓ Palavra-chave presente na URL                        │
│  ⚠ Adicione mais links internos                         │
│  ✓ Conteúdo tem mais de 300 palavras                    │
│  ✓ Densidade da palavra-chave: 1.8%                     │
│  ⚠ Adicione alt text em 2 imagens                       │
│  ✓ H1 presente e contém palavra-chave                   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Lógica de Score
```typescript
// Cada verificação tem peso:
// - Alta prioridade (título, descrição, keyword): 15 pontos cada
// - Média prioridade (h1, conteúdo, URL): 10 pontos cada  
// - Baixa prioridade (links, imagens): 5 pontos cada

// Status:
// - 'good' = pontos completos
// - 'warning' = 50% dos pontos
// - 'error' = 0 pontos

// Score final = soma / total possível * 100
```

---

## Deploy VPS

### Requisitos do Servidor
- Ubuntu 22.04+
- Node.js 18+
- PostgreSQL 14+
- Nginx
- PM2
- Certbot (SSL)

### Comandos de Setup
```bash
# 1. Instalar dependências do sistema
sudo apt update && sudo apt upgrade -y
sudo apt install -y nginx postgresql postgresql-contrib certbot python3-certbot-nginx

# 2. Instalar Node.js via nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 18
nvm use 18

# 3. Instalar PM2
npm install -g pm2

# 4. Configurar PostgreSQL
sudo -u postgres psql
CREATE USER novidade_urbana WITH PASSWORD 'senha_segura';
CREATE DATABASE novidade_urbana OWNER novidade_urbana;
\q

# 5. Clonar projeto
cd /var/www
git clone [repo] novidade-urbana
cd novidade-urbana

# 6. Configurar .env
cp .env.example .env.local
nano .env.local  # Editar variáveis

# 7. Instalar e build
npm ci
npx prisma generate
npx prisma migrate deploy
npm run build

# 8. Iniciar com PM2
pm2 start npm --name "novidade-urbana" -- start
pm2 save
pm2 startup

# 9. Configurar Nginx
sudo nano /etc/nginx/sites-available/novidade-urbana
# (colar configuração)
sudo ln -s /etc/nginx/sites-available/novidade-urbana /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# 10. SSL
sudo certbot --nginx -d novidadeurbana.com.br -d www.novidadeurbana.com.br
```

### Nginx Config Completa
```nginx
server {
    listen 80;
    server_name novidadeurbana.com.br www.novidadeurbana.com.br;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name novidadeurbana.com.br www.novidadeurbana.com.br;

    ssl_certificate /etc/letsencrypt/live/novidadeurbana.com.br/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/novidadeurbana.com.br/privkey.pem;
    
    # SSL Settings
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers off;
    
    # Uploads
    location /uploads {
        alias /var/www/novidade-urbana/public/uploads;
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    # Static files
    location /_next/static {
        alias /var/www/novidade-urbana/.next/static;
        expires 365d;
        add_header Cache-Control "public, immutable";
    }

    # Public static
    location /images {
        alias /var/www/novidade-urbana/public/images;
        expires 30d;
    }

    # Proxy
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 60s;
    }

    # Upload size
    client_max_body_size 10M;
}
```
