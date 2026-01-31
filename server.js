const app = require("./app");
const env = require("dotenv");
env.config();

const http = require("http");
const server = http.createServer(app);
const PORT = process.env.PORT;

app.listen(PORT, () =>
  console.log(`server running url :  http://localhost:${PORT}/`),
);
