// Re-export all types
export * from './api'
export * from './seo'

// Common types
export type PostStatus = 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'
export type Role = 'ADMIN' | 'EDITOR'
export type CategoryType = 'PROJECT' | 'ARTIST'

// Base entity types
export interface BaseEntity {
  id: string
  createdAt: Date
  updatedAt?: Date
}

// User type
export interface User extends BaseEntity {
  name: string
  email: string
  role: Role
  avatar?: string
}

// Project type
export interface Project extends BaseEntity {
  title: string
  slug: string
  excerpt?: string
  content: string
  featuredImage?: string
  gallery: string[]
  status: PostStatus
  publishedAt?: Date
  seoTitle?: string
  seoDescription?: string
  seoKeyword?: string
  seoScore?: number
  author: User
  authorId: string
  categories: Category[]
  tags: Tag[]
  artists: Artist[]
}

// Artist type
export interface Artist extends BaseEntity {
  name: string
  slug: string
  bio?: string
  fullBio?: string
  photo?: string
  coverImage?: string
  gallery: string[]
  instagram?: string
  youtube?: string
  spotify?: string
  tiktok?: string
  facebook?: string
  twitter?: string
  website?: string
  featured: boolean
  order: number
  status: PostStatus
  publishedAt?: Date
  seoTitle?: string
  seoDescription?: string
  seoKeyword?: string
  seoScore?: number
  author: User
  authorId: string
  categories: Category[]
  tags: Tag[]
  projects: Project[]
}

// Director type
export interface Director extends BaseEntity {
  name: string
  slug: string
  role: string
  bio?: string
  fullBio?: string
  photo?: string
  instagram?: string
  linkedin?: string
  email?: string
  order: number
  status: PostStatus
  publishedAt?: Date
  seoTitle?: string
  seoDescription?: string
  seoKeyword?: string
  seoScore?: number
  author: User
  authorId: string
}

// Category type
export interface Category extends BaseEntity {
  name: string
  slug: string
  description?: string
  type: CategoryType
  color?: string
  order: number
}

// Tag type
export interface Tag {
  id: string
  name: string
  slug: string
  createdAt: Date
}

// Media type
export interface Media {
  id: string
  filename: string
  originalName: string
  mimeType: string
  size: number
  url: string
  alt?: string
  caption?: string
  folder?: string
  createdAt: Date
}

// Contact type
export interface Contact {
  id: string
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  read: boolean
  replied: boolean
  createdAt: Date
}

// Setting type
export interface Setting {
  id: string
  key: string
  value: string
  type: string
  updatedAt: Date
}
