// Import sequelize
const { Sequelize } = require("sequelize");

const DATABASE = process.env.DATABASE;
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const PORT = 5432; // Default PostgreSQL port

// Use sequelize to make a connection to the database
const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
  host: "localhost",
  dialect: "postgres",
  port: PORT,
});

// Export the sequelize object
module.exports = sequelize;
