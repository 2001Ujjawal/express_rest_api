const responseHandler = require("../utils/response.utils");

function demoResponseTestService(req) {
  return responseHandler.successHandle(true, 200, "demo api response test", {
    demo: {
      name: "ujjawal",
    },
  });
}

module.exports = {
  demoResponseTestService: demoResponseTestService,
};
