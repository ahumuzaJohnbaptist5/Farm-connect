const businessService = require("../services/business-logic.service");

async function getNearbyProviders(req, res) {
  const providers = await businessService.findProviders(req.query);
  res.json({ providers });
}

async function getUserRecords(req, res) {
  const records = await businessService.getUserRecords(req.params.userId);
  res.json({ records });
}

module.exports = {
  getNearbyProviders,
  getUserRecords
};
