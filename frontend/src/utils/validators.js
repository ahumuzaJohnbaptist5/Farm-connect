export function isValidUgandanPhone(phoneNumber) {
  return /^(\+256|0)7\d{8}$/.test(phoneNumber);
}
