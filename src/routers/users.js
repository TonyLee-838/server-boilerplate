const express = require("express");
const auth = require("../middlewares/auth");
const router = express.Router();

const {
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/users.controller");

router.get("/:id", getUserById);
router.put("/:id", auth, updateUser);
router.delete("/:id", auth, deleteUser);

module.exports = router;
