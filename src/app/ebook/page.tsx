import { Metadata } from 'next'
import { PublicLayout } from '@/components/layout'
import { EbookHero, EbookContent } from '@/components/ebook'

export const metadata: Metadata = {
  title: 'A Resposta - Ebook | Novidade Urbana',
  description:
    'A Resposta: gestão, produção musical e a construção de grandes carreiras. Livro de Marcos Ascena, Marcelo Portuga, Fábio Príncipe e Doninha, disponível na Amazon.',
}

export default function EbookPage() {
  return (
    <PublicLayout>
      <EbookHero />
      <EbookContent />
    </PublicLayout>
  )
}
