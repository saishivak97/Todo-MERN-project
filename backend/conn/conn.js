const mongoose = require("mongoose");

const conn = async (req, res) => {
  try {
    await mongoose.connect("use-your-mongo-db").then(() => {
      console.log("Connected");
    });
  } catch (error) {
    console.log(error);
  }
};
conn();
