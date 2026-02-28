const userService = require("../services/user.services");
const responseUtil = require("../utils/response.utils");

async function userRegister(req, res) {
  try {
    const user = await userService.userRegister(req.body);
    return res.status(201).json({
      status: true,
      message: "User registered successfully",
      data: user,
    });
  } catch (error) {
      // console.log(error.original); 
    return responseUtil.catchErrorHandle(res, error);
  }
}

function userDetailsById(req, res) {}

async function usersList(req, res) {
  try {
    const users = await userService.getUsers();
    
    // if (users.length === 1) {
      return responseUtil.successHandle(res, false, 200, "Users List", {
        users,
      });
    // }
    // return responseUtil.errorHandle(res, false, 200, "Users List", {});
  } catch (error) {
    return responseUtil.catchErrorHandle(res, error);
  }
}

module.exports = {
  userRegister: userRegister,
  usersList,
};
