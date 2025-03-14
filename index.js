const express = require("express");
// get sequelize connection from config file
const sequelize = require("./config");
const app = express();

// testing database connection (asyncronous operation)
sequelize
  .authenticate()
  .then(() => {
    console.log("connection has been established successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("listening to port 3000");
});
