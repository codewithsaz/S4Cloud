const UserModel = require("../models/User.model");
const userService = require("../services/User.service");

exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const encrptedPass = await userService.encrptyPassword(password);
    const createUser = await UserModel.create({
      name: name,
      email: email,
      password: encrptedPass,
    });

    if (createUser)
      res.status(201).json({ success: true, message: "User Created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "User Creation Failed" });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email: email }).exec();
    if (user) {
      const verifyUser = await userService.verifyPassword(
        password,
        user.password
      );
      if (verifyUser) {
        console.log(user._id, user.name);
        try {
          const token = await userService.generateToken(
            user._id,
            user.name,
            user.maxStorage
          );
          // res.cookie("jwt", token, {
          //   httpOnly: true, // This makes the cookie HttpOnly
          //   sameSite: "strict", // You can adjust SameSite as needed
          //   maxAge: 7 * 24 * 60 * 60 * 1000, // Expiration time in milliseconds
          // });
          res
            .status(201)
            .cookie("token", token, {
              httpOnly: true, // This makes the cookie HttpOnly
              secure: true,
              maxAge: 7 * 24 * 60 * 60 * 1000, // Expiration time in milliseconds
              // sameSite: "strict", // You can adjust SameSite as needed
            })
            .json({
              success: true,
              user: {
                name: user.name,
                usedStorage: user.usedStorage,
                maxStorage: user.maxStorage,
              },
            });
        } catch (error) {
          throw new Error("Token Generation Failed");
        }
      } else {
        throw new Error("Wrong credentials");
      }
    } else throw new Error("User not found");
  } catch (error) {
    res.status(401).json({ success: false, error: error.message });
  }
};

exports.verifyUser = async (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    return res.status(401).send("Unauthorized");
  }
  try {
    // Verify and decode the JWT token
    const user = jwt.verify(token, "your-secret-key");
    // User is authenticated, you can use 'user' object
    next();
  } catch (error) {
    res.status(401).send("Unauthorized");
  }
};

exports.getUserDetails = async (req, res) => {
  const { email, password } = req.user;

  try {
    const user = await UserModel.findOne({ email: email }).exec();
    if (user) {
      res.status(201).json({
        success: true,
        user: {
          name: user.name,
          usedStorage: user.usedStorage,
          maxStorage: user.maxStorage,
        },
      });
    }
  } catch (error) {}
};
