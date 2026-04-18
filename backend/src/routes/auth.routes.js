const express = require("express");

const authController = require("../controllers/auth.controller");
const { authRateLimiter } = require("../middleware/rate-limit.middleware");

const router = express.Router();

router.post("/register", authRateLimiter, authController.registerUser);
router.post("/login", authRateLimiter, authController.loginUser);
router.post("/verify-otp", authRateLimiter, authController.verifyOtp);

module.exports = router;
