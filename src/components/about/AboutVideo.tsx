'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { Play } from 'lucide-react'

export function AboutVideo() {
  return (
    <section className="bg-black py-8 lg:py-12">
      <div className="container-site px-4">
        {/* Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2>
            <span
              className="text-white"
              style={{
                fontFamily: 'var(--font-tt-runs)',
                fontSize: '60px',
                fontWeight: 400,
                letterSpacing: '-0.02em',
              }}
            >
              Lorem{' '}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-yellowtail)',
                fontSize: '96px',
                fontWeight: 400,
                color: '#FCFF00',
              }}
            >
              ipsum
            </span>
          </h2>
        </motion.div>

        {/* Video Placeholder */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative mb-12 lg:mb-16"
        >
          <div
            className="relative w-full aspect-video bg-[#3a3a3a] rounded-2xl flex items-center justify-center cursor-pointer group overflow-hidden"
            style={{ maxWidth: '900px', margin: '0 auto' }}
          >
            {/* Play Button */}
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300">
              <Play className="w-6 h-6 lg:w-8 lg:h-8 text-black ml-1" fill="currentColor" />
            </div>
          </div>
        </motion.div>

        {/* Description Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-8 lg:mb-12"
        >
          <p
            className="text-white text-center"
            style={{
              fontFamily: 'var(--font-tt-runs)',
              fontSize: '20px',
              fontWeight: 400,
              lineHeight: '1.7',
            }}
          >
            Foi criada por profissionais experientes do meio musical — incluindo o{' '}
            <span className="text-brand-yellow font-bold">
              produtor Doninha em parceria com nomes como Marquinhos Acena, Fábio Príncipe e Marcelo Portuga
            </span>{' '}
            (ex-sócio da KondZilla) — com a missão de desenvolver carreiras, lançar projetos relevantes e dar visibilidade estratégica aos artistas do seu casting.
          </p>
        </motion.div>

        {/* Two Columns with Trophy */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid lg:grid-cols-3 gap-8 items-center"
        >
          {/* Left Column */}
          <motion.div variants={fadeInUp} className="text-white">
            <p
              style={{
                fontFamily: 'var(--font-tt-runs)',
                fontSize: '20px',
                fontWeight: 400,
                lineHeight: '1.7',
              }}
            >
              <span className="text-brand-yellow font-bold">
                Representamos talentos como Thalles Roberto, Marcelo Aguiar e Marcados Gospel,
              </span>{' '}
              e têm se destacado por projetos especiais e colaborações artísticas.
            </p>
          </motion.div>

          {/* Center - Icon */}
          <motion.div variants={fadeInUp} className="flex justify-center items-center">
            <Image
              src="/images/about/sobre.svg"
              alt="Ícone Novidade Urbana"
              width={100}
              height={100}
              className="object-contain"
            />
          </motion.div>

          {/* Right Column */}
          <motion.div variants={fadeInUp} className="text-white">
            <p
              style={{
                fontFamily: 'var(--font-tt-runs)',
                fontSize: '20px',
                fontWeight: 400,
                lineHeight: '1.7',
              }}
            >
              A Novidade Urbana tem um papel estratégico no reposicionamento da música cristã no Brasil,{' '}
              <span className="text-brand-yellow font-bold">
                dialogando com a cultura jovem, periférica e digital.
              </span>{' '}
              Sua importância vai muito além de lançar músicas: ela abre caminhos, legitima linguagens e cria oportunidades.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
