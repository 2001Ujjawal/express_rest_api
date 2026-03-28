const { v4: uuidv4 } = require("uuid");

async function generateUid() {
  return uuidv4();
}

module.exports = { generateUid };
