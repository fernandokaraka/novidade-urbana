import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Linkedin } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projetos', label: 'Projetos' },
  { href: '/artistas', label: 'Artistas' },
  { href: '/diretores', label: 'Diretores' },
  { href: '/sobre', label: 'Sobre nós' },
  { href: '/contato', label: 'Contato' },
]

export function Footer() {
  return (
    <footer className="bg-brand-yellow py-6">
      <div className="container-site">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo/logo-novidade-urbana-preto-notext.svg"
              alt="Novidade Urbana"
              width={60}
              height={60}
              className="w-12 h-12 lg:w-14 lg:h-14"
            />
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-black hover:text-gray-800 transition-colors"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/company/novidadeurbana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-800 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://instagram.com/novidadeurbana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-800 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
