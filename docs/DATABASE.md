# 🗄️ Database Schema - Novidade Urbana

## Visão Geral

O banco de dados PostgreSQL armazena todo o conteúdo do CMS:
- Usuários administrativos
- Projetos, Artistas e Diretores (como posts de blog)
- Categorias e Tags
- Mídia/Uploads
- Dados de SEO

---

## Prisma Schema

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// ==================== AUTENTICAÇÃO ====================

model User {
  id            String    @id @default(cuid())
  name          String
  email         String    @unique
  password      String    // Hash bcrypt
  role          Role      @default(EDITOR)
  avatar        String?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  
  // Relações
  projects      Project[]
  artists       Artist[]
  directors     Director[]
}

enum Role {
  ADMIN
  EDITOR
}

// ==================== PROJETOS ====================

model Project {
  id              String    @id @default(cuid())
  title           String
  slug            String    @unique
  excerpt         String?   @db.Text
  content         String    @db.Text
  featuredImage   String?
  gallery         String[]  // Array de URLs
  status          PostStatus @default(DRAFT)
  publishedAt     DateTime?
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt
  
  // SEO
  seoTitle        String?
  seoDescription  String?   @db.Text
  seoKeyword      String?   // Palavra-chave foco
  seoScore        Int?      // Score 0-100
  
  // Relações
  author          User      @relation(fields: [authorId], references: [id])
  authorId        String
  categories      Category[] @relation("ProjectCategories")
  tags            Tag[]      @relation("ProjectTags")
  artists         Artist[]   @relation("ArtistProjects")
  
  @@index([slug])
  @@index([status])
  @@index([publishedAt])
}

// ==================== ARTISTAS ====================

model Artist {
  id              String    @id @default(cuid())
  name            String
  slug            String    @unique
  bio             String?   @db.Text
  fullBio         String?   @db.Text // Conteúdo completo da página
  photo           String?
  coverImage      String?
  gallery         String[]
  
  // Redes Sociais
  instagram       String?
  youtube         String?
  spotify         String?
  tiktok          String?
  facebook        String?
  twitter         String?
  website         String?
  
  // Status
  featured        Boolean   @default(false)
  order           Int       @default(0)
  status          PostStatus @default(DRAFT)
  publishedAt     DateTime?
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt
  
  // SEO
  seoTitle        String?
  seoDescription  String?   @db.Text
  seoKeyword      String?
  seoScore        Int?
  
  // Relações
  author          User      @relation(fields: [authorId], references: [id])
  authorId        String
  categories      Category[] @relation("ArtistCategories")
  tags            Tag[]      @relation("ArtistTags")
  projects        Project[]  @relation("ArtistProjects")
  
  @@index([slug])
  @@index([status])
  @@index([featured])
}

// ==================== DIRETORES ====================

model Director {
  id              String    @id @default(cuid())
  name            String
  slug            String    @unique
  role            String    // Cargo: CEO, Diretor Artístico, etc.
  bio             String?   @db.Text
  fullBio         String?   @db.Text
  photo           String?
  
  // Redes Sociais
  instagram       String?
  linkedin        String?
  email           String?
  
  // Status
  order           Int       @default(0)
  status          PostStatus @default(DRAFT)
  publishedAt     DateTime?
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt
  
  // SEO
  seoTitle        String?
  seoDescription  String?   @db.Text
  seoKeyword      String?
  seoScore        Int?
  
  // Relações
  author          User      @relation(fields: [authorId], references: [id])
  authorId        String
  
  @@index([slug])
  @@index([status])
  @@index([order])
}

// ==================== CATEGORIAS E TAGS ====================

model Category {
  id          String    @id @default(cuid())
  name        String
  slug        String    @unique
  description String?   @db.Text
  type        CategoryType
  color       String?   // Cor hex para UI
  order       Int       @default(0)
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
  
  // Relações
  projects    Project[] @relation("ProjectCategories")
  artists     Artist[]  @relation("ArtistCategories")
  
  @@index([slug])
  @@index([type])
}

enum CategoryType {
  PROJECT
  ARTIST
}

model Tag {
  id          String    @id @default(cuid())
  name        String
  slug        String    @unique
  createdAt   DateTime  @default(now())
  
  // Relações
  projects    Project[] @relation("ProjectTags")
  artists     Artist[]  @relation("ArtistTags")
  
  @@index([slug])
}

// ==================== MÍDIA ====================

model Media {
  id          String    @id @default(cuid())
  filename    String
  originalName String
  mimeType    String
  size        Int       // Em bytes
  url         String
  alt         String?
  caption     String?
  folder      String?   // Organização em pastas virtuais
  createdAt   DateTime  @default(now())
  
  @@index([folder])
  @@index([mimeType])
}

// ==================== CONFIGURAÇÕES DO SITE ====================

