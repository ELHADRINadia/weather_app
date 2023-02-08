const express = require("express");
const router = express();
const {
  register,
  login,
} = require("../Controllers/authController");
const { protect } = require("../middlewares/authMiddleware");

router.post("/register", register);
router.post("/login", login);

module.exports = router;
