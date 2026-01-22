'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const stats = [
  {
    number: '50+',
    title: 'Projetos e lançamentos',
    description: 'Músicas, cyphers, eventos e produções audiovisuais que conectam fé e cultura urbana.',
  },
  {
    number: '30+',
    title: 'Artistas impactados',
    description: 'Talentos que já participaram de projetos, eventos e colaborações da Novidade Urbana.',
  },
  {
    number: '4+',
    title: 'Atuação no mercado',
    description: 'Construindo uma nova linguagem para a música cristã urbana no Brasil.',
  },
]

export function AboutNumbers() {
  return (
    <section className="bg-black py-16 lg:py-24">
      <div className="container-site px-4">
        {/* Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12 lg:mb-16"
        >
          <h2>
            <span
              className="text-white text-3xl sm:text-4xl lg:text-[60px]"
              style={{
                fontFamily: 'var(--font-tt-runs)',
                fontWeight: 400,
                letterSpacing: '-0.02em',
              }}
            >
              Nossos{' '}
            </span>
            <span
              className="text-4xl sm:text-5xl lg:text-[96px]"
              style={{
                fontFamily: 'var(--font-yellowtail)',
                fontWeight: 400,
                color: '#FCFF00',
              }}
            >
              números
            </span>
          </h2>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-12 lg:mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-[#1a1a1a] rounded-2xl p-6 lg:p-8 text-center border border-[#333] hover:border-brand-yellow/30 transition-colors duration-300"
            >
              <div
                className="text-white text-[48px] lg:text-[64px] mb-2"
                style={{
                  fontFamily: 'var(--font-tt-runs)',
                  fontWeight: 700,
                  lineHeight: '1',
                }}
              >
                {stat.number}
              </div>
              <h3
                className="text-brand-yellow mb-3 text-base sm:text-lg lg:text-[20px]"
                style={{
                  fontFamily: 'var(--font-tt-runs)',
                  fontWeight: 700,
                }}
              >
                {stat.title}
              </h3>
              <p
                className="text-gray-400 text-sm sm:text-base lg:text-[20px]"
                style={{
                  fontFamily: 'var(--font-tt-runs)',
                  fontWeight: 400,
                  lineHeight: '1.6',
                }}
              >
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center"
        >
          <Link
            href="/contato"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-yellow text-black font-semibold rounded-full hover:bg-brand-orange hover:text-white transition-all duration-300 text-base sm:text-lg lg:text-[20px]"
            style={{
              fontFamily: 'var(--font-tt-runs)',
              fontWeight: 600,
            }}
          >
            Entrar em contato
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
