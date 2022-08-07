'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable("mangas_scans",{
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
            tableName:"mangas"
          },
          key:"id"
        },
        allowNull: false
      },
      scans_id:{
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:"scans"
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
    
  }
};
