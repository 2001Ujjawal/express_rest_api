const bcrypt = require("bcrypt");
const model = require("../models");

class UserLoginService {
  async validationUserCredentials(data) {
    const { email, password } = data;

    const user = await model.UserRegisterModel.findOne({ where: { email } });

    if (!user) return false;

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return false;

    const rememberToken = await this.createRememberToken(email);

    return {
      user,
      rememberToken,
    };
  }

  async createRememberToken(email) {
    return await bcrypt.hash(email, 10);
  }
}

module.exports = new UserLoginService();
