import sequelize from '../../sequelize'
import propertyServices from '../../services/propertyServices'

class PropertyControllers {
  fetchProperties = () => {
    return sequelize.transaction(transaction => {
      return propertyServices
        .fetchProperties({ transaction })
        .then(properties => {
          return properties
        })
    })
  }
}

export default new PropertyControllers()
