'use client'

import Link from 'next/link'
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
    photo: '/images/directors/fabio-principe-img-home-nova.png',
  },
]

export function Directors() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden bg-black">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-40">
        <Image
          src="/images/backgrounds/bg-diretores-home.png"
          alt=""
          fill
          quality={100}
          className="object-cover"
        />
      </div>

      <div className="container-site relative z-10 px-4">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
          style={{ lineHeight: '1.1' }}
        >
          <span
            className="text-[48px] lg:text-[112px]"
            style={{
              fontFamily: 'var(--font-yellowtail)',
              fontWeight: 400,
              letterSpacing: '-2px',
              color: '#FCFF00',
            }}
          >
            Sócios
          </span>
          <span
            className="text-[38px] lg:text-[76.93px]"
            style={{
              fontFamily: 'var(--font-tt-runs)',
              fontWeight: 700,
              letterSpacing: '-2px',
              color: '#FFFFFF',
            }}
          >
            {' '}
            - Diretores
          </span>
        </motion.h2>

        {/* Directors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden mb-6">
                <Image
                  src={director.photo}
                  alt={director.name}
                  fill
                  className="object-cover"
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
        <div className="text-center">
          <Link
            href="/sobre"
            className="inline-block px-10 py-4 bg-brand-yellow text-black rounded-lg hover:bg-yellow-400 transition-colors"
            style={{
              fontFamily: 'var(--font-tt-runs)',
              fontSize: '16px',
              fontWeight: 700,
              lineHeight: '19px',
              letterSpacing: '0',
            }}
          >
            Conheça os sócios
          </Link>
        </div>
      </div>
    </section>
  )
}
