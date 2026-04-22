const ProviderModel = require("../models/provider.model");
const ServiceRecordModel = require("../models/service-record.model");

async function findProviders(filters) {
  return ProviderModel.listByFilters(filters);
}

async function getUserRecords(userId) {
  return ServiceRecordModel.listByUser(userId);
}

module.exports = {
  findProviders,
  getUserRecords
};
