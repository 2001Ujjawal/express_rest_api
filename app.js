const express = require("express");
const app = express();
const demoRoutes = require("./routes/demo.routes");

app.get("/", (request, response) => {
  return response.send("hello world");
});


app.use(demoRoutes);

console.log("node server run");

module.exports = app;
