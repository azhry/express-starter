'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('yayasan', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(300)
      },
      description: {
        type: Sequelize.TEXT
      },
      address: {
        type: Sequelize.TEXT
      },
      status: {
        type: Sequelize.ENUM,
        values: ['active', 'nonactive']
      },
      id_agama: {
        type: Sequelize.INTEGER,
        references: {
          model: 'agama',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      spin_phone_number: {
        type: Sequelize.STRING(14)
      },
      qris_image_url: {
        type: Sequelize.TEXT
      },
      priority: {
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        allowNull: false,
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('yayasan');
  }
};