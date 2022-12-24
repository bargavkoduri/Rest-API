const data_schema = require("../schemas/user");
const {comparePasswords} = require("../utils/helper")
const { generateToken } = require("../utils/jwt")
const loginFun = (req, res) => {
    // console.log(req.body)
    data_schema.findOne({email : req.body.email}).then(
       (data) => {
         console.log(data)
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
