const asyncWrapper = require("../middlewares/async");
const bcrypt = require("bcrypt");
const { getUserFormDB } = require("../db/api/users");

const signIn = asyncWrapper(async (req, res) => {
  const { email, password } = req.body;

  const [user] = await getUserFormDB({ email });

  if (!user)
    throw new Error("AuthenticationError:Incorrect Email-Password combination");

  const match = await bcrypt.compare(password, user.password);
  if (!match)
    throw new Error("AuthenticationError:Incorrect Email-Password combination");

  const token = user.getAuthToken();
  res.header("x-auth-token", token);
  res.send(token);
});

module.exports = { signIn };
