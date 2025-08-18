const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const extractToken = (token) => token.split(' ')[1];

module.exports = (req, res, next) => {
  const bearerToken = req.header('Authorization');
  
  if (!bearerToken) return res.status(401).json({ message: 'Token not found' });

  const token = extractToken(bearerToken);

  try {
    const decode = jwt.verify(token, secret);
    
    req.user = decode;
  next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};