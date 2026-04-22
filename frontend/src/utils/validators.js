export function isValidUgandanPhone(phoneNumber) {
  return /^(\+2567\d{8}|07\d{8})$/.test(phoneNumber);
}
