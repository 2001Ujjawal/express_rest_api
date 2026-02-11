const jwt = require("jsonwebtoken");
const env = require("dotenv");
env.config();
function jwtSign(jwtPayload) {
  return jwt.sign(jwtPayload, env.JWT_SECRET, {
    expiresIn: "1d",
  });
}

function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}

module.exports = {
  jwtTokenCreation: jwtSign,
  verifyToken: verifyToken,
};
