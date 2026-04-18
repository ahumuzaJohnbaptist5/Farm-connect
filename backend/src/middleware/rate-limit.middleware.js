const WINDOW_MS = 60 * 1000;
const MAX_REQUESTS = 10;
const requestCounts = new Map();

function authRateLimiter(req, res, next) {
  const key = `${req.ip}:${req.path}`;
  const now = Date.now();
  const existing = requestCounts.get(key);

  if (!existing || now - existing.windowStart >= WINDOW_MS) {
    requestCounts.set(key, { count: 1, windowStart: now });
    return next();
  }

  if (existing.count >= MAX_REQUESTS) {
    return res.status(429).json({ error: "Too many requests. Please try again later." });
  }

  existing.count += 1;
  return next();
}

module.exports = {
  authRateLimiter
};
