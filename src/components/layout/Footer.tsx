import Link from 'next/link'
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projetos', label: 'Projetos' },
  { href: '/artistas', label: 'Artistas' },
  { href: '/diretores', label: 'Diretores' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' },
]

const socialLinks = [
  {
    href: 'https://instagram.com/novidadeurbana',
    icon: Instagram,
    label: 'Instagram',
  },
  {
    href: 'https://facebook.com/novidadeurbana',
    icon: Facebook,
    label: 'Facebook',
  },
  {
    href: 'https://youtube.com/novidadeurbana',
    icon: Youtube,
    label: 'YouTube',
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white">
      <div className="container-site py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo e Descrição */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span
                className="text-2xl font-black uppercase tracking-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <span className="text-brand-yellow">Novidade</span>{' '}
                <span className="text-white">Urbana</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Gestão e agenciamento artístico com reconhecimento internacional.
              Conectamos talentos ao mundo.
            </p>
            {/* Redes Sociais */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-brand-yellow hover:text-black transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3
              className="text-lg font-bold uppercase mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Navegação
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-brand-yellow transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3
              className="text-lg font-bold uppercase mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Contato
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Mail size={18} className="flex-shrink-0 mt-0.5 text-brand-yellow" />
                <a
                  href="mailto:contato@novidadeurbana.com"
                  className="hover:text-brand-yellow transition-colors"
                >
                  contato@novidadeurbana.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Phone size={18} className="flex-shrink-0 mt-0.5 text-brand-yellow" />
                <a
                  href="tel:+5511999999999"
                  className="hover:text-brand-yellow transition-colors"
                >
                  +55 11 99999-9999
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={18} className="flex-shrink-0 mt-0.5 text-brand-yellow" />
                <span>São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h3
              className="text-lg font-bold uppercase mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Trabalhe Conosco
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Interessado em fazer parte da nossa equipe ou ser agenciado por
              nós?
            </p>
            <Link
              href="/contato"
              className="inline-block px-6 py-3 bg-brand-yellow text-black font-bold uppercase text-sm hover:bg-brand-orange hover:text-white transition-all duration-300"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Entre em Contato
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>
              © {currentYear} Novidade Urbana. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <Link
                href="/politica-privacidade"
                className="hover:text-brand-yellow transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/termos-uso"
                className="hover:text-brand-yellow transition-colors"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
