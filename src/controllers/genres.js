const GenreModel = require("../models/Genres")

const getGenres = async (req, res)=>{
    try{
        let genres = await GenreModel.findAll()
        res.json(genres)
    }
    catch(err){
        res.json(err)
    }
}

const getGenre = async (req, res)=>{
    try{
        let genre = await GenreModel.findByPk(req.params.id)
        res.json(genre)
    }
    catch(err){
        res.json(err)
    }
}

const createGenre = async (req, res)=>{
    try{
        let genre = await GenreModel.create(req.body)
        res.json(genre)
    }
    catch(err){
        res.json(err)
    }
}

const updateGenre = async (req, res)=>{
    try{
        let genre = await GenreModel.findByPk(req.params.id)
        let genreUpdate = await genre.set(req.body)
        res.json(genreUpdate)
    }
    catch(err){
        res.json(err)
    }
}

module.exports = {
    getGenres,
    getGenre,
    createGenre,
    updateGenre
}