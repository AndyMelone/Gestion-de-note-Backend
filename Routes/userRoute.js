const express = require("express");
const {
  createNewuser,
  authUserController,
} = require("../Controllers/userController");
const userRoute = express.Router();

userRoute.post("/createUser", createNewuser);
userRoute.post("/connectUser", authUserController);

module.exports = userRoute;
