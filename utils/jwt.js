require('dotenv').config()
const jwt = require('jsonwebtoken')

const generateToken = (user) => {
    return jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
} 

const checkToken = (req,res,next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token === null)
        res.sendStatus(401)
    else{
        jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user) => {
            if(err)
                res.sendStatus(403)
            else{
                req.user = user
                next()
            }
        })
    }
}

module.exports = {generateToken,checkToken}