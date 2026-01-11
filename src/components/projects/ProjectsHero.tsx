'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const recognitionItems = [
  {
    title: 'Grammy',
    description: 'Thalles Roberto teve seu trabalho reconhecido internacionalmente com indicação ao Grammy Latino, um dos prêmios mais importantes da música mundial.',
    photo: '/images/projects/grammy-card-home-background.png',
  },
  {
    title: 'Reveillon 2026',
    description: 'Título de Maior Reveillon do Mundo',
    photo: '/images/projects/reveillon-2026-home-card-bg.png',
  },
  {
    title: 'Feat. Jorge',
    description: 'Encontro poderoso entre vocês e propósito Cristo',
    photo: '/images/projects/feat-jorge-card-home-bg.png',
  },
  {
    title: 'Av. do Arrependimento',
    description: 'Produção Dudu Borges',
    photo: '/images/projects/av-do-arrependimento-card-home-bg.png',
  },
  {
    title: 'DEUS GRANDE',
    description: 'Marcelo Aguiar',
    photo: '/images/projects/deus-grande-card-home-bg.png',
  }
]

export function ProjectsHero() {
  return (
    <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-24 overflow-hidden bg-black">
      <div className="container-site relative z-10 px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 style={{ lineHeight: '1.1' }}>
            <span
              className="block text-[2.25rem] lg:text-[76.93px]"
              style={{
                fontFamily: 'var(--font-tt-runs)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                marginBottom: '0.5rem',
                color: '#FFFFFF'
              }}
            >
              Projetos{' '}
              <span
                className="inline-block text-[3rem] lg:text-[112px]"
                style={{
                  fontFamily: 'var(--font-yellowtail)',
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                  color: '#FCFF00'
                }}
              >
                Especiais
              </span>
            </span>
          </h2>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-[70%_30%] gap-6 mb-12">
          {/* Large Cards */}
          {recognitionItems.slice(0, 2).map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative overflow-hidden rounded-2xl"
              style={{ height: '744px' }}
            >
              <Image
                src={item.photo}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: 'var(--font-tt-runs)',
                    fontSize: '32px',
                    fontWeight: 700,
                    lineHeight: '38px',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-tt-runs)',
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: '24px',
                    letterSpacing: '0'
                  }}
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Small Cards Row */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {recognitionItems.slice(2).map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 2) * 0.1 }}
              className="relative overflow-hidden rounded-2xl"
              style={{ height: '358px' }}
            >
              <Image
                src={item.photo}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: 'var(--font-tt-runs)',
                    fontSize: '24px',
                    fontWeight: 700,
                    lineHeight: '29px',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-tt-runs)',
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '21px',
                    letterSpacing: '0'
                  }}
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button
            className="px-8 py-4"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '32.87px',
              lineHeight: '38.06px',
              letterSpacing: '-0.02em',
              background: 'transparent',
              border: '1.11px solid transparent',
              borderRadius: '36.34px',
              backgroundImage: 'linear-gradient(black, black), linear-gradient(180deg, #FFFFFF 0%, #999999 100%)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box',
              cursor: 'pointer',
              transition: 'opacity 0.3s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            <span
              style={{
                fontWeight: 600,
                background: 'linear-gradient(180deg, #FFFFFF 0%, #999999 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Clique nas imagens
            </span>
            {' '}
            <span
              style={{
                fontWeight: 300,
                background: 'linear-gradient(180deg, #CCCCCC 0%, #666666 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              para saber mais
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
