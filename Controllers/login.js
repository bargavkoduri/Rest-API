const data_schema = require("../schemas/user");
const {comparePasswords} = require("../utils/helper")
const { generateToken } = require("../utils/jwt")
const loginFun = (req, res) => {
    if(req.body.email === undefined || req.body.password === undefined)
     return res.sendStatus(400)
    data_schema.findOne({email : req.body.email}).then(
       (data) => {
         if(data && comparePasswords(req.body.password,data.password)){
            res.send(generateToken({
               email : data.email,
               type : data.role
            }))
         } else{
            res.send('Invalid Login Credentials')
         }
       } 
    )
};

module.exports = { loginFun };
