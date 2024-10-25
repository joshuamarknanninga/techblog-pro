// config/connection.js
require('dotenv').config();
const { Sequelize } = require('sequelize');

let sequelize;

// Check if DATABASE_URL is set (production environment, e.g., Render)
if (process.env.DATABASE_URL) {
  // For Render and other platforms that provide a DATABASE_URL
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: {
        require: true, // Ensures SSL is used
        rejectUnauthorized: false, // Allows self-signed certificates
      },
    },
    logging: false, // Disable logging; set to console.log for debugging
  });
} else {
  // Local development configuration
  sequelize = new Sequelize(
    process.env.DB_NAME,      // Database name
    process.env.DB_USER,      // Database username
    process.env.DB_PASSWORD,  // Database password
    {
      host: process.env.DB_HOST || 'localhost',
      dialect: 'postgres',
      port: process.env.DB_PORT || 5432,
      logging: false, // Disable logging; set to console.log for debugging
    }
  );
}

module.exports = sequelize;
