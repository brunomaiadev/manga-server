'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable("mangas_genres",{
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      manga_id:{
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName: "mangas"
          },
          key:"id"
        },
        allowNull: false
      },
      genre_id:{
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName: "genres"
          },
          key:"id"
        },
        allowNull: false
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable("mangas_genres")
  }
};
