import { cn } from '@/lib/utils'
import { ebook } from '@/data/ebook'

interface AmazonButtonProps {
  className?: string
  size?: 'md' | 'lg'
}

// Botão amarelo "Clique aqui e garanta o seu" que leva para a página do livro na Amazon
export function AmazonButton({ className, size = 'md' }: AmazonButtonProps) {
  return (
    <a
      href={ebook.amazonUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center justify-center rounded-md bg-brand-yellow text-black font-bold whitespace-nowrap transition-colors duration-300 hover:bg-white',
        size === 'lg'
          ? 'px-5 py-3 text-lg sm:px-7 sm:py-4 sm:text-2xl lg:text-[22px] xl:text-[28px]'
          : 'px-5 py-3 text-base sm:text-lg',
        className
      )}
      style={{ fontFamily: 'var(--font-tt-runs)', letterSpacing: '-0.01em' }}
    >
      Clique aqui e garanta o seu
    </a>
  )
}
