const { PrismaClient } = require('../generated/prisma/index')

const prisma = new PrismaClient();

async function main() {
  console.log('🔹 Limpando dados antigos...');
  await prisma.member.deleteMany();
  await prisma.client.deleteMany();
  await prisma.baseUSer.deleteMany();

  console.log('🔹 Criando BaseUser como Member...');
  const memberUser = await prisma.baseUSer.create({
    data: {
      firstName: 'Jon',
      lastName: 'Doe',
      email: 'admin@example.com',
      password: 'hashed_password_aqui_1',
      member: {
        create: {
          phone: '11999999999',
          bio: 'Administrador da plataforma',
          isAdmin: true
        }
      }
    },
    include: { member: true, client: true }
  });
  console.log('✅ BaseUser Member criado:', memberUser);

  console.log('🔹 Criando BaseUser como Client...');
  const clientUser = await prisma.baseUSer.create({
    data: {
      firstName: 'Maria',
      lastName: 'Silva',
      email: 'client@example.com',
      password: 'hashed_password_aqui_2',
      client: {
        create: {
          isActive: true,
          birthday: new Date('2000-05-20'),
          height: 1.65,
          weight: 58.3
        }
      }
    },
    include: { member: true, client: true }
  });
  console.log('✅ BaseUser Client criado:', clientUser);
}

main()
  .catch((e) => {
    console.error('❌ Erro no seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
