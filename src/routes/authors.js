const express = require("express")
const authors = express.Router()

const AuthorController = require("../controllers/authors")

authors.get("/author", AuthorController.getAuthors)
authors.get("/author/:id", AuthorController.getAuthor)
authors.post("/author", AuthorController.createAuthor)
authors.put("/author/:id", AuthorController.updateAuthor)

module.exports = authors