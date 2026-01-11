import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

// Combina classes Tailwind de forma inteligente
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Formata data para exibicao
export function formatDate(date: Date | string, formatStr = 'dd/MM/yyyy') {
  const d = typeof date === 'string' ? new Date(date) : date
  return format(d, formatStr, { locale: ptBR })
}

// Formata data relativa (ex: "ha 2 dias")
export function formatRelativeDate(date: Date | string) {
  const d = typeof date === 'string' ? new Date(date) : date
  return formatDistanceToNow(d, { addSuffix: true, locale: ptBR })
}

// Gera slug a partir de string
export function generateSlug(text: string) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/[^\w\s-]/g, '') // Remove caracteres especiais
    .replace(/\s+/g, '-') // Substitui espacos por hifens
    .replace(/-+/g, '-') // Remove hifens duplicados
    .trim()
}

// Trunca texto com ellipsis
export function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}

// Calcula tempo de leitura
export function calculateReadingTime(content: string) {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return minutes
}

// Formata bytes para tamanho legivel
export function formatBytes(bytes: number, decimals = 2) {
  if (bytes === 0) return '0 Bytes'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}

// Verifica se URL e valida
export function isValidUrl(string: string) {
  try {
    new URL(string)
    return true
  } catch {
    return false
  }
}

// Extrai dominio de URL
export function extractDomain(url: string) {
  try {
    const urlObj = new URL(url)
    return urlObj.hostname
  } catch {
    return null
  }
}

// Delay para async/await
export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
