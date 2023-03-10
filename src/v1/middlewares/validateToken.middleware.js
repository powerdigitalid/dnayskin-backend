require('dotenv').config();
const jwt = require('jsonwebtoken');

export default function validateToken(req, res, next) {
  const token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['authorization'];
  if(token){
    jwt.verify(token, process.env.SECRET, function(err, decoded){
      if(err){
        res.status(403).json({message: "Gagal autentikasi token"});
      }else{
        req.decoded = decoded;
        next();
      }
    });
  }else{
    return res.status(403).json({message: "Tidak ada token tersedia"});
  }
}