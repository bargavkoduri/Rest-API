const {updateFun} = require("../Controllers/update")
const {Router} = require('express')
const router = Router()

router.post('/admin',(req,res) => {
    if(req.user.type === "admin"){
        updateFun(req,res,"admin")
    }
    else{
        res.sendStatus(401)
    }
})

router.post('/user',(req,res) => {
    updateFun(req,res,"user")
})

module.exports = router