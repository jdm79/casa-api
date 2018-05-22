const Sequelize = require('sequelize')

module.exports = () => {
  return {
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false
    }
  }
}
