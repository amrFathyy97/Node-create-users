const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

schema.pre("save", async function () {
  const user = this;
  if (user.isModified) {
    const hashedPassword = await bcrypt.hash(user.password, 6);
    user.password = hashedPassword;
  }
});

const schemaModel = mongoose.model("User", schema);

module.exports = schemaModel;
