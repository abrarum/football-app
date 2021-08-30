const express = require("express");

const FootballCtrl = require("../controllers/football-ctrl");

const router = express.Router();

router.get("/get-info", FootballCtrl.getInfo);
router.get("/get-stats", FootballCtrl.getStats);

module.exports = router;
