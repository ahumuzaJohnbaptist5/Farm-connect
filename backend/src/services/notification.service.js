async function sendSms(phoneNumber, message) {
  if (!phoneNumber || !message) {
    throw new Error("Phone number and message are required");
  }

  return {
    provider: "africas-talking",
    status: "queued",
    phoneNumber,
    message
  };
}

module.exports = {
  sendSms
};
