'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'
import type { Director } from '@/data/directors'

interface DirectorHeroProps {
  director: Director
}

export function DirectorHero({ director }: DirectorHeroProps) {
  return (
    <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-24 overflow-hidden">
      {/* Decorative Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute top-40 right-20 w-[300px] h-[400px] opacity-30"
          viewBox="0 0 300 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="0" y1="0" x2="300" y2="400" stroke="#FCFF00" strokeWidth="1" />
          <line x1="50" y1="0" x2="350" y2="400" stroke="#FCFF00" strokeWidth="1" />
        </svg>
        <svg
          className="absolute bottom-20 left-1/3 w-[200px] h-[200px] opacity-30"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="0" y1="100" x2="200" y2="200" stroke="#FCFF00" strokeWidth="1" />
          <line x1="0" y1="150" x2="150" y2="200" stroke="#FCFF00" strokeWidth="1" />
        </svg>
      </div>

      <div className="container-site relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full max-w-md mx-auto lg:mx-0 aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src={director.photo}
                alt={director.name}
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Name */}
            <h1
              className="text-brand-yellow mb-6"
              style={{
                fontFamily: 'var(--font-tt-runs)',
                fontSize: 'clamp(36px, 6vw, 64px)',
                fontWeight: 700,
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
              }}
            >
              {director.name}
            </h1>

            {/* Short Bio */}
            <p
              className="text-white mb-8"
              style={{
                fontFamily: 'var(--font-tt-runs)',
                fontSize: '20px',
                fontWeight: 400,
                lineHeight: '1.7',
              }}
            >
              {director.shortBio}
            </p>

            {/* Instagram */}
            {director.instagram && (
              <Link
                href={`https://instagram.com/${director.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-brand-yellow hover:opacity-80 transition-opacity"
              >
                <span className="w-10 h-10 rounded-full border-2 border-brand-yellow flex items-center justify-center">
                  <Instagram className="w-5 h-5" />
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-tt-runs)',
                    fontSize: '18px',
                    fontWeight: 500,
                  }}
                >
                  {director.instagram}
                </span>
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
