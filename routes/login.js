const { Router } = require("express");
const { loginFun } = require("../controllers/login")
const router = Router();

router.post('/',loginFun)

module.exports = router