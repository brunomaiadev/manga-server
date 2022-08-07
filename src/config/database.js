require("dotenv").config()
module.exports = {
    "username": process.env.DATABASE_USER,
    "password": process.env.DATABASE_PASS,
    "database": process.env.DATABASE_NAME,
    "host": process.env.DATABASE_HOST,
    "dialect": "postgres",
    "operatorsAliases":false,
    "define":{
      "timestamps":true,
      "underscored":true,
      "underscoredAll":true
    }
  }
