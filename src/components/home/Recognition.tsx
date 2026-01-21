'use client'

import Link from 'next/link'
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

export function Recognition() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden bg-white">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/images/backgrounds/bg-reconhecimentos e progressos.png"
          alt=""
          fill
          quality={100}
          className="object-cover"
        />
      </div>

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
                color: '#545454'
              }}
            >
              Reconhecimento
            </span>
            <span
              className="block text-[2.25rem] lg:text-[76.93px]"
              style={{
                fontFamily: 'var(--font-tt-runs)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: '#545454'
              }}
            >
              & Projetos{' '}
              <span
                className="px-3 md:px-4 inline-block text-[3rem] lg:text-[112px]"
                style={{
                  fontFamily: 'var(--font-yellowtail)',
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                  backgroundColor: '#545454',
                  color: '#FCFF00'
                }}
              >
                Especiais
              </span>
            </span>
          </h2>
        </motion.div>

        {/* Grid Layout */}
        <div className="mb-12">
          {/* First Row - 70/30 split on desktop, stacked on mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-6 mb-6">
            {recognitionItems.slice(0, 2).map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative overflow-hidden rounded-2xl h-[400px] lg:h-[744px]"
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

          {/* Second Row - 3 equal columns on desktop, stacked on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recognitionItems.slice(2).map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 2) * 0.1 }}
              className="relative overflow-hidden rounded-2xl h-[300px] md:h-[358px]"
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
        </div>

        {/* Description Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <p
            className="text-gray-700"
            style={{
              fontFamily: 'var(--font-tt-runs)',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '24px',
              letterSpacing: '0'
            }}
          >
            A Novidade Urbana desenvolve e gerencia projetos especiais que vão além dos lançamentos
            tradicionais, incluindo <strong>colaborações estratégicas, participações marcantes, eventos,
            projetos audiovisuais</strong> e iniciativas que ampliam o alcance da mensagem de nossos artistas.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
