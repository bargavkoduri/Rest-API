const data_schema = require('../models/user')
const { hashPassword } = require('../utils/helper')

const adduser = async (req,res,type) => {
    if(!req.body.password || !req.body.confirmPassword){
        res.status(400).send({err : "Necessary fields must be present in body"});
    }
    else if(req.body.password !== req.body.confirmPassword){
        res.status(409).send({err : "Passwords doesn't match"})
    } else{
        const li = ['firstName','middleName','lastName','password','email','role','department']
        let count = 0
        req.body.role = type;
        delete req.body.confirmPassword
        const properties = Object.getOwnPropertyNames(req.body)
        for(let i = 0;i < properties.length;i++){
            if(!li.includes(properties[i]))
                break
            count += 1
        }
        if(count === 7 || (count === 6 && (req.body.middleName === undefined || req.body.department === undefined)) || (count === 5 && req.body.middleName === undefined && req.body.department === undefined)){
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
            res.status(400).send({err : "Neceesary fields must be present in body"})
        }
    }
}

module.exports =  { adduser }