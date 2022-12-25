const data_schema = require('../models/user')
const { hashPassword } = require('../utils/helper')

const adduser = async (req,res,type) => {
    if(!req.body.password || !req.body.confirmPassword){
        res.sendStatus(400)
    }
    else if(req.body.password !== req.body.confirmPassword){
        res.status(409).send({err : "Passwords doesn't match"})
    } else{
        const li = ['firstName','middleName','lastName','password','email','role']
        let count = 0
        req.body.role = type;
        delete req.body.confirmPassword
        const properties = Object.getOwnPropertyNames(req.body)
        for(let i = 0;i < properties.length;i++){
            if(!li.includes(properties[i]))
                break
            count += 1
        }
        if(count === 6 || (count === 5 && req.body.middleName === undefined)){
             req.body.password = hashPassword(req.body.password);
            const user = await data_schema.findOne({email : req.body.email})
            if(user){
                res.status(409).send({err : "Email already exists"})
            }   
            else{
                data_schema(req.body).save().then(() => {
                    res.sendStatus(201)
                })
            } 
        } else {
            res.sendStatus(400)
        }
    }
}

module.exports =  { adduser }