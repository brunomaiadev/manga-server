const express = require("express")
const scans = express.Router()

const ScanController = require("../controllers/scans")

scans.get("/scans", ScanController.getScans)
scans.get("/scans/:id", ScanController.getScan)
scans.post("/scans", ScanController.createScan)
scans.put("/scans/:id", ScanController.updateScan)

module.exports = scans