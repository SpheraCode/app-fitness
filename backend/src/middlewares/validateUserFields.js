const { addNewUser } = require('./schemas');

const validateNewUser = (user) => {
  const { error } = addNewUser.validate(user);

  if (error) return error.message;  
};

module.exports = (req, res, next) => {
  const error = validateNewUser(req.body);

  if (error) return res.status(400).json({ message: error });
  next();
};