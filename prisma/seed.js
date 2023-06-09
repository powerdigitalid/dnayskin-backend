const PrismaClient = require('@prisma/client').PrismaClient
const prisma = new PrismaClient()
const passwordGen = require('../src/v1/utils/password').passwordGen

async function main() {
  const users = await prisma.user.createMany({
    data: [
      {
        username: 'alice',
        password: passwordGen('alice'),
      },
      {
        username: 'bob',
        password: passwordGen('bob'),
      },
      {
        username: 'carol',
        password: passwordGen('carol'),
      },
      {
        username: 'admin',
        password: passwordGen('admin'),
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