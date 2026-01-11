import { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { WhatsAppButton } from '../ui/WhatsAppButton'

interface PublicLayoutProps {
  children: ReactNode
}

export function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
