const UserModel = require("../models/Users")

const getUsers = async (req, res)=>{
    try{
        let users = await UserModel.findAll()
        res.json(users)
    }
    catch(err){
        res.json(err)
    }
}

const getUser = async (req, res)=>{
    try{
        res.json(await UserModel.findByPk(req.params.id))
    }
    catch(err){
        res.json({
            status: "error",
            message: "Isso não é um ID"
        })
    }
}

const createUser = async (req, res)=>{
    try{
        let user = await UserModel.create({
            name: req.body.name,
            user: req.body.user,
            password: req.body.password,
            description: req.body.description
        })
        res.json(user)
    }
    catch(err){
        res.json(err)
    }
}

const updateUser = async (req, res)=>{
    try{
        let user = await UserModel.findByPk(req.params.id)
        let userUpdated = await user.set(req.body)
        res.json(userUpdated)
    }
    catch(err){
        res.json(err)
    }
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser
}