const express = require("express");
require("./db");
const port = 3000;
const app = express();
const userRouter = require("./routers/user");

app.use(express.json());
app.use(["/user", "/users"], userRouter);

const main = async () => {
  try {
    await app.listen(port);
    console.log(`Listening on port ${port}`);
  } catch (err) {
    console.error(err);
  }
};

main();
