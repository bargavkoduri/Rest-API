const data_schema = require('../schemas/user')
const { hashPassword } = require('../utils/helper')

const adduser = async (req,res,type) => {
    // console.log(req.body)
    if(req.body.password !== req.body.confirmPassword){
        res.send("Passwords doesn't match")
    } else{
        req.body.role = type;
        req.body.password = hashPassword(req.body.password);
        req.body.confirmPassword = undefined
        const user = await data_schema.findOne({email : req.body.email})
        if(user){
            res.send("Email already exists")
        }   
        else{
            data_schema(req.body).save().then(() => {
                res.sendStatus(201)
            })
        } 
    }
}

module.exports =  { adduser }