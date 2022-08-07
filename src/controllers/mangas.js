const MangaModel = require("../models/Mangas")

const getMangas = async (req, res)=>{
    try{
        let mangas = await MangaModel.findAll()
        res.json(mangas)
    }
    catch(err){
        res.json(err)
    }
}

const getManga = async (req, res)=>{
    try{
        const manga = await MangaModel.findByPk(req.params.id)
        res.json(manga)
    }
    catch(err){
        res.json(err)
    }
}

const createManga = async (req, res)=>{
    try{
        const manga = await MangaModel.create(req.body)
        res.json(manga)  
    }
    catch(err){
        res.json(err)
    }
}

const updateManga = async (req, res)=>{
    try{
        let manga = await MangaModel.findByPk(req.params.id)
        let mangaUpdate = await manga.set(req.body)
        res.json(mangaUpdate)
    }
    catch(err){
        res.json(err)
    }
}

const addGenres = async (req, res)=>{
    let manga
    let json = {}
    let status = 200
    try{
        manga = await MangaModel.findByPk(req.params.id)
        await manga.setGenres(req.body.genres)
        await manga.reload()
        json = manga
    }
    catch(err){
        json = err
    }
    res.status(status).json(json)
}

module.exports = {
    getMangas,
    getManga,
    createManga,
    updateManga,
    addGenres
}