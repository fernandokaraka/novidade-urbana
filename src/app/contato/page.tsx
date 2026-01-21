import { Metadata } from 'next'
import { PublicLayout } from '@/components/layout'
import { ContactForm } from '@/components/contact'

export const metadata: Metadata = {
  title: 'Contato | Novidade Urbana',
  description: 'Entre em contato com a Novidade Urbana. Estamos prontos para conversar sobre seu projeto artístico.',
}

export default function ContatoPage() {
  return (
    <PublicLayout>
      <ContactForm />
    </PublicLayout>
  )
}
