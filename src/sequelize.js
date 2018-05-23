require('dotenv').config()
import Sequelize from 'sequelize'
import propertyModel from './models/property'



const modelsList = [
  propertyModel
]

const createModels = sequelizeInstance => {
  const models = modelsList.reduce((acc, model) => {
    return {
      ...acc,
      [model.name]: sequelizeInstance.define(model.name, model.fields, model.options)
    }
  }, {})
  modelsList.forEach(model => {
    model.relationships(models)
  })
  return models
}

const sequelizeInstance = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: false
  }
})

const models = createModels(sequelizeInstance)
export { models }
export default sequelizeInstance
