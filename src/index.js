const express = require("express")
const users = require("./routes/users")
const genres = require("./routes/genres")
const authors = require("./routes/authors")
const mangas = require("./routes/mangas")
const chapters = require("./routes/chapters")
const scans = require("./routes/scans")

const routes = [users, genres, chapters, scans, mangas, chapters, authors]

const server = express()
server.use(express.json())

require("./database")

server.use("/api",routes)

server.listen(4646,()=>{
    console.log(routes)
})