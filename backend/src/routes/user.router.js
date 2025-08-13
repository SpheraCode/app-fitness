const { Router } = require('express');
const { userController } = require('../controllers/index')

const userRouter = Router();

// rota para criar novo usuário
userRouter.post('/', userController.createUser);

module.exports = userRouter;