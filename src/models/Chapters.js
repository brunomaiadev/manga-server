const Sequelize = require("sequelize")

class Chapters extends Sequelize.Model{
    static init(sequelize){
        super.init({
            name:{
                type: Sequelize.STRING,
                allowNull:true,
                validate:{
                    notEmpty: true
                }
            },
            number:{
                type: Sequelize.INTEGER,
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
}
module.exports = Chapters