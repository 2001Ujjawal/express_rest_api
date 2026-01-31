function jsonApiResponse(res, responseData) {
  const statusCode = responseData.statusCode ?? 400;
  const errors = responseData.errors ;  
  return res.status(statusCode).json({
    success: responseData.status,
    statusCode: statusCode,
    errors: responseData.errors ?? null,
    data: responseData.data ?? null,
  });
}

module.exports = {
  jsonApiResponse: jsonApiResponse,
};
