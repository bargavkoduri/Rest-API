const data_schema = require("../schemas/user")

const updateFun = (req,res,type) => {
    const li = ["firstName", "middleName", "lastName", "email", "role"];
    if(req.body.id === undefined)
        res.send("Need Id to update")
    else{
        const {id} = req.body
        delete req.body.id
        const properties = Object.getOwnPropertyNames(req.body)
        for(let i = 0;i < properties.length;i++){
            if(!li.includes(properties[i])){
                return res.send("Invalid field names to update")
            }
        }
        data_schema.findOneAndUpdate({_id : id,role : type},req.body,(err,data) => {
            if(err){
                if(err.codeName && err.codeName === "DuplicateKey")
                    return res.status(409).send({err : "Email already exists"})
                else
                    res.status(500).send({err : "Unable to update"})
            }
            else if(!data){
                res.status(200).send({err : "Unable to find User"})
            }
            else{
                res.sendStatus(200)
            }
        })
    }
}

module.exports = {updateFun}