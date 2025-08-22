const { PrismaClient } =require('../generated/prisma/index');

const prisma = new PrismaClient();

module.exports = prisma;