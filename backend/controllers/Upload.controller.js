const upload = require("../helpers/upload.helper");
const util = require("util");
const StorageModel = require("../models/Storage.models");
const UserModel = require("../models/User.model");

exports.uploadSingle = async (req, res) => {
  const { name, type, size, date } = req.body;
  const { _id } = req.user;
  const file = req.file;
  console.log(name, type, size, date);
  console.log("req.file", req.file);
  // res.json(req.file);
  try {
    const createStorage = await StorageModel.create({
      userId: _id,
      fileName: name,
      fileType: type,
      fileSize: file.size,
      fileUploadDate: date,
      fileUrl: file.location,
      fileKey: file.key,
    });
    console.log("createaStorage", createStorage);
    if (createStorage) {
      UserModel.findById(_id)
        .then((user) => {
          if (!user) {
            throw new Error("User Not Found");
          }
          user.usedStorage += file.size;
          return user.save();
        })
        .then((updatedUser) => {
          if (updatedUser) {
            res.status(201).json({
              success: true,
              file: {
                _id: createStorage._id,
                fileName: name,
                fileType: type,
                fileSize: file.size,
                fileUploadDate: date,
                fileUrl: file.location,
              },
            });
          }
        });
    } else {
      throw new Error("Error uploading Files");
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      error: error.message,
    });
  }
};
