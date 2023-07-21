const app = require("./app");
const dBConnect = require("./db/db");
require("dotenv").config();

const PORT = process.env.PORT;

const server = async () => {
  app.listen(PORT, () => {
    console.log("Listening at port:", PORT);
  });
  await dBConnect();
};
server();
