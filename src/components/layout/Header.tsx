'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { menuMobile, menuItem } from '@/lib/animations'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projetos', label: 'Projetos' },
  { href: '/artistas', label: 'Artistas' },
  { href: '/diretores', label: 'Diretores' },
  { href: '/sobre', label: 'Sobre nós' },
  { href: '/contato', label: 'Contato' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Detecta scroll para mudar estilo do header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Bloqueia scroll quando menu mobile está aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
        <div
          className="mx-auto w-fit rounded-full backdrop-blur-md transition-all duration-300"
          style={{
            backgroundColor: 'rgba(7, 7, 7, 0.2)',
            border: '1px solid rgba(31, 31, 31, 1)',
            paddingLeft: '50px',
            paddingRight: '50px',
          }}
        >
          <div className="flex items-center justify-center h-20 gap-12">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0 h-full py-4">
              <Image
                src="/images/logo/logo-novidade-urbana-amarelo-notext.svg"
                alt="Novidade Urbana"
                width={80}
                height={80}
                className="h-full w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-brand-yellow transition-colors whitespace-nowrap"
                  style={{ fontSize: '16px', fontWeight: 500 }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2 hover:text-brand-yellow transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuMobile}
          >
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/95 backdrop-blur-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <div className="relative h-full flex flex-col items-center justify-center">
              <nav className="flex flex-col items-center gap-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    custom={index}
                    variants={menuItem}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-white text-3xl font-bold uppercase tracking-wide hover:text-brand-yellow transition-colors"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
