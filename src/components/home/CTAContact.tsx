'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export function CTAContact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implementar envio do formulário
    console.log('Form data:', formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden bg-black">
      <div className="container-site relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Title */}
            <h2 className="mb-4">
              <span
                className="text-4xl md:text-6xl lg:text-7xl"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  color: '#FFFFFF',
                  display: 'block',
                }}
              >
                Vamos
              </span>
              <span
                className="text-4xl md:text-6xl lg:text-7xl"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  color: '#FFFFFF',
                  display: 'block',
                }}
              >
                conversar
              </span>
            </h2>

            {/* Subtitle */}
            <p
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '24px',
                letterSpacing: '0',
                color: '#CCCCCC',
              }}
              className="mb-8"
            >
              Amet nisl ut eget accumsan eleifend tincidunt.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome e Sobrenome */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    style={{
                      fontFamily: 'var(--font-tt-runs)',
                      fontSize: '14px',
                      fontWeight: 400,
                      lineHeight: '20px',
                      color: '#FFFFFF',
                    }}
                    className="block mb-2"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Nome"
                    required
                    className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-yellow transition-colors"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '14px',
                      backgroundColor: '#1B1B1B',
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      borderColor: '#333741',
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    style={{
                      fontFamily: 'var(--font-tt-runs)',
                      fontSize: '14px',
                      fontWeight: 400,
                      lineHeight: '20px',
                      color: '#FFFFFF',
                    }}
                    className="block mb-2"
                  >
                    Sobrenome
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Sobrenome"
                    required
                    className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-yellow transition-colors"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '14px',
                      backgroundColor: '#1B1B1B',
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      borderColor: '#333741',
                    }}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '20px',
                    color: '#FFFFFF',
                  }}
                  className="block mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  required
                  className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-yellow transition-colors"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '14px',
                    backgroundColor: '#1B1B1B',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: '#333741',
                  }}
                />
              </div>

              {/* Telefone */}
              <div>
                <label
                  htmlFor="phone"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '20px',
                    color: '#FFFFFF',
                  }}
                  className="block mb-2"
                >
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(12) 98225 - 5252"
                  required
                  className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-yellow transition-colors"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '14px',
                    backgroundColor: '#1B1B1B',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: '#333741',
                  }}
                />
              </div>

              {/* Mensagem */}
              <div>
                <label
                  htmlFor="message"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '20px',
                    color: '#FFFFFF',
                  }}
                  className="block mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Nos deixa uma mensagem..."
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-yellow transition-colors resize-none"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '14px',
                    backgroundColor: '#1B1B1B',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: '#333741',
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-10 py-4 bg-brand-yellow text-black rounded-lg hover:bg-yellow-400 transition-colors"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '16px',
                  fontWeight: 700,
                  lineHeight: '19px',
                  letterSpacing: '0',
                }}
              >
                Enviar
              </button>
            </form>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative hidden lg:block h-full"
          >
            <div className="relative h-full rounded-2xl overflow-hidden">
              <Image
                src="/images/img-contato-home.png"
                alt="Contato"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
