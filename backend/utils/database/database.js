const mongoose = require("mongoose");

const connection = mongoose
  .createConnection("mongodb://127.0.0.1:27017/S4Cloud")
  .on("open", () => {
    console.log("db connected");
  })
  .on("error", () => {
    console.log("db error");
  });

module.exports = connection;
