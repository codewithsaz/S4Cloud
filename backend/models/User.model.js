const mongoose = require("mongoose");
const db = require("../utils/database/database");
const { v4: uuidv4 } = require("uuid");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  usedStorage: {
    type: Number,
    default: 0,
  },
  maxStorage: {
    type: Number,
    default: 1000000000,
  },
});

const userModel = db.model("user", userSchema);

module.exports = userModel;
