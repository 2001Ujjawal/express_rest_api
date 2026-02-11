const express = require("express");
const app = express();
app.use(express.json());
app.use("./upload", express.static("uploads"));

const userRoutes = require("./routes/user.routes");
const imageRoutes = require("./routes/image.routes");
console.log("===============", imageRoutes);

app.use(imageRoutes);
app.use(userRoutes);
console.log("node server run");
module.exports = app;
