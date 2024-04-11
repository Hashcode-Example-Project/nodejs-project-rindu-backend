const dotenv = require('dotenv').config().parsed;

module.exports ={
  "development": {
    "username": dotenv.DB_USER,
    "password": dotenv.DB_PASSWORD,
    "database": dotenv.DB_NAME,
    "host": dotenv.DB_HOST,
    "dialect": "postgres",
    dialectOptions: {
      ssl: {
          require: true,
          // Other SSL options if needed
      }
    }
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
