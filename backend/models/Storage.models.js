const mongoose = require("mongoose");
const db = require("../utils/database/database");
const { v4: uuidv4 } = require("uuid");
const { Schema, model } = mongoose;

const storageSchema = new Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  userId: {
    type: String,
    required: true,
  },
  fileName: {
    type: String,
    required: true,
  },
  fileType: {
    type: String,
    required: true,
  },
  fileSize: {
    type: Number,
    required: true,
  },
  fileUploadDate: {
    type: String,
    required: true,
  },
  fileUrl: {
    type: String,
    required: true,
  },
  fileKey: {
    type: String,
    required: true,
  },
});

const storageModel = db.model("storage", storageSchema);

module.exports = storageModel;
