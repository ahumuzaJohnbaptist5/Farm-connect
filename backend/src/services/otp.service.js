const notificationService = require("./notification.service");

async function sendOtp(phoneNumber) {
  if (!phoneNumber) {
    throw new Error("Phone number is required");
  }

  const code = "123456";
  await notificationService.sendSms(phoneNumber, `Your Farm Connect OTP is ${code}`);

  return { message: "OTP sent" };
}

async function verifyOtp(phoneNumber, otpCode) {
  if (!phoneNumber || !otpCode) {
    throw new Error("Phone number and OTP code are required");
  }

  return { verified: otpCode === "123456" };
}

module.exports = {
  sendOtp,
  verifyOtp
};
