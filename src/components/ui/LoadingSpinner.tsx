import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface LoadingSpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: 'yellow' | 'white' | 'black'
}

export function LoadingSpinner({
  size = 'md',
  color = 'yellow',
  className,
  ...props
}: LoadingSpinnerProps) {
  const sizeStyles = {
    sm: 'h-4 w-4 border-2',
    md: 'h-8 w-8 border-2',
    lg: 'h-12 w-12 border-3',
    xl: 'h-16 w-16 border-4',
  }

  const colorStyles = {
    yellow: 'border-brand-yellow border-t-transparent',
    white: 'border-white border-t-transparent',
    black: 'border-black border-t-transparent',
  }

  return (
    <div
      className={cn('flex items-center justify-center', className)}
      {...props}
    >
      <div
        className={cn(
          'animate-spin rounded-full',
          sizeStyles[size],
          colorStyles[color]
        )}
      />
    </div>
  )
}

// Loading Full Screen
export function LoadingFullScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-lg p-8 shadow-xl">
        <LoadingSpinner size="xl" />
        <p className="mt-4 text-gray-600">Carregando...</p>
      </div>
    </div>
  )
}

// Loading Overlay (para uso em cards, sections, etc)
export function LoadingOverlay() {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <LoadingSpinner size="lg" />
    </div>
  )
}
