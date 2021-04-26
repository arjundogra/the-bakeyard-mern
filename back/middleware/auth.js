const config = require('../config/default.json')
const jwt = require('jsonwebtoken')

function auth(req,res,next){
    const token = req.header('x-auth-token');
    console.log(token)
    if (!token){
        res.status(401).json({
            "msg":"Token Not Found. Authentication Denied!!"
        })
    }
    try {
        const res = jwt.verify(token,config.SecretKey)
        req.user = res
        next()
    } catch (error) {
        res.status(401).json({"msg":"Invalid Token"}) 
    }
}

module.exports = auth