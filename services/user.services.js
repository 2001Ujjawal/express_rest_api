const model = require("../models");
const { sequelize, Sequelize } = require("../models");
const commonUtil = require("../utils/common.utils");
const errorHandleUtil = require("../utils/errorHandle.utils");
const bcrypt = require("bcrypt");

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

async function userDetails(userId) {
  const user = await sequelize.query(
    `SELECT 
      u.*,
      ud.*
    FROM user_registrations u
    LEFT JOIN user_details ud
      ON u.uid = ud.user_uid
    WHERE u.uid = :userId`,
    {
      replacements: { userId },
      type: sequelize.QueryTypes.SELECT,
    },
  );
  
  console.log("user details====", user);

  return user;
  
}

async function addUserDetails(data) {
  try {
    const { user_id, address, secondAddress, phone } = data;
    const userDetailsData = {
      address: address,
      second_address: secondAddress,
      phone: phone,
      uid: await commonUtil.generateUid(),
      user_uid: user_id,
    };
    return await model.UserDetailsModel.create(userDetailsData);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  userRegister,
  getUsers,
  addUserDetails,
  userDetails,
};
