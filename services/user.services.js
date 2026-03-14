const model = require("../models");

const commonUtil = require("../utils/common.utils");
const bcrypt = require("bcrypt");

async function createUser(requestData) {
  try {
    const { name, email, mobile, password } = requestData;
    const existingUser = await model.UserModel.findOne({
      where: { email },
    });

    if (existingUser) {
      const error = new Error("Email already exists");
      error.statusCode = 409;
      throw error;
    }
    const hashPassword = await bcrypt.hash(password, 10);
    return await model.UserModel.create({
      full_name: name,
      uid: await commonUtil.generateUid(),
      email,
      password: hashPassword,
      mobile,
    });
  } catch (error) {
    throw error;
  }
}

//////////////////////////////////////////////////////////

async function userRegister(data) {
  try {
    const { name, email, password, mobile } = data;

    const existingUser = await model.UserRegisterModel.findOne({
      where: { email },
    });

    if (existingUser) {
      throw new Error("Email already exists");
    }
    const hashPassword = await bcrypt.hash(password, 10);

    return await model.UserRegisterModel.create({
      full_name: name,
      uid: await commonUtil.generateUid(),
      email,
      password: hashPassword,
      mobile,
    });
  } catch (error) {
    throw error;
  }
}

async function getUsers() {
  try {
    const users = await model.UserRegisterModel.findAll({
      order: [["createdAt", "DESC"]],
      attributes: ["id", "full_name", "email"],
      limit: 1,
      offset: 2,
    });

    return users;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  userRegister,
  getUsers,
  createUser,
};
