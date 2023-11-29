const express = require("express");
const noteRoute = express.Router();

noteRoute.get("/", (req, res) => {
  res.send("note is listen");
});

module.exports = noteRoute;
