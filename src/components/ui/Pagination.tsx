'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  maxVisible?: number
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  maxVisible = 5,
}: PaginationProps) {
  // Calcula quais páginas mostrar
  const getVisiblePages = () => {
    const pages: (number | string)[] = []

    if (totalPages <= maxVisible) {
      // Mostra todas as páginas
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // Sempre mostra primeira página
      pages.push(1)

      const start = Math.max(2, currentPage - 1)
      const end = Math.min(totalPages - 1, currentPage + 1)

      if (start > 2) {
        pages.push('...')
      }

      for (let i = start; i <= end; i++) {
        pages.push(i)
      }

      if (end < totalPages - 1) {
        pages.push('...')
      }

      // Sempre mostra última página
      pages.push(totalPages)
    }

    return pages
  }

  const visiblePages = getVisiblePages()

  return (
    <div className="flex items-center justify-center gap-1">
      {/* Previous */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={cn(
          'flex items-center justify-center w-10 h-10 rounded-lg transition-colors',
          'border border-gray-300',
          currentPage === 1
            ? 'text-gray-400 cursor-not-allowed'
            : 'hover:bg-gray-100 text-gray-700'
        )}
      >
        <ChevronLeft size={20} />
      </button>

      {/* Pages */}
      {visiblePages.map((page, index) => {
        if (page === '...') {
          return (
            <span
              key={`ellipsis-${index}`}
              className="flex items-center justify-center w-10 h-10 text-gray-500"
            >
              ...
            </span>
          )
        }

        const pageNumber = page as number
        const isActive = pageNumber === currentPage

        return (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={cn(
              'flex items-center justify-center w-10 h-10 rounded-lg transition-colors font-medium',
              'border',
              isActive
                ? 'bg-brand-yellow text-black border-brand-yellow'
                : 'border-gray-300 hover:bg-gray-100 text-gray-700'
            )}
          >
            {pageNumber}
          </button>
        )
      })}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={cn(
          'flex items-center justify-center w-10 h-10 rounded-lg transition-colors',
          'border border-gray-300',
          currentPage === totalPages
            ? 'text-gray-400 cursor-not-allowed'
            : 'hover:bg-gray-100 text-gray-700'
        )}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  )
}

// Pagination Info (mostra "Mostrando X de Y resultados")
interface PaginationInfoProps {
  currentPage: number
  itemsPerPage: number
  totalItems: number
}

export function PaginationInfo({
  currentPage,
  itemsPerPage,
  totalItems,
}: PaginationInfoProps) {
  const start = (currentPage - 1) * itemsPerPage + 1
  const end = Math.min(currentPage * itemsPerPage, totalItems)

  return (
    <p className="text-sm text-gray-600">
      Mostrando <span className="font-medium">{start}</span> a{' '}
      <span className="font-medium">{end}</span> de{' '}
      <span className="font-medium">{totalItems}</span> resultados
    </p>
  )
}
