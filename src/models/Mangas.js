const Sequelize = require("sequelize")

class Mangas extends Sequelize.Model{
    static init(sequelize){
        super.init({
            name:{
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
            },
            user_id:{
                type: Sequelize.INTEGER,
                allowNull:true,
                validate:{
                    notEmpty: true
                }
            }
        },{sequelize})
        return this
    }
    static associate(models){
        this.belongsTo(models.Users,{
            foreignKey:"user_id"
        })
        this.belongsToMany(models.Scans,{
            through:"mangas_scans",
            foreignKey:"manga_id"
        })
        this.belongsToMany(models.Authors,{
            through:"mangas_authors",
            foreignKey:"manga_id"
        })
        this.belongsToMany(models.Genres,{
            through:"mangas_genres",
            foreignKey:"manga_id"
        })
        return this
    }
}
module.exports = Mangas
