const userService = require("../services/user.services");
const responseUtil = require("../utils/response.utils");

function userRegister(req, res) {
  console.log("req", req);
}

function userDetailsById(req, res) {}

async function usersList(req, res) {
  try {
    const users = await userService.getUsers();

    if (users.length === 1) {
      return responseUtil.successHandle(res, false, 200, "Users List", {
        users,
      });
    }
    return responseUtil.errorHandle(res, false, 200, "Users List", {});
  } catch (error) {
    console.log("==================user controller", error);

    return responseUtil.catchErrorHandle(res, error);
  }
}

module.exports = {
  userRegister: userRegister,
  usersList,
};
