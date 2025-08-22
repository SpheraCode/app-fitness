const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { userService } = require('../services/index');

const secret = process.env.JWT_SECRET;

// função responsavel por criar novo usuário sendo ele member ou client
const createUser = async (req, res) => {
  const userData = req.body;
  const userEmail = userData.email

  //configuração do token
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  
  // criptografando senha antes de adicionar ao banco
  const userDataWithHashedPassword = {
    ...userData, password: bcrypt.hashSync(userData.password, 10)
  }

  const token = jwt.sign({ data: { userEmail } }, secret, jwtConfig);

  // verificando se email já existe no banco
  const verifyEmail = await userService.getUserByEmail(userData.email);

  // retorna mensagem de erro caso já exista
  if (verifyEmail) return res.status(409).json({ message: 'User already registered' });

  // adiciona ao banco de dados de acordo com o tipo de usuário 
  if ('member' in userData) {
    await userService.createMember(userDataWithHashedPassword)
  } else {
    await userService.createClient(userDataWithHashedPassword)
  }
  
  // retorna token
  res.status(201).json({ token });
}

module.exports = {
  createUser,
}