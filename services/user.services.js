const model = require("../models");
// const commonUtils = ; 

function userRegister(req) {

}

async function getUsers() {
  try {
    const users = await model.UserRegisterModel.findAll();
    return users;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  userRegister,
  getUsers,
};
