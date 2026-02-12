function successHandle(res, status, statusCode, message, data) {
  return res.status(statusCode).json({
    status: status,
    statusCode: statusCode,
    message: message,
    data: data,
  });
}

function errorHandle(
  res,
  status = false,
  statusCode = 404,
  message,
  errors = null,
) {
  return res.status(statusCode).json({
    status: status,
    statusCode: statusCode,
    message: message,
    errors: errors,
  });
}
function catchErrorHandle(res, error) {
  return res.status(500).json({
    success: false,
    statusCode: 500,
    message: error?.message,
    error: JSON.stringify(error, Object.getOwnPropertyNames(error)),
  });
}

// function catchErrorHandle(res, error) {
//   return res.status(500).json({
//     success: false,
//     statusCode: 500,
//     message: "catch error throw",
//     error: error ?? null,
//   });
// }

module.exports = {
  successHandle,
  errorHandle,
  catchErrorHandle,
};
