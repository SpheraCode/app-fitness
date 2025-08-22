const prisma = require('../db');

// cria usuário e adiciona a tabela member no banco de dados
const createMember = async (member) => prisma.baseUSer.create(
  {
    data: { ...member },
  }
);

// cria usuário e adiciona a tabela client no banco de dados
const createClient = async (client) => prisma.baseUSer.create(
  {
    data: { ...client },
  }
);

// faz a busca de um determinado usuário com base no email
const getUserByEmail = async (email) => prisma.baseUSer.findUnique({ where: { email } });

module.exports = {
  createClient,
  createMember,
  getUserByEmail
}