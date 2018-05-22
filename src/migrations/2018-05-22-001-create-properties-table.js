const createTableColumns = require('./util/createTableColumns')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('properties', createTableColumns({
      id: {
        type: Sequelize.UUID,
        unique: true,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false
      },
      region: {
        type: Sequelize.STRING,
        allowNull: false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      bedrooms: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      images: {
        type: Sequelize.JSONB,
        allowNull: false
      }
    }, { timestamps: true, paranoid: true }))
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('properties')
  }
}
