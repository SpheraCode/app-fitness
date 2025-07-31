const express = require('express');
// const json = require('express')
// import { prisma } from './db.js';
// const prismaClient = require('./db.js')

const { PrismaClient } = require("../generated/prisma/index");

const prisma = new PrismaClient()

const app = express();

app.use(express.json());

//rota de teste
app.get('/api/ping', (_req, res) => res.status(200).json({ message: 'pong' }));

// rota GET para testar conexão com o banco de dados
app.get('/api/members', async (req, res) => {
  const members = await prisma.members.findMany()
  res.status(200).json(members)
});

// rota GET/:id para testar conexão com o banco de dados
app.get('/api/members/:id', async (req, res) => {
  const { id } = req.params;

  const member = await prisma.members.findUnique({
    where: {
      id
    }
  })
  res.status(200).json(member)
});

// rota POST para testar conexão com o banco de dados
app.post('/api/members', async (req, res) => {
  const data = req.body

  const newUser = await prisma.members.create({
    data: {
      ...data
    }
  })
  res.status(201).json(newUser)
});

// rota PUT para testar conexão com o banco de dados
app.put('/api/members/:id', async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  await prisma.members.update({
    where: {
      id
    },
    data: {
      ...data
    }
  })

  res.status(200).json(data)
});

// rota DELETE para testar conexão com o banco de dados
app.delete('/api/members/:id', async (req, res) => {
  const { id } = req.params;
  await prisma.members.delete({
    where: {
      id
    }
  })

  res.status(204).end()
});

module.exports = app;