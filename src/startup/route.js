const express = require("express");
const users = require("./routers/users");
const auth = require("./routers/auth");
const error = require("./middlewares/error");
const register = require("../routes/register");
const auth = require("../routes/auth");
const error = require("../middlewares/error");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/register", register);
  app.use("/api/users", users);
  app.use("/api/auth", auth);
  app.use(error);
};
