require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
const db = require("./utils/database/database");

const UserModel = require("./models/User.model");
const StorageModel = require("./models/Storage.models");

const UserRoutes = require("./routes/User.Routes");
const UploadRoutes = require("../backend/routes/Upload.Routes");
const StorageRoutes = require("./routes/Storage.Routes");

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(UserRoutes);
app.use(UploadRoutes);
app.use(StorageRoutes);

app.use("/", (req, res) => {
  res.status(200).json("Everything working fine");
});

app.listen(8080, () => {
  console.log("Server listening at port 8080");
});
