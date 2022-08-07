const express = require("express")
const chapters = express.Router()

const ChapterController = require("../controllers/chapters")

chapters.get("/chapters", ChapterController.getChapters)
chapters.get("/chapters/:id", ChapterController.getChapter)
chapters.post("/chapters", ChapterController.createChapter)
chapters.put("/chapters/:id", ChapterController.updateChapter)

module.exports = chapters