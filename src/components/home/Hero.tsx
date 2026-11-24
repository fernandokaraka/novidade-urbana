'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ebook } from '@/data/ebook'
import { AmazonButton } from '@/components/ebook/AmazonButton'

type HeroSlide =
  | { variant: 'ebook' }
  | { variant: 'default'; src: string; alt: string; offsetY: string }

const heroSlides: HeroSlide[] = [
  { variant: 'ebook' },
  {
    variant: 'default',
    src: '/images/hero/vencedor-do-grammy-hero-home.png',
    alt: 'Thalles Roberto - Vencedor do Grammy',
    offsetY: '0',
  },
  {
    variant: 'default',
    src: '/images/hero/marcados-hero-home.png',
    alt: 'Marcados',
    offsetY: '-40px', // Reduzido para ficar mais no fundo
  },
]

const SLIDE_DURATION_MS = 6000

const serviceLinkStyle = {
  fontFamily: 'var(--font-tt-runs)',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '1.5',
  letterSpacing: '-0.02em',
} as const

function ServiceLinks() {
  return (
    <div className="flex flex-row gap-8">
      <Link href="/agenciamento" className="text-white hover:text-brand-yellow transition-colors" style={serviceLinkStyle}>
        Agenciamento
      </Link>
      <Link href="/gravadora" className="text-white hover:text-brand-yellow transition-colors" style={serviceLinkStyle}>
        Gravadora
      </Link>
      <Link href="/editora" className="text-white hover:text-brand-yellow transition-colors" style={serviceLinkStyle}>
        Editora
      </Link>
    </div>
  )
}

function DefaultHeadline() {
  const lineStyle = {
    fontFamily: 'var(--font-tt-runs)',
    fontSize: 'clamp(28px, 5vw, 48px)',
    lineHeight: '1.1',
    letterSpacing: '-0.02em',
  } as const

  return (
    <h1 className="mb-8">
      <span className="block text-brand-yellow" style={{ ...lineStyle, fontWeight: 700 }}>
        Gestão e agenciamento
      </span>
      <span className="block text-brand-yellow" style={{ ...lineStyle, fontWeight: 700 }}>
        artístico{' '}
        <span className="text-white" style={{ fontWeight: 400 }}>
          com
        </span>
      </span>
      <span className="block text-white" style={{ ...lineStyle, fontWeight: 400 }}>
        reconhecimento
      </span>
      <span
        className="block text-white"
        style={{
          fontFamily: 'var(--font-yellowtail)',
          fontWeight: 400,
          fontSize: 'clamp(48px, 8vw, 80px)',
          lineHeight: '0.9',
          letterSpacing: '-0.02em',
          marginTop: '-10px',
        }}
      >
        internacional
      </span>
    </h1>
  )
}

function EbookHeadline() {
  return (
    <div className="mb-8 lg:mb-12">
      <h1>
        <span
          className="block text-white"
          style={{
            fontFamily: 'var(--font-poppins)',
            fontWeight: 600,
            fontSize: 'clamp(26px, 3.6vw, 48px)',
            lineHeight: '1.1',
          }}
        >
          <span className="text-brand-yellow">Disponível agora</span> na
        </span>
        <span className="sr-only">Amazon</span>
        <Image
          src={ebook.amazonLogo}
          alt=""
          aria-hidden
          width={603}
          height={182}
          className="mt-3 w-[220px] sm:w-[300px] lg:w-[340px] xl:w-[400px] h-auto"
          priority
        />
      </h1>
      <AmazonButton size="lg" className="mt-6 lg:mt-8" />
    </div>
  )
}

// Fundo do slide do Ebook: plateia + mockup do livro, encostado na direita
function EbookBackground() {
  return (
    <div className="absolute inset-0 bg-black">
      <a
        href={ebook.amazonUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Comprar o livro A Resposta na Amazon"
        className={cn(
          'absolute right-0 bottom-0 w-full aspect-[1539/1425] max-h-[52%]',
          '[mask-image:linear-gradient(to_bottom,transparent,black_30%)]',
          'lg:top-0 lg:aspect-auto lg:max-h-none lg:h-full lg:w-[56%] xl:w-[64%]',
          'lg:[mask-image:linear-gradient(to_right,transparent,black_30%)]'
        )}
      >
        <Image
          src={ebook.heroImage}
          alt="Livro A Resposta em tablet e celular, sobre uma plateia em show"
          fill
          sizes="(min-width: 1024px) 64vw, 100vw"
          className="object-contain object-bottom lg:object-cover lg:object-[50%_20%]"
          priority
        />
        {/* Suaviza a borda superior da imagem atrás do menu */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent" />
      </a>
    </div>
  )
}

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const slide = heroSlides[currentIndex]

  // Troca de slide automaticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length)
    }, SLIDE_DURATION_MS)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative bg-black min-h-[92svh] lg:min-h-[85vh] overflow-hidden">
      {/* Fundo (só troca quando muda o tipo de slide) */}
      <AnimatePresence initial={false}>
        <motion.div
          key={slide.variant}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {slide.variant === 'ebook' ? (
            <EbookBackground />
          ) : (
            <Image
              src="/images/hero/hero-home-background.png"
              alt=""
              fill
              className="object-cover opacity-40"
              priority
            />
          )}
        </motion.div>
      </AnimatePresence>

      <div className="container-site relative z-10 min-h-[92svh] lg:min-h-[85vh] px-4 pointer-events-none">
        <div className="relative min-h-[92svh] lg:min-h-[85vh]">
          {/* Texto - lado esquerdo (só anima quando o tipo de slide muda) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.variant}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.6 }}
              className={cn(
                'pointer-events-auto relative z-20 flex flex-col justify-start pt-28 lg:pt-0 pb-20 lg:min-h-[85vh]',
                slide.variant === 'ebook'
                  ? 'lg:justify-center lg:pt-20 lg:pb-12 max-w-xl'
                  : 'lg:justify-end lg:pb-32 max-w-xl'
              )}
            >
              {slide.variant === 'ebook' ? <EbookHeadline /> : <DefaultHeadline />}
              <ServiceLinks />
            </motion.div>
          </AnimatePresence>

          {/* Imagem do artista - lado direito (slides padrão) */}
          <AnimatePresence mode="wait">
            {slide.variant === 'default' && (
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8 }}
                className="absolute z-10 -bottom-4 lg:-bottom-8 right-0 w-full lg:w-[55%] h-[60vh] lg:h-[80vh]"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-contain object-bottom"
                  style={{ transform: `translateY(${slide.offsetY})` }}
                  priority
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
