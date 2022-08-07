const Sequelize = require("sequelize")

class Authors extends Sequelize.Model{
    static init(sequelize){
        super.init({
            name:{
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
            through:"mangas_authors",
            foreignKey:"author_id"
        })
        return this
    }
}

module.exports = Authors