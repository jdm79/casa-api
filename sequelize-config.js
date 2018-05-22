require('dotenv').config()

module.exports = {
  development: {
    dialect: 'postgres',
    dialectOptions: {
      ssl: false
    },
    use_env_variable: 'DATABASE_URL'
  }
}