model Setting {
  id          String    @id @default(cuid())
  key         String    @unique
  value       String    @db.Text
  type        String    @default("string") // string, json, boolean, number
  updatedAt   DateTime  @updatedAt
  
  @@index([key])
}

// ==================== CONTATOS (Formulário) ====================

model Contact {
  id          String    @id @default(cuid())
  name        String
  email       String
  phone       String?
  subject     String
  message     String    @db.Text
  read        Boolean   @default(false)
  replied     Boolean   @default(false)
  createdAt   DateTime  @default(now())
  
  @@index([read])
  @@index([createdAt])
}

// ==================== ENUMS ====================

enum PostStatus {
  DRAFT
  PUBLISHED
  ARCHIVED
}
```

---

## Migrations

### Criar primeira migration
```bash
npx prisma migrate dev --name init
```

### Gerar Prisma Client
```bash
npx prisma generate
```

### Seed inicial (usuário admin)
```typescript
// prisma/seed.ts
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Criar usuário admin
  const hashedPassword = await bcrypt.hash('senha_segura_aqui', 12)
  
  const admin = await prisma.user.upsert({
    where: { email: 'admin@novidadeurbana.com.br' },
    update: {},
    create: {
      email: 'admin@novidadeurbana.com.br',
      name: 'Administrador',
      password: hashedPassword,
      role: 'ADMIN',
    },
  })

  // Criar categorias iniciais
  const categories = [
    { name: 'Shows', slug: 'shows', type: 'PROJECT' as const },
    { name: 'Lançamentos', slug: 'lancamentos', type: 'PROJECT' as const },
    { name: 'Parcerias', slug: 'parcerias', type: 'PROJECT' as const },
    { name: 'Sertanejo', slug: 'sertanejo', type: 'ARTIST' as const },
    { name: 'Forró', slug: 'forro', type: 'ARTIST' as const },
    { name: 'Pop', slug: 'pop', type: 'ARTIST' as const },
  ]

  for (const cat of categories) {
    await prisma.category.upsert({
      where: { slug: cat.slug },
      update: {},
      create: cat,
    })
  }

  console.log('Seed completed!')
  console.log('Admin user:', admin.email)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
```

### Executar seed
```bash
# Adicionar no package.json:
"prisma": {
  "seed": "ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed.ts"
}

# Executar
npx prisma db seed
```

---

## Variáveis de Ambiente

```env
# .env

# Database
DATABASE_URL="postgresql://usuario:senha@localhost:5432/novidade_urbana?schema=public"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="sua_chave_secreta_muito_longa_e_segura"

# Upload
UPLOAD_DIR="/var/www/novidade-urbana/public/uploads"
MAX_FILE_SIZE="5242880" # 5MB em bytes
```

---

## Queries Comuns

### Listar posts publicados
```typescript
// Projetos publicados
const projects = await prisma.project.findMany({
  where: { status: 'PUBLISHED' },
  orderBy: { publishedAt: 'desc' },
  include: {
    categories: true,
    tags: true,
    author: { select: { name: true } },
  },
})

// Artistas em destaque
const featuredArtists = await prisma.artist.findMany({
  where: { 
    status: 'PUBLISHED',
    featured: true,
  },
  orderBy: { order: 'asc' },
})

// Diretores ordenados
const directors = await prisma.director.findMany({
  where: { status: 'PUBLISHED' },
  orderBy: { order: 'asc' },
})
```

### Buscar por slug
```typescript
const project = await prisma.project.findUnique({
  where: { slug: 'nome-do-projeto' },
  include: {
    categories: true,
    tags: true,
    artists: true,
  },
})
```

### Contagem para dashboard
```typescript
const stats = {
  projects: await prisma.project.count(),
  projectsPublished: await prisma.project.count({ where: { status: 'PUBLISHED' } }),
  artists: await prisma.artist.count({ where: { status: 'PUBLISHED' } }),
  directors: await prisma.director.count({ where: { status: 'PUBLISHED' } }),
  contacts: await prisma.contact.count({ where: { read: false } }),
}
```

---

## Backup

### Script de backup PostgreSQL
```bash
#!/bin/bash
# backup.sh

DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/var/backups/novidade-urbana"
DB_NAME="novidade_urbana"

# Criar backup
pg_dump $DB_NAME > $BACKUP_DIR/db_$DATE.sql

# Comprimir
gzip $BACKUP_DIR/db_$DATE.sql

# Manter apenas últimos 7 dias
find $BACKUP_DIR -name "*.gz" -mtime +7 -delete

echo "Backup completed: db_$DATE.sql.gz"
```

### Adicionar ao cron
```bash
# Backup diário às 3h da manhã
0 3 * * * /var/www/novidade-urbana/scripts/backup.sh
```
