const {Router} = require('express')
const router = Router()
const {adduser} = require('../Controllers/add')

router.post('/admin',(req,res) => {
    adduser(req,res,"admin")
})

router.post('/user',(req,res) => {
    adduser(req,res,"user")
})

module.exports = router