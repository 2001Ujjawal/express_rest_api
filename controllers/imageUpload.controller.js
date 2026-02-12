const responseUtil = require("../utils/response.utils");

function upload(req, res) {
  try {
    if (req.file.filename) {
      return responseUtil.successHandle(
        res,
        true,
        201,
        "File upload successfully",
        { imageUploadedPath: req.file.filename },
      );
    } else {
      return responseUtil.errorHandle(res, true, 500, "Something went wrong");
    }
  } catch (error) {
    console.log("================= file upload error ", error);
    return responseUtil.catchErrorHandle(res, error);
  }
}

module.exports = {
  upload,
};
