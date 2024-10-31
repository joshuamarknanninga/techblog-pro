const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,      // Database name
  process.env.DB_USERNAME,  // Username
  process.env.DB_PASSWORD,  // Password
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',    // Change this to 'mysql' if using MySQL
    port: process.env.DB_PORT || 5432, // Default PostgreSQL port (3306 for MySQL)
    dialectOptions: isProduction
      ? {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        }
      : {},
    logging: false,
  }
);

module.exports = sequelize;
