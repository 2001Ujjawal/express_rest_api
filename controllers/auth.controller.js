const userLoginService = require("../services/userLogin.services");
const {
  successHandle,
  errorHandle,
  catchErrorHandle,
} = require("../utils/response.utils");

async function userLogin(req, res) {
  try {
    const checkLoginCredentials =
      await userLoginService.validationUserCredentials(req.body);

    if (!checkLoginCredentials) {
      return errorHandle(res, false, 401, "Login failed , please try again");
    }
    const authData = {
      rememberToken: checkLoginCredentials.rememberToken,
    };
    return successHandle(res, true, 200, "User login successfully", {
      user: authData,
    });
  } catch (error) {
    return catchErrorHandle(res, error);
  }
}

module.exports = {
  userLogin,
};
