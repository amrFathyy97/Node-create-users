const express = require("express");

const User = require("../models/user");

const router = express.Router();

const checkRequired = require("../middlewares/checkRequired");

router.get("/", async (req, res, next) => {
  try {
    res.send("hello world!");
  } catch (err) {
    res.status(501).send(err);
  }
});

router.post(
  "/",
  checkRequired(["username", "password", "age"]),
  async (req, res, next) => {
    try {
      const user = await new User({
        username: req.body.username,
        age: req.body.age,
        password: req.body.password,
      });
      await user.save();
      res.send(user);
    } catch (err) {
      next(err);
    }
  }
);

router.use((err, req, res, next) => {
  res.status(401).send({
    massage: `missing ${err}`,
  });
});

module.exports = router;
