const { Router } = require('express')
const router = Router()
const {view_all,view_by_id,view_by_id_property} = require('../controllers/view')

router.get("/users",(req,res) => {
    view_all(res,"user")
})

router.get("/users/:id",(req,res) => {
    view_by_id(req,res,"user")
})

router.get("/users/:id/:property", (req, res) => {
    view_by_id_property(req,res,"user")
});

router.get("/admins",(req,res) => {
    if(req.user.type === "admin"){
        view_all(res,"admin")
    }
    else{
        res.sendStatus(401)
    }
})

router.get("/admins/:id",(req,res) => {
    if(req.user.type === "admin"){
        view_by_id(req,res,"admin")
    }
    else{
        res.sendStatus(401)
    }
})

router.get("/admins/:id/:property",(req,res) => {
    if(req.user.type === "admin"){
        view_by_id_property(req,res,"admin")
    }
    else{
        res.sendStatus(401)
    }
})

module.exports = router