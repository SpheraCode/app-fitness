const clientData = {
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
    }

const memberData = {
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
    }

const userByEmailData = {
   id: 'a8b451b2-20fc-463b-8694-d5a8b4e2b63f',
   firstName: 'Jon',
   lastName: 'Doe',
   email: 'admin@example.com',
   password: 'hashed_password_aqui_1',
   createdAt: '2025-08-21T17:10:16.932Z',
   updatedAt: '2025-08-21T17:10:16.932Z'
  }

module.exports = {
  memberData,
  clientData,
  userByEmailData,
}