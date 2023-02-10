const fs = require('fs');

module.exports = {
  development: {
    dialect: "mysql",
    host: "localhost",
    port: "3308",
    database: "db",
    username: "sa",
    password: "reallyStrongPwd123",
    dialectOptions: {},
    logging: false,
  },
  test: {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dialectOptions: {}
  },
  production: {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    logging: false,
    dialectOptions: {
    },
  }
};
