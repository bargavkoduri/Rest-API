const { updateFun } = require("../controllers/update");
const { Router } = require("express");
const router = Router();

router.put("/admin", (req, res) => {
  if (req.user.type === "admin") {
    updateFun(req, res, "admin");
  } else {
    res.sendStatus(401);
  }
});

router.put("/user", (req, res) => {
  updateFun(req, res, "user");
});

module.exports = router;
