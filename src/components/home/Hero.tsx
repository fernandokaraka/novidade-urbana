'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const heroImages = [
  {
    src: '/images/hero/vencedor-do-grammy-hero-home.png',
    alt: 'Thalles Roberto - Vencedor do Grammy',
    offsetY: '0',
  },
  {
    src: '/images/hero/marcados-hero-home.png',
    alt: 'Marcados',
    offsetY: '-40px', // Reduzido para ficar mais no fundo
  },
  {
    src: '/images/hero/marcelo-aguiar-hero-home.png',
    alt: 'Marcelo Aguiar',
    offsetY: '0',
  },
]

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative bg-black min-h-[92svh] lg:min-h-[85vh] overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-home-background.png"
          alt="Background"
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>

      <div className="container-site relative z-10 min-h-[92svh] lg:min-h-[85vh] px-4">
        <div className="relative min-h-[92svh] lg:min-h-[85vh]">
          {/* Text Content - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-20 flex flex-col justify-start lg:justify-end pt-28 lg:pt-0 pb-20 lg:pb-32 lg:min-h-[85vh] max-w-xl"
          >
            {/* Main Headline */}
            <h1 className="mb-8">
              <span
                className="block text-brand-yellow"
                style={{
                  fontFamily: 'var(--font-tt-runs)',
                  fontWeight: 700,
                  fontSize: 'clamp(28px, 5vw, 48px)',
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em',
                }}
              >
                Gestão e agenciamento
              </span>
              <span
                className="block text-brand-yellow"
                style={{
                  fontFamily: 'var(--font-tt-runs)',
                  fontWeight: 700,
                  fontSize: 'clamp(28px, 5vw, 48px)',
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em',
                }}
              >
                artístico{' '}
                <span
                  className="text-white"
                  style={{
                    fontWeight: 400,
                  }}
                >
                  com
                </span>
              </span>
              <span
                className="block text-white"
                style={{
                  fontFamily: 'var(--font-tt-runs)',
                  fontWeight: 400,
                  fontSize: 'clamp(28px, 5vw, 48px)',
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em',
                }}
              >
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

            {/* Navigation Links */}
            <div className="flex flex-row gap-8">
              <Link
                href="/agenciamento"
                className="text-white hover:text-brand-yellow transition-colors"
                style={{
                  fontFamily: 'var(--font-tt-runs)',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '1.5',
                  letterSpacing: '-0.02em'
                }}
              >
                Agenciamento
              </Link>
              <Link
                href="/gravadora"
                className="text-white hover:text-brand-yellow transition-colors"
                style={{
                  fontFamily: 'var(--font-tt-runs)',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '1.5',
                  letterSpacing: '-0.02em'
                }}
              >
                Gravadora
              </Link>
              <Link
                href="/editora"
                className="text-white hover:text-brand-yellow transition-colors"
                style={{
                  fontFamily: 'var(--font-tt-runs)',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '1.5',
                  letterSpacing: '-0.02em'
                }}
              >
                Editora
              </Link>
            </div>
          </motion.div>

          {/* Image Carousel - Right Side */}
          <div className="absolute z-10 -bottom-4 lg:-bottom-8 right-0 w-full lg:w-[55%] h-[60vh] lg:h-[80vh]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <Image
                  src={heroImages[currentIndex].src}
                  alt={heroImages[currentIndex].alt}
                  fill
                  className="object-contain object-bottom"
                  style={{ transform: `translateY(${heroImages[currentIndex].offsetY})` }}
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
