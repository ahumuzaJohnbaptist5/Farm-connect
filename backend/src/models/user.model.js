class UserModel {
  static async create(userPayload) {
    return {
      id: Date.now(),
      ...userPayload
    };
  }

  static async findByPhone(phoneNumber) {
    return phoneNumber ? { id: 1, phoneNumber, passwordHash: "demo-hash" } : null;
  }
}

module.exports = UserModel;
