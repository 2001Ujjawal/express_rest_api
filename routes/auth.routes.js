const express = require("express");
const { userLoginSchema } = require("../validations/userLogin.validation");
const validator = require("../middlewares/validate.middlewares");

const authController = require("../controllers/auth.controller");
const router = express.Router();
console.log("============== " , express.Router);

router.post("/login", validator(userLoginSchema), authController.userLogin);

module.exports = router;
