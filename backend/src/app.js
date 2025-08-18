const express = require('express');
const { userRouter } = require('./routes/index')
const { auth } = require('./middlewares/index')

const app = express();

app.use(express.json());
app.use('/api/users', userRouter);

//rota de teste
app.get('/api/ping', (_req, res) => res.status(200).json({ message: 'pong' }));

// middleware de autenticação jwt
app.use(auth)

module.exports = app;