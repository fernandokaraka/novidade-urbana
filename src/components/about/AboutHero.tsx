'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { slideInLeft, slideInRight } from '@/lib/animations'

export function AboutHero() {
  return (
    <section className="relative bg-black pt-32 lg:pt-40 pb-16 lg:pb-24 overflow-hidden">
      {/* Decorative Lines */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top right diagonal lines */}
        <svg
          className="absolute top-20 right-0 w-[600px] h-[400px] opacity-60"
          viewBox="0 0 600 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="100" y1="0" x2="600" y2="350" stroke="#FCFF00" strokeWidth="1" />
          <line x1="150" y1="0" x2="650" y2="350" stroke="#FCFF00" strokeWidth="1" />
        </svg>
        {/* Bottom left diagonal lines */}
        <svg
          className="absolute bottom-0 left-0 w-[400px] h-[300px] opacity-60"
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="0" y1="50" x2="300" y2="300" stroke="#FCFF00" strokeWidth="1" />
          <line x1="0" y1="100" x2="250" y2="300" stroke="#FCFF00" strokeWidth="1" />
        </svg>
      </div>

      <div className="container-site relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInLeft}
          >
            {/* Title */}
            <h1 className="mb-6 lg:mb-8">
              <span
                className="block text-white text-[32px] lg:text-[48px]"
                style={{
                  fontFamily: 'var(--font-tt-runs)',
                  fontWeight: 700,
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em',
                }}
              >
                A{' '}
                <span
                  className="text-brand-yellow"
                  style={{
                    fontFamily: 'var(--font-yellowtail)',
                    fontWeight: 400,
                  }}
                >
                  história
                </span>
                {' '}da
              </span>
              <span
                className="block text-white text-[32px] lg:text-[48px]"
                style={{
                  fontFamily: 'var(--font-tt-runs)',
                  fontWeight: 700,
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em',
                }}
              >
                nossa Empresa
              </span>
            </h1>

            {/* Description */}
            <p
              className="text-white mb-8 max-w-lg"
              style={{
                fontFamily: 'var(--font-tt-runs)',
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '1.6',
              }}
            >
              <span className="text-brand-yellow font-bold">A Novidade Urbana</span> é um selo e produtora gospel que surgiu
              como uma plataforma estruturada para apoiar e promover artistas
              cristãos, com foco em profissionalização, lançamentos e projetos
              colaborativos dentro da música gospel contemporânea.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center px-6 py-3 bg-brand-yellow text-black font-semibold rounded-full hover:bg-brand-orange hover:text-white transition-all duration-300"
                style={{
                  fontFamily: 'var(--font-tt-runs)',
                  fontSize: '14px',
                  fontWeight: 600,
                }}
              >
                Entrar em contato
              </Link>
              <Link
                href="/diretores"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-brand-yellow text-brand-yellow font-semibold rounded-full hover:bg-brand-yellow hover:text-black transition-all duration-300"
                style={{
                  fontFamily: 'var(--font-tt-runs)',
                  fontSize: '14px',
                  fontWeight: 600,
                }}
              >
                Nossos Diretores
              </Link>
            </div>
          </motion.div>

          {/* Logo */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInRight}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-[280px] h-[320px] lg:w-[400px] lg:h-[450px]">
              <Image
                src="/images/logo/logo-novidade-urbana-amarelo-notext.svg"
                alt="Novidade Urbana"
                fill
                className="object-contain"
                priority
              />
              {/* Text below logo */}
              <div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-center"
                style={{
                  fontFamily: 'var(--font-tt-runs)',
                  fontWeight: 900,
                  fontSize: '32px',
                  lineHeight: '1',
                  letterSpacing: '0.05em',
                  color: '#FCFF00',
                }}
              >
                NOVIDADE
                <br />
                URBANA
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
