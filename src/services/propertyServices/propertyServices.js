import sequelize from '../../sequelize'

const { property } = sequelize.models

class PropertyServices {
  fetchProperties = ({ transaction, id }) => {
    return property
      .findAll({
        transaction
      })
  }
}
