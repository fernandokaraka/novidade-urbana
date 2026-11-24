'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import { AmazonButton } from './AmazonButton'

export function EbookContent() {
  return (
    <section className="bg-black py-16 lg:py-28">
      <div className="container-site px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="mx-auto max-w-[920px] text-white"
          style={{ fontFamily: 'var(--font-tt-runs)' }}
        >
          <h2
            className="mb-6 text-brand-yellow text-2xl sm:text-3xl lg:text-[36px]"
            style={{ fontWeight: 700, lineHeight: '1.2', letterSpacing: '-0.01em' }}
          >
            Gestão, produção musical e a construção de grandes carreiras
          </h2>

          <div className="space-y-5 text-sm sm:text-base lg:text-[17px] leading-relaxed font-light">
            <p>
              O que transforma talento em uma grande carreira? E o que acontece quando
              experiência, gestão, música e fé se encontram em torno de um propósito maior?
            </p>

            <p className="font-bold">
              Em <span className="text-brand-yellow">A Resposta</span>, Marcos Ascena,
              Marcelo Portuga, Fábio Príncipe e Doninha compartilham os conhecimentos e as
              experiências que acumularam ao longo de suas trajetórias na indústria musical
              para revelar o que existe por trás da construção de grandes carreiras.
            </p>

            <p>
              A partir da experiência da Novidade Urbana, os autores apresentam os bastidores
              do mercado fonográfico, explorando a gestão de gravadoras, o agenciamento
              artístico, a produção musical, os direitos autorais, o marketing, a
              comercialização de shows e as estratégias necessárias para desenvolver
              carreiras sólidas e sustentáveis.
            </p>

            <p>
              Mais do que apresentar processos e ferramentas, a obra demonstra como
              planejamento, profissionalismo, excelência e visão estratégica podem caminhar
              juntos com a fé cristã. Por meio de experiências reais, decisões, desafios e
              aprendizados, os autores mostram que o sucesso artístico não depende apenas do
              talento, mas também de uma estrutura capaz de transformar potencial em
              resultados e música em legado.
            </p>

            <p>
              Ao longo das páginas, uma convicção conduz toda a narrativa:{' '}
              <strong className="font-bold">
                o verdadeiro propósito vai além de construir grandes carreiras. Está em
                compreender para quem e para que estamos construindo.
              </strong>
            </p>

            <p>
              Porque algumas respostas não chegam apenas para explicar caminhos. Chegam para
              transformar histórias.
            </p>

            <p className="text-brand-yellow font-bold">A resposta é Jesus.</p>
          </div>

          <div className="mt-12 lg:mt-16 flex justify-center">
            <AmazonButton />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
