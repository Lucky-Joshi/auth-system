const express = require("express");
const router = express.Router();
const { register, login, getUser } = require("../controllers/authController");

// @route   POST /api/auth/signup
router.post("/signup", register);

// @route   POST /api/auth/login
router.post("/login", login);

// @route   GET /api/auth/user (protected)
router.get("/user", getUser);

module.exports = router;
