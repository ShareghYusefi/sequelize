const express = require("express");
// get sequelize connection from config file
const sequelize = require("./config");
// import the department routes
const departmentRoutes = require("./routes/department");
const app = express();

// use the department routes
app.use(departmentRoutes);

// testing database connection (asyncronous operation)
sequelize
  .sync() // sync creates the table if it does not exist in the database
  .then(() => {
    console.log("connection has been established successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("listening to port 3000");
});
