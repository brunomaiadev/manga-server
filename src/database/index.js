const Sequelize = require("sequelize")

const Users = require("../models/Users")
const Mangas = require("../models/Mangas")
const Genres = require("../models/Genres")
const Chapters = require("../models/Chapters")
const Authors = require("../models/Authors")
const Scans = require("../models/Scans")

const databaseConfig = require("../config/database")

const models = [Users,Mangas,Genres,Chapters, Authors, Scans]

class Database{
    constructor(){
        this.init()
    }
    init(){
        this.connection = new Sequelize(databaseConfig)
        models
        .map(model => model.init(this.connection))
        .map(model => model.associate && model.associate(this.connection.models))
    }
}

module.exports = new Database()