const authService = require("../services/auth.service");
const otpService = require("../services/otp.service");

async function registerUser(req, res) {
  try {
    const user = await authService.register(req.body);
    await otpService.sendOtp(user.phoneNumber);
    res.status(201).json({ message: "User registered. OTP sent.", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function loginUser(req, res) {
  try {
    const token = await authService.login(req.body);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}

async function verifyOtp(req, res) {
  try {
    const result = await otpService.verifyOtp(req.body.phoneNumber, req.body.otpCode);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  registerUser,
  loginUser,
  verifyOtp
};
