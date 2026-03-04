const express = require("express");
const validate = require("../middlewares/validate.middlewares");
const { userLoginSchema } = require("../validations/userLogin.validation");
const authController = require("../controllers/auth.controller");

const router = express.Router();
router.post("/login", validate(userLoginSchema), authController.userLogin);
module.exports = router;
