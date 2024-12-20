// connection.js
const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

try {
  if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
  } else {
    sequelize = new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
      }
    );
  }
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = sequelize;
