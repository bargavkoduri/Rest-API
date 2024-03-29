const data_schema = require("../models/user");

const view_all = (res,type) => {
    data_schema.find({role : type},{password : 0,createdAt : 0,updatedAt : 0,__v : 0}).then(
        (data) => {
            res.send(data)
        }
    )
}

const view_by_id = (req,res,role) => {
    const {id} = req.params
    data_schema.findOne({_id : id,role : role}, {_id: 0,password: 0,createdAt: 0,updatedAt: 0,__v: 0,},(err,data) => {
        if(data)
            res.send(data)
        else
            res.send("User not found")
    })
}

const view_by_id_property = (req,res,role) => {
    const li = ["firstName", "MiddleName", "LastName", "email", "role","department"];
    const {id} = req.params
    const {property} = req.params
    const valid_prop = li.find(item => item === property)
    if(valid_prop === undefined){
        res.status(400).send("Invalid field")
    }
    else{
        data_schema.findOne({_id : id,role : role},{[property] : 1,_id : 0},(err,data) => {
            if(data)
                res.send(data)
            else
                res.send("User not found")
        })
    }
}

module.exports = {view_all,view_by_id,view_by_id_property}