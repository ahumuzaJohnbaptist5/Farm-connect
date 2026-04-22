const UserModel = require("../models/user.model");

async function register(payload) {
  if (!payload.phoneNumber || !payload.password) {
    throw new Error("Phone number and password are required");
  }

  return UserModel.create(payload);
}

async function login(payload) {
  const user = await UserModel.findByPhone(payload.phoneNumber);

  if (!user || !payload.password) {
    throw new Error("Invalid credentials");
  }

  return `mock-jwt-token-${user.id}`;
}

module.exports = {
  register,
  login
};
