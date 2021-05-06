const config = require('config')
const jwt = require('jsonwebtoken')

async function auth(req,res,next){
    const token = req.header('x-auth-token');
    if (token == null){
        res.status(401).json({
            "msg":"Token Not Found. Authentication Denied!!"
        })
    }
    try {
        console.log("RUN",config.get("SecretKey"),token)
        const res = await jwt.verify(token,config.get("SecretKey"))
        console.log(res)
        req.user = res
        next()
    } catch (error) {
        res.status(401).json({"msg":"Invalid Token"}) 
    }
}

module.exports = auth