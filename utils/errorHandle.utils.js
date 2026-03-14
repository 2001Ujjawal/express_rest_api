async function throwError(message = "Internal Server Error", statusCode = 500) {
  const error = new Error(message);
  error.statusCode = statusCode;
  throw error;
}

module.exports = {
  throwError,
};
