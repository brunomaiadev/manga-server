const express = require("express")
const genres = express.Router()
const GenreController = require("../controllers/genres")

genres.get("/genres", GenreController.getGenres)
genres.get("/genres/:id", GenreController.getGenre)
genres.post("/genres", GenreController.createGenre)
genres.put("/genres/:id", GenreController.updateGenre)

module.exports = genres