'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export function OurStory() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden bg-gray-800">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-40">
        <Image
          src="/images/backgrounds/bg-nossa-historia.png"
          alt=""
          fill
          quality={100}
          className="object-cover"
        />
      </div>

      <div className="container-site relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            {/* Title */}
            <h2 className="mb-8" style={{ lineHeight: '1' }}>
              <span
                className="block"
                style={{
                  fontFamily: 'var(--font-tt-runs)',
                  fontSize: '4.25rem',
                  fontWeight: 700,
                  letterSpacing: '-0.02em'
                }}
              >
                Nossa
              </span>
              <span
                className="block"
                style={{
                  fontFamily: 'var(--font-yellowtail)',
                  fontSize: '5rem',
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                  color: '#FCFF00'
                }}
              >
                História
              </span>
            </h2>

            {/* Description */}
            <div className="space-y-6 mb-8">
              <p
                style={{
                  fontFamily: 'var(--font-tt-runs)',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '24px',
                  letterSpacing: '0'
                }}
              >
                A Novidade Urbana nasceu com o propósito de fortalecer e profissionalizar a música gospel contemporânea, conectando fé, cultura e excelência artística.
              </p>

              <p
                style={{
                  fontFamily: 'var(--font-tt-runs)',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '24px',
                  letterSpacing: '0'
                }}
              >
                Com uma visão moderna, a produtora desenvolve <strong>carreiras e projetos que ampliam o alcance da mensagem cristã no cenário musical atual</strong>.
              </p>
            </div>

            {/* CTA Button */}
            <Link
              href="/sobre"
              className="inline-block px-10 py-4 bg-brand-yellow text-black rounded-lg hover:bg-yellow-400 transition-colors"
              style={{
                fontFamily: 'var(--font-tt-runs)',
                fontSize: '16px',
                fontWeight: 700,
                lineHeight: '19px',
                letterSpacing: '0'
              }}
            >
              Conheça mais sobre nós
            </Link>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative lg:block hidden"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/decorative/nossa-historia-home-img.png"
                alt="Nossa História"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Mobile Image - aligned with button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:hidden mt-8"
        >
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="/images/decorative/nossa-historia-home-img.png"
              alt="Nossa História"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}