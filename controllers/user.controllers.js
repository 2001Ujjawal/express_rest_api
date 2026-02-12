const userService = require("../services/user.services");
const responseUtil = require("../utils/response.utils");

function userRegister(req, res) {
  console.log("requestName", req.name);

  return responseUtil.successHandle(res, true, 200, "check", {
    requestData: req.name,
  });
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
    return responseUtil.catchErrorHandle(res, error);
  }
}

module.exports = {
  userRegister: userRegister,
  usersList,
};
