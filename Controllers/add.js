const data_schema = require('../schemas/user')
const { hashPassword } = require('../utils/helper')

const adduser = (req,res,type) => {
    // console.log(req.body);
    req.body.role = type
    req.body.password = hashPassword(req.body.password)
    data_schema(req.body).save().then(() => {
        res.sendStatus(201)
    })
}

module.exports =  { adduser }