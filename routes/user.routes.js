const express = require("express");
const userController = require("../controllers/user.controllers");
const { route } = require("../app");

const router = express.Router();
// console.log("userRoutes");
router.post("/users" , userController.userRegister) ; 
router.get("/users", userController.usersList);
// router.get("users/:id" , userController.userDetailsById) ;

module.exports = router;
