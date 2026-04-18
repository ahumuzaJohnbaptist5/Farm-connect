const rateLimit = require("express-rate-limit");

const authRateLimiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests. Please try again later." }
});

module.exports = {
  authRateLimiter
};
