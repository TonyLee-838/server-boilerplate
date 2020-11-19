const register = require("../routers/register");
const auth = require("../routers/auth");
const users = require("../routers/users");
const error = require("../middlewares/error");

module.exports = function (app) {
  app.use("/api/register", register);
  app.use("/api/users", users);
  app.use("/api/auth", auth);
  app.use(error);
};
