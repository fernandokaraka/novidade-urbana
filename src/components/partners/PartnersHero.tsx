'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { directors } from '@/data/directors'

export function PartnersHero() {
  return (
    <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-24 overflow-hidden bg-black">
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
              key={director.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <Link href={`/diretores/${director.slug}`} className="block group">
                {/* Photo */}
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden mb-6 transition-transform duration-300 group-hover:scale-[1.02]">
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
                  className="mb-2 group-hover:text-brand-yellow transition-colors"
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
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            className="px-8 py-4"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '24px',
              lineHeight: '32px',
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
        </div>
      </div>
    </section>
  )
}
