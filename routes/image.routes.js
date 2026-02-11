const express = require("express");
const imageUploadController = require("../controllers/imageUpload.controller");
const uploadUtils = require("../utils/uploads.utils");
const router = express.Router();

router.post(
  "/upload",
  uploadUtils.upload.single("image"),
  imageUploadController.upload,
);


module.exports = router ; 