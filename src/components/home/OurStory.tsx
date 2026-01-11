'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container, Section } from '@/components/layout'
import { slideInLeft, slideInRight } from '@/lib/animations'

export function OurStory() {
  return (
    <Section background="white" padding="xl">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
          >
            <p
              className="text-brand-yellow uppercase tracking-wider text-sm font-bold mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Quem Somos
            </p>
            <h2 className="heading-h2 mb-6">
              Nossa <span className="text-brand-yellow">História</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Fundada há mais de 15 anos, a Novidade Urbana nasceu com o
                propósito de revolucionar a gestão artística no Brasil,
                conectando talentos brasileiros ao cenário internacional.
              </p>
              <p>
                Começamos com uma visão clara: transformar artistas em marcas
                globais, mantendo a autenticidade e a essência cultural que os
                tornam únicos. Hoje, somos referência no mercado de
                entretenimento.
              </p>
              <p>
                Nossa equipe multidisciplinar trabalha incansavelmente para
                criar oportunidades, desenvolver carreiras e consolidar legados
                que transcendem gerações.
              </p>
            </div>

            <Link
              href="/sobre"
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-black text-white font-bold uppercase hover:bg-brand-yellow hover:text-black transition-all duration-300"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Conheça Nossa História
              <ArrowRight size={20} />
            </Link>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
            className="grid grid-cols-2 gap-4"
          >
            {/* Placeholder images - substituir por imagens reais */}
            {[1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className={`relative aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 ${
                  index === 1 ? 'col-span-2' : ''
                }`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-black text-gray-400/20">
                    {index}
                  </span>
                </div>
                {/* Quando tiver imagens, substituir por:
                <img
                  src={`/images/story/${index}.jpg`}
                  alt={`Nossa história ${index}`}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
                */}
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
