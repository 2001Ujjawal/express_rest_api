const express = require("express");
const demoController = require("../controllers/demo.controllers");

const router = express.Router();

router.get("/demo", demoController.index);
router.post("/demo", demoController.postRequestTest);


module.exports = router;
