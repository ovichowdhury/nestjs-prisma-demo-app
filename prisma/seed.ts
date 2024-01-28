import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const note1 = await prisma.notes.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: 'Good First Note',
      desc: 'Welcome Note',
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
