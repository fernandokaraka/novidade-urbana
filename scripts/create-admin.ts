import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import 'dotenv/config'

const prisma = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL,
})

async function main() {
  const hashedPassword = await bcrypt.hash('admin123', 10)

  const admin = await prisma.user.create({
    data: {
      name: 'Admin Novidade Urbana',
      email: 'admin@novidadeurbana.com',
      password: hashedPassword,
      role: 'ADMIN',
    },
  })

  console.log('✅ Usuário admin criado com sucesso!')
  console.log('Email: admin@novidadeurbana.com')
  console.log('Senha: admin123')
  console.log('\nID:', admin.id)
}

main()
  .catch((e) => {
    console.error('❌ Erro:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
