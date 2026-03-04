// const userLoginService = ;

const { successHandle, errorHandle } = require("../utils/response.utils");

async function userLogin(req, res) {
  return successHandle(res, true, 200, "message");
}

module.exports = {
  userLogin,
};
