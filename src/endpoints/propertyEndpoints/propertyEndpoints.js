import propertyControllers from '../../controllers/propertyControllers'

class PropertyEndpoints {
  fetchProperties = (req, res) => {
    return propertyControllers
      .fetchProperties()
      .then(response => {
        const properties = response.map(property => property.toJSON())
        res.json(properties)
      })
      .catch(error => {
        res.status(400).send(error)
      })
  }
}

export default new PropertyEndpoints()
