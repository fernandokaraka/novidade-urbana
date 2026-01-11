import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'
import bcrypt from 'bcryptjs'
import 'dotenv/config'

const pool = new Pool({ connectionString: process.env.DATABASE_URL })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log('🌱 Iniciando seed...')

  // Criar usuário admin
  const hashedPassword = await bcrypt.hash('admin123', 10)

  const admin = await prisma.user.upsert({
    where: { email: 'admin@novidadeurbana.com' },
    update: {},
    create: {
      name: 'Admin Novidade Urbana',
      email: 'admin@novidadeurbana.com',
      password: hashedPassword,
      role: 'ADMIN',
    },
  })

  console.log('✅ Usuário admin criado!')
  console.log('   Email: admin@novidadeurbana.com')
  console.log('   Senha: admin123')

  // Criar categorias iniciais para projetos
  const projectCategories = [
    { name: 'Shows e Eventos', slug: 'shows-eventos', type: 'PROJECT' as const, color: '#FFC700' },
    { name: 'Turnês', slug: 'turnes', type: 'PROJECT' as const, color: '#FF6B00' },
    { name: 'Festivais', slug: 'festivais', type: 'PROJECT' as const, color: '#000000' },
  ]

  for (const cat of projectCategories) {
    await prisma.category.upsert({
      where: { slug: cat.slug },
      update: {},
      create: cat,
    })
  }

  console.log('✅ Categorias de projetos criadas!')

  // Criar categorias iniciais para artistas
  const artistCategories = [
    { name: 'Rap/Hip-Hop', slug: 'rap-hip-hop', type: 'ARTIST' as const, color: '#FFC700' },
    { name: 'Funk', slug: 'funk', type: 'ARTIST' as const, color: '#FF6B00' },
    { name: 'Pop', slug: 'pop', type: 'ARTIST' as const, color: '#000000' },
    { name: 'Trap', slug: 'trap', type: 'ARTIST' as const, color: '#FF0000' },
  ]

  for (const cat of artistCategories) {
    await prisma.category.upsert({
      where: { slug: cat.slug },
      update: {},
      create: cat,
    })
  }

  console.log('✅ Categorias de artistas criadas!')
  console.log('🎉 Seed finalizado com sucesso!')
}

main()
  .catch((e) => {
    console.error('❌ Erro no seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
