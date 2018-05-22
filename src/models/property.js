import Sequelize from 'sequelize'
import _ from 'lodash'
import uuidv4 from 'uuid/v4'

const Property = {
  name: 'property',
  fields: {
    id: {
      type: Sequelize.UUID,
      defaultValue: () => uuidv4(),
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
  },
  options: {
    defaultScope: {
      where: {
        deletedAt: null
      }
    },
    timestamps: true,
    paranoid: true,
    tableName: 'properties'
  },
  relationships: ({ property }) => {
    property.prototype.toJSON = () => {
      const privateAttributes = ['deletedAt', 'updatedAt']
      return _.omit(this.dataValues, privateAttributes)
    }
  }
}

export default Property
