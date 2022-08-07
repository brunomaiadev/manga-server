const express = require("express")
const mangas = express.Router()
const MangaController = require("../controllers/mangas")

mangas.get("/mangas", MangaController.getMangas)
mangas.get("/mangas/:id", MangaController.getManga)
mangas.post("/mangas", MangaController.createManga)
mangas.post("/mangas/:id/genres", MangaController.addGenres)
mangas.put("/mangas/:id", MangaController.createManga)

module.exports = mangas