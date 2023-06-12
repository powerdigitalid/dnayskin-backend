const PrismaClient = require('@prisma/client').PrismaClient
const prisma = new PrismaClient()
const passwordGen = require('../src/v1/utils/password').passwordGen

async function main() {
  const users = await prisma.user.createMany({
    data: [
      {
        username: 'vita',
        password: passwordGen('rumahathanowner'),
      },
      {
        username: 'songgon',
        password: passwordGen('cabangsonggon01'),
      },
      {
        username: 'rogojampi',
        password: passwordGen('cabangrogojampi02'),
      },
      {
        username: 'melaya',
        password: passwordGen('cabangmelaya03'),
      },
      {
        username: 'admin',
        password: passwordGen('pdt'),
      }
    ],
  })
  console.log({ users })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })