const ScanModel = require("../models/Scans")

const getScans = async (req, res) => {
    try{
        let scans = await ScanModel.findAll()
        res.json(scans)
    }
    catch(err){
        res.json(err)
    }
}

const getScan = async (req, res) => {
    try{
        let scan = await ScanModel.findByPk(req.params.id)
        res.json(scan)
    }
    catch(err){
        res.json(err)
    }
}

const createScan = async (req, res) => {
    try{
        let scan = await ScanModel.create(req.body)
        res.json(scan)
    }
    catch(err){
        res.json(err)
    }
}

const updateScan = async (req, res) => {
    try{
        let scan = await ScanModel.findByPk(req.params.id)
        let scanUpdated = await scan.set(req.body)
        res.json(scanUpdated)
    }
    catch(err){
        res.json(err)
    }
}

module.exports = {
    getScans,
    getScan,
    createScan,
    updateScan
}