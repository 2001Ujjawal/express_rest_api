const express = require("express");
const validate = require("../middlewares/validate.middlewares");
const {registerSchema} = require("../validations/user.validation") ; 
const userController = require("../controllers/user.controllers");

const router = express.Router();
router.post("/users", validate(registerSchema) ,  userController.userRegister);
router.get("/users", userController.usersList);
module.exports = router;
