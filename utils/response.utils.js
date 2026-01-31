function successHandle(status, statusCode, message, data = null) {
  return {
    status: status,
    statusCode: statusCode,
    message: message,
    data: data,
  };
}

function errorHandle(status, statusCode, message, errors) {
  return {
    status: status,
    statusCode: statusCode,
    message: message,
    data: data,
  };
}

module.exports = {
  successHandle: successHandle,
  errorHandle: errorHandle,
};
