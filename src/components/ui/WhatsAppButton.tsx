'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'

interface WhatsAppButtonProps {
  phoneNumber?: string
  message?: string
}

export function WhatsAppButton({
  phoneNumber = '5511917634210',
  message = 'Olá! Gostaria de mais informações.',
}: WhatsAppButtonProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  // Mostra o botão após scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Mostra tooltip automaticamente após 3 segundos (apenas uma vez)
  useEffect(() => {
    const hasShownTooltip = localStorage.getItem('whatsapp-tooltip-shown')

    if (!hasShownTooltip && isVisible) {
      const timer = setTimeout(() => {
        setShowTooltip(true)
        localStorage.setItem('whatsapp-tooltip-shown', 'true')

        // Esconde tooltip após 5 segundos
        setTimeout(() => {
          setShowTooltip(false)
        }, 5000)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [isVisible])

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3">
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white rounded-lg shadow-xl p-4 max-w-xs"
              >
                <button
                  onClick={() => setShowTooltip(false)}
                  className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                  aria-label="Fechar tooltip"
                >
                  <X size={16} />
                </button>
                <p className="text-sm text-gray-700 pr-4">
                  <strong className="text-brand-yellow">
                    Precisa de ajuda?
                  </strong>
                  <br />
                  Fale conosco via WhatsApp!
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Botão WhatsApp */}
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 100 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleClick}
            className="relative w-14 h-14 lg:w-16 lg:h-16 bg-[#25D366] rounded-full shadow-lg hover:shadow-2xl flex items-center justify-center text-white transition-shadow group"
            aria-label="Abrir WhatsApp"
          >
            {/* Pulse Animation */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75" />

            {/* Icon */}
            <MessageCircle size={28} className="relative z-10" />

            {/* Hover Tooltip */}
            <span className="absolute bottom-full mb-2 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gray-900 text-white text-xs py-1 px-3 rounded whitespace-nowrap">
              Fale Conosco
            </span>
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  )
}
