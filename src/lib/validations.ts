import { z } from 'zod'

// ==================== AUTH ====================

export const loginSchema = z.object({
  email: z.string().email('Email invalido'),
  password: z.string().min(6, 'Senha deve ter no minimo 6 caracteres'),
})

export type LoginInput = z.infer<typeof loginSchema>

// ==================== CONTATO ====================

export const contactSchema = z.object({
  name: z.string().min(2, 'Nome deve ter no minimo 2 caracteres'),
  email: z.string().email('Email invalido'),
  phone: z.string().optional(),
  subject: z.string().min(3, 'Assunto deve ter no minimo 3 caracteres'),
  message: z.string().min(10, 'Mensagem deve ter no minimo 10 caracteres'),
})

export type ContactInput = z.infer<typeof contactSchema>

// ==================== PROJETO ====================

export const projectSchema = z.object({
  title: z.string().min(3, 'Titulo deve ter no minimo 3 caracteres'),
  slug: z.string().min(3, 'Slug deve ter no minimo 3 caracteres'),
  excerpt: z.string().optional(),
  content: z.string().min(10, 'Conteudo deve ter no minimo 10 caracteres'),
  featuredImage: z.string().url().optional().nullable(),
  gallery: z.array(z.string().url()).optional(),
  status: z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']),
  publishedAt: z.date().optional().nullable(),
  categoryIds: z.array(z.string()).optional(),
  tagIds: z.array(z.string()).optional(),
  artistIds: z.array(z.string()).optional(),
  // SEO
  seoTitle: z.string().max(60, 'Titulo SEO deve ter no maximo 60 caracteres').optional(),
  seoDescription: z.string().max(160, 'Descricao SEO deve ter no maximo 160 caracteres').optional(),
  seoKeyword: z.string().optional(),
})

export type ProjectInput = z.infer<typeof projectSchema>

// ==================== ARTISTA ====================

export const artistSchema = z.object({
  name: z.string().min(2, 'Nome deve ter no minimo 2 caracteres'),
  slug: z.string().min(2, 'Slug deve ter no minimo 2 caracteres'),
  bio: z.string().optional(),
  fullBio: z.string().optional(),
  photo: z.string().url().optional().nullable(),
  coverImage: z.string().url().optional().nullable(),
  gallery: z.array(z.string().url()).optional(),
  // Redes Sociais
  instagram: z.string().url().optional().nullable(),
  youtube: z.string().url().optional().nullable(),
  spotify: z.string().url().optional().nullable(),
  tiktok: z.string().url().optional().nullable(),
  facebook: z.string().url().optional().nullable(),
  twitter: z.string().url().optional().nullable(),
  website: z.string().url().optional().nullable(),
  // Status
  featured: z.boolean().optional(),
  order: z.number().optional(),
  status: z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']),
  publishedAt: z.date().optional().nullable(),
  categoryIds: z.array(z.string()).optional(),
  tagIds: z.array(z.string()).optional(),
  // SEO
  seoTitle: z.string().max(60).optional(),
  seoDescription: z.string().max(160).optional(),
  seoKeyword: z.string().optional(),
})

export type ArtistInput = z.infer<typeof artistSchema>

// ==================== DIRETOR ====================

export const directorSchema = z.object({
  name: z.string().min(2, 'Nome deve ter no minimo 2 caracteres'),
  slug: z.string().min(2, 'Slug deve ter no minimo 2 caracteres'),
  role: z.string().min(2, 'Cargo deve ter no minimo 2 caracteres'),
  bio: z.string().optional(),
  fullBio: z.string().optional(),
  photo: z.string().url().optional().nullable(),
  // Redes Sociais
  instagram: z.string().url().optional().nullable(),
  linkedin: z.string().url().optional().nullable(),
  email: z.string().email().optional().nullable(),
  // Status
  order: z.number().optional(),
  status: z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']),
  publishedAt: z.date().optional().nullable(),
  // SEO
  seoTitle: z.string().max(60).optional(),
  seoDescription: z.string().max(160).optional(),
  seoKeyword: z.string().optional(),
})

export type DirectorInput = z.infer<typeof directorSchema>

// ==================== CATEGORIA ====================

export const categorySchema = z.object({
  name: z.string().min(2, 'Nome deve ter no minimo 2 caracteres'),
  slug: z.string().min(2, 'Slug deve ter no minimo 2 caracteres'),
  description: z.string().optional(),
  type: z.enum(['PROJECT', 'ARTIST']),
  color: z.string().optional(),
  order: z.number().optional(),
})

export type CategoryInput = z.infer<typeof categorySchema>

// ==================== TAG ====================

export const tagSchema = z.object({
  name: z.string().min(2, 'Nome deve ter no minimo 2 caracteres'),
  slug: z.string().min(2, 'Slug deve ter no minimo 2 caracteres'),
})

export type TagInput = z.infer<typeof tagSchema>

// ==================== MIDIA ====================

export const mediaSchema = z.object({
  filename: z.string(),
  originalName: z.string(),
  mimeType: z.string(),
  size: z.number(),
  url: z.string().url(),
  alt: z.string().optional(),
  caption: z.string().optional(),
  folder: z.string().optional(),
})

export type MediaInput = z.infer<typeof mediaSchema>

// ==================== SEO ====================

export const seoSchema = z.object({
  seoTitle: z.string().max(60).optional(),
  seoDescription: z.string().max(160).optional(),
  seoKeyword: z.string().optional(),
})

export type SeoInput = z.infer<typeof seoSchema>
