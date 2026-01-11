// API Response types

export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
  hasMore: boolean
}

export interface PaginationParams {
  page?: number
  pageSize?: number
  search?: string
  status?: string
  categoryId?: string
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

// Dashboard stats
export interface DashboardStats {
  totalProjects: number
  publishedProjects: number
  draftProjects: number
  totalArtists: number
  publishedArtists: number
  totalDirectors: number
  publishedDirectors: number
  unreadContacts: number
  totalContacts: number
}

// Recent item for dashboard
export interface RecentItem {
  id: string
  title: string
  type: 'project' | 'artist' | 'director'
  status: string
  updatedAt: Date
}

// Upload response
export interface UploadResponse {
  url: string
  filename: string
  originalName: string
  mimeType: string
  size: number
}
