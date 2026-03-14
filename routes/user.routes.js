const express = require("express");
const validate = require("../middlewares/validate.middlewares");
const {
  registerSchema,
  addUserDetailsSchema,
} = require("../validations/user.validation");
const userController = require("../controllers/user.controllers");

const router = express.Router();
router.post("/users", validate(registerSchema), userController.userRegister);
router.get("/users", userController.usersList);

router.post(
  "/users/details",
  validate(addUserDetailsSchema),
  userController.addUserDetails,
);

module.exports = router;
