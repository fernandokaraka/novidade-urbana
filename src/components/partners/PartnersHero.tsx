'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const directors = [
  {
    name: 'Doninha',
    role: 'Produtor de eventos e empresário artístico',
    photo: '/images/directors/doninho-img-home.jpg',
  },
  {
    name: 'Marcos Ascena',
    role: 'Produtor Executivo- Manager Artístico',
    photo: '/images/directors/marcos-sena-img-home.png',
  },
  {
    name: 'Marcelo Portuga',
    role: 'Empresário Artístico - Estrategista de lançamentos',
    photo: '/images/directors/marcelo-portuga-img-home.png',
  },
  {
    name: 'Fábio Principe',
    role: 'Diretor Financeiro',
    photo: '/images/directors/fabio-principe-img-home.jpg',
  },
]

export function PartnersHero() {
  return (
    <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-24 overflow-hidden bg-black">
      <div className="container-site relative z-10 px-4 max-w-2xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 style={{ lineHeight: '1.1' }}>
            <span
              className="text-[3rem] lg:text-[112px]"
              style={{
                fontFamily: 'var(--font-yellowtail)',
                fontWeight: 400,
                letterSpacing: '-0.02em',
                color: '#FCFF00'
              }}
            >
              Sócios
            </span>
            <span
              className="text-[2.25rem] lg:text-[76.93px]"
              style={{
                fontFamily: 'var(--font-tt-runs)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: '#FFFFFF'
              }}
            >
              {' '}- Diretores
            </span>
          </h2>
        </motion.div>

        {/* Directors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-8">
          {directors.map((director, index) => (
            <motion.div
              key={director.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              {/* Photo */}
              <div className="relative w-full overflow-hidden mb-6" style={{ height: '450px', borderRadius: '16px' }}>
                <Image
                  src={director.photo}
                  alt={director.name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Name */}
              <h3
                style={{
                  fontFamily: 'var(--font-tt-runs)',
                  fontSize: '24px',
                  fontWeight: 700,
                  lineHeight: '28px',
                  letterSpacing: '0',
                  color: '#FFFFFF',
                }}
                className="mb-2"
              >
                {director.name}
              </h3>

              {/* Role */}
              <p
                style={{
                  fontFamily: 'var(--font-tt-runs)',
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '20px',
                  letterSpacing: '0',
                  color: '#CCCCCC',
                }}
              >
                {director.role}
              </p>
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
