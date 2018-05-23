import sequelize from '../../sequelize'

const { property } = sequelize.models

class PropertyServices {
  fetchProperties = ({ transaction, id }) => {
    return property
      .findAll({
        transaction
      })
      .then(properties => {
        return properties
      })
      .catch(error => {
        console.log({error})
        throw error
      })
  }
}

export default new PropertyServices()
