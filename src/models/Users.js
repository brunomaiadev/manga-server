const Sequelize = require("sequelize")

class Users extends Sequelize.Model{
    static init(sequelize){
        super.init({
            name: {
                type: Sequelize.STRING,
                allowNull:true,
                validate:{
                    notEmpty: true
                }
            },
            user: {
                type: Sequelize.STRING,
                allowNull:true,
                validate:{
                    notEmpty: true
                }
            },
            password: {
                type: Sequelize.STRING,
                allowNull:true,
                validate:{
                    notEmpty: true
                }
            },
            description:{
                type: Sequelize.STRING,
                allowNull:true,
                validate:{
                    notEmpty: true
                }
            }
        },{sequelize})
        return this
    }
    static associate(models){
        this.hasMany(models.Mangas,{foreignKey:"user_id"})
        return this
    }
}

module.exports = Users