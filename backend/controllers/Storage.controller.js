const storageModel = require("../models/Storage.models");
const StorageModel = require("../models/Storage.models");
const s3 = require("../utils/aws/s3.util");
const { DeleteObjectCommand } = require("@aws-sdk/client-s3");

exports.allFiles = async (req, res) => {
  const { _id } = req.user;
  const allFiles = await StorageModel.find({ userId: _id })
    .select("fileName fileType fileSize fileUploadDate fileUrl")
    .exec();
  //   console.log(allFiles);
  res.status(201).json({ success: true, files: allFiles });
};

exports.deleteFile = async (req, res) => {
  const { _id } = req.user;
  const { fileID } = req.params;

  const foundFile = await StorageModel.findOne({
    _id: fileID,
    userId: _id,
  }).exec();
  const KeyOfFile = foundFile.fileKey;
  if (foundFile) {
    const command = new DeleteObjectCommand({
      Bucket: process.env.AWS_BUCKET,
      Key: KeyOfFile,
      VersionId: undefined,
    });
    try {
      const deleteResponse = await storageModel.deleteOne({ _id: fileID });
      // const response = await s3.send(command);
      if (deleteResponse)
        res
          .status(201)
          .json({ success: true, message: "File Delete Succefully" });
    } catch (error) {
      console.log(error);
    }
  } else
    res.status(501).json({ success: false, message: "File Deletion Failed" });
};
