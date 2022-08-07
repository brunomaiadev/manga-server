'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable("chapters",{
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
        }
      },
      name:{
        type: Sequelize.STRING,
        allowNull: false
      },
      number:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      description:{
        type: Sequelize.STRING,
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
    return queryInterface.dropTable("chapters")
  }
};
