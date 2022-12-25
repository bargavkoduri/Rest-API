const data_schema = require("../schemas/user");

const view_all = (res,type) => {
    data_schema.find({role : type},{_id : 0,password : 0,createdAt : 0,updatedAt : 0,__v : 0}).then(
        (data) => {
            res.send(data)
        }
    )
}

const view_by_id = (req,res,role) => {
    const {id} = req.params
    data_schema.findOne({_id : id,role : role}, {_id: 0,password: 0,createdAt: 0,updatedAt: 0,__v: 0,}).then(
        (data) => {
            res.send(data)
        }
    )
}

const view_by_id_property = (req,res,role) => {
    const li = ["firstName", "MiddleName", "LastName", "email", "role"];
    const {id} = req.params
    const {property} = req.params
    const valid_prop = li.find(item => item === property)
    if(valid_prop === undefined){
        console.log("Hello")
        res.send([])
    }
    else{
        data_schema.findOne({_id : id,role : role},{[property] : 1,_id : 0}).then(
            (data) => {
                res.send(data)
            }
        )
    }
}

module.exports = {view_all,view_by_id,view_by_id_property}