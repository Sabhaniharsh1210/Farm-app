var jwt = require('jsonwebtoken');

exports.userchecktoken = (req,res,next) => {
    jwt.verify(req.headers.authorization, 'user', next)
}

exports.buyerchecktoken = (req,res,next) => {
    jwt.verify(req.headers.authorization, 'buyer', next)
}