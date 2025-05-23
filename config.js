// Import sequelize
const { Sequelize } = require("sequelize");

const HOST = process.env.DB_HOST;
const DATABASE = process.env.DATABASE;
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const PORT = 5432;

// Use sequelize to make a connection to the database
const sequelize = new Sequelize(
  "postgresql://sharegh:jDZD7xUrFSLbTKyqZUdQJ7iUBjunrIqM@dpg-d0ns6vidbo4c73a7jpbg-a/organization_f5pk",
  {
    dialect: "postgres",
  }
);

// Export the sequelize object
module.exports = sequelize;
