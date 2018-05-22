const Sequelize = require('sequelize')

module.exports = () => {
  return {
    deletedAt: {
      type: Sequelize.DATE,
      allowNull: true
    }
  }
}
