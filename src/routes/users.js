const express = require("express")
const users = express.Router()
const UserController = require("../controllers/users")


users.get("/users", UserController.getUsers)
users.get("/users/:id", UserController.getUser)
users.post("/users", UserController.createUser)
users.put("/users/:id", UserController.updateUser)

module.exports = users