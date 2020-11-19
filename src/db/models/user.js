const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const { env } = require("../../helper/config");
// const JwtSecretKey = require("config").get("jwt_secret_key");

const requiredString = {
  type: String,
  required: true,
  min: 5,
  max: 255,
};

const userSchema = new mongoose.Schema({
  name: { ...requiredString, max: 50 },

  email: {
    ...requiredString,
    unique: true,
  },
  password: requiredString,
  dateRegistered: {
    type: Number,
    default: Date.now(),
  },
  image: String,
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

userSchema.methods.getAuthToken = function () {
  return jwt.sign(
    { _id: this._id, isAdmin: this.isAdmin },
    env("jwt_secret_key")
  );
};

userSchema.static.genJwtToken = (payload) =>
  jwt.sign(payload, env("jwt_secret_key"));

const User = mongoose.model("user", userSchema);

const validateUser = (user) => {
  const schema = Joi.object({
    name: Joi.string().max(50).min(6).required(),
    email: Joi.string().max(255).required(),
    password: Joi.string().max(50).min(6),
  });

  return schema.validate(user);
};

module.exports = {
  userSchema,
  User,
  validateUser,
};
