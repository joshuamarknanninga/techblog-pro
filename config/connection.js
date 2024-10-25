// config/connection.js

const Sequelize = require('sequelize');
require('dotenv').config();

// Determine if the environment is production
const isProduction = process.env.NODE_ENV === 'production';

const sequelize = new Sequelize(
  process.env.DB_NAME,      // Database name
  process.env.DB_USERNAME,  // Username
  process.env.DB_PASSWORD,  // Password
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',    // Specify PostgreSQL dialect
    port: process.env.DB_PORT || 5432, // Default PostgreSQL port
    dialectOptions: isProduction
      ? {
          ssl: {
            require: true,
            rejectUnauthorized: false, // Allow self-signed certificates
          },
        }
      : {},
    logging: false, // Disable logging; set to console.log to enable
  }
);

module.exports = sequelize;

