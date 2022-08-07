'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable("mangas_authors",{
      id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      manga_id:{
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:"mangas"
          },
          key:"id"
        },
        allowNull: false
      },
      author_id:{
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:"authors"
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
    return queryInterface.dropTable("mangas_authors")
  }
};
