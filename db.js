const mongoose = require("mongoose");

const main = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/students");
    console.log("Successfuly connected to MongoDB");
  } catch (err) {
    console.error(err);
  }
};

main();
