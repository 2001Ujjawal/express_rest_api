const demoService = require("../services/demo.services");
const responseSend = require("../utils/apiResponse.utils");

function index(req, res) {
  const demoResponseData = demoService.demoResponseTestService(req);
  return responseSend.jsonApiResponse(res, demoResponseData);
}


function postTest(req, res) {
  return res.send("post request");
}


module.exports = {
  index: index,
  postRequestTest: postTest,
};
