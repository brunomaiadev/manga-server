const AuthorModel = require("../models/Authors")

const getAuthors = async (req, res)=>{
    try{
        const author = await AuthorModel.findAll()
        res.json(author)
    }
    catch(err){
        res.json(err)
    }
}

const getAuthor = async (req, res)=>{
    try{
        const author = await AuthorModel.findByPk(req.params.id)
        res.json(author)
    }
    catch(err){
        res.json(err)
    }
}

const createAuthor = async (req, res)=>{
    try{
        const author = await AuthorModel.create(req.body)
        res.json(author)
    }
    catch(err){
        res.json(err)
    }
}

const updateAuthor = async (req, res)=>{
    try{
        let author = await AuthorModel.findByPk(req.params.id)
        let authorUpdate = await author.set(req.body)
        res.json(authorUpdate)
    }
    catch(err){
        res.json(err)
    }  
}


module.exports = {
    getAuthors,
    getAuthor,
    createAuthor,
    updateAuthor
}