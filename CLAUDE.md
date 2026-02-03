# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Novidade Urbana is a portfolio/CMS platform for artist management and agency (gestão e agenciamento artístico). Features public-facing pages and an admin dashboard with RankMath-style SEO analysis.

**Tech Stack:** Next.js 16.1 (App Router), React 19, TypeScript, Prisma 7 with pg adapter (PostgreSQL), NextAuth 4, Tailwind CSS 4, Framer Motion, TipTap editor, Zod 4.

## Commands

```bash
npm run dev              # Development server (localhost:3000)
npm run build            # Production build
npm run lint             # ESLint (flat config, v9)
npm run db:generate      # Generate Prisma client types (also runs on postinstall)
npm run db:migrate       # Run migrations (prisma migrate dev)
npm run db:push          # Push schema changes directly (no migration file)
npm run db:studio        # Prisma Studio GUI
npx prisma db seed       # Seed database (requires global tsx: npm i -g tsx)
docker-compose up -d     # Start PostgreSQL 16 container (port 5432)
```

There is **no test framework** configured. No Jest, Vitest, or other test runner is set up.

## Architecture

### Data Flow

Public pages currently use **static data files** in `src/data/` (artists, directors, projects) rather than database queries. The admin CMS writes to PostgreSQL via Prisma, but the public site reads from these static TypeScript files. This is the development-time pattern; production will switch to database reads.

### Prisma Client

Uses `@prisma/adapter-pg` with a `pg.Pool` connection (not the default Prisma connection). The singleton is in `src/lib/prisma.ts`. This means the `DATABASE_URL` is consumed by the `pg` driver, not Prisma's built-in connector.

### Tailwind v4 (CSS-first config)

There is **no `tailwind.config.ts`** file. All theme customization is done via `@theme inline` in `src/app/globals.css`. Brand colors, fonts, font sizes, and spacing are defined there. Use the Tailwind token names (e.g., `text-brand-yellow`, `font-heading`, `text-hero`) in components.

Utility classes defined in globals.css: `container-site`, `section-padding`, `heading-hero`, `heading-h1`/`h2`/`h3`, `btn-primary`, `btn-secondary`, `card-base`, `bg-brand-dark`, `bg-brand-light`, `text-highlight`, `link-animated`.

### Fonts

Five font families configured in `src/lib/fonts.ts` via `next/font/local` and `next/font/google`:
- **TT Runs Trial** (`--font-tt-runs`) - headings, loaded locally from `public/fonts/`
- **Inter** (`--font-inter`) - body text
- **Pacifico** (`--font-script`) - decorative/script text
- **Poppins** (`--font-poppins`)
- **Yellowtail** (`--font-yellowtail`)

### Key Directories

- `src/app/` - App Router: public pages at root level, admin under `admin/`, API under `api/`
- `src/components/` - By feature: `home/`, `layout/`, `ui/`, `artists/`, `projects/`, `directors/`, `partners/`, `about/`, `contact/`, `providers/`
- `src/lib/` - `auth.ts`, `prisma.ts`, `validations.ts`, `animations.ts`, `fonts.ts`, `utils.ts`
- `src/data/` - Static data: `artists.ts`, `directors.ts`, `projects.ts`
- `src/types/` - Type definitions including `next-auth.d.ts` augmentation
- `src/hooks/` - `useDebounce`, `useMediaQuery`
- `src/contexts/` - `ToastContext.tsx` (note: `contexts/` not `context/`)
- `prisma/` - Schema and seed file

### API Routes

Only `src/app/api/auth/[...nextauth]/route.ts` is implemented. The admin API directories (`api/admin/artists/`, `api/admin/projects/`, etc.) exist as placeholders but do not yet contain route handlers.

### Patterns

**Auth:** NextAuth 4 with credentials provider. Middleware in `src/middleware.ts` protects `/admin/*` routes and redirects authenticated users away from login. JWT sessions.

**Database Models:** User, Project, Artist, Director, Category, Tag, Media, Setting, Contact. All content models use `PostStatus` enum (DRAFT/PUBLISHED/ARCHIVED) and optional SEO fields (seoTitle, seoDescription, seoKeyword, seoScore).

**Validation:** Zod 4 schemas in `lib/validations.ts`. SEO limits: title 60 chars, description 160 chars.

**Styling:** Brand colors: Yellow `#FCFF00`, Black `#000000`, Orange `#FF5E33`, Gray `#545454`. See `docs/DESIGN_SYSTEM.md` for full tokens. Icons use **Lucide React** (`lucide-react`).

**Class merging:** Use `cn()` from `lib/utils.ts` (wraps `clsx` + `tailwind-merge`) for conditional/merged Tailwind classes. Date formatting helpers in the same file use `date-fns` with `ptBR` locale.

**Animations:** Framer Motion variants in `lib/animations.ts` (fadeInUp, staggerContainer, scaleIn, slideIn, textReveal). CSS keyframe animations also available in globals.css.

**Path Alias:** `@/*` maps to `src/*`.

**Components use `'use client'`** only when interactive (Framer Motion, hooks, event handlers). Server components are the default.

### Deploy Target

Production deploys to a **VPS Linux** with PM2 (process manager) and Nginx (reverse proxy + SSL via Let's Encrypt). Uploads are stored locally on the VPS filesystem under `public/uploads`.

## Environment Variables

Required in `.env`:
```
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/novidade_urbana
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=<your-secret>
```

## Additional Documentation

- `docs/DESIGN_SYSTEM.md` - Colors, typography, spacing, component styles
- `docs/DATABASE.md` - Full schema details, common queries, seed data
- `docs/STRUCTURE.md` - Complete folder architecture and page descriptions
- `docs/TASKS.md` - Task breakdown by phase with checklist

## Language

Code comments, UI text, and content are in Portuguese (Brazilian). Variable names and code identifiers are in English.
