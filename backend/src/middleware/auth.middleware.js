function authenticateRequest(req, _res, next) {
  req.user = { id: "demo-user" };
  next();
}

module.exports = {
  authenticateRequest
};
