'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable("mangas",{
      id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      user_id:{
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:"users"
          },
          key:"id"
        }
      },
      name:{
        type: Sequelize.STRING,
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
    return queryInterface.dropTable("mangas")
  }
};
