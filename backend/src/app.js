const express = require('express');

const app = express();

app.use(express.json());


//rota de teste
app.get('/api/ping', (req, res) => res.status(200).json({ message: 'pong' }));

module.exports = app;