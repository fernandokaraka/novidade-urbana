'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const featuredArtists = [
  {
    name: 'Thalles Roberto',
    slug: 'thalles-roberto',
    bio: 'Vencedor do Grammy Latino, ministro e cantor consagrado no cenário gospel. Conhecido por canções que tocam milhões de corações, ele integra fé e música com excelência artística. Sua parceria com o cantor secular Simone & Simaria por mais de 10 mil shows/ano nas melhores casas do Brasil.',
    photo: '/images/artists/thalles-roberto-home.png',
  },
  {
    name: 'Marcelo Aguiar',
    slug: 'marcelo-aguiar',
    bio: 'Violonista autor e intérprete brasileiro e um expoente da viola no rock. Lendário na viola brasileira, ele faz-presença emocionante por onde passa.',
    photo: '/images/artists/marcelo-aguiar-home.png',
  },
  {
    name: 'Marcados',
    slug: 'marcados',
    bio: 'Marcados é um grupo vocal brasileiro e consagrado no cenário gospel. A história do Marcados por mais de 10 anos de carreira fazendo shows em diversas casas na América.',
    photo: '/images/artists/marcados-home.png',
  },
]

export function ArtistsHero() {
  return (
    <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-24 overflow-hidden bg-black" style={{ minHeight: '1200px' }}>
      <div className="container-site relative z-10 px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2>
            <span
              className="text-[2.25rem] lg:text-[76.93px] block lg:inline"
              style={{
                fontFamily: 'var(--font-tt-runs)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: '#FFFFFF'
              }}
            >
              Nossos{' '}
            </span>
            <span
              className="text-[3rem] lg:text-[112px] block lg:inline"
              style={{
                fontFamily: 'var(--font-yellowtail)',
                fontWeight: 400,
                letterSpacing: '-0.02em',
                color: '#FCFF00'
              }}
            >
              Artistas
            </span>
          </h2>
        </motion.div>

        {/* Large Card - Thalles Roberto */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="relative overflow-hidden rounded-2xl mb-4" style={{ height: '400px' }}>
            <Image
              src={featuredArtists[0].photo}
              alt={featuredArtists[0].name}
              fill
              className="object-cover"
            />
          </div>
          <div className="text-white">
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
              {featuredArtists[0].name}
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
              {featuredArtists[0].bio}
            </p>
          </div>
        </motion.div>

        {/* Small Cards - Marcelo and Marcados */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Marcelo Aguiar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="relative overflow-hidden rounded-2xl bg-white mb-4" style={{ height: '300px' }}>
              <Image
                src={featuredArtists[1].photo}
                alt={featuredArtists[1].name}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-white">
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
                {featuredArtists[1].name}
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
                {featuredArtists[1].bio}
              </p>
            </div>
          </motion.div>

          {/* Marcados */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-2xl bg-white mb-4" style={{ height: '300px' }}>
              <Image
                src={featuredArtists[2].photo}
                alt={featuredArtists[2].name}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-white">
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
                {featuredArtists[2].name}
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
                {featuredArtists[2].bio}
              </p>
            </div>
          </motion.div>
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
