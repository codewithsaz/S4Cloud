const express = require("express");
const Router = express.Router();

const authenticator = require("../middlewares/authenticator");
const upload = require("../helpers/upload.helper");
const uploadController = require("../controllers/Upload.controller");

Router.post(
  "/upload",
  authenticator.authenticate,
  upload.single("file"),
  uploadController.uploadSingle
);

module.exports = Router;
