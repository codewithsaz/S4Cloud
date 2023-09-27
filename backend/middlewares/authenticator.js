const UserModel = require("../models/User.model");
const saltRounds = Number(process.env.SALT_ROUNDS);
const jwt = require("jsonwebtoken");
exports.authenticate = async (req, res, next) => {
  try {
    // console.log(req.cookies);
    const token = req.cookies.token;
    const userID = jwt.verify(token, process.env.SECRET_KEY).userId;
    const user = await UserModel.findOne({ _id: userID }).exec();

    req.user = user;
    next();
  } catch (err) {
    console.log(err);
    return res
      .status(401)
      .json({ success: false, message: "Your not authorized" });
  }
};
