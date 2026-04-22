const express = require("express");

const businessController = require("../controllers/business.controller");
const { authenticateRequest } = require("../middleware/auth.middleware");

const router = express.Router();

router.get("/providers", businessController.getNearbyProviders);
router.get("/records/:userId", authenticateRequest, businessController.getUserRecords);

module.exports = router;
