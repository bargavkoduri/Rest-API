const {Router} = require('express')
const router = Router()
const {adduser} = require('../controllers/add')

router.post('/admin',(req,res) => {
    if(req.user.type === "admin"){
        adduser(req,res,"admin")
    } else {
        res.sendStatus(401)
    }
})

router.post('/user',(req,res) => {
    adduser(req,res,"user")
})

module.exports = router