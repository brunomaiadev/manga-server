const Sequelize = require("sequelize")

class Genres extends Sequelize.Model{
    static init(sequelize){
        super.init({
            name: {
                type: Sequelize.STRING,
                allowNull:true,
                validate:{
                    notEmpty: true
                }
            },
            description: {
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
        this.belongsToMany(models.Mangas,{
            through:"mangas_genres",
            foreignKey:"genre_id"
        })
        return this
    }
}

module.exports = Genres