const { Router } = require('express');
const { userController } = require('../controllers/index');
const { validateUserFields } = require('../middlewares')

const userRouter = Router();

// rota para criar novo usuário
userRouter.post('/', validateUserFields, userController.createUser);

module.exports = userRouter;