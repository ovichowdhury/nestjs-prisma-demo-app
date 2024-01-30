import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.upsert({
    where: { id: 1 },
    update: {},
    create: {
      email: 'nahid@gmail.com',
      password: 'Era@1234',
    },
  });

  const note1 = await prisma.notes.upsert({
    where: { id: 1 },
    update: {
      authorId: user1.id,
    },
    create: {
      title: 'Good First Note',
      desc: 'Welcome Note',
      authorId: user1.id,
    },
  });
  console.log(note1);
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
