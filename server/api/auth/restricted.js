  
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    const secret = process.env.JWT_SECRET || 'is it secret';

    jwt.verify(token, secret, (err, decodedToken) => {
      if(err) {
        res.status(401).json({ message: 'Invalid Credentials' });
      } else {
        req.decodedJwt = decodedToken;
        req.user = decodedToken.user; 
        console.log('decoded token', decodedToken)
        next();
      }
    });
  } else {
    res.status(400).json({ message: "YOU SHALL NOT PASS"})
  }
};