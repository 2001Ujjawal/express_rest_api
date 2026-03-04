const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("./upload", express.static("uploads"));

const userRoutes = require("./routes/user.routes");
const imageRoutes = require("./routes/image.routes");
const authRoutes = require("./routes/auth.routes");
app.use(imageRoutes);
app.use(userRoutes);
app.use(authRoutes);
module.exports = app;
