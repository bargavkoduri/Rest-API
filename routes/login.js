const { Router } = require("express");
const { loginFun } = require("../Controllers/login")
const router = Router();

router.post('/',loginFun)

module.exports = router