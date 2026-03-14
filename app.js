const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("./upload", express.static("uploads"));

const userRoutes = require("./routes/user.routes");
const imageRoutes = require("./routes/image.routes");
const authRoutes = require("./routes/auth.routes");
app.use(authRoutes);
app.use(imageRoutes);
app.use(userRoutes);
module.exports = app;
