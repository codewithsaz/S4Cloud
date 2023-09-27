const express = require("express");
const Router = express.Router();

const authenticator = require("../middlewares/authenticator");
const StorageController = require("../controllers/Storage.controller");

Router.get(
  "/files/all",
  authenticator.authenticate,
  StorageController.allFiles
);

Router.delete(
  "/files/:fileID",
  authenticator.authenticate,
  StorageController.deleteFile
);
module.exports = Router;
