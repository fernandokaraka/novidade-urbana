'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { slideInLeft, slideInRight } from '@/lib/animations'

export function Hero() {
  return (
    <section className="relative bg-black min-h-screen overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-home-background.png"
          alt="Background"
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>

      {/* Grammy Image - Mobile Version */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src="/images/hero/vencedor-do-grammy-hero-home.png"
          alt="Vencedor Grammy"
          fill
          className="object-contain object-bottom"
          style={{ objectPosition: 'bottom center' }}
          priority
        />
      </div>

      <div className="container-site relative z-10 h-full min-h-screen flex items-start lg:items-center px-4">
        <div className="grid lg:grid-cols-2 gap-12 w-full pb-16 lg:pb-32 pt-44 lg:pt-0">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInLeft}
            className="text-left"
          >
            {/* Main Headline */}
            <h1 className="mb-6 lg:mb-12">
              <span
                className="block text-brand-yellow"
                style={{
                  fontFamily: 'var(--font-tt-runs)',
                  fontSize: '36px',
                  fontWeight: 700,
                  lineHeight: '1.15',
                  letterSpacing: '-0.02em',
                }}
              >
                Gestão e agenciamento artístico
              </span>
              <span
                className="block text-white"
                style={{
                  fontFamily: 'var(--font-tt-runs)',
                  fontSize: '30px',
                  fontWeight: 400,
                  lineHeight: '1.15',
                  letterSpacing: '-0.02em',
                }}
              >
                com reconhecimento
              </span>
              <span
                className="block text-brand-yellow"
                style={{
                  fontFamily: 'var(--font-yellowtail)',
                  fontSize: '56px',
                  fontWeight: 400,
                  lineHeight: '0.70',
                  letterSpacing: '-0.02em',
                }}
              >
                internacional
              </span>
            </h1>

            {/* CTAs */}
            <div className="flex flex-row flex-wrap gap-6 lg:gap-6">
              <Link
                href="/agenciamento"
                className="text-white hover:text-brand-yellow transition-colors"
                style={{
                  fontFamily: 'var(--font-tt-runs)',
                  fontWeight: 300,
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
                  fontWeight: 300,
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
                  fontWeight: 300,
                  fontSize: '16px',
                  lineHeight: '1.5',
                  letterSpacing: '-0.02em'
                }}
              >
                Editora
              </Link>
            </div>
          </motion.div>

          {/* Image with Grammy Badge - Desktop Only */}
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

      {/* Desktop Version - Maintain original layout */}
      <style jsx>{`
        @media (min-width: 1024px) {
          h1 span {
            display: inline !important;
          }
          h1 span:first-child {
            font-size: 48px !important;
          }
          h1 span:nth-child(2) {
            font-size: 48px !important;
          }
          h1 span:last-child {
            font-size: 64px !important;
          }
        }
      `}</style>
    </section>
  )
}
