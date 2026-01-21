# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Novidade Urbana is a portfolio/CMS platform for artist management and agency (gestão e agenciamento artístico). Features public-facing pages and an admin dashboard with RankMath-style SEO analysis.

**Tech Stack:** Next.js 16.1 (App Router), React 19, TypeScript, Prisma (PostgreSQL), NextAuth, Tailwind CSS 4, Framer Motion, TipTap editor, Zod.

## Commands

```bash
npm run dev              # Development server (localhost:3000)
npm run build            # Production build
npm run lint             # ESLint
npm run db:generate      # Generate Prisma client types
npm run db:migrate       # Run migrations (creates migration file)
npm run db:push          # Push schema changes directly (no migration file)
npm run db:studio        # Prisma Studio GUI
docker-compose up -d     # Start PostgreSQL container
```

## Architecture

### Key Directories

- `src/app/` - App Router pages and API routes
- `src/components/` - Organized by feature: `home/`, `layout/`, `ui/`, `artists/`, `projects/`, `partners/`
- `src/lib/` - Core utilities: `auth.ts`, `prisma.ts`, `validations.ts`, `animations.ts`, `fonts.ts`
- `src/data/` - Static data and mock data for development
- `prisma/` - Schema and seed file (`tsx prisma/seed.ts`)

### Patterns

**Auth:** NextAuth with credentials provider. Middleware in `src/middleware.ts` protects `/admin/*` routes. JWT sessions.

**Database Models:** User, Project, Artist, Director, Category, Tag, Media, Setting, Contact. All content models use `PostStatus` enum (DRAFT/PUBLISHED/ARCHIVED) and optional SEO fields.

**Validation:** Zod schemas in `lib/validations.ts`. SEO limits: title 60 chars, description 160 chars.

**Styling:** Tailwind v4 with CSS variables. Brand colors: Yellow `#FCFF00`, Black `#000000`, Orange `#FF5E33`. See `docs/DESIGN_SYSTEM.md` for full tokens.

**Animations:** Framer Motion variants in `lib/animations.ts` (fadeInUp, staggerContainer, scaleIn, slideIn).

**Path Alias:** `@/*` maps to `src/*`.

## Environment Variables

Required in `.env`:
```
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/novidade_urbana
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=<your-secret>
```

## Additional Documentation

- `docs/DESIGN_SYSTEM.md` - Colors, typography, spacing, component styles
- `docs/DATABASE.md` - Full schema details, common queries
- `docs/STRUCTURE.md` - Complete folder architecture
- `docs/TASKS.md` - Task breakdown by phase

## Language

Code comments and content are in Portuguese (Brazilian).
