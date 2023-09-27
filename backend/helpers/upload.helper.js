const multerS3 = require("multer-s3");
const multer = require("multer");
const path = require("path");

const s3 = require("../utils/aws/s3.util");
const limits = {
  fileSize: 3 * 1024 * 1024, // 1 MB (adjust this as needed)
};

const upload = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: process.env.AWS_BUCKET,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: (req, file, cb) => {
      const userID = req.user._id;
      const fileName = `${Date.now()}_${Math.round(Math.random() * 1e9)}`;
      const folderPath = `s4cloud_${userID}`; // Dynamic folder name
      cb(null, `${folderPath}/${fileName}${path.extname(file.originalname)}`);
    },
  }),
  limits: limits,
});

module.exports = upload;
