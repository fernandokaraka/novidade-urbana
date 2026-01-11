'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Phone } from 'lucide-react'
import { Container, Section } from '@/components/layout'
import { fadeInUp } from '@/lib/animations'

export function CTAContact() {
  return (
    <Section background="yellow" padding="xl">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2
              className="text-4xl lg:text-6xl font-black text-black uppercase mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Vamos Criar Algo{' '}
              <span className="inline-block bg-black text-brand-yellow px-4">
                Incrível
              </span>{' '}
              Juntos?
            </h2>

            <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos transformar sua
              carreira artística ou realizar seu próximo grande projeto.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-bold uppercase hover:bg-gray-900 transition-colors"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <Mail size={20} />
                Enviar Mensagem
                <ArrowRight size={20} />
              </Link>

              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black border-2 border-black font-bold uppercase hover:bg-black hover:text-white transition-colors"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <Phone size={20} />
                WhatsApp
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-gray-800">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a
                  href="mailto:contato@novidadeurbana.com"
                  className="hover:underline"
                >
                  contato@novidadeurbana.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+5511999999999" className="hover:underline">
                  +55 11 99999-9999
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
