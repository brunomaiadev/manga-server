const ChapterModel = require("../models/Chapters")

const getChapters = async (req, res)=>{
    try{
        let chapters = await ChapterModel.findAll()
        res.json(chapters)
    }
    catch(err){
        res.json(err)
    }
}

const getChapter = async (req, res)=>{
    try{
        let chapter = await ChapterModel.findByPk(req.params.id)
        res.json(chapter) 
    }
    catch(err){
        res.json(err)
    }
}

const createChapter = async (req, res)=>{
    try{
        let chapter = await ChapterModel.create(req.body)
        res.json(chapter)
    }
    catch(err){
        res.json(err)
    }
}

const updateChapter = async (req, res)=>{
    try{
        let chapter = await ChapterModel.findByPk(req.params.id)
        let chapterUpdate = await chapter.set(req.body)
        res.json(chapterUpdate)
    }
    catch(err){
        res.json(err)
    } 
}

module.exports = {
    getChapters,
    getChapter,
    createChapter,
    updateChapter
}