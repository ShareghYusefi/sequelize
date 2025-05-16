// Import sequelize
const { Sequelize } = require("sequelize");
const { PostgresDialect } = require("@sequelize/postgres");

const HOST = process.env.DB_HOST;
const DATABASE = process.env.DATABASE;
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const PORT = 5432;

// Use sequelize to make a connection to the database
const sequelize = new Sequelize({
  dialect: PostgresDialect,
  database: DATABASE,
  user: USER,
  password: PASSWORD,
  host: HOST,
  port: PORT,
  ssl: true,
  clientMinMessages: "notice",
});

// Export the sequelize object
module.exports = sequelize;
