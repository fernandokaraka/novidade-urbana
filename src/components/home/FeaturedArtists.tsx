'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

const featuredArtists = [
  {
    name: 'Thalles Roberto',
    slug: 'thalles-roberto',
    bio: 'Vencedor do Grammy Latino, ministro e cantor consagrado no cenário gospel. Conhecido por canções que tocam milhões de corações, ele integra fé e música com excelência artística. Sua parceria com o cantor secular Simone & Simaria por mais de 10 mil shows/ano nas melhores casas do Brasil.',
    photo: '/images/artists/thalles-roberto-home.png',
    objectPosition: 'center 30%',
  },
  {
    name: 'Marcados',
    slug: 'marcados',
    bio: 'Marcados é um grupo vocal brasileiro e consagrado no cenário gospel. A história do Marcados por mais de 10 anos de carreira fazendo shows em diversas casas na América.',
    photo: '/images/artists/marcados-home.png',
    objectPosition: 'center top',
  },
]

export function FeaturedArtists() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden bg-black min-h-[800px] lg:min-h-[1200px]">
      {/* Background Texture - Full section */}
      <div className="absolute inset-0" style={{ top: '-120px', height: 'calc(100% + 120px)' }}>
        <Image
          src="/images/backgrounds/background-artistas-fundo-amarelo.png"
          alt=""
          fill
          quality={100}
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
      </div>
      {/* Gradient overlay for mobile - fade from transparent to black */}
      <div
        className="absolute inset-x-0 lg:hidden pointer-events-none"
        style={{
          top: '380px',
          height: '150px',
          background: 'linear-gradient(to bottom, transparent, black)'
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 lg:hidden pointer-events-none bg-black"
        style={{
          top: '530px',
        }}
      />

      <div className="container-site relative z-10 px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-black">
            <span
              className="text-4xl md:text-6xl lg:text-7xl block lg:inline"
              style={{
                fontFamily: 'var(--font-tt-runs)',
                fontWeight: 700,
                letterSpacing: '-0.02em'
              }}
            >
              Artistas em{' '}
            </span>
            <span
              className="text-5xl md:text-7xl lg:text-8xl block lg:inline"
              style={{
                fontFamily: 'var(--font-yellowtail)',
                fontWeight: 400,
                letterSpacing: '-0.02em'
              }}
            >
              destaque
            </span>
          </h2>
        </motion.div>

        {/* Cards grandes empilhados */}
        <div className="flex flex-col gap-12 mb-12">
          {featuredArtists.map((artist, index) => (
            <motion.div
              key={artist.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/artistas/${artist.slug}`} className="block group">
                <div className="relative overflow-hidden rounded-2xl mb-4 h-[280px] md:h-[400px]">
                  <Image
                    src={artist.photo}
                    alt={artist.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    style={{ objectPosition: artist.objectPosition }}
                  />
                </div>
                <div className="text-white">
                  <h3
                    className="mb-3 group-hover:text-brand-yellow transition-colors"
                    style={{
                      fontFamily: 'var(--font-tt-runs)',
                      fontSize: '32px',
                      fontWeight: 700,
                      lineHeight: '38px',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    {artist.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-tt-runs)',
                      fontSize: '16px',
                      fontWeight: 400,
                      lineHeight: '24px',
                      letterSpacing: '0'
                    }}
                    className="max-w-3xl"
                  >
                    {artist.bio}
                  </p>
                </div>
              </Link>
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
          <Link
            href="/artistas"
            className="inline-block px-10 py-4 bg-brand-yellow text-black rounded-lg hover:bg-yellow-400 transition-colors"
            style={{
              fontFamily: 'var(--font-tt-runs)',
              fontSize: '16px',
              fontWeight: 700,
              lineHeight: '19px',
              letterSpacing: '0'
            }}
          >
            Conheça nossos artistas
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
