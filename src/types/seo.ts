// SEO Analysis types

export type SeoCheckStatus = 'good' | 'warning' | 'error'

export interface SeoCheck {
  id: string
  name: string
  description: string
  status: SeoCheckStatus
  message: string
  priority: 'high' | 'medium' | 'low'
  points: number
  maxPoints: number
}

export interface SeoAnalysis {
  score: number
  maxScore: number
  percentage: number
  checks: SeoCheck[]
  summary: {
    good: number
    warning: number
    error: number
  }
}

export interface SeoInput {
  title: string
  seoTitle?: string
  seoDescription?: string
  seoKeyword?: string
  slug: string
  content: string
  images?: Array<{
    url: string
    alt?: string
  }>
}

// SEO Score thresholds
export const SEO_SCORE_THRESHOLDS = {
  good: 80,
  warning: 50,
  error: 0,
} as const

// SEO Check IDs
export const SEO_CHECKS = {
  TITLE_LENGTH: 'title-length',
  TITLE_KEYWORD: 'title-keyword',
  DESCRIPTION_LENGTH: 'description-length',
  DESCRIPTION_KEYWORD: 'description-keyword',
  SLUG_KEYWORD: 'slug-keyword',
  CONTENT_LENGTH: 'content-length',
  KEYWORD_DENSITY: 'keyword-density',
  H1_PRESENT: 'h1-present',
  H1_KEYWORD: 'h1-keyword',
  IMAGES_ALT: 'images-alt',
  INTERNAL_LINKS: 'internal-links',
  EXTERNAL_LINKS: 'external-links',
} as const
