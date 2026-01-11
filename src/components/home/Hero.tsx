'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { slideInLeft, slideInRight } from '@/lib/animations'

export function Hero() {
  return (
    <section className="relative bg-black" style={{ height: '850px', overflow: 'visible' }}>
      {/* Background Elements */}
      <div className="absolute inset-0" style={{ overflow: 'hidden' }}>
        <Image
          src="/images/hero/hero-home-background.png"
          alt="Background"
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>

      <div className="container-site relative z-10 h-full">
        <div className="grid lg:grid-cols-2 gap-12 h-full">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInLeft}
            className="text-left flex flex-col justify-end pb-32"
          >
            {/* Main Headline */}
            <h1 className="mb-12" style={{ fontFamily: 'var(--font-tt-runs)' }}>
              <span
                className="text-brand-yellow"
                style={{
                  fontSize: '48px',
                  fontWeight: 700,
                  lineHeight: '57px',
                  letterSpacing: '-0.02em',
                  display: 'inline'
                }}
              >
                Gestão e agenciamento artístico{' '}
              </span>
              <span
                className="text-white"
                style={{
                  fontSize: '48px',
                  fontWeight: 400,
                  lineHeight: '57px',
                  letterSpacing: '-0.02em',
                  display: 'inline'
                }}
              >
                com reconhecimento{' '}
              </span>
              <span
                className="text-brand-yellow"
                style={{
                  fontFamily: 'var(--font-yellowtail)',
                  fontSize: '64px',
                  fontWeight: 400,
                  lineHeight: '57px',
                  letterSpacing: '-0.02em',
                  display: 'inline'
                }}
              >
                internacional
              </span>
            </h1>

            {/* CTAs */}
            <div className="flex flex-wrap gap-6">
              <Link
                href="/agenciamento"
                className="text-white hover:text-brand-yellow transition-colors"
                style={{
                  fontFamily: 'var(--font-tt-runs)',
                  fontWeight: 300,
                  fontSize: '20.28px',
                  lineHeight: '36.2px',
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
                  fontWeight: 300,
                  fontSize: '20.28px',
                  lineHeight: '36.2px',
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
                  fontWeight: 300,
                  fontSize: '20.28px',
                  lineHeight: '36.2px',
                  letterSpacing: '-0.02em'
                }}
              >
                Editora
              </Link>
            </div>
          </motion.div>

          {/* Image with Grammy Badge */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInRight}
            className="relative hidden lg:block"
            style={{
              position: 'absolute',
              right: '0',
              top: '80px',
              width: '50%',
              height: 'calc(100% - 80px)',
              zIndex: 10
            }}
          >
            <Image
              src="/images/hero/vencedor-do-grammy-hero-home.png"
              alt="Vencedor Grammy"
              fill
              className="object-contain object-bottom"
              style={{ objectPosition: 'bottom center' }}
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
